function Brick(x,y,z,size)
{
   	this.location = new Vector(x,y,z);
    this.size = size;
   
   	this.a = new Point(x,y,z);
   	this.b = new Point(x+size,y,z);
   	this.c = new Point(x+size,y,z+size);
   	this.d = new Point(x,y,z+size);
   	this.e = new Point(x,y+size,z+size);
   	this.f = new Point(x+size,y+size,z+size);
   	this.g = new Point(x+size,y+size,z);
   	this.h = new Point(x,y+size,z);

	this.lines = new Array();
	this.crosses = new Array();
	

    this.draw = function()
    {

    	this.lines[0] = new Line(player,this.a);
		this.lines[1] = new Line(player,this.b);
		this.lines[2] = new Line(player,this.c);
		this.lines[3] = new Line(player,this.d);
		this.lines[4] = new Line(player,this.e);
		this.lines[5] = new Line(player,this.f);
		this.lines[6] = new Line(player,this.g);
		this.lines[7] = new Line(player,this.h);

		for (var i=0; i<8; i++)
		{
			this.crosses[i] = plane.checkCross(this.lines[i],player);
		}


		if (direction == 0)
		{
		ctx.fillStyle = col2;
		ctx.beginPath();		
		ctx.moveTo(this.crosses[0].x + canvas.width/2 - player.x, canvas.height-this.crosses[0].z);
		ctx.lineTo(this.crosses[1].x + canvas.width/2 - player.x, canvas.height-this.crosses[1].z);
		ctx.lineTo(this.crosses[2].x + canvas.width/2 - player.x, canvas.height-this.crosses[2].z);
		ctx.lineTo(this.crosses[3].x + canvas.width/2 - player.x, canvas.height-this.crosses[3].z);
		ctx.lineTo(this.crosses[0].x + canvas.width/2 - player.x, canvas.height-this.crosses[0].z);
		ctx.fill();
		ctx.lineTo(this.crosses[7].x + canvas.width/2 - player.x, canvas.height-this.crosses[7].z);
		ctx.lineTo(this.crosses[4].x + canvas.width/2 - player.x, canvas.height-this.crosses[4].z);
		ctx.lineTo(this.crosses[3].x + canvas.width/2 - player.x, canvas.height-this.crosses[3].z);
		ctx.lineTo(this.crosses[0].x + canvas.width/2 - player.x, canvas.height-this.crosses[0].z);
		ctx.lineTo(this.crosses[7].x + canvas.width/2 - player.x, canvas.height-this.crosses[7].z);
		ctx.fill();
		ctx.lineTo(this.crosses[7].x + canvas.width/2 - player.x, canvas.height-this.crosses[7].z);
		ctx.lineTo(this.crosses[6].x + canvas.width/2 - player.x, canvas.height-this.crosses[6].z);
		ctx.lineTo(this.crosses[5].x + canvas.width/2 - player.x, canvas.height-this.crosses[5].z);
		ctx.lineTo(this.crosses[4].x + canvas.width/2 - player.x, canvas.height-this.crosses[4].z);
		ctx.lineTo(this.crosses[7].x + canvas.width/2 - player.x, canvas.height-this.crosses[7].z);
		ctx.fill();
		ctx.moveTo(this.crosses[4].x + canvas.width/2 - player.x, canvas.height-this.crosses[4].z);
		ctx.lineTo(this.crosses[3].x + canvas.width/2 - player.x, canvas.height-this.crosses[3].z);
		ctx.lineTo(this.crosses[2].x + canvas.width/2 - player.x, canvas.height-this.crosses[2].z);
		ctx.lineTo(this.crosses[5].x + canvas.width/2 - player.x, canvas.height-this.crosses[5].z);
		ctx.lineTo(this.crosses[4].x + canvas.width/2 - player.x, canvas.height-this.crosses[4].z);
		ctx.fill();
		ctx.moveTo(this.crosses[1].x + canvas.width/2 - player.x, canvas.height-this.crosses[1].z);
		ctx.lineTo(this.crosses[2].x + canvas.width/2 - player.x, canvas.height-this.crosses[2].z);
		ctx.lineTo(this.crosses[5].x + canvas.width/2 - player.x, canvas.height-this.crosses[5].z);
		ctx.lineTo(this.crosses[6].x + canvas.width/2 - player.x, canvas.height-this.crosses[6].z);
		ctx.lineTo(this.crosses[1].x + canvas.width/2 - player.x, canvas.height-this.crosses[1].z);
		
		
		ctx.fill();
		ctx.stroke();
		}
		else if (direction == 2)

		{
		ctx.fillStyle = col2;
		ctx.beginPath();		
		ctx.moveTo(-this.crosses[0].x + canvas.width/2 + player.x, canvas.height-this.crosses[0].z);
		ctx.lineTo(-this.crosses[1].x + canvas.width/2 + player.x, canvas.height-this.crosses[1].z);
		ctx.lineTo(-this.crosses[2].x + canvas.width/2 + player.x, canvas.height-this.crosses[2].z);
		ctx.lineTo(-this.crosses[3].x + canvas.width/2 + player.x, canvas.height-this.crosses[3].z);
		ctx.lineTo(-this.crosses[0].x + canvas.width/2 + player.x, canvas.height-this.crosses[0].z);
		ctx.fill();
		ctx.lineTo(-this.crosses[7].x + canvas.width/2 + player.x, canvas.height-this.crosses[7].z);
		ctx.lineTo(-this.crosses[4].x + canvas.width/2 + player.x, canvas.height-this.crosses[4].z);
		ctx.lineTo(-this.crosses[3].x + canvas.width/2 + player.x, canvas.height-this.crosses[3].z);
		ctx.lineTo(-this.crosses[0].x + canvas.width/2 + player.x, canvas.height-this.crosses[0].z);
		ctx.lineTo(-this.crosses[7].x + canvas.width/2 + player.x, canvas.height-this.crosses[7].z);
		ctx.fill();
		ctx.lineTo(-this.crosses[7].x + canvas.width/2 + player.x, canvas.height-this.crosses[7].z);
		ctx.lineTo(-this.crosses[6].x + canvas.width/2 + player.x, canvas.height-this.crosses[6].z);
		ctx.lineTo(-this.crosses[5].x + canvas.width/2 + player.x, canvas.height-this.crosses[5].z);
		ctx.lineTo(-this.crosses[4].x + canvas.width/2 + player.x, canvas.height-this.crosses[4].z);
		ctx.lineTo(-this.crosses[7].x + canvas.width/2 + player.x, canvas.height-this.crosses[7].z);
		ctx.fill();
		ctx.moveTo(-this.crosses[4].x + canvas.width/2 + player.x, canvas.height-this.crosses[4].z);
		ctx.lineTo(-this.crosses[3].x + canvas.width/2 + player.x, canvas.height-this.crosses[3].z);
		ctx.lineTo(-this.crosses[2].x + canvas.width/2 + player.x, canvas.height-this.crosses[2].z);
		ctx.lineTo(-this.crosses[5].x + canvas.width/2 + player.x, canvas.height-this.crosses[5].z);
		ctx.lineTo(-this.crosses[4].x + canvas.width/2 + player.x, canvas.height-this.crosses[4].z);
		ctx.fill();
		ctx.moveTo(-this.crosses[1].x + canvas.width/2 + player.x, canvas.height-this.crosses[1].z);
		ctx.lineTo(-this.crosses[2].x + canvas.width/2 + player.x, canvas.height-this.crosses[2].z);
		ctx.lineTo(-this.crosses[5].x + canvas.width/2 + player.x, canvas.height-this.crosses[5].z);
		ctx.lineTo(-this.crosses[6].x + canvas.width/2 + player.x, canvas.height-this.crosses[6].z);
		ctx.lineTo(-this.crosses[1].x + canvas.width/2 + player.x, canvas.height-this.crosses[1].z);
		
		
		ctx.fill();
		ctx.stroke();
		}

		else if (direction == 3)

		{
		ctx.fillStyle = col2;
		ctx.beginPath();		
		ctx.moveTo(this.crosses[0].y + canvas.width/2 - player.y, canvas.height-this.crosses[0].z);
		ctx.lineTo(this.crosses[1].y + canvas.width/2 - player.y, canvas.height-this.crosses[1].z);
		ctx.lineTo(this.crosses[2].y + canvas.width/2 - player.y, canvas.height-this.crosses[2].z);
		ctx.lineTo(this.crosses[3].y + canvas.width/2 - player.y, canvas.height-this.crosses[3].z);
		ctx.lineTo(this.crosses[0].y + canvas.width/2 - player.y, canvas.height-this.crosses[0].z);
		ctx.fill();
		ctx.lineTo(this.crosses[7].y + canvas.width/2 - player.y, canvas.height-this.crosses[7].z);
		ctx.lineTo(this.crosses[4].y + canvas.width/2 - player.y, canvas.height-this.crosses[4].z);
		ctx.lineTo(this.crosses[3].y + canvas.width/2 - player.y, canvas.height-this.crosses[3].z);
		ctx.lineTo(this.crosses[0].y + canvas.width/2 - player.y, canvas.height-this.crosses[0].z);
		ctx.lineTo(this.crosses[7].y + canvas.width/2 - player.y, canvas.height-this.crosses[7].z);
		ctx.fill();
		ctx.lineTo(this.crosses[7].y + canvas.width/2 - player.y, canvas.height-this.crosses[7].z);
		ctx.lineTo(this.crosses[6].y + canvas.width/2 - player.y, canvas.height-this.crosses[6].z);
		ctx.lineTo(this.crosses[5].y + canvas.width/2 - player.y, canvas.height-this.crosses[5].z);
		ctx.lineTo(this.crosses[4].y + canvas.width/2 - player.y, canvas.height-this.crosses[4].z);
		ctx.lineTo(this.crosses[7].y + canvas.width/2 - player.y, canvas.height-this.crosses[7].z);
		ctx.fill();
		ctx.moveTo(this.crosses[4].y + canvas.width/2 - player.y, canvas.height-this.crosses[4].z);
		ctx.lineTo(this.crosses[3].y + canvas.width/2 - player.y, canvas.height-this.crosses[3].z);
		ctx.lineTo(this.crosses[2].y + canvas.width/2 - player.y, canvas.height-this.crosses[2].z);
		ctx.lineTo(this.crosses[5].y + canvas.width/2 - player.y, canvas.height-this.crosses[5].z);
		ctx.lineTo(this.crosses[4].y + canvas.width/2 - player.y, canvas.height-this.crosses[4].z);
		ctx.fill();
		ctx.moveTo(this.crosses[1].y + canvas.width/2 - player.y, canvas.height-this.crosses[1].z);
		ctx.lineTo(this.crosses[2].y + canvas.width/2 - player.y, canvas.height-this.crosses[2].z);
		ctx.lineTo(this.crosses[5].y + canvas.width/2 - player.y, canvas.height-this.crosses[5].z);
		ctx.lineTo(this.crosses[6].y + canvas.width/2 - player.y, canvas.height-this.crosses[6].z);
		ctx.lineTo(this.crosses[1].y + canvas.width/2 - player.y, canvas.height-this.crosses[1].z);
		
		
		ctx.fill();
		ctx.stroke();
		}
			else if (direction == 1)

		{
		ctx.fillStyle = col2;
		ctx.beginPath();		
		ctx.moveTo(-this.crosses[0].y + canvas.width/2 + player.y, canvas.height-this.crosses[0].z);
		ctx.lineTo(-this.crosses[1].y + canvas.width/2 + player.y, canvas.height-this.crosses[1].z);
		ctx.lineTo(-this.crosses[2].y + canvas.width/2 + player.y, canvas.height-this.crosses[2].z);
		ctx.lineTo(-this.crosses[3].y + canvas.width/2 + player.y, canvas.height-this.crosses[3].z);
		ctx.lineTo(-this.crosses[0].y + canvas.width/2 + player.y, canvas.height-this.crosses[0].z);
		ctx.fill();
		ctx.lineTo(-this.crosses[7].y + canvas.width/2 + player.y, canvas.height-this.crosses[7].z);
		ctx.lineTo(-this.crosses[4].y + canvas.width/2 + player.y, canvas.height-this.crosses[4].z);
		ctx.lineTo(-this.crosses[3].y + canvas.width/2 + player.y, canvas.height-this.crosses[3].z);
		ctx.lineTo(-this.crosses[0].y + canvas.width/2 + player.y, canvas.height-this.crosses[0].z);
		ctx.lineTo(-this.crosses[7].y + canvas.width/2 + player.y, canvas.height-this.crosses[7].z);
		ctx.fill();
		ctx.lineTo(-this.crosses[7].y + canvas.width/2 + player.y, canvas.height-this.crosses[7].z);
		ctx.lineTo(-this.crosses[6].y + canvas.width/2 + player.y, canvas.height-this.crosses[6].z);
		ctx.lineTo(-this.crosses[5].y + canvas.width/2 + player.y, canvas.height-this.crosses[5].z);
		ctx.lineTo(-this.crosses[4].y + canvas.width/2 + player.y, canvas.height-this.crosses[4].z);
		ctx.lineTo(-this.crosses[7].y + canvas.width/2 + player.y, canvas.height-this.crosses[7].z);
		ctx.fill();
		ctx.moveTo(-this.crosses[4].y + canvas.width/2 + player.y, canvas.height-this.crosses[4].z);
		ctx.lineTo(-this.crosses[3].y + canvas.width/2 + player.y, canvas.height-this.crosses[3].z);
		ctx.lineTo(-this.crosses[2].y + canvas.width/2 + player.y, canvas.height-this.crosses[2].z);
		ctx.lineTo(-this.crosses[5].y + canvas.width/2 + player.y, canvas.height-this.crosses[5].z);
		ctx.lineTo(-this.crosses[4].y + canvas.width/2 + player.y, canvas.height-this.crosses[4].z);
		ctx.fill();
		ctx.moveTo(-this.crosses[1].y + canvas.width/2 + player.y, canvas.height-this.crosses[1].z);
		ctx.lineTo(-this.crosses[2].y + canvas.width/2 + player.y, canvas.height-this.crosses[2].z);
		ctx.lineTo(-this.crosses[5].y + canvas.width/2 + player.y, canvas.height-this.crosses[5].z);
		ctx.lineTo(-this.crosses[6].y + canvas.width/2 + player.y, canvas.height-this.crosses[6].z);
		ctx.lineTo(-this.crosses[1].y + canvas.width/2 + player.y, canvas.height-this.crosses[1].z);
		
		
		ctx.fill();
		ctx.stroke();
		}

			
    }           
}