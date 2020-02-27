/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 150,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#05386b"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }

);









/*----------------------------*/

$('.button--bubble').each(function () {
    var $circlesTopLeft = $(this).parent().find('.circle.top-left');
    var $circlesBottomRight = $(this).parent().find('.circle.bottom-right');

    var tl = new TimelineLite();
    var tl2 = new TimelineLite();

    var btTl = new TimelineLite({
        paused: true
    });

    tl.to($circlesTopLeft, 1.2, {
        x: -25,
        y: -25,
        scaleY: 2,
        ease: SlowMo.ease.config(0.1, 0.7, false)
    });
    tl.to($circlesTopLeft.eq(0), 0.1, {
        scale: 0.2,
        x: '+=6',
        y: '-=2'
    });
    tl.to($circlesTopLeft.eq(1), 0.1, {
        scaleX: 1,
        scaleY: 0.8,
        x: '-=10',
        y: '-=7'
    }, '-=0.1');
    tl.to($circlesTopLeft.eq(2), 0.1, {
        scale: 0.2,
        x: '-=15',
        y: '+=6'
    }, '-=0.1');
    tl.to($circlesTopLeft.eq(0), 1, {
        scale: 0,
        x: '-=5',
        y: '-=15',
        opacity: 0
    });
    tl.to($circlesTopLeft.eq(1), 1, {
        scaleX: 0.4,
        scaleY: 0.4,
        x: '-=10',
        y: '-=10',
        opacity: 0
    }, '-=1');
    tl.to($circlesTopLeft.eq(2), 1, {
        scale: 0,
        x: '-=15',
        y: '+=5',
        opacity: 0
    }, '-=1');

    var tlBt1 = new TimelineLite();
    var tlBt2 = new TimelineLite();

    tlBt1.set($circlesTopLeft, {
        x: 0,
        y: 0,
        rotation: -45
    });
    tlBt1.add(tl);

    tl2.set($circlesBottomRight, {
        x: 0,
        y: 0
    });
    tl2.to($circlesBottomRight, 1.1, {
        x: 30,
        y: 30,
        ease: SlowMo.ease.config(0.1, 0.7, false)
    });
    tl2.to($circlesBottomRight.eq(0), 0.1, {
        scale: 0.2,
        x: '-=6',
        y: '+=3'
    });
    tl2.to($circlesBottomRight.eq(1), 0.1, {
        scale: 0.8,
        x: '+=7',
        y: '+=3'
    }, '-=0.1');
    tl2.to($circlesBottomRight.eq(2), 0.1, {
        scale: 0.2,
        x: '+=15',
        y: '-=6'
    }, '-=0.2');
    tl2.to($circlesBottomRight.eq(0), 1, {
        scale: 0,
        x: '+=5',
        y: '+=15',
        opacity: 0
    });
    tl2.to($circlesBottomRight.eq(1), 1, {
        scale: 0.4,
        x: '+=7',
        y: '+=7',
        opacity: 0
    }, '-=1');
    tl2.to($circlesBottomRight.eq(2), 1, {
        scale: 0,
        x: '+=15',
        y: '-=5',
        opacity: 0
    }, '-=1');

    tlBt2.set($circlesBottomRight, {
        x: 0,
        y: 0,
        rotation: 45
    });
    tlBt2.add(tl2);

    btTl.add(tlBt1);
    btTl.to($(this).parent().find('.button.effect-button'), 0.8, {
        scaleY: 1.1
    }, 0.1);
    btTl.add(tlBt2, 0.2);
    btTl.to($(this).parent().find('.button.effect-button'), 1.8, {
        scale: 1,
        ease: Elastic.easeOut.config(1.2, 0.4)
    }, 1.2);

    btTl.timeScale(2.6);

    $(this).on('mouseover', function () {
        btTl.restart();
    });
});
