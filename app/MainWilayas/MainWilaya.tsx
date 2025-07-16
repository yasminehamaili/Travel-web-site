'use client';

import React from 'react'
import { useEffect, useState } from 'react'
import style  from './MainWilaya.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image'

type Wilaya={
    code: number;
    name: string;
    description: string;
    image:string;
}
const MainWilaya = () => {
    const [wilayas, setWilayas]= useState<Wilaya[]>([]);
    useEffect(()=>{
        const fetchWilayas= async() =>{
            const res= await fetch("api/wilayas.json")
            const data=await res.json();
            setWilayas(data.wilayas)
        };
        fetchWilayas()
    },[])
  return (
    <>
    <section className={style.mainWilaya} id='wialays'>
        <div className={style.wilayaCards}>
            <button className={`${style.swipe} prev-btn`}><i className="fa-solid fa-caret-left"></i></button>
            <Swiper 
            modules={[Navigation]}
            slidesPerGroup={1}
            slidesPerView={1}
            spaceBetween={5}
            autoHeight={true}
            navigation={{
                nextEl:".next-btn",
                prevEl:".prev-btn"
            }}
            loop
            >
                {wilayas.map((wilaya)=>(
                    <SwiperSlide key={wilaya.code} className={style.wilayaCard}>
                        <div className={style.wilayaInfo}>
                            <h1 className={style.wilayaName}>{wilaya.name}</h1>
                            <p className={style.wilayaDesc}>{wilaya.description}</p>
                            <button className={style.ta}><a href="/login">See tours & activities</a></button>
                        </div>
                        <div>
                            <Image src={wilaya.image} alt={wilaya.name} width={450} height={200} className={style.img}></Image>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
                    <button className={`${style.swipe} next-btn`}><i className="fa-solid fa-caret-right"></i></button>
                
        </div>
    </section>
    </>
  )
}

export default MainWilaya