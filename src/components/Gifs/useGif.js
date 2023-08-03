// import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
// import Spinner from './Spinner'


const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=aCMZDPLFy5sfeFTuOZ41higuS7sxhK9i&tag=&rating=g&${apiKey}`;


function useGif(tag) {
    const[gif,setGif]=useState('');
    const [loading,setLoading]=useState(false);


    async function fetchData(tag){
        setLoading(true);
        const {data}=await axios.get(tag ? `${url}&tag=${tag}` : url );
        const imageSource=data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect( ()=>{
        fetchData('car')
    },[] )

    return{gif,loading,fetchData};
  
}


export default useGif;