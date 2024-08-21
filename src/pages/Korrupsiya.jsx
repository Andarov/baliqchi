import axios from "axios";
import React, { useEffect } from "react";

const Korrupsiya = () => {
  useEffect(() => {
    scrollTo(0, 0);
    document.title = "Baliqchi tuman hokimligi | Korrupsiya murojaat";
  });

  // comment is not andifayned
  const chatId = -1002231220656;
  const telegramBotId = "7278387106:AAG9xv6Xa85eDM35zKrFJaUClCOM2VtZC_A";
  const url = "https://api.telegram.org/bot" + telegramBotId + "/sendMessage";

  // get input value
  const getInputValue = (input) => {
    return input.value.trim();
  };

  // send request
  const sendRequest = (e) => {
    e.preventDefault();
    const ism = getInputValue(e.target.querySelector("#ism"));
    const com = getInputValue(e.target.querySelector("#komen"));
    const tel = getInputValue(e.target.querySelector("#telefon"));

    const message = `👤 Ismi: ${ism}
☎️ Telefon raqami: ${tel}
✉️ Izoh: ${com}`;

    // form data
    const formData = {
      chat_id: chatId,
      text: message,
    };

    axios
      .post(url, formData)
      .then(() => {
        alert("So'rov muvaffaqiyatli yuborildi!");
        window.location.reload();
      })
      .catch(() => {
        alert("Nimadir xato ketdi!");
      });
  };

  return (
    <div className="pt-12 max-800:pt-10 max-550:pt-6">
      <div className="flex flex-col items-center justify-center">
        <div className="container mb-20 max-[800px]:grid-cols-1">
          <h1 className="mb-8">Korrupsiya haqida xabar berish</h1>
          <form
            onSubmit={sendRequest}
            className="w-full flex flex-col items-start gap-5 max-lg:items-center max-[800px]:max-w-[600px]"
          >
            <div className="flex justify-between gap-5 w-full max-950:flex-col">
              <input
                id="ism"
                required
                min={4}
                max={144}
                type="text"
                placeholder="F.I.SH"
              />

              <input
                required
                type="tel"
                id="telefon"
                placeholder="+998 XX-XXX-XX-XX"
                pattern="(\+998|8)[\- ]?\d{2}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}"
              />
            </div>

            <textarea
              required
              min={12}
              id="komen"
              maxLength={496}
              className="h-56"
              placeholder="Xabaringiz"
            ></textarea>

            <button className="py-3.5 px-6 bg-[#2E4374] text-white rounded-lg max-[400px]:w-full">
              Yuborish
            </button>
          </form>
        </div>

        <div className="w-full h-1/2">
          <iframe
            className="border-2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193155.87812675498!2d71.81119893546608!3d40.84859338637114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bca0f4b7ee00d7%3A0xdfc5299b5374dd69!2z0JHQsNC70YvQutGH0LjQvdGB0LrQuNC5INGA0LDQudC-0L0sINCQ0L3QtNC40LbQsNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1705486262567!5m2!1sru!2s"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Korrupsiya;
