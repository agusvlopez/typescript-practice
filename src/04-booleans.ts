(() => {
  //forma implícita o inferida:
  let isEnable = true;
  isEnable = false;

  //tipado de forma explicita:
  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);

  //Mala práctica:
  // const myBoolean: Boolean = true;
  //debería ser asi(boolean todo en minúscula):
  const myBoolean: boolean = true;
})();
