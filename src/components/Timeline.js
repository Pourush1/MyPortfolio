import React, { Component } from "react";

class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Engineer 1 at Axxess{" "}
                          <span>November 2019-March 2020</span>
                        </h2>
                        <p>
                          I started working as a Software Engineer at Axxess.
                          During my time period, I learned about enterprise
                          level application development and worked on different
                          technologies. I was mainly a part of Front End
                          Application team for a product called Axxess. My
                          day-to-day activity would include bug fixes, feature
                          development, code reviews and metoring interns.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Graduate Assistant at Villanova University{" "}
                          <span>August 2017-May 2020</span>
                        </h2>
                        <p>
                          I joined Villanova University as a Graduate student in
                          2017 and graduated during May of 2020 this year. I
                          pursued my Master's in Software Engineering here.I
                          have taken courses like Software Engineering, Database
                          Management System, Requirement Engineering, Software
                          Design & Evolution, Software Studio and some othere
                          courses here. My overall GPA is 3.77.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Undergraduation from Tribhuvan University(Nepal)
                          <span>2011-2015</span>
                        </h2>
                        <p>
                          I finished my Undergradaute in 2015 majoring in
                          Electronics & Communication Engineering. I took
                          courses like C,C++,Microprocessor, Digitial Signal
                          Processing. I was also leading member of the
                          Electronics Engineering Society. I also was part of
                          Robotics Association of Nepal which is a non-profit
                          organization during my final year. My GPA was 3.7.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none" />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Timeline;
