function validarFormulario(datosFormulario) {
    var camposObligatorios = ["nombre", "email", "fechaNacimiento"];
    var errores = [];

    for (var i = 0; i < camposObligatorios.length; i++) {
      var campo = camposObligatorios[i];
      if (!datosFormulario[campo]) {
        errores.push("El campo " + campo + " es obligatorio.");
      }
    }
    var email = datosFormulario.email;
    if (email && !validarEmail(email)) {
      errores.push("El formato del email es inválido.");
    }
    var fechaNacimiento = datosFormulario.fechaNacimiento;
    if (fechaNacimiento && !validarFecha(fechaNacimiento)) {
      errores.push("El formato de la fecha de nacimiento es inválido.");
    }
    return errores;
  }
  function validarEmail(email) {
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }
  function validarFecha(fecha) {
    var regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;
    return regexFecha.test(fecha);
  }
  module.exports = validarFormulario;
  