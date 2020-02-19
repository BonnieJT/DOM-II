const navTop = document.querySelector('.nav');
navTop.addEventListener('mouseover', () => {
    event.target.style.color = 'red';
});
navTop.addEventListener('mouseout', () => {
    event.target.style.color = 'blueviolet';
});

const fImage = document.querySelector('.intro img');
fImage.addEventListener('pointerover', () => {
    fImage.style.transition = '2s ease-in'
    fImage.style.transform = 'scale(1.3)';
});
fImage.addEventListener('pointerout', () => {
    fImage.style.transform = 'scale(1)';
});
fImage.addEventListener('transitionrun', () => {
    event.target.style.border = '3px #4B0082 solid';
})

window.addEventListener('resize', () => {
    alert('Not THAT size!')
});

const fPage = document.querySelector('body');
fPage.addEventListener('dblclick', () => {
    fPage.style.backgroundColor = '#2E9951';
});

const dText = document.querySelector('.content-pick');
dText.addEventListener('copy', () => {
    dText.style.backgroundColor = '#008B8B';
});

const dImage = document.querySelector('.content-destination img');
dImage.addEventListener('dragstart', () => {
    dImage.style.transition = '.5s ease-in';
    dImage.style.transform = 'scaleY(-1)';
});
dImage.addEventListener('dragend', () => {
    dImage.style.transform = 'scaleY(1)';
})

