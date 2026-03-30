import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user_logged");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userData) => {
    const userWithCart = { ...userData, cart: userData.cart || [] };
    localStorage.setItem("user_logged", JSON.stringify(userWithCart));
    setUser(userWithCart);
  };

  const logout = () => {
    localStorage.removeItem("user_logged");
    setUser(null);
  };

const addToCart = (product) => {
  if (!user) return;

  setUser(prevUser => {
    const currentCart = Array.isArray(prevUser.cart) ? prevUser.cart : [];
    const updatedCart = [...currentCart];
    const itemIndex = updatedCart.findIndex(item => item.id === product.id);

    if (itemIndex > -1) {
      updatedCart[itemIndex] = { 
        ...updatedCart[itemIndex], 
        amount: updatedCart[itemIndex].amount + 1 
      };
    } else {
      updatedCart.push({ ...product, amount: 1 });
    }

    const updatedUser = { ...prevUser, cart: updatedCart };
    localStorage.setItem("user_logged", JSON.stringify(updatedUser));
    return updatedUser;
  });
};

  const decreaseQuantity = (productId) => {
    if (!user) return;

    setUser(prevUser => {
      const currentCart = Array.isArray(prevUser.cart) ? prevUser.cart : [];
      const itemIndex = currentCart.findIndex(item => item.id === productId);

      if (itemIndex === -1) return prevUser;

      let updatedCart;

      if (currentCart[itemIndex].amount <= 1) {
        updatedCart = currentCart.filter(item => item.id !== productId);
      } else {
        updatedCart = [...currentCart];
        updatedCart[itemIndex] = { 
          ...updatedCart[itemIndex], 
          amount: updatedCart[itemIndex].amount - 1 
        };
      }

      const updatedUser = { ...prevUser, cart: updatedCart };
      localStorage.setItem("user_logged", JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const removeFromCart = (productId) => {
    if (!user) return;

    const updatedCart = user.cart.filter(item => item.id !== productId);
    const updatedUser = { ...user, cart: updatedCart };

    setUser(updatedUser);
    localStorage.setItem("user_logged", JSON.stringify(updatedUser));
  };

  const addToFavorites = (product) => {
    if (!user) return;

    setUser(prevUser => {
      const currentFavs = Array.isArray(prevUser.favorites) ? prevUser.favorites : [];
      
      const exists = currentFavs.find(item => item.id === product.id);
      if (exists) return prevUser; 

      const updatedFavs = [...currentFavs, product];
      const updatedUser = { ...prevUser, favorites: updatedFavs };
      
      localStorage.setItem("user_logged", JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const removeFromFavorites = (productId) => {
    if (!user) return;

    setUser(prevUser => {
      const currentFavs = Array.isArray(prevUser.favorites) ? prevUser.favorites : [];
      const updatedFavs = currentFavs.filter(item => item.id !== productId);
      
      const updatedUser = { ...prevUser, favorites: updatedFavs };
      localStorage.setItem("user_logged", JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, addToCart, removeFromCart, decreaseQuantity,
    addToFavorites, removeFromFavorites }}>
      {children}
    </AuthContext.Provider>
  );
};
