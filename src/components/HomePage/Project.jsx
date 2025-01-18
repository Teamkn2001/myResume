import React from 'react'

export default function Project({ isMobile }) {
    return (
        <>
            {isMobile
                ? <div className='flex flex-col items-center justify-center gap-4 my-7'>
                    <div>
                        <p className='text-lg'>Buggy Jotify Note-app mock</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <video
                            controls
                            width="80%"
                            className='max-w-3xl'
                            autoPlay
                            preload='metadata'
                            muted
                            playsInline
                            loop
                        >
                            <source src='https://myport-video-public.s3.us-west-2.amazonaws.com/Jotify-preview.mp4' type="video/mp4" />
                            Your browser dose not support the video tag
                        </video>
                    </div>
                </div>
                : <div className='min-h-[35rem] flex flex-col items-center justify-center gap-4'>
                    <div>
                        <p className='text-2xl font-semibold'>Buggy Jotify Note-app mock</p>
                    </div>
                    <div>
                        <video
                            controls
                            width="100%"
                            className='max-w-3xl'
                            autoPlay
                            preload='metadata'
                            muted
                            playsInline
                            loop
                        >
                            <source src='https://myport-video-public.s3.us-west-2.amazonaws.com/Jotify-preview.mp4' type="video/mp4" />
                            Your browser dose not support the video tag
                        </video>
                    </div>
                </div>
            }
        </>
    )
}
