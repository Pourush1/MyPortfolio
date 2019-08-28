import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I am a graduate student currently pursuing my Master’s
                        in Software Engineering at Villanova University. I am in
                        my final semester right now and looking for a full-time
                        or internship opportunities.
                      </p>
                      <p>
                        I am a dedicated and enthusiastic professional who loves
                        programming. I have 3+ years of experience as a Software
                        Engineer/ Web Developer. I am very keen to work in a
                        professional environment with industry leaders and learn
                        from them as well. I want to be a part of the product
                        that really matters and open to pick up any technology
                        stack if necessary. I have skills in the following
                        related technologies.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my skills</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <p>
                      I have experience building websites using
                      JavaScript(FrontEnd- React.js) and BackEnd(Node.js) I have
                      also experience in deploying the website using Heroku and
                      AWS.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>
                      I have a good grasp of the fundamentals of DSA and used to
                      teach DSA to undergraduate students at Villanova
                      University.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Software Engineering/Database</h3>
                    <p>
                      I also have knowledge of how the software should be
                      developed beginning from the requirement phase to the
                      deployment phase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
