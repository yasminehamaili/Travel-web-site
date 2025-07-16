"use client";
import style from './Header.module.css'
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from 'next/link';

type Activity = {
    id: number;
    title: string;
    description: string;
    image: string;
};
const Header = () => {


    const [activities, setActivities] = useState<Activity[]>([]);
    useEffect(() => {
    const fetchActivities = async () => {
        const res = await fetch("/api/activities.json", { cache: "no-store" });
        const data = await res.json();
        setActivities(data.activities); 
    };
    fetchActivities();
}, []);
    
    return (
        <>
        <header className={style.header}>
            <nav className={style.navBarEl}>
                <ul className={style.list}>
                    <li><a className={style.linkNav} href="#tours">tours</a></li>
                    <li><a className={style.linkNav} href="#wilayas">wilayas</a></li>
                    <li><a className={style.linkNav} href="#footer">contact us</a></li>
                </ul>
                <Link href="/login"><i className={`${style.userIcon} fa-solid fa-user`}></i></Link>
            </nav>
            <div className={style.sloganEl}>
                <h2 className={style.sloganTitle}>Discover your next adventure</h2>
                <p className={style.slogan}>explore breathtaking destinations, plan with ease, and travel smarter.</p>
                <button className={style.tourBtn}><a href="/login">Select Tour</a></button>
            </div>
            <div className={style.activitiesCards} id='cards'>
                <div className={`${style.activitiesCard}`}>
                    <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={3}
                    slidesPerGroup={1}
                    navigation={{
                        nextEl: '.next-btn'
                    }}
                    loop
                    className={style.activitiesSlider}
                    >
                    {activities.map((activity) => (
                        <SwiperSlide key={activity.id}>
                        <div className={style.activity}>
                            <Image
                            className={style.imgActivity}
                            src={activity.image}
                            alt={activity.title}
                            width={500}
                            height={500}
                            />
                            <h1 className={style.activityTitle}>{activity.title}</h1>
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
                <button className={`${style.nextBtn} next-btn`} id='next-btn'><i className={`${style.nextBtnC} fa-solid fa-arrow-right`}  ></i></button>
                
            </div>
        </header>
        </>
    )
}

export default Header