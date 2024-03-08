function mostrarInformacion(value) {
    var datosSeleccionados = document.getElementById("datosSeleccionados");

    if (value === "javier") {
        datosSeleccionados.innerHTML = `
            <img src="Javier2.jpg" alt="Foto de Javier" style="max-width: 300px; max-height: 300px;">
           <p style="font-size: 38px;"><span style="color: black;">Nombre:</span> <span style="color: blue;">Javier Noe Cruz España</span></p>
            <p style="font-size: 38px;"><span style="color: black;">Carrera:</span> <span style="color: blue;">ISC</p>
            <p style="font-size: 38px;"><span style="color: black;">Número de Control: </span> <span style="color: blue;">18620152</p>
        `;
    } else if (value === "sandra") {
        datosSeleccionados.innerHTML = `
            <img src="foto_sandra.jpeg" alt="Foto de Sandra" style="max-width: 120px; max-height: 120px;">
            <p style="font-size: 38px;"><span style="color: black;">Nombre:</span> <span style="color: blue;">Sandra Yolotzin Reyes García</span></p>
            <p style="font-size: 38px;"><span style="color: black;">Carrera:</span> <span style="color: blue;">ISC</p>
            <p style="font-size: 38px;"><span style="color: black;">Número de Control: </span> <span style="color: blue;">19620079</p>
        `;
    } else if (value === "rosa") {
        datosSeleccionados.innerHTML = `
            <img src="Rosa.jpg" alt="Foto de Rosa" style="max-width: 120px; max-height: 120px;">
            <p style="font-size: 38px;"><span style="color: black;">Nombre:</span> <span style="color: blue;">Rosa Salazar Doroteo</span></p>
            <p style="font-size: 38px;"><span style="color: black;">Carrera:</span> <span style="color: blue;">ISC</p>
            <p style="font-size: 38px;"><span style="color: black;">Número de Control: </span> <span style="color: blue;">18620216</p>
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
            <h2 style="font-size: 38px;"><span style="color: blue;">1.-INTRODUCCIÓN A LAS APLICACIONES WEB </h2>
            <embed src="1_Introducción.pdf" type="application/pdf" width="100%" height="500px"></iframe>
        `;
    }    
      else if (value === "1.1") {
        datosSeleccionados.innerHTML = `
            <h2 style="font-size: 38px;"><span style="color: blue;">1.1.-Evolucion de las aplicaciones wed</h2>
            <embed src="1_1_evolucion.pdf" type="application/pdf" width="100%" height="500px"></iframe>

        `;
    } else if (value === "1.2") {
        datosSeleccionados.innerHTML = `
            <h2 style="font-size: 38px;"><span style="color: blue;">1.2.-Arquitectura de las aplicaciones</h2>
            <embed src="1_2_arquitectura.pdf" type="application/pdf" width="100%" height="500px"></iframe>
        `;
    } else if (value === "1.3") {
        datosSeleccionados.innerHTML = `
            <h2 style="font-size: 38px;"><span style="color: blue;">1.3.-Tecnologias para el desarollo para la aplicaciones wed</h2>
            <embed src="1_3_tecnologias.pdf" type="application/pdf" width="100%" height="500px"></iframe>
        `;
    } else if (value === "1.4") {
        datosSeleccionados.innerHTML = `
            <h2 style="font-size: 38px;"><span style="color: blue;">1.4.-Planificaion de aplicaciones wed</h2>
            <embed src="1_4_planificacion.pdf" type="application/pdf" width="100%" height="500px"></iframe>
        `;
    } else {
        // Manejar el caso donde no se ha seleccionado una unidad
        alert("Función de la " + unidad + ": " + value);
    }
}
