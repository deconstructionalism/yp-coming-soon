window.onload = function() {
    document.querySelector('#loading-overlay').classList.add('fadeout')
};


(function() {

    var backgrounds = [
        'images/giant-kitty-bg.jpg',
        'images/haram-bg.jpg',
        'images/ravi-shavi-bg.jpg'
    ];

    var bodyEl = document.querySelector('body');
    bodyEl.style.backgroundImage = 'url(' + backgrounds[0] + ')';

    var counter = 1;
    var range = backgrounds.length;

    setInterval(function() {
        counter = counter === range ? 0 : counter;
        var bgImg = backgrounds[counter];
        bodyEl.style.backgroundImage = 'url(' + bgImg + ')';
        counter += 1;
    }, 3000);
})();