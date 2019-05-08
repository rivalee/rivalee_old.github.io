var imagesArray = [
'dog1.png',
'dog2.png',
'dog3.png',
'dog4.png',
];

var shownImages = []

function displayImage(){

    var num = Math.floor(Math.random() * (imagesArray.length));
    document.canvas.src = imagesArray[num];

    shownImages.unshift(imagesArray.splice(num,num+1));

    if(images.length == 0){
     images.Array = shownImages;
     shownImages = [];

     return shownImages[0];

    }
