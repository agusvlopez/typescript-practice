(() => {
  const prices = [1, 2, 2, 1, 1, 212];
  //Esto puede generar errores y typescript lo corrige:
  // prices.push('asa');
  // prices.push(true);
  // prices.push({});
  //...

  //Esto si porque es un type number:
  prices.push(121212);

  //tambien se puede hacer esto:
  const differentTypesInArray = [1, 2, 2, 1, 1, 212, 'hola', true];

  //tipado explicito:
  let mixed: (number | string | boolean)[] = ['hola', true];
  mixed.push(12);
  mixed.push('hola');

  let numbers = [1, 2, 2, 1, 121];
  numbers.map(item => item * 2)
})();
