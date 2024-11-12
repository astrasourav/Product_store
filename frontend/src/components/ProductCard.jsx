import { MdDelete } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { useProductStore } from "../store/product";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle the delete action
  const handleDeleteProduct = async () => {
    const { success, message } = await deleteProduct(product._id);
    if(!success) {
      alert(message);
    } else {
      alert(message);
    }
  };

  // Handle the update action
  const handleUpdateProduct = async () => {
    setIsLoading(true);
    const { success, message } = await updateProduct(product._id, updatedProduct);
    setIsLoading(false);
    if(!success) {
      alert(message);
    } else {
      alert('Updated');
    }
  };

  return (
    <div className="col">
      <div className="card">
        <img
          src={product.image || "https://via.placeholder.com/150"}
          className="card-img-top"
          alt={product.name}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price: Rs {product.price}</p>
          <button className="btn btn-info" onClick={() => setShowModal(true)}>
            <BsFillPencilFill />
          </button>{' '}
          <button className="btn btn-danger" onClick={handleDeleteProduct}>
            <MdDelete />
          </button>
        </div>
      </div>

      {/* Modal for editing product */}
      {showModal && (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update Product</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={updatedProduct.name}
                    onChange={(e) =>
                      setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    value={updatedProduct.price}
                    onChange={(e) =>
                      setUpdatedProduct({ ...updatedProduct, price: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Image URL</label>
                  <input
                    type="text"
                    className="form-control"
                    value={updatedProduct.image}
                    onChange={(e) =>
                      setUpdatedProduct({ ...updatedProduct, image: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Close
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleUpdateProduct}
                  disabled={isLoading}
                >
                  {isLoading ? "Updating..." : "Update Product"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

