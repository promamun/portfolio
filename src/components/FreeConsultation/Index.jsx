import React, { Component } from "react";
import CaseStudies from "../CaseStudies/caseStudies";
import { Helmet } from "react-helmet";
import BroadCamp from "../broadCamp/BroadCamp";
import {Col, Container, Form, Row} from "react-bootstrap"
import type { DatePickerProps } from 'antd';
import { DatePicker, TimePicker } from 'antd';
import CustomInput from "../contact/CustomInput";
import TextArea from "../contact/TextArea";
import Button from "../contact/Button"
import {Link} from "react-router-dom";

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
                  <Row>
                      <Col lg={'12'} md={'12'} sm={'12'} className="form-column">
                          <div className="inner-column">
                              <div className="sec-title text-center">
                                  <h6 className="subtitle">Now Very Easy</h6>
                                  <h2>Don’t hesitate to Get Free Consultations <br /> with us now</h2>
                              </div>
                              <div className="contact-form">
                                  <Form>
                                      <Row >
                                          <Form.Group  className="form-group col-lg-6 col-md-12 col-sm-12">
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
                                              <CustomInput type="text" name="username" placeholder="Name" required=""/>
                                          </Form.Group>
                                          <Form.Group className="form-group col-lg-6 col-md-12 col-sm-12">
                                              <CustomInput type="text" name="phone" placeholder="Phone" required=""/>
                                          </Form.Group>
                                          <Form.Group className="form-group col-lg-6 col-md-12 col-sm-12">
                                              <CustomInput type="text" name="company" placeholder="Company"/>
                                          </Form.Group>
                                          <Form.Group className="form-group col-lg-6 col-md-12 col-sm-12">
                                              <CustomInput type="email" name="email" placeholder="Email" required=""/>
                                          </Form.Group>
                                          <Form.Group className="form-group col-lg-12 col-md-12 col-sm-12">
                                              <TextArea name="message" placeholder="Massage"/>
                                          </Form.Group>
                                          <Form.Group className="form-group col-lg-12 col-md-12 col-sm-12 text">
                                              <Button className="theme-btn btn-style-one" children='Submit' type="submit" name="submit-form"/>
                                          </Form.Group>
                                      </Row>
                                  </Form>
                              </div>
                          </div>
                      </Col>
                      <Col lg={'12'} md={'12'} sm={'12'} className="contact-column">
                          <div className="contact-info">
                              <Row>
                                  <Col lg={'4'} md={'4'} sm={'12'} className="info-block">
                                      <div className="inner">
                                          <div className="icon-box"> <i className="flaticon flaticon-stopwatch"></i></div>
                                          <div className="text-box">
                                              <h4>Time</h4>
                                              <p>24/7/365</p>
                                          </div>
                                      </div>
                                  </Col>
                                  <Col lg={'4'} md={'4'} sm={'12'} className="info-block">
                                      <div className="inner">
                                          <div className="icon-box"> <i className="flaticon flaticon-pin"></i></div>
                                          <div className="text-box">
                                              <h4>Location</h4>
                                              <p>2124 NE19th Street, #F240 <br />
                                                  Gresham, OR 97030</p>
                                          </div>
                                      </div>
                                  </Col>
                                  <Col lg={'4'} md={'4'} sm={'12'} className="info-block">
                                      <div className="inner">
                                          <div className="icon-box"> <i className="flaticon flaticon-call"></i></div>
                                          <div className="text-box">
                                              <h4>Email / Phone</h4>
                                              <p>+1 (971) 231-9745</p>
                                              <p>
                                                  <Link to="#">support@devtechmasters.com</Link>
                                              </p>
                                          </div>
                                      </div>
                                  </Col>
                              </Row>
                          </div>
                      </Col>
                  </Row>
              </div>
          </section>
        <CaseStudies />
      </div>
    );
}
