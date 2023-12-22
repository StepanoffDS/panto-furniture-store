function header() {
	let lastScroll = 0;
	const defaultOffset = 80;
	const header = document.querySelector('.header')

	const scrollPosition = () => document.documentElement.scrollTop
	const containHide = () => header.classList.contains('hide')

	if (scrollPosition() > 200) {
		header.classList.add('header--scrolled')
	}

	window.addEventListener('scroll', () => {
		if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
			// scroll down
			header.classList.add('hide')
			header.classList.remove('header--scrolled')
		} else if (scrollPosition() < lastScroll && containHide()) {
			// scroll up
			header.classList.remove('hide')
			header.classList.add('header--scrolled')
		}
		if (scrollPosition() <= 50 && !containHide()) {
			header.classList.remove('header--scrolled')
		}
		lastScroll = scrollPosition()
	})
}

export default header