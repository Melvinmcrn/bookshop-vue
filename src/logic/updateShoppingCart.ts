interface cartItem {
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
  let shoppingCart: cartItem[] = [];
  if (localStorage.shoppingCart) {
    shoppingCart = localStorage.shoppingCart;
  }

  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].id === id) {
      shoppingCart[i].amount = shoppingCart[i].amount + amount;
      return;
    }
  }
  shoppingCart.push({
    id,
    name,
    price,
    amount,
  });
}

export function removeItem(
  id: string,
  amount: number
): void {
  let shoppingCart: cartItem[] = [];
  if (localStorage.shoppingCart) {
    shoppingCart = localStorage.shoppingCart;
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
}
