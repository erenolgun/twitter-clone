/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { LikeIcon, ReplyIcon, ReTweetIcon, ShareIcon } from '../icons/Icon'

const FeedItem = ({
  avatar,
  content,
  displayName,
  username,
  timestamp,
  image
}) => {
  return (
    <article className="flex space-x-4 border-b border-gray-extraLight px-4 py-3 cursor-pointer hover:bg-gray-50 transform transition-colors duration-200">
      <img className="w-11 h-11 rounded-full" src={avatar} alt="user-photo" />
      <div>
        <div className="flex items-center text-sm">
          <h4 className="font-bold"> {displayName} </h4>
          <span className="text-gray-dark ml-2"> {username} </span>
          <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />
          <span className="text-gray-dark ">
            {timestamp?.toDate().toLocaleTimeString('tr-TR')}
          </span>
        </div>
        <p className="mt-2 text-gray-900 text-sm">{content}</p>
        {image && <img src={image} className="my-2 rounded-xl max-h-96" />}
        <ul className="-ml-2 mt-3 flex justify-between w-96">
          <li className="group flex items-center space-x-2 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light transform transition-colors duration-150">
              <ReplyIcon className="w-5 h-5 group-hover:text-primary-base" />
            </div>
            <span className="group-hover:text-primary-base">967</span>
          </li>
          <li className="group flex items-center space-x-2 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-100 transform transition-colors duration-150">
              <ReTweetIcon className="w-5 h-5 group-hover:text-green-500" />
            </div>
            <span className="group-hover:text-green-500">6.2 B</span>
          </li>
          <li className="group flex items-center space-x-2 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-100 transform transition-colors duration-150">
              <LikeIcon className="w-5 h-5 group-hover:text-pink-500" />
            </div>
            <span className="group-hover:text-pink-500">24.3 B</span>
          </li>
          <li className="group flex items-center space-x-2 text-gray-dark text-sm">
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light transform transition-colors duration-15  0">
              <ShareIcon className="w-5 h-5 group-hover:text-primary-base" />
            </div>
          </li>
        </ul>
      </div>
    </article>
  )
}

export default FeedItem
