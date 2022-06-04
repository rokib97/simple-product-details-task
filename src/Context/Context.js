import React, { createContext, useEffect, useReducer } from "react";
export const ProductContext = createContext();
const initialState = {
  product: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        state,
        product: action.payload,
      };
    case "COLORNAME":
      return {
        ...state,
        color: action.payload,
        image: action.imgPayload,
      };
    case "SIZE":
      return {
        ...state,
        size: action.payload,
        price: action.pricePayload,
      };
    default:
      return state;
  }
};
const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(
      `https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product`,
      {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "SUCCESS", payload: data });
      });

    /*   axios
      .get(
        "https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product"
      )
      .then((res) => {
        dispatch({ type: "SUCCESS", payload: res.data });
      }); */
  }, []);

  return (
    <ProductContext.Provider
      value={{
        product: state.product,
        productDitchpatch: dispatch,
        color: state.color,
        size: state.size,
        image: state.image,
        price: state.price,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default Context;
