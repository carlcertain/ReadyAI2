import React from "react";

const BlogPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Our Blog
          </h1>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Placeholder text as specified in requirements */}
        <p className="text-center text-gray-500 italic">
          Blog content coming soon.
        </p>
      </div>
    </div>
  );
};

export default BlogPage;