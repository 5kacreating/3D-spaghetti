function Line(a, b)
{
	this.a = a.x;
	this.b = b.x - a.x;

	this.c = a.y;
	this.d = b.y - a.y;

	this.e = a.z;
	this.f = b.z - a.z;


	this.checkPoint = function (p)
	{
		var t = (p.x - this.a) / this.b;

		if ((p.y - this.c) / this.d != t)
		
			return false;
		else if ((p.z - this.e) / this.f != t)
			return false;
		else
			return true;
	}
}