import React, { useEffect, useRef } from 'react'
import CopyText from '../universal/CopyText';

export default function ProjectTop({ isMobile }) {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        // console.log("container ==", container)

        const handleWheel = (e) => {
            // Get scroll position info
            const isAtLeft = container.scrollLeft === 0;
            const isAtRight = container.scrollLeft + container.clientWidth === container.scrollWidth;

            console.log("checker 😆", isAtLeft, isAtRight)

            // If scrolling up at the left edge OR scrolling down at the right edge
            // Let the page scroll normally
            if ((isAtLeft && e.deltaY < 0) || (isAtRight && e.deltaY > 0)) {
                return;
            }

            // Otherwise prevent default and do horizontal scroll
            e.preventDefault();
            container.scrollLeft += e.deltaY * 4;
        };

        container?.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            container?.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <>
            <div className='text-center text-3xl font-extrabold my-7'>
                <h1>My funny personal project ~</h1>
                <div className='text-lg font-light underline text-blue-800'><CopyText text={'https://toprosgallery.site/'}/></div>
                </div>
            {isMobile
                ?
                <div className="w-full overflow-hidden ">
                    <div
                        ref={scrollContainerRef}
                        className="relative w-full h-full overflow-x-auto hide-scrollbar"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        <div className="flex m-2 h-[25rem] ">
                            <div className="flex-none w-screen h-full ">
                                <div className='relative flex flex-col'>
                                    <div className='absolute w-[60%] top-6 z-30 transition-all duration-300 ease-in-out hover:z-40 hover:scale-105'>
                                        <img src="https://myport-video-public.s3.us-west-2.amazonaws.com/Screenshot+2025-01-17+163821.png" alt="" className="w-full h-auto" />
                                    </div>
                                    <div className='absolute w-[50%] right-0 top-[9rem] z-20 transition-all duration-300 ease-in-out hover:z-40 hover:scale-105'>
                                        <img src="https://myport-video-public.s3.us-west-2.amazonaws.com/Screenshot+2025-01-17+163900.png" alt="" className="w-full h-auto" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-none w-screen h-full p-2 flex flex-col justify-center items-center">
                                <div >
                                    <div className='w-[100%] z-50'>
                                        <img src="https://myport-video-public.s3.us-west-2.amazonaws.com/Screenshot+2025-01-17+164112.png" alt="" />
                                    </div>

                                </div>
                            </div>

                            <div className="flex-none w-screen h-full p-2 ">
                                <div className='relative flex flex-col'>
                                    <div className='absolute top-6 w-[60%] z-30 transition-all duration-300 ease-in-out hover:z-40 hover:scale-105'>
                                        <img src="https://myport-video-public.s3.us-west-2.amazonaws.com/Screenshot+2025-01-17+163938.png" alt="" />
                                    </div>
                                    <div className='absolute w-[50%] right-0 top-[9rem] transition-all duration-300 ease-in-out hover:z-40 hover:scale-105'>
                                        <img src="https://myport-video-public.s3.us-west-2.amazonaws.com/Screenshot+2025-01-17+163957.png" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-none w-screen h-full  flex justify-center items-center">
                                <div className='w-[80%]'>
                                    <img src="https://myport-video-public.s3.us-west-2.amazonaws.com/Screenshot+2025-01-17+165709.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : <div className="w-full overflow-hidden h-screen">
                    <div
                        ref={scrollContainerRef}
                        className="relative w-full h-full overflow-x-auto hide-scrollbar"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        <div className="flex h-full bg-slate-100">
                            <div className="flex-none w-screen m-3">
                                <div className='relative flex flex-col'>
                                    <div className='absolute w-[60%] top-6 z-30 transition-all duration-300 ease-in-out hover:z-40 hover:scale-105'>
                                        <img src="https://myport-video-public.s3.us-west-2.amazonaws.com/Screenshot+2025-01-17+163821.png" alt="" className="w-full h-auto" />
                                    </div>
                                    <div className='absolute w-[50%] right-0 top-[9rem] z-20 transition-all duration-300 ease-in-out hover:z-40 hover:scale-105'>
                                        <img src="https://myport-video-public.s3.us-west-2.amazonaws.com/Screenshot+2025-01-17+163900.png" alt="" className="w-full h-auto" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-none w-screen h-full p-2 flex flex-col justify-center items-center">
                                <div >
                                    <div className='w-[100%] z-50'>
                                        <img src="https://myport-video-public.s3.us-west-2.amazonaws.com/Screenshot+2025-01-17+164112.png" alt="" />
                                    </div>

                                </div>
                            </div>

                            <div className="flex-none w-screen h-full p-2 ">
                                <div className='relative flex flex-col'>
                                    <div className='absolute top-6 w-[60%] z-30 transition-all duration-300 ease-in-out hover:z-40 hover:scale-105'>
                                        <img src="https://myport-video-public.s3.us-west-2.amazonaws.com/Screenshot+2025-01-17+163938.png" alt="" />
                                    </div>
                                    <div className='absolute w-[50%] right-0 top-[9rem] transition-all duration-300 ease-in-out hover:z-40 hover:scale-105'>
                                        <img src="https://myport-video-public.s3.us-west-2.amazonaws.com/Screenshot+2025-01-17+163957.png" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-none w-screen h-full  flex justify-center items-center">
                                <div className='w-[80%]'>
                                    <img src="https://myport-video-public.s3.us-west-2.amazonaws.com/Screenshot+2025-01-17+165709.png" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            }
        </>
    )
}
