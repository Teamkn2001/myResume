import React from 'react'
import HTML from '/HTMLLogo.png'
import JSLogo from '/JavascriptLogo.png'
import NodeLogo from '/nodejs.png'
import ReactJSLogo from '/reactLogo.png'
import GitLogo from '/gitLogo.png'
import TailwindLogo from '/TailwindLogo.png'
import AxiosLogo from '/Axios Purple.png'
import JWTLogo from '/JWTLogo.png'
import MySQLLogo from '/MySQL.png'
import PrismaLogo from '/prismaLogo.png'
import QuillLogo from '/quill.png'
import SocketLogo from '/SocketIOLogo.png'
import ZustandLogo from '/zustandLogo.jpg'
import PostmanLogo from '/postmanLogo.png'
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
        <div className='flex flex-col items-center gap-7'>
            {/* <h1 className='font-bold text-2xl'>MyProfile</h1> */}
            <div className='flex justify-around h-[20rem] mx-10 mt-7'>
                <div className='flex-1 flex flex-col bg-red-600 justify-center items-center text-center hover:transform hover:scale-105 hover:bg-red-500 duration-500'>
                    <img src="https://res.cloudinary.com/djudr1vzc/image/upload/v1734608778/cutp-Photoroom_j8e6u3.png" alt="my profile" width={258} />
                </div>
                <div className='flex-1 flex flex-col justify-center px-7 bg-red-200'>
                    <p>Hi, I'm Team Sudtipong, a passionate and versatile full-stack developer. I specialize in building !responsive, user-friendly interfaces with React.js on the front end and creating robust, scalable server-side solutions using Node.js on the back end.</p>
                    <p>Whether it's crafting seamless user experiences or developing efficient APIs, I enjoy bringing ideas to life through code. I'm always eager to learn new technologies and contribute to impactful projects!</p>
                </div>

            </div>
            <h1 className='font-bold text-2xl'>Tech Stack</h1>
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

           <div>
           <div className='w-full flex' >
                <div className='w-1/2 flex flex-col justify-center items-center p-7 gap-3'>
                    <h1 className='font-bold text-2xl'>Software Park : Codecamp 18</h1>
                    <p>"Completing this camp has been a transformative experience for me. I’ve not only discovered a deep passion for coding that I never realized I had, but I’ve also formed incredible friendships with people who inspire and support me"</p>
                    <p>It’s an experience that will stay with me forever....</p>
                </div>

                <div className='w-1/2 h-auto overflow-hidden hover:transform hover:scale-105 transition-transform duration-500'
                    >
                    <img src="https://res.cloudinary.com/djudr1vzc/image/upload/v1734776263/mygroup_pqs7oj.jpg" 
                    alt="my-group"  
                    className="w-full h-auto object-cover"  
                    />
                </div>
            </div>

            <div className='w-full flex' >
                <div className='w-1/2 h-auto overflow-hidden hover:transform hover:scale-95 transition-transform duration-500'
                    >
                    <img src="https://res.cloudinary.com/djudr1vzc/image/upload/v1734958459/rsu_yskxkr.jpg" 
                    alt="my-group"  
                    className="w-full h-auto object-cover"  
                    />
                </div>

                <div className='w-1/2 flex flex-col justify-center items-center p-7 gap-5'>
                    <h1 className='font-bold text-2xl'>Rangsit University</h1>
                    <p>"With a background in Logistics and Supply Chain Management, I bring a unique perspective to problem-solving and project execution. My studies have equipped me with a understanding of optimizing processes, managing resources efficiently, and ensuring seamless coordination across complex systems.</p>
                    <p>This foundation complements my skills as a full-stack developer, allowing me to approach challenges with a balance of technical expertise and operational insight. I thrive on finding innovative solutions that bridge the gap between technology and real-world logistics."</p>
                    <p></p>
                </div>

            </div>

           </div>
        </div>
    )
}
