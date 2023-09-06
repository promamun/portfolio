import React, { Component } from "react";
import CaseStudies from "../CaseStudies/caseStudies";
import { Helmet } from "react-helmet";
import BroadCamp from "../broadCamp/BroadCamp";
import {Container,Form,Row} from "react-bootstrap"
import type { DatePickerProps } from 'antd';
import { DatePicker, TimePicker } from 'antd';

export default function Index(){
    const bgImage = {
        backgroundImage:`url(/images/background/freeConsultation.png)`
    }
    const selectBorder ={
        borderRadius:'inherit !important'
    }
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
      <div>
        <Helmet>
          <title>Free Consultations</title>
        </Helmet>
          <BroadCamp name='Free Consultations' bgImageStyle={bgImage}/>
          <section className="contact-page-section">
              <div className="auto-container">
                  <div className="row">
                      <div className="form-column col-lg-12 col-md-12 col-sm-12">
                          <div className="inner-column">
                              <div className="sec-title text-center">
                                  <h6 className="subtitle">Now Very Easy</h6>
                                  <h2>Don’t hesitate to Get Free Consultations <br /> with us now</h2>
                              </div>
                              <div className="contact-form">
                                  <Form>
                                      <Row >
                                          <Form.Group className="form-group col-lg-6 col-md-12 col-sm-12">
                                              <Form.Select size="lg">
                                                  <option>Select Category</option>
                                                  <option>Select Catego</option>
                                              </Form.Select>
                                          </Form.Group>
                                          <Form.Group className="form-group col-lg-6 col-md-12 col-sm-12">
                                              <Form.Select size="lg">
                                                  <option>Select Category</option>
                                                  <option>Select Catego</option>
                                              </Form.Select>
                                          </Form.Group>
                                          <Form.Group className="form-group col-lg-6 col-md-12 col-sm-12">
                                              <DatePicker style={{width:'100%', height:'57px'}} onChange={onChange} />
                                          </Form.Group>
                                          <Form.Group className="form-group col-lg-6 col-md-12 col-sm-12">
                                              <TimePicker use12Hours format="h:mm:ss A" style={{width:'100%', height:'57px'}} onChange={onChange} />
                                          </Form.Group>
                                      </Row>
                                      <Row>
                                          <Form.Group className="form-group col-lg-6 col-md-12 col-sm-12">
                                              <input type="text" name="username" placeholder="Name" required=""/>
                                          </Form.Group>
                                          <Form.Group className="form-group col-lg-6 col-md-12 col-sm-12">
                                              <input type="text" name="phone" placeholder="Phone" required=""/>
                                          </Form.Group>
                                          <Form.Group className="form-group col-lg-6 col-md-12 col-sm-12">
                                              <input type="text" name="company" placeholder="Company"/>
                                          </Form.Group>
                                          <Form.Group className="form-group col-lg-6 col-md-12 col-sm-12">
                                              <input type="email" name="email" placeholder="Email" required=""/>
                                          </Form.Group>
                                          <Form.Group className="form-group col-lg-12 col-md-12 col-sm-12">
                                              <textarea name="message" placeholder="Massage"/>
                                          </Form.Group>
                                          <Form.Group className="form-group col-lg-12 col-md-12 col-sm-12 text">
                                              <button className="theme-btn btn-style-one" type="submit" name="submit-form">
                                                  <span className="txt">Submit</span>
                                              </button>
                                          </Form.Group>
                                      </Row>
                                  </Form>
                              </div>
                          </div>
                      </div>
                      <div className="contact-column col-lg-12 col-md-12 col-sm-12">
                          <div className="contact-info">
                              <div className="row">
                                  <div className="info-block col-lg-4 col-md-4 col-sm-12">
                                      <div className="inner">
                                          <div className="icon-box"> <i className="flaticon flaticon-stopwatch"></i></div>
                                          <div className="text-box">
                                              <h4>Time</h4>
                                              <p>10:00am to 6:00pm <br />Sunday Closed</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="info-block col-lg-4 col-md-4 col-sm-12">
                                      <div className="inner">
                                          <div className="icon-box"> <i className="flaticon flaticon-pin"></i></div>
                                          <div className="text-box">
                                              <h4>Location</h4>
                                              <p>13005 Greenville Avenue California, TX 70240</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="info-block col-lg-4 col-md-4 col-sm-12">
                                      <div className="inner">
                                          <div className="icon-box"> <i className="flaticon flaticon-call"></i></div>
                                          <div className="text-box">
                                              <h4>Email / Phone</h4>
                                              <p>+1 (800) 581 3645 11</p>
                                              <p><a href="#">mail@example.com</a></p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        <CaseStudies />
      </div>
    );
}
