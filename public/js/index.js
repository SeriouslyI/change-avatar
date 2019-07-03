function my$(id) {
    return document.getElementById(id)
}

function getObjectURL(file) {
    var url = "";
    if (window.createObjectURL != undefined) {
        url = window.createObjectURL(file);
    } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}

my$('header').onchange = function () {
    console.log(111)
    var file = my$("header")
    var newFile = file.files[0]
    my$('head_img').src = getObjectURL(newFile)
}