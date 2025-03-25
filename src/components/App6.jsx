import { useState } from "react";

export default function ProductApp() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !quantity) return;

    const newProduct = { name, price: parseFloat(price), quantity: parseInt(quantity) };
    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
    setQuantity("");
  };

  const totalAmount = products.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div style={{ display: 'flex', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* Form Section */}
      <div style={{ flex: 1 }}>
        <h3>Add Product</h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product Name"
            required
            style={{ padding: '10px' }}
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            required
            style={{ padding: '10px' }}
          />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
            required
            style={{ padding: '10px' }}
          />
          <button type="submit" style={{ padding: '12px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>

      {/* Product List Section */}
      <div style={{ flex: 1, marginLeft: '20px' }}>
        <h3>Product Details</h3>
        {products.map((product, index) => (
          <p key={index}>{product.name} - ${product.price.toFixed(2)} x {product.quantity} = ${(product.price * product.quantity).toFixed(2)}</p>
        ))}
        <h4>Total Amount: ${totalAmount.toFixed(2)}</h4>
      </div>
    </div>
  );
}
