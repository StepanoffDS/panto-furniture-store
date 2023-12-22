import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function animations() {
	const breakpoint = 992
	gsap.registerPlugin(ScrollTrigger)
	let mm = gsap.matchMedia();

	mm.add({
		isDesktop: `(min-width: ${breakpoint}px)`,
		isMobile: `(max-width: ${breakpoint - 1}px)`,
		isBenefitsMobile: `(max-width: 630px)`,
	},
		(context) => {
			let { isDesktop, isBenefitsMobile } = context.conditions

			gsap.from(".benefits", {
				scrollTrigger: ".benefits",
				x: isDesktop ? -2000 : 0,
				duration: isDesktop ? 1 : 0,
			})

			gsap.from([".discover__title", ".discover__form"], {
				scrollTrigger: ".discover",
				x: isDesktop ? -2000 : 0,
				y: isDesktop ? 0 : -2000,
				duration: 1,
			})

			gsap.from([".discover__subtitle"], {
				scrollTrigger: ".discover",
				x: isDesktop ? 2000 : 0,
				y: isDesktop ? 0 : 2000,
				duration: isDesktop ? 1 : 1.15,
			})
		});
}

export default animations