// import React from 'react';
import './App.css';
import Description from './components/Description';
import Header from './components/Header';
import Slider from './components/Slider';
import {GlobalStorage} from './components/GlobalContext';


function App() {


  return (
    <GlobalStorage>
      <main className='w-screen min-h-screen m-auto flex flex-col items-center'>
        <Header />
        <div className='w-full h-screen md:grid md:w-[70%] xl:grid xl:grid-cols-[50%_50%] xl:w-[58%] xl:mt-[5.6rem]'>
          <Slider />
          <Description />
        </div>
      </main>
    </GlobalStorage>
  )
}

export default App
