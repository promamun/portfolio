import Mamun_pro_signature from "../../assets/images/resource/Mamun_Pro_Signature.png";
import teamData from "./data/data";
import Thumbnail from "./Thumbnail";
import { Link } from "react-router-dom";
import Img0 from "../../assets/images/resource/about-img-1.png";

function TeamMembers() {
  const BgImg = {
    backgroundImage: `url(images/background/9.png)`
  };
  return (
    <div>
      <section className="team-section alternate">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h6 className="subtitle">Our Specialists Team</h6>
            <h2>
              Meet our expert team
              <br />
              Teamwork makes the dream work.
            </h2>
          </div>
          <div className="row">
            {teamData.map((data) => (
              <Thumbnail
                image={data.image}
                name={data.name}
                designation={data.designation}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="about-section style-two" style={BgImg}>
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <div className="content-box">
                  <div className="sec-title text-left">
                    <h2>
                      Creative Strategies that <br />
                      Drive Profitable Outcomes
                    </h2>
                  </div>
                  <h5>
                    Over 5 years DTM helping companies reach their Website and
                    branding goals.
                  </h5>
                  <p>
                    Over the years, we have worked with Fortune 50s and
                    brand-new startups. Our innovative and tailored solutions
                    open the door to increased profitability for your business.
                    With a blend of creativity, strategy, and expertise, we
                    provide unique and impactful solutions that drive results.
                    From captivating branding to targeted marketing campaigns,
                    we empower your business to thrive in a competitive
                    landscape. Experience the transformative power of creative
                    solutions that deliver profits right to your door. Give us a
                    call.
                  </p>
                  <div className="video-link">
                    <Link
                      to="https://www.youtube.com/watch?v=Fvae8nxzVz4"
                      data-fancybox="gallery"
                      data-caption=""
                    >
                      <span className="icon fa fa-play" aria-hidden="true" />
                      <i className="ripple" />
                    </Link>
                    <span className="text-video">Watch Video</span>
                    <figure>
                      <img src={Mamun_pro_signature} alt="signature image" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="alphabet-img wow fadeInRight">
                    <img src={Img0} alt="about img" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default TeamMembers;
