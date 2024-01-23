import React, { useEffect } from 'react';

// images
import coatOfArms from '../assets/images/other/coat-of-arms-of-uzbekistan.png';
import map from '../assets/images/other/baliqchi-map.png';
import peoples from '../assets/images/other/peoples.jpg';
import nature from '../assets/images/other/baliqchi-nature.jpg';
const About = () => {
    useEffect(() => {
        scrollTo(0, 0);
        document.title = 'Baliqchi tuman hokimligi | Haqida';
    });
    return (
        <section className='py-14'>
            <div className='flex flex-col w-full max-w-[1280px] mx-auto px-5'>
                {/* hero */}
                <div className="flex items-center gap-4 justify-center flex-col mx-auto text-center mb-10">
                    <img src={coatOfArms} alt="" className="w-20 h-20" />
                    <h1>Baliqchi tumani</h1>
                    <p className="italic max-w-xl">Baliqchi tumani to‘g‘risida umumiy barcha ma’lumotlar</p>
                </div>


                {/* contents */}
                <div className="space-y-5 mb-10 max-450:mb-8">
                    <h2>Haqida</h2>
                    <p>Baliqchi tumani 1962- yil 24- dekabrda tashkil topgan bo‘lib, Andijon viloyatining ma’muriy-hududiy birligi hisoblanadi. <br /> Baliqchi tumani hududiy yer maydoni 0,34 ming kv km. Baliqchi tumani ma’muriy hududiy tarkibi bo‘yicha 44 ta qishloq aholi punkti, 66 ta mahalla fuqarolar yig‘inidan iborat. Baliqchi tumani Namangan viloyati (79 km), Ulug‘nor tumani (20 km), Bo‘ston tumani (1,8 km), Oltinko‘l tumani (36,2 km) Izboskan tumani (18,5 km) va Shahrixon tumanlari bilan (20 km) chegaradosh.</p>
                </div>

                <div className="space-y-5 mb-10 max-450:mb-8">
                    <h2>Aholisi</h2>
                    <p>Baliqchi tumanida 53,4 mingta oilalar mavjud. 2023- yilning 1- yanvar holatiga Baliqchi tuman aholisi soni viloyat doimiy aholisining (3 322,7 ming kishi) 6,4 foizini yoki 211,3 ming kishini tashkil etadi. Shundan, 70,7 ming kishi shahar joylarida va 140,6 ming kishi qishloq joylarida istiqomat qiladi. Aholi zichligi 1 kv km uchun 621 kishiga to‘g‘ri keladi.</p>
                    <p>Aholisi, asosan o'zbeklar; ruslar, tatarlar, tojiklar, uyg'urlar va b. ham yashaydi. 1 km2 ga 416 kishi to'g'ri keladi.</p>
                    <img src={peoples} alt="" className="w-96 h-56 object-cover rounded-md max-450:w-full" />
                </div>



                <div className="space-y-5 mb-10 max-450:mb-8">
                    <h2>Tabiati</h2>
                    <p>Tuman hududi tekisliklardan iborat. Yanv.ning o'rtacha temperaturasi —4°, iyulniki 26°. Yiliga o'rtacha 195 — 210 mm yog'in tushadi. Vegetatsiya davri 235 kun. Tuman hududidan Qoradaryo, Mazgilsoy, Chinobodsoy va Katta Andijon kanali oqib o'tadi. Tuprog'i o'tloqi bo'z, kuchsiz sho'rlangan tuproq. <br /><br /> O'simliklardan sho'ra, shuvoq, momaqaymoq, qamish, mingdevona, yantoq, ajriq, yulg'un, oqbosh, otquloq, qirq-bo'g'in, g'umay, qo'ypechak, yalpiz o'sadi. Echkemar, toshbaqa, tulki, quyon, ilon, kaltakesak, qushlardan laylak, o'rdak, chumchuq, so'fito'rg'ay, qarg'a, musicha yashaydi.</p>
                    <img src={nature} alt="nature" className="w-96 h-56 object-cover rounded-md max-450:w-full" />
                </div>
            </div>
        </section>
    )
};

export default About;