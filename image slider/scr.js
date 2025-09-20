const left = document.getElementById('left');
const right = document.getElementById('right');
const slider = document.querySelector('.slider');

const images = document.querySelectorAll('.img')

let slidenumber = 1;
const length = images.length;

const nextslide =()=> {
        slider.style.transform = `translateX(-${slidenumber * 800}px)`;
        slidenumber++;
}  

const prevslide =()=> {
        slider.style.transform = `translateX(-${(slidenumber-2) * 800}px)`;
        slidenumber--;
}  


const getfirstslide =()=> {
        slider.style.transform = 'translateX(0px)';
        slidenumber = 1;
}

const getlastslide =()=> {
        slider.style.transform = `translateX(-${(slidenumber-1) * 800}px)`;
        slidenumber = length;
}

right.addEventListener('click', () => {
    if (slidenumber < length) {
        nextslide ();

    } else {
        getfirstslide ();
 }
});

left.addEventListener('click', () => {
    if (slidenumber > 1) {
        prevslide ();

    } else {
        getlastslide ();
 }
});

