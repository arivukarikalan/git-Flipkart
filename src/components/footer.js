import React from 'react';

function Footer() {
  // Randomly generated address details
  const address = {
    street: '123 Main Street',
    city: 'Cityville',
    state: 'Tamil Nadu',
    zipCode: '600028',
    country: 'India',
  };

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ">
            <h5>Contact</h5>
            <p>{address.street}</p>
            <p>
              {address.city}, {address.state} {address.zipCode}
            </p>
            <p>{address.country}</p>
          </div>
          <div className="col-lg-12">
            <h5>About</h5>
            <p>"Unleash the power of shopping with our seamless e-commerce experience."</p>
          </div>
        </div>
        <p className='text-center custom-text'>copyright &copy; 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
