
var bird = new Circle(20,240,20)
bird.addTo(stage);
bird.fill('white');

var motion = new Animation('10s',{
	x:600

});

stage.on('click', function(e) {
    bird.fill('random');
  });

motion.addSubjects([bird]);
motion.play();

