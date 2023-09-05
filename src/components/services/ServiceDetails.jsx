import React, { useEffect, useState } from "react";
import BroadCamp from "../broadCamp/BroadCamp";
import { useParams } from "react-router-dom";
import ServiceData from "./data";
import Error404 from "../404/NotFound";
import {Helmet} from "react-helmet";


export default function ServiceDetails() {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  function findServiceBySlug(data, slug) {
    return data.find((item) => item.slug === slug);
  }
  useEffect(() => {
    const service = findServiceBySlug(ServiceData, slug);
    if (service) {
      setData(service);
    } else {
      // Handle the case where the slug doesn't match any data
    }
  }, [slug]);

  if (!data) {
    // Handle loading state or error state
    return <Error404 />;
  }

  const BgImage = {
    backgroundImage: `url(${data.BgImage})`
  };

  return (
    <>
      <Helmet>
        <title>{data.title}</title>
      </Helmet>
      <BroadCamp name="Service Details" bgImageStyle={BgImage} />
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="content-side col-lg-12 col-md-12 col-sm-12">
              <div className="service-detail">
                <div className="inner-box">
                  <div
                    className="image-box parallax-scene-2 wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="0ms"
                  >
                  </div>
                  <h2>{data.title}</h2>
                  <div className="text">
                    <p>{data.description}</p>
                    <h3>
                      <strong>{data.question}</strong>
                    </h3>
                    <br />
                    <p>{data.answer1}</p>
                    <p>{data.answer2}</p>
                    <p>{data.answer3}</p>
                    <p>{data.answer4}</p>
                    <hr />
                    <h3>
                      <strong>{data.visionH}</strong>
                    </h3>
                    <br />
                    <p>{data.vision1}</p>
                    <p>{data.vision2}</p>
                    <p>{data.vision3}</p>
                    <p>{data.vision4}</p>
                    <p>{data.vision5}</p>
                    <h3>
                      <strong>{data.workflow}</strong>
                    </h3>
                    <br />
                    <p>{data.work1}</p>
                    <p>{data.work2}</p>
                    <p>{data.work3}</p>
                    <p>{data.work4}</p>
                    {/*  Python Service & php service & wordpress Our Approach & Shopify Our Approach */}
                    <h3>
                      <strong>{data.serviceH}</strong>
                    </h3>
                    <br />
                    <p>{data.service1}</p>
                    <p>{data.service2}</p>
                    <p>{data.service3}</p>
                    <p>{data.service4}</p>
                    <p>{data.service5}</p>
                    <p>{data.service6}</p>
                    {/*Python Achieve/Laravel Achieve &  wordpress Embarking */}
                    <h3>
                      <strong>{data.achieveH}</strong>
                    </h3>
                    <br />
                    <p>{data.achieve1}</p>
                    <p>{data.achieve2}</p>
                    <p>{data.achieve3}</p>
                    <p>{data.achieve4}</p>
                    <p>{data.achieve5}</p>
                    {/*Ecommerce Empire of Shopify */}
                    <h3>
                      <strong>{data.ecommerce_empire}</strong>
                    </h3>
                    <br />
                    <p>{data.empire1}</p>
                    <p>{data.empire2}</p>
                    <p>{data.empire3}</p>
                    <p>{data.empire4}</p>
                    <div className="two-column row">
                      <div className="column col-lg-6 col-md-6 col-sm-12">
                        <div className="image">
                          <img src="/images/services/21.jpg" alt="" />
                        </div>
                      </div>
                      <div className="column col-lg-6 col-md-6 col-sm-12">
                        <h4>Important Facts</h4>
                        <ul>
                          <li>The Problem</li>
                          <li>The Solution</li>
                          <li>The Skills</li>
                          <li>Statistics</li>
                          <li>Mathematics</li>
                          <li>SEO</li>
                          <li>Vision & Values</li>
                          <li>Leadership</li>
                          <li>Sustainability</li>
                        </ul>
                      </div>
                    </div>
                    {/*Support */}
                    <h4>
                      Support and Maintenance: Nurturing Your Digital Investmen
                    </h4>
                    <p>{data.support1}</p>
                    <p>{data.support2}</p>
                    <p>{data.support3}</p>
                    <p>{data.support4}</p>
                    <h4>{data.elevate} </h4>
                    <p>{data.lastdiscription}</p>
                    <ul className="single-list">
                      <li>Various Analysis Options</li>
                      <li>
                        Page Load Details (time, size, number of requests)
                      </li>
                      <li>Waterfall, Video and Report History</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
