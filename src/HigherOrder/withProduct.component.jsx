import React, { useEffect, useState, useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import { CartContext } from "../Context/Cart.context";

const GETPRODUCT = gql`
  query GETPRODUCT($id: String!) {
    product(id: $id) {
      id
      name
      brand
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          id
          value
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
`;
const withProduct = (WrappedComponent) => {
  const WithProduct = (props) => {
    const [product, setProduct] = useState({});
    const { id } = props;
    const { loading, error, data } = useQuery(GETPRODUCT, {
      variables: { id: id },
    });

    const { currency } = useContext(CartContext);

    useEffect(() => {
      if (data) {
        const { product } = data;
        const priceMap = product.prices.reduce(
          (acc, item) =>
            item.currency.symbol === currency
              ? { ...product, price: item.amount }
              : acc,
          {}
        );

        setProduct(priceMap);
      }
    }, [data, currency]);

    return (
      <WrappedComponent loading={loading} error={error} product={product} />
    );
  };

  return WithProduct;
};

export default withProduct;
