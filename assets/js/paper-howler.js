var isRecording = false;
var startRecordTime;
var endRecordTime;
var elapsedTime;
var keysPressed = new Array();
var pressedTimes = new Array();
var keyData = {
	q: {
		sound: new Howl({
			urls: ['sounds/bubbles.mp3']
		}),
		color: '#1abc9c'
	},
	w: {
		sound: new Howl({
			urls: ['sounds/clay.mp3']
		}),
		color: '#2ecc71'
	},
	e: {
		sound: new Howl({
		urls: ['sounds/confetti.mp3']
		}),
		color: '#3498db'
	},
	r: {
		sound: new Howl({
		urls: ['sounds/corona.mp3']
		}),
		color: '#9b59b6'
	},
	t: {
		sound: new Howl({
		urls: ['sounds/dotted-spiral.mp3']
		}),
		color: '#34495e'
	},
	y: {
		sound: new Howl({
		urls: ['sounds/flash-1.mp3']
		}),
		color: '#16a085'
	},
	u: {
		sound: new Howl({
		urls: ['sounds/flash-2.mp3']
		}),
		color: '#27ae60'
	},
	i: {
		sound: new Howl({
		urls: ['sounds/flash-3.mp3']
		}),
		color: '#2980b9'
	},
	o: {
		sound: new Howl({
		urls: ['sounds/glimmer.mp3']
		}),
		color: '#8e44ad'
	},
	p: {
		sound: new Howl({
		urls: ['sounds/moon.mp3']
		}),
		color: '#2c3e50'
	},
	a: {
		sound: new Howl({
		urls: ['sounds/pinwheel.mp3']
		}),
		color: '#f1c40f'
	},
	s: {
		sound: new Howl({
		urls: ['sounds/piston-1.mp3']
		}),
		color: '#e67e22'
	},
	d: {
		sound: new Howl({
		urls: ['sounds/piston-2.mp3']
		}),
		color: '#e74c3c'
	},
	f: {
		sound: new Howl({
		urls: ['sounds/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	g: {
		sound: new Howl({
		urls: ['sounds/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	h: {
		sound: new Howl({
		urls: ['sounds/prism-3.mp3']
		}),
		color: '#d35400'
	},
	j: {
		sound: new Howl({
		urls: ['sounds/splits.mp3']
		}),
		color: '#1abc9c'
	},
	k: {
		sound: new Howl({
		urls: ['sounds/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	l: {
		sound: new Howl({
		urls: ['sounds/strike.mp3']
		}),
		color: '#3498db'
	},
	z: {
		sound: new Howl({
		urls: ['sounds/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	x: {
		sound: new Howl({
		urls: ['sounds/timer.mp3']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
		urls: ['sounds/ufo.mp3']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
		urls: ['sounds/veil.mp3']
		}),
		color: '#27ae60'
	},
	b: {
		sound: new Howl({
		urls: ['sounds/wipe.mp3']
		}),
		color: '#2980b9'
	},
	n: {
		sound: new Howl({
		urls: ['sounds/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	m: {
		sound: new Howl({
		urls: ['sounds/moon.mp3']
		}),
		color: '#2c3e50'
	}
};

function playRecording() {
    var loop = 0;
    
    var looper = function(){
        if (loop < keysPressed.length) {
        	var key = keysPressed[loop].toLowerCase();
            keyData[key].sound.play();
            loop++;
        } else {
            return;
        }
        
        setTimeout(looper, pressedTimes[loop + 1] - pressedTimes[loop]);
    };
    
    looper();
}

function toggleRecord() {
	isRecording = !isRecording;
	var recordButton = document.getElementById("record-button");
	if (isRecording) {
		keysPressed = new Array();
		pressedTimes = new Array();
		startRecordTime = new Date().getTime();
		pressedTimes.push(startRecordTime);
		recordButton.setAttribute("class", "fa fa-spinner fa-spin fa-inverse fa-3x fa-center");
	} else {
		endRecordTime = new Date().getTime();
		elapsedTime = endRecordTime - startRecordTime;
		recordButton.setAttribute("class", "fa fa-microphone fa-inverse fa-3x fa-center");
	}
}

window.onkeydown = function(e) {
	e = e || window.event;
	var charCode = e.keyCode || e.which;
	if (isRecording && charCode >= 65 && charCode <= 90) {
		keysPressed.push(String.fromCharCode(charCode));
		pressedTimes.push((new Date().getTime()) - startRecordTime);
	}
}