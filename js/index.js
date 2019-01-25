var i=0;
var txt="A full stack web developer that develops web solutions to improve people's lives and take businesses to the next level";
var speed=100;

window.onload=function typeWriter(){
				if(i<txt.length){
					document.getElementById("typewriter").innerHTML +=txt.charAt(i);
					i++;
					setTimeout(typeWriter,speed);
				}
			}
			
