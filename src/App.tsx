import React, { useState } from 'react';

import logo from './static/images/logo.png';
import PostForm from './components/PostForm';

function App() {
  const [isOption, setIsOption] = useState<boolean>(false);
 
  return (
    <div onClick={() => setIsOption(!isOption)} className='bg-cover font-rubik relative bg-center h-[1054px] md:h-screen w-full md:bg-[url("./static/images/bg-cover.jpg")] bg-[url("./static/images/bg-mob.jpg")] text-white' >
      <div className='bg-cover md:h-screen w-full  h-[1054px] md:bg-none bg-[url("./static/images/bg-mob-2.png")] flex justify-center items-center' >
        <div className='w-[656px] mx-auto text-center px-4'>
          <img src={logo} alt="Logo" className='h-12 hidden md:block mx-auto mb-5' />
          <h1 className='font-medium text-xl leading-5 md:text-2xl md:leading-7 mb-10'>
            <a href='#' className='text-green-1'>Sign Up </a> 
            and find the best place to rest while traveling
          </h1>
          <PostForm isOption={isOption} />
        </div>
      </div>
      <div className='absolute bottom-10 md:bottom-5 text-sm text-center w-full'>If you have an account, <a href='#' className='text-green-1 underline'>Log In</a></div>
    </div>
  );
};


export default App;
