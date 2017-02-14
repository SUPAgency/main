window.onload = function() {
    particlesJS("particles-js", {
        "particles": {
            "number": {"value": 160, "density": {"enable": true, "value_area": 800}},
            "color": {"value": "#ffffff"},
            "shape": {
                "type": "polygon",
                "stroke": {"width": 0, "color": "#b4b0d1"},
                "polygon": {"nb_sides": 5},
                "image": {"src": "img/github.svg", "width": 150, "height": 100}
            },
            "opacity": {
                "value": 0.0959616153538585,
                "random": true,
                "anim": {"enable": true, "speed": 0.485975555429562, "opacity_min": 0, "sync": false}
            },
            "size": {
                "value": 3.998400639744104,
                "random": true,
                "anim": {"enable": true, "speed": 0.2, "size_min": 0, "sync": true}
            },
            "line_linked": {
                "enable": false,
                "distance": 63.974410235905665,
                "color": "#ffffff",
                "opacity": 0.6077568972411038,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "top-right",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 600, "rotateY": 600}
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": true, "mode": "bubble"},
                "onclick": {"enable": true, "mode": "repulse"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                "bubble": {"distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3},
                "repulse": {"distance": 400, "duration": 0.4},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": true
    });
    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function () {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
};