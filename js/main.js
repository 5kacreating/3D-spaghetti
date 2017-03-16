var brick;
var player;
var plane;
var ctx;
var canvas;
var bricks;
var rain;
var snows;
var floors;
var f;
var col = "rgb(0,80,0)";
var col2 = "rgb(80,0,0)";
var res = 0.8;

var p_acc;
var p_speed;
var p_vel;

var direction = 0;
 
window.onload = function()
{
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 600;

    p_acc = new Vector(0,0,0);
    p_vel = new Vector(0,0,0);
    p_speed = 20;

    rain = new Array();
    snows = -1;
    f = -1;

    bricks = new Array();
 
 
    player = new Point (1600,-1000, 200);

    
     
    plane = new Plane (0, 1, 0, 700);

    floors = new Array();

    for(var i=-10; i<40;i++)
    {
      for (var j=-10; j<10; j++)
      {
        f++;
        floors[f] = new Floor(i*100,j*100,0,100);
      }
    }
    
 
 
 
    bricks[0] = new Brick(0, 600, 0, 100);

    bricks[0].draw();

    bricks[1] = new Brick(100, 600, 0, 100);
 
    bricks[1].draw();

    bricks[2] = new Brick(200, 600, 0, 100);

    bricks[2].draw();

    bricks[3] = new Brick(300, 600, 0, 100);

    bricks[3].draw();

    bricks[4] = new Brick(0, 600, 100, 100);

    bricks[4].draw();

    bricks[5] = new Brick(100, 600, 200, 100);

    bricks[5].draw();

    bricks[6] = new Brick(200, 600, 300, 100);

    bricks[6].draw();

   bricks[7] = new Brick(300, 600, 400, 100);

    bricks[7].draw();

    bricks[8] = new Brick(0, 600, 500, 100);

   bricks[8].draw();

    bricks[9] = new Brick(100, 600, 500, 100);
 
    bricks[9].draw();

    bricks[10] = new Brick(200, 600, 500, 100);

   bricks[10].draw();

     bricks[11]= new Brick(300, 600, 500, 100);

   bricks[11].draw();

    bricks[12]= new Brick(150, 600, 700, 100);

   bricks[12].draw();
    //end of ż
    bricks[13]= new Brick(500, 600, 0, 100);

   bricks[13].draw();

    bricks[14]= new Brick(500, 600, 100, 100);

   bricks[14].draw();

    bricks[15]= new Brick(500, 600, 200, 100);

   bricks[15].draw();

   bricks[16]= new Brick(500, 600, 300, 100);

   bricks[16].draw();

   bricks[17]= new Brick(500, 600, 400, 100);

   bricks[17].draw();

   bricks[18]= new Brick(500, 600, 500, 100);

   bricks[18].draw();

    bricks[19]= new Brick(600, 600, 500, 100);

   bricks[19].draw();

   bricks[20]= new Brick(700, 600, 500, 100);

   bricks[20].draw();
    
    bricks[21]= new Brick(800, 600, 500, 100);

   bricks[21].draw(); 

   bricks[22]= new Brick(600, 600, 250, 100);

   bricks[22].draw();

   bricks[23]= new Brick(700, 600, 250, 100);

   bricks[23].draw();

   bricks[24]= new Brick(800, 600, 250, 100);

   bricks[24].draw();

    bricks[25]= new Brick(600, 600, 0, 100);

   bricks[25].draw();

    bricks[26]= new Brick(700, 600, 0, 100);

   bricks[26].draw();

    bricks[27]= new Brick(800, 600, 0, 100);

   bricks[27].draw();

   //end of E

   bricks[28]= new Brick(1000, 600, 0, 100);

   bricks[28].draw();

   bricks[36]= new Brick(1000, 600, 100, 100);

   bricks[36].draw();

    bricks[37]= new Brick(1000, 600, 200, 100);

   bricks[37].draw();

   bricks[38]= new Brick(1000, 600, 300, 100);

   bricks[38].draw();

   bricks[39]= new Brick(1000, 600, 400, 100);

   bricks[39].draw();

    bricks[40]= new Brick(1000, 600, 500, 100);

   bricks[40].draw();

    bricks[41]= new Brick(1100, 600, 500, 100);

   bricks[41].draw();

    bricks[42]= new Brick(1200, 600, 500, 100);

   bricks[42].draw();

    bricks[43]= new Brick(1300, 600, 500, 100);

   bricks[43].draw();

   
   bricks[29]= new Brick(1100, 600, 0, 100);

   bricks[29].draw();

    bricks[34]= new Brick(1200, 600, 0, 100);

   bricks[34].draw();

   bricks[30]= new Brick(1300, 600, 0, 100);

   bricks[30].draw();

   bricks[31]= new Brick(1300, 600, 100, 100);

   bricks[31].draw();

    bricks[32]= new Brick(1300, 600, 200, 100);

   bricks[32].draw();

   bricks[33]= new Brick(1200, 600, 200, 100);

   bricks[33].draw();

   bricks[35]= new Brick(1400, 600, 200, 100);

   bricks[35].draw();

   //end of g

    bricks[44] = new Brick(1600, 600, 0, 100);

    bricks[44].draw();

    bricks[45] = new Brick(1625, 600, 100, 100);

    bricks[45].draw();

     bricks[46] = new Brick(1650, 600, 200, 100);

    bricks[46].draw();

    bricks[47] = new Brick(1675, 600, 300, 100);

    bricks[47].draw();

    bricks[48] = new Brick(1700, 600, 400, 100);

    bricks[48].draw();

    bricks[49] = new Brick(1725, 600, 500, 100);

    bricks[49].draw();

     bricks[50] = new Brick(1750, 600, 400, 100);

    bricks[50].draw();

    bricks[51] = new Brick(1775, 600, 300, 100);
 
    bricks[51].draw();

    bricks[52] = new Brick(1800, 600, 200, 100);

    bricks[52].draw();

    bricks[53] = new Brick(1825, 600, 100, 100);

    bricks[53].draw();

    bricks[54] = new Brick(1850, 600, 0, 100);

    bricks[54].draw();

     bricks[55] = new Brick(1875, 600, 100, 100);

    bricks[55].draw();

     bricks[56] = new Brick(1900, 600, 200, 100);

    bricks[56].draw();

     bricks[57] = new Brick(1925, 600, 300, 100);

    bricks[57].draw();

     bricks[58] = new Brick(1950, 600, 400, 100);

    bricks[58].draw();

     bricks[59] = new Brick(1975, 600, 500, 100);

    bricks[59].draw();

    //end of n

     bricks[60] = new Brick(2075, 600, 0, 100);

    bricks[60].draw();

    bricks[61] = new Brick(2125, 600, 100, 100);

    bricks[61].draw();

     bricks[62] = new Brick(2175, 600, 200, 100);

    bricks[62].draw();

    bricks[63] = new Brick(2225, 600, 300, 100);

    bricks[63].draw();

    bricks[64] = new Brick(2275, 600, 400, 100);

    bricks[64].draw();

    bricks[65] = new Brick(2325, 600, 500, 100);

    bricks[65].draw();

     bricks[66] = new Brick(2375, 600, 400, 100);

    bricks[66].draw();

    bricks[67] = new Brick(2425, 600, 300, 100);

    bricks[67].draw();

     bricks[68] = new Brick(2475, 600, 200, 100);

    bricks[68].draw();

    bricks[69] = new Brick(2525, 600, 100, 100);

    bricks[69].draw();

    bricks[70] = new Brick(2575, 600, 0, 100);

    bricks[70].draw();

    bricks[71] = new Brick(2425, 600, 100, 100);

    bricks[71].draw();

     bricks[72] = new Brick(2325, 600, 100, 100);

    bricks[72].draw();

     bricks[73] = new Brick(2225, 600, 100, 100);

    bricks[73].draw();

    //end of a

    bricks[74] = new Brick(2775, 600, 0, 100);

    bricks[74].draw();

     bricks[75] = new Brick(2775, 600, 100, 100);

    bricks[75].draw();

     bricks[76] = new Brick(2775, 600, 200, 100);

    bricks[76].draw();

    bricks[77] = new Brick(2875, 600, 200, 100);

    bricks[77].draw();

    bricks[78] = new Brick(2975, 600, 200, 100);

    bricks[78].draw();

    bricks[79] = new Brick(2975, 600, 100, 100);

    bricks[79].draw();

    bricks[80] = new Brick(2975, 600, 0, 100);

    bricks[80].draw();

    bricks[81] = new Brick(2875, 600, 0, 100);

    bricks[81].draw();

     bricks[82] = new Brick(3075, 600, 200, 100);

    bricks[82].draw();

     bricks[83] = new Brick(2975, 600, 300, 100);

    bricks[83].draw();

     bricks[84] = new Brick(2975, 600, 500, 100);

    bricks[84].draw();

     bricks[85] = new Brick(2875, 600, 500, 100);

    bricks[85].draw();

     bricks[86] = new Brick(2775, 600, 500, 100);

    bricks[86].draw();

    bricks[87] = new Brick(2975, 600, 400, 100);

    bricks[87].draw();



setInterval(function(){snowing()}, 50);

}

function snowing()
{

  if (snows % 500 > 482)
  {
  	 col = "rgb(0,200,0)";
  	 col2 = "rgb(200,0,0)";
  }
  else
  {
  	col = "rgb(0,80,0)";
  	col2 = "rgb(80,0,0)";
  }
  if (snows>4000)
  {
    snows = -1;
  }
  snows++;
  rain[snows] = new Snow(getRandomInt(-500,3300),getRandomInt(-1000,1000), getRandomInt(1000,1100), 1,0,getRandomInt(2, 7),getRandomInt(3,10));
snows++;
  rain[snows] = new Snow(getRandomInt(-500,3300),getRandomInt(-1000,1000), getRandomInt(1000,1100), 1,0,getRandomInt(2, 7),getRandomInt(3,10));
 snows++;
  rain[snows] = new Snow(getRandomInt(-500,3300),getRandomInt(-1000,1000), getRandomInt(1000,1100), 1,0,getRandomInt(2, 7),getRandomInt(3,10));
  snows++;
  rain[snows] = new Snow(getRandomInt(-500,3300),getRandomInt(-1000,1000), getRandomInt(1000,1100), 1,0,getRandomInt(2, 7),getRandomInt(3,10));
  snows++;
  rain[snows] = new Snow(getRandomInt(-500,3300),getRandomInt(-1000,1000), getRandomInt(1000,1100), 1,0,getRandomInt(2, 7),getRandomInt(3,10));


refresh();

}
    



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



var keyMap = [];

document.onkeydown = keyDown;
document.onkeyup = upKey;

function keyDown(e)
{
	keyMap[e.keyCode] = true;
	if (keyMap[37])
    {
    	 direction--;
       
       if (direction<0)
          direction =3;
    }
     else if (keyMap[39])
    {
    	 direction++;
       
       if (direction>3)
          direction=0;
    
    }
}

function upKey(e)
{
	keyMap[e.keyCode] = false;
}

 
function move()
{
if (keyMap[38])
    {
      if(direction==0)
         p_acc.y = p_speed;
      else if (direction==1)
        p_acc.x = p_speed;
      else if (direction==2)
        p_acc.y = -p_speed;
      else
        p_acc.x = -p_speed;
               
    }
     
    else if (keyMap[40])
    {
     
      if(direction==0)
         p_acc.y = -p_speed;
      else if (direction==1)
        p_acc.x = -p_speed;
      else if (direction==2)
        p_acc.y = p_speed;
      else
        p_acc.x = p_speed;
      
      
    }
    	
    else	
   {
   		p_acc.y = 0;
        p_acc.x = 0;
   }
  

}


 
 function refresh()
 {
 		move();
        p_vel.add(p_acc);
        p_vel.mult(res);
        player.y+=p_vel.y;
        player.x+=p_vel.x;

      if(direction==0)
        {
          plane.a = 0;
          plane.b = 1;
          plane.d = -player.y -300;
        }
      else if (direction==1)
        {
          plane.a = 1;
          plane.b = 0;
          plane.d = -player.x - 300;
        }
      else if (direction==2)
         {
          plane.a = 0;
          plane.b = 1;
           plane.d = -player.y + 300;
        }
      else
         {
          plane.a = 1;
          plane.b = 0;
          plane.d = -player.x + 300;
        }
      

 	ctx.clearRect(0,0,canvas.width,canvas.height);
 	 if (snows % 500 > 482)
  {
  	 col = "rgb(0,200,0)";
  	 col2 = "rgb(200,0,0)";
  }
  else
  {
  	col = "rgb(0,80,0)";
  	col2 = "rgb(80,0,0)";
  }
 
 	 for (var i=0; i<floors.length; i++)
      {
        if ((direction == 0 && floors[i].location.y >= player.y) || (direction == 1 && floors[i].location.x >= player.x) || (direction == 2 && floors[i].location.y <= -plane.d) || (direction == 3 && floors[i].location.x <= -plane.d))
        floors[i].draw();
        
      }
 	  for (var i=0; i<bricks.length; i++)
      {
        if ((direction == 0 && bricks[i].location.y >= player.y) || (direction == 1 && bricks[i].location.x >= player.x) || (direction == 2 && bricks[i].location.y <= -plane.d) || (direction == 3 && bricks[i].location.x <= -plane.d))
        bricks[i].draw();
      }
     for (var i=0; i<rain.length; i++)
  {
    rain[i].update();
     if ((direction == 0 && rain[i].location.y >= player.y) || (direction == 1 && rain[i].location.x >= player.x) || (direction == 2 && rain[i].location.y <= -plane.d) || (direction == 3 && rain[i].location.x <= -plane.d))
    rain[i].draw();
  }


  
 }

