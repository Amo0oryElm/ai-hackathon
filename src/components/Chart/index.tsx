import * as React from 'react';
 
import { createTheme, ThemeProvider,Components,Theme } from '@mui/material/styles';

import { BarChart } from '@mui/x-charts/BarChart';

 
declare module '@mui/material/styles' {
  interface Components<Theme = {}> {
    MuiCharts?: {
      styleOverrides?: any; // Or a more specific type if you know it
    };
  }
}

export const dataset = [
  {
    StandardCase_Systems: 59,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'Feb',
  }
];
export const dataset1 = [
  {
    Application_Functionality: 15,
    comp: 'StandardCase Systems',
  },
  {
    Application_Functionality: 10,
    comp: 'QuickFix Solutions',
  },
  {
    Application_Functionality: 30,
    comp: 'JusticeTech Pro',
  },
];    
 
export function valueFormatter(value) {
  return `${value}`;
}

// import { PieChart } from '@mui/x-charts/PieChart';
const myTheme = createTheme({
  components: {
    MuiChartsAxis: {
       styleOverrides: {
        root: {
          '.my-special-chart': { // More specific
            width: 800
          },
          '& .MuiResponsiveChart':{
            width: "100%",
            stroke: 'white',
            maxWidth: 800
          },
          '& .MuiChartsAxis-label': {  // <-- Correct selector
            fill: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
          },
          '& .MuiChartsAxis-tickLabel': { // For tick labels
            fill: 'white',
            width:100
          },
          // For the axis line (if you want to style it):
          '& .MuiChartsAxis-line': {
            stroke: 'white',
          },
          '& .MuiResponsiveChart-container"': {
            width: "100%",
            fill: 'white',
            maxWidth: 700
          },
        }
      },
    },
  },
});
const chartSetting= {
  xAxis: [
    {
      label: 'Application Functionality',
      colors: ['blue', 'red', 'green'],
    },
  ],
  width: 500,
  height: 400,
};
export default function SyncHighlight() {
   return (
    <ThemeProvider theme={myTheme}>   
    <div className="border border-white rounded-xl flex flex-col p-8">
      <div className="text-white">
        <h3
        className='text-3xl'
        >
          Technical Specifications
        </h3>
        <h4
         className='text-2xl'
        >
          Application Functionality
        </h4>
        <p className='text-md w-[800px]' >
          Tha graph shows that JusticeTech Pro has scroed the heighest when it comes to the applcation functionality whereas the QuickFix Solutions company is lowest
        </p>
      </div>
        <BarChart
          sx={{
            width:800
          }}
          className="my-special-chart " 
          dataset={dataset1}
          yAxis={[{
             scaleType: 'band', 
             dataKey: 'comp' ,
            }]}
          grid={{ vertical: true }}
          series={[{ dataKey: 'Application_Functionality', label: 'Application Functionality', valueFormatter }]}
          layout="horizontal"
          {...chartSetting}
        />
    </div>
 
      {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid size={4}>
            <BarChart
             
              {...application_functionality}
              highlightedItem={highlightedItem}
              onHighlightChange={setHighLightedItem}
            />
        </Grid>
        <Grid size={4}>
            <BarChart
              {...level_of_integration}
              highlightedItem={highlightedItem}
              onHighlightChange={setHighLightedItem}
            />
        </Grid>
        <Grid size={4}>   
            <BarChart
              {...technical_environment}
              highlightedItem={highlightedItem}
              onHighlightChange={setHighLightedItem}
            />
        </Grid>
        <Grid size={4}>   
            <BarChart
              {...system_security}
              highlightedItem={highlightedItem}
              onHighlightChange={setHighLightedItem}
            />
        </Grid>
        <Grid size={4}>   
            <BarChart
              {...project_implementation_support}
              highlightedItem={highlightedItem}
              onHighlightChange={setHighLightedItem}
            />
        </Grid>
        <Grid size={4}>   
            <BarChart
              {...user_support_training}
              highlightedItem={highlightedItem}
              onHighlightChange={setHighLightedItem}
            />
        </Grid>
        <Grid size={4}>      
            <BarChart
              {...proposer_background_experience}
              highlightedItem={highlightedItem}
              onHighlightChange={setHighLightedItem}
            />
        </Grid>
        <Grid size={4}>      
            <BarChart
              {...system_testing_acceptance}
              highlightedItem={highlightedItem}
              onHighlightChange={setHighLightedItem}
            />
        </Grid>
      </Grid> */}
    </ThemeProvider>
  )
}

export const application_functionality = {
  series: [
    {
      data: [15, 10, 30],
      label:'application_functionality',
      id: 'application_functionality',
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  // dataset={dataset}
  // dataKey: 'tech',
  yAxis: [{
    label: 'Criteria Score',
    min: 0, // Set the minimum to 0
    max: 30, // Set the maximum to the highest original value
  }],
  xAxis: [{ 
    label: 'Application Functionality', 
    scaleType: 'band', 
    data: [ 'StandardCase Systems', 'QuickFix Solutions', 'JusticeTech Pro'],
    style:''
  }],
  height: 400,
  slotProps: {
    legend: {
      hidden: true,
    },

  },
};
export const level_of_integration = {
  series: [
    {
      data: [ 2, 0, 5],
      label:'level_of_integration',
      id: 'level_of_integration',
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  yAxis: [{
    label: 'Criteria Score',
    min: 0, // Set the minimum to 0
    max: 5, // Set the maximum to the highest original value
  }],
  xAxis: [{  label: 'Level of Integration', scaleType: 'band', data: [ 'StandardCase Systems', 'QuickFix Solutions', 'JusticeTech Pro'] }],
  height: 400,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};
export const technical_environment = {
  series: [
    {
      data: [ 3, 1, 5],
      label:'technical_environment',
      id: 'technical_environment',
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  yAxis: [{
    label: 'Criteria Score',
    min: 0, // Set the minimum to 0
    max: 5, // Set the maximum to the highest original value
  }],
  xAxis: [{ label: 'Technical Environment', scaleType: 'band', data: [ 'StandardCase Systems', 'QuickFix Solutions', 'JusticeTech Pro'] }],
  height: 400,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};
export const system_security = {
  series: [
    {
      data: [ 3, 0, 5],
      label:'system_security',
      id: 'system_security',
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  yAxis: [{
    label: 'Criteria Score',
    min: 0, // Set the minimum to 0
    max: 5, // Set the maximum to the highest original value
  }],
  xAxis: [{ label: 'System Security', scaleType: 'band', data: [ 'StandardCase Systems', 'QuickFix Solutions', 'JusticeTech Pro'] }],
  height: 400,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};
export const project_implementation_support = {
  series: [
    {
      data: [7, 3, 10],
      label:'project_implementation_support',
      id: 'project_implementation_support',
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  yAxis: [{
    label: 'Criteria Score',
    min: 0, // Set the minimum to 0
    max: 10, // Set the maximum to the highest original value
  }],
  xAxis: [{ label:'Project Implementation Support', scaleType: 'band', data: [ 'StandardCase Systems', 'QuickFix Solutions', 'JusticeTech Pro'] }],
  height: 400,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};
export const user_support_training = {
  series: [
    {
      data: [ 3, 1, 5],
      label:'user_support_training',
      id: 'user_support_training',
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  yAxis: [{
    label: 'Criteria Score',
    min: 0, // Set the minimum to 0
    max: 5, // Set the maximum to the highest original value
  }],
  xAxis: [{  label:'User Support Training', scaleType: 'band', data: [ 'StandardCase Systems', 'QuickFix Solutions', 'JusticeTech Pro'] }],
  height: 400,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};
export const proposer_background_experience = {
  series: [
    {
      data: [3, 2, 5],
      label:'proposer_background_experience',
      id: 'proposer_background_experience',
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  yAxis: [{
    label: 'Criteria Score',
    min: 0, // Set the minimum to 0
    max: 5, // Set the maximum to the highest original value
  }],
  xAxis: [{ label:'Proposer Background Experience', scaleType: 'band', data: ['StandardCase Systems', 'QuickFix Solutions', 'JusticeTech Pro'] }],
  height: 400,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};
export const system_testing_acceptance = {
  series: [
    {
      data: [ 3, 1, 5],
      label:'system_testing_acceptance',
      id: 'system_testing_acceptance',
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  yAxis: [{
    label: 'Criteria Score',
    min: 0, // Set the minimum to 0
    max: 5, // Set the maximum to the highest original value
  }],
  xAxis: [{ label:'System Testing Acceptance', scaleType: 'band', data: [ 'StandardCase Systems', 'QuickFix Solutions', 'JusticeTech Pro'] }],
  height: 400,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};

 