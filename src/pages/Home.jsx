import React, { useEffect, useState } from 'react'
import postservice from '../appwrite/post.js'
import {Container, PostCard} from '../components/index.js'
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className='text-3xl font font-extrabold leading-tight mb-4 text-white lg:text-7xl'>
            Welcome to <span className='text-[#ff0]'>BanterBoard</span> 
        </h1>
        <h1 className="text-xl font-extrabold text-white leading-tight mb-8 lg:text-4xl">
        Your Digital Canvas for Expression
        </h1>

        <p className="text-lg text-white leading-relaxed">
        Step into a space where your voice matters, and every story counts. 
        </p>
        <p className="text-lg text-white leading-relaxed mb-8">
        From hot takes to heartfelt reflections, BanterBoard is the home for creators, thinkers, and storytellers ready to make waves. 
        </p>

        <div className="flex justify-center space-x-6">
          <Link to="/all-posts" className="px-6 py-3 bg-black text-white font-bold rounded-full border-2 border-[#ff0]">
            Explore Now
          </Link>

          <Link to="/add-post" className="px-6 py-3 bg-[#ff0] text-black font-bold rounded-full">
            Start Writing
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Home
