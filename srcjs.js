
/*******write locomotive js github on browser than scroll down smooth headind is there below the smooth heading copy the entire code and paste here******* */
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var element = document.querySelectorAll(".elem")
var page2 = document.querySelector(".page2")
element.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        var bgimg = ele.getAttribute("data-img")
        page2.style.backgroundImage = `url(${bgimg})`
    })
})


document.querySelector("#footer h1").addEventListener('click',()=>{
    scroll.scrollTo(0)
})