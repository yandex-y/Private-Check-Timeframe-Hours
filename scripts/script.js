setInterval(
function cek(){
	var hari = new Date();
	var jamnow = hari.getHours();
	var menitnow = hari.getMinutes();
	var inputjam = document.getElementById("inputjam").value;
	var inputmenit = document.getElementById("inputmenit").value;
	
	var calculatemenit = (60-menitnow) + parseInt(inputmenit);
	
	if (calculatemenit>59){
		jamtambahan = 1;
		calculatemenit = calculatemenit-60;
		}else{
			jamtambahan = 0;
			}
			
	if (inputjam>jamnow){
		var calculatejam = inputjam-jamnow-1+jamtambahan;
		}else if(inputjam<jamnow){
			var calculatejam = (23-jamnow) + parseInt(inputjam)+jamtambahan;
			}else if((inputjam==0) && (inputmenit>menitnow)){
				calculatejam = 0;
}else if((inputjam==0) && (inputmenit<menitnow)){
				var calculatejam = 23;
}else if((inputjam==0) && (inputmenit==menitnow)){
				var calculatejam = 24;
}else if(inputjam=jamnow&&inputmenit==menitnow){
				var calculatejam = 24;
				}else if(inputjam=jamnow&&inputmenit>menitnow){
					var calculatejam = 0;
					}else if(inputjam=jamnow&&inputmenit<menitnow){
						var calculatejam = 23;
						}
						
	if((inputjam=="") && (inputmenit=="")){
		var keluar = ("Masukkan Jam & Menit Terlebih Dahulu");
		}else if((inputjam=="") && (inputmenit!=="")){
			var keluar = ("Masukkan Jam Terlebih Dahulu");
			}else if((inputjam!=="") && (inputmenit=="")){
				var keluar = ("Masukkan Menit Terlebih Dahulu");
				}else if((inputjam>23) || (inputmenit>59)){
					var keluar = ("Masukkan Jam & Menit Dengan Benar");
					}else if(calculatejam==0){
						var keluar = ("Tersisa "+calculatemenit+" Menit");
						}else if(calculatemenit==0){
							var keluar = ("Tersisa "+calculatejam+" Jam ");
							}else{
								var keluar = ("Tersisa "+calculatejam+" Jam "+calculatemenit+" Menit");
								}
								
								
	document.getElementById("display").innerHTML=keluar;

	}
	,213)