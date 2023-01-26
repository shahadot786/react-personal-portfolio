// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import React from 'react';
import './tetimonials.css';
import AVATAR1 from '../../assets/avatar1.jpg';
import AVATAR2 from '../../assets/avatar2.jpg';
import AVATAR3 from '../../assets/avatar3.jpeg';
import AVATAR4 from '../../assets/avatar4.jpg';
import AVATAR5 from '../../assets/avatar5.jpg';

const data = [
  {
    id: 1,
    avatar: AVATAR1,
    name: 'Zahid Hasan',
    review:
      'Lots of excellently written learning materials for javascript all packaged up into a handy app.',
  },
  {
    id: 2,
    avatar: AVATAR2,
    name: 'Tanzila Akter',
    review:
      "A good javascript programming companion. I'm able to save content for offline reference later.",
  },
  {
    id: 3,
    avatar: AVATAR3,
    name: 'MD.Tohin Miah',
    review:
      'Such a wonderful app for learning javascript.strongly recomended to learn through this app',
  },
  {
    id: 4,
    avatar: AVATAR4,
    name: 'Maliha Nishi',
    review:
      'Cool app for beginners in programming on javascript. Many information and examples.',
  },
  {
    id: 5,
    avatar: AVATAR5,
    name: 'Tanjimun Jannat Mafi',
    review:
      'With a great experience and have a great proven skills he has. I love to work with him.',
  },
];

const testimonials = () => {
  SwiperCore.use([Autoplay]);
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {data.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default testimonials;
