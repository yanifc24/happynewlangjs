class Cursos{
   
	constructor(pedido){
		this.curso;
		this.nivel = pedido.nivel
		this.horario = pedido.horario
		this.cant = pedido.cant;
	}
	
	
	comprarCurso(){

		 if(this.nivel == "Lang cocodrile"){
			
			this.nivel = "Lang cocodrile"

        } else if (this.nivel == "Lang koala ") {

                this.nivel == "Lang koala" 

		}else{
			
			this.nivel == "Lang tiger"
		}


		if(this.horario == "Lunes y miércoles 17:00 a 18:00"){

			 this.horario == "Lunes y miércoles 17:00 a 18:00"
		}else{

			 this.horario == "Martes y jueves 16:00 a 17:00"
		}


		if(this.cant == 1 ){
			
			this.cant == 1

        } else if (this.cant == 2) {

                this.cant == 2

		}else{
			
			this.cant == 3
		}
     

        //Respuestas
		
	
		if(this.cant == 1 ){
			
			entrega.innerHTML = "Usted compró " + this.cant + " curso del nivel " + this.nivel + " ,para los días " + this.horario  
		


		}else{entrega.innerHTML = "Usted compró " + this.cant  + " cursos del nivel " + this.nivel + " ,para los días " + this.horario  
		
				
		}
		
		
	}
    
}

//para sacar el valor de cada curso(nivel)
function valorCurso() {
	
      let precio = document.getElementById("valorCurso")
	 if(document.getElementById("nivel").value == "Lang cocodrile") {
	 precio.innerHTML = "El valor es de $2000";
	 precioCurso=2000
 }
      else if (document.getElementById("nivel").value  == "Lang koala") {
	 precio.innerHTML = "El valor es de $2500";
	 precioCurso=2500
     }else{
	 precio.innerHTML = "El valor es de $4000";
	 precioCurso= 4000
   }

 }

 //Se multiplica el valor de cada curso por la cantidad que se compran para sacar el total
 function totalCurso() {
	const total = document.getElementById("valorFinal")
	const cant = document.getElementById("cant").value
	
	if (cant == 'cant') {
		total.innerHTML = "Debe elegir una cantidad"
		return
	} else {
		total.innerHTML = "Deberá abonar $ " + parseInt(cant) * parseInt(precioCurso);
	}
}

 let precioCurso
 let entrega = document.getElementById("entrega")
 //let valorCurso = document.getElementById("valorCurso")	
 let miFormulario = document.getElementById("cargaPedido")
 let curso = new Cursos({nivel:"",horario:"",cant:""})
 miFormulario.addEventListener("submit", validarForm);



function validarForm(e){
	e.preventDefault()
     let error = document.getElementById("error")
     error.innerHTML= "";
     error.style.color = "blue"
	if(document.getElementById("nivel").value != "seleccion"){

		curso["nivel"] = document.getElementById("nivel").value
	}else{
        $ ("#error").append("Debe seleccionar un nivel. </br>")
		
	}

	if(document.getElementById("horario").value != "seleccion"){

		curso["horario"] = document.getElementById("horario").value
	}else{

		$ ("#error").append("Debe seleccionar un horario </br>")
		
	}


	if(document.getElementById("cant").value != "cant"){

		curso["cant"] = document.getElementById("cant").value
	}else{
		
		$ ("#error").append("Debe seleccionar una cantidad. </br>")
		
	}

	

	if(error.innerHTML == ""){

		miFormulario.style.display = "none"
        curso.comprarCurso()
		totalCurso()

	}


}

//Animaciones
//Usando fadeIn y fadeOut para mensaje

$("#suerte").prepend("<p style='display:none;'>¡Mucha suerte!</p>");
$("#suerte").prepend("<p style='display:none;'>¡Te esperamos!</p>");
$("p").fadeIn(2500);
$("p").fadeOut(7000); 

//Usando slideDown para botón

$(document).ready(function(){
 $("#botonForm").slideDown("slow");
})


 