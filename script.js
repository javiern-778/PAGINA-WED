function mostrarInformacion(value) {
    var datosSeleccionados = document.getElementById("datosSeleccionados");

    if (value === "javier") {
        datosSeleccionados.innerHTML = `
            <img src="Javier.jpg" alt="Foto de Javier" style="max-width: 300px; max-height: 300px;">
            <p>Nombre: Javier Noe Cruz España</p>
            <p>Carrera: ISC</p>
            <p>Número de Control: 18620152</p>
        `;
    } else if (value === "sandra") {
        datosSeleccionados.innerHTML = `
            <img src="Sandra.jpg" alt="Foto de Sandra" style="max-width: 120px; max-height: 120px;">
            <p>Nombre: Sandra</p>
            <p>Carrera: ISC</p>
            <p>Número de Control: [Número de Control de Sandra]</p>
        `;
    } else if (value === "rosa") {
        datosSeleccionados.innerHTML = `
            <img src="Rosa.jpg" alt="Foto de Rosa" style="max-width: 120px; max-height: 120px;">
            <p>Nombre: Rosa</p>
            <p>Carrera: ISC</p>
            <p>Número de Control: [Número de Control de Rosa]</p>
        `;
    } else {
        // Manejar el caso donde no se ha seleccionado un integrante
        alert("Función de los Integrantes del equipo: " + value);
    }
}

function mostrarDetalleUnidad(value, unidad) {
    var datosSeleccionados = document.getElementById("datosSeleccionados");

    if (value === "1") {
        datosSeleccionados.innerHTML = `
            <h2>1.-INTRODUCCIÓN A LAS APLICACIONES WEB </h2>
            <embed src="1_Introducción.pdf" type="application/pdf" width="100%" height="500px"></iframe>
        `;
    }    
      else if (value === "1.1") {
        datosSeleccionados.innerHTML = `
            <h2>1.1.-Evolucion de las aplicaciones wed</h2>
            <embed src="1_1_evolucion.pdf" type="application/pdf" width="100%" height="500px"></iframe>

        `;
    } else if (value === "1.2") {
        datosSeleccionados.innerHTML = `
            <h2>1.2.-Arquitectura de las aplicaciones</h2>
            <iframe src="1_2_arquitectura.html" width="100%" height="500px"></iframe>
        `;
    } else if (value === "1.3") {
        datosSeleccionados.innerHTML = `
            <h2>1.3.-Tecnologias para el desarollo para la aplicaciones wed</h2>
            <embed src="1_3_tecnologias.pdf" type="application/pdf" width="100%" height="500px"></iframe>
        `;
    } else if (value === "1.4") {
        datosSeleccionados.innerHTML = `
            <h2>1.4.-Planificaion de aplicaciones wed</h2>
            <embed src="1_4_planificacion.pdf" type="application/pdf" width="100%" height="500px"></iframe>
        `;
    } else {
        // Manejar el caso donde no se ha seleccionado una unidad
        alert("Función de la " + unidad + ": " + value);
    }
}
