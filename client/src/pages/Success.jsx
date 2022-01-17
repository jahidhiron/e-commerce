import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { userRequest } from "../requestMethods";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: "flex";
  align-items: "center";
  justify-content: "center";
`;

const Content = styled.div``;

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
  const currentUser = useSelector((state) => state.user.currentUser);
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
      <Content>
        {orderId
          ? `Order has been created successfully. Your order ID number is  "${orderId}"`
          : `Successfull. Your order is being prepared...`}
      </Content>

      <Link to="/">
        <Button>Go to Homepage</Button>
      </Link>
    </Container>
  );
};

export default Success;
