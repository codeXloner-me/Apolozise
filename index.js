// Custom cursor
const cursor = document.querySelector('.custom-cursor');
const cursorFollower = document.querySelector('.custom-cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.backgroundColor = 'rgba(255, 42, 109, 0.8)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.5)';
        cursorFollower.style.borderColor = 'var(--neon-pink)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'rgba(255, 42, 109, 0.5)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.borderColor = 'var(--neon-blue)';
    });
});

// Initialize particles.js with more particles
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#05d9e8", "#ff2a6d", "#d300c5", "#00ff9d", "#ffee00"]
        },
        "shape": {
            "type": ["circle", "triangle", "star"],
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.7,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#05d9e8",
            "opacity": 0.4,
            "width": 1.5
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
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
                "distance": 200,
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
                "distance": 150,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 6
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Button effects with confetti
document.getElementById('acceptBtn').addEventListener('click', function() {
    createConfetti();
    setTimeout(() => {
        alert("Thank you, Jemy! Your forgiveness means everything to me. Let's create brighter memories together!");
        this.textContent = "Apology Accepted!";
        this.style.backgroundColor = "var(--neon-green)";
        this.style.borderColor = "var(--neon-green)";
        this.style.boxShadow = "0 0 30px var(--neon-green), 0 0 60px var(--neon-green)";
        this.style.color = "var(--dark-bg)";
        this.style.textShadow = "0 0 5px white";
    }, 800);
});

document.getElementById('resetBtn').addEventListener('click', function() {
    createConfetti();
    setTimeout(() => {
        alert("System reboot complete! Thank you for this fresh start. I promise to be the friend you deserve.");
        this.textContent = "Friendship Reset Complete!";
        this.style.backgroundColor = "var(--neon-yellow)";
        this.style.borderColor = "var(--neon-yellow)";
        this.style.boxShadow = "0 0 30px var(--neon-yellow), 0 0 60px var(--neon-yellow)";
        this.style.color = "var(--dark-bg)";
        this.style.textShadow = "0 0 5px white";
    }, 800);
});

// Add glitch effect randomly to headings
setInterval(function() {
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        if (Math.random() > 0.8) {
            heading.classList.add('glitch');
            setTimeout(() => {
                heading.classList.remove('glitch');
            }, 1000);
        }
    });
}, 2000);

// Create confetti effect
function createConfetti() {
    const colors = ['#ff2a6d', '#05d9e8', '#d300c5', '#00ff9d', '#ffee00'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add floating effect to cards
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});