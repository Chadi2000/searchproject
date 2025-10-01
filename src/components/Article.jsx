import React from "react";

function Article({ title, date, text }) {
  return (
    <div className="flex flex-col border-b border-gray-300 pb-4 mb-4">
      <div className="text-[24px] font-bold">{title}</div>
      <span className="mt-2 mb-4 font-light text-gray-500 text-[16px]">
        {date}
      </span>
      <span>{text}</span>
    </div>
  );
}

export default Article;
