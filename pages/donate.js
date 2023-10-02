import React from 'react';

class Donate extends React.Component {
  render() {
    return (
      <div className="donate-container">
        <h2>Support Our Cause</h2>
        <p>
          Your generous donation helps us continue our mission and make a positive impact in the world.
        </p>
        <p>
          Whether it's a one-time donation or a recurring contribution, every dollar counts and makes a difference.
        </p>
        <p>
          Join us in creating a better future for those in need. Your support is greatly appreciated!
        </p>
        <button className="donate-now-button">Donate Now</button>
      </div>
    );
  }
}

export default Donate;
