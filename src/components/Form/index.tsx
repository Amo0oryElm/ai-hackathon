import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { ThemeProvider } from "@mui/material/styles";
import {customTheme} from "../../lib/theme";
import DragDrop from "../DragAndDrop";
import { useNavigate } from 'react-router-dom';
import BannerImage from "../../assets/GradientMesh_Light.png";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function UploadForm() {
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState("");
  const [rfpFile, setRfpFile] = useState(null);
  const [proposalFiles, setProposalFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setIsloading] = useState(false);
  // const handleClick = () => {
  //   navigate('/evaluation'); // Navigate to the route
  // };
  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleRfpFileChange = (file) => {
    setRfpFile(file);
  };

  const handleProposalFilesChange = (files) => {
    console.log("files")
    console.log(files)
    setProposalFiles(files); // Store FileList object
  };

  const handleSubmit = async (event) => {
    // navigate('/evaluation'); // Navigate to the route
    try {
      event.preventDefault(); // Prevent form from actually submitting
      setIsloading(true);
      const formData = new FormData();
      // Here you would typically handle the form submission,
      // e.g., send the data to your server.
      formData.append("projectName", projectName);
      formData.append("rfpFile", rfpFile);
      for(let i =0; i < proposalFiles.length; i++){
        formData.append("proposals", proposalFiles[i]);
      }
      // handleFileUpload({projectName,rfpFile,proposalFiles})
      // setSubmitted(true); // Update state to show submission message
      const response = await Promise.race([
          fetch("https://s-abusahab.app.n8n.cloud/webhook/proposals_json", {
              method: "POST",
              body: formData
          }),
          new Promise((_, reject) => setTimeout(() => reject(new Error("Request timed out")), 600000)) // Timeout after 30 seconds
      ]);

      if (!response.ok) throw new Error("Server error, please try again later.");
      setIsloading(false);
      // Extract HTML response as text
     
      const htmlResponse = await response.json();
      const cleanedResponse = htmlResponse.output.replace(/```json/g, '').replace(/```/g, '').trim();

      // 2. Parse the cleaned string to a JSON object
      const parsedData = JSON.parse(cleanedResponse);

      navigate('/evaluation', { state: { data: parsedData } }); // Pass data in state

    } catch (error) {
        console.error("Error submitting proposal:", error);
        // alert(error.message || "Submission failed. Please try again.");
        // submitBtn.disabled = false;
    } finally {
        // loadingText.style.display = "none";
    }
  };
  const handleFileUpload = (file) => {
    console.log("Uploaded file:", file);
    // You can handle file upload logic here (e.g., send to an API)
  };
  return (
    <ThemeProvider theme={customTheme}>
      <div className="h-full my-10">
        <div className="absolute z-[1] w-full top-0 left-0 right-0">
          <img className="w-full object-cover" src={BannerImage} />
        </div>
        <form id="proposalForm" encType="multipart/form-data">
          <div className="flex justify-center relative z-10 items-center w-full h-full">
            <Box
              sx={{
                border:'1px solid white',
                borderRadius:'1rem',
                display: "flex",
                flexDirection: "column",
                gap: 3,
                width:600,
                maxWidth: 600,
                margin:'0 auto',
                padding: 3,
              }}
            >
              <Typography variant="h5" align="center" gutterBottom>
                Project Information
              </Typography>
              <TextField 
                id="standard-basic" 
                label="Project Name" 
                variant="standard" 
                value={projectName} // Connect the input's value to the state
                onChange={handleProjectNameChange} // Call handleChange on every input change
              />
              {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
              <div className="">
                <Typography variant="h5" align="center" gutterBottom>
                  Upload Your RFP
                </Typography>
                <DragDrop
                    onFileUpload={handleRfpFileChange}
                    acceptedTypes={["application/pdf"]}
                    name='rfpFile'
                    required
                />
              </div>
              <div className="">
                <Typography variant="h5" align="center" gutterBottom>
                  Upload Proposal Files
                </Typography>
                <DragDrop
                    onFileUpload={handleProposalFilesChange}
                    isMultiple={true}
                    required
                    name='proposals'
                    acceptedTypes={["application/pdf"]}
                />
              </div>

              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                fullWidth
                type="submit"
              >
                Submit
              </Button>

              {submitted && (
                <Typography variant="body1" color="success" align="center">
                  Form submitted successfully!
                </Typography>
              )}
            </Box>
          </div>
        </form>
        {loading && 
          <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      </div>
      
    </ThemeProvider>
  );
}
