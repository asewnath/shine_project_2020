var controller = new ScrollMagic.Controller();


var convo1_text = new ScrollMagic.Scene({
    triggerElement: '#convo1_text_container', duration: 1000,
    offset: 400
})
.setClassToggle('#convo1_text_container', 'show')
.setPin('#convo1_text_container', {pushFollowers: false})
.addTo(controller);

var convo2_text = new ScrollMagic.Scene({
    triggerElement: '#convo2_text_container', duration: 1000,
    offset: 400
})
.setClassToggle('#convo2_text_container', 'show')
.setPin('#convo2_text_container', {pushFollowers: false})
.addTo(controller);

var convo3_text = new ScrollMagic.Scene({
    triggerElement: '#convo3_text_container', duration: 1000,
    offset: 400
})
.setClassToggle('#convo3_text_container', 'show')
.setPin('#convo3_text_container', {pushFollowers: false})
.addTo(controller);

var convo_scene = new ScrollMagic.Scene({
    triggerElement: '#convo_image', 
    triggerHook: "onLeave"
})
.duration("360%")
.setPin('#convo_image', {pushFollowers: false})
.addTo(controller);
