// 500 x 500

var bg = new Rect (0,0,500,500);
bg.fill('green');
bg.addTo(stage);

var title = new Text();
title.addTo(stage);
title.attr({
	text: "fappy brrr press a",
	textFillColor: 'yellow'
});

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
var bird = new Circle(15,200,5);
bird.addTo(stage);
bird.fill('#FFFF00');

//console.log(Object.getOwnPropertyNames(bird.attr).sort());

//var increment = 100;

function rightedge(){
	if(bird._attributes.x + 5 >= 500 ){
		//console.log("right edge touched");
	}
}

function bottomedge(){
	if(bird._attributes.y + 5 >= 500 ){
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
    rightedge();
    bottomedge();
});


stage.on('keydown', function(e) {
	//onsole.log(e.keyCode);
	if(e.keyCode == 65) {
		//console.log("pressing a");
    	jump(bird._attributes.x,bird._attributes.y);
	}
});