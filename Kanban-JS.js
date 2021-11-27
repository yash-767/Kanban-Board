function getLocation() {
        if (navigator.geolocation)
        {
        navigator.geolocation.getCurrentPosition(showPosition);
        }
        else{document.getElementById("loc").innerHTML="Geolocation not supported.";}
        }
        function showPosition(position)
        {
        document.getElementById("loc").innerHTML="Location Details: Latitude: " + position.coords.latitude + 
        " Longitude: " + position.coords.longitude;  
        }
        getLocation();
		
const counts = ["count1","count2","count3","count4"];
const panels = ["backlog","selectedfordev","inprogress","done"];

if(!localStorage.getItem('backlog')){
	localStorage.clear();
	populate_count();
}
else{
	populate_count();
}

function populate_count(){
		for (let i = 0; i < 4; i++)
			{	
				localStorage[panels[i]] = document.getElementById(panels[i]).children.length-3;
				document.getElementById(counts[i]).innerHTML=localStorage[panels[i]];
				
			}
		}
var prev = "";
function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
			if(panels.includes(ev.path[0].id)){prev = ev.path[0].id}
			else{prev = ev.path[1].id}
			
        }

function allowDrop(ev) {
            ev.preventDefault();
        }

function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.currentTarget.appendChild(document.getElementById(data));
			get_count(prev);
			if(panels.includes(ev.path[0].id)){get_count(ev.path[0].id);}
			else{get_count(ev.path[1].id);}
			
        }
		
function get_count(panel){
			var x = "1";
			if (typeof (Storage) !== "undefined") {
				if (localStorage[panel]) {
					localStorage[panel] = document.getElementById(panel).children.length-3;
				
					if(panel.localeCompare("selectedfordev") == 0)
					{ x = "2"; }
					else if(panel.localeCompare("inprogress") == 0)
					{ x = "3"; }
					else if(panel.localeCompare("done") == 0)
					{ x = "4"; }
				document.getElementById("count".concat(x)).innerHTML=localStorage[panel];
				}
			}
		}	
		
		