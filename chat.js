var bird = new Circle(20,40,20);
bird.addTo(stage);
bird.fill('white');
bird.animate('2s',{
	rotation: 0,
	x: 200
});
stage.on('key', function(e) {
  console.log('Key event: ' + e.keyCode);
});
