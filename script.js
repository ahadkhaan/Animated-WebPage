let tl=gsap.timeline()

tl.from(".nav h3",{
y:-50,
opacity:0,
duration:0.7,
stagger:0.4,
})

tl.from(".center h1",{
x:-500,
opacity:0,
duration:1,
stagger:0.5,
})

tl.from("img",{
x:200,
opacity:0,
rotate:40,
duration:1,
stagger:0.4,
})