import React from 'react';

class Volunteer extends React.Component {
  render() {
    return (
      <div className="volunteer-container">
        <h2>Volunteer Opportunities</h2>
        <p>
          We have exciting volunteer opportunities available for individuals who want to make a positive impact on their community.
        </p>
        <p>
          Whether you're passionate about the environment, education, or social justice, there's a place for you in our volunteer program.
        </p>
        <p>
          Join us in creating a better world. Together, we can make a difference!
        </p>
        <button className="volunteer-now-button">Volunteer Now</button>
      </div>
    );
  }
}

export default Volunteer;
