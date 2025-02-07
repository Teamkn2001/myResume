import React from 'react'
import CopyText from '../universal/CopyText'

export default function Project2({ isMobile }) {
    return (
        <>
            {isMobile
                ? <div className='flex flex-col items-center justify-center gap-4 my-7'>
                    <div>
                        <h1 className='text-lg text-center font-semibold'>Skyteam</h1>
                        <div className=' text-sm font-light underline text-blue-800'> <CopyText text={"https://slyteam-client-v2.onrender.com/"} /></div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <div className='w-[21rem] h-auto'><img src="https://res.cloudinary.com/djudr1vzc/image/upload/v1738909517/Screenshot_2025-02-07_131303_fyznry.png" alt="" /></div>
                        <div className='w-[21rem]'><img src="https://res.cloudinary.com/djudr1vzc/image/upload/v1738909858/Screenshot_2025-02-07_133004_vcxihf.png" alt="" /></div>
                    </div>
                </div>
                : <div className='min-h-[35rem] flex flex-col items-center justify-center gap-8 mt-8'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Buggy Jotify Note-app mock</h1>
                       <div className=' text-sm font-light underline text-blue-800'> <CopyText text={"https://slyteam-client-v2.onrender.com/"} /></div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <div className='w-[48rem] h-auto'><img src="https://res.cloudinary.com/djudr1vzc/image/upload/v1738909517/Screenshot_2025-02-07_131303_fyznry.png" alt="" /></div>
                        <div className='w-[48rem]'><img src="https://res.cloudinary.com/djudr1vzc/image/upload/v1738909858/Screenshot_2025-02-07_133004_vcxihf.png" alt="" /></div>
                    </div>
                </div>
            }
        </>
    )
}
