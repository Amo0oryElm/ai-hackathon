// import * as React from "react";
import { ChangeEvent, FormEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import { ThemeProvider } from "@mui/material/styles";
import {customTheme} from "../../lib/theme";
import DragDrop from "../DragAndDrop";
import { useNavigate } from 'react-router-dom';
import BannerImage from "../../assets/GradientMesh_Light.png";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// import { ApiResponse } from "../Evaluation";

// const Item = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
interface ApiResponse {
  output: string;
  // Add other response fields as needed
}
export default function UploadForm() {
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState("");
  const [rfpFile, setRfpFile] = useState<File | undefined>(undefined);
  const [proposalFiles, setProposalFiles] = useState<File[] | []>([]);
  // const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setIsloading] = useState<boolean>(false);
  // const handleClick = () => {
  //   navigate('/evaluation'); // Navigate to the route
  // };
  const handleProjectNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProjectName(event.target.value);
  };

  const handleRfpFileChange = (files: File | FileList | File[]): void => {
    if (files instanceof FileList) {
      setRfpFile(files[0]);
    } else if (Array.isArray(files)) {
      setRfpFile(files[0]);
    } else {
      setRfpFile(files);
    }
  };
  
  const handleProposalFilesChange = (files: File | FileList | File[]): void => {
    console.log("files")
    console.log(files)
    if (files instanceof FileList) {
      setProposalFiles(Array.from(files));
    } else if (Array.isArray(files)) {
      setProposalFiles(files);
    } else {
      setProposalFiles([files]);
    }
  };
  // const handleProposalFilesChange = (files: File[]) => {
  //   setProposalFiles(files); // Store FileList object
  // };

  // const fetchData = async (formData: FormData): Promise<ApiResponse> => {
  //     try {
  //       const response = await Promise.race([
  //         fetch("https://s-abusahab.app.n8n.cloud/webhook/proposals_json", {
  //             method: "POST",
  //             body: formData
  //         }),
  //         new Promise((_, reject) => setTimeout(() => reject(new Error("Request timed out")), 600000)) // Timeout after 30 seconds
  //     ]);
  //       if (!response?.ok) throw new Error("Server error, please try again later.");
  //     } catch (error) {
  //       console.error("Error submitting proposal:", error);
  //       // alert(error.message || "Submission failed. Please try again.");
  //       // submitBtn.disabled = false;
  //     } finally {
  //       // loadingText.style.display = "none";
  //     }
  // }
  const fetchData = async (formData: FormData): Promise<ApiResponse> => {
    const response = await Promise.race([
      fetch("https://mosaed.app.n8n.cloud/webhook/proposals_json", {
        method: "POST",
        body: formData
      }),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Request timed out")), 600000)
      )
    ]) as Response;

    if (!response?.ok) throw new Error("Server error, please try again later.");
    return response.json();
  };

  const handleSubmit =  async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    // navigate('/evaluation'); // Navigate to the route
    try {
      event.preventDefault(); // Prevent form from actually submitting
      if (!rfpFile) {
        alert("Please select an RFP file");
        return;
      }

      if (proposalFiles.length === 0) {
        alert("Please select at least one proposal file");
        return;
      }

      setIsloading(true);
      const formData = new FormData();
      // Here you would typically handle the form submission,
      // e.g., send the data to your server.
      formData.append("projectName", projectName);
      formData.append("rfpFile", rfpFile);
       proposalFiles.forEach((file) => {
        formData.append("proposals", file);
      });
      // handleFileUpload({projectName,rfpFile,proposalFiles})
      // setSubmitted(true); // Update state to show submission message
      const response = await fetchData(formData);
       
      setIsloading(false);
      // Extract HTML response as text
      const cleanedResponse = await response.output
      console.log("cleanedResponse")
      console.log(cleanedResponse)
      // .replace(/```json/g, '').replace(/```/g, '').trim();

      // 2. Parse the cleaned string to a JSON object
      const parsedData = cleanedResponse //JSON.parse(cleanedResponse);

      navigate('/evaluation', { state: { data: parsedData } }); // Pass data in state

    } catch (error: unknown) {
      setIsloading(false);
      console.error("Error submitting proposal:", error);
      
      // Type guard to check if error is an Error object
      if (error instanceof Error) {
          alert(error.message);
      } else {
          alert("Submission failed. Please try again.");
      }
  }
    finally {
        // loadingText.style.display = "none";
    }
  };
  // const handleFileUpload = (file: File) => {
  //   console.log("Uploaded file:", file);
  //   // You can handle file upload logic here (e.g., send to an API)
  // };
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
                    acceptedTypes={["application/pdf"] as string[]}
                />
              </div>

              <Button
                variant="contained"
                color="primary"
                // onClick={handleSubmit}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleSubmit(event as unknown as FormEvent<HTMLFormElement>)}
                fullWidth
                type="submit"
              >
                Submit
              </Button>

              {
              // submitted && (
              //   <Typography variant="body1" color="success" align="center">
              //     Form submitted successfully!
              //   </Typography>
              // )
              }
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
