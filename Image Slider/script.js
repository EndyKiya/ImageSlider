
var spanElements = document.getElementsByTagName('span');
let next = document.getElementById("next");
var back = document.getElementById('back');
imgArray = new Array("img-1.jpg", "img-2.jpg", "img-3.jpg", "img-4.jpg", "img-5.jpg");
spanElements.st
var start = 0;
const imageSlider = () =>{
    document.getElementById("img").src = "./img/"+imgArray[start];
    spanElements[start].classList.add('active');
    start > 0? spanElements[start-1].classList.remove('active'): false;
    start == 0? spanElements[4].classList.remove('active'): false;
    if(start == 4){
        start = 0;
    }else{
        start++;
    }
}
setInterval(imageSlider, 3000);

function nextImg(){
    if(start != 4){
        document.getElementById("img").src = "./img/"+imgArray[start];// we make start++ at imgSlider() here we get the updated value we don't have to add 1 or (start = start + 1)
        for(i=0; i < 5; i++){
            if(i != start){
                spanElements[i].classList.remove('active')
            }
            if(i == start){
                spanElements[i].classList.add('active')
            } 
        }
        start = start + 1;
    }    
}
function backImg(){    
    if(start >= 2){   
        start = start - 2;// b/c it increases by two value (post increment)    
        document.getElementById("img").src = "./img/"+imgArray[start];
        for(i=0; i < 5; i++){
            if(i != start){
                spanElements[i].classList.remove('active')
            }
            if(i == start){
                spanElements[i].classList.add('active')
            } 
        }       
    } 
}
function moveTo(selectedIndex){
    start = selectedIndex;
    for(i=0; i < 5; i++){
        if(i != start){
            spanElements[i].classList.remove('active')
        }
        if(i == start){
            spanElements[i].classList.add('active')
        }         
    } 
}
