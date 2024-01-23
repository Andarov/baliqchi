import React from 'react';
import baliqchi from '../assets/images/other/baliqchi.jpg';
import { Link } from 'react-router-dom';

const HomePageHero = () => {
    return (
        <div style={{ backgroundImage: `url(${baliqchi})` }} className='relative bg-cover bg-center'>
            <div className="bg-[#2E4374] w-full h-full bg-opacity-80 pt-20 pb-80 max-550:pb-32">
                <div className="container z-20">
                    <h1 className="text-white z-20 text-5xl font-semibold max-w-[800px] mb-10 leading-[52px] max-800:text-4xl max-550:text-3xl">Baliqchi tumani hokimligining rasmiy web saytiga xush kelibsiz!</h1>
                    <div className="flex gap-8 max-600:gap-5 max-450:flex-col">
                        <Link to='/contact' className='bg-white rounded-md px-7 py-3 text-[#2E4374] text-center'>Murojaat qilish</Link>
                        <Link to='/news/all-news' className='bg-white rounded-md px-7 py-3 text-[#2E4374] text-center'>So'nggi yangiliklar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomePageHero;