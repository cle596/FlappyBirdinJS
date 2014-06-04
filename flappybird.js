stage.x = 1000;
stage.y = 1000;

console.log(stage.x);
console.log(stage.y);

/*
var intro = new Text('frappy brrr');
intro.addTo(stage).attr({
  fontFamily: 'Arial, sans-serif',
  fontSize: '14',
  textFillColor: 'white',
});
*/
var end = new Text('over');

var highpipeypos = 0;
var highpipe = new Rect (250,highpipeypos,50,400);
highpipe.addTo(stage);
highpipe.fill('green');

var lowpipe = new Rect (250,600,50,400);
lowpipe.addTo(stage);
lowpipe.fill('green');

var bird = new Circle(15,500,15);
bird.addTo(stage);
bird.fill('white');
bird.x = 15;
bird.y = 500;


var gravity = new Animation('1s',{
	y:1000
});
gravity.addSubjects([bird]);
gravity.play();



var jump = new Animation('1s',{
	y:0
});

jump.addSubjects([bird]);

stage.on('keydown', function(e) {
    if(e.keyCode == 65){
    	console.log('hit');
    	jump.play();
    	console.log(bird.y);
    }
  });


highpipeypos = 300;;

if(bird.y == 1000){
	end.addTo(stage).attr({
		fontFamily: 'Arial, sans-serif',
		fontSize: '14',
		textFillColor: 'white',
	});
}

console.log(bird.y);
