import { useLocation } from "react-router-dom";

const Success = () => {
  const { state } = useLocation();
  return <div>Your payment is successfull with user request id</div>;
};

// {state.product} and
// product {state.cart.id}

export default Success;
