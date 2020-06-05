interface CartItem {
  id: string;
  name: string;
  price: number;
  amount: number;
}

export function addItem(
  id: string,
  name: string,
  price: number,
  amount: number
): void {
    // console.log("add item");
  let shoppingCart: CartItem[] = [];
  if (localStorage.shoppingCart) {
    shoppingCart = JSON.parse(localStorage.shoppingCart);
  }

  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].id === id) {
        // console.log("FOUND");
      shoppingCart[i].amount = shoppingCart[i].amount + amount;
      localStorage.shoppingCart = JSON.stringify(shoppingCart);
      return;
    }
  }
//   console.log("NEW ITEM");
  shoppingCart.push({
    id,
    name,
    price,
    amount,
  });

  console.log(shoppingCart);
  localStorage.shoppingCart = JSON.stringify(shoppingCart);
}

export function removeItem(
  id: string,
  amount: number
): void {
  let shoppingCart: CartItem[] = [];
  if (localStorage.shoppingCart) {
    shoppingCart = JSON.parse(localStorage.shoppingCart);
  }

  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].id === id) {
      if (shoppingCart[i].amount > amount) {
        shoppingCart[i].amount = shoppingCart[i].amount - amount;
        return;
      } else if (shoppingCart[i].amount === amount) {
        shoppingCart.splice(i, 1);
        return;
      }
    }
  }

  localStorage.shoppingCart = JSON.stringify(shoppingCart);
}
