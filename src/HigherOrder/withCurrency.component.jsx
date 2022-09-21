import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

const CURRENCIES = gql`
  query GetCurrencies {
    currencies {
      label
      symbol
    }
  }
`;
const withCurrency = (WrappedComponent) => {
  const WithCurrency = () => {
    const [currencies, setCurrencies] = useState([]);
    const { loading, error, data } = useQuery(CURRENCIES);

    useEffect(() => {
      if (data) {
        const { currencies } = data;
        setCurrencies(currencies);
      }
    }, [data]);

    return (
      <WrappedComponent
        loading={loading}
        error={error}
        currencies={currencies}
      />
    );
  };

  return WithCurrency;
};

export default withCurrency;
