function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	const subNav = document.querySelectorAll('.mobile-sub-nav')
	const mobNavItem = document.querySelectorAll('.mobile-nav__item')

	navBtn.onclick = function (e) {
		e.stopPropagation()
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
		document.body.classList.toggle('bg');
	};

	mobNavItem.forEach(element => {
		element.addEventListener('click', () => {
			if (element.querySelector('.mobile-sub-nav') !== null) {
				element.querySelector('.mobile-sub-nav').classList.toggle('none')
			}
			return
		})
	})

	document.addEventListener('click', () => {
		nav.classList.remove('mobile-nav--open');
		menuIcon.classList.remove('nav-icon--active');
		document.body.classList.remove('no-scroll');
		document.body.classList.remove('bg');
	})
}

export default mobileNav;