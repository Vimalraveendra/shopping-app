// import React, { useEffect, useState } from "react";
// import { useQuery, gql } from "@apollo/client";

// const CATEGORIES = gql`
//   query GetCategories {
//     categories {
//       name
//       products {
//         id
//         name
//         inStock
//         gallery
//         description
//         category
//         attributes {
//           id
//           name
//           type
//           items {
//             displayValue
//             value
//             id
//           }
//         }
//         prices {
//           currency {
//             label
//             symbol
//           }
//           amount
//         }
//         brand
//       }
//     }
//   }
// `;
// const withData = (WrappedComponent) => {
//   const WithData = () => {
//     const [categories, setCategories] = useState({});
//     const { loading, error, data } = useQuery(CATEGORIES);

//     useEffect(() => {
//       if (data) {
//         const { categories } = data;
//         const categoryMap = categories.reduce((acc, category) => {
//           const { name, products } = category;
//           acc[name.toLowerCase()] = products;
//           return acc;
//         }, {});
//         setCategories(categoryMap);
//       }
//     }, [data]);
//     return (
//       <WrappedComponent
//         loading={loading}
//         error={error}
//         categories={categories}
//       />
//     );
//   };

//   return WithData;
// };

// export default withData;
