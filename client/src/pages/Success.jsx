import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { userRequest } from "../requestMethods";

const Container = styled.div`
  height: "100vh";
  display: "flex";
  flex-direction: "column";
  align-items: "center";
  justify-content: "center";
`;

const Button = styled.button`
  padding: 10;
  margin-top: 20;
  border: none;
  cursor: pointer;
  color: teal;
  border-radius: 5px;
`;

const Success = () => {
  const [orderId, setOrderId] = useState(null);
  const currentUser = useSelector((state) => state.user);
  const { state } = useLocation();
  const product = state.product;
  const cart = state.cart;

  useEffect(() => {
    product &&
      (async function () {
        try {
          const res = await userRequest.post("/orders", {
            userId: currentUser._id,
            products: cart.products.map((product) => ({
              productId: product._id,
              quantity: product.quantity,
            })),
            amount: cart.total,
            address: product.billing_details.address,
          });
          setOrderId(res.data._id);
        } catch (err) {
          console.log(`Error to make order: ${err}`);
        }
      })();
  }, [product, cart, currentUser._id]);

  return (
    <Container>
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}

      <Button>Go to Homepage</Button>
    </Container>
  );
};

export default Success;
