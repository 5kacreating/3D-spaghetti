function Plane(a,b,c,d)
{
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
 
    this.checkCross = function(line)
    {
        var q = line.b * this.a;
        var w = line.d * this.b;
        var e = line.f * this.c;
 
        var qa = line.a * this.a;
        var wa = line.c * this.b;
        var ea = line.e * this.c; 
        var all = qa + wa + ea + this.d;
 
        var t = (-1) * all / (q+w+e);
 
        var point = new Point(t * line.b + line.a, t * line.d + line.c, t * line.f + line.e);
 
        return (point);
 
 
    }

    this.move = function(x, y)
    {
    	this.a += x;
    	this.d += y;
    }


    this.distance = function (p)
    {
    	var dist = Math.abs(this.a * p.x + this.b * p.y + this.c * p.z + this.d) / Math.sqrt(this.a * this.a + this.b * this.b + this.c * this.c);
    	return dist;
    }


}