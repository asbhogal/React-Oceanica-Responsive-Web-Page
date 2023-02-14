import activityData from "../js/activityData";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination, Thumbs, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 

const ActivityCard = () => {

    return (
            <Swiper
                modules={ [Autoplay, FreeMode, Pagination, Thumbs, A11y] }
                spaceBetween={ 90 }
                pagination={ { clickable: true } }
                autoplay={ true }
                loop={ true }
                freeMode={ true }

                breakpoints = {{
                    1440: {
                        slidesPerView: 3
                    },
                    1024: {
                        slidesPerView: 3
                    },
                    744: {
                        slidesPerView: 2
                    },
                    375: {
                        slidesPerView: 1
                    }
                }}
            >

            { activityData.map(data => (
                <SwiperSlide className="ActivityCard" key={ data.id }>
                    <img className="ActivityImage" src={ require(`/src/assets/images/${ data.img }`) }></img>
                    <span className="ActivityTitle">{  data.title }</span>
                    <p className="ActivityDescription">{ data.description }</p>
                    <p className="ActivityPrice">from &#36;{ data.price } pp</p>
                </SwiperSlide>
            )) }
        </Swiper>          
    )
};

export default ActivityCard;