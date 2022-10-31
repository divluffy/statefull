import React, { useState } from "react";

function ContactUs() {
  const [form, setForm] = useState({});
  console.log("form: ", form);

  const handlChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact-us" className="contactus">
      <div className="contact_now">
        <div className="title">
          <span>تواصل معنا</span>
        </div>
        <form onSubmit={onSubmit}>
          <input
            onChange={handlChange}
            name="name"
            type="text"
            placeholder="الاسم"
            required
          />
          <input
            onChange={handlChange}
            name="phone"
            type="tel"
            placeholder="رقم الهاتف"
            required
          />
          <input
            onChange={handlChange}
            name="email"
            type="email"
            placeholder="ايميل"
            required
          />
          <textarea
            onChange={handlChange}
            name="msg"
            placeholder="الرسالة.."
            required
          ></textarea>
          <button>أرسال</button>
        </form>
      </div>

      <div className="fast_contact">
        <div className="bowl_fast_contact">
          <div>
            <div className="title">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 29.495C35 30.035 34.8798 30.59 34.6244 31.13C34.3691 31.67 34.0386 32.18 33.6029 32.66C32.8668 33.47 32.0556 34.055 31.1392 34.43C30.2379 34.805 29.2614 35 28.2098 35C26.6775 35 25.0401 34.64 23.3125 33.905C21.5849 33.17 19.8573 32.18 18.1447 30.935C16.4171 29.675 14.7797 28.28 13.2173 26.735C11.67 25.175 10.2729 23.54 9.02604 21.83C7.79419 20.12 6.8027 18.41 6.08162 16.715C5.36054 15.005 5 13.37 5 11.81C5 10.79 5.18027 9.815 5.54081 8.915C5.90135 8 6.47221 7.16 7.2684 6.41C8.22984 5.465 9.28142 5 10.3931 5C10.8137 5 11.2344 5.09 11.6099 5.27C12.0005 5.45 12.346 5.72 12.6164 6.11L16.1017 11.015C16.3721 11.39 16.5674 11.735 16.7026 12.065C16.8378 12.38 16.9129 12.695 16.9129 12.98C16.9129 13.34 16.8077 13.7 16.5974 14.045C16.4021 14.39 16.1167 14.75 15.7561 15.11L14.6144 16.295C14.4492 16.46 14.3741 16.655 14.3741 16.895C14.3741 17.015 14.3891 17.12 14.4191 17.24C14.4642 17.36 14.5093 17.45 14.5393 17.54C14.8097 18.035 15.2754 18.68 15.9364 19.46C16.6124 20.24 17.3335 21.035 18.1147 21.83C18.9259 22.625 19.7071 23.36 20.5033 24.035C21.2844 24.695 21.9304 25.145 22.4412 25.415C22.5163 25.445 22.6064 25.49 22.7116 25.535C22.8317 25.58 22.9519 25.595 23.0871 25.595C23.3425 25.595 23.5378 25.505 23.7031 25.34L24.8448 24.215C25.2203 23.84 25.5809 23.555 25.9264 23.375C26.2719 23.165 26.6174 23.06 26.993 23.06C27.2784 23.06 27.5789 23.12 27.9094 23.255C28.2399 23.39 28.5854 23.585 28.9609 23.84L33.9334 27.365C34.324 27.635 34.5944 27.95 34.7596 28.325C34.9099 28.7 35 29.075 35 29.495Z"
                  stroke="#2F80ED"
                  stroke-width="3"
                  strokeMiterlimit="10"
                />
              </svg>
              <span>اتصل بنا</span>
            </div>
            <span>+9722277755</span>
          </div>
          <div>
            <div className="title">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9999 22.3833C22.8718 22.3833 25.1999 20.0552 25.1999 17.1833C25.1999 14.3115 22.8718 11.9833 19.9999 11.9833C17.128 11.9833 14.7999 14.3115 14.7999 17.1833C14.7999 20.0552 17.128 22.3833 19.9999 22.3833Z"
                  stroke="#2F80ED"
                  stroke-width="3"
                />
                <path
                  d="M6.03326 14.15C9.31659 -0.283334 30.6999 -0.266667 33.9666 14.1667C35.8833 22.6333 30.6166 29.8 25.9999 34.2333C22.6499 37.4667 17.3499 37.4667 13.9833 34.2333C9.38326 29.8 4.11659 22.6167 6.03326 14.15Z"
                  stroke="#2F80ED"
                  stroke-width="3"
                />
              </svg>

              <span>عنوان</span>
            </div>
            <span>شارع الوحدة ام الفحم يمين شمال فوق تحت</span>
          </div>
          <div>
            <div className="title">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 4.99999H14.9999C11.7499 14.7333 11.7499 25.2667 14.9999 35H13.3333M24.9999 4.99999C28.2499 14.7333 28.2499 25.2667 24.9999 35M4.99992 26.6667V25C14.7333 28.25 25.2666 28.25 34.9999 25V26.6667M4.99992 15C14.7333 11.75 25.2666 11.75 34.9999 15M36.6666 20C36.6666 29.2047 29.2047 36.6667 19.9999 36.6667C10.7952 36.6667 3.33325 29.2047 3.33325 20C3.33325 10.7952 10.7952 3.33333 19.9999 3.33333C29.2047 3.33333 36.6666 10.7952 36.6666 20Z"
                  stroke="#2F80ED"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>ارسل بريد</span>
            </div>
            <span>div.jo2022@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
