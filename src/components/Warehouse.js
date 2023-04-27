import React, { useState } from 'react';

const WarehouseForm = () => {
  const [status, setStatus] = useState('checkin');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [productType, setProductType] = useState('');
  const [containerNumber, setContainerNumber] = useState('');
  const [remark, setRemark] = useState('');

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };

  const handleContainerNumberChange = (event) => {
    setContainerNumber(event.target.value);
  };

  const handleRemarkChange = (event) => {
    setRemark(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  return (
    <div className="container">
        <h3>Warehouse</h3>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>
            Status:
            <input type="radio" value="checkin" checked={status === 'checkin'} onChange={handleStatusChange} />
            Check In
          </label>
          <label>
            <input className="form-control" type="radio" value="checkout" checked={status === 'checkout'} onChange={handleStatusChange} />
            Check Out
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="product-list">Product List:</label>
          <select
            className="form-control"
            id="product-list"
            name="product-list"
            value={selectedProduct} 
            onChange={handleProductChange}>
            <option value="">--Select--</option>
            {/* replace with your product list options */}
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            <option value="product3">Product 3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="product-type">Product Type:</label>
          <select
            className="form-control"
            id="product-type"
            name="product-type"
            value={productType}
            onChange={handleProductTypeChange}>
            <option value="">--Select--</option>
            <option value="containerized">Containerized</option>
            <option value="bulk-cargo">Bulk Cargo</option>
            <option value="machineries">Machineries</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="container-number">Container Number:</label>
          <input
            className="form-control"
            type="text"
            id="container-number"
            name="container-number"
            value={containerNumber}
            onChange={handleContainerNumberChange} />
        </div>
        <div className="form-group">
          <label htmlFor="remark">Remark:</label>
          <textarea
            className="form-control"
            id="remark"
            name="remark"
            value={remark}
            onChange={handleRemarkChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Save and Continue</button>
      </form>
    </div>
  );
};

export default WarehouseForm;
