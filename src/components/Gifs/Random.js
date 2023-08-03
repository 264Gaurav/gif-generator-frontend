import React from 'react';
// import axios from 'axios';
// import { useState,useEffect } from 'react';
import Spinner from './Spinner'
import useGif from './useGif.js';


// const apiKey = process.env.REACT_APP_GIPHY_API_KEY;

function Random() {
    // const[gif,setGif]=useState('');
    // const [loading,setLoading]=useState(false);


    // async function fetchData(){
    //     setLoading(true);
    //     const url=`https://api.giphy.com/v1/gifs/random?api_key=aCMZDPLFy5sfeFTuOZ41higuS7sxhK9i&tag=&rating=g&${apiKey}`;
    //     const {data}=await axios.get(url);
    //     // console.log({data});
    //     const imageSource=data.data.images.downsized_large.url;
    //     // console.log(imageSource);
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect( ()=>{
    //     fetchData();
    // },[])

    //custom hook se items destructure krke nikal lo 
    const {gif,loading,fetchData}=useGif();

  return (
    <div className='w-1/3 h-[400px] bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-7 mt-[10px] '>
        <h1 className='text-2xl underline uppercase font-bold'>A Random Gif</h1>
        {
            loading ? (<Spinner/>):(<img className='h-[220px] rounded-md w-[400px]' src={gif} width={450} alt="" />)
        }

        <button  onClick={()=>fetchData()}
            className='w-8/12 bg-green-700 text-lg py-1 rounded-lg mb-6 text-white'>
                Generate
        </button>

    </div>
  )
}

export default Random;