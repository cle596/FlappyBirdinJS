
var bird = new Circle(20,40,20)

bird.addTo(stage);

bird.fill('white');

bird.animate('2s',{
	rotation: 0,
	x: 200
});




stage.on('click',function(e){
	bird.fill('orange');
});
