import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
// images
import hokim from "../assets/images/other/hokim.png";
import baliqchi from "../assets/images/svg/Frame.svg";
import { news } from '../assets/data';

const NewsDetail = () => {
    const location = useLocation();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    console.log(id);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        setTimeout(() => setLoading(false), 1000); // Simulated loading
    }, [location]);

    const findNews = news.find((item) => String(item.id) == String(id));


    return (
        <div className='py-12 max-800:py-10 max-550:pt-6'>
            <div className="flex gap-5 container max-550:flex-col max-[500px]:px-0">
                <div className="w-full grow">
                    {loading ? (
                        <div className="w-full space-y-4">
                            <div className="w-28 h-5 bg-gray-300 max-[500px]:ml-5"></div>
                            <div className="flex items-center justify-center w-full h-[440px] bg-gray-300 text-white">
                                Yuklanmoqda...
                            </div>
                        </div>
                    ) : findNews ? (
                        <div className="flex flex-col gap-4">
                            <p className="text-gray-600 max-[500px]:ml-5">
                                {new Date(findNews.date).toLocaleDateString("uz-UZ")}
                            </p>
                            {findNews.image && findNews.image.length > 0 && (
                                <div className="space-y-2">
                                    {findNews.image.map((img, index) => (
                                        <img
                                            key={index}
                                            className="w-full h-[440px] object-cover rounded-sm bg-gray-400 max-800:h-96"
                                            src={img}
                                            alt={`Yangilik rasmi ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                            <div className="flex flex-col gap-3 max-[500px]:px-5">
                                <h1 className="text-2xl font-semibold">{findNews.title}</h1>
                                <p>{findNews.description}</p>
                                {findNews.video_link && (
                                    <iframe className='w-full h-96 bg-gray-200' src={findNews.video_link} frameBorder="0"></iframe>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3.5 max-[500px]:px-5">
                            <h1>Ma'lumotlarni yuklab bo'lmadi :(</h1>
                            <p>Sabablari:</p>
                            <ul className="list-disc pl-5">
                                <li>Yangilik topilmadi yoki manzil noto‘g‘ri</li>
                                <li>Internet sifati past yoki aloqa yo‘q</li>
                            </ul>
                            <div className="flex gap-3">
                                <Link to={-1} className='px-6 py-2.5 border border-gray-400 rounded-full'>
                                    Oldingi sahifaga qaytish
                                </Link>
                                <button onClick={() => window.location.reload()} className='px-6 py-2.5 border border-gray-400 rounded-full'>
                                    Sahifani yangilash
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="min-w-[310px] max-w-xs space-y-6 max-800:hidden max-550:block">
                    <img src={baliqchi} alt="" className="w-full max-w-[310px]" />
                    <div className="p-5 shadow-md rounded-2xl text-center">
                        <h3 className="font-bold text-2xl">Hokimga murojaat</h3>
                        <img src={hokim} alt="Baliqchi tumani" className="w-full rounded-md border" />
                        <a href="https://t.me/baliqchi_hokimga_murojat_bot" target="_blank"
                           className="block w-full bg-[#424769] text-white py-2 rounded-md">
                            Murojaat qilish
                        </a>
                    </div>
                </div>
            </div>

            <section className="py-16">
                <div className="container max-[500px]:px-0">
                    <h2 className="mb-8">Boshqa yangiliklar</h2>
                    <ul className="grid grid-cols-3 gap-6 max-950:grid-cols-2 max-550:grid-cols-1">
                        {loading ? (
                            [1, 2, 3].map((_, index) => (
                                <li key={index} className="flex flex-col gap-y-4">
                                    <div className="w-full h-64 bg-gray-300"></div>
                                    <h3 className="w-full space-y-4">
                                        <span className="block w-full h-5 bg-gray-300"></span>
                                        <span className="w-2/3 h-5 bg-gray-300"></span>
                                    </h3>
                                </li>
                            ))
                        ) : (
                            news.length > 0 ? (
                                news.slice(0, 3).map((item, index) => (
                                    <li key={index}>
                                        <Link to={`/news/${item.id}`} className="flex flex-col gap-y-4">
                                            <img
                                                className="w-full h-64 object-cover rounded-lg bg-gray-400"
                                                src={item.image?.[0]}
                                                alt={item.title}
                                            />
                                            <h3 className="text-xl font-semibold">{item.title}</h3>
                                        </Link>
                                    </li>
                                ))
                            ) : (
                                <div>Ma'lumotlarni yuklab bo'lmadi...</div>
                            )
                        )}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default NewsDetail;
