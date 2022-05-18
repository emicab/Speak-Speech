let rec;
    if (!("webkitSpeechRecognition" in window)) {
    	alert("disculpas, no puedes usar la API");
    } else {
    	rec = new webkitSpeechRecognition();
    	rec.lang = "es-AR";
    	rec.continuous = true;
    	rec.interim = true;
    	rec.addEventListener("result",iniciar);
    }
function iniciar(event){
	for (let i = event.resultIndex; i < event.results.length; i++){
         document.querySelector('.grabacion').innerHTML = event.results[i][0].transcript;
	}
}

rec.start();

document.querySelector('.btn-leer').addEventListener("click", ()=>{
	decir(document.querySelector('.texto').value);
});


function decir (texto){
	speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

}