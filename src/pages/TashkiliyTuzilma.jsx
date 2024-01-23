import React, { useEffect } from 'react';

const TashkiliyTuzilma = () => {
    useEffect(() => {
        scrollTo(0, 0);
        document.title = 'Baliqchi tuman hokimligi | Tashkiliy tuzilma';
    });
    return (
        <div className="py-12">
            <div className='container max-800:px-0.5'>
                <h2 className='mb-4 max-800:px-5'>Tashkiliy tuzilma</h2>
                <img className='w-[840px] h-[447px] max-800:w-full max-800:h-auto' src="https://api.sergelihokimiyati.uz/media/about/Tashkiliy_tuzilma.jpg" alt="" />
            </div>
        </div>
    )
};

export default TashkiliyTuzilma;