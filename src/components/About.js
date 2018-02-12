import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div name="about">
        <div className="container">
          <div className="row col-centered">
            <h1 className="mx-auto">About</h1>
          </div>
        </div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div>
                  <div className="icon text-center">
                    <i className="icon-tools2" />
                  </div>
                  <h3 styles={{ color: '#98C740' }}>User Experience</h3>
                  <p styles={{ color: 'white' }}>
                    Ease of use is one of the key issues currently in
                    Blockchain. We are building our platform on the core values
                    of UX, with industry experience. What's a pretty interface
                    if it isn't easy to use?
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div>
                  <div className="icon text-center">
                    <i className="icon-desktop" />
                  </div>
                  <h3 styles={{ color: '#98C740' }}>Platform Optimization</h3>
                  <p styles={{ color: 'white' }}>
                    We're building something that's fast - real fast. We have so
                    much compute, yet many applications still run terribly.
                    We're building an engine from the ground up - we can't wait
                    to show you.
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div>
                  <div className="icon text-center">
                    <i className="icon-lightbulb" />
                  </div>
                  <h3 styles={{ color: '#98C740' }}>A fresh approach</h3>
                  <p styles={{ color: 'white' }}>
                    We're building for our passion. As Blockchain users
                    ourselves, we're also fans. We believe in letting our
                    product speak for itself. No continual PR speak, delivering
                    is our goal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
      </div>
    );
  }
}
