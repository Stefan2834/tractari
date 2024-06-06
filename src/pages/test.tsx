import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Test() {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			slidesPerView={3}
			centeredSlides={true}
			loop={true}
			navigation
			EffectFade
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log("slide change")}
			className="w-screen h-screen"
		>
			<SwiperSlide className="slide">Slide 1</SwiperSlide>
			<SwiperSlide className="slide">Slide 2</SwiperSlide>
			<SwiperSlide className="slide">Slide 3</SwiperSlide>
			<SwiperSlide className="slide">Slide 4</SwiperSlide>
		</Swiper>
	);
}
