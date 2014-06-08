var bg = new Rect (0,0,500,500);
bg.fill('pink');
bg.addTo(stage);

function makehighpipe(){
	return new Rect (150,0,20,200)
	.attr({
		height: Math.floor(Math.random() * 250)
	})
	.addTo(stage)
	.fill('#00FFFF');
}

var highpipe = makehighpipe();
var highpipe2 = makehighpipe();
highpipe2.attr({
	x: 300
})
var highpipe3 = makehighpipe();
highpipe3.attr({
	x: 450
})

function makelowpipe(){
	return new Rect (150,500,20,-200)
	.attr({
		height: -Math.floor(Math.random() * 250)
	})
	.addTo(stage)
	.fill('#00FFFF');
}

var lowpipe = makelowpipe();
var lowpipe2 = makelowpipe();
lowpipe2.attr({
	x:300
})
var lowpipe3 = makelowpipe();
lowpipe3.attr({
	x:450
})

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
		y: y+4
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


function pipe2_persist(x,y){
	highpipe2.attr({
		x: x-2
	});
	lowpipe2.attr({
		x: x-2
	});
	//console.log(bird._attributes.x);
}

function pipe3_persist(x,y){
	highpipe3.attr({
		x: x-2
	});
	lowpipe3.attr({
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
    pipe2_persist(highpipe2._attributes.x,highpipe2._attributes.y);
    pipe3_persist(highpipe3._attributes.x,highpipe3._attributes.y);
    rightedge();
    bottomedge();
});

stage.on('keydown', function(e) {
	if(e.keyCode == 65) {
		//console.log("pressing a");
    	jump(bird._attributes.x,bird._attributes.y);
	}
});


