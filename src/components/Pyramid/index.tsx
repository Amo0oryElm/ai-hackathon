import { useState, useEffect } from 'react';
import CanvasJSReact from './CanvasJSReact/CanvasJSReact.js'; // Path to your converted component

// const colors = [
//     "#ffa169", // Bright Orange
//     "#cc8bdb", // Lavender
//     "#ff5d36", // Slightly Darker Orange
//     "#763cbc", // Deep Purple
//     "#0a1e0b" // Dark Green (Adjusted for better contrast)
//   ];
const Pyramid = () => {
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const [options, setOptions] = useState({
    animationEnabled: true,
    backgroundColor: "transparent",
    title: {
      text: "Competitive Advantages: A Winning Proposition",
      fontColor: "white", // White title text
      horizontalAlign: "left", // Align title to the left
      fontFamily: "Arial",
      fontSize: 32,    // Set the font size (in pixels)
      fontWeight: "normal" ,
      padding: { // Add padding to the title
        top: 10,  // Adjust top padding if needed
        bottom: 30, // Adjust bottom padding to increase space below title
      }
    },
    axisX: { // Style X-axis labels
        labelFontColor: "white"
      },
    axisY: { // Style Y-axis labels
    labelFontColor: "white"
    },
    data: [{
      type: "pyramid",
      indexLabelFontColor: "white", // White index label text
      legendText: "{label}",
      indexLabel: "{label}",
      toolTipContent:"<b>{label}</b>",     
      dataPoints: [
        { label: "Advanced Reporting", y: 2850, color:'#763cbc', indexLabelFontSize: 28},
        { label: "Local Expertise", y: 2150,color:'#32156C',indexLabelFontSize: 24},
        { label: "Cybersecurity Standards", y: 1900,color:'#240E4A',indexLabelFontSize: 22},
        { label: "Arabic Support", y: 650,color:'#2b0c56',indexLabelFontSize: 20},
        { label: "Government Integration", y: 400,color:'#4A2686',indexLabelFontSize: 18}
      ]
    }]
  });

  useEffect(() => {
    // Calculate percentage
    const dataPoints = options.data[0].dataPoints;
    // const total = dataPoints[0].y;
   
    const updatedDataPoints = dataPoints.map((dataPoint,) => {
    //   const percentage = i === 0 ? 100 : ((dataPoint.y / total) * 100).toFixed(2);
      return { ...dataPoint }; // Create a new object with updated percentage
    });

    setOptions(prevState => ({
      ...prevState,
      data: [{ ...prevState.data[0], dataPoints: updatedDataPoints }]
    }));

  }, []); // Empty dependency array ensures this runs only once on mount
  // console.log("options")
  // console.log(options)
  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default Pyramid;