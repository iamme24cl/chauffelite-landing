import React from "react";
import "./App.css";
import logo from "./chauffelite-logo.png";

function App() {
  return (
    <div className="App">
      <header className="hero">
        <img src={logo} alt="ChauffElite logo" />
        <h1>Power Your Fleet. Elevate Your Brand.</h1>
        <p>
          ChauffElite helps luxury car service providers offer real-time bookings,
          build rider loyalty, and grow their business — all in one seamless platform.
        </p>
        <div className="cta-buttons">
          <button className="primary">Request a Demo</button>
          <button className="secondary">Join the Waitlist</button>
        </div>
      </header>

      <section className="features">
        <h2>Why Operators Choose ChauffElite</h2>
        <div className="grid">
          <div className="card">
            <h3>Modern Tools</h3>
            <p>Run your luxury ride business with intuitive tools for booking, scheduling, pricing, and rider management.</p>
          </div>
          <div className="card">
            <h3>Branded Presence</h3>
            <p>Your company, your brand. ChauffElite gives you a customizable profile within a professional marketplace experience.</p>
          </div>
          <div className="card">
            <h3>Rider Loyalty</h3>
            <p>Rebook favorite drivers, remember preferences, and keep VIPs coming back with ease.</p>
          </div>
          <div className="card">
            <h3>Full Control</h3>
            <p>You control pricing, availability, and policies — ChauffElite is here to power, not replace you.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="section-content">
          <ol>
            <li><strong>Set Up:</strong> Create your fleet profile in minutes with no technical skills required.</li>
            <li><strong>Go Live:</strong> Appear in the ChauffElite app and start taking bookings instantly.</li>
            <li><strong>Grow:</strong> Manage everything from one dashboard and keep your clients happy.</li>
          </ol>
        </div>
      </section>

      <section className="pricing">
        <h2>Simple, Transparent Pricing</h2>
        <div className="section-content">
          <p className="price-tag"><strong>All-Inclusive Plan – $149/month</strong></p>
          <ul className="checklist">
            <li>Branded profile</li>
            <li>Marketplace visibility</li>
            <li>Dashboard & mobile access</li>
            <li>Loyalty & rebooking tools</li>
            <li>Messaging & analytics</li>
          </ul>
          <p><em>No commissions. No hidden fees. Just growth.</em></p>
        </div>
      </section>

      <section className="launch">
        <h2>Launching First in the Bay Area</h2>
        <p>We’re starting local so you can dominate your market before we expand nationwide.</p>
        <blockquote>“Finally, a platform that promotes <strong>your brand</strong>, not hides it.”</blockquote>
      </section>

      <footer className="cta-footer">
        <h2>Ready to Grow With ChauffElite?</h2>
        <div className="cta-buttons">
          <button className="primary">Schedule a Demo</button>
          <button className="secondary">Become a Founding Operator</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
