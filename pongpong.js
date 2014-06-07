var Pong, audioSprite;

Pong = (function() {
	
	var defaults = {
		width: 500,
		height: 350,
		ballSpeed: 7,
		paddleSpeed: 7,
		ball: {
			width: 20,
			height: 20,
			attr: {
				fillColor: 'rgb(255,255,255)'
			}
		},
		topPaddle: {
			width: 80,
			height: 20,
			left: "a",
			right: "s",
			attr: {
				fillColor: '#0077FF',
				fillGradient: gradient.linear(0, ['rgba(0,0,0,.2)','rgba(0,0,0,0)'])
			}
		},
		bottomPaddle: {
			width: 80,
			height: 20,
			left: "left",
			right: "right",
			attr: {
				fillColor: '#FF9500',
				fillGradient: gradient.linear(0,['rgba(0,0,0,.2)','rgba(0,0,0,0)'])
			}
		}
	};

	new Rect(0,0,defaults.width,defaults.height).fill('black').addTo(stage);

	function Pong(){
		this.config = defaults;
		this.height = this.config.height;
		this.width = this.config.width;
		this.paddleSpeed = this.config.paddleSpeed;
		this.ballSpeed = this.config.ballSpeed;

		this.newGame();

	}

	Pong.
})