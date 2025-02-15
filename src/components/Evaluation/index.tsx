 import Chart from '../Chart'
 import BannerImage from "../../assets/GradientMesh_Light.png";
 import { useLocation } from 'react-router-dom';
import Table,{
    BestProposal
} from '../Table'
import {tableTheme} from "../../lib/theme";
import { ThemeProvider } from "@mui/material/styles";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';


export interface CriteriaDetails {
    requirement: string;
    weight: number;
}
  
export interface Criteria {
    [key: string]: CriteriaDetails;
}
export interface CriteriaItem {
    criteria: string;
    requirement: string;
    weight: number;
}
export interface Score {
    Cost: number;
    Experience: number;
    ImplementationSupport: number;
    Integration: number;
    Security: number;
    SystemTesting: number;
    TechnicalEnvironment: number;
    TechnicalFunctionality: number;
    UserTraining: number;
}
export interface Proposal {
    VendorName: string;
    final_score: number;
    scores: Score;
  }
  
export interface ApiResponse {
    best_proposal:string,
    explanation:string,
    evaluation_criteria: Criteria;
    proposals: {
        [proposalId: string]: Proposal; // Index signature for dynamic proposal IDs
      };
}
export interface BasicTableProps {
    data: Criteria; // Correct prop type
  }
 export  interface BestProposalProps {
    explanation: string;
    score: number;
    vendor: string;
  }
  
  
const Evaluation = () => {
    const location = useLocation();
    const formData = location.state?.data; // Access data from location.state
  console.log("formData")
  console.log(formData)
  
  return (
    <ThemeProvider theme={tableTheme}>
            <div className="absolute z-[1] w-full top-0 left-0 right-0">
                <img className="w-full object-cover" src={BannerImage} />
            </div>
            <div className='flex items-center gap-20 justify-center w-full '>
                <div className="relative space-y-4 z-10 w-2/3">
                    <div className="mb-10">
                        <Table data={formData.evaluation_criteria}/>
                      
                    </div>
                    <Divider>
                        <Typography variant="h5" gutterBottom> 
                            Best Proposal
                        </Typography>
                    </Divider>
                    <div className="my-10 w-full">
                        <BestProposal 
                            explanation={formData.best_proposal.explanation}
                            score={formData.best_proposal.score}
                            vendor={formData.best_proposal.vendor}
                        />
                    </div>
                    <Divider>
                        <Typography variant="h5" gutterBottom> 
                            Company Proposals
                        </Typography>
                    </Divider>
                    <div className="my-10 w-full">
                        <Chart/>
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default Evaluation