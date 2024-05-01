import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import{FreeMode, Pagination} from 'swiper/modules'

import{RxArrowTopRight} from 'react-icons/rx'
import { ServiceData } from '../js/slider';

import { Link } from 'react-router-dom';
import FilmekContext from "../context/FilmekContext";
import MainElem from "../components/MainElem";
import { useContext, useEffect } from "react";

const Main = () => {
  const {ofilm, keresOFilm}=useContext(FilmekContext);
  useEffect(() => {
    const fetchData = async () => { await keresOFilm() }
    fetchData()
  }, [])

  return(
    <div className='flex items-center justify-center flex-col h-200 bg-[#2c2b2d]'>
      <Swiper breakpoints={{
        340: {
          slidesPerView: 2,
          spaceBetween:15
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 15
        }
      }}
      loop={true}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='max-w-[90%] lg:max-w-[80%]96 mt-16'
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <Link to={`/filmek/${item.id}`}><div className='flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px]  w-[215px] lg:h-[400px] lg:w-[350px]'>
              <div className='absolute inset-0 bg-cover bg-center rounded-2xl' style={{backgroundImage: `url(${item.backgroundImage})`}} />
              <div className='absolute inset-0  opacity-10 group-hover:opacity-50'></div>
            </div></Link>
          </SwiperSlide>

          ))}
      </Swiper>
      <div className='mt-40 mb-40 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10'>
        {ofilm.map((film,i) => (<MainElem key={i} film={film}/>))}
      </div>
    </div>
  )
}

export default Main;