import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FloatingButton from '../utils/FloatingButton';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import mammoth from 'mammoth';
import WordDocViewer from '../components/sections/WordDocParser';




const InsightsPage: React.FC = () => {
  // get url parameters
  const { articleName } = useParams<{ articleName: string }>();
  const navigate = useNavigate();

  type Article = { path: string; title: string, url: string, image: string, metaDescription: string, metaKeywords: string };
  const [articles, setArticles] = useState<Article[]>([]);
  

  // ---------- MAIN INSIGHTS PAGE -------- //
  // FETCH and DISPLAY articles from JSON file
  useEffect(() => {
    fetch('/articles/articles.json')
      .then(res => res.json())
      .then(setArticles)
      .catch(err => {
        console.error("Failed to load articles:", err);
      });
  }, []);

  // find current article if in url
  const currArticle = articles.find(article => article.url === articleName);
  

  // Handle links
  const onSelect = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      {/* PAGE META-DATA */}
      {currArticle?.title && (
        <Helmet>
          <title>ReadyAI - {currArticle?.title}</title>
          <meta name="description" content={currArticle?.metaDescription} />
          <meta name="keywords" content={currArticle?.metaKeywords} />
        </Helmet>
      )}
      {!currArticle?.title && (
        <Helmet>
          <title>ReadyAI - Insights</title>
        </Helmet>
      )}

      <div className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark overflow-hidden">
        {/* Abstract background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20 pb-10 md:pt-24 md:pb-14">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block">Insights</span>
                <span className="block text-2xl mt-4 text-accent">Industry insights and trends</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-4xl text-gray-700 mb-40 mt-6 text-center tracking-widest">
            {!articleName && (<span>LATEST POSTS</span>)}
          </h2>

          {/* Main Article List */}
          {!articleName && (
            <ul className="text-xl mb-20">
              {articles.map((article, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-4 mb-20"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-40 h-20 object-cover rounded flex-shrink-0"
                    />
                    <div>
                      <button
                        className="text-blue-600 underline hover:text-blue-800 block text-left"
                        onClick={() => onSelect(article.url)}
                      >
                        {article.title}
                      </button>
                      <p className="text-gray-600 text-base mt-1">
                        {article.metaDescription}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
          )}



          
          {currArticle && (
            <>
            <WordDocViewer docPath={`/articles/${currArticle.url}.docx`} />
            <h2 className="text-4xl text-gray-700 mb-16 text-center">
                {currArticle.title}
              </h2>
              <div className="flex flex-col min-h-screen text-xl leading-loose tracking-widest">
                <img
                  src={currArticle.image}
                  alt="Shadow AI"
                  className="object-cover w-full md:w-full h-64 rounded-lg mx-auto mb-8 md:mb-20 flex-shrink-0"
                />
                
                {/* Parse and display article */}
                <WordDocViewer docPath={`/articles/${currArticle.path}.docx`} />
                
              </div>
            </>
          )}

          
        </div>
      </div>

      <FloatingButton url="https://devs.ai/signup?ref=sales%40readyai.dev" label="Explore Platform" />
    </div>
  );
};

export default InsightsPage;