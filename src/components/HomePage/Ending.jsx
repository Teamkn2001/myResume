import React from 'react'
import CopyText from '../universal/CopyText'


export default function Ending({ isMobile }) {
    return (
        <>
            {isMobile
                ? <div className='relative bg-red-400 '>
                    <div className='relative z-0'>
                        <video
                            autoPlay
                            loop
                            muted>
                            <source src='https://myport-video-public.s3.us-west-2.amazonaws.com/mountain.mp4' />
                        </video>
                    </div>
                    <div className='absolute z-50 top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white flex flex-col items-center '>
                        <div className='text-sm'>Hello, world !</div>
                        <div className='text-lg font-bold '><CopyText text="Sudtipong.fullstack@gmail.com" /></div>
                        <div className='text-lg font-bold '><CopyText text="https://github.com/Teamkn2001" /></div>
                        <div className='text-lg font-bold'>lineId :  <CopyText text="Xzia1412" /></div>
                    </div>
                </div>
                : <div className='relative bg-red-400 '>
                    <div className='relative z-0'>
                        <video
                            autoPlay
                            loop
                            muted>
                            <source src='https://myport-video-public.s3.us-west-2.amazonaws.com/mountain.mp4' />
                        </video>
                    </div>
                    <div className='absolute z-50 top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-5'>
                        <div className='text-3xl font-bold '><CopyText text="Sudtipong.fullstack@gmail.com" /></div>
                        <div className='text-3xl font-bold '> <CopyText text="https://github.com/Teamkn2001" /></div>
                        <div className='text-3xl font-bold'>LineId :  <CopyText text="Xzia1412" /></div>
                        <div className='text-xl'>Hello, world !</div>
                    </div>
                </div>
            }
        </>
    )
}
