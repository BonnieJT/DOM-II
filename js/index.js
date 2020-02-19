const navTop = document.querySelector('.nav');
navTop.addEventListener('mouseover', () => {
    event.target.style.color = 'red';
});
navTop.addEventListener('mouseout', () => {
    event.target.style.color = 'blueviolet';
});

const fImage = document.querySelector('img');
fImage.addEventListener('mousedown', () => {
    event.target.style.transform = 'scale(1.5)';
});
fImage.addEventListener('mouseup', () => {
    event.target.style.transform = 'scale(1)';
});

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
})


