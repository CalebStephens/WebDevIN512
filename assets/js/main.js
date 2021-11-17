   
    let firstImage = document.querySelectorAll(".indivAPI");
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
    
    const scrollAmount = 2;
    const borderAmount = 100;
    const fullOffscreen = 100;
    const onScreen = 0;
    const smallOffscreen = 80;
    const stopScroll = 805;

    let firstCar = document.querySelector(".first-car");
    let secondCar = document.querySelector(".second-car");
    let bigScroll = document.querySelector(".scroll-container");
    let titleScroll = document.querySelector(".container");
    let trio1 = document.querySelector(".trio1");
    let trio2 = document.querySelector(".trio2");
    let trio3 = document.querySelector(".trio3");

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

    let minus = 2;

    let setDirectionDown = (element, direction) => {
        element.style[direction] = (parseInt(element.style[direction].replace("%","")) - scrollAmount) + "%";
    }

    let setDirectionUp = (element, direction) => {
        element.style[direction] = (parseInt(element.style[direction].replace("%","")) + scrollAmount) + "%";
    }

    window.addEventListener('wheel', (e) =>{                
        //scrolling down
        if(e.wheelDeltaY < 0){ 
            //firstCar photo isnt at the top of screen then bring watch photo across from right
            if(parseInt(titleScroll.style.top.replace("%","")) > -fullOffscreen){
                setDirectionDown(titleScroll, "top");
            }else if(parseInt(firstCar.style.top.replace("%","")) > onScreen){
                setDirectionDown(firstCar, "top");
                firstCar.style.borderRadius = `${borderAmount - minus}% ${borderAmount - minus}% 0% 0%`;
                minus += 2;
                console.log(minus);
            }else if (parseInt(firstCar.style.top.replace("%","")) == onScreen && parseInt(secondCar.style.left.replace("%","")) > onScreen){
                setDirectionDown(secondCar, "left");
            }else if(parseInt(secondCar.style.left.replace("%","")) > -fullOffscreen){
                setDirectionDown(secondCar, "left");
                setDirectionDown(firstCar, "left");
            }else if(parseInt(trio1.style.right.replace("%","")) > -smallOffscreen){
                setDirectionDown(trio1, "right");
                setDirectionDown(trio2, "left");
                setDirectionDown(trio3, "right");
            }else if(parseInt(trio1.style.right.replace("%","")) == -smallOffscreen && parseInt(bigScroll.style.top.replace("%","")) > -stopScroll){
                setDirectionDown(bigScroll, "top");
                console.log(parseInt(bigScroll.style.top.replace("%","")));
               
            }
        } else //scrolling up
        {
        
            if (parseInt(bigScroll.style.top.replace("%","")) != onScreen){
                setDirectionUp(bigScroll, "top");
            }else if(parseInt(trio1.style.right.replace("%","")) != fullOffscreen){
                setDirectionUp(trio1, "right");
                setDirectionUp(trio2, "left");
                setDirectionUp(trio3, "right");	
            }else if(parseInt(secondCar.style.left.replace("%","")) != fullOffscreen){
                setDirectionUp(secondCar, "left");
            }else if(parseInt(firstCar.style.left.replace("%","")) != onScreen){
                setDirectionUp(firstCar, "left");
            }else if(parseInt(firstCar.style.top.replace("%","")) != fullOffscreen){
                setDirectionUp(firstCar, "top");
            }else if(parseInt(titleScroll.style.top.replace("%","")) != onScreen){
                setDirectionUp(titleScroll, "top");
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
    //skip to api button
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
    //skip to video button
    let videoButton = document.querySelector(".videoSkip");
    videoButton.addEventListener('click', (e)=>{
        console.log("here");
        firstCar.style.top = "0%";
        secondCar.style.left = "-100%";
        firstCar.style.left = "-100%";
        titleScroll.style.top = "0%";
        bigScroll.style.top = "-450%";
        titleScroll.style.top = "-100%";
        trio1.style.right = "-80%";
        trio2.style.left = "-80%";
        trio3.style.right = "-80%";
    });


    