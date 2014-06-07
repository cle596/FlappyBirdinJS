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

console.log(bird.x);

//keypress 'a'
stage.on('keydown',function(e){
    if(e.keyCode == 65){	
    	bird.attr.y -= 10;
    }
});

