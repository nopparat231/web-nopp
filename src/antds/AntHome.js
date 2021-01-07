import "antd/dist/antd.css";
import "./Antds.css";
import { Tabs } from "antd";
import Getapi from "./apiget";
import AirinThai from "./AirTables";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function Antds() {
  return (
    <div className="Appant">
      <Tabs onChange={callback} type="card">
        <TabPane tab="Covid-19 ในไทย" key="1">
          <Getapi />
        </TabPane>
        <TabPane tab="คุณภาพอากาศ ในไทย" key="2">
          <AirinThai />
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Antds;
