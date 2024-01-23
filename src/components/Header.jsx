import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

// images
import flag from '../assets/images/other/uzbekistan-flag.png';
import coatOfArms from '../assets/images/other/coat-of-arms-of-uzbekistan.png';
import down from '../assets/images/svg/down.svg';
import hamburger from '../assets/images/svg/hamburger-menu.svg';
import cross from '../assets/images/svg/cross.svg';
const Header = () => {
    const location = useLocation();
    const [openNavbarMenu, setOpenNavbarMenu] = useState(false);
    useEffect(() => {
        setOpenNavbarMenu(false);
    }, [location]);
    window.addEventListener('resize', function () {
        setDropdown_1(false);
        setDropdown_2(false);
        setDropdown_3(false);
        setDropdown_4(false);
        setOpenNavbarMenu(false);
    })
    const [dropdown_1, setDropdown_1] = useState(false);
    const dropdown1 = () => {
        if (window.innerWidth < 950) {
            setDropdown_1(!dropdown_1);
        }
    };


    const [dropdown_2, setDropdown_2] = useState(false);
    const dropdown2 = () => {
        if (window.innerWidth < 950) {
            setDropdown_2(!dropdown_2);
        }
    };

    const [dropdown_3, setDropdown_3] = useState(false);
    const dropdown3 = () => {
        if (window.innerWidth < 950) {
            setDropdown_3(!dropdown_3);
        }
    };

    const [dropdown_4, setDropdown_4] = useState(false);
    const dropdown4 = () => {
        if (window.innerWidth < 950) {
            setDropdown_4(!dropdown_4);
        }
    };


    return (
        <div>

            <header className='py-5 max-550:py-4'>
                <div className="max-w-[1280px] w-full px-5 mx-auto flex items-center justify-between max-dm:mb-5">

                    {/* Logo */}
                    <Link to='/' className='flex gap-2 items-center'>
                        <img src={coatOfArms} alt="flag" className="w-16 h-16 max-550:w-12 max-550:h-12" />
                        <img src={flag} alt="flag" className="w-[3px] h-16 rounded-[1px] max-550:h-8 max-950:h-12" />
                        <div>
                            <strong className="block font-bold text-xl max-550:text-lg max-450:text-base !leading-[22px] max-w-[200px]">Baliqchi tuman hokimligi</strong>
                            <p className="text-base font-normal max-450:text-sm max-450:font-medium max-950:hidden">Rasmiy web sayti</p>
                        </div>
                    </Link>
                    {/* overlay */}
                    <div onClick={() => setOpenNavbarMenu(false)} className={`${openNavbarMenu ? 'block' : 'hidden'} fixed z-10 min-w-full h-screen bg-black bg-opacity-75 top-0 right-0`}></div>

                    {/* Nav */}
                    <div className={`${openNavbarMenu ? 'translate-x-0' : 'max-950:translate-x-full'} flex flex-col z-20 max-950:fixed max-950:top-0 max-950:right-0 max-950:bg-white max-950:px-5 max-950:py-8 max-950:h-screen gap-8 max-950:max-w-[290px] max-950:w-full transition-all duration-300 max-950:overflow-y-auto max-550:pt-6`}>
                        <button onClick={() => setOpenNavbarMenu(false)} className="hidden max-950:block ml-auto">
                            <img src={cross} alt="cross" className="w-10 h-10" />
                        </button>
                        <nav>
                            <ul className="js-dropdowns-list wrapper flex items-center gap-4 max-950:flex-col max-950:items-end max-950:gap-0">
                                <li className='w-full'>
                                    <div onClick={dropdown1} className="dropdown">
                                        <div className='dropdown_item'>
                                            <span className='font-medium !font-[montserrat] text-base'>Hokimiyat haqida</span>
                                            <img width={16} height={16} src={down} alt="down outline icon" className={`${dropdown_1 ? '!rotate-180' : ''}`} />
                                        </div>
                                        <ul className={`${dropdown_1 ? '!block' : 'max-950:max-950-hidden'} dropdown_menu`}>
                                            <li className='menu_item'>
                                                <Link to='/about'>Haqida</Link>
                                            </li>
                                            <li className='menu_item'>
                                                <Link to='/about/structure'>Tashkiliy tuzilma</Link>
                                            </li>
                                            <li className='menu_item'>
                                                <Link to='/about/managers'>Rahbariyat</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='w-full'>
                                    <div onClick={dropdown2} className="dropdown">
                                        <div className='dropdown_item'>
                                            <span className='font-medium !font-[montserrat] text-base'>Faoliyat</span>
                                            <img width={16} height={16} src={down} alt="down outline icon" className={`${dropdown_2 ? '!rotate-180' : ''}`} />
                                        </div>
                                        <ul className={`${dropdown_2 ? '!block' : 'max-950:max-950-hidden'} dropdown_menu`}>
                                            <li className='menu_item'>
                                                <Link to='/static/harakatlar-strategiyasi'>Harakatlar strategiyasi</Link>
                                            </li>
                                            <li className='menu_item'>
                                                <Link to='/static/davlat-dasturlari'>Davlat dasturlari</Link>
                                            </li>
                                            <li className='menu_item'>
                                                <Link to='/static/huquqiy-hujjatlar'>Normativ - huquqiy hujjatlar</Link>
                                            </li>
                                            <li className='menu_item'>
                                                <Link to='/static/loyihalar'>Loyihalar</Link>
                                            </li>
                                            <li className='menu_item'>
                                                <Link to='/static/xalqaro-munosabat'>Xalqaro munosabat</Link>
                                            </li>
                                            <li className='menu_item'>
                                                <Link to='/static/jamoatchilik-kengashi'>Jamoatchilik kengashi</Link>
                                            </li>
                                            <li className='menu_item'>
                                                <Link to='/static/iqtisodiy-korsatkichlar'>Iqtisodiy ko'rsatmalar</Link>
                                            </li>
                                            <li className='menu_item'>
                                                <Link to='/static/statistik-malumotlar'>Statistik ma'lumotlar</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='w-full'>
                                    <div onClick={dropdown3} className="dropdown">
                                        <div className='dropdown_item'>
                                            <span className='font-medium !font-[montserrat] text-base'>Xizmatlar</span>
                                            <img width={16} height={16} src={down} alt="down outline icon" className={`${dropdown_3 ? '!rotate-180' : ''}`} />
                                        </div>
                                        <ul className={`${dropdown_3 ? '!block' : 'max-950:max-950-hidden'} dropdown_menu`}>
                                            <li className='menu_item'>
                                                <a href='https://t.me/baliqchi_hokimga_murojat_bot' target='_blank'>Virtual qabulxona</a>
                                            </li>
                                            <li className='menu_item'>
                                                <Link to='/service/ochiq-malumotlar'>Ochiq ma'lumotlar</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='w-full'>
                                    <div onClick={dropdown4} className="dropdown">
                                        <div className='dropdown_item'>
                                            <span className='font-medium !font-[montserrat] text-base'>Matbuot xizmatlari</span>
                                            <img width={16} height={16} src={down} alt="down outline icon" className={`${dropdown_4 ? '!rotate-180' : ''}`} />
                                        </div>
                                        <ul className={`${dropdown_4 ? '!block' : 'max-950:max-950-hidden'} dropdown_menu`}>
                                            <li className='menu_item'>
                                                <Link to='/news/all-news'>Yangiliklar</Link>
                                            </li>
                                            <li className='menu_item'>
                                                <Link to='/contact'>Bog'lansih</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <a href="tel:+9987776655" className="hidden w-full py-3 px-6 text-white rounded-full bg-[#2E4374] text-sm max-950:block text-center">Qo'ng'iroq qilish</a>
                    </div>

                    <a href="tel:+998743232211" className="py-3 inline-block px-6 text-white rounded-full bg-[#2E4374] text-sm max-1130:hidden">Qo'ng'iroq qilish</a>


                    <button onClick={() => setOpenNavbarMenu(!openNavbarMenu)} className="hidden max-950:block">
                        <img src={hamburger} alt="hamburger" className="w-10 h-10" />
                    </button>

                </div>
            </header>
        </div>
    )
};

export default Header;