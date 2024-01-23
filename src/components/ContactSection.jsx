import React from 'react'

const ContactSection = () => {
    return (
        <div>
            <div className='relative'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d354203.3816310414!2d72.21971884142266!3d40.76832541082637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc901d6b13d4ef%3A0xfc45bcaa7973dfac!2sAndijon%2C%20Andijon%20Viloyati%2C%20O%60zbekiston!5e0!3m2!1suz!2s!4v1705509801331!5m2!1suz!2s" className='max-450:h-[580px] max-[380px]:h-[700px]' width="100%" height="480" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className=""></div>
                <div className='w-full max-w-[1280px] px-5 mx-auto absolute inset-0 inline-block max-767:hidden max-[380px]:mt-12'>
                    <div className='w-full max-w-md ml-auto mt-16 shadow-boglash bg-white rounded top-10 right-20 py-7 px-8'>
                        <h2 className='font-semibold text-3xl text-[#152340] mb-5'>Bog'lanish</h2>
                        <ul>
                            <li className='flex items-center justify-end bg-[#f5f6fa] rounded font-medium text-[14px] p-3 mb-1'>
                                <span className='min-w-[90px] text-[#2687d1]'>Manzil:</span>
                                <p className='w-full text-[#152340]'>Andijon viloyati, Baliqchi tumani, Baliqchi shox ko'chasi 1-uy</p>
                            </li>
                            <li className='flex items-center justify-end border-2 border-[#f5f6fa] rounded font-medium text-[14px] p-3 mb-1'>
                                <span className='min-w-[90px] text-[#2687d1]'>Telefon:</span>
                                <p className='w-full text-[#152340]'>
                                    +998 74 323 22 11</p>
                            </li>
                            <li className='flex items-center justify-end bg-[#f5f6fa] rounded font-medium text-[14px] p-3 mb-1'>
                                <span className='min-w-[90px] text-[#2687d1]'>Ish kunlari:</span>
                                <p className='w-full text-[#152340]'>Dushanba-juma <span className='text-[#152340] ml-7'><span className='bg-[#cbe6fb] rounded px-1'>09:00</span> - <span className='bg-[#cbe6fb] rounded px-1'>18:00</span></span></p>
                            </li>
                            <li className='flex items-center justify-end border-2 border-[#f5f6fa] rounded font-medium text-[14px] p-3 mb-1'>
                                <span className='min-w-[90px] text-[#2687d1]'>Transport:</span>
                                <p className='w-full text-[#152340]'>Baliqchi tuman hokimligi</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ContactSection