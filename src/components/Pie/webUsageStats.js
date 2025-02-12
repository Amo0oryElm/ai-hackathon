// Data derived from https://gs.statcounter.com/os-market-share/desktop/worldwide/2023
// And https://gs.statcounter.com/os-market-share/mobile/worldwide/2023
// And https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide/2023
// For the month of December 2023

export const desktopOS = [
    {
      label: 'Windows',
      value: 72.72,
    },
    {
      label: 'OS X',
      value: 16.38,
    },
    {
      label: 'Linux',
      value: 3.83,
    },
    {
      label: 'Chrome OS',
      value: 2.42,
    },
    {
      label: 'Other',
      value: 4.65,
    },
  ];
  
  export const mobileOS = [
    {
      label: 'Android',
      value: 70.48,
    },
    {
      label: 'iOS',
      value: 28.8,
    },
    {
      label: 'Other',
      value: 0.71,
    },
  ];
  
  export const platforms = [
    {
      label: 'Mobile',
      value: 59.12,
    },
    {
      label: 'Desktop',
      value: 40.88,
    },
  ];
  
  const normalize = (v, v2) => Number.parseFloat(((v * v2) / 100).toFixed(2));
  
  export const mobileAndDesktopOS = [
    ...mobileOS.map((v) => ({
      ...v,
      label: v.label === 'Other' ? 'Other (Mobile)' : v.label,
      value: normalize(v.value, platforms[0].value),
    })),
    ...desktopOS.map((v) => ({
      ...v,
      label: v.label === 'Other' ? 'Other (Desktop)' : v.label,
      value: normalize(v.value, platforms[1].value),
    })),
  ];
  
  export const valueFormatter = (item) => `${item.value}%`;
  
  export const  data = {
    evaluation: {
     criteria: {
       technical: {
         weight: 70,
         scores: {
           application_functionality: 30,
           level_of_integration: 5,
           technical_environment: 5,
           system_security: 5,
           project_implementation_support: 10,
           user_support_training: 5,
           proposer_background_experience: 5,
           system_testing_acceptance: 5
          }
        },
        cost: {
         weight: 30
        }
      },
      proposals: [
        {
         name:"StandardCase Systems",
         technical_scores: {
           application_functionality: 15,
           level_of_integration: 2,
           technical_environment: 3,
           system_security: 3,
           project_implementation_support: 7,
           user_support_training: 3,
           proposer_background_experience: 3,
           system_testing_acceptance: 3
          },
         total_technical_score: 39,
         cost: 80000,
         cost_score: 30,
         total_score: 69
        },
        {
         name:"QuickFix Solutions",
         technical_scores: {
           application_functionality: 10,
           level_of_integration: 0,
           technical_environment: 1,
           system_security: 0,
           project_implementation_support: 3,
           user_support_training: 1,
           proposer_background_experience: 2,
           system_testing_acceptance: 1
          },
         total_technical_score: 18,
         cost: 10000,
         cost_score: 30,
         total_score: 48
        },
        {
         name:"JusticeTech Pro",
         technical_scores: {
           application_functionality: 30,
           level_of_integration: 5,
           technical_environment: 5,
           system_security: 5,
           project_implementation_support: 10,
           user_support_training: 5,
           proposer_background_experience: 5,
           system_testing_acceptance: 5
          },
         total_technical_score: 70,
         cost: 165000,
         cost_score: 20,
         total_score: 90
        }
      ],
      summary: {
        highest_scoring_proposal:"JusticeTech Pro",
        lowest_scoring_proposal:"QuickFix Solutions"
      }
    }
  }