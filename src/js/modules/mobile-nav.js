function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	const mobNavItem = document.querySelectorAll('.mobile-nav__item')

	navBtn.onclick = function (e) {
		e.stopPropagation()
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
		document.body.classList.toggle('bg');
	};

	nav.onclick = (e) => {
		e.stopPropagation()
	}

	mobNavItem.forEach(element => {
		if (element.querySelector('.mobile-sub-nav')) {
			element.addEventListener('click', function () {
				element.querySelector('.mobile-sub-nav').classList.toggle('none')
			})
		} else {
			element.addEventListener('click', closeMobMenu)
		}
	})

	document.addEventListener('click', closeMobMenu)

	function closeMobMenu() {
		nav.classList.remove('mobile-nav--open');
		menuIcon.classList.remove('nav-icon--active');
		document.body.classList.remove('no-scroll');
		document.body.classList.remove('bg');
	}
}

export default mobileNav;