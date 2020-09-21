const wallpapers = ['aisvri-lDZNNvLU6pY-unsplash.jpg','andreea-maria-juganaru-5s3QCQONRLc-unsplash.jpg','kim-giseok-x1pvYTFmbdI-unsplash.jpg','robinson-recalde-UjISjvPFksI-unsplash.jpg'];
let counter = 1;

document.querySelector('#next').addEventListener('click',function(){
    counter=counter%wallpapers.length;
    document.querySelector('#picture').src = `images/${wallpapers[counter]}`;
    counter++;
})

/*setInterval(function(){
    counter=counter%wallpapers.length;
    document.querySelector('#picture').src = `images/${wallpapers[counter]}`;
    counter++;
},2000)*/
