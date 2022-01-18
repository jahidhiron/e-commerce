import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";

// login
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// get product
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

// delete product
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

// update product
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

// delete product
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
