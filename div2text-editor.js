(function($) {

    $.fn.editable = function() {
        this
            .css({
                "-moz-tab-size": "4",
                "tab-size": "4",
                "white-space": "pre"
            })
            .attr("spellcheck", false)
            .attr("contentEditable", "true")
            .keydown(function(e) {
                // trap the return key being pressed
                if (e.keyCode === 13) {
                    // insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
                    document.execCommand('insertHTML', false, '\n');
                    // prevent the default behaviour of return key pressed
                    return false;
                } else if (e.keyCode == 9 && e.shiftKey) {
                    document.execCommand('insertHTML', false, '\t');
                    return false;
                } else if (e.keyCode == 9) {
                    document.execCommand('insertHTML', false, '\t');
                    return false;
                }
            });
        return this;
    };

}(jQuery));