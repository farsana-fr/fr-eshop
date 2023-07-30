import React, { useEffect, useState } from "react";
import "./CartWish.css";
import { FloatingLabel, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Payment({ cart }) {
  const [total, setTotal] = useState(0);
  const [formValues, setFormValues] = useState({
    email: "",
    cardno: "",
    expiry: "",
    cvv: "",
    holdername: "",
    country: "",
  });
  const [formError, setFormError] = useState({});
  const [isSubmit,setIsSubmit]=useState(false);
  const nav = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
    setFormError(validate(formValues));
    console.log(formError);
    setIsSubmit(true);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  useEffect(()=>{

    if(Object.keys(formError).length===0&&isSubmit)
    {
        nav('/success')
    }
  },[formError])
  function validate(values)
  {
    const errors={};
    if(!values.email)
    {
        errors.email="Email is Required"
    }
    if(!values.cardno)
    {
        errors.cardno="Card Number is Required"
    }
    if(!values.expiry)
    {
        errors.expiry="Expiry is Required"
    }
    if(!values.cvv)
    {
        errors.cvv="CVV is Required"
    }
    if(!values.holdername)
    {
        errors.holdername="Card Holder Name is Required"
    }
    if(!values.country)
    {
        errors.country="Country is Required"
    }
    return errors;
  }
  function calcTotal() {
    let i = 0,
      t = 0;
    for (; i < cart.length; i++) {
      t += cart[i].price * cart[i].qty;
    }
    setTotal(t);
  }
  useEffect(() => {
    calcTotal();
  }, []);
  return (
    <div className="container priceDet mt-5 mb-2">
      <div className="">
        <h3>
          Price <br />${total}
        </h3>
        {cart
          ? cart.map((c) => (
              <div className="p-3 details">
                <img src={c.image} alt="" height="50px" />
                <div className="name">
                  {c.name}
                  <p>Qty:{c.qty}</p>
                </div>
                <div className="ms-5">{c.price * c.qty}</div>
              </div>
            ))
          : ""}
      </div>
      <div className="paymentDet">
        <h3>Payment Details</h3>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
            <p className="text-danger">{formError.email}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Card Information</Form.Label>
            <Form.Control
              type="text"
              name="cardno"
              placeholder="0000 0000 0000 0000"
              onChange={handleChange}
            />
            <p className="text-danger">{formError.cardno}</p>
            <Form.Control
              type="text"
              name="expiry"
              placeholder="Expiry MM/YY"
              onChange={handleChange}
            />
            <p className="text-danger">{formError.expiry}</p>
            <Form.Control
              type="text"
              name="cvv"
              placeholder="CVV"
              onChange={handleChange}
            />
            <p className="text-danger">{formError.cvv}</p>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Card Holder Name</Form.Label>
            <Form.Control
              type="text"
              name="holdername"
              placeholder="Enter name"
              onChange={handleChange}
            />
          </Form.Group>
          <p className="text-danger">{formError.holdername}</p>
          <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              name="country"
              placeholder="Enter country"
              onChange={handleChange}
            />
          </Form.Group>
          <p className="text-danger">{formError.country}</p>
          <button className="btn btn-primary container" type="submit">
          Pay
        </button>
        </Form>
        
      </div>
    </div>
  );
}

export default Payment;
