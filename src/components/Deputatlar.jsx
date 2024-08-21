import React from 'react'
import { Link } from 'react-router-dom';
import { orinbosarlar } from '../assets/data';

// images
import facebook from '../assets/images/svg/facebook.svg';
import instagram from '../assets/images/svg/instagram.svg';
import telegram from '../assets/images/svg/telegram.svg';
import twitter from '../assets/images/svg/twitter.svg';
import hokim from '../assets/images/other/hokim.png';
import korrupsia from '../assets/images/korrupsia.jpg';
import babur from '../assets/images/babur.png'

const Deputatlar = () => {
    const orinbosarlarData = orinbosarlar.slice(0, 4);
    return (
        <div className="w-full flex justify-center py-12">
            <div className="container">
                <div className="flex items-center justify-between gap-4 mb-10 max-450:flex-col max-450:items-start">
                    <h2 className="font-bold text-[30px]">Rahbariyat</h2>
                    <Link to='/about/managers' className='rounded-full py-2.5 text-center px-6 border border-gray-500 max-450:w-full'>Barchasini ko'rish</Link>
                </div>
                <div className="flex justify-between items-start gap-5 max-1130:flex-col">
                    <div className="w-full">
                        <div className="w-full space-y-10">
                            {orinbosarlarData.map((orinbosar, index) => {
                                return (
                                    <div
                                        key={orinbosar.id}
                                        className="w-full rounded-xl shadow flex space-x-5 items-start relative max-550:flex-col max-550:max-w-[400px] max-550:mx-auto"
                                    >
                                        <img
                                            src={orinbosar.img}
                                            alt={orinbosar.ismi}
                                            className="w-[100px] shrink-0 h-full rounded-xl grow max-550:w-full aspect-square object-cover object-top"
                                        />
                                        <div className="p-5 text-[#27185d] w-[70%] max-550:w-full max-550:!ml-0">
                                            <div className="space-y-3">
                                                <p className="text-[18px]">{orinbosar.lavozim}</p>
                                                <h3 className="font-bold text-[23px]">{orinbosar.ismi}</h3>
                                                <div className="space-y-3">
                                                    <p>
                                                        Qabul kunlari {orinbosar.qabulKuni}
                                                        <br />
                                                        soat {orinbosar.boshlashVaqti} dan {orinbosar.tugatishVaqti}{" "}
                                                        gacha
                                                    </p>
                                                    <p>Telefon raqam: <a target='_blank' href={`tel:${orinbosar.telephone}`}>{orinbosar.telephone}</a></p>
                                                </div>
                                                <div className="space-x-3  flex justify-between items-center">
                                                    <div className='flex gap-2 items-center'>
                                                        <a
                                                            href="#"
                                                            className="text-[30px] text-[#624ab7]"
                                                        >
                                                            <img width={28} height={28} src={facebook} alt="" className="w-7 h-7" />
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="text-[30px] text-[#624ab7]"
                                                        >
                                                            <img width={28} height={28} src={twitter} alt="" className="w-7 h-7" />
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="text-[30px] text-[#624ab7]"
                                                        >
                                                            <img width={28} height={28} src={instagram} alt="" className="w-7 h-7" />
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="text-[30px] text-[#624ab7]"
                                                        >
                                                            <img width={28} height={28} src={telegram} alt="" className="w-7 h-7" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="min-w-[310px] max-w-[310px] space-y-5 w-full max-1130:max-w-full">
                        {/* Korrupsiya */}
                        <div className="p-5 w-full shadow-lg border rounded-2xl text-center space-y-3 max-1130:hidden max-550:block">
                            <h3 className="font-bold text-2xl">Korrupsiya</h3>
                            <p className='text-left'>Sizda korrupsiya togrisida malumotlar bormi, bizga bu haqida xabar bering.</p>
                            <p>Tezkor raqam: <a className='text-blue-400' href="tel:+998882320702">+998882320702</a></p>
                            <img
                                src={korrupsia}
                                alt="Baliqchi tumani"
                                className="w-full rounded-md border"
                            />
                            <Link to='/korrupsiya-murojaat' className="block w-full bg-[#424769] text-white py-2 rounded-md">Murojaat Qilish</Link>
                        </div>

                        {/* hokimga murojaat yollash */}
                        <div className="p-5 w-full shadow-lg border rounded-2xl text-center space-y-3 max-1130:hidden max-550:block">
                            <h3 className="font-bold text-2xl">Hokimga murojaat yo'llash</h3>
                            <img
                                src={hokim}
                                alt="Baliqchi tumani"
                                className="w-full rounded-md border"
                            />
                            <a target='_blank' href='https://t.me/baliqchitumanhokimi' className="block w-full bg-[#424769] text-white py-2 rounded-md">Murojaat Qilish</a>
                        </div>
                        
                        {/* hokimiyat telegram kanal */}
                        <div className="overflow-hidden relative p-5 py-8 shadow-lg border rounded-2xl text-center space-y-3 bg-[#4FA4DE] max-1130:hidden">
                            <p className='relative text-white font-semibold z-10'>Xokimiyatning Telegram’dagi rasmiy kanalini kuzatib boring</p>
                               <a target='_blank' href='https://t.me/baliqchi24_yangiliklari' className="block relative bg-[#d7ddff] z-10 font-semibold py-2 px-5 rounded-md w-full text-[#424769]">Obuna bo'lish</a>
                            <svg className='absolute z-0 -top-12 -left-8 opacity-30' width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.3583 9.38244C11.3857 9.787 9.44177 10.6243 6.52657 11.8944C6.05318 12.0827 5.8052 12.2669 5.78263 12.4469C5.74448 12.7513 6.12559 12.8711 6.64455 13.0343C6.71515 13.0565 6.78829 13.0795 6.86327 13.1038C7.37385 13.2698 8.06068 13.464 8.41773 13.4717C8.74161 13.4787 9.1031 13.3452 9.50219 13.0711C12.226 11.2325 13.632 10.3032 13.7202 10.2831C13.7825 10.269 13.8688 10.2512 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9738 10.48C13.9361 10.641 12.4401 12.0318 11.6659 12.7515C11.4246 12.9759 11.2534 13.135 11.2184 13.1714C11.14 13.2528 11.0601 13.3298 10.9833 13.4038C10.509 13.8611 10.1532 14.204 11.003 14.764C11.4114 15.0331 11.7381 15.2556 12.0641 15.4776C12.4201 15.7201 12.7752 15.9619 13.2347 16.2631C13.3517 16.3398 13.4635 16.4195 13.5724 16.4971C13.9867 16.7925 14.3589 17.0579 14.8188 17.0155C15.086 16.991 15.362 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.382 16.6352 8.80081C16.6484 8.66228 16.6318 8.48498 16.6185 8.40715C16.6051 8.32932 16.5773 8.21842 16.4761 8.13633C16.3563 8.03911 16.1714 8.01861 16.0886 8.02C15.7125 8.0267 15.1354 8.22735 12.3583 9.38244Z" fill="#fff" />
                            </svg>
                        </div>
                        
                        {/* Boburshunoslik */}
                        <div className="p-5 w-full shadow-lg border rounded-2xl text-center space-y-3 max-1130:hidden max-550:block">
                            <img src={babur} alt="Boburshunoslik platformasi" />
                            <div>
                                <h3 className='mb-4'><b>"Boburshunoslik"</b> platformasi yaratildi</h3>
                                <a className='block relative bg-[#d7ddff] z-10 font-semibold py-2 px-5 rounded-md w-full transition-all duration-300 text-[#424769] hover:bg-[#9465fb] hover:text-white' href="https://baburid.uz/" target='_blank'>Platformaga kirish</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deputatlar