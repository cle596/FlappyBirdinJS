var bg = new Rect (0,0,500,500);
bg.fill('pink');
bg.addTo(stage);

//highpipe
var highpipe = new Rect (250,0,20,200);
highpipe.attr({
	height: Math.floor(Math.random() * 250)
});
highpipe.addTo(stage);
highpipe.fill('#00FFFF');

//lowpipe
var lowpipe = new Rect (250,500,20,-200);
lowpipe.attr({
	height: - Math.floor(Math.random() * 250)
});
lowpipe.addTo(stage);
lowpipe.fill('#00FFFF');

//bird
var bird = new Circle(15,200,10);
bird.addTo(stage);
bird.fill('#FFFF00');

//title
var title = new Text();
title.addTo(stage);
title.attr({
	text: "fappy brrr press a",
	textFillColor: 'black'
});

function rightedge(){
	if(bird._attributes.x + 10 >= 500 ){
		//console.log("right edge touched");
	}
}

function bottomedge(){
	if(bird._attributes.y + 10 >= 500 ){
		//console.log("bottom edge touched");
	}
}

function persist(x,y){
	bird.attr({
		x: x+3,
		y: y+2
	});
	//console.log(bird._attributes.x);
}

function pipe_persist(x,y){
	highpipe.attr({
		x: x-2
	});
	lowpipe.attr({
		x: x-2
	});
	//console.log(bird._attributes.x);
}

function jump(x,y){
	bird.attr({
		x: x+3,
		y: y-30
	});
	//console.log(bird._attributes.x);
}

stage.on('tick', function() {
    persist(bird._attributes.x,bird._attributes.y);
    pipe_persist(highpipe._attributes.x,highpipe._attributes.y);
    rightedge();
    bottomedge();
});

stage.on('keydown', function(e) {
	if(e.keyCode == 65) {
		//console.log("pressing a");
    	jump(bird._attributes.x,bird._attributes.y);
	}
});


