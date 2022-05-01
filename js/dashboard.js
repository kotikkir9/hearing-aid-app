// =========================== SELECT SOUND ===========================

const selectSound = document.querySelector('.sound-selection__input-container');

selectSound.addEventListener('click', () => {
    location.href = 'select-sound.html';
});


// =========================== EQUALIZER ===========================

const leftBtn = document.querySelector('.eq__btn--left');
const rightBtn = document.querySelector('.eq__btn--right');

const select = document.querySelector('.eq__select');
const sliders = document.querySelectorAll('.eq__slider');

leftBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('eq__btn--active');
});

rightBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('eq__btn--active');
});

select.addEventListener('change', () => {
    switch(select.value) {
        case 'preset-1': setEqValues([70, 65, 55, 60, 45]); break;
        case 'preset-2': setEqValues([60, 40, 45, 40, 55]); break;
        case 'preset-3': setEqValues([40, 70, 70, 45, 25]); break;
        case 'preset-4': setEqValues([25, 30, 50, 65, 85]); break;
        case 'preset-5': setEqValues([50, 65, 45, 50, 90]); break;
        default: setEqValues([50, 50, 50, 50, 50]);
    }
});

function setEqValues(array) {
    array.forEach((element, index) => {
        sliders[index].value = element;
    });
}

// =========================== VOLUME ===========================

const volumeBars = document.querySelectorAll('.volume__outer-bar');

volumeBars.forEach(bar => {
    bar.addEventListener('touchstart', (e) => {
        setVolume(e);
    });

    bar.addEventListener('touchmove', (e) => {
        setVolume(e);
    });
});

function setVolume(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const position = e.touches[0].pageY - rect.top;

    let volumePercent = parseInt(100 - (position / rect.height) * 100);
    
    if (volumePercent > 100) {
        volumePercent = 100;
    } else if(volumePercent < 0) {
        volumePercent = 0;
    }
    
    e.currentTarget.firstElementChild.style.height = `${volumePercent}%`;
    console.log(e.currentTarget.id, volumePercent + '%');
}