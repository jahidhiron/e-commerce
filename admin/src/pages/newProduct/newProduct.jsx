import "./newProduct.css";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [category, setCategory] = useState();
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCategory = (e) => {
    setCategory(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        console.log(`Error to file upload  ${error}`);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: category };
          addProduct(product, dispatch);
          navigate("/products");
        });
      }
    );
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            name="desc"
            placeholder="Description"
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
          />
        </div>

        <div className="addProductItem">
          <label>Categories</label>
          <input
            type="text"
            placeholder="jeans,skirts"
            onChange={handleCategory}
          />
        </div>

        <div className="addProductItem" onChange={handleChange}>
          <label>Stock</label>
          <select name="inStock">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button className="addProductButton" onClick={handleClick}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
