gsap.to("#box",{
    x:400,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%"
})
//when im going to animate form inital to final use gsap.to()
//when im going to animate from final to inital use gsap.from()

gsap.from("#box1",{
    x:400,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"white"
})
/*
gsap.from("#t1",{
    opacity:0,
    duration:4,
    x:-800,
    rotate:360
})

gsap.from("#t2",{
    opacity:0,
    duration:4,
    x:800,
    rotate:360
})

gsap.from("#t3",{
    opacity:0,
    duration:4,
    y:800,
    rotate:360
})
*/
/*
gsap.from("#t2",{
    y:100,
    duration:2,
    opacity:0
})

gsap.from("#t1",{
    y:-100,
    duration:2,
    opacity:0
})*/
/*
gsap.from("#t1",{
    opacity:0,
    duration:2,
    x:-800,
    y:-100,
    scale:4,
    
})


gsap.from("#t2",{
    opacity:0,
    duration:2,
    y:-800,
    x:-100,
    delay:.5,
    scale:4
})

gsap.from("#t3",{
    opacity:0,
    duration:2,
    x:800,
    y:100,
    delay:1,
    scale:4
})

*/

gsap.from("h1",{
    opacity:0,
    duration:4,
    stagger:1,//add one after another
})



