(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];

  const login = (data: { email: string, password: number }) => {
    console.log(data.email, data.password);
  }

  login({
    email: 'agus@io.com',
    password: 1212
  });

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Pantalon',
    createdAt: new Date(),
    stock: 12
  });

  addProduct({
    title: 'Campera',
    createdAt: new Date(),
    stock: 12,
    size: 'L'
  });

  console.log(products);

})();
