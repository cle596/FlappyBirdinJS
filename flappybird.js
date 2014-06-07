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

function persist(){
	stage.on('tick',function(e){
		bird._attributes.x += 10;
	});
}

var counter = 0;
while(counter<40){
	persist();
	++counter;
}
