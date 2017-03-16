function Vector(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;

    this.length = function ()
    {
    	return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    this.normal = function ()
    {
    	var l = this.length();

    	this.x /= l;
    	this.y /= l;
    	this.z /= l;
    }

    this.mult = function (a)
    {
    	this.x *= a;
    	this.y *= a;
    	this.z *= a;
    }

    this.add = function (v)
    {
    	this.x += v.x;
    	this.y += v.y;
    	this.z += v.z;
    }

    this.minus = function (v)
    {
    	this.x -= v.x;
    	this.y -= v.y;
    	this.z -= v.z;
    }        
}