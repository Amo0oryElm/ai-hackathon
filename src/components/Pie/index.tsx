import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
// import { application_functionality } from "../";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Grid from "@mui/material/Grid2";
import Typography from '@mui/material/Typography';
import { Box, Stack } from "@mui/material";

// const myTheme = createTheme({
//   components: {
//     MuiChartsAxis: {
//       styleOverrides: {
//         root: {
//           "& .MuiChartsAxis-label": {
//             // <-- Correct selector
//             fill: "purple",
//             fontSize: "16px",
//             fontWeight: "bold",
//           },
//           "& .MuiChartsAxis-tickLabel": {
//             // For tick labels
//             fill: "green",
//           },
//           // For the axis line (if you want to style it):
//           "& .MuiChartsAxis-line": {
//             stroke: "gray",
//           },
//         },
//       },
//     },
//   },
// });
export default function BasicPie() {
    const value = 39; // Example value
    const value2 = 18; // Example value
    const value3 = 70; // Example value
    const fullScale = 70; // Full scale
    const degrees = (value / fullScale) * 360; //
    const degrees2 = (value2 / fullScale) * 360; //
    const degrees3 = (value3 / fullScale) * 360; //
    const chartRef = React.useRef(null);
    const [centerPosition, setCenterPosition] = React.useState({ x: 0, y: 0 });
  
    React.useEffect(() => {
        if (chartRef.current) {
        //   const chartBounds = chartRef.current.getBoundingClientRect();
 
          const centerX =  150;
          const centerY =  150;
    
          setCenterPosition({ x: centerX, y: centerY });
        }
      }, []);
      console.log('centerPosition')
      console.log(centerPosition)
    
  return (
    // <ThemeProvider 
    // theme={myTheme}
    // >
         <Stack direction="row" width="100%" textAlign="center" spacing={2}>
            <Box flexGrow={1}>
                <Typography>StandardCase Systems</Typography>
                <PieChart
                  ref={chartRef} // Ref to the chart
                    series={[
                    {
                        // StandardCase Systems
                        data: [
                        { id: 0, value: 15, label: "Application Functionality" },
                        { id: 1, value: 2, label: "Level of Integration" },
                        { id: 2, value: 3, label: "Technical Environment" },
                        { id: 3, value: 3, label: "System Security" },
                        { id: 4, value: 7, label: "Project Implementation Support" },
                        { id: 5, value: 3, label: "User Support Training" },
                        { id: 6, value: 3, label: "Proposer Background Experience" },
                        { id: 7, value: 3, label: "System Testing Acceptance" },
                        ],
                        highlightScope: { fade: "global", highlight: "item" },
                        faded: {
                        innerRadius: 60,
                        additionalRadius: -30,
                        color: "gray",
                        },
                        innerRadius: 60,
                        outerRadius: 100,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: -45,
                        endAngle:  degrees,
                    },
                    ]}
                    height={200}
                    slotProps={{
                        legend: {
                        hidden: true,
                        },
                    }}
                />
            </Box>
            <Box flexGrow={1}>
                <Typography>QuickFix Solutions</Typography>
                <PieChart
                    series={[
                    {
                        // QuickFix Solutions
                        data: [
                        { id: 16, value: 10, label: "Application Functionality" },
                        { id: 17, value: 0, label: "Level of Integration" },
                        { id: 18, value: 1, label: "Technical Environment" },
                        { id: 19, value: 0, label: "System Security" },
                        { id: 20, value: 3, label: "Project Implementation Support" },
                        { id: 21, value: 1, label: "User Support Training" },
                        { id: 22, value: 2, label: "Proposer Background Experience" },
                        { id: 23, value: 1, label: "System Testing Acceptance" },
                        ],
                        highlightScope: { fade: "global", highlight: "item" },
                        faded: {
                            innerRadius: 60,
                            additionalRadius: -30,
                            color: "gray",
                            },
                            innerRadius: 60,
                            outerRadius: 100,
                            paddingAngle: 5,
                            cornerRadius: 5,
                            startAngle: -45,
                        endAngle: degrees2,
                    },
                    ]}
                    height={200}
                    slotProps={{
                        legend: {
                        hidden: true,
                        },
                    }}
                />
            </Box>
            <Box flexGrow={1}>
                <Typography>JusticeTech Pro</Typography>
                <PieChart
                    series={[
                    {
                        // JusticeTech Pro
                        data: [
                        { id: 8, value: 30, label: "Application Functionality" },
                        { id: 9, value: 5, label: "Level of Integration" },
                        { id: 10, value: 5, label: "Technical Environment" },
                        { id: 11, value: 5, label: "System Security" },
                        { id: 12, value: 10, label: "Project Implementation Support" },
                        { id: 13, value: 1, label: "User Support Training" },
                        { id: 14, value: 5, label: "Proposer Background Experience" },
                        { id: 15, value: 5, label: "System Testing Acceptance" },
                        ],
                        highlightScope: { fade: "global", highlight: "item" },
                        faded: {
                            innerRadius: 60,
                            additionalRadius: -30,
                            color: "gray",
                            },
                            innerRadius: 60,
                            outerRadius: 100,
                            paddingAngle: 2,
                            cornerRadius: 2,
                            startAngle: -45,
                        endAngle: degrees3,
                    },
                    ]}
                    slotProps={{
                        legend: {
                        hidden: true,
                        },
                    }}
                    height={200}
                />
            </Box>
         </Stack>
    // </ThemeProvider>
  );
}
 