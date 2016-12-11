// Function called if AdBlock is not detected
function adBlockNotDetected() {
    console.log('Hello good gamer! Thanks for not using ad-blocker! Happy Gaming!');
}

// Function called if AdBlock is detected
function adBlockDetected() {
    //alert('AdBlock is enabled');
    alert('Hello good gamer! \n\nOur website is made possible by displaying online advertisements to our visitors. \n\nPlease consider supporting us by disabling your ad blocker.');
}

// Recommended audit because AdBlock lock the file 'blockadblock.js' 
// If the file is not called, the variable does not exist 'blockAdBlock'
// This means that AdBlock is present
if (typeof blockAdBlock === 'undefined') {
    adBlockDetected();
} else {

    blockAdBlock.setOption({
        debug: true,
        checkOnLoad: true,
        resetOnEnd: true
    });

    blockAdBlock.onDetected(adBlockDetected);
    blockAdBlock.onNotDetected(adBlockNotDetected);
}