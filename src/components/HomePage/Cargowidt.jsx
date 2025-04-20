import React from 'react'
import cargoWIDT from '/src/assets/cargowidtpre.png'
import CopyText from '../universal/CopyText'

export default function Cargowidt({ isMobile }) {
    return (
        <>
            {isMobile
                ?
                <div className="w-full overflow-hidden flex flex-col items-center justify-center">
                    <h1 className='font-bold text-lg'>CargoWIDT</h1>
                    <div className=' text-sm font-light underline text-blue-800 mt-2'> <CopyText text={"https://cargowidt-client.onrender.com"} /></div>
                    <img src={cargoWIDT} alt="cargoWIDT" className="w-[20rem] h-auto max-w-3xl mt-3" />
                    <p className='px-16'> &nbsp;&nbsp; &nbsp;&nbsp; CargoWIDT is a warehouse optimization simulator that helps users model and analyze picking operations in a warehouse environment. The application allows users to create a customized warehouse layout by placing items, standby positions, and exit points on a grid. Users can define various product attributes including weight, picking amount, quantity, and price, with the system automatically calculating picking rates based on inventory distributions.</p>
                </div>
                : <div className="w-full overflow-hidden mt-6">
                    <h1 className='font-bold text-2xl text-center'>CargoWIDT</h1>
                    <div className='text-sm font-light underline text-blue-800 mt-3 text-center'> <CopyText text={"https://cargowidt-client.onrender.com"} /></div>
                    <div className='w-full flex items-center justify-center mx-4 mt-4 '>
                        <div className='w-1/2 flex justify-end '>
                            <img src={cargoWIDT} alt="cargoWIDT" className="w-[30rem] max-w-3xl" />
                        </div>
                        <div className='w-1/2 flex items-start p-16 '>
                            <p className='text-lg'> &nbsp;&nbsp; &nbsp;&nbsp; <strong>CargoWIDT</strong> is a warehouse optimization simulator that helps users model and analyze picking operations in a warehouse environment. The application allows users to create a customized warehouse layout by placing items, standby positions, and exit points on a grid. Users can define various product attributes including weight, picking amount, quantity, and price, with the system automatically calculating picking rates based on inventory distributions.</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
