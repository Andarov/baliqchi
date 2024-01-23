import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    useEffect(() => {
        scrollTo(0, 0);
        document.title = 'Baliqchi tuman hokimligi | 404 Sahifa mavjud emas!';
    })
    return (
        <div className='py-12 max-800:py-10 max-550:pt-6'>
            <div className="flex flex-col items-center justify-center container space-y-4 text-center">
                <h1 className="">Sahifa topilmadi...</h1>
                <p className="text-xl">Sayt havolasi to'g'ri kiritilganligini tekshirib ko'ring</p>
                <div className="flex gap-3 max-[400px]:flex-col max-[400px]:w-full">
                    <Link to='/' className='max-[400px]:w-full rounded-full border border-gray-400 py-2.5 px-6'>Bosh sahifa</Link>
                    <Link to={-1} className='max-[400px]:w-full rounded-full border border-gray-400 py-2.5 px-6'>Oldingi sahifa</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound