import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import "./Antds.css";
import Gchart from "./chartTh";

function Getapi() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://static.easysunday.com/covid-19/getTodayCases.json")
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
              <h1 style={{ color: "#A81F00" }}>{new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(items.cases)}</h1>
              <h4 style={{ color: "#F53F16" }}>+ {new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(items.todayCases)}</h4>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card title="หายแล้ว" bordered={true} hoverable>
              <h1 style={{ color: "#0FA809" }}>{new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(items.recovered)}</h1>
              <h4 style={{ color: "#24F51C" }}>+ {new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(items.todayRecovered)}</h4>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card title="รักษาอยู่ใน รพ." bordered={true} hoverable>
              <h1 style={{ color: "#0079A8" }}>{new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(items.active)}</h1>
              <h4 style={{ color: "#2BC3FF" }}>+ {new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(items.critical)}</h4>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card title="เสียชีวิต" bordered={true} hoverable>
              <h1 style={{ color: "#4D88A8" }}>{new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(items.deaths)}</h1>
              <h4 style={{ color: "#2B79FF" }}>+ {new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(items.todayDeaths)}</h4>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24}>
            <Card bordered={true} hoverable>
              <Gchart Confirmed={items.todayCases} Recovered={items.critical} Hospitalized={items.critical} Deaths={items.todayDeaths} />

            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Getapi;
