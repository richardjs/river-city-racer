'use strict';

function Car(x, y, options){
	options = options || {};
	if(options.frictionAir === undefined){
		options.frictionAir = .05;
	}
	if(options.density === undefined){
		options.density = .05;
	}
	if(options.densite === undefined){
		options.restitution = .5;
	}

	this.originalFriction = options.frictionAir;

	this.body = Matter.Bodies.rectangle(
		x,
		y,
		CAR_LENGTH,
		CAR_WIDTH,
		options
	);
	Matter.World.add(engine.world, this.body);
	entities.push(this)
	player = this;

	this.recording = [];
}

Car.prototype.update = function(delta){
	this.recording.push({x: this.body.position.x, y: this.body.position.y, angle: this.body.angle, time: raceTime});

	if(finished){
		return;
	}
	if(!this.inFrictionZone){
		this.body.frictionAir = this.originalFriction;
	}
	this.inFrictionZone = false;

	if(controller.accelerate){
		Matter.Body.applyForce(
			this.body,
			Matter.Vector.add(
				this.body.position,
				Matter.Vector.rotate({x: -CAR_LENGTH/2, y: 0}, this.body.angle)
			), {
				x:  Math.cos(this.body.angle) * CAR_ACCELERATION * delta/1000,
				y:  Math.sin(this.body.angle) * CAR_ACCELERATION * delta/1000
		});
	}
	if(controller.forwardLeft){
		Matter.Body.applyForce(
			this.body,
			Matter.Vector.add(
				this.body.position,
				Matter.Vector.rotate({x: CAR_THRUSTER_POSITION, y: 0}, this.body.angle)
			),
			Matter.Vector.rotate({x: 0, y: CAR_THRUSTER_POWER * delta/1000}, this.body.angle)
		);
	}
	if(controller.backLeft){
		Matter.Body.applyForce(
			this.body,
			Matter.Vector.add(
				this.body.position,
				Matter.Vector.rotate({x: -CAR_THRUSTER_POSITION, y: 0}, this.body.angle)
			),
			Matter.Vector.rotate({x: 0, y: CAR_THRUSTER_POWER * delta/1000}, this.body.angle)
		);
	}
	if(controller.forwardRight){
		Matter.Body.applyForce(
			this.body,
			Matter.Vector.add(
				this.body.position,
				Matter.Vector.rotate({x: CAR_THRUSTER_POSITION, y: 0}, this.body.angle)
			),
			Matter.Vector.rotate({x: 0, y: -CAR_THRUSTER_POWER * delta/1000}, this.body.angle)
		);
	}
	if(controller.backRight){
		Matter.Body.applyForce(
			this.body,
			Matter.Vector.add(
				this.body.position,
				Matter.Vector.rotate({x: -CAR_THRUSTER_POSITION, y: 0}, this.body.angle)
			),
			Matter.Vector.rotate({x: 0, y: -CAR_THRUSTER_POWER * delta/1000}, this.body.angle)
		);
	}
}

Car.prototype.render = function(){
	ctx.save();
	ctx.translate(canvas.width/2, canvas.height/2);
	ctx.rotate(this.body.angle);
	ctx.drawImage(IMAGE_CAR, -IMAGE_CAR.width/2, -IMAGE_CAR.height/2);
	if(controller.accelerate){
		if(Math.random() < .05){
			ctx.globalAlpha = .5;
		}else{
			ctx.globalAlpha = 1;
		}
		ctx.drawImage(IMAGE_BACKTHRUSTER, -IMAGE_BACKTHRUSTER.width/2, -IMAGE_BACKTHRUSTER.height/2);
	}
	if(controller.forwardRight){
		if(Math.random() < .05){
			ctx.globalAlpha = .5;
		}else{
			ctx.globalAlpha = 1;
		}
		ctx.drawImage(IMAGE_FRONTRIGHT, -IMAGE_FRONTRIGHT.width/2, -IMAGE_FRONTRIGHT.height/2);
	}
	if(controller.forwardLeft){
		if(Math.random() < .05){
			ctx.globalAlpha = .5;
		}else{
			ctx.globalAlpha = 1;
		}
		ctx.drawImage(IMAGE_FRONTLEFT, -IMAGE_FRONTLEFT.width/2, -IMAGE_FRONTLEFT.height/2);
	}
	if(controller.backRight){
		if(Math.random() < .05){
			ctx.globalAlpha = .5;
		}else{
			ctx.globalAlpha = 1;
		}
		ctx.drawImage(IMAGE_BACKRIGHT, -IMAGE_BACKRIGHT.width/2, -IMAGE_BACKRIGHT.height/2);
	}
	if(controller.backLeft){
		if(Math.random() < .05){
			ctx.globalAlpha = .5;
		}else{
			ctx.globalAlpha = 1;
		}
		ctx.drawImage(IMAGE_BACKLEFT, -IMAGE_BACKLEFT.width/2, -IMAGE_BACKRIGHT.height/2);
	}
	ctx.globalAlpha = 1;
	ctx.restore();
}
