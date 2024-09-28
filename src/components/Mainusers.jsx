import React from 'react'
import { users } from "../constants/users";
import { insta, linki, github } from '../assets';

const Mainusers = ({ Id }) => {
    return (
        <div className='h-[380px] lg:h-[390px] w-[270px] lg:w-[25%] rounded-[22px] border-[1px] border-purple-400 flex flex-col justify-center'>
            <div className='font-poppins text-3xl flex items-center justify-center h-[50px]'>{users[Id].name}</div>
            <div className='h-[150px] flex items-center justify-center'>
                <div
                    className='rounded-full overflow-hidden h-[120px] w-[120px]' // Equal height and width
                    style={{
                        backgroundImage: `url(${users[Id].imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </div>
            <div className='font-edu-vic-wa-nt-beginner text-2xl flex items-center justify-center h-[50px]'>Role: {users[Id].title}</div>
            <div className='font-edu-vic-wa-nt-beginner text-2xl flex items-center justify-center h-[50px]'>Location: {users[Id].location}</div>

            <div className='flex justify-center items-center mt-3 mb-3'>
                {users[Id].instagram && <a href={users[Id].instagram}>
                    <img className='mx-3 h-[33px]' src={insta} alt="" srcset="" />
                </a>}
                {users[Id].linkedin && <a href={users[Id].linkedin}>
                    <img className='mx-3 h-[33px]' src={linki} alt="" srcset="" />
                </a>}
                {users[Id].github && <a href={users[Id].github}>
                    <img className='mx-3 h-[33px]' src={github} alt="" srcset="" />
                </a>}
            </div>
        </div>
    )
}

export default Mainusers