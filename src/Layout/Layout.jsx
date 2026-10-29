import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import img1 from "/public/unsplash_3JmfENcL24M.png"
import html from "/public/Group 12.svg"
import css from '/public/css.png'
import js from '/public/js.png'
import react from '/public/react.png'
import git from '/public/git.png'
import github from '/public/github.png'
import next from '/public/next.jfif'
import css1 from '/public/css.png'
import team1 from "/public/Frame 12302.png"
import projectsMy from "/public/Group 47467.png"
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel
} from "@/components/ui/select"
const Layout = () => {
  const { t, i18n } = useTranslation()
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <div className="dark:bg-black dark:text-white">

          <header className="flex  justify-between items-center px-15 py-4">
            <h1>FullStack Developer</h1>
            <div className="flex gap-5 cursor-pointer">
              <h1>{t("home")}</h1>
              <h1>{t("service")}</h1>
              <h1>{t("projects")}</h1>
              <h1>{t("about")}</h1>
              <h1>{t("client")}</h1>
              <h1>{t("contact")}</h1>
            </div>
            <div className="flex gap-5">
              <Button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "LightMode" : "DarkMode"}</Button>
              <Select
                value={i18n.language}
                onValueChange={(lang) => {
                  i18n.changeLanguage(lang);
                  localStorage.setItem("lang", lang);
                }}
              >
                <SelectTrigger className="w-full max-w-28">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Language</SelectLabel>
                    <SelectItem className="uppercase" value="ru">RU</SelectItem>
                    <SelectItem value="en">EN</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </header>


          <div className="flex justify-between mt-4 items-center px-15">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl w-[400px]">{t("name")}</h1>
              <p className="w-[400px]">{t("aboutMe")}</p>
              <Button variant="outline" className="hover:bg-[#555dce]">View Projects</Button>
            </div>
            <div><img src={img1} alt="" /></div>
          </div>

          <div className="py-15 ">
            <h1 className="text-4xl text-center mb-5">{t("skills")}</h1>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              loop={true}
              slidesPerView={5}
              spaceBetween={20}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="h-[200px]"
            >
              <SwiperSlide className=" text-2xl">
                <div className="flex  flex-col items-center justify-center gap-2">
                  <div> <img className="w-[100px]" src={html} alt="" /></div>
                  <h1>HTML</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" text-2xl">
                <div className="flex  flex-col items-center justify-center gap-2">
                  <div> <img className="w-[100px]" src={css1} alt="" /></div>
                  <h1>CSS</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" text-2xl">
                <div className="flex  flex-col items-center justify-center gap-2">
                  <div> <img className="w-[100px]" src={js} alt="" /></div>
                  <h1>JavaScript</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" text-2xl">
                <div className="flex  flex-col items-center justify-center gap-2">
                  <div> <img className="w-[100px]" src={react} alt="" /></div>
                  <h1>REACT</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" text-2xl">
                <div className="flex  flex-col items-center justify-center gap-2 ">
                  <div> <img className="w-[100px] rounded-[70%]" src={git} alt="" /></div>
                  <h1>Git</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" text-2xl">
                <div className="flex  flex-col items-center justify-center gap-2">
                  <div> <img className="w-[100px] rounded-full" src={github} alt="" /></div>
                  <h1>GitHub</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" text-2xl">
                <div className="flex  flex-col items-center justify-center gap-2">
                  <div> <img className="w-[100px] rounded-full" src={next} alt="" /></div>
                  <h1>NextJS</h1>
                </div>
              </SwiperSlide>
            </Swiper>

          </div>


          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl text-center">{t("teams")}</h1>
            <div className="flex gap-30">
              <div>
                <div className="flex flex-col gap-2">
                  <div><img src={team1} alt="" /></div>
                  <h1>UI & UX Design</h1>
                  <p className="w-[260px]">{t("teamAbout")}</p>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <div><img src={team1} alt="" /></div>
                  <h1>UI & UX Design</h1>
                  <p className="w-[260px]">{t("teamAbout")}</p>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <div><img src={team1} alt="" /></div>
                  <h1>UI & UX Design</h1>
                  <p className="w-[260px]">{t("teamAbout")}</p>
                </div>
              </div>
            </div>
          </div>


          <div className="my-20 text-center">
            <h1 className="mb-5 text-4xl">My completed projects</h1>
            <div><img src={projectsMy} alt="" /></div>
          </div>

          <footer className="px-30 flex justify-between">


            <nav className="flex flex-col gap-2">
              <h6 className="footer-title">{t("services")}</h6>
              <p>{t("branding")}</p>
              <p>{t("design")}</p>
              <p>{t("marketing")}</p>
              <p>{t("advertisement")}</p>
            </nav>

            <nav className="flex flex-col gap-2">
              <h6 className="footer-title">{t("company")}</h6>
              <p>{t("aboutUs")}</p>
              <p>{t("contact")}</p>
              <p>{t("jobs")}</p>
              <p>{t("pressKit")}</p>
            </nav>

            <nav className="flex flex-col gap-2">
              <h6 className="footer-title">{t("legal")}</h6>
              <p>{t("terms")}</p>
              <p>{t("privacy")}</p>
              <p>{t("cookie")}</p>
            </nav>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
