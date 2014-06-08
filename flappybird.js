//highpipe
var highpipe = new Rect (250,0,20,200);
highpipe.addTo(stage);
highpipe.fill('#00FFFF');

//lowpipe
var lowpipe = new Rect (250,300,20,200);
lowpipe.addTo(stage);
lowpipe.fill('#00FFFF');

//bird
var bird = new Circle(15,200,5);
bird.addTo(stage);
bird.fill('#FFFF00');

var increment = 100;

function persist(x,y){
	bird.attr({
		x: x+3,
		y: y+2
	});
	//console.log(bird._attributes.x);
}

function jump(x,y){
	bird.attr({
		x: x,
		y: y-30
	});
	//console.log(bird._attributes.x);
}
/*
setInterval(function(){this.bird.attr.x = 500;
	console.log(bird.attr.x);
	stage.width = 800;
	stage.height = 800;
	},10000);*/

stage.on('tick', function() {
    persist(bird._attributes.x,bird._attributes.y);
});


stage.on('keydown', function(e) {
	//onsole.log(e.keyCode);
	if(e.keyCode == 65) {
		//console.log("pressing a");
    	jump(bird._attributes.x,bird._attributes.y);
	}
});