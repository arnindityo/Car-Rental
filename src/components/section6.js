import React from "react";
import "./section6.css";
import Accordion from 'react-bootstrap/Accordion';

function Section6() {
  return (
    <div className="container section6">
      <div className="row">
        <div className="col-md sec-6-tab1">
          <div id="sec-6-tab1-top">Frequently Asked Question</div>
          <div id="sec-6-tab1-bot">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>

        <div className="col-md">
            <Accordion>
                <Accordion.Item className="accordion" eventKey="0">
                    <Accordion.Header><h6>Apa saja syarat yang dibutuhkan?</h6></Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion" eventKey="1">
                    <Accordion.Header><h6>Berapa hari minimal sewa mobil lepas kunci?</h6></Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion" eventKey="2">
                    <Accordion.Header><h6>Berapa hari sebelumnya sabaiknya booking sewa mobil?</h6></Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion" eventKey="3">
                    <Accordion.Header><h6>Apakah Ada biaya antar-jemput?</h6></Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion" eventKey="4">
                    <Accordion.Header><h6>Bagaimana jika terjadi kecelakaan</h6></Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Section6;
