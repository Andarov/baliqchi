import React from 'react'

const ContactSection = () => {
    return (
        <div>
            <div className='flex items-center relative max-600:justify-center'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124475.13548499672!2d71.83962648438484!3d40.865924176754994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bca0f4b7ee00d7%3A0xdfc5299b5374dd69!2sBalikchi%20District%2C%20Andijan%20region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1707463322191!5m2!1sen!2s" className='max-450:h-[580px] max-[380px]:h-[620px]' width="100%" height="480" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className='absolute w-full max-w-md shadow-boglash bg-white rounded right-20 py-7 px-8 max-600:right-auto max-[370px]:px-3'>
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

    )
}

export default ContactSection