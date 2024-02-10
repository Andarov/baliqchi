import React, { useEffect } from 'react';
// images
import hokim from '../assets/images/other/hokim.png';
import baliqchi from '../assets/images/svg/Frame.svg';
// import statistika from '../assets/other-files/statistika.docx';
const StatistikMalumotlar = () => {
    const siteLink = window.location.origin;
    console.log(siteLink);
    useEffect(() => {
        scrollTo(0, 0);
        document.title = 'Baliqchi tuman hokimligi | Statistik ma\'lumotlar';
    });
    return (
        <div>
            <section className='pt-8 pb-16'>
                <div className="flex gap-5 container max-800:flex-col">
                    <div className='space-y-4'>
                        <h1 className='mb-6'>Baliqchi tuman statistik ma'lumotlari</h1>
                        <strong className="block mb-8">Quyidagi faylni yuklab olish orqali Baliqchi tumanining rasmiy statistik ma'lumotlarini ko'rishingiz mumkin. Faylni yuklab olish uchun "FAYLNI YUKLAB OLISH" tugmasini bosing</strong>

                        <a href="https://firebasestorage.googleapis.com/v0/b/baliqchi-admin.appspot.com/o/doc%2Fstatistika.docx?alt=media&token=18e581db-7eeb-4f25-8cf5-1e09d8de5bc1" download className="inline-block py-3 px-6 rounded-full border-gray-400 border">Faylni yuklab olish.</a>
                    </div>

                    <div className="min-w-[310px] space-y-6 max-800:hidden max-550:block max-550:min-w-0">
                        <img src={baliqchi} alt="" className="w-full max-w-[310px] max-550:max-w-full" />
                        <div className="p-5 w-full shadow-md rounded-2xl text-center space-y-3 max-1130:hidde max-550:block">

                            <h3 className="font-bold text-2xl">Hokimga murojaat yo'llash</h3>
                            <img
                                src={hokim}
                                alt="Baliqchi tumani"
                                className="w-full rounded-md border"
                            />
                            <a target='_blank' href='https://t.me/baliqchi_hokimga_murojat_bot' className="block w-full bg-[#424769] text-white py-2 rounded-md">Murojaat Qilish</a>
                        </div>

                        <div className="overflow-hidden relative p-5 py-8 shadow-lg border rounded-2xl text-center space-y-3 bg-[#4FA4DE] max-1130:hidde">
                            <p className='relative text-white font-semibold z-10'>Xokimiyatning Telegram’dagi rasmiy kanalini kuzatib boring</p>
                            <a target='_blank' href='https://t.me/baliqchi24_yangiliklari' className="block relative bg-[#d7ddff] z-10 font-semibold py-2 px-5 rounded-md w-full text-[#424769]">Obuna bo'lish</a>
                            <svg className='absolute z-0 -top-12 -left-8 opacity-30' width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.3583 9.38244C11.3857 9.787 9.44177 10.6243 6.52657 11.8944C6.05318 12.0827 5.8052 12.2669 5.78263 12.4469C5.74448 12.7513 6.12559 12.8711 6.64455 13.0343C6.71515 13.0565 6.78829 13.0795 6.86327 13.1038C7.37385 13.2698 8.06068 13.464 8.41773 13.4717C8.74161 13.4787 9.1031 13.3452 9.50219 13.0711C12.226 11.2325 13.632 10.3032 13.7202 10.2831C13.7825 10.269 13.8688 10.2512 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9738 10.48C13.9361 10.641 12.4401 12.0318 11.6659 12.7515C11.4246 12.9759 11.2534 13.135 11.2184 13.1714C11.14 13.2528 11.0601 13.3298 10.9833 13.4038C10.509 13.8611 10.1532 14.204 11.003 14.764C11.4114 15.0331 11.7381 15.2556 12.0641 15.4776C12.4201 15.7201 12.7752 15.9619 13.2347 16.2631C13.3517 16.3398 13.4635 16.4195 13.5724 16.4971C13.9867 16.7925 14.3589 17.0579 14.8188 17.0155C15.086 16.991 15.362 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.382 16.6352 8.80081C16.6484 8.66228 16.6318 8.48498 16.6185 8.40715C16.6051 8.32932 16.5773 8.21842 16.4761 8.13633C16.3563 8.03911 16.1714 8.01861 16.0886 8.02C15.7125 8.0267 15.1354 8.22735 12.3583 9.38244Z" fill="#fff" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default StatistikMalumotlar