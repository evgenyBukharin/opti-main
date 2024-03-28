import Swiper from "swiper";
const blogSlider = new Swiper(".blog__slider", {
	enabled: true,
	breakpoints: {
		1140: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
		925: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		0: {
			enabled: false,
		},
	},
});
