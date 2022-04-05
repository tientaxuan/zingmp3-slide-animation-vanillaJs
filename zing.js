let i = 0;
const slide = document.querySelectorAll('.slide');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

btnPrev.addEventListener(
  'click',
  (event) => {
    event.preventDefault();
    if (Math.abs(i) % 6 === 0) i = 0;
    i++;
    let previous = slide[Math.abs(i) % 6].classList;
    let selected = slide[(Math.abs(i) + 1) % 6].classList;
    let next = slide[(Math.abs(i) + 2) % 6].classList;
    let last = slide[(Math.abs(i) + 3) % 6].classList;
    let add = slide[(Math.abs(i) + 4) % 6].classList;
    let first = slide[(Math.abs(i) + 5) % 6].classList;
    previous.remove(previous.item(1));
    previous.add('previous');
    selected.remove(selected.item(1));
    selected.add('selected');
    next.remove(next.item(1));
    next.add('next');
    last.remove(last.item(1));
    last.add('last');
    add.remove(add.item(1));
    add.add('add');
    first.remove(first.item(1));
    first.add('first');
    console.log(i);
  },
  false
);
btnNext.addEventListener(
  'click',
  (event) => {
    event.preventDefault();
    if (Math.abs(i) % 6 === 0) i = 6;
    i--;
    let previous = slide[Math.abs(i) % 6].classList;
    let selected = slide[(Math.abs(i) + 1) % 6].classList;
    let next = slide[(Math.abs(i) + 2) % 6].classList;
    let last = slide[(Math.abs(i) + 3) % 6].classList;
    let add = slide[(Math.abs(i) + 4) % 6].classList;
    let first = slide[(Math.abs(i) + 5) % 6].classList;
    previous.remove(previous.item(1));
    previous.add('previous');
    selected.remove(selected.item(1));
    selected.add('selected');
    next.remove(next.item(1));
    next.add('next');
    last.remove(last.item(1));
    last.add('last');
    add.remove(add.item(1));
    add.add('add');
    first.remove(first.item(1));
    first.add('first');
    console.log(i);
  },
  false
);
