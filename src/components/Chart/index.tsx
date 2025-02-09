import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { platforms } from './webUsageStats';
import Grid from '@mui/material/Grid2';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BarChart } from '@mui/x-charts/BarChart';
// import { PieChart } from '@mui/x-charts/PieChart';
const myTheme = createTheme({
  components: {
    MuiChartsAxis: {
      styleOverrides: ({ theme }) => ({
        '.MuiChartsAxis-label text': {  // <-- Correct selector
          fill: 'purple',
          fontSize: '16px',
          fontWeight: 'bold',
        },
        '.MuiChartsAxis-tickLabel text': { // For tick labels
          fill: 'green',
        },
        // For the axis line (if you want to style it):
        '.MuiChartsAxis-line': {
          stroke: 'gray',
        },
      }),
    },
  },
});
export default function SyncHighlight() {
  const [highlightedItem, setHighLightedItem] = React.useState(null);
  return (
    <ThemeProvider theme={myTheme}> 
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
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
      </Grid>
    </ThemeProvider>
  )
}
 
 
const application_functionality = {
  series: [
    {
      data: [30, 15, 10, 30],
      label:'application_functionality',
      id: 'application_functionality',
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  
  xAxis: [{ 
    label: 'Application Functionality', 
    scaleType: 'band', 
    data: ['Base', 'StandardCase Systems', 'QuickFix Solutions', 'JusticeTech Pro'],
    style:''
  }],
  height: 400,
  slotProps: {
    legend: {
      hidden: true,
    },

  },
};
const level_of_integration = {
  series: [
    {
      data: [5, 2, 0, 5],
      label:'level_of_integration',
      id: 'level_of_integration',
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  xAxis: [{  label: 'Level of Integration', scaleType: 'band', data: ['Base', 'StandardCase Systems', 'QuickFix Solutions', 'JusticeTech Pro'] }],
  height: 400,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};
const technical_environment = {
  series: [
    {
      data: [5, 3, 1, 5],
      label:'technical_environment',
      id: 'technical_environment',
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  xAxis: [{ label: 'Technical Environment', scaleType: 'band', data: ['Base', 'StandardCase Systems', 'QuickFix Solutions', 'JusticeTech Pro'] }],
  height: 400,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};
const system_security = {
  series: [
    {
      data: [5, 3, 0, 5],
      label:'system_security',
      id: 'system_security',
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  xAxis: [{ label: 'System Security', scaleType: 'band', data: ['Base', 'StandardCase Systems', 'QuickFix Solutions', 'JusticeTech Pro'] }],
  height: 400,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};
const project_implementation_support = {
  series: [
    {
      data: [10, 7, 3, 10],
      label:'project_implementation_support',
      id: 'project_implementation_support',
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  xAxis: [{ label:'Project Implementation Support', scaleType: 'band', data: ['Base', 'StandardCase Systems', 'QuickFix Solutions', 'JusticeTech Pro'] }],
  height: 400,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};
const user_support_training = {
  series: [
    {
      data: [5, 3, 1, 5],
      label:'user_support_training',
      id: 'user_support_training',
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  xAxis: [{  label:'User Support Training', scaleType: 'band', data: ['base', 'StandardCase Systems', 'QuickFix Solutions', 'JusticeTech Pro'] }],
  height: 400,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};
const proposer_background_experience = {
  series: [
    {
      data: [5, 3, 2, 5],
      label:'proposer_background_experience',
      id: 'proposer_background_experience',
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  xAxis: [{ label:'Proposer Background Experience', scaleType: 'band', data: ['Base', 'StandardCase Systems', 'QuickFix Solutions', 'JusticeTech Pro'] }],
  height: 400,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};
const system_testing_acceptance = {
  series: [
    {
      data: [5, 3, 1, 5],
      label:'system_testing_acceptance',
      id: 'system_testing_acceptance',
      highlightScope: { highlight: 'item', fade: 'global' },
    },
  ],
  xAxis: [{ label:'System Testing Acceptance', scaleType: 'band', data: ['Base', 'StandardCase Systems', 'QuickFix Solutions', 'JusticeTech Pro'] }],
  height: 400,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};

 
//  const  dt = {
//   evaluation: {
//    criteria: {
//      technical: {
//        weight: 70,
//        scores: {
//          application_functionality: 30,
//          level_of_integration: 5,
//          technical_environment: 5,
//          system_security: 5,
//          project_implementation_support: 10,
//          user_support_training: 5,
//          proposer_background_experience: 5,
//          system_testing_acceptance: 5
//         }
//       },
//       cost: {
//        weight: 30
//       }
//     },
//     proposals: [
//       {
//        name:"StandardCase Systems",
//        technical_scores: {
//          application_functionality: 15,
//          level_of_integration: 2,
//          technical_environment: 3,
//          system_security: 3,
//          project_implementation_support: 7,
//          user_support_training: 3,
//          proposer_background_experience: 3,
//          system_testing_acceptance: 3
//         },
//        total_technical_score: 39,
//        cost: 80000,
//        cost_score: 30,
//        total_score: 69
//       },
//       {
//        name:"QuickFix Solutions",
//        technical_scores: {
//          application_functionality: 10,
//          level_of_integration: 0,
//          technical_environment: 1,
//          system_security: 0,
//          project_implementation_support: 3,
//          user_support_training: 1,
//          proposer_background_experience: 2,
//          system_testing_acceptance: 1
//         },
//        total_technical_score: 18,
//        cost: 10000,
//        cost_score: 30,
//        total_score: 48
//       },
//       {
//        name:"JusticeTech Pro",
//        technical_scores: {
//          application_functionality: 30,
//          level_of_integration: 5,
//          technical_environment: 5,
//          system_security: 5,
//          project_implementation_support: 10,
//          user_support_training: 5,
//          proposer_background_experience: 5,
//          system_testing_acceptance: 5
//         },
//        total_technical_score: 70,
//        cost: 165000,
//        cost_score: 20,
//        total_score: 90
//       }
//     ],
//     summary: {
//       highest_scoring_proposal:"JusticeTech Pro",
//       lowest_scoring_proposal:"QuickFix Solutions"
//     }
//   }
// }