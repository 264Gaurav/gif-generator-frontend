import React from 'react'
import Random from '../components/Gifs/Random';
import Tag from '../components/Gifs/Tag';

export default function Dashboard() {
  return (
    <div className=' w-full flex flex-col relative bg-slate-800 items-center text-slate-100'>
        <h1 className='bg-slate-900 rounded-lg w-11/12 text-center mt-[2px] py-3 text-2xl font-bold underline text-slate-200'>Random GIFS</h1>
        <div className='flex flex-row w-full justify-center gap-x-4 items-center gap-y-10 mt-[10px] mb-4'>
          <Random/>
          <Tag/>
        </div>
    </div>
  )
}
