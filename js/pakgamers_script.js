// Function called if AdBlock is not detected
function adBlockNotDetected() {
    alert('AdBlock is not enabled');
}
// Function called if AdBlock is detected
function adBlockDetected() {
    alert('AdBlock is enabled');
}

// Recommended audit because AdBlock lock the file 'blockadblock.js' 
// If the file is not called, the variable does not exist 'blockAdBlock'
// This means that AdBlock is present
if (typeof blockAdBlock === 'undefined') {
    adBlockDetected();
} else {
    blockAdBlock.onDetected(adBlockDetected);
    blockAdBlock.onNotDetected(adBlockNotDetected);
    // and|or
    blockAdBlock.on(true, adBlockDetected);
    blockAdBlock.on(false, adBlockNotDetected);
    // and|or
    blockAdBlock.on(true, adBlockDetected).onNotDetected(adBlockNotDetected);
}

// Change the options
blockAdBlock.setOption('checkOnLoad', false);
// and|or
blockAdBlock.setOption({
    debug: true,
    checkOnLoad: false,
    resetOnEnd: false
});