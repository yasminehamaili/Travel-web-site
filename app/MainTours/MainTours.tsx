'use client';

import React from 'react'
import style from './MainTours.module.css'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image';

type Tours ={
    id:number;
    title:string;
    region:string;
    image:string;
    description:string;
}
const MainTours = () => {
    const [tours, setTours] = useState<Tours[]>([]);
    useEffect(()=>{
        const fetchTours= async() =>{
            const res= await fetch('api/tours.json', {cache: 'no-store'});
            const data= await res.json();
            setTours(data.tours);
        };
        fetchTours();
    }, [])

    return (
    <>
        <div className={style.mainTours} id='tours'>
            <h1 className={style.bigTitle}>Tours You Can Join</h1>
            <div className={style.tourCards}>
                <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerGroup={1}
                slidesPerView={3}
                breakpoints={{
                    0: {
                    slidesPerView: 1,
                    },
                    720:{
                        slidesPerView:3,
                    }
                }}

                navigation={{
                    nextEl:".nextBtn",
                    prevEl:".preBtn"
                }}
                loop
                className={style.toursSlider}
                >
                        {tours.map((tour)=>(
                            <SwiperSlide key={tour.id}>
                        <div className={style.tourCard} >
                            <h6 className={style.region}>{tour.region}</h6>
                            <Image src={tour.image} alt={tour.title} width={200} height={200} className={style.img}></Image>
                            <div className={style.titleAndBtn}>
                                <h2 className={style.tourTitle}>{tour.title}</h2>
                                <button className={style.tourBtn}><a href="/login">Select Tour</a></button>
                            </div>
                            
                            <p className={style.tourDesc}>{tour.description}</p>
                        </div>
                    </SwiperSlide>))}
                </Swiper>
                <div className={style.swipBtns}>                
                    <button className={`${style.swip} preBtn`}><i className="fa-solid fa-caret-left"></i></button>
                    <button className={`${style.swip} nextBtn`}><i className="fa-solid fa-caret-right"></i></button>
                </div>

            </div>
        </div>
    </>
    )
}

export default MainTours