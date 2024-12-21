import React, { useEffect, useRef } from 'react'

export default function Education() {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        console.log("container ==", container)
        
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
            container.scrollLeft += e.deltaY * 2.5;
        };

        container?.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            container?.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div className="w-full h-[20rem] overflow-hidden">
            <div
                ref={scrollContainerRef}
                className="relative w-full h-full overflow-x-auto"
                style={{ scrollBehavior: 'smooth' }}
            >
                <div className="flex h-full ">
                    <div className="flex-none w-screen h-full  bg-red-200">Item 1</div>
                    <div className="flex-none w-screen h-full  bg-green-200">Item 2</div>
                </div>
            </div>
        </div>
    )
}