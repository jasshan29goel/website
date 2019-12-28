function navbar_color_change(ele)
{

	ele.getElementsByTagName("a")[0].style.color="#00abeb";
	
}
function navbar_color_reverse(ele)
{

	ele.getElementsByTagName("a")[0].style.color="#FFFFFF";
	
}
window.onscroll = function() 
{
	sticky_navbar()
};


function sticky_navbar() 
{
document.getElementById("navbar").style.position="fixed";
}



function changeImage() 
{
	if (document.getElementById("slide-image").getAttribute('src') == "https://cdn.allwallpaper.in/wallpapers/3872x2592/16659/light-wall-lumiere-house-mur-3872x2592-wallpaper.jpg") 
	{
		document.getElementById("slide-image").src = "../img/virat.jpg";
		document.getElementById('slide-image-caption-title').innerHTML="Virat Kohli";
		document.getElementById('slide-image-caption').innerHTML="Every match is not a Duty but an Opportunity";
	}
	else if (document.getElementById("slide-image").getAttribute('src') == "../img/virat.jpg") 
	{
		document.getElementById("slide-image").src = "../img/harry.jpg";
		document.getElementById('slide-image-caption-title').innerHTML="Death";
		document.getElementById('slide-image-caption').innerHTML="Your choices define you,Not your ability";
	}
	else if (document.getElementById("slide-image").getAttribute('src') == "../img/harry.jpg") 
	{
		document.getElementById("slide-image").src = "../img/sherlock.jpg";
		document.getElementById('slide-image-caption-title').innerHTML="Sherlock";
		document.getElementById('slide-image-caption').innerHTML="After eliminating the impossible, whatever remains, however improbable, must be the truth";
	}
	else if (document.getElementById("slide-image").getAttribute('src') == "../img/sherlock.jpg") 
	{
		document.getElementById("slide-image").src = "https://wallpapercave.com/wp/3vZjpA5.jpg";
		document.getElementById('slide-image-caption-title').innerHTML="";
		document.getElementById('slide-image-caption').innerHTML="Design is not just what it looks like and feels like. Design is how it works";
	}
	else if (document.getElementById("slide-image").getAttribute('src') == "https://wallpapercave.com/wp/3vZjpA5.jpg") 
	{
		document.getElementById("slide-image").src = "https://cdn.allwallpaper.in/wallpapers/3872x2592/16659/light-wall-lumiere-house-mur-3872x2592-wallpaper.jpg";
		document.getElementById('slide-image-caption-title').innerHTML="Light";
		document.getElementById('slide-image-caption').innerHTML="Light shows you the path during the most dark times";
	}
}
function footer_interests()
{
	document.getElementById("navbar").style.position="relative";
	var ele=document.getElementsByClassName("foot");
	ele[0].style.position="fixed";
	ele[0].style.left="0";
	ele[0].style.bottom="0";
	ele[0].style.width="100vw";

}
var i =0;
function setValue()
{
	i++;
	document.getElementById('like-button').innerHTML = i;
}
function dispon(ele)
{
	document.getElementById(ele.id).className="active";
	var x=document.getElementsByClassName("close");

	x[0].classList.remove("inactive");
	x[0].classList.add("active");
	if(ele.id!=="game")
	{
		document.getElementById("game").classList.add("inactive");
		document.getElementById("game").classList.remove("active");
	}
	if(ele.id!=="sports")
	{
		document.getElementById("sports").classList.add("inactive");
		document.getElementById("sports").classList.remove("active");
	}

	if(ele.id!=="movies")
	{
		document.getElementById("movies").classList.add("inactive");
		document.getElementById("movies").classList.remove("active");
	}

	if(ele.id!=="tv")
	{
		document.getElementById("tv").classList.add("inactive");
		document.getElementById("tv").classList.remove("active");
	}
	if(ele.id==="game")
	{
		ele.innerHTML="I do not play a much games.Some of the games I have played are:-<br> Call Of Duty<br>FIFA<br>GTA series<br>God of war<br>"
		ele.style.maxWidth="30vw";
		ele.style.minWidth="200px";
	}
	else if(ele.id==="movies")
	{
		ele.innerHTML="I am a big fan of both Bollywood and Hollywood.Some of my favourite movies are :-<br>Interstellar<br>Martian<br>Titanic<br>3 idiots<br>Harry Potter Series<br>Fast and furious series<br>Pirates of carribean series<br>The Silence of The lambs<br>Inception<br>My name is Khan<br>etc.(the list is long ;))";	
		ele.style.maxWidth="80vw";
		ele.style.minWidth="200px";

	}
	else if(ele.id==="sports")
	{
		ele.innerHTML="I am not that much into sports as well.All I play is table tennis and chess.";	
		ele.style.maxWidth="30vw";
		ele.style.minWidth="150px";
	}
	else if(ele.id==="tv")
	{
		ele.innerHTML="I am a new fan of tv series.Basically I have started watching them in the past few weeks Some are:-<br>Sherlock<br>Big bang theory<br>Friends";	
		ele.style.maxWidth="30vw";
		ele.style.minWidth="200px";

	}

}
function dispof(ele)
{
	ele.classList.add("inactive");
	ele.classList.remove("active");

	document.getElementById("game").classList.add("active");
	document.getElementById("game").classList.remove("inactive");
	document.getElementById("sports").classList.add("active");
	document.getElementById("sports").classList.remove("inactive");
	document.getElementById("movies").classList.add("active");
	document.getElementById("movies").classList.remove("inactive");
	document.getElementById("tv").classList.add("active");
	document.getElementById("tv").classList.remove("inactive");

	document.getElementById("game").innerHTML="Game";
	document.getElementById("sports").innerHTML="Sports";
	document.getElementById("movies").innerHTML="Movies";
	document.getElementById("tv").innerHTML="tv-series";

	document.getElementById("game").style.maxWidth="10vw";
	document.getElementById("game").style.minWidth="100px";
	document.getElementById("sports").style.maxWidth="10vw";
	document.getElementById("sports").style.minWidth="100px";
	document.getElementById("tv").style.maxWidth="10vw";
	document.getElementById("tv").style.minWidth="100px";
	document.getElementById("movies").style.maxWidth="10vw";
	document.getElementById("movies").style.minWidth="100px";

}
// function changeback()
// {

// 	if(screen.height>700)
// 	{
// 		var x=document.getElementsByClassName("interests");

// 		x[0].style.backgroundImage="url('../img/backtest.jpg')";
// 		x[0].style.backgroundPosition="0% 0%";

// 	}
// }

// changeback();
var flag=0;
var arr = [];

function submission()
{
	var x=document.getElementsByClassName("feedback-table");
	x[0].style.display="block";

	var name = document.getElementById("firstname").value; 
	var skill = document.getElementById("skill").value; 
	var level = document.getElementById("level").value;
	if(name==="")
	{
		alert("Your Name cannot be left empty");
		return;
	}
	if(skill==="")
	{
		alert("Skill cannot be left empty");
		return;
	}
	var obj={name: name,skill: skill,level: level}
	arr.push(obj);

	// for(i in arr)
	// {
	// 	document.write(arr[i].name +"  "+arr[i].skill+" "+arr[i].level)
	// }
	if(flag===0)
	{
		var div = document.getElementsByClassName("feedback-table")[0];
		var table = document.createElement("table");

		var tableBody = document.createElement("tbody");


		var row = document.createElement("tr");

		var cell1 = document.createElement("td");
		var cellText1 = document.createTextNode("Name");
		cell1.appendChild(cellText1);
		row.appendChild(cell1);

		var cell2 = document.createElement("td");
		var cellText2 = document.createTextNode("Skill");
		cell2.appendChild(cellText2);
		row.appendChild(cell2);


		var cell3 = document.createElement("td");
		var cellText3 = document.createTextNode("Level");
		cell3.appendChild(cellText3);
		row.appendChild(cell3);
		row.setAttribute("id", "table-header");
		
		tableBody.appendChild(row);
		table.appendChild(tableBody);
		div.appendChild(table);

		flag=1;

	}


	var row = document.createElement("tr");

	var cell1 = document.createElement("td");
	var cellText1 = document.createTextNode(name);
	cell1.appendChild(cellText1);
	row.appendChild(cell1);

	var cell2 = document.createElement("td");
	var cellText2 = document.createTextNode(skill);
	cell2.appendChild(cellText2);
	row.appendChild(cell2);


	var cell3 = document.createElement("td");
	var cellText3 = document.createTextNode(level);
	cell3.appendChild(cellText3);
	row.appendChild(cell3);

	document.getElementsByTagName("tbody")[0].appendChild(row);


}

