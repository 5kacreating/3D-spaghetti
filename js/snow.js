function Snow(x,y,z,sizex, sizey, sizez, speed)
{
	this.location = new Vector(x,y,z);
	this.velocity = new Vector(0,0,0);
	this.acceleration = new Vector(0,0,-speed);
	this.speed = speed;
	
	this.a = new Point(x,y,z);
	this.b = new Point(x+sizex,y,z);
	this.c = new Point(x+sizex,y,z-sizez);
	this.d = new Point(x,y,z-sizez);

	this.lines = new Array();
	this.crosses = new Array();

	this.draw = function()
	{

		if (direction == 0)
		{
		ctx.beginPath();
		ctx.fillStyle = "rgb(255,255,255)";		
		ctx.moveTo(this.crosses[0].x + canvas.width/2 - player.x, canvas.height-this.crosses[0].z);
		ctx.lineTo(this.crosses[1].x + canvas.width/2 - player.x, canvas.height-this.crosses[1].z);
		ctx.lineTo(this.crosses[2].x + canvas.width/2 - player.x, canvas.height-this.crosses[2].z);
		ctx.lineTo(this.crosses[3].x + canvas.width/2 - player.x, canvas.height-this.crosses[3].z);
		ctx.fill();
		}
		else if (direction ==2)
		{
		ctx.beginPath();
		ctx.fillStyle = "rgb(255,255,255)";		
		ctx.moveTo(-this.crosses[0].x + canvas.width/2 + player.x, canvas.height-this.crosses[0].z);
		ctx.lineTo(-this.crosses[1].x + canvas.width/2 + player.x, canvas.height-this.crosses[1].z);
		ctx.lineTo(-this.crosses[2].x + canvas.width/2 + player.x, canvas.height-this.crosses[2].z);
		ctx.lineTo(-this.crosses[3].x + canvas.width/2 + player.x, canvas.height-this.crosses[3].z);
		ctx.fill();
		}
		else if (direction ==1)
		{
		ctx.beginPath();
		ctx.fillStyle = "rgb(255,255,255)";		
		ctx.moveTo(-this.crosses[0].y + canvas.width/2 + player.y, canvas.height-this.crosses[0].z);
		ctx.lineTo(-this.crosses[1].y + canvas.width/2 + player.y, canvas.height-this.crosses[1].z);
		ctx.lineTo(-this.crosses[2].y + canvas.width/2 + player.y, canvas.height-this.crosses[2].z);
		ctx.lineTo(-this.crosses[3].y + canvas.width/2 + player.y, canvas.height-this.crosses[3].z);
		ctx.fill();
		}
		else if (direction ==3)
		{
		ctx.beginPath();
		ctx.fillStyle = "rgb(255,255,255)";		
		ctx.moveTo(this.crosses[0].y + canvas.width/2 - player.y, canvas.height-this.crosses[0].z);
		ctx.lineTo(this.crosses[1].y + canvas.width/2 - player.y, canvas.height-this.crosses[1].z);
		ctx.lineTo(this.crosses[2].y + canvas.width/2 - player.y, canvas.height-this.crosses[2].z);
		ctx.lineTo(this.crosses[3].y + canvas.width/2 - player.y, canvas.height-this.crosses[3].z);
		ctx.fill();
		}
	
	
	}

	this.update = function()
	{
		if (this.location.z>0) {
		this.velocity.add(this.acceleration);
		this.velocity.mult(res);
		this.location.add(this.velocity);
		}
		else {
			this.sizez = 1;
		}
		
		this.a = new Point(this.location.x,this.location.y,this.location.z);
		this.b = new Point(this.location.x+sizex,this.location.y,this.location.z);
		this.c = new Point(this.location.x+sizex,this.location.y,this.location.z-sizez);
		this.d = new Point(this.location.x,this.location.y,this.location.z-sizez);
		
		this.lines[0] = new Line(player,this.a);
		this.lines[1] = new Line(player,this.b);
		this.lines[2] = new Line(player,this.c);
		this.lines[3] = new Line(player,this.d);


		this.crosses[0] = plane.checkCross(this.lines[0]);
		this.crosses[1] = plane.checkCross(this.lines[1]);
		this.crosses[2] = plane.checkCross(this.lines[2]);
		this.crosses[3] = plane.checkCross(this.lines[3]);
	}

	
}