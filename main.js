var controller = new ScrollMagic.Controller();


const fadeInProps = {
    autoAlpha: 0,
    ease: Power1.easeIn
  }
const fadeOutProps = {
    autoAlpha: 0,
    delay: 2,
    ease: Power1.easeOut
  }
  
/*
animation1.from("#convo1_text_container", { opacity:0 });
animation1.to("#convo1_text_container", { opacity:0 , delay: 2});
*/
/*
animation1.from("#convo1_text_container", { autoAlpha:0, duration:0.5,delay: 1, ease: Power1.easeIn });
animation1.to("#convo1_text_container", { autoAlpha:0 , duration:0.5, delay: 1, ease: Power1.easeOut});
*/

/*Frame 3-6 Sequence*/
const frame3_animation = gsap.timeline()
frame3_animation.to("#frame3_animation_container", fadeOutProps)

var frame3_scene = new ScrollMagic.Scene({
    triggerElement: "#frame3_animation_container", duration: "100%",
    triggerHook: "onLeave"
})
.setPin("#frame3_animation_container")
.setTween(frame3_animation)
.addTo(controller);

const frame4_animation = gsap.timeline()
frame4_animation.from("#frame4_animation_container", fadeInProps).to("#frame4_animation_container", fadeOutProps)

var frame4_scene = new ScrollMagic.Scene({
    triggerElement: "#frame4_animation_container", duration: "100%",
    triggerHook: "onLeave"
})
.setPin("#frame4_animation_container")
.setTween(frame4_animation)
.addTo(controller);

const frame5_animation = gsap.timeline()
frame5_animation.from("#frame5_animation_container", fadeInProps).to("#frame5_animation_container", fadeOutProps)

var frame5_scene = new ScrollMagic.Scene({
    triggerElement: "#frame5_animation_container", duration: "100%",
    triggerHook: "onLeave"
})
.setPin("#frame5_animation_container")
.setTween(frame5_animation)
.addTo(controller);

const frame6_animation = gsap.timeline()
frame6_animation.from("#frame6_animation_container", fadeInProps).to("#frame6_animation_container", fadeOutProps)

var frame6_scene = new ScrollMagic.Scene({
    triggerElement: "#frame6_animation_container", duration: "100%",
    triggerHook: "onLeave"
})
.setPin("#frame6_animation_container")
.setTween(frame6_animation)
.addTo(controller);



/*Conversation Sequence*/
const animation1 = gsap.timeline()
animation1.from("#convo1_text_container", fadeInProps).to("#convo1_text_container", fadeOutProps)
const animation2 = gsap.timeline()
animation2.from("#convo2_text_container", fadeInProps).to("#convo2_text_container", fadeOutProps)
const animation3 = gsap.timeline()
animation3.from("#convo3_text_container", fadeInProps).to("#convo3_text_container", fadeOutProps)
const animation4 = gsap.timeline()
animation4.from("#convo4_text_container", fadeInProps).to("#convo4_text_container", fadeOutProps)
const animation5 = gsap.timeline()
animation5.from("#convo5_text_container", fadeInProps).to("#convo5_text_container", fadeOutProps)

var convo1_text = new ScrollMagic.Scene({
    triggerElement: '#convo1_text_container', duration: "100%", offset: 200
})
.setPin('#convo1_text_container')
.setTween(animation1)
.addTo(controller);

var convo2_text = new ScrollMagic.Scene({
    triggerElement: '#convo2_text_container', duration: "100%", offset: 200
})
.setTween(animation2)
.setPin('#convo2_text_container')
.addTo(controller);

var convo3_text = new ScrollMagic.Scene({
    triggerElement: '#convo3_text_container', duration: "100%", offset: 200
})
.setTween(animation3)
.setPin('#convo3_text_container')
.addTo(controller);

var convo4_text = new ScrollMagic.Scene({
    triggerElement: '#convo4_text_container', duration: "100%", offset: 200
})
.setTween(animation4)
.setPin('#convo4_text_container')
.addTo(controller);

var convo5_text = new ScrollMagic.Scene({
    triggerElement: '#convo5_text_container', duration: "100%", offset: 200
})
.setTween(animation5)
.setPin('#convo5_text_container')
.addTo(controller);

var convo_scene = new ScrollMagic.Scene({
    triggerElement: '#convo_image', 
    triggerHook: "onLeave"
})
.duration("1000%")
.setPin('#convo_image', {pushFollowers: false})
.addTo(controller);



/*Bubble Frame 13 Sequence*/

const frame13_animation_bubble = gsap.timeline()
frame13_animation_bubble.to("#bubble_frame13_container", fadeOutProps)

var frame13_scene_bubble = new ScrollMagic.Scene({
    triggerElement: "#bubble_frame13_container", duration: "75%",
    triggerHook: "onEnter", offset:200
})
.setTween(frame13_animation_bubble)
.addTo(controller);


/*Frame 17-18 Sequence*/

const frame17_animation = gsap.timeline()
frame17_animation.to("#frame17_text_container", fadeOutProps)

var frame17_scene = new ScrollMagic.Scene({
    triggerElement: "#frame17_text_container", duration: "100%",
    triggerHook: "onLeave"
})
.setPin("#frame17_text_container")
.setTween(frame17_animation)
.addTo(controller);

const frame18_animation = gsap.timeline()
frame18_animation.from("#frame18_animation_container", fadeInProps).to("#frame18_animation_container", fadeOutProps)

var frame18_scene = new ScrollMagic.Scene({
    triggerElement: "#frame18_animation_container", duration: "100%",
    triggerHook: "onLeave"
})
.setPin("#frame18_animation_container")
.setTween(frame18_animation)
.addTo(controller);

const flag_animation = gsap.timeline()
flag_animation.to("#kira_frame17_container", fadeOutProps)
var frame_flag_scene = new ScrollMagic.Scene({
    triggerElement: '#kira_frame17_container', 
    triggerHook: "onLeave"
})
.duration("235%")
.setTween(flag_animation)
.setPin('#kira_frame17_container')
.addTo(controller);
