import React, { useEffect } from "react";
import boatData from "../assets/data/boatData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import { RiMapPin2Line } from "react-icons/ri";
import "../styles/boat-details.css";
import "../styles/find-boat-form.css";
import { Link } from "react-router-dom";

const BoatDetails = () => {  
  const { slug } = useParams();

  const singleBoatItem = boatData.find((item) => item.ime === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleBoatItem]);

  return (
    <Helmet title={singleBoatItem.ime}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleBoatItem.imgUrl} alt="" className="w-100 boatImg"/>
            </Col>

            <Col lg="6">
              <div>
                <h2 className="section__title">{singleBoatItem.ime}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    {singleBoatItem.cijena} € / Tjedan
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                   <i color="blue"> <RiMapPin2Line color="#d4af37" />  Marina {singleBoatItem.regija} </i>
                  </span>
                </div>

                <div class="row" >
                  <div class="column">
                    <p>Godina: {singleBoatItem.godina}</p> 
                    <p>Kabine: {singleBoatItem.kabine}</p>
                    <p>Posada: {singleBoatItem.posada}</p>
                    <p>Gaz: {singleBoatItem.gaz}</p>
                    <p>Potrošnja: {singleBoatItem.potrošnja}</p>
                    <p>Tuš: {singleBoatItem.tus}</p>
                  </div>
                  <div class="column">
                    <p>Tip Broda: {singleBoatItem.tipBroda}</p>
                    <p>Lezajevi: {singleBoatItem.lezajevi}</p>
                    <p>Motor: {singleBoatItem.motor}</p>
                    <p>Duljina preko svega: {singleBoatItem.duljinaPrekoSvega}</p>
                    <p>Gorivo: {singleBoatItem.gorivo}</p>
                    <p>Brzina krstarenja:{singleBoatItem.brzinaKrstarenja}</p>
                  </div>
                </div>
               
              </div>     
            </Col>

            <Col lg="7" className="mt-5">
              <div>
                <h5 className="mb-4 fw-bold ">Opis</h5>
                <p className="section__description">
                  {singleBoatItem.opis}
                </p>

              </div>
            </Col>

            <Col className="mt-5">
              <div className="contact-container mt-5" >  
                <Link to={`/contact`} >
                  <button className="contact-button">KONTAKT ZA NAJAM</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BoatDetails;
