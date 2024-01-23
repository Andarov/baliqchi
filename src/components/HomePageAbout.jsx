import React from 'react';

// images
import population from '../assets/images/svg/population.svg';
import city from '../assets/images/svg/city.svg';
const HomePageAbout = () => {
    return (
        <div className='hidden items-center justify-center pb-32 relative mb-'>
            <div className="flex items-center justify-center p-8 absolute container !max-w-5xl h-72 bg-white rounded-3xl shadow-md">
                <ul className="w-full grid grid-cols-3 gap-4">
                    <li className="flex flex-col gap-5 items-center text-center">
                        <img src={population} alt="" className="w-20 h-20" />
                        <h3 className="text-xl font-bold">Aholi</h3>
                        <p className="">Aholisi, asosan oʻzbeklar; ruslar, tatarlar, tojiklar, uygʻurlar va b. hozirda 150 000 dan ortiq bo'lgan odamlar istiqomat qilmoqda</p>
                    </li>

                    <li className="flex flex-col gap-5 items-center text-center">
                        <img src='https://uzkoram.uz/wp-content/uploads/2018/04/gerb.png' alt="" className="w-20 h-20" />
                        <h3 className="text-xl font-bold">Baliqchi tumani</h3>
                        <p className="">Baliqchi tumanining 2023-yilgi satatistik ma'lumotlari</p>
                    </li>

                    <li className="flex flex-col gap-5 items-center text-center">
                        <img src={city} alt="" className="w-20 h-20" />
                        <h3 className="text-xl font-bold">Shaxar va tuman</h3>
                        <p className=""></p>
                    </li>
                </ul>
            </div>
        </div>
    )
        ;
}

export default HomePageAbout;