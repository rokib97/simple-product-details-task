import axios from "axios";
import React, { createContext, useEffect, useReducer } from "react";
export const ProductContext = createContext();
const initialState = {
  product: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        product: action.payload,
      };
    default:
      return state;
  }
};
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(
        "https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product"
      )
      .then((res) => {
        dispatch({ type: "SUCCESS", payload: res.data });
      });
  }, []);

  return (
    <ProductContext.Provider value={state.product}>
      {children}
    </ProductContext.Provider>
  );
};

export default Context;
