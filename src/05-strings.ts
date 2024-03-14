(() => {
  let productTitle = 'My amazing product';
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
  title: ${productTitle}
  price: ${productPrice}
  isNew: ${isNew}
  `
  console.log(summary);
  //Mala práctica:
  // const myString: String = true;
  //debería ser asi(string todo en minúscula):
  const myString: string = '';
})();
