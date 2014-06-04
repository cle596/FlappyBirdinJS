new Text('Frappy Brrr').addTo(stage).attr({
  fontFamily: 'Arial',
  fontSize: '20',
  textFillColor: 'red',
  textStrokeColor: 'yellow',
  textStrokeWidth: 0.5
});


var highpipe = new Rect (300,0,60,200);
highpipe.addTo(stage);
highpipe.fill('green');

var lowpipe = new Rect (300,800,60,200);
highpipe.addTo(stage);
highpipe.fill('green');


var bird = new Circle(20,240,15);
bird.addTo(stage);
bird.fill('white');

var motion = new Animation('10s',{
	x:600

});

stage.on('key', function(e) {
    bird.fill('white');
  });

motion.addSubjects([bird]);
motion.play();

