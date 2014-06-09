//var testx = Math.sin(3);

//suppose a tick is 20ms
//50 ticks is a sec
//

var gravitytime = 0;
//var jumptime = 0;

var bg = new Rect (0,100,500,500);
bg.fill('#D8D8D8');
bg.addTo(stage);

function makehighpipe(){
	return new Rect (150,100,20,200)
	.attr({
		height: Math.floor(Math.random() * 250)
	})
	.addTo(stage)
	.fill('white');
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

function makelowpipe(number){
	var contraheight = 0;
	if(number==1){
		contraheight = highpipe.attr('height');
	}
	if(number==2){
		contraheight = highpipe2.attr('height');
	}
	if(number==3){
		contraheight = highpipe3.attr('height');
	}
	return new Rect (150,600,20,-200)
	.attr({
		height: -1 * (400 - contraheight) 
	})
	.addTo(stage)
	.fill('white');
}

var lowpipe = makelowpipe(1);
var lowpipe2 = makelowpipe(2);
lowpipe2.attr({
	x:300
})
var lowpipe3 = makelowpipe(3);
lowpipe3.attr({
	x:450
})

//bird
var bird = new Circle(15,400,5);
bird.addTo(stage);
bird.fill('#2E2E2E');

//title
var title = new Text();
title.addTo(stage);
title.attr({
	text: "fappy brrr press a",
	textFillColor: 'white'
});

var scoreval = 0;

var score = new Text();
score.addTo(stage);
score.attr({
	x: 470,
	y: 570,
	text: scoreval,
	textFillColor: 'red'
});

function topedge(){
	if(bird._attributes.y - 5 <= 100 ){
		//console.log("top edge touched");
		title.attr({
			text: "gemova",
		});
		gamestate = 1;
	}
}

function rightedge(){
	if(bird._attributes.x + 5 >= 500 ){
		//console.log("right edge touched");
		title.attr({
			text: "gemova"
		});
		gamestate = 1;
	}
}

function bottomedge(){
	if(bird._attributes.y + 5 >= 600 ){
		//console.log(bg._attributes.y+bg._attributes.height);
		//console.log("bottom edge touched");
		title.attr({
			text: "gemova",
		});
		gamestate = 1;
	}
}

function persist(x,y){
	//var gravitysec = gravitytime/50;
	//stage.on('tick', function() {
	//	++gravitytime;	
	bird.attr({
		x: x+2,
		y: y+1
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
	//var currentx = bird.attr('x');
	//var currenty = bird.attr('y');


		//stage.on('tick', function() {
			//++jumptime;
			bird.attr({
				x: x+1,
				y: y-30
			});
		//}
	
	//gravitytime = 0;
	//console.log(bird._attributes.x);
}

var passstate1 = 0;
var passstate2 = 0;
var passstate3 = 0;

function pipepasscheck(pipename){
	if (bird._attributes.x > pipename._attributes.x){
		++scoreval;
		score.attr({
			text: scoreval
		});
		return 1;
	}
	else{
		return 0;
	}
}

var gamestate = 0;

stage.on('tick', function() {
	//console.log(bird._attributes.y);
	/*++gravitytime;
	if(gravitytime % 50 == 0){
		console.log( gravitytime/50 + " seconds");
	}*/
	if( gamestate == 0 ){
    	persist(bird._attributes.x,bird._attributes.y);
    	pipe_persist(highpipe._attributes.x,highpipe._attributes.y);
    	pipe2_persist(highpipe2._attributes.x,highpipe2._attributes.y);
    	pipe3_persist(highpipe3._attributes.x,highpipe3._attributes.y);
	topedge();
		//console.log(passstate1);
		if(passstate1 == 0){ passstate1 = pipepasscheck(highpipe);}
		if(passstate2 == 0) {passstate2 = pipepasscheck(highpipe2);}
		if(passstate3 == 0){ passstate3 = pipepasscheck(highpipe3);}
    	rightedge();
    	bottomedge();
	}
});

stage.on('keydown', function(e) {
	if(e.keyCode == 65) {
		//console.log("pressing a");
    	jump(bird._attributes.x,bird._attributes.y);
	}
});


