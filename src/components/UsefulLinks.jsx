import React from 'react'
import { links } from '../assets/data';

const UsefulLinks = () => {
    return (
        <section className="py-12 max-600:px-10">
            <div className="container">
                <h2 className="mb-10">Foydali havolalar</h2>

                <ul className="grid grid-cols-5 gap-y-6 max-950:grid-cols-3 max-700:grid-cols-2 max-550:grid-cols-1">
                    {links.map((link, index) => {
                        return (
                            <li key={index} className="flex flex-col items-center justify-center text-center border-l border-r space-y-5 px-5">
                                <img className="w-[70px] h-[70px]" src={link.img} alt={link.description} />
                                <a target='_blank' className="text-blue-600 font-medium" href={link.url}>{link.title}</a>
                                <h3 className="text-[#555] font-semibold text-sm">{link.description}</h3>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>

    )
}

export default UsefulLinks