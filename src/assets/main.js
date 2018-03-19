		function toss() {
			randomInteger(4,6);
			document.getElementById('show').style.opacity='1';
		}

		function randomInteger(min,max) {
			var result = document.getElementById("demo");
			var y = Math.floor(Math.random() * (max-min) ) + min;
			if(y==4) {
				result.innerHTML = "Heads";  
			}
			else {
				result.innerHTML = "Tails"; 
			}
		}

		function reload() {
			location.reload();
		}