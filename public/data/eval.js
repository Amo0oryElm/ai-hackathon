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
         name:StandardCase "Systems",
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