import React, { useEffect, useState } from "react";
// import { Table } from "antd";

function AirinThai() {
  //   const columns = [
  //     {
  //       title: "ลำดับ",
  //       dataIndex: "no",
  //       key: "no",
  //     },
  //     {
  //       title: "อำเภอ,จังหวัด",
  //       dataIndex: "city",
  //       key: "city",
  //     },
  //     {
  //       title: "สหรัฐ AQI",
  //       dataIndex: "aqi",
  //       key: "aqi",
  //     },
  //   ];

  //   const data = [
  //     {
  //       key: "1",
  //       no: "1",
  //       city: "บางคนที, จังหวัดสมุทรสงคราม",
  //       aqi: 168,
  //     },
  //     {
  //       key: "2",
  //       no: "2",
  //       city: "หนองแขม, กรุงเทพฯ",
  //       aqi: 161,
  //     },
  //     {
  //       key: "3",
  //       no: "3",
  //       city: "น้ำพอง, จังหวัดขอนแก่น",
  //       aqi: 160,
  //     },
  //   ];

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.airvisual.com/v2/states?country=Thailand&key=462d60e8-ae3a-41cf-bbf2-2ae3041d6aa4"
    )
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
    let itemsToRender;
    if (items.data) {
      itemsToRender = items.data.map((da) => {
        return <li>{da.state}</li>;
      });
    } else {
      itemsToRender = "Loading...";
    }

    return (
      <ul>{itemsToRender}</ul>
      //   <Table columns={columns} dataSource={data} />
    );
  }
}

export default AirinThai;
