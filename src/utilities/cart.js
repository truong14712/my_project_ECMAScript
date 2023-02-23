let cart = [];
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
}
const addToCart = (newBook, next) => {
  const exitsBook = cart.find((item) => item.id === newBook.id);

  if (!exitsBook) {
    cart.push(newBook);
  } else {
    exitsBook.quantity += newBook.quantity;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  next();
};
const increaseQty = (id) => {
  const plus = cart.find((item) => {
    return item.id === Number(id);
  });
  plus.quantity++;
  localStorage.setItem("cart", JSON.stringify(cart));
};
const decreaseQty = (id, next) => {
  const currentProduct = cart.find((item) => {
    return item.id === Number(id);
  });
  currentProduct.quantity--;
  if (currentProduct.quantity < 1) {
    const confirm = window.confirm("Ban có chắc chắn muốn xóa không?");
    if (confirm) {
      cart = cart.filter((item) => {
        return item.id !== Number(id);
      });
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  // next();
};
const removeItemInCart = (id, next) => {
  const confirm = window.confirm("Ban có chắc chắn muốn xóa không?");
  if (confirm) {
    cart = cart.filter((item) => {
      return item.id !== Number(id);
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  // next();
};
const TotalMoney = (id) => {
  const plus = cart.find((item) => {
    return item.id === Number(id);
  });
};
const save_cart = () => {
  localStorage.setItem("Numbercart", cart.length);
};
export {
  addToCart,
  increaseQty,
  decreaseQty,
  removeItemInCart,
  save_cart,
  TotalMoney,
};
