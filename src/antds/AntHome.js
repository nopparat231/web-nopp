
// import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import "./Antds.css";
import { Tabs } from 'antd';
import MyComponent from "./apiget";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}


 function Antds() {
     return(
        <div className="Appant">
        <Tabs onChange={callback} type="card">
        <TabPane tab="Covid-19 In Thai" key="1">
          <MyComponent />
        </TabPane>
        <TabPane tab="Covid-19 In World" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
      </div>
     );
 }


export default Antds;