 import Chart from '../Chart'
 import BannerImage from "../../assets/GradientMesh_Light.png";
 import { useLocation } from 'react-router-dom';
import Table,{BestProposal} from '../Table'
import {tableTheme} from "../../lib/theme";
import { ThemeProvider } from "@mui/material/styles";
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

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
                        <BestProposal data={formData}/>
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