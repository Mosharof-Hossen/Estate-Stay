// mport React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';
import './Banner.css'

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';


const Banner = () => {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow,Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://i.ibb.co/Pmcj5XS/1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/vhBMnpx/2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/bg8MPmF/3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/0thpMdr/4.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/PT9wsDk/5.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/s21jK3K/6.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/3r5GBGp/7.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/Jqhh8Dk/8.jpg" alt="" /></SwiperSlide>
                

            </Swiper>
        </div>
    );
};

// https://i.ibb.co/Pmcj5XS/1.jpg
// https://i.ibb.co/vhBMnpx/2.jpg
// https://i.ibb.co/bg8MPmF/3.jpg
// https://i.ibb.co/0thpMdr/4.jpg
// https://i.ibb.co/PT9wsDk/5.jpg
// https://i.ibb.co/s21jK3K/6.jpg
// https://i.ibb.co/3r5GBGp/7.jpg
// https://i.ibb.co/Jqhh8Dk/8.jpg

export default Banner;