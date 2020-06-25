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
                        I am a Software Engineer who just finished his Master’s
                        in Software Engineering at Villanova University.
                      </p>
                      <p>
                        I am a dedicated and enthusiastic professional who loves
                        programming. I have 2+ years of experience as a Software
                        Engineer/ Web Developer.I have always loved making
                        software. Making software is hard and doing it in the
                        right way, is even harder. So, I try to follow the best
                        Software practices to do my tasks in the real world. I
                        beleive that we are always learning, so I try to learn
                        everyday from my colleagues as well as from anyone I can
                        and vice-versa. I believe that sharing knowledge with
                        each other is best way to teach each other and is the
                        best form of the human kind. So, being positive is the
                        best way to move forward.{" "}
                      </p>
                      <p>
                        Besides, getting my hands on making software, I like to
                        use my free time by playing Soccer, dancing and doing
                        gym. To improve on dancing, I even joined a dancing
                        club. I believe one should be happy in whatever he is
                        doing and dancing makes me really happy.
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
                      I have experience of building a full-stack website using
                      JavaScript(FrontEnd- React.js) and BackEnd(Node.js) I have
                      also experience in deploying the website using Heroku and
                      AWS. I am also knowledgeable in other front-end technology
                      like (Aurelia Js).
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
                      I have a good grasp of the fundamentals of Data Structure
                      and Algorithm.It is really important to optimize our code
                      and to do so, we should have a very good knowledge of DSA.
                      I found it to be the one of the most important skill for a
                      programmer.
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
                      deployment phase.I have worked in an Agile Environment
                      which has taught me a lot about how the software should be
                      made.
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
