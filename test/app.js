const faltantenav = require('../bin/faltanav')
const calfecnac = require('../dist/calfenac')
const validarFormulario = require('../source/formulario');

var datosFormulario = {
    nombre: "Carlos Daniel Herrera Calero",
    email: "carlos.herrera.c@tecsup.edu.pe",
    fechaNacimiento: "13/04/2004"
};

var errores = validarFormulario(datosFormulario);

if (errores.length > 0) {
    console.log("Se encontraron los siguientes errores:");
    errores.forEach(function (error) {
        console.log("- " + error);
    });
} else {
    console.log("El formulario se validó correctamente.");
}

console.log(faltantenav.faltantenav())
console.log(calfecnac.calfecnac())