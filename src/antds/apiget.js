import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import "./Antds.css";
import Gchart from "./chartTh";

function Getapi() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="site-card-wrapper">
        <p style={{ color: "black",fontSize: "20px",textAlign: "Left" }}>ข้อมูล ณ วันที่ {items.UpdateDate}</p>
        <Row gutter={[16,16]}>
          <Col xs={24} sm={12} md={6}>
            <Card title="ติดเชื้อสะสม" bordered={true} hoverable >
              <h1 style={{ color: "#A81F00" }}>{items.Confirmed}</h1>
              <h4 style={{ color: "#F53F16" }}>+ {items.NewConfirmed}</h4>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card title="หายแล้ว" bordered={true} hoverable>
              <h1 style={{ color: "#0FA809" }}>{items.Recovered}</h1>
              <h4 style={{ color: "#24F51C" }}>+ {items.NewRecovered}</h4>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card title="รักษาอยู่ใน รพ." bordered={true} hoverable>
              <h1 style={{ color: "#0079A8" }}>{items.Hospitalized}</h1>
              <h4 style={{ color: "#2BC3FF" }}>+ {items.NewHospitalized}</h4>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card title="เสียชีวิต" bordered={true} hoverable>
              <h1 style={{ color: "#4D88A8" }}>{items.Deaths}</h1>
              <h4 style={{ color: "#2B79FF" }}>+ {items.NewDeaths}</h4>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <Card bordered={true} hoverable>
              <Gchart Confirmed={items.Confirmed} Recovered={items.Recovered} Hospitalized={items.Hospitalized} Deaths={items.Deaths} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Getapi;
