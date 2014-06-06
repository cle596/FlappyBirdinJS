/*
DO NOT USE ANIMATION FOR MOVEMENT
NEED RECHECKING OF POSITION
*/


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
var highpipe = new Rect (250,highpipeypos,20,200);
highpipe.addTo(stage);
highpipe.fill('#00FFFF');

var lowpipe = new Rect (250,300,20,200);
lowpipe.addTo(stage);
lowpipe.fill('#00FFFF');

var bird = new Circle(15,200,5);
bird.addTo(stage);
bird.fill('#FFFF00');
bird.x = 15;
bird.y = 200;

/*
var gravity = new Animation('6s',{
	y:400
});
gravity.addSubjects([bird]);
gravity.play();
*/

/*
var jump = new Animation('1s',{
	y:0
});
*/
jump.addSubjects([bird]);

stage.on('keydown', function(e) {
    if(e.keyCode == 65){
    	console.log('hit');
    	//jump.play();
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
