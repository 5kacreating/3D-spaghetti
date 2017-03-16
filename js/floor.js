function Floor(x,y,z,size)
{
	this.location = new Vector(x,y,z);
	this.size = size;
	this.z = z;

	this.a = new Point(x,y,z);
	this.b = new Point(x+size,y,z);
	this.c = new Point(x+size,y+size,z);
	this.d = new Point(x,y+size,z);

	this.lines = new Array();
	this.crosses = new Array();


	this.draw = function()
    {
       	this.lines[0] = new Line(player,this.a);
      	this.lines[1] = new Line(player,this.b);
      	this.lines[2] = new Line(player,this.c);
      	this.lines[3] = new Line(player,this.d);

      	for(var i = 0; i<4; i++)
      	{
      		this.crosses[i] = plane.checkCross(this.lines[i]);
      	}
      	

      	if (direction == 0)
      		{
      			ctx.fillStyle = col;
      			ctx.beginPath();		
				ctx.moveTo(this.crosses[0].x + canvas.width/2 - player.x, canvas.height-this.crosses[0].z);
				ctx.lineTo(this.crosses[1].x + canvas.width/2 - player.x, canvas.height-this.crosses[1].z);
				ctx.lineTo(this.crosses[2].x + canvas.width/2 - player.x, canvas.height-this.crosses[2].z);
				ctx.lineTo(this.crosses[3].x + canvas.width/2 - player.x, canvas.height-this.crosses[3].z);
				ctx.lineTo(this.crosses[0].x + canvas.width/2 - player.x, canvas.height-this.crosses[0].z);
				ctx.fill();
			}
		else if (direction == 2)
			{
      			ctx.fillStyle = col;
      			ctx.beginPath();		
				ctx.moveTo(-this.crosses[0].x + canvas.width/2 + player.x, canvas.height-this.crosses[0].z);
				ctx.lineTo(-this.crosses[1].x + canvas.width/2 + player.x, canvas.height-this.crosses[1].z);
				ctx.lineTo(-this.crosses[2].x + canvas.width/2 + player.x, canvas.height-this.crosses[2].z);
				ctx.lineTo(-this.crosses[3].x + canvas.width/2 + player.x, canvas.height-this.crosses[3].z);
				ctx.lineTo(-this.crosses[0].x + canvas.width/2 + player.x, canvas.height-this.crosses[0].z);
				ctx.fill();
			}
		else if (direction == 1)
			{
				ctx.fillStyle = col;
      			ctx.beginPath();		
				ctx.moveTo(-this.crosses[0].y + canvas.width/2 + player.y, canvas.height-this.crosses[0].z);
				ctx.lineTo(-this.crosses[1].y + canvas.width/2 + player.y, canvas.height-this.crosses[1].z);
				ctx.lineTo(-this.crosses[2].y + canvas.width/2 + player.y, canvas.height-this.crosses[2].z);
				ctx.lineTo(-this.crosses[3].y + canvas.width/2 + player.y, canvas.height-this.crosses[3].z);
				ctx.lineTo(-this.crosses[0].y + canvas.width/2 + player.y, canvas.height-this.crosses[0].z);
				ctx.fill();

			}
		else if (direction == 3)
			{
				ctx.fillStyle = col;
      			ctx.beginPath();		
				ctx.moveTo(this.crosses[0].y + canvas.width/2 - player.y, canvas.height-this.crosses[0].z);
				ctx.lineTo(this.crosses[1].y + canvas.width/2 - player.y, canvas.height-this.crosses[1].z);
				ctx.lineTo(this.crosses[2].y + canvas.width/2 - player.y, canvas.height-this.crosses[2].z);
				ctx.lineTo(this.crosses[3].y + canvas.width/2 - player.y, canvas.height-this.crosses[3].z);
				ctx.lineTo(this.crosses[0].y + canvas.width/2 - player.y, canvas.height-this.crosses[0].z);
				ctx.fill();
			}

		
    }
}