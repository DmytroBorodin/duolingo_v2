'use strict'

let pagesArr = [...document.querySelectorAll('.page')];

let mainBtnsArray = [...document.querySelectorAll('.main__button')];

let iconBtnsArray = [...document.querySelectorAll('.icon__button')];

let backBtnsArray = [...document.querySelectorAll('.back__icon')];

let lastPageBtns = [...pagesArr[pagesArr.length-1].querySelectorAll('button')];
console.log(lastPageBtns);

let switchPage = (el) => {
	pagesArr.forEach(page => {
		page.classList.add('disabled');
	})
	el.classList.remove('disabled');
}

mainBtnsArray.forEach(m_btn => {
	m_btn.addEventListener('mousedown', () => {
		m_btn.classList.add('clicked');
	})
	m_btn.addEventListener('mouseup', () => {
		let pageToSwitch = +m_btn.getAttribute('page');
		m_btn.classList.remove('clicked');
		switchPage(pagesArr[pageToSwitch]);
	})
});

mainBtnsArray.forEach(m_btn => {
	m_btn.addEventListener('touchstart', () => {
		m_btn.classList.add('clicked');
	})
	m_btn.addEventListener('touchend', () => {
		let pageToSwitch = +m_btn.getAttribute('page');
		m_btn.classList.remove('clicked');
		switchPage(pagesArr[pageToSwitch]);
	})
});

iconBtnsArray.forEach(i__btn => {
	i__btn.addEventListener('mousedown', () => {
		i__btn.classList.add('clicked');
	})
	i__btn.addEventListener('mouseup', () => {
		let pageToSwitch = +i__btn.getAttribute('page');
		i__btn.classList.remove('clicked');
		switchPage(pagesArr[pageToSwitch]);
	})
});

iconBtnsArray.forEach(i__btn => {
	i__btn.addEventListener('touchstart', () => {
		i__btn.classList.add('clicked');
	})
	i__btn.addEventListener('touchend', () => {
		let pageToSwitch = +i__btn.getAttribute('page');
		i__btn.classList.remove('clicked');
		switchPage(pagesArr[pageToSwitch]);
	})
});

lastPageBtns.forEach(l_btn => {
	l_btn.addEventListener('mousedown', () => {
		l_btn.classList.add('clicked');
	});
	l_btn.addEventListener('mouseup', () => {
		l_btn.classList.remove('clicked');
	});
});
lastPageBtns.forEach(l_btn => {
	l_btn.addEventListener('touchstart', () => {
		l_btn.classList.add('clicked');
	});
	l_btn.addEventListener('touchend', () => {
		l_btn.classList.remove('clicked');
	});
});


backBtnsArray.forEach(b_btn => {
	b_btn.addEventListener('click', () => {
		let pageToSwitch = backBtnsArray.indexOf(b_btn);
		switchPage(pagesArr[pageToSwitch]);
	})
})