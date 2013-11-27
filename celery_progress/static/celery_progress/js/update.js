function updateProgress($element, callback) {
    callback = (typeof callback === "undefined") ? function() {} : callback;

    $.ajax({
        url: $element.data('update-url'),
        dataType: 'json',
        success: function(data) {
            $element.find('span').width(data.progress+'%');
            if (data.progress == 100) {
                callback(data.result);
            } else {
                setTimeout(function() {
                    updateProgress($element, callback);
                }, 1000);
            }
        }
    });
}

function trackProgress(element_id, callback) {
    updateProgress($("#"+element_id+".meter"), callback);
};
