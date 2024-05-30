(() => {

  //Forzamos a que sea null o undefined:
  let myNull: null = null;
  let myUndefined: undefined = undefined;
  console.log("hello");
  //se puede usar para inicializar una variable en nulo
  let myNumber: number | null = null;
  //despues puedo asignarle un valor:
  myNumber = 12;

  //se puede usar para inicializar una variable en undefined
  let myString: string | undefined = undefined;
  //despues puedo asignarle un valor:
  myString = 'hola';

  function hi(name: string | null) {
    let hello = 'hola ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody'
    }
    console.log(hello);
  }

  // hi('Nicolas');
  // hi(null);

  function hiV2(name: string | null) {
    let hello = 'hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hiV2('Nicolas');
  hiV2(null);

})();
