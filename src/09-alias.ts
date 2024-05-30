(() => {
  //Definimos un tipado definiendo el nombre en CammelCase
  type UserID = string | number;
  let userId: UserID;

  //Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  //Si asigno un string diferente a lo ya definido me va a dar un error:
  // shirtSize = 'XLA';


  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  greeting(11, 'L');
  greeting('11', 'S');
})
