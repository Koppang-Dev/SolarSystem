function loadImage(url, callback) {
    var image = new Image();
    image.src = url;
    image.onload = function() {
        callback(image);
    };
    return image;

};

function loadImages(urls, callback) {
    var imageArr = [];
    var imageArrSize = urls.length;

    function onImageLoad() {
        --imageArrSize;

        if (imageArrSize == 0) {
            callback(imageArr);
        }
    }

    for (var imageIndex = 0; imageIndex < imageArrSize; ++imageIndex) {
        //var image = loadImage(urls[imageIndex], onImageLoad);
        imageArr.push(loadImage(urls[imageIndex], onImageLoad));
    }
};