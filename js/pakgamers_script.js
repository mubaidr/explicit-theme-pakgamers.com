// Function called if AdBlock is not detected
function adBlockNotDetected() {
    console.log('Hello good gamer! Thanks for not using ad-blocker! Happy Gaming!');
}

// Function called if AdBlock is detected
function adBlockDetected() {

    if (typeof BootstrapDialog === 'undefined') {
        alert('Hey PGers! \n\nPakGamers is a large, free media publication, forum and marketplace. \nTo keep it free, we work really hard with content creators, moderators, our community and supporters. \n\nSo please support us by disabling Adblock on PakGamers and making www.PakGamers.com an exception in your Adblock. We promise to keep the Adverts unobtrusive to your experience.');
    } else {
        BootstrapDialog.show({
            type: BootstrapDialog.TYPE_DANGER,
            title: 'Important!',
            message: '<b>Hey PGers!</b> <br/><br/>PakGamers is a large, free media publication, forum and marketplace. <br/>To keep it free, we work really hard with content creators, moderators, our community and supporters. <br/><br/>So please support us by disabling Adblock on PakGamers and making www.PakGamers.com an exception in your Adblock. We promise to keep the Adverts unobtrusive to your experience.'
        });
    }

}

// Recommended audit because AdBlock lock the file 'blockadblock.js' 
// If the file is not called, the variable does not exist 'blockAdBlock'
// This means that AdBlock is present
if (typeof blockAdBlock === 'undefined') {
    checkLastWarnTime();
} else {

    blockAdBlock.setOption({
        debug: false,
        checkOnLoad: true,
        resetOnEnd: true
    });

    blockAdBlock.onDetected(adBlockDetected);
    blockAdBlock.onNotDetected(adBlockNotDetected);
}

function checkLastWarnTime() {
    if (typeof (Storage) !== "undefined") {
        var _last_time = localStorage.getItem('_last_time');
        var _date_now = Date.now();

        if (_last_time) {
            var _duration = Math.floor(Math.abs(parseInt(_last_time) - _date_now) / 36e5);
            if (_duration > 24) {
                adBlockDetected();
                localStorage.setItem('_last_time', _date_now);
            }
        } else {
            adBlockDetected();
            localStorage.setItem('_last_time', _date_now);
        }

    } else {
        adBlockDetected();
    }
}