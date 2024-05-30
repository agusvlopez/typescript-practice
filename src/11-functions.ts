(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJSON(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }


  //las arrow function se usan mas:
  const createProductToJSONV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    //esta variable es opcional, es decir que puede tambien ser undefined(por eso el ?):
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductToJSONV2('Remera', new Date(), 12);
  console.log(product1);
  console.log(product1.title);
  console.log(product1.stock);
  console.log(product1.size);
})();
