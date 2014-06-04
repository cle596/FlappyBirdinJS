var intro = new Text('frappy brrr\n',
					'type a for jump\n');
intro.addTo(stage).attr({
  fontFamily: 'Arial, sans-serif',
  fontSize: '14',
  textFillColor: 'white',
});

var highpipe = new Rect (250,0,50,400);
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


var gravity = new Animation('8s',{
	y:800
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

