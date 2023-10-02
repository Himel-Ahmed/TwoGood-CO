// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });



var vidContainer = document.querySelector("#vidContainer");
var playbtn = document.querySelector("#play");


function  playBtnAnimation() {
    vidContainer.addEventListener("mouseenter",function(){
        gsap.to(playbtn,{
            scale : 1 ,
            opacity : 1,
        })
    });
    
    
    vidContainer.addEventListener("mouseout",function(){
        gsap.to(playbtn,{
            scale : 0,
            opacity: 0
        })
    });

    vidContainer.addEventListener("mousemove",function(dets){
        gsap.to(playbtn,{
            left : dets.x-54,
            top: dets.y-60,
        })
    })
};
playBtnAnimation();


function page1Animation(){
    gsap.from(".page1 h1",{
        y : 100,
        opacity:0,
        delay:0.5,
        duration:0.8,
        stagger:0.2
    });
    gsap.from(".vidContainer",{
        scale : 0.9,
        opacity:0,
        delay:0.8,
        duration:0.5,
    });
}
page1Animation();


function page3hover(){
    
    document.querySelectorAll(".sellImg").forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(".cursor",{
                transform:' translate(-50%,-50%) scale(1)',
                opacity : 0.4,
            })
        });
        elem.addEventListener("mouseout",function(){
            gsap.to(".cursor",{
                transform:' translate(-50%,-50%) scale(0)'
            })
        });
    })
    
    document.addEventListener("mousemove",function(dits){
        gsap.to(".cursor",{
            left : dits.x,
            top : dits.y,
            
        })
    });
};
page3hover()


function review() {

    document.querySelector(".headinglast1").addEventListener("mouseenter",function(){
        document.querySelector("#ring1").style.backgroundColor="#000";
        document.querySelector(".jsheading2").innerHTML=`I LOVE THE STORY BEHIND THIS </br>
        BUSINESS AND THE PEOPLE WHO </br>
        RUN AND WORK IN IT`;
        });
    
    document.querySelector(".headinglast1").addEventListener("mouseleave",function(){
        document.querySelector("#ring1").style.backgroundColor="white";
        document.querySelector(".jsheading2").innerHTML=`THE HAMPERS WE ORDERED WERE </br>
        LOVELY AND THE TEAM ARE </br>
        WONDERFUL TO LIAISE WITH.`;
        });
    
    // ------------
    
    document.querySelector(".headinglast2").addEventListener("mouseenter",function(){
        document.querySelector("#ring2").style.backgroundColor="#000";
        document.querySelector(".jsheading2").innerHTML=`MY PACKAGE JUST ARRIVED AND </br>
        THE PRESENTATION IS SO
        BEAUTIFUL.`;
        });
    
    document.querySelector(".headinglast2").addEventListener("mouseleave",function(){
        document.querySelector("#ring2").style.backgroundColor="white";
        document.querySelector(".jsheading2").innerHTML=`THE HAMPERS WE ORDERED WERE </br>
        LOVELY AND THE TEAM ARE </br>
        WONDERFUL TO LIAISE WITH.`;
        });
    
        // ------------
    
        document.querySelector(".headinglast3").addEventListener("mouseenter",function(){
            document.querySelector("#ring3").style.backgroundColor="#000";
            document.querySelector(".jsheading2").innerHTML=`AN IMMENSELY GREAT
            COMPANY </br> AND WHAT A GREAT
            CAUSE DRIVING.`;
            });
        
        document.querySelector(".headinglast3").addEventListener("mouseleave",function(){
            document.querySelector("#ring3").style.backgroundColor="white";
            document.querySelector(".jsheading2").innerHTML=`THE HAMPERS WE ORDERED WERE </br>
            LOVELY AND THE TEAM ARE </br>
            WONDERFUL TO LIAISE WITH.`;
            });
    
        // ------------
    
        document.querySelector(".headinglast4").addEventListener("mouseenter",function(){
            document.querySelector("#ring4").style.backgroundColor="#000";
            document.querySelector(".jsheading2").innerHTML=`GREAT CAUSE, GREAT PEOPLE AND
            ABSOLUTELY GREAT FOR THE
            ENVIRONMENT.`;
            });
        
        document.querySelector(".headinglast4").addEventListener("mouseleave",function(){
            document.querySelector("#ring4").style.backgroundColor="white";
            document.querySelector(".jsheading2").innerHTML=`THE HAMPERS WE ORDERED WERE </br>
            LOVELY AND THE TEAM ARE </br>
            WONDERFUL TO LIAISE WITH.`;
            });
    
        // ------------
    
        document.querySelector(".headinglast5").addEventListener("mouseenter",function(){
            document.querySelector("#ring5").style.backgroundColor="#000";
            document.querySelector(".jsheading2").innerHTML=`BLOWN AWAY BY THE QUALITY
             OF </br> THE FOOD AND
            PRESENTATION.`;
            });
        
        document.querySelector(".headinglast5").addEventListener("mouseleave",function(){
            document.querySelector("#ring5").style.backgroundColor="white";
            document.querySelector(".jsheading2").innerHTML=`THE HAMPERS WE ORDERED WERE </br>
            LOVELY AND THE TEAM ARE </br>
            WONDERFUL TO LIAISE WITH.`;
            });
    
        // ------------
    
        document.querySelector(".headinglast6").addEventListener("mouseenter",function(){
            document.querySelector("#ring6").style.backgroundColor="#000";
            document.querySelector(".jsheading2").innerHTML=`LOVE THE QUALITY OF THE FOOD
            AND LEVEL OF CUSTOMER SERVICE & SUPPORT.`;
            });
        
        document.querySelector(".headinglast6").addEventListener("mouseleave",function(){
            document.querySelector("#ring6").style.backgroundColor="white";
            document.querySelector(".jsheading2").innerHTML=`THE HAMPERS WE ORDERED WERE </br>
            LOVELY AND THE TEAM ARE </br>
            WONDERFUL TO LIAISE WITH.`;
            });
};
review();


function page4Animation(){
    gsap.from(".page4",{
        scale : 0.9,
        opacity:0,
        delay:0.8,
        duration:0.5,
    })};

    page4Animation();

function page4heading(){
    gsap.from(".jsheading2",{
        y : 100,
        opacity:0,
        delay:0.5,
        duration:1,
        stagger:0.2
    })};

    page4heading();