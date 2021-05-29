import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
    Pagination
  } from 'swiper/core';
  
SwiperCore.use([Pagination]);

export default function Header(props) {
    return (
        <div className="header-main">
            <div>
                <h2 className="header-title">Why our directory</h2>
            </div>
            { props.scrWidth > 575 
                ? <ul className="advantages flex-container">
                    {props.advantages.map(advantage => 
                        <li className="flex-item" key={ advantage.id }>
                            <div className="flex-item-header">
                                <div className="flex-item-img-container">
                                    <div className="flex-item-img-bg-circle"></div>
                                    <img src={ advantage && advantage.img} alt="" className="item-logo"/>
                                </div>
                                <h4 className="flex-item-title">{ advantage.title }</h4>
                            </div>
                            <p className="flex-item-content">{ advantage.content }</p>
                        </li>
                    )}
                </ul> 
                : <Swiper
                    className="advantages flex-container"
                    pagination={true}
                    spaceBetween={24}
                    slidesPerView={1}
                    >
                    {props.advantages.map(advantage => 
                        <SwiperSlide className="flex-item" key={ advantage.id }>
                            <div className="flex-item-header">
                                <div className="flex-item-img-container">
                                    <div className="flex-item-img-bg-circle"></div>
                                    <img src={ advantage && advantage.img} alt="" className="item-logo"/>
                                </div>
                                <h4 className="flex-item-title">{ advantage.title }</h4>
                            </div>
                            <p className="flex-item-content">{ advantage.content }</p>
                        </SwiperSlide>
                    )}
                </Swiper> 
            }
        </div>
    )
}