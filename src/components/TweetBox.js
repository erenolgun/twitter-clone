import React, { useState } from 'react'
import {
  EmojiIcon,
  GIFIcon,
  ImageIcon,
  PollIcon,
  ScheduleIcon,
  WorldIcon
} from '../icons/Icon'

import db from '../firebase'
import firebase from 'firebase'

const TweetBox = () => {
  const [content, setContent] = useState('')
  const [focus, setFocus] = useState(false)

  const sendTweet = () => {
    if (content !== '') {
      db.collection('feed').add({
        displayName: 'Eren Olgun',
        username: '@erenolgun',
        content,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        avatar:
          'https://pbs.twimg.com/profile_images/1364893929250947073/gswvInyH_400x400.jpg',
        image: ''
      })
    }
    setContent('')
  }
  console.log(focus)
  return (
    <div className="flex-1 flex-col flex mt-2 px-2">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
        placeholder="What's happening?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        onFocus={(e) => setFocus(true)}
      />
      {focus && (
        <div className="-mt-5 mb-3 -ml-1.5 flex items-center text-xs text-primary-base w-40 px-1 pl-1.5 h-8 rounded-full font-bold hover:bg-primary-light transform transition-colors duration-200 cursor-pointer">
          <WorldIcon className="w-5 h-5 mr-2" />
          <span>Everyone can reply</span>
        </div>
      )}
      <div className="flex items-center justify-between border-t border-gray-extraLight pt-3">
        <div className="flex -ml-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary-light transform transition-colors duration-200 cursor-pointer">
            <ImageIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary-light transform transition-colors duration-200 cursor-pointer">
            <GIFIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary-light transform transition-colors duration-200 cursor-pointer">
            <PollIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary-light transform transition-colors duration-200 cursor-pointer">
            <EmojiIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary-light transform transition-colors duration-200 cursor-pointer">
            <ScheduleIcon className="w-6 h-6 text-primary-base" />
          </div>
        </div>
        <button
          className="bg-primary-base text-white rounded-full px-4 py-2 font-medium focus:outline-none hover:bg-primary-dark transform transition-colors duration-200"
          onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  )
}

export default TweetBox
