import React, { useState } from 'react';

const Customer = () => {
  const [consignee, setConsignee] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [customers, setCustomers] = useState(['ABC Inc.', 'XYZ Corp.', '123 LLC']);
  const [shippingLine, setShippingLine] = useState('');
  const [billOfLoading, setBillOfLoading] = useState('');
  const [etaDate, setEtaDate] = useState('');

  const handleConsigneeChange = (event) => {
    setConsignee(event.target.value);
  };

  const handleCustomerChange = (event) => {
    setSelectedCustomer(event.target.value);
  };

  const handleAddCustomer = () => {
    const customer = prompt('Enter new customer name');
    if (customer) {
      setCustomers([...customers, customer]);
      setSelectedCustomer(customer);
    }
  };

  const handleShippingLineChange = (event) => {
    setShippingLine(event.target.value);
  };

  const handleBillOfLoadingChange = (event) => {
    setBillOfLoading(event.target.value);
  };

  const handleEtaDateChange = (event) => {
    setEtaDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      consignee,
      selectedCustomer,
      shippingLine,
      billOfLoading,
      etaDate,
    });
  };

  return (
    <div className="container">
      <h3>Customer</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="consignee">Consignee:</label>
          <input type="text" id="consignee" name="consignee" value={consignee} onChange={handleConsigneeChange} />
        </div>
        <div className="form-group">
          <label htmlFor="customer">Customer:</label>
          <select 
            className="form-control"
            id="customer"
            name="customer" 
            value={selectedCustomer}
            onChange={handleCustomerChange}>

            <option value="">--Select--</option>
            {customers.map((customer) => (
              <option key={customer} value={customer}>
                {customer}
              </option>
            ))}
          </select>
          {selectedCustomer === '' && (
            <button type="button" onClick={handleAddCustomer}>
              Add Customer
            </button>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="shipping-line">Shipping Line:</label>
          <input
            className="form-control"
            type="text"
            id="shipping-line"
            name="shipping-line"
            value={shippingLine}
            onChange={handleShippingLineChange} />
        </div>
        <div className="form-group">
          <label htmlFor="bill-of-loading">Bill of Loading:</label>
          <input
            className="form-control"
            type="text"
            id="bill-of-loading"
            name="bill-of-loading"
            value={billOfLoading}
            onChange={handleBillOfLoadingChange} />
        </div>
        <div className="form-group">
          <label htmlFor="eta-date">ETA Date:</label>
          <input
            className="form-control"
            type="date"
            id="eta-date"
            name="eta-date"
            value={etaDate}
            onChange={handleEtaDateChange} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Customer;
