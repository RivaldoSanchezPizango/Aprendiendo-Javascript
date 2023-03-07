/* antes de explicar como funciona el modelo de Javascript es importante entender algunos conceptos:

- procesamiento Single thread y Multi thread.
- Operaciones de CPU y operaciones de I/O.
-Operaciones con currentes y paralelas.
-Operaciones bloqueantes y No bloqueantes.
-Opraciones sincronas y asincronas */

/* Tendremos Codigo sincrono bloqueante */
(() => {
  console.log("Codigo Sincrono")
  console.log("inicio")

  function dos() {
    console.log("dos")
  }

  function uno() {
    console.log("Uno")
    dos()
    console.log("tres")
  }
})()


  /* y asincrono no bloqueante */

  (() => {
    console.log("codigo asincrono")
    console.log("inicio")

    function dos() {
      setTimeout(function () {
        console.log("Dos")
      }, 1000);
    }

    function uno() {
      setTimeout(function () {
        console.log("Uno")
      }, 0);
      dos()
      console.log("tres")
    }

    uno()
    console.log("fin")
  })()