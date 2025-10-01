import React from 'react'
import { FaTwitter } from 'react-icons/fa'

function ArticleSideBar() {
  return (
    <div className='flex flex-col border border-gray-400 px-4 py-4 rounded-md'>
        <div>
            <strong>bitsofcode</strong>.Articles on FrontEnd Development. All articles are written by <span className='underline'>Ire Aderinokun</span> FrontEnd Developer and User Interface Designer
        </div>
        <div className="flex items-center space-x-2 mt-2">
            <a
                href="https://twitter.com/ireaderinokun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-[#1DA1F2] text-white px-1 rounded-md shadow hover:bg-[#0d8ddb] transition"
            >
                <FaTwitter className="mr-2" />
                Follow @ireaderinokun
            </a>

            <span className="border border-gray-300 px-1 rounded-md text-sm bg-white shadow">
                19.1K followers
            </span>
        </div>
    </div>
  )
}

export default ArticleSideBar