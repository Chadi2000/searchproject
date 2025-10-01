import logo from './logo.svg';
import './App.css';
import Article from './components/Article';
import ArticleSideBar from './components/ArticleSideBar';
import { articles } from './articlesData';
import { useState } from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState(""); // search input
  const [articlesData, setArticlesData] = useState(articles);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(value) ||
        article.text.toLowerCase().includes(value)
    );

    setArticlesData(filtered);
  };

  function clearSearchFilter() {
    setSearchTerm("");
    setArticlesData(articles);
  }

  return (
    <div className="bg-gray-200 min-h-screen px-6 pt-8">
      <div className="flex gap-6">
        <div className="flex flex-col w-[70%]">
          <span className="text-[28px] font-extrabold">Search</span>
          <div className="relative w-full mt-12 mb-6">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={handleSearch}
              className=" p-2 pr-10 border border-gray-400 rounded-md w-full"
            />
            
            {searchTerm && (
              <button
                onClick={clearSearchFilter}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
              >
                ✕
              </button>
            )}
          </div>

          <span className='mb-12 capitalize'>
            {articlesData.length>0 ? (
              <span>
                <strong>{articlesData.length === 1 ? `${articlesData.length} post` : `${articlesData.length} posts`} </strong> Were Found.
              </span>
            ) : (
              <span>
                No post found.
              </span>
            )}
          </span>

          <div className="flex flex-col">
            {articlesData.length > 0 ? (
              articlesData.map((article, index) => (
                <Article
                  key={index}
                  title={article.title}
                  date={article.date}
                  text={article.text}
                />
              ))
            ) : (
              <span className="text-gray-500">No results found</span>
            )}
          </div>
        </div>

        <div className="w-[30%]">
          <ArticleSideBar />
        </div>
      </div>
    </div>
  );
  
}

export default App;
