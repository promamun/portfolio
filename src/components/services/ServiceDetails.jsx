import React, { useEffect, useState } from "react";
import BroadCamp from "../broadCamp/BroadCamp";
import { useParams } from "react-router-dom";
import ServiceData from "./data";

export default function ServiceDetails() {
  let id = useParams()?.id;
  const slug = useParams()?.slug;

  useEffect(() => {
    id = parseInt(id);
    console.log(ServiceData[id - 1]);
    console.log(slug);
  }, [id]);
  const [data, setData] = useState(ServiceData[id - 1]);

  const BgImage = {
    backgroundImage: `url(/images/background/22.png)`
  };

  return (
    <>
      <BroadCamp name="Service Details" bgImageStyle={BgImage} />
      <div class="sidebar-page-container">
        <div class="auto-container">
          <div class="row clearfix">
            <div class="content-side col-lg-12 col-md-12 col-sm-12">
              <div class="service-detail">
                <div class="inner-box">
                  <div
                    class="image-box parallax-scene-2 wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="0ms"
                  >
                    <div class="image" data-depth="0.30">
                      <img src="/images/services/20.png" alt="" />
                    </div>
                  </div>
                  <h2>{data.title}</h2>
                  <div class="text">
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
                    <div class="two-column row">
                      <div class="column col-lg-6 col-md-6 col-sm-12">
                        <div class="image">
                          <img src="/images/services/21.jpg" alt="" />
                        </div>
                      </div>
                      <div class="column col-lg-6 col-md-6 col-sm-12">
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
                    <ul class="single-list">
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
