import React from 'react'
import HTML from '../../../public/HTMLLogo.png'
import JSLogo from '../../../public/JavascriptLogo.png'
import NodeLogo from '../../../public/nodejs.png'
import ReactJSLogo from '../../../public/reactLogo.png'
import GitLogo from '../../../public/gitLogo.png'
import TailwindLogo from '../../../public/TailwindLogo.png'
import AxiosLogo from '../../../public/Axios Purple.png'
import JWTLogo from '../../../public/JWTLogo.png'
import MySQLLogo from '../../../public/MySQL.png'
import PrismaLogo from '../../../public/prismaLogo.png'
import QuillLogo from '../../../public/quill.png'
import SocketLogo from '../../../public/SocketIOLogo.png'
import ZustandLogo from '../../../public/ZustandLogo.jpg'
import PostmanLogo from '../../../public/postmanLogo.png'
import TechCard from './TechCard'

export default function MyProfile() {

    const techs = [
        { name: 'HTML', logo: HTML },
        { name: 'Javascript', logo: JSLogo },
        { name: 'NodeJS', logo: NodeLogo },
        { name: 'ReactJS', logo: ReactJSLogo },
        { name: 'Git', logo: GitLogo },
        { name: 'TailwindCSS', logo: TailwindLogo },
        { name: 'Axios', logo: AxiosLogo },
        { name: 'JWT', logo: JWTLogo },
        { name: 'MySQL', logo: MySQLLogo },
        { name: 'Prisma', logo: PrismaLogo },
        { name: 'Quill', logo: QuillLogo },
        { name: 'SocketIO', logo: SocketLogo },
        { name: 'Zustand', logo: ZustandLogo },
        { name: 'Postman', logo: PostmanLogo },
    ]

    return (
        <div className='flex flex-col items-center bg-yellow-300'>
            <h1>MyProfile</h1>
            <div className='flex justify-around h-[20rem]'>
                <div className='flex-1 flex flex-col bg-red-600 justify-center items-center text-center'>
                    <img src="https://res.cloudinary.com/djudr1vzc/image/upload/v1734608778/cutp-Photoroom_j8e6u3.png" alt="my profile" width={250} />
                </div>
                <div className='flex-1 flex flex-col justify-center px-7  bg-pink-200'>
                    <p>Hi, I'm Team Sudtipong, a passionate and versatile full-stack developer. I specialize in building responsive, user-friendly interfaces with React.js on the front end and creating robust, scalable server-side solutions using Node.js on the back end.</p>
                    <p>Whether it's crafting seamless user experiences or developing efficient APIs, I enjoy bringing ideas to life through code. I'm always eager to learn new technologies and contribute to impactful projects!</p>
                </div>

            </div>
            <h1>Tech Stack</h1>
            <div className='w-full '>
                <div className='slider-container flex  gap-5 mb-5'>
                    <div className='flex gap-3 slider '>
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className='flex gap-3'>
                                {techs.map((tech) => (
                                    <TechCard key={tech.name} logo={tech.logo} name={tech.name} />
                                ))}
                            </div>)
                        )
                        }
                    </div>
                </div>
            </div>

            <div className='w-full flex' >
                <div className='w-1/2 bg-purple-300'>
                    <h1>Education</h1>
                    <p>"Completing this camp has been a transformative experience for me. I’ve not only discovered a deep passion for coding that I never realized I had, but I’ve also formed incredible friendships with people who inspire and support me"</p>
                    <p>It’s an experience that will stay with me forever....</p>
                </div>

                <div className='w-1/2 h-auto overflow-hidden '
                    >
                    <img src="https://res.cloudinary.com/djudr1vzc/image/upload/v1734776263/mygroup_pqs7oj.jpg" 
                    alt="my-group"  
                    className="w-full h-auto object-cover"  
                    />
                </div>
            </div>

        </div>
    )
}
