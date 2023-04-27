import React, { useState } from 'react';

const Warehouse = () => {
  const [product, setProduct] = useState('');
  const [container, setContainer] = useState('');
  const [transportMode, setTransportMode] = useState('');
  const [plateNumber, setPlateNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Product:', product);
    console.log('Container number:', container);
    console.log('Transport mode:', transportMode);
    console.log('Plate number:', plateNumber);
  };

  const transportOptions = [
    { value: 'air', label: 'Air' },
    { value: 'sea', label: 'Sea' },
    { value: 'truck', label: 'Truck' }
  ];

  const productList = [
    { value: 'product1', label: 'Product 1' },
    { value: 'product2', label: 'Product 2' },
    { value: 'product3', label: 'Product 3' }
  ];

  const handleTransportModeChange = (event) => {
    setTransportMode(event.target.value);
  };

  return (
    <div className="container">
      <h3>Warehouse</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productList">Product list:</label>
          <select
            className="form-control"
            id="productList"
            value={product}
            onChange={(event) => setProduct(event.target.value)}
          >
            <option value="">Select product</option>
            {productList.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="containerNumber">Container number:</label>
          <input
            type="text"
            className="form-control"
            id="containerNumber"
            value={container}
            onChange={(event) => setContainer(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="transportMode">Transport mode:</label>
          <select
            className="form-control"
            id="transportMode"
            value={transportMode}
            onChange={handleTransportModeChange}
          >
            <option value="">Select transport mode</option>
            {transportOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        {transportMode === 'truck' && (
          <div className="form-group">
            <label htmlFor="plateNumber">Plate number:</label>
            <input
              type="text"
              className="form-control"
              id="plateNumber"
              value={plateNumber}
              onChange={(event) => setPlateNumber(event.target.value)}
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Warehouse;
