import { GiBoxTrap } from "react-icons/gi";
import { MdOutlineFactory } from "react-icons/md";
import { GiRoad } from "react-icons/gi";
import { GiTicket } from "react-icons/gi";
import { GiBus } from "react-icons/gi";
import ArticleCard from "../components/ArticleCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import { useScrollTo } from "../components/useScrollTo";
import { articles } from "../articles";

export default function Formations() {
    useScrollTo()

    return (
        <div className="text-center flex w-full flex-col justify-center items-center h-fit pt-72 md:pt-96">

            <div className='flex h-64 md:h-96 w-full absolute items-center gap-5 capitalize top-0 !bg-no-repeat !bg-cover'
                style={{
                    background: `linear-gradient(
                        to bottom, 
                        rgb(0 0 0 / .6), rgb(0 0 0 / 0)
                    ), url("/images/champs.jpg")`,
                }}
            >

            </div>

            <div className="flex flex-col gap-4 max-w-7xl mb-10 rounded-xl ">

                <h2 className="font-bold mt-10">NOS SERVICES OFFERT </h2>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={10}
                    className="drink-card h-fit w-screen px-5 md:pt-6 custom-1480px:justify-center !-mx-6 items-center"
                >
                    <SwiperSlide className='!w-fit'>
                        <label className="flex   justify-center items-center gap-2 uppercase whitespace-nowrap rounded-full bg-primary text-white dark:border-transparent bg-tertiary px-3 py-1  dark:border-2 border-secondary/60">
                            <GiTicket className="text-xl" />
                            Approvisionnement
                        </label>
                    </SwiperSlide>

                    <SwiperSlide className='!w-fit'>
                        <label className="flex justify-center items-center gap-2 uppercase whitespace-nowrap rounded-full text-gray-500 dark:bg-white bg-tertiary px-3 py-1 border-2 dark:border-white border-secondary/60">
                            <GiRoad className="text-xl" />
                            industrie 
                            </label>
                    </SwiperSlide>

                    <SwiperSlide className='!w-fit'>
                        <label className="flex justify-center items-center gap-2 uppercase whitespace-nowrap rounded-full text-gray-500 dark:bg-white bg-tertiary px-3 py-1 border-2 dark:border-white border-secondary/60">
                            <GiBoxTrap className="text-xl" />
                                LIVRAISON ET COLIES
                                </label>
                    </SwiperSlide>

                    <SwiperSlide className='!w-fit'>
                        <label className="text-gray-500 flex justify-center items-center gap-2 uppercase whitespace-nowrap rounded-full dark:bg-white bg-tertiary px-3 py-1 border-2 dark:border-white border-secondary/60">
                            <GiBus className="text-xl" />
                            shipchandle
                        </label>
                    </SwiperSlide>
                </Swiper>
                <div className="flex flex-col md:flex-row gap-10 justify-center mt-10">
                    {articles.map((article, key) => <ArticleCard key={key} article={article} />)}
                </div>
            </div>
            <AboutSection />

            <Footer />
        </div>
    )
};
