var imageUrl = 'F:/Projects/garima Practice/image/';
var imageArray = ['burger','family','guitar','thoughtfull']
var imageExtension = '.jpg'

var imageTag = document.getElementById('imageload');

var counter = 0;
imageTag.src = imageUrl+imageArray[counter]+imageExtension;

function swipeLeft(){
    count = (counter == 0) ? imageArray.length : counter ;
    changePic('disk'+count);
}

function swipeRight(){
    count = (counter != imageArray.length - 1) ? counter + 2 : 1;
    changePic('disk'+count);
}

function drawDisks() {
    mainDiv = document.getElementsByClassName('disks')[0];
    let count = 0;
    imageArray.forEach(images => {
        let div = document.createElement('div');
        div.classList = (count == 0) ? 'disk diskUsed' : 'disk';
        div.id = 'disk' + ++count;
        div.onclick = ()=>changePic(div.id);
        mainDiv.appendChild(div);
    });
}

function changePic(id){
    document.getElementsByClassName('diskUsed')[0].classList.remove('diskUsed');
    document.getElementById(id).classList.add('diskUsed');
    counter = id.slice(4) -1;
    imageTag.style.opacity = 0;
    setTimeout(() => {
        imageTag.src = imageUrl+imageArray[counter]+imageExtension;
    }, 200)
    imageTag.onload = () => {
        imageTag.style.opacity = 1;
    }
}

drawDisks();