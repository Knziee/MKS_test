import React, { createContext, useContext, useReducer } from "react";

const ShoppingCartContext = createContext({
    state: { cartItems: [] },
    dispatch: (action) => {},
});

export const ShoppingCartProvider = ({ children }) => {
    const initialState = {
        cartItems: [],
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD_TO_CART":
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                };
            case "INCREASE_QUANTITY":
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            case "DECREASE_QUANTITY":
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === action.payload.id
                            ? {
                                  ...item,
                                  quantity: Math.max(1, item.quantity - 1),
                              }
                            : item
                    ),
                };
            case "REMOVE_FROM_CART":
                return {
                    ...state,
                    cartItems: state.cartItems.filter(
                        (item) => item.id !== action.payload.id
                    ),
                };

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ShoppingCartContext.Provider value={{ state, dispatch }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export const useShoppingCart = () => {
    const context = useContext(ShoppingCartContext);
    if (!context) {
        throw new Error(
            "useShoppingCart deve ser usado dentro de um ShoppingCartProvider"
        );
    }
    return context;
};
