import React, { useEffect } from 'react';
// images
import hokim from '../assets/images/other/hokim.png';
import baliqchi from '../assets/images/svg/Frame.svg';
import exportt from '../assets/images/other/eksport.jpg';
import importt from '../assets/images/other/import.jpg';
const XalqaroMunosabat = () => {
    const siteLink = window.location.origin;
    useEffect(() => {
        scrollTo(0, 0);
        document.title = 'Baliqchi tuman hokimligi | Xalqaro munosabatlar';
    });
    return (
        <div className="py-12 max-800:py-10 max-550:pt-6">
            <div className='flex gap-5 container max-550:flex-col'>
                <div>
                    <h1 className='mb-5'>Xalqaro munosabatlar</h1>
                    <strong className='block mb-6'>Baliqchi tumani 2020-yildan boshlab hozirga qadar bo'lgan xalqaro munosabatlar, import va eksport hajmi haqida qisqacha ma'lumotlar</strong>
                    <div className="mb-10 space-y-8">
                        <strong className='uppercase'>Import</strong>
                        <p>2022- yilda import hajmi 10 051,6 ming AQSH dollarini, 2021- yilga nisbatan
                            158,0 foizni tashkil etdi.</p>
                        <p>Import tarkibidagi tovar va xizmatlar ulushi, % da
                            Import tarkibida tovarlar ulushi 100,0 % ni tashkil etib, mashina va transport asbob uskunalari (79,5 %), nooziq-ovqat xomashyo, yoqilg‘idan tashqari (6,4 %), asosan material turiga qarab klassifikatsiyalangan sanoat tovarlari (4,8 %), oziq-ovqat mahsulotlari va tirik hayvonlar (3,4 %), turli xil tayyor buyumlar (3,5 %), kimyoviy vositalar va boshqa toifalarga kiritilmagan shunga o‘xshash mahsulotlar (2,4 %)ga to‘g‘ri keldi.</p>
                        <img src={importt} alt="" className='w-full h-auto bg-gray-300' />
                        <a href={`${siteLink}${importt}`} download className='inline-block rounded-full py-2.5 px-6 border border-gray-400'>Rasmni yuklab olish</a>
                    </div>

                    <div className="mb-10 space-y-8">
                        <strong className='uppercase'>Eksport</strong>
                        <p>2022- yilda eksport hajmi 41 576,5 ming AQSH dollari (qimmat baho metallar eksportidan tashqari) qiymatidagi (2021- yilga nisbatan 44,9 foizni tashkil etdi) tovar va xizmatlar eksport qilinishi ta’minlandi.</p>
                        <p>Eksport tarkibidagi tovar va xizmatlar ulushi, % da</p>
                        <p>Eksport tarkibida tovarlar ulushi 100,0 % ni tashkil etib, ular asosan material turiga qarab klassifikatsiyalangan sanoat tovarlari (87,0 %), turli xil tayyor buyumlar (7,7 %), nooziq-ovqat xomashyo, yoqilg‘idan tashqari (3,6 %), oziq-ovqat mahsulotlari va tirik hayvonlar (1,7 %) hissasiga to‘g‘ri kelmoqda.</p>
                        <img src={exportt} alt="" className='w-full h-auto bg-gray-300' />
                        <a href={`${siteLink}/${exportt}`} download className='inline-block rounded-full py-2.5 px-6 border border-gray-400'>Rasmni yuklab olish</a>
                    </div>
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
        </div>
    )
};

export default XalqaroMunosabat;