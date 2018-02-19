var randBW = function() {
    var BWArray = [
        'bw/1.svg',
        'bw/2.svg',
        'bw/3.svg',
        'bw/4.svg',
        'bw/5.svg',
        'bw/6.svg',
        'bw/7.svg',
        'bw/8.svg',
        'bw/9.svg',
        'bw/10.svg',
        'bw/11.svg',
        'bw/12.svg',
        'bw/13.svg',
        'bw/14.svg',
        'bw/15.svg',
        'bw/16.svg',
        'bw/17.svg',
        'bw/18.svg',
        'bw/19.svg',
        'bw/20.svg',
        'bw/21.svg'
    ];
    var rand = Math.floor(Math.random() * 16);

    return BWArray[rand];
};
var randC = function() {
    var CArray = [
        'c/1.svg',
        'c/2.svg',
        'c/3.svg',
        'c/4.svg',
        'c/5.svg',
        'c/6.svg',
        'c/7.svg',
        'c/8.svg',
        'c/9.svg',
        'c/10.svg',
        'c/11.svg',
        'c/12.svg',
        'c/13.svg',
        'c/14.svg',
        'c/15.svg',
        'c/16.svg',
        'c/17.svg',
        'c/18.svg',
        'c/19.svg',
        'c/20.svg',
        'c/21.svg',
        'c/22.svg',
        'c/23.svg',
        'c/24.svg',
        'c/25.svg',
        'c/26.svg',
        'c/27.svg',
        'c/28.svg'
    ];
    var rand = Math.floor(Math.random() * 16);

    return CArray[rand];
};
document.getElementById('context').addEventListener('click', function() {
    var img = '';
    if (document.getElementById('colored').checked) {
        img = randC();
    } else {
        img = randBW();
    }
    document.getElementById('context').src = img;
});

var playMusic = function() {
    if (document.getElementById('music').checked) {
        document.getElementById('music_frame').src = document.getElementById('music_link').value;
    } else {
        document.getElementById('music_frame').src = '';
    }
}