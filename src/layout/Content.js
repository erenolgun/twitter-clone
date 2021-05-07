/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react'
import Divider from '../components/Divider'
import TweetBox from '../components/TweetBox'
import { PopulerIcon } from '../icons/Icon'

import db from '../firebase'
import FeedList from '../components/FeedList'

const Content = () => {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    db.collection('feed')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      )
  }, [])

  return (
    <main className="flex-1 flex flex-col border-l border-r border-gray-extraLight">
      <header className="flex justify-between items-center p-4 border-b border-gray-extraLight bg-white sticky top-0 z-10">
        <span className="font-bold text-xl text-gray-900">Latest Tweets</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex space-x-4 px-4 py-3">
        <img
          className="w-11 h-11 rounded-full mr-4"
          src="https://pbs.twimg.com/profile_images/1364893929250947073/gswvInyH_400x400.jpg"
          alt="user-photo"
        />
        <TweetBox />
      </div>
      <Divider />
      <FeedList tweets={tweets} />
    </main>
  )
}

export default Content
