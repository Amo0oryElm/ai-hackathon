 import Chart from '../Chart'
 import Pie from '../Pie'
 import BannerImage from "../../assets/GradientMesh_Light.png";
 import { useLocation } from 'react-router-dom';
import Table,{
    BestProposal
} from '../Table'
import {tableTheme} from "../../lib/theme";
import { ThemeProvider } from "@mui/material/styles";
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ReactNode, SyntheticEvent, useState } from 'react';


interface TabPanelProps {
    children?: ReactNode;
    dir?: string;
    index: number;
    value: number;
  }

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

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
function a11yProps(index: number) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
}
  
  
const Evaluation = () => {
    const location = useLocation();
    const formData = location.state?.data; // Access data from location.state
    const theme = useTheme();
    const [value, setValue] = useState(0);
  
    const handleChange = (_event: SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
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
                    <Box>
                    <AppBar position="static">
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        >
                            <Tab label="Display By Technical Criteria" {...a11yProps(0)} />
                            <Tab label="Display By Vendor Scores" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <div className="my-10 w-full">
                            <Chart data={formData.proposal_scores}/>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <div className="my-10 w-full">
                            <Pie data={formData.proposal_scores}/>
                        </div>
                    </TabPanel>
                </Box>
                   
                   
                </div>
            </div>
    </ThemeProvider>
  )
}

export default Evaluation