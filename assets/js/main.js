   
    let firstImage = document.querySelectorAll(".testing");
    let artist = document.querySelectorAll(".artist");

        (async() =>{
            let response = await fetch("https://api.unsplash.com/photos/random/?client_id=69ZziRvByyMqzlQM4iOTwQ-vTNKWbaUVxtqwveavuKE&count=3");
            let info = await response.json();
            console.log(info);
            firstImage.forEach((image, index) =>{
                image.src = info[index].urls.regular;
                artist[index].innerHTML = "By " +info[index].user.name;
            }); 
        })();
    


    let firstCar = document.querySelector(".first-car");
    let secondCar = document.querySelector(".second-car");
    let bigScroll = document.querySelector(".scroll-container");
    let titleScroll = document.querySelector(".container");
    let trio1 = document.querySelector(".trio1");
    let trio2 = document.querySelector(".trio2");
    let trio3 = document.querySelector(".trio3");
   
    const scrollAmount = 2;

    firstCar.style.top = "100%";
    firstCar.style.borderRadius = "80% 80% 0 0"
    secondCar.style.left = "100%";
    firstCar.style.left = "0%";
    titleScroll.style.top = "0%";
    bigScroll.style.top = "0%";
    titleScroll.style.top = "0%";
    trio1.style.right = "100%";
    trio2.style.left = "100%";
    trio3.style.right = "100%";

    let amount = 100;
    let minus = 2;

    let setDirection = (element, direction) => {
        element.style[direction] = (parseInt(element.style[direction].replace("%","")) - scrollAmount) + "%";
    }


    window.addEventListener('wheel', (e) =>{                

        if(e.wheelDeltaY < 0){ //scrolling down
            //firstCar photo isnt at the top of screen then bring watch photo across from right
            if(parseInt(titleScroll.style.top.replace("%","")) > -100){
                setDirection(titleScroll, "top");
            }else if(parseInt(firstCar.style.top.replace("%","")) > 0){
                setDirection(firstCar, "top");
                firstCar.style.borderRadius = `${amount - minus}% ${amount - minus}% 0% 0%`;
                minus += 2;
                console.log(minus);
            }else if (parseInt(firstCar.style.top.replace("%","")) == 0 && parseInt(secondCar.style.left.replace("%","")) > 0){
                setDirection(secondCar, "left");
            }else if(parseInt(secondCar.style.left.replace("%","")) > -100){
                setDirection(secondCar, "left");
                setDirection(firstCar, "left");
            }else if(parseInt(trio1.style.right.replace("%","")) > -80){
                setDirection(trio1, "right");
                setDirection(trio2, "left");
                setDirection(trio3, "right");
            }else if(parseInt(trio1.style.right.replace("%","")) == -80 && parseInt(bigScroll.style.top.replace("%","")) > -798){
                setDirection(bigScroll, "top");
                console.log(parseInt(bigScroll.style.top.replace("%","")));
               
            }
        } else //scrolling up
        {
        
            if (parseInt(bigScroll.style.top.replace("%","")) != 0){
                bigScroll.style.top = (parseInt(bigScroll.style.top.replace("%","")) + 2) + "%"; 
                
            }else if(parseInt(trio1.style.right.replace("%","")) != 100){
                trio1.style.right = (parseInt(trio1.style.right.replace("%","")) + 2) + "%";
                trio2.style.left = (parseInt(trio2.style.left.replace("%","")) + 2) + "%";
                trio3.style.right = (parseInt(trio3.style.right.replace("%","")) + 2) + "%";	
            }else if(parseInt(secondCar.style.left.replace("%","")) != 100){
                secondCar.style.left = (parseInt(secondCar.style.left.replace("%","")) + 2) + "%";
            }else if(parseInt(firstCar.style.left.replace("%","")) != 0){
                firstCar.style.left = (parseInt(firstCar.style.left.replace("%","")) + 2) + "%";
            }else if(parseInt(firstCar.style.top.replace("%","")) != 100){
                firstCar.style.top = (parseInt(firstCar.style.top.replace("%","")) + 2) + "%";
            }else if(parseInt(titleScroll.style.top.replace("%","")) != 0){
                titleScroll.style.top = (parseInt(titleScroll.style.top.replace("%","")) + 2) + "%";
            }
        }
    }); 

    //back to top button
    let button = document.querySelector(".button");
    button.addEventListener('click', (e)=>{
        console.log("here");
        firstCar.style.top = "100%";
        firstCar.style.borderRadius = "80% 80% 0 0"
        secondCar.style.left = "100%";
        firstCar.style.left = "0%";
        titleScroll.style.top = "0%";
        bigScroll.style.top = "0%";
        titleScroll.style.top = "0%";
        trio1.style.right = "100%";
        trio2.style.left = "100%";
        trio3.style.right = "100%";
    });

    let apiButton = document.querySelector(".apiSkip");
    apiButton.addEventListener('click', (e)=>{
        console.log("here");
        firstCar.style.top = "0%";
        secondCar.style.left = "-100%";
        firstCar.style.left = "-100%";
        titleScroll.style.top = "0%";
        bigScroll.style.top = "-120%";
        titleScroll.style.top = "-100%";
        trio1.style.right = "-80%";
        trio2.style.left = "-80%";
        trio3.style.right = "-80%";
    });


    