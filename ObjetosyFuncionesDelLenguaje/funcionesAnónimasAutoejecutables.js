// funcion anonima autojecutable

(function () {
  console.log("Mi primer IIIFE")
})();

(function (d, w, c) {
  console.log("Mi segunda IIIFE")
  console.log(d)
  console.log(w)
  console.log(c)
})(document, window, console);

// Formas de escribir las funciones anonimas Autoejecutables
// clasica
(function () {
  console.log("version clasica")
}());

// la Crockford (javaScript The God Parts) 
((function () {
  console.log("version crockford")
})());

// unaria 
+function () {
  console.log("version unaria")
}();

// facebook
!function () {
  console.log("version facebook")
}();