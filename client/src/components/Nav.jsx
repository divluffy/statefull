import React, { useEffect, useState } from "react";

function Nav() {
  const [isACtive, setIsACtive] = useState("");
  const [mode, setMode] = useState("");
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const listenTo = (e) => {
    if (window.scrollY > 100) setIsACtive("active");
    else setIsACtive("un");
  };

  const onResize = (e) => {
    console.log(window.innerWidth);
    if (window.innerWidth < 900) setMode("mode");
    else setMode("");
  };

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenTo);
    return () => {
      window.removeEventListener("scroll", listenTo);
    };
  }, []);

  const Btn = ({ title, clas, replace }) => {
    return (
      <button
        onClick={() => {
          window.location.replace(replace);
          setOpen(false);
        }}
        className={clas}
      >
        {title}
      </button>
    );
  };

  return (
    <nav className={`${isACtive} ${mode}`}>
      {mode ? (
        <>
          <div className="menu_mode" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g data-name="Layer 2">
                <g data-name="menu">
                  <rect width="18" height="2" x="3" y="11" rx=".95" ry=".95" />
                  <rect width="18" height="2" x="3" y="16" rx=".95" ry=".95" />
                  <rect width="18" height="2" x="3" y="6" rx=".95" ry=".95" />
                </g>
              </g>
            </svg>
          </div>
          {open && (
            <>
              <div className="layout_menu" onClick={toggleMenu}></div>
              <div className="mode_phone">
                <Btn
                  title={
                    <>
                      <span>.</span>FullBase
                    </>
                  }
                  clas="logo"
                  replace="/#header"
                />
                <ul>
                  <Btn title="الرئيسية" replace="/#header" />
                  <Btn title="متخصصون في" replace="/#specialized" />
                  <Btn title="معلومات عنا" replace="/#" />
                  <Btn title="التقنيات" replace="/#technologies" />
                  <Btn title="الحلول" replace="/#" />
                  <Btn title="التصميم" replace="/#" />
                </ul>
                <Btn
                  title="تواصل الان"
                  clas="btn_contact"
                  replace="/#contact-us"
                />
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <Btn title="تواصل الان" clas="btn_contact" replace="/#contact-us" />
          <ul>
            <Btn title="الرئيسية" replace="/#header" />
            <Btn title="متخصصون في" replace="/#specialized" />
            <Btn title="معلومات عنا" replace="/#" />
            <Btn title="التقنيات" replace="/#technologies" />
            <Btn title="الحلول" replace="/#" />
            <Btn title="التصميم" replace="/#" />
          </ul>
        </>
      )}
      <Btn
        title={
          <>
            <span>.</span>FullBase
          </>
        }
        clas="logo"
        replace="/#header"
      />
    </nav>
  );
}

export default Nav;
