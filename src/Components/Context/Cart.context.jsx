import React, { Component } from "react";

export const isCartItemExist = (cartItems, productToAdd) => {
  const attributeValueExist = cartItems.find((cartItem) => {
    if (cartItem.id === productToAdd.id) {
      if (
        cartItem.selectedText === undefined ||
        productToAdd.selectedText === undefined
      ) {
        return cartItem;
      } else if (cartItem.attributes.length === 0) {
        return cartItem;
      } else if (
        cartItem.selectedText.type === "text" &&
        cartItem.selectedText.text.id === productToAdd.selectedText.text.id &&
        cartItem.selectedSwatch.type === "swatch" &&
        cartItem.selectedSwatch.swatch.id ===
          productToAdd.selectedSwatch.swatch.id
      ) {
        return cartItem;
      } else if (
        cartItem.selectedText.type === "text" &&
        cartItem.selectedText.text.id === productToAdd.selectedText.text.id
      ) {
        return cartItem;
      }
    }
    return null;
  });
  return attributeValueExist;
};
export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = isCartItemExist(cartItems, productToAdd);
  // if found increase quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === productToAdd.id) {
        if (
          cartItem.selectedText === undefined ||
          productToAdd.selectedText === undefined
        ) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        } else if (cartItem.attributes.length === 0) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        } else if (
          cartItem.selectedText.type === "text" &&
          cartItem.selectedText.text.id === productToAdd.selectedText.text.id &&
          cartItem.selectedSwatch.type === "swatch" &&
          cartItem.selectedSwatch.swatch.id ===
            productToAdd.selectedSwatch.swatch.id
        ) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        } else if (
          cartItem.selectedText.type === "text" &&
          cartItem.selectedText.text.id === productToAdd.selectedText.text.id
        ) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
      }
      return cartItem;
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  // find if cartItem to remove

  const existingCartItem = isCartItemExist(cartItems, cartItemToRemove);
  // check if the quantity is equal to 1.if it is, remove the item
  // from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => {
      if (cartItem.id === cartItemToRemove.id) {
        if (
          cartItem.selectedText === undefined ||
          cartItem.selectedSwatch === undefined
        ) {
          return cartItem.id !== cartItemToRemove.id;
        } else if (cartItem.attributes.length === 0) {
          return cartItem.id !== cartItemToRemove.id;
        } else if (
          cartItem.selectedText.type === "text" &&
          cartItem.selectedText.text.id ===
            cartItemToRemove.selectedText.text.id &&
          cartItem.selectedSwatch.type === "swatch" &&
          cartItem.selectedSwatch.swatch.id ===
            cartItemToRemove.selectedSwatch.swatch.id
        ) {
          return cartItem.id !== cartItemToRemove.id;
        } else if (
          cartItem.selectedText.type === "text" &&
          cartItem.selectedText.text.id ===
            cartItemToRemove.selectedText.text.id
        ) {
          return cartItem.id !== cartItemToRemove.id;
        }
      }
      return cartItem;
    });
  }
  // return back cart items with matching cart item with reduced quantity.

  return cartItems.map((cartItem) => {
    if (cartItem.id === cartItemToRemove.id) {
      if (
        cartItem.selectedText === undefined ||
        cartItem.selectedSwatch === undefined
      ) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        };
      } else if (cartItem.attributes.length === 0) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        };
      } else if (
        cartItem.selectedText.type === "text" &&
        cartItem.selectedText.text.id ===
          cartItemToRemove.selectedText.text.id &&
        cartItem.selectedSwatch.type === "swatch" &&
        cartItem.selectedSwatch.swatch.id ===
          cartItemToRemove.selectedSwatch.swatch.id
      ) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        };
      } else if (
        cartItem.selectedText.type === "text" &&
        cartItem.selectedText.text.id === cartItemToRemove.selectedText.text.id
      ) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        };
      }
    }

    return cartItem;
  });
};
//find the total cartCount when the cartItem changes
export const handleCartCount = (cartItems) => {
  return cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
};

//find the total cartitems amount w hen the cartItem changes
export const handleCartTotal = (cartItems) => {
  return cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  );
};

export const CartContext = React.createContext();

class CartProvider extends Component {
  constructor() {
    super();
    this.state = {
      isCartOpen: false,
      currency: "$",
      cartItems: [],
      isCurrencyOpen: false,
      cartCount: 0,
      total: 0,
      price: 0,
      selectedText: {},
      selectedSwatch: {},
      active: [],
    };
  }

  handleIsCartOpen = () => {
    const { isCartOpen } = this.state;
    this.setState({
      isCartOpen: !isCartOpen,
    });
  };
  handleIsCurrencyOpen = () => {
    const { isCurrencyOpen } = this.state;
    this.setState({
      isCurrencyOpen: !isCurrencyOpen,
    });
  };
  handleCurrencySymb = (e) => {
    const target = e.target.children[0].textContent;
    const { isCurrencyOpen } = this.state;
    this.setState({
      currency: target,
      isCurrencyOpen: !isCurrencyOpen,
    });
  };

  handleAddItemToCart = (productToAdd) => {
    const { cartItems } = this.state;
    const newCartItems = addCartItem(cartItems, productToAdd);
    const newCartCount = handleCartCount(newCartItems);
    const newCartTotal = handleCartTotal(newCartItems);
    this.setState(() => {
      return {
        cartItems: newCartItems,
        cartCount: newCartCount,
        total: newCartTotal,
      };
    });
  };

  handleRemoveItemFromCart = (cartItemToRemove) => {
    const { cartItems, selectedAttributes } = this.state;
    const newCartItems = removeItemFromCart(
      cartItems,
      cartItemToRemove,
      selectedAttributes
    );

    const newCartTotal = handleCartTotal(newCartItems);
    this.setState((state) => {
      return {
        cartItems: newCartItems,
        cartCount: state.cartCount - 1,
        total: newCartTotal,
      };
    });
  };

  handleSelectedAttribute = (activeAttribute) => {
    const { attribute, name, type } = activeAttribute;
    let newSelectAttribute = { type: type };
    newSelectAttribute[type] = { ...attribute, name };

    if (type === "text") {
      this.setState({
        active: attribute,
        selectedText: newSelectAttribute,
      });
    } else {
      this.setState(() => {
        return {
          active: attribute,
          selectedSwatch: newSelectAttribute,
        };
      });
    }
  };

  render() {
    const { children } = this.props;
    const {
      isCartOpen,
      currency,
      isCurrencyOpen,
      cartItems,
      cartCount,
      total,
      selectedAttributes,
      active,
      selectedText,
      selectedSwatch,
    } = this.state;

    const {
      handleIsCartOpen,
      handleCurrencySymb,
      handleIsCurrencyOpen,
      handleAddItemToCart,
      handleRemoveItemFromCart,
      handleSelectedAttribute,
    } = this;

    const value = {
      isCartOpen,
      cartItems,
      currency,
      isCurrencyOpen,
      cartCount,
      total,
      active,
      selectedAttributes,
      selectedText,
      selectedSwatch,
      handleIsCartOpen,
      handleCurrencySymb,
      handleIsCurrencyOpen,
      handleAddItemToCart,
      handleRemoveItemFromCart,
      handleSelectedAttribute,
    };
    return (
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
  }
}

export default CartProvider;
