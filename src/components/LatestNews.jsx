import React from 'react';
import { news } from "../assets/data";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <section className='py-16'>
            <div className="container max-[500px]:px-0">
                <h2 className="mb-8 max-[500px]:px-5">So'nggi yangiliklar</h2>
                <ul className="grid grid-cols-3 gap-6 max-950:grid-cols-2 max-550:grid-cols-1 max-550:gap-10">
                    {news.map((item, index) => {
                        return (
                            index < 3 &&
                            <li key={item.id}>
                                <Link key={item.id} to={`/news/${item.title.toString().toLowerCase().replace(/\s+/g, '-')}`} className="flex flex-col gap-y-4">
                                    <img
                                        className="w-full h-64 object-cover object-top rounded-lg bg-gray-400 max-700:h-52 max-550:h-64 max-[500px]:rounded-none"
                                        src={item.image}
                                        alt=""
                                    />
                                    <div className="space-y-3 max-[500px]:px-5">
                                        <p className="text-gray-600">{item.date.toDateString()}</p>
                                        <h3 className="text-xl font-semibold line-clamp-2">{item.title}</h3>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    )
};

export default LatestNews;