import React from "react";

const App = () => {
  return (
    <div className="wrapper">
      <form>
        <h1>Contact Us</h1>

        <div className="name-wrapper">
          {/* fisrt name wrapper */}
          <div className="name">
            <label htmlFor="name">First Name</label>
            <input className="input" type="text" />
          </div>
          {/* last name wrapper */}
          <div className="name">
            <label htmlFor="name">First Name</label>
            <input className="input" type="text" />
          </div>
        </div>

        {/* email wrapper */}
        <div className="email">
          <label htmlFor="email">Email</label>
          <input className="input" type="email" />
        </div>

        {/* query input */}

        <div className="query-wrapper">
          <label>Query Type</label>
          {/* fisrt name wrapper */}
          <div className="get">
            <div className="query">
              <input type="radio" />
              <span>General Enquiry</span>
            </div>
            {/* last name wrapper */}
            <div className="query">
              <input type="radio" />
              <span>Support</span>
            </div>
          </div>
        </div>

        {/* message wrapper */}
        <div className="email">
          <label htmlFor="email">Message</label>
          <textarea className="input" />
        </div>

        <div className="consent">
          <input type="checkbox" />
          <p>I consent to being called by the team</p>
        </div>

        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default App;