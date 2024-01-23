import React, { useEffect } from 'react'
// images
import hokim from '../assets/images/other/hokim.png';
import baliqchi from '../assets/images/svg/Frame.svg';
const HarakatlarStrategiyasi = () => {
    useEffect(() => {
        scrollTo(0, 0);
        document.title = 'Baliqchi tuman hokimligi | Harakatlar strategyiyasi';
    });
    return (
        <div className='py-12 max-800:py-10 max-550:pt-6'>
            <div className='flex gap-5 container max-550:flex-col'>
                <div>
                    <h1 className='mb-6'>Harakatlar Strategiyasi</h1>
                    <h3 className='font-semibold text-[20px] mb-5 '>
                        2017-2021 yillarda O'zbekiston Respublikasini rivojlantirishning beshta ustuvor yo'nalishi bo'yicha
                        <span className='uppercase'> HARAKATLAR STRATEGIYASI</span>
                    </h3>

                    <h2 className='mb-4 text-xl max-550:text-lg'>I. Davlat va jamiyat qurilishi tizimini takomillashtirishning ustuvor yo'nalishlari</h2>
                    <ul className='list-disc space-y-4 mb-4 pl-5'>
                        <li className='text-lg leading-6'>davlat hokimiyati tizimida Oliy Majlisning rolini oshirish, uning mamlakat ichki va tashqi siyosatiga oid muhim vazifalarni hal etish hamda ijro hokimiyati faoliyati ustidan parlament nazoratini amalga oshirish bo'yicha vakolatlarini yana-da kengaytirish;</li>

                        <li className='text-lg leading-6'>qabul qilinayotgan qonunlarning amalga oshirilayotgan ijtimoiy-siyosiy, ijtimoiy-iqtisodiy va sud-huquq islohotlari jarayoniga ta'sirini kuchaytirishga yo'naltirgan holda qonun ijodkorligi faoliyati sifatini tubdan oshirish;</li>
                        <li className='text-lg leading-6'>siyosiy tizimni rivojlantirish, davlat va jamiyat hayotida siyosiy partiyalarning rolini kuchaytirish, ular o'rtasida sog'lom raqobat muhitini shakllantirish.</li>
                    </ul>

                    <p className='text-lg leading-6 mb-3'>1.2. Davlat boshqaruvi tizimini isloh qilish:</p> <br />

                    <ul className='list-disc space-y-3 mb-6 pl-5'>
                        <li className='text-lg leading-6'>davlat boshqaruvini markazlashtirishdan chiqarish, davlat xizmatchilarining kasbiy tayyorgarlik, moddiy va ijtimoiy ta'minot darajasini oshirish hamda iqtisodiyotni tartibga solishda davlat ishtirokini bosqichma-bosqich qisqartirish orqali davlat boshqaruvi va davlat xizmati tizimini isloh qilish;</li>
                        <li className='text-lg leading-6'>mamlakatni ijtimoiy-siyosiy va ijtimoiy-iqtisodiy rivojlantirish bo'yicha vazifalarni amalga oshirishda o'zaro manfaatli hamkorlikning samarasini oshirishga qaratilgan davlat-xususiy sheriklikning zamonaviy mexanizmlarini joriy etish;</li>
                        <li className='text-lg leading-6'>davlat hokimiyati va boshqaruvi organlari faoliyatining ochiqligini ta'minlash, jismoniy va yuridik shaxslarning huquq va erkinliklari hamda qonuniy manfaatlariga oid axborotni taqdim qilishning zamonaviy shakllarini joriy etish;</li>
                        <li className='text-lg leading-6'>“Elektron hukumat” tizimini takomillashtirish, davlat xizmatlari ko'rsatishning samarasi, sifatini yuksaltirish va bu xizmatdan aholi hamda tadbirkorlik subyektlari tomonidan foydalanish imkoniyatini oshirish.</li>


                    </ul>
                    <p className='text-lg leading-6 mb-3'>1.3. Jamoatchilik boshqaruvi tizimini takomillashtirish:</p> <br />
                    <ul className='list-disc space-y-3 mb-6 pl-5'>
                        <li className='text-lg leading-6'>xalq bilan muloqotning samarali mexanizmlarini joriy etish;</li>
                        <li className='text-lg leading-6'>jamoatchilik nazoratini amalga oshirishning zamonaviy shakllarini rivojlantirish, ijtimoiy sheriklikning samarasini oshirish;</li>
                        <li className='text-lg leading-6'>fuqarolik jamiyati institutlarini rivojlantirish, ularning ijtimoiy va siyosiy faolligini oshirish;</li>
                        <li className='text-lg leading-6'>mahalla institutining jamiyat boshqaruvidagi o'rni va faoliyati samaradorligini oshirish;</li>
                        <li className='text-lg leading-6'>ommaviy axborot vositalarining rolini kuchaytirish, jurnalistlarning kasbiy faoliyatini himoya qilish.</li>
                    </ul>

                    <h2 className='mb-4 text-xl max-550:text-lg'>II. Qonun ustuvorligini ta'minlash va sud-huquq tizimini yana-da isloh qilishning ustuvor yo'nalishlari</h2>

                    <p className='text-lg leading-6 mb-3'>2.1. Sud hokimiyatining chinakam mustaqilligini ta'minlash, sudning nufuzini oshirish, sud tizimini demokratlashtirish va takomillashtirish:</p>

                    <ul className='list-disc space-y-3 mb-6 pl-5'>
                        <li className='text-lg leading-6'>sud yalar va sud apparati xodimlarining mavqeyini, moddiy rag'batlantirish va ijtimoiy ta'minot darajasini oshirish, sudlarning moddiy-texnik bazasini mustahkamlash;</li>
                        <li className='text-lg leading-6'>sudyalarga g'ayriqonuniy tarzda ta'sir o'tkazishga yo'l qo'ymaslik bo'yicha ta'sirchan choralar ko'rish;</li>
                        <li className='text-lg leading-6'>sudning mustaqilligi va beg'arazligi, sud protsessida tomonlarining tortishuvi va teng huquqlik tamoyillarini har tomonlama tatbiq etish;</li>
                        <li className='text-lg leading-6'>“Xabeas korpus” institutini qo'llash sohasini kengaytirish, tergov ustidan sud nazoratini kuchaytirish;</li>
                        <li className='text-lg leading-6'>sudlarni yanada ixtisoslashtirish, sud apparatini mustahkamlash;</li>
                        <li className='text-lg leading-6'>sudlar faoliyatiga zamonaviy axborot-kommunikatsiya texnologiyalarini joriy etish.</li>
                    </ul>

                    <p className='text-lg leading-6 mb-3'>2.2. Fuqarolarning huquq va erkinliklarini ishonchli himoya qilish kafolatlarini ta'minlash:</p>
                    <ul className='list-disc space-y-3 mb-6 pl-5'>
                        <li className='text-lg leading-6'>fuqarolarning murojaatlarini o'z vaqtida hal etish, murojaatlarni ko'rib chiqishda sansalorlik, rasmiyatchilik va loqayd munosabatda bo'lish holatlariga yo'l qo'yganlik uchun javobgarlikning muqarrarligini ta'minlash, shuningdek, buzilgan huquqlarni tiklashning barcha zarur choralarini ko'rish;</li>
                        <li className='text-lg leading-6'>sud, huquqni muhofaza qiluvchi va nazorat idoralari faoliyatida fuqarolarning huquq va erkinliklarini ishonchli himoya qilish kafolatlarini ta'minlash;</li>
                        <li className='text-lg leading-6'>fuqarolarning xususiy mulkka bo'lgan huquqlarini amalga oshirish kafolatlarini mustahkamlash;</li>
                        <li className='text-lg leading-6'>fuqarolarning odil sudlovga to'sqinliksiz erishishini ta'minlash;</li>
                        <li className='text-lg leading-6'>sud hujjatlari va boshqa organlar hujjatlari ijrosi samaradorligini oshirish.</li>
                    </ul>


                    <p className='text-lg leading-6 mb-3'>2.3. Ma'muriy, jinoyat, fuqarolik va xo'jalik qonunchiligini takomillashtirish:</p>
                    <ul className='list-disc space-y-3 mb-6 pl-5'>
                        <li className='text-lg leading-6'>jinoyat va jinoyat-protsessual qonunchiligini takomillashtirish va liberallashtirish, alohida jinoiy qilmishlarni dekriminallashtirish, jinoiy jazolar va ularni ijro etish tartibini insonpapvaplashtirish;</li>
                        <li className='text-lg leading-6'>odil sudlovni amalga oshirish samaradorligi va sifatini oshirish, ma'muriy, jinoyat, fuqarolik va xo'jalik sud ish yurituvining protsessual asoslarini takomillashtirish;</li>
                        <li className='text-lg leading-6'>jinoyat, fuqarolik va xo'jalik ishlarini ko'rib chiqish tartibini takomillashtirish, bir-birini takrorlaydigan vakolat va instansiyalarni qisqartirish;</li>
                        <li className='text-lg leading-6'>elektron tartibda sud va ijro ishini yuritishning zamonaviy shakl va usullarini joriy etish.</li>
                    </ul>

                    <p className='text-lg leading-6 mb-3'>2.4. Jinoyatchilikka qarshi kurashish va huquqbuzarliklarning oldini olish tizimini takomillashtirish:</p>
                    <ul className='list-disc space-y-3 mb-6 pl-5'>
                        <li className='text-lg leading-6'>jinoyatchilikka qarshi kurashish va huquqbuzarliklarning oldini olish borasidagi faoliyatni muvofiqlashtirishning samaradorligini oshirish;</li>
                        <li className='text-lg leading-6'>diniy ekstremizm va terrorizmga, uyushgan jinoyatchilikning boshqa shakllariga qarshi kurashish bo'yicha tashkiliy-amaliy choralarni kuchaytirish;</li>
                        <li className='text-lg leading-6'>korrupsiyaga qarshi kurashishning tashkiliy-huquqiy mexanizmlarini takomillashtirish va korrupsiyaga qarshi kurashish tadbirlarining samaradorligini oshirish;</li>
                        <li className='text-lg leading-6'>aholining huquqiy madaniyati va ongini yuksaltirish, bu borada davlat tuzilmalarining fuqarolik jamiyati institutlari, ommaviy axborot vositalari bilan o'zaro samarali hamkorligini tashkil etish.</li>
                    </ul>

                    <p className='text-lg leading-6 mb-3'>2.5. Sud-huquq tizimida qonuniylikni yana-da mustahkamlash:</p>

                    <ul className='list-disc space-y-3 mb-6 pl-5'>
                        <li className='text-lg leading-6'>huquqni muhofaza qiluvchi va nazorat idoralari ishini samarali rejalashtirish va uning natijalarini tahlil qilish, tizimli huquqbuzarliklarni aniqlash hamda ularga imkoniyat yaratayotgan sabab va sharoitlarni bartaraf etish;</li>
                        <li className='text-lg leading-6'>sud, huquqni muhofaza qiluvchi va nazorat idoralari xodimlarini o'qitish, tanlash, tayyorlash, qayta tayyorlash va malakasini oshirish, rotatsiya qilish tizimini takomillashtirish;</li>
                        <li className='text-lg leading-6'>huquqni muhofaza qiluvchi va nazorat idoralari xodimlari orasida huquqbuzarliklarni oldini olish, profilaktika qilish va bartaraf etish bo'yicha idoraviy nazoratning zamonaviy mexanizmlarini joriy etish;</li>
                        <li className='text-lg leading-6'>huquqni muhofaza qiluvchi va nazorat idoralari faoliyati ustidan jamoatchilik nazorati mexanizmlari samaradorligini oshirish, fuqarolarning huquqni muhofaza qilish tizimiga bo'lgan ishonchini mustahkamlash.</li>
                    </ul>


                    <p className='text-lg leading-6 mb-3'>2.6. Yuridik yordam va xizmat ko'rsatish tizimini takomillashtirish:</p>
                    <ul className='list-disc space-y-3 mb-6 pl-5'>
                        <li className='text-lg leading-6'>davlat organlarining yuridik xizmati faoliyati samaradorligini oshirish;</li>
                        <li className='text-lg leading-6'>advokatura institutini rivojlantirish, jinoyat, fuqarolik, ma'muriy va xo'jalik ishlarini ko'rib chiqishda advokatlarning rolini oshirish;</li>
                        <li className='text-lg leading-6'>notarial va fuqarolik holatlari dalolatnomalarini yozish organlari tizimini isloh qilish.</li>
                    </ul>
                    <h2 className='mb-4 text-xl max-550:text-lg'>III. Iqtisodiyotni rivojlantirish va liberallashtirishning ustuvor yo'nalishlari</h2>
                    <p className='text-lg leading-6 mb-3'>3.1. Makroiqtisodiy barqarorlikni yanada mustahkamlash va yuqori iqtisodiy o'sish sur'atlarini saqlab qolish:</p>
                    <ul className='list-disc space-y-3 mb-6 pl-5'>
                        <li className='text-lg leading-6'>makroiqtisodiy mutanosiblikni saqlash, qabul qilingan o'rta muddatli dasturlar asosida tarkibiy va institutsional o'zgarishlarni chuqurlashtirish hisobiga yalpi ichki mahsulotning barqaror yuqori o'sish sur'atlarini ta'minlash;</li>
                        <li className='text-lg leading-6'>xarajatlarning ijtimoiy yo'naltirilganini saqlab qolgan holda Davlat byudjetining barcha darajalarida mutanosiblikni ta'minlash, mahalliy byudjetlarning daromad qismini mustahkamlashga qaratilgan byudjetlararo munosabatlarni takomillashtirish;</li>
                        <li className='text-lg leading-6'>soliq yukini kamaytirish va soliqqa tortish tizimini soddalashtirish siyosatini davom ettirish, soliq ma'muriyatchiligini takomillashtirish va tegishli rag'batlantiruvchi choralarni kengaytirish;</li>
                        <li className='text-lg leading-6'>ilg'or xalqaro tajribada qo'llaniladigan instrumentlardan foydalangan holda pul-kredit siyosatini yana-da takomillashtirish, shuningdek valyutani tartibga solishda zamonaviy bozor mexanizmlarini bosqichma-bosqich joriy etish, milliy valyutaning barqarorligini ta'minlash;</li>
                        <li className='text-lg leading-6'>bank tizimini isloh qilishni chuqurlashtirish va barqarorligini ta'minlash, banklarning kapitallashuv darajasi va depozit bazasini oshirish, ularning moliyaviy barqarorligi va ishonchliligini mustahkamlash, istiqbolli investitsiya loyihalari hamda kichik biznes va xususiy tadbirkorlik subyektlarini kreditlashni yana-da kengaytirish;</li>
                        <li className='text-lg leading-6'>sug'urta, lizing va boshqa moliyaviy xizmatlarning hajmini ularning yangi turlarini joriy qilish va sifatini oshirish hisobiga kengaytirish, shuningdek kapitalni jalb qilish hamda korxona, moliyaviy institutlar va aholining erkin resurslarini joylashtirishdagi muqobil manba sifatida fond bozorini rivojlantirish;</li>
                        <li className='text-lg leading-6'>xalqaro iqtisodiy hamkorlikni yana-da rivojlantirish, jumladan, yetakchi xalqaro va xorijiy moliyaviy institutlar bilan aloqalarni kengaytirish, puxta o'ylangan tashqi qarzlar siyosatini amalga oshirishni davom ettirish, jalb qilingan xorijiy investitsiya va kreditlardan samarali foydalanish.</li>
                    </ul>
                    <h2 className='mb-4 text-xl max-550:text-lg'>3.2. Tarkibiy o'zgartirishlarni chuqurlashtirish, milliy iqtisodiyotning yetakchi tarmoqlarini modernizatsiya va diversifikatsiya qilish hisobiga uning raqobatbardoshligini oshirish:</h2>
                    <ul className='list-disc space-y-3 mb-6 pl-5'>

                        <li className='text-lg leading-6'>milliy iqtisodiyotning mutanosibligi va barqarorligini ta'minlash, uning tarkibida sanoat, xizmat ko'rsatish sohasi, kichik biznes va xususiy tadbirkorlik ulushini ko'paytirish;</li>
                        <li className='text-lg leading-6'>ishlab chiqarishni modernizatsiya qilish, texnik va texnologik jihatdan yangilash, ishlab chiqarish, transport-kommunikatsiya va ijtimoiy infratuzilma loyihalarini amalga oshirishga qaratilgan faol investitsiya siyosatini olib borish;</li>
                        <li className='text-lg leading-6'>yuqori texnologiyali qayta ishlash tarmoqlarini, eng avvalo, mahalliy xomashyo resurslarini chuqur qayta ishlash asosida yuqori qo'shimcha qiymatli tayyor mahsulot ishlab chiqarishni jadal rivojlantirishga qaratilgan sifat jihatidan yangi bosqichga o'tkazish orqali sanoatni yanada modernizatsiya va diversifikatsiya qilish;</li>
                        <li className='text-lg leading-6'>iqtisodiyot tarmoqlari uchun samarali raqobatbardosh muhitni shakllantirish hamda mahsulot va xizmatlar bozorida monopoliyani bosqichma-bosqich kamaytirish;</li>
                        <li className='text-lg leading-6'>prinsipial jihatdan yangi mahsulot va texnologiya turlarini o'zlashtirish, shu asosda ichki va tashqi bozorlarda milliy tovarlarning raqobatbardoshligini ta'minlash;</li>
                        <li className='text-lg leading-6'>ishlab chiqarishni mahalliylashtirishni rag'batlantirish siyosatini davom ettirish hamda, eng avvalo, iste'mol tovarlar va butlovchi buyumlar importining o'rnini bosish, tarmoqlararo sanoat kooperatsiyasini kengaytirish;</li>
                        <li className='text-lg leading-6'>iqtisodiyotda energiya va resurslar sarfini kamaytirish, ishlab chiqarishga energiya tejaydigan texnologiyalarni keng joriy etish, qayta tiklanadigan energiya manbalaridan foydalanishni kengaytirish, iqtisodiyot tarmoqlarida mehnat unumdorligini oshirish;</li>
                        <li className='text-lg leading-6'>faoliyat ko'rsatayotgan erkin iqtisodiy zonalar, texnoparklar va kichik sanoat zonalari samaradorligini oshirish, yangilarini tashkil etish;</li>
                        <li className='text-lg leading-6'>xizmat ko'rsatish sohasini jadal rivojlantirish, yalpi ichki mahsulotni shakllantirishda xizmatlarning o'rni va ulushini oshirish, ko'rsatilayotgan xizmatlar tarkibini, eng avvalo, ularning zamonaviy yuqori texnologik turlari hisobiga tubdan o'zgartirish;</li>
                        <li className='text-lg leading-6'>turizm industriyasini jadal rivojlantirish, iqtisodiyotda uning roli va ulushini oshirish, turistik xizmatlarni diversifikatsiya qilish va sifatini yaxshilash, turizm infratuzilmasini kengaytirish;</li>
                        <li className='text-lg leading-6'>eksport faoliyatini liberallashtirish va soddalashtirish, eksport tarkibini va geografiyasini diversifikatsiya qilish, iqtisodiyot tarmoqlari va hududlarning eksport salohiyatini kengaytirish va safarbar etish;</li>
                        <li className='text-lg leading-6'>yo'l-transport infratuzilmasini yana-da rivojlantirish, iqtisodiyot, ijtimoiy soha, boshqaruv tizimiga axborot-kommunikatsiya texnologiyalarini joriy etish.</li>
                    </ul>
                    <h2 className='mb-4 text-xl max-550:text-lg'>3.3. Qishloq xo'jaligini modernizatsiya qilish va jadal rivojlantirish:</h2>
                    <ul className='list-disc space-y-3 mb-6 pl-5'>

                        <li className='text-lg leading-6'>tarkibiy o'zgartirishlarni chuqurlashtirish va qishloq xo'jaligi ishlab chiqarishini izchil rivojlantirish, mamlakat oziq-ovqat xavfsizligini yana-da mustahkamlash, ekologik toza mahsulotlar ishlab chiqarishni kengaytirish, agrar sektorning eksport salohiyatini sezilarli darajada oshirish;</li>
                        <li className='text-lg leading-6'>paxta va boshoqli don ekiladigan maydonlarni qisqartirish, bo'shagan erlarga kartoshka, sabzavot, ozuqa va yog' olinadigan ekinlarni ekish, shuningdek, yangi intensiv bog' va uzumzorlarni joylashtirish hisobiga ekin maydonlarini yana-da optimallashtirish;</li>
                        <li className='text-lg leading-6'>fermer xo'jaliklari, eng avvalo, qishloq xo'jaligi mahsulotlarini ishlab chiqarish bilan bir qatorda, qayta ishlash, tayyorlash, saqlash, sotish, qurilish ishlari va xizmatlar ko'rsatish bilan shug'ullanayotgan ko'p tarmoqli fermer xo'jaliklarini rag'batlantirish va rivojlantirish uchun qulay shart-sharoitlar yaratish;</li>
                        <li className='text-lg leading-6'>qishloq xo'jaligi mahsulotlarini chuqur qayta ishlash, yarim tayyor va tayyor oziq-ovqat hamda qadoqlash mahsulotlarini ishlab chiqarish bo'yicha eng zamonaviy yuqori texnologik asbob-uskunalar bilan jihozlangan yangi qayta ishlash korxonalarini qurish, mavjudlarini rekonstruksiya va modernizatsiya qilish bo'yicha investitsiya loyihalarini amalga oshirish;</li>
                        <li className='text-lg leading-6'>qishloq xo'jaligi mahsulotlarini saqlash, tashish va sotish, agrokimyo, moliyaviy va boshqa zamonaviy bozor xizmatlari ko'rsatish infratuzilmasini yana-da kengaytirish;</li>
                        <li className='text-lg leading-6'>sug'oriladigan erlarning meliorativ holatini yana-da yaxshilash, melioratsiya va irrigatsiya obyektlari tarmoqlarini rivojlantirish, qishloq xo'jaligi ishlab chiqarish sohasiga intensiv usullarni, eng avvalo, suv va resurslarni tejaydigan zamonaviy agrotexnologiyalarni joriy etish, unumdorligi yuqori bo'lgan qishloq xo'jaligi texnikasidan foydalanish;</li>
                        <li className='text-lg leading-6'>kasallik va zararkunandalarga chidamli, mahalliy er-iqlim va ekologik sharoitlarga moslashgan qishloq xo'jaligi ekinlarining yangi seleksiya navlarini hamda yuqori mahsuldorlikka ega hayvonot zotlarini yaratish va ishlab chiqarishga joriy etish bo'yicha ilmiy-tadqiqot ishlarini kengaytirish;</li>
                        <li className='text-lg leading-6'>global iqlim o'zgarishlari va Orol dengizi qurishining qishloq xo'jaligi rivojlanishi hamda aholining hayot faoliyatiga salbiy ta'sirini yumshatish bo'yicha tizimli chora-tadbirlar ko'rish.</li>
                    </ul>

                    <h2 className='mb-4 text-xl max-550:text-lg'>3.4. Iqtisodiyotda davlat ishtirokini kamaytirish, xususiy mulk huquqini himoya qilish va uning ustuvor mavqeyini yana-da kuchaytirish, kichik biznes va xususiy tadbirkorlik rivojini rag'batlantirishga qaratilgan institutsional va tarkibiy islohotlarni davom ettirish:</h2>

                    <ul className='list-disc space-y-3 mb-6 pl-5'>
                        <li className='text-lg leading-6'>xususiy mulk huquqi va kafolatlarini ishonchli himoya qilishni ta'minlash, xususiy tadbirkorlik va kichik biznes rivoji yo'lidagi barcha to'siq va cheklovlarni bartaraf etish, unga to'liq erkinlik berish, “Agar xalq boy bo'lsa, davlat ham boy va kuchli bo'ladi” degan tamoyilni amalga oshirish;</li>
                        <li className='text-lg leading-6'>kichik biznes va xususiy tadbirkorlikni keng rivojlantirish uchun qulay ishbilarmonlik muhitini yaratish, tadbirkorlik tuzilmalarining faoliyatiga davlat, huquqni muhofaza qiluvchi va nazorat idoralari tomonidan noqonuniy aralashuvlarning qat'iy oldini olish;</li>
                        <li className='text-lg leading-6'>davlat mulkini xususiylashtirishni yana-da kengaytirish va uning tartib-taomillarini soddalashtirish, xo'jalik yurituvchi subyektlarning ustav jamg'armalarida davlat ishtirokini kamaytirish, davlat mulki xususiylashtirilgan obyektlar bazasida xususiy tadbirkorlikni rivojlantirish uchun qulay shart-sharoitlar yaratish;</li>
                        <li className='text-lg leading-6'>investitsiya muhitini takomillashtirish, mamlakat iqtisodiyoti tarmoqlari va hududlariga xorijiy, eng avvalo, to'g'ridan-to'g'ri xorijiy investitsiyalarni faol jalb qilish;</li>
                        <li className='text-lg leading-6'>korporativ boshqaruvning zamonaviy standart va usullarini joriy etish, korxonalarni strategik boshqarishda aksiyadorlarning rolini kuchaytirish;</li>
                        <li className='text-lg leading-6'>tadbirkorlik subyektlarining muhandislik tarmoqlariga ulanishi bo'yicha tartib-taomil va mexanizmlarni takomillashtirish va soddalashtirish;</li>
                        <li className='text-lg leading-6'>mamlakatning ijtimoiy-iqtisodiy rivojlanish jarayonlarini tartibga solishda davlat ishtirokini kamaytirish, davlat boshqaruvi tizimini markazlashtirishdan chiqarish va demokratlashtirish, davlat-xususiy sheriklikni kengaytirish, nodavlat, jamoat tashkilotlari va joylardagi o'zini o'zi boshqarish organlarining rolini oshirish.</li>
                    </ul>
                    <h2 className='mb-4 text-xl max-550:text-lg'>3.5. Viloyat, tuman va shaharlarni kompleks va mutanosib ijtimoiy-iqtisodiy rivojlantirish, ularning mavjud salohiyatidan samarali va optimal foydalanish:</h2>
                    <ul className='list-disc space-y-3 mb-6 pl-5'>
                        <li className='text-lg leading-6'>ijtimoiy-iqtisodiy rivojlanishni jadallashtirish, xalqning turmush darajasi va daromadlarini oshirish uchun har bir hududning tabiiy, mineral-xomashyo, sanoat, qishloq xo'jaligi, turistik va mehnat salohiyatidan kompleks va samarali foydalanishni ta'minlash;</li>
                        <li className='text-lg leading-6'>hududlar iqtisodiyotini modernizatsiya va diversifikatsiya qilish ko'lamini kengaytirish, rivojlanish darajasi nisbatan past bo'lgan tuman va shaharlarni, eng avvalo, sanoat va eksport salohiyatini oshirish yo'li bilan jadal rivojlantirish hisobiga mintaqalar ijtimoiy-iqtisodiy rivojlanish darajasidagi farqlarni kamaytirish;</li>
                        <li className='text-lg leading-6'>yangi sanoat korxonalari va servis markazlarini tashkil etish, kichik sanoat zonalarini tashkil qilish, yirik xo'jalik birlashmalarining mablag'larini, banklarning kreditlarini va xususiy xorijiy investitsiyalarni jalb qilish hisobiga kichik shaharlar va shaharchalarni jadal rivojlantirish;</li>
                        <li className='text-lg leading-6'>sanoat va xizmatlar ko'rsatish sohasini jadal rivojlantirish hisobiga subvensiyaga qaram tuman va shaharlarni kamaytirish va mahalliy byudjetlarning daromad bazasini kengaytirish;</li>

                        <li className='text-lg leading-6'>sanoat korxonalari va boshqa ishlab chiqarish obyektlarini joylashtirishga qulay shart-sharoitlar yaratish, xususiy tadbirkorlikni keng rivojlantirish hamda aholining turmush sharoitini yaxshilash maqsadida hududlarning ishlab chiqarish, muhandis-kommunikatsiya va ijtimoiy infratuzilma tarmoqlarini yanada rivojlantirish va modernizatsiya qilish.</li>
                    </ul>

                    <strong className='inline-block mb-5 font-semibold text-[20px]'><strong>IV. Ijtimoiy sohani rivojlantirishning ustuvor yo'nalishlari</strong></strong>
                    <strong className='inline-block mb-5 font-semibold text-[20px]'>4.
                        1. Aholi bandligi va real daromadlarini izchil oshirish:</strong>
                    <ul className='list-disc space-y-3 mb-6 pl-5'>
                        <li className='text-lg leading-6'>aholining real pul daromadlarini va xarid qobiliyatini oshirish, kam ta'minlangan oilalar sonini va aholining daromadlari bo'yicha farqlanish darajasini yana-da kamaytirish;</li>
                        <li className='text-lg leading-6'>byudjet muassasalari xodimlarining ish haqi, pensiya, stipendiya va ijtimoiy nafaqalar hajmini inflyatsiya sur'atlaridan yuqori miqdorda izchil oshirish;</li>
                        <li className='text-lg leading-6'>yangi ish o'rinlarini yaratish hamda aholining, eng avvalo, o'rta maxsus va oliy o'quv muassasalari bitiruvchilari bandligini ta'minlash, mehnat bozori mutanosibligini va infratuzilmasi rivojlanishini ta'minlash, ishsizlik darajasini kamaytirish;</li>
                        <li className='text-lg leading-6'>mehnatga layoqatli aholining mehnat va tadbirkorlik faolligini to'liq amalga oshirish uchun sharoitlar yaratish, ish kuchi sifatini yaxshilash, ishga muhtoj shaxslarni kasbga tayyorlash, qayta tayyorlash va malakasini oshirish tizimini kengaytirish.</li>
                    </ul>

                    <h2 className='mb-4 text-xl max-550:text-lg'>4.2. Aholini ijtimoiy himoya qilish va sog'liqni saqlash tizimini takomillashtirish, xotin-qizlarning ijtimoiy-siyosiy faolligini oshirish:</h2>
                    <ul className='list-disc space-y-3 mb-6 pl-5'>
                        <li className='text-lg leading-6'>aholiga majburiy ijtimoiy kafolatlarni ta'minlash, aholining ehtiyojmand qatlamlarini ijtimoiy himoyasini hamda keksalar va imkoniyati cheklangan shaxslarni davlat tomonidan qo'llab-quvvatlashni kuchaytirish, ijtimoiy xizmat ko'rsatishni yaxshilash, aholiga ijtimoiy xizmatlar ko'rsatishda davlat-xususiy sherikligini rivojlantirish;</li>
                        <li className='text-lg leading-6'>aholiga tibbiy va ijtimoiy-tibbiy xizmat ko'rsatish qulayligi hamda sifatini oshirishga, aholi o'rtasida sog'lom turmush tarzini shakllantirishga, tibbiyot muassasalarining moddiy-texnik bazasini mustahkamlashga yo'naltirgan holda sog'liqni saqlash sohasini, eng avvalo, uning dastlabki bo'g'inini, tez va shoshilinch tibbiy yordam tizimini yana-da isloh qilish;</li>
                        <li className='text-lg leading-6'>oila salomatligini mustahkamlash, onalik va bolalikni muhofaza qilish, onalar va bolalarning sifatli tibbiy xizmatdan foydalanishni kengaytirish, ularga ixtisoslashtirilgan va yuqori texnologiyalarga asoslangan tibbiy yordam ko'rsatish, chaqaloqlar va bolalar o'limini kamaytirish bo'yicha kompleks chora-tadbirlarni yana-da kengroq amalga oshirish;</li>
                        <li className='text-lg leading-6'>xotin-qizlarning ijtimoiy-siyosiy faolligini oshirish, ularni davlat va jamiyat boshqaruvidagi o'rnini kuchaytirish, xotin-qizlar, kasb-hunar kolleji bitiruvchi qizlarining bandligini ta'minlash, ularni tadbirkorlik faoliyatiga keng jalb etish, oila asoslarini yanada mustahkamlash;</li>

                        <li className='text-lg leading-6'>pensionerlar, nogiron, yolg'iz keksalar, aholining boshqa ehtiyojmand toifalarining to'laqonli hayot kechirishlarini ta'minlash uchun ularga tibbiy-ijtimoiy yordam ko'rsatish tizimini yana-da rivojlantirish va takomillashtirish;</li>
                        <li className='text-lg leading-6'>farmatsevtika sanoatini yanada rivojlantirish, aholi va tibbiyot muassasalarining arzon, sifatli dori vositalari va tibbiyot buyumlari bilan ta'minlanishini yaxshilash, dori-darmonlar narxlarining asossiz o'sishiga yo'l qo'ymaslik bo'yicha chora-tadbirlarni amalga oshirish;</li>
                        <li className='text-lg leading-6'>aholi o'rtasida kasallanish ko'rsatkichlari pasayishini va umr uzayishini ta'minlash.</li>
                    </ul>
                    <h2 className='mb-4 text-xl max-550:text-lg'>4.3. Arzon uy-joylar barpo etish bo'yicha maqsadli dasturlarni amalga oshirish, aholining hayot sharoitlari yaxshilanishini ta'minlovchi yo'l-transport, muhandislik-kommunikatsiya va ijtimoiy infratuzilmani rivojlantirish hamda modernizatsiya qilish:</h2>
                    <ul className='list-disc space-y-3 mb-6 pl-5'>
                        <li className='text-lg leading-6'>aholi, eng avvalo, yosh oilalar, eskirgan uylarda yashab kelayotgan fuqarolar va uy-joy sharoitini yaxshilashga muhtoj boshqa fuqarolarning yashash sharoitini imtiyozli shartlarda ipoteka kreditlari ajratish hamda shahar va qishloq joylarda arzon uylar qurish orqali yana-da yaxshilash;</li>
                        <li className='text-lg leading-6'>aholining kommunal-maishiy xizmatlar bilan ta'minlanish darajasini oshirish, eng avvalo, yangi ichimlik suvi tarmoqlarini qurish, tejamkor va samarali zamonaviy texnologiyalarni bosqichma-bosqich joriy etish orqali qishloq joylarda aholining toza ichimlik suvi bilan ta'minlashni tubdan yaxshilash;</li>
                        <li className='text-lg leading-6'>odamlarning ekologik xavfsiz muhitda yashashini ta'minlash, maishiy chiqindilarni qayta ishlash komplekslarini qurish va modernizatsiya qilish, ularning moddiy-texnik bazasini mustahkamlash, aholini chiqindini yo'q qilish bo'yicha zamonaviy obyektlar bilan ta'minlash;</li>
                        <li className='text-lg leading-6'>aholiga transport xizmati ko'rsatishni tubdan yaxshilash, yo'lovchi tashish xavfsizligini oshirish va atrof muhitga zararli moddalar chiqishini kamaytirish, har tomonlama qulay yangi avtobuslarni sotib olish, avtovokzal va avtostansiyalarni qurish hamda rekonstruksiya qilish;</li>
                        <li className='text-lg leading-6'>yo'l infratuzilmasi qurilishi va rekonstruksiya qilinishini davom ettirish, eng avvalo, mintaqaviy avtomobil yo'llarini rivojlantirish, xo'jaliklararo qishloq avtomobil yo'llarini, aholi punkti ko'chalarini kapital va joriy ta'mirlash;</li>
                        <li className='text-lg leading-6'>yangi elektr energiya ishlab chiqarish quvvatlarini qurish va mavjudlarini modernizatsiya qilish, past kuchlanishli elektr tarmoqlari va transformator punktlarini yangilash asosida aholini elektr energiyasi hamda boshqa yoqilg'i-energiya resurslari bilan ta'minlashni yaxshilash, shuningdek, qayta tiklanadigan energiya manbalaridan foydalanishni kengaytirish bo'yicha chora-tadbirlarni amalga oshirish;</li>
                        <li className='text-lg leading-6'>teatr va tomosha maskanlarini, madaniy-ma'rifiy tashkilotlar va muzeylar faoliyatini rivojlantirish hamda takomillashtirish, ularning moddiy-texnik bazasini mustahkamlash.</li>
                    </ul>


                    <strong className='inline-block mb-5 font-semibold text-[20px]'>4.4. Ta'lim va fan sohasini rivojlantirish:</strong>
                    <ul className='list-disc space-y-3 mb-6 pl-5'>
                        <li className='text-lg leading-6'>uzluksiz ta'lim tizimini yana-da takomillashtirish, sifatli ta'lim xizmatlari imkoniyatlarini oshirish, mehnat bozorining zamonaviy ehtiyojlariga mos yuqori malakali kadrlar tayyorlash siyosatini davom ettirish;</li>
                        <li className='text-lg leading-6'>ta'lim muassasalarini qurish, rekonstruksiya qilish va kapital ta'mirlash, ularni zamonaviy o'quv va laboratoriya asboblari, kompyuter texnikasi va o'quv-metodik qo'llanmalar bilan jihozlash orqali ularning moddiy-texnik bazasini mustahkamlash yuzasidan maqsadli chora-tadbirlarni ko'rish;</li>
                        <li className='text-lg leading-6'>maktabgacha ta'lim muassasalari tarmog'ini kengaytirish va ushbu muassasalarda bolalarning har tomonlama intellektual, est etik va jismoniy rivojlanishi uchun shart-sharoitlarni tubdan yaxshilash, bolalarning maktabgacha ta'lim bilan qamrab olinishini jiddiy oshirish va foydalanish imkoniyatlarini ta'minlash, pedagog va mutaxassislarning malaka darajasini yuksaltirish;</li>
                        <li className='text-lg leading-6'>umumiy o'rta ta'lim sifatini tubdan oshirish, chet tillar, informatika hamda matematika, fizika, kimyo, biologiya kabi boshqa muhim va talab yuqori bo'lgan fanlarni chuqurlashtirilgan tarzda o'rganish;</li>
                        <li className='text-lg leading-6'>bolalarni sport bilan ommaviy tarzda shug'ullanishga, ularni musiqa hamda san'at dunyosiga jalb qilish maqsadida yangi bolalar sporti obyektlarini, bolalar musiqa va san'at maktablarini qurish, mavjudlarini rekonstruksiya qilish;</li>
                        <li className='text-lg leading-6'>kasb-hunar kollejlari o'quvchilarini bozor iqtisodiyoti va ish beruvchilarning ehtiyojlariga javob beradigan mutaxassisliklar bo'yicha tayyorlash hamda ishga joylashtirish borasidagi ishlarni takomillashtirish;</li>
                        <li className='text-lg leading-6'>ta'lim va o'qitish sifatini baholashning xalqaro standartlarini joriy etish asosida oliy ta'lim muassasalari faoliyatining sifati hamda samaradorligini oshirish, oliy ta'lim muassasalariga qabul kvotalarini bosqichma-bosqich ko'paytirish;</li>
                        <li className='text-lg leading-6'>ilmiy-tadqiqot va innovatsiya faoliyatini rag'batlantirish, ilmiy va innovatsiya yutuqlarini amaliyotga joriy etishning samarali mexanizmlarini yaratish, oliy o'quv yurtlari va ilmiy-tadqiqot institutlari huzurida ixtisoslashtirilgan ilmiy-eksperimental laboratoriyalar, yuqori texnologiya markazlari va texnoparklarni tashkil etish.</li>
                    </ul>
                    <h2 className='mb-4 text-xl max-550:text-lg'>4.4. Ta'lim va fan sohasini rivojlantirish:</h2>
                    <ul className='list-disc space-y-3 mb-6 pl-5'>
                        <li className='text-lg leading-6'>jismonan sog'lom, ruhan va aqlan rivojlangan, mustaqil fikrlaydigan, Vatanga sodiq, qat'iy hayotiy nuqtai nazarga ega yoshlarni tarbiyalash, demokratik islohotlarni chuqurlashtirish va fuqarolik jamiyatini rivojlantirish jarayonida ularning ijtimoiy faolligini oshirish;</li>
                        <li className='text-lg leading-6'>o'rta maxsus, kasb-hunar va oliy ta'lim muassasalari bitiruvchilarini ishga joylashtirish hamda xususiy tadbirkorlik sohasiga jalb etish;</li>
                        <li className='text-lg leading-6'>yosh avlodning ijodiy va intellektual salohiyatini qo'llab-quvvatlash va ro'yobga chiqarish, bolalar va yoshlar o'rtasida sog'lom turmush tarzini shakllantirish, ularni jismoniy tarbiya va sportga keng jalb etish;</li>

                        <li className='text-lg leading-6'>yoshlarni ijtimoiy himoya qilish, yosh oilalar uchun munosib uy-joy va ijtimoiy-maishiy sharoitlarni yaratish;</li>
                        <li className='text-lg leading-6'>yoshlarga oid davlat siyosatini amalga oshirishda davlat hokimiyati va boshqaruvi organlari, ta'lim muassasalari, yoshlar va boshqa tashkilotlarning samarali faoliyatini tashkil etish.</li>
                    </ul>
                    <h2 className='mb-4 text-xl max-550:text-lg'>V. Xavfsizlik, millatlararo totuvlik va diniy bag'rikenglikni ta'minlash hamda chuqur o'ylangan, o'zaro manfaatli va amaliy tashqi siyosat sohasidagi ustuvor yo'nalishlar</h2>
                    <ul className='list-disc space-y-3 mb-6 pl-5'>
                        <li className='text-lg leading-6'> O'zbekiston Respublikasining konstitutsiyaviy tuzumi, suvereniteti, hududiy yaxlitligini muhofaza qilish;</li>
                        <li className='text-lg leading-6'>axborot xavfsizligini ta'minlash va axborotni himoya qilish tizimini takomillashtirish, axborot sohasidagi tahdidlarga o'z vaqtida va munosib qarshilik ko'rsatish;</li>
                        <li className='text-lg leading-6'>fuqarolik, millatlararo va konfessiyalararo tinchlik hamda totuvlikni mustahkamlash;</li>
                        <li className='text-lg leading-6'>davlatning mudofaa qobiliyatini mustahkamlash, O'zbekiston Respublikasi Qurolli Kuchlarining jangovar qudrati va salohiyatini oshirish;</li>
                        <li className='text-lg leading-6'>atrof-tabiiy muhit, aholi salomatligi va genofondiga ziyon etkazadigan ekologik muammolarni oldini olish;</li>
                        <li className='text-lg leading-6'>favqulodda vaziyatlarni oldini olish va bartaraf etish tizimini takomillashtirish.</li>
                    </ul>
                    <h2 className='mb-4 text-xl max-550:text-lg'>5.2. Chuqur o'ylangan, o'zaro manfaatli va amaliy tashqi siyosat sohasidagi ustuvor yo'nalishlar:</h2>
                    <ul className='list-disc space-y-3 mb-6 pl-5'>
                        <li className='text-lg leading-6'>davlat mustaqilligi va suverenitetini mustahkamlash, mamlakatning xalqaro munosabatlarning teng huquqli subyekti sifatidagi o'rni va rolini oshirish, rivojlangan demokratik davlatlar qatoriga kirish, O'zbekistonning yon-atrofida xavfsizlik, barqarorlik va ahil qo'shnichilik muhitini shakllantirish;</li>
                        <li className='text-lg leading-6'>O'zbekiston Respublikasining xalqaro nufuzini mustahkamlash, mamlakatda olib borilayotgan islohotlar to'g'risida jahon hamjamiyatiga xolis axborot etkazish;</li>
                        <li className='text-lg leading-6'>O'zbekiston Respublikasining tashqi siyosiy va tashqi iqtisodiy faoliyatining normativ-huquqiy bazasini hamda xalqaro hamkorlikning shartnomaviy-huquqiy asoslarini takomillashtirish;</li>
                        <li className='text-lg leading-6'>davlat chegarasini delimitatsiya va demarkatsiya qilish masalalarini hal etish.</li>
                    </ul>
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
        </div >
    )
}

export default HarakatlarStrategiyasi