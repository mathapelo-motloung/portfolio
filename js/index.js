var i=0;
var txt="Full Stack Developer";
var speed=100;

window.onload=function typeWriter(){
				if(i<txt.length){
					document.getElementById("typewriter").innerHTML +=txt.charAt(i);
					i++;
					setTimeout(typeWriter,speed);
				}
			}
			
