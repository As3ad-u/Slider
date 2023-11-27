// select Elements 

var imgs=document.querySelectorAll(".row .item img");
var closeBtn=document.getElementById("close-btn");
var leftBtn=document.getElementById("left-btn");
var rightBtn=document.getElementById("right-btn");
var fixedBox=document.getElementById("fixedBox");
var insideImage=document.getElementById('inside-img')
var currentImage;

//transform NodeList into array

var arrayOfImgs=Array.from(imgs);

        // close function 
function closeBox(){
    fixedBox.style.display="none";
}
        
for(var i=0;i<imgs.length;i++){
    imgs[i].addEventListener('click',function(e){
        fixedBox.style.display="flex";
        closeBtn.style.cssText=`
        cursor: pointer;
        `;
        var clickedImage=e.target;
        currentImage=arrayOfImgs.indexOf(clickedImage); 
        var clickedImageSrc=clickedImage.getAttribute('src');
        insideImage.setAttribute('src',clickedImageSrc);
    });
};
        //stop Event Propagation
closeBtn.addEventListener('click',function(e){
    e.stopPropagation();
    closeBox();
})
leftBtn.addEventListener('click',function(e){
    e.stopPropagation();

})
rightBtn.addEventListener('click',function(e){
    e.stopPropagation();
})
fixedBox.addEventListener('click',function(e){
    e.stopPropagation();
    closeBox();
})
insideImage.addEventListener('click',function(e){
    e.stopPropagation();
}
    )

                // next and previous image  by left and right button

function nextImg(){
    ++currentImage;
    if(currentImage==arrayOfImgs.length){
        currentImage=0;
    }
    var nextImgSrc=arrayOfImgs[currentImage].getAttribute('src');
    insideImage.setAttribute('src',nextImgSrc);
    }
function previousImg(){
    --currentImage
    if(currentImage==-1){
        currentImage=arrayOfImgs.length-1
    }
    var previousImgSrc=arrayOfImgs[currentImage].getAttribute('src');
        insideImage.setAttribute('src',previousImgSrc);
}
rightBtn.addEventListener('click',function(){
    nextImg();
})
leftBtn.addEventListener('click',function(){
    previousImg();
})

                // next and previous image  by left and right arrow
document.addEventListener('keydown',function(e){
    if(e.key=="ArrowRight"){
        nextImg();
    }
    else if(e.key=="ArrowLeft"){
        previousImg();
    }
    else if(e.key=="Escape"){
        closeBox();
    }
})