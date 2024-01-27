import React from 'react';
import { Link } from 'react-router-dom';
import flag from '../assets/images/other/uzbekistan-flag.png';
import coatOfArms from '../assets/images/other/coat-of-arms-of-uzbekistan.png';


const Footer = () => {
    return (
        <footer className='bg-[#2E4374]'>
            <div className='w-full max-w-[1280px] px-4 mx-auto'>
                <div className='flex items-center justify-between py-5'>
                    {/* Logo */}
                    <Link to='/' className='flex gap-2 items-center'>
                        <img src={coatOfArms} alt="flag" className="w-14 h-14 max-550:w-12 max-550:h-12 max-[350px]:hidden" />
                        <img src={flag} alt="flag" className="w-[3px] h-12 rounded-[1px] max-550:h-8 max-[350px]:hidden" />
                        <h1 className='flex flex-col'>
                            <strong className="font-bold text-lg max-550:text-lg text-white">Baliqchi tuman hokimligi</strong>
                            <span className="text-base font-normal text-white">Rasmiy web sayti</span>
                        </h1>
                    </Link>
                </div>
            </div>
            <div className='bg-[#37518b]'>
                <div className='w-full max-w-[1280px] px-5 mx-auto py-5'>
                    <div className='flex gap-10 justify-between max-950:flex-col-reverse'>
                        <ul className='grid grid-cols-3 gap-6 text-white max-[768px]:grid-cols-2 max-550:grid-cols-1 max-550:gap-10'>
                            <li>
                                <h3 className='font-semibold text-lg leading-normal mb-4 text-white'>Hokimiyat haqida</h3>
                                <ul className='flex flex-col gap-2'>
                                    <li>
                                        <Link to='/about'>Hokimiyat tarixi</Link>
                                    </li>
                                    <li>
                                        <Link to='/about/structure'>Tashkiliy tuzilma</Link>
                                    </li>
                                    <li>
                                        <Link to='/about/managers'>Rahbariyat</Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <h3 className='font-semibold text-lg leading-normal mb-4 text-white'>Faoliyat</h3>
                                <ul className='flex flex-col gap-2'>
                                    <li>
                                        <Link to='/static/harakatlar-strategiyasi'>Harakatlar strategiyasi</Link>
                                    </li>
                                    <li>
                                        <Link to='/static/davlat-dasturlari'>Davlat dasturlari</Link>
                                    </li>
                                    <li>
                                        <Link to='/static/huquqiy-hujjatlar'>Normativ - Huquqiy hujjatlar</Link>
                                    </li>
                                    <li>
                                        <Link to='/static/loyihalar'>Loyihalar</Link>
                                    </li>
                                    <li>
                                        <Link to='/static/xalqaro-munosabat'>Xalqaro munosabat</Link>
                                    </li>
                                    <li>
                                        <Link to='/static/jamoatchilik-kengashi'>Jamoatchilik Kengashi</Link>
                                    </li>
                                    <li>
                                        <Link to='/static/iqtisodiy-korsatkichlar'>Iqtisodiy ko'rsatkichlar</Link>
                                    </li>
                                    <li>
                                        <Link to='/static/statistik-malumotlar'>Statistik ma'lumotlar</Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <h3 className='font-semibold text-lg leading-normal mb-4 text-white'>Xizmatlar</h3>
                                <ul className='flex flex-col gap-2'>
                                    <li>
                                        <a target='_blank' href='https://t.me/baliqchi_hokimga_murojat_bot'>Virtual qabulxona</a>
                                    </li>
                                    <li>
                                        <Link to='/service/ochiq-malumotlar'>Ochiq ma'lumotlar</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <div className='flex flex-col max-950:flex-row gap-5 text-white max-550:flex-col'>
                            <div className='rounded-xl p-3 bg-[#2E4374]'>
                                <p className='font-medium text-base'>Manzil: Anidijon viloyati, Baliqchi <br /> tumani, Baliqchi shox ko'chasi 1-uy</p>
                            </div>

                            <div className='rounded-xl p-3 bg-[#2E4374]'>
                                <p className='font-medium text-base'>Saytda xatolikni topdingizmi? <br /> Operatorlarimiz bilan bog'laning</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full max-w-[1280px] px-5 mx-auto'>
                <div className='text-white py-5'>
                    <div className='flex items-center justify-center'>
                        <p className='font-medium text-base leading-normal'>Baliqchi 2024 BARCHA HUQUQLAR QONUN BILAN HIMOYALANGAN.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;