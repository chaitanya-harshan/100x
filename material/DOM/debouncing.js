let timeout;

function debounce() {
    clearTimeout(timeout);

    timeout = setTimeout(function(){
        delayed_Function();
    },100)
}

function delayed_Function(){
    //do someting
    // function is only called if the delay is more than 
    // 100ms
    // between keyclicks etc aka 'debounce' function calls
}