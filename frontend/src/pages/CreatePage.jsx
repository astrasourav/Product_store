import { useProductStore } from "../store/product"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });

    const { createProduct } = useProductStore();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handelSubmit = async () => {
        const { success, message } = await createProduct(newProduct);
        if(!success) {
            toast.error(message);
        } else {
            toast.success(message);
        }
        setNewProduct({ name: "", price: "", image: "" });
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="col-md-6">
                <h2 className="text-center mb-4">Create Product</h2>
                <div className="form-floating mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="floatingName" 
                        placeholder="Product Name" 
                        name="name" 
                        value={newProduct.name} 
                        onChange={handleChange} 
                    />
                    <label htmlFor="floatingName">Product Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input 
                        type="number" 
                        className="form-control" 
                        id="floatingPrice" 
                        placeholder="Product Price" 
                        name="price" 
                        value={newProduct.price} 
                        onChange={handleChange} 
                    />
                    <label htmlFor="floatingPrice">Product Price</label>
                </div>
                <div className="form-floating mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="floatingImage" 
                        placeholder="Product Image URL" 
                        name="image" 
                        value={newProduct.image} 
                        onChange={handleChange} 
                    />
                    <label htmlFor="floatingImage">Product Image URL</label>
                </div>
                <button type="button" className="btn btn-primary w-100" onClick={handelSubmit}>Submit</button>
                <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
            </div>
        </div>
    );
}

export default CreatePage;
