# change-avatar
#### 轻量级原生头像预览功能
示例
===
![image](https://github.com/SeriouslyI/change-avatar/blob/master/imgs/1.png)

主要代码
===
```
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
```

说明
===
#### 1.代码很少功能简单
#### 2.通过createObjectURL实现图片地址获取