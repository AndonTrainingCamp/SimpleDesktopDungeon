const logger = (function (selector){
    const $logger = $(selector);

    function log (msg){
        $logger.append(`<p>${msg}</p>`);
        _scrollBottom();
    }

    function clear () {
        $logger.html('');
        _scrollBottom();
    }

    function _scrollBottom () {
        $logger.animate({scrollTop: $logger.prop('scrollHeight')}, 200);
    }

    return {
        log,
        clear
    };
})('#logger');
