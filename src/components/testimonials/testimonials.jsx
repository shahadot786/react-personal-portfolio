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
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veldistinctio laborum hic laboriosam repellat rem odit cumquerecusandae, ut eaque? Nulla accusantium dignissimos molestiasrepellat?',
  },
  {
    id: 2,
    avatar: AVATAR2,
    name: 'Zahid Hasan',
    review:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veldistinctio laborum hic laboriosam repellat rem odit cumquerecusandae, ut eaque? Nulla accusantium dignissimos molestiasrepellat?',
  },
  {
    id: 3,
    avatar: AVATAR3,
    name: 'Zahid Hasan',
    review:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veldistinctio laborum hic laboriosam repellat rem odit cumquerecusandae, ut eaque? Nulla accusantium dignissimos molestiasrepellat?',
  },
  {
    id: 4,
    avatar: AVATAR4,
    name: 'Zahid Hasan',
    review:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veldistinctio laborum hic laboriosam repellat rem odit cumquerecusandae, ut eaque? Nulla accusantium dignissimos molestiasrepellat?',
  },
  {
    id: 5,
    avatar: AVATAR5,
    name: 'Zahid Hasan',
    review:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veldistinctio laborum hic laboriosam repellat rem odit cumquerecusandae, ut eaque? Nulla accusantium dignissimos molestiasrepellat?',
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
