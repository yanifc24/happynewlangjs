
//Usando una API para saber qué profesor tiene cada curso

$("button").click(llamadaAjax)

function llamadaAjax() {

	const curso = $("#curso").val()
	$.ajax({
		method: 'GET',
		url: 'https://randomuser.me/api/',
		success: function(respuesta) { 
			crearTabla(respuesta.results)
			console.log(respuesta.results)
		}
	})
	
}



const crearTabla = (data) => {
	const respuesta = document.getElementById("respuesta")

	
	let tabla = `<table class='table'>
					<tr>
						<td>Name</td>
						
	
					</tr>
				`

	for (persona of data) {
		tabla += `<tr>
		            <td> ${persona.name.first} ${persona.name.last}</td>
					
				 </tr>
				 

				`
				 
	}

	tabla += "</table>"

	respuesta.innerHTML = tabla
}

$(document).ready(function() {
	llamadaAjax();
})

