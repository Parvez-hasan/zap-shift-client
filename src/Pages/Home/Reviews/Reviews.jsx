import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewsCart from "./ReviewsCart";

const Reviews = ({ reviewsPromiss }) => {
  const reviews = use(reviewsPromiss);
  console.log(reviews);

  return (
    <div>
      <div className="text-center mt-3">
        <h2 className="text-2xl font-bold ">Reviews</h2>
        <p className="py-2 px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          molestias, qui quos inventore quas perferendis cumque praesentium nisi
          omnis, nam, impedit alias error eum sed facere non expedita!
          Obcaecati, asperiores quo. Illo nisi pariatur corporis dolore
          asperiores inventore consequuntur autem, perspiciatis architecto fuga
          quos voluptas laudantium rerum exercitationem iusto cum!
        </p>
      </div>
      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 40,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          scale: 0.85,
          slideShadows: true,
        }}
         autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay ]}
        className="mySwiper"
      >
         {
            reviews.map(review => <SwiperSlide key={review.id}>
           <ReviewsCart review={review}></ReviewsCart>
          </SwiperSlide>)
         }
      </Swiper>
    </div>
  );
};

export default Reviews;
