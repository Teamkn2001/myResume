import React from 'react'
import certificates from '/src/assets/certificates/CS50x.png'
import CopyText from '../universal/CopyText'

export default function Certificates({ isMobile }) {
    return (
        <>
            {isMobile
                ?
                <div className="w-full overflow-hidden flex flex-col items-center justify-center">
                    <h1 className='font-bold text-xl'>CS50's Introduction to Computer Science</h1>
                    <div className=' text-sm font-light underline text-blue-800 mt-2'> <CopyText text={"https://cs50.harvard.edu/certificates/2a917775-1010-4087-96ae-b3349e33e798"} /></div>
                    <img src={certificates} alt="cs50 certificate" className="w-[22rem] h-auto max-w-3xl mt-3" />
                    <p className='p-7'>"CS50 is Harvard’s introduction to computer science where I learned interesting concepts about computer programming, explored the basics of C, HTML, CSS, JavaScript, Python (using Flask), and SQL, and solved fun and challenging problems that built my understanding and skills." </p>
                </div>
                : <div className="w-full overflow-hidden">
                    
                    <div className='flex items-center justify-center gap-4 mx-4 my-4'>
                        <div className='flex flex-col gap-4 mt-2 px-8'>
                        <h1 className='font-bold text-2xl'>CS50's Introduction to Computer Science</h1>
                        <div className=' text-sm font-light underline text-blue-800 '> <CopyText text={"https://cs50.harvard.edu/certificates/2a917775-1010-4087-96ae-b3349e33e798"} /></div>
                            <p className=''> "CS50 is Harvard’s introduction to computer science where I learned interesting concepts about computer programming, explored the basics of C, HTML, CSS, JavaScript, Python (using Flask), and SQL, and solved fun and challenging problems that built my understanding and skills."</p>
                        </div>
                        <div className='h-auto overflow-hidden hover:transform hover:scale-105 transition-transform duration-500'
                        >
                              <img src={certificates} alt="cs50 certificate" />
                        </div>
                      
                    </div>
                </div>
            }
        </>
    )
}
