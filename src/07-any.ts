(() => {
  //any es una palabra reservada de Typescript
  //any permite que el valor puede ser cualquier cosa.
  //En general no es una buena práctica utilizarlo..
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';

  //cambio de un tipo a otro...
  const rta = (myDynamicVar as string).toLocaleLowerCase();
  console.log(rta);

  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();
