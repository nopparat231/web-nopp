import React from 'react';
import CanvasJSReact from '../lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Gchart extends React.Component {
    	
	render() {
        CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                "#A81F00",
                "#0FA809",
                "#0079A8",
                "#4D88A8"                
                ]);
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "สรุปทั้งหมดวันนี้"
            },
            colorSet: "greenShades",
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}",		
				startAngle: -90,
				dataPoints: [
					{ y: this.props.Confirmed, label: "ติดเชื้อ" },
					{ y: this.props.Recovered, label: "หายแล้ว" },
					{ y: this.props.Hospitalized, label: "รักษาอยู่ใน รพ." },
					{ y: this.props.Deaths, label: "เสียชีวิต" }
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
 export default Gchart;