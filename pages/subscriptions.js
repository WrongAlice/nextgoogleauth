import React from 'react';

class SubscriptionsInfo extends React.Component {
  render() {
    return (
      <div className="subscriptions-info-container">
        <h2>Our Subscription Plans</h2>
        <p>
          Explore our subscription options to get access to premium content, exclusive features, and more.
        </p>
        <ul>
          <li>Basic Subscription: Access to our core content library - $9.99/month</li>
          <li>Premium Subscription: Full access to all content and premium features - $19.99/month</li>
          <li>Family Plan: Premium access for up to 5 family members - $29.99/month</li>
        </ul>
        <p>
          Choose the plan that suits your needs and start enjoying the benefits today!
        </p>
        <button className="subscribe-now-button">Subscribe Now</button>
      </div>
    );
  }
}

export default SubscriptionsInfo;
