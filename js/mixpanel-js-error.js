window.onerror = function(message, file, line) {
    var prop = {}
    prop.message = message;
    prop.file = file;
    prop.line = line;
    mixpanel.track('js-err',prop);
}