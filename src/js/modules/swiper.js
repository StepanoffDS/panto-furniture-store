import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.products-slider__swiper', {
	modules: [Navigation],
	slidesPerView: 1,
	spaceBetween: 42,
	// loop: true,
	navigation: {
		nextEl: '.product-slider__btn--next',
		prevEl: '.product-slider__btn--prev',
	},
	breakpoints: {
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		920: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1230: {
			slidesPerView: 4,
			spaceBetween: 30,
		}
	}
});

export default swiper