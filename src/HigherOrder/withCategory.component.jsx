import React, { useEffect, useState, useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import { CartContext } from "../Context/Cart.context";

const GETCATEGORY = gql`
  query GetCategory($title: CategoryInput) {
    category(input: $title) {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            id
            value
            displayValue
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;
const withCategory = (WrappedComponent) => {
  const WithCategory = (props) => {
    const { title } = props;
    const [products, setProducts] = useState([]);
    const { loading, error, data } = useQuery(GETCATEGORY, {
      variables: { title: { title: title } },
    });

    const { currency } = useContext(CartContext);

    useEffect(() => {
      if (data) {
        const { products } = data.category;
        const productMap = products.map((product) => {
          const { prices } = product;
          return prices.reduce(
            (acc, price) =>
              price.currency.symbol === currency
                ? { ...product, price: price.amount }
                : acc,
            {}
          );
        });

        setProducts(productMap);
      }
    }, [title, data, currency]);

    return (
      <WrappedComponent
        loading={loading}
        error={error}
        products={products}
        title={title}
      />
    );
  };

  return WithCategory;
};

export default withCategory;
