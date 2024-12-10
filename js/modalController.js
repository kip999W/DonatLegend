const modalController = ({modal, btnOpen, btnClose}) => {
	const buttonEl = document.querySelectorAll(btnOpen);
	const modalEl = document.querySelector(modal);

	modalEl.style.cssText = `
		display: flex;
		visibility: hidden;
		line-height: 1.3;
		opacity: 0;
		transition: opacity 300ms ease-in-out;
		z-index: 9999;
	`;

	const openModal = () => {
		modalEl.style.visibility = 'visible';
		modalEl.style.opacity = 1;
	};

	const closeModal = event => {
		const target = event.target;

		if (target === modalEl || target.closest(btnClose)) {
			modalEl.style.opacity = 0;
			setTimeout(() => { modalEl.style.visibility = 'hidden'; }, 300);
		}
	};

	buttonEl.forEach(btn => {
		btn.addEventListener('click', openModal);
	});

	modalEl.addEventListener('click', closeModal);
};

const modals = [
	{modal: '.modal1', btnOpen: '.section__btn1'},
];

modals.forEach(({modal, btnOpen}) => {
	modalController({modal, btnOpen, btnClose: '.modal__close'});
});