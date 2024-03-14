(() => {
  //Forma inferida
  let productPrice = 100;
  productPrice = 12;
  console.log('ProductPrice', productPrice);

  //Forma explicita
  let customerAge: number = 28;
  //customerAge = customerAge + '1'; //vendria asi: 281
  customerAge = customerAge + 1;
  console.log('ProductPrice', customerAge);

  //Siempre tenemos que señalar que tipo de valor es...
  let productInStock: number;
  console.log('productInStock', productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('asdsa'); // me da NaN, que se trata tambien como un número por eso no me da error.
  console.log('discount', discount);

  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }
  //extradecimales:
  let hex = 0xfff;
  console.log('hex', hex);
  //binarios
  let bin = 0b1010; //10
  console.log('bin', bin);
  //Esto esta mal:
  // const myNumber: Number = 10;
  //ya que el Number con N en mayúscula es un objeto, y no sería correcto tiparlo de esa forma.
  //quedaria así:
  const myNumber: number = 10;
})();
