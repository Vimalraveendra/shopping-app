import React from "react";
import { useParams } from "react-router-dom";

const withRouter = (WrappedComponent) => {
  const WithRouter = () => {
    return <WrappedComponent params={useParams()} />;
  };

  return WithRouter;
};

export default withRouter;
