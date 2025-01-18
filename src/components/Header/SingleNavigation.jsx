import React from 'react'

export default function SingleNavigation({ isMobile }) {
    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const hover = 'hover:font-extrabold hover:text-red-500'
    return (
        <>
            {isMobile
                ? <nav className='w-full fixed top-0 right-0 z-50 bg-white shadow-lg p-4 h-[4rem]'>
                    <ul className='flex justify-center gap-8 text-xl font-bold '>
                        <li className={`${hover}`}><a href="#profile" onClick={(e) => scrollToSection(e, 'profile')}>Profile</a></li>
                        <li className={`${hover}`}><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
                        <li className={`${hover}`}><a href="#ending" onClick={(e) => scrollToSection(e, 'ending')}>Contact</a></li>
                    </ul>
                </nav>
                : <nav className='w-full fixed top-0 right-0 z-50 bg-white shadow-lg p-4 h-[4rem]'>
                    <ul className='flex justify-center gap-[6rem] text-xl font-bold'>
                        <li className={`${hover}`}><a href="#profile" onClick={(e) => scrollToSection(e, 'profile')}>Profile</a></li>
                        <li className={`${hover}`}><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
                        <li className={`${hover}`}><a href="#ending" onClick={(e) => scrollToSection(e, 'ending')}>Contact</a></li>
                    </ul>
                </nav>
            }
        </>

    )
}
