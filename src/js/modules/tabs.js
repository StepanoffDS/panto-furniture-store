function tabsSwiper() {
	const tabsBtns = document.querySelectorAll('[data-tab]')
	const tabsProducts = document.querySelectorAll('[data-tab-value]')

	tabsBtns.forEach(btn => {
		btn.addEventListener('click', function () {
			for (const btn of tabsBtns) {
				btn.classList.remove('tab-controls__btn--active')
			}

			this.classList.add('tab-controls__btn--active')

			// Hide all products and Show necessary products
			for (const product of tabsProducts) {
				if (this.dataset.tab === 'all') {
					product.classList.remove('none')
				} else {
					if (product.dataset.tabValue === this.dataset.tab) {
						product.classList.remove('none')
					} else {
						product.classList.add('none')
					}
				}
			}

			swiper.update()
		})
	});
}

export default tabsSwiper