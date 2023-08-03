import React from 'react';
// import axios from 'axios';
import { useState } from 'react';
// import {useEffect} from 'react';
import Spinner from './Spinner';
import useGif from './useGif.js';


// const apiKey = process.env.REACT_APP_GIPHY_API_KEY;

function Tag() {
    // const[gif,setGif]=useState('');
    // const [loading,setLoading]=useState(false);
    const[tag,setTag]=useState('car');


    // async function fetchData(){
    //     setLoading(true);
    //     const url=`https://api.giphy.com/v1/gifs/random?api_key=aCMZDPLFy5sfeFTuOZ41higuS7sxhK9i&tag=&rating=g&${apiKey}&tag=${tag}`;
    //     const {data}=await axios.get(url);
    //     const imageSource=data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect( ()=>{
    //     fetchData()
    // },[] )

    // function clickHandler(){
    //     fetchData();
    // }

    // function changeHandler(event){
    //     setTag(event.target.value);
    // }

    const {gif,loading,fetchData}=useGif(tag); //custom hook se item distructuring krkr nikalo

  return (
    <div className='w-1/3 h-[400px] bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[10px] '>
        <h1 className='text-2xl underline uppercase font-bold overflow-hidden'>
            Random <span className='font-normal text-red-800'>{tag}</span> Gif</h1>
        {
            loading ? (<Spinner/>):(<img className='h-[220px] rounded-md w-[400px]' src={gif} width={450} alt="" />)
        }

        <input 
          className='w-8/12 bg-slate-100 text-black text-md py-1 rounded-lg text-center' 
          onChange={(e)=>setTag(e.target.value) }
          value={tag}
        />

        <button  onClick={()=>fetchData(tag)}
            className='w-8/12 bg-blue-700 text-lg py-1 rounded-lg mb-[2px]'>
                Generate
        </button>

    </div>
  )
}

export default Tag;