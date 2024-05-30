(() => {
  //typear explicitamente el resultado de una funcion
  //lo typeo para que obligatoriamente esta funcion retorne un string
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  }

  //Cuando no retorna nada es una funcion de tipo void
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }

  printTotal([1, 2, 1, 1]);

})();
