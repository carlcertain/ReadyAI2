import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { SOLUTIONS, INDUSTRIES } from '../utils/constants';

interface SearchResult {
  type: 'solution' | 'industry';
  title: string;
  description: string;
  path: string;
}

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    document.title = `Search Results - ReadyAI`;

    const searchResults: SearchResult[] = [
      ...SOLUTIONS.map(solution => ({
        type: 'solution' as const,
        title: solution.title,
        description: solution.description,
        path: `/solutions/${solution.id}`,
      })),
      ...INDUSTRIES.map(industry => ({
        type: 'industry' as const,
        title: industry.name,
        description: industry.description,
        path: `/industry/${industry.id}`,
      })),
    ].filter(result => 
      result.title.toLowerCase().includes(query) ||
      result.description.toLowerCase().includes(query)
    );

    setResults(searchResults);
  }, [query]);

  return (
    <div className="pt-20">
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Search className="h-8 w-8 text-accent" />
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
              Search Results
            </h1>
          </div>
          <p className="mt-4 text-xl text-gray-100">
            {results.length} {results.length === 1 ? 'result' : 'results'} for "{query}"
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {results.length > 0 ? (
          <div className="space-y-8">
            {results.map((result, index) => (
              <Link
                key={index}
                to={result.path}
                className="block bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent mb-3">
                      {result.type === 'solution' ? 'Solution' : 'Industry'}
                    </span>
                    <h2 className="text-xl font-semibold text-primary group-hover:text-accent mb-2">
                      {result.title}
                    </h2>
                    <p className="text-gray-600">
                      {result.description}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-accent flex-shrink-0 mt-2" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">No results found</h2>
            <p className="text-gray-600">
              Try adjusting your search terms or browse our solutions and industries directly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;