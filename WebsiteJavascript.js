// JavaScript Document
//changes background color
var p=0;
var s1=0, s2=0, s3=0;
var w=0;
var x;
var y = "";
var z = "#";
var opa = 1;
var n=0,rotINT
var a=2, b=2;
var picturesx=[ "1.png", "2.png", "3.png", "1.png", "2.png"];
var picturesy=["2.png", "3.png", "1.png", "2.png", "3.png"];
var w;
var d;
window.onload=myFunction;
var postit;
function myFunction()
{
	postit = setInterval(function(){post()}, 1);
}
function post()
{
	w = window.innerWidth;
	d = "Width: ";
	document.getElementById("screen").innerHTML=d+w;
	if (w<=560 && w>=480)
	{
		document.getElementById("Tablet").style.display="inherit";
		document.getElementById("Phone").style.display="none";
	}
	else if (w<480)
	{
		document.getElementById("Tablet").style.display="none";
		document.getElementById("Phone").style.display="inherit";
	}
	else
	{
		document.getElementById("Tablet").style.display="none";
		document.getElementById("Phone").style.display="none";
	}
}
function rotateDIV()
{	
	x=document.getElementById("rotate2D");
	clearInterval(rotINT);
	rotINT=setInterval("CompleteRotate()",3);
}
function CompleteRotate()
{
	n=n+1
	x.style.transform="rotate(" + n + "deg)";
	x.style.webkitTransform="rotate(" + n + "deg)";
	x.style.OTransform="rotate(" + n + "deg)";
	x.style.MozTransform="rotate(" + n + "deg)";
	if (n==360)
	{
		clearInterval(rotINT);
		if (n==360)
		{
			n=0;
		}
	}
}
function BackgroundColor()
{
	var x;
	for (x=0;x<6;x++)
		{
		var a = Math.floor(Math.random() * 15);
		y += a+" ";
		if (a>=10)
		{
			if ( a == 10)
			{
				z+="a";
			}
			if ( a == 11)
			{
				z+="b";
			}
			if ( a == 12)
			{
				z+="c";
			}
			if ( a == 13)
			{
				z+="d";
			}
			if ( a == 14)
			{
				z+="e";
			}
			if ( a == 15)
			{
				z+="f";
			}	
		}
		else
		{
			z+=a;
		}
	}
	if (z == "#000000")
	{
		z = "#fff";
	}
	document.body.style.backgroundColor = z;
	document.getElementById("check").innerHTML=z;
	document.getElementById("block").style.backgroundColor=z;
	document.getElementById("navi").style.backgroundColor = "#000";
	y="";
	z="#";
}
function Poof()
{
	if (opa.toFixed(1)<=0.1)
	{
		document.getElementById("poof").style.display="none";
	}
	else
	{
		document.getElementById("poof").style.opacity=opa;
		opa=opa-.1;
	}
	if (opa.toFixed(1)==.9)
	{
		document.getElementById("add").innerHTML="Little by little";
	}
	else if (opa.toFixed(1)==.8)
	{
		document.getElementById("add").innerHTML+=" it fades away.";
	}
	else if (opa.toFixed(1)==.7)
	{
		document.getElementById("add").innerHTML+=" Soon to be";
	}
	else if (opa.toFixed(1)==.6)
	{
		document.getElementById("add").innerHTML+=" gone for good.";
	}
	else if (opa.toFixed(1)==.5)
	{
		document.getElementById("add").innerHTML+=" Half way there.";
	}
	else if (opa.toFixed(1)==.4)
	{
		document.getElementById("add").innerHTML+=" Will you make it";
	}
	else if (opa.toFixed(1)==.3)
	{
		document.getElementById("add").innerHTML+=" disappear for good?";
	}
	else if (opa.toFixed(1)==.2)
	{
		document.getElementById("add").innerHTML+=" Almost there.";
	}
	else if (opa.toFixed(1)==.1)
	{
		document.getElementById("add").innerHTML+=" Bye.";
	}
}
function PictureResponse()
{
	if (p==0)
	{
		document.getElementById("img1").style.display="inherit";
		document.getElementById("img2").style.display="none";
		p++;
	}
	else
	{
		document.getElementById("img1").style.display="none";
		document.getElementById("img2").style.display="inherit";
		p=0;
	}
}
function Reset()
{
	opa=1;
	a=3;
	b=3;
	document.getElementById("poof").style.opacity=opa;
	document.getElementById("poof").style.display="inherit";
	document.getElementById("add").innerHTML="";
	document.body.style.backgroundColor="#fff";
	document.getElementById("block").style.backgroundColor="#fff";
	document.getElementById('m1').src=picturesx[a];
	document.getElementById('m2').src=picturesy[b];
	document.getElementById("Section1").style.display="inherit";
	document.getElementById("Section2").style.display="inherit";
	document.getElementById("Section3").style.display="inherit";
}
$(document).ready(function()
{
	$("#S1").click(function()
	{
	if (s1==0)
	{
		$("#Section1").hide();
		s1++;
	}
	else
	{
		$("#Section1").show();
		s1=0;
	}
	});

	$("#S2").click(function()
	{
	if (s2==0)
	{
		$("#Section2").hide();
		s2++;
	}
	else
	{
		$("#Section2").show();
		s2=0;
	}
	});
	
	$("#S3").click(function()
	{
	if (s3==0)
	{
		$("#Section3").hide();
		s3++;
	}
	else
	{
		$("#Section3").show();
		s3=0;
	}
	});
	
	$("#AS").click(function()
	{
		$("#Section1").show();
		$("#Section2").show();
		$("#Section3").show();
	});
});
function Pchange()
{
	if (w==0)
	{
		document.getElementById("pic1").style.display="none";
		document.getElementById("pic2").style.display="inherit";
		w++;
	}
	else
	{
		document.getElementById("pic1").style.display="inherit";
		document.getElementById("pic2").style.display="none";
		w=0;
	}
}
function User()
{
	y += "#";
	y += document.getElementById("Color").value;
	document.body.style.backgroundColor = y;
	document.getElementById("check").innerHTML = y;
	document.getElementById("block").style.backgroundColor = y;
	y="";
}
function Menu()
{
	if (x==0)
	{
		document.getElementById("navi").style.display="inherit";
		x++;
	}
	else if (x==1)
	{
		document.getElementById("navi").style.display="none";
		x=0;
	}
}
function move()
{
	var c = document.getElementById("Canvas1");
	var ctx = c.getContext("2d");
	ctx.clearRect(0,0,700,400);
    var img = document.getElementById("logo1");
    ctx.drawImage(img,0,-5);
	var img3 = document.getElementById("logo3");
	ctx.drawImage (img3,140,125);
	var img2 = document.getElementById("logo2");
	ctx.drawImage (img2,240,25,150,250);
}
function normal()
{
	var c = document.getElementById("Canvas1");
	var ctx = c.getContext("2d");
	ctx.clearRect(0,0,700,400);
	var img = document.getElementById("logo1");
    ctx.drawImage(img,0,-5);
	var img2 = document.getElementById("logo2");
	ctx.drawImage(img2,140,125);
}
function Forward()
{
	if (a>=1)
	{
		if (a <=3)
		{
			a++;
			b++;
			document.getElementById('m1').src=picturesx[a];
			document.getElementById('m2').src=picturesy[b];
		}
		else
		{
			a=2;
			b=2;
			document.getElementById('m1').src=picturesx[a];
			document.getElementById('m2').src=picturesy[b];
		}
	}
	else
	{
		a=2;
		b=2;
		document.getElementById('m1').src=picturesx[a];
		document.getElementById('m2').src=picturesy[b];
	}
}
function Back()
{
	if (a>=1)
	{
		if (a<=3)
		{
			a--;
			b--;
			document.getElementById('m1').src=picturesx[a];
			document.getElementById('m2').src=picturesy[b];
		}
		else
		{
			a=2;
			b=2;
			document.getElementById('m1').src=picturesx[a];
			document.getElementById('m2').src=picturesy[b];
		}
	}
	else
	{
		a=2;
		b=2;
		document.getElementById('m1').src=picturesx[a];
		document.getElementById('m2').src=picturesy[b];
	}
}