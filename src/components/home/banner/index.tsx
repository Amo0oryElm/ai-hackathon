import { Button } from "@mui/material";
// import React from "react";
// import BannerIcon from "../../UI/GradientMesh_Light";
import BannerImage from "../../../assets/GradientMesh_Light.png";
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/proposal_evaluator'); // Navigate to the route
  };
  return (
    <div className="">
      <div className="absolute z-[1] w-full top-0 left-0 right-0">
        <img className="w-full object-cover" src={BannerImage} />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-4 overflow-x-hidden mb-24">
        <h1 className="mt-10">AI-Powered Vendor Evaluation</h1>
        <p>
          Unlocking the power of AI to streamline vendor evaluation processes
          and drive smarter decisions.
        </p>
        <Button
          onClick={handleClick} // Trigger navigation on click
          variant="outlined"
          sx={{
            background: 'linear-gradient(45deg, #32156C, #0D0A2C, #FF4081)', // Choose your gradient
            color: 'white', // Text color
            padding: '0.75rem 1.2rem',
            fontWeight: 600, // Slightly bolder text
            transition: 'background 0.7s ease, transform 0.2s ease, box-shadow 0.2s ease', // Smooth transitions
            '&:hover': {
              background: 'linear-gradient(-45deg, #32156C, #0D0A2C, #FF4081)', // Darker gradient on hover (adjust colors)
              transform: 'scale(1.02)', // Subtle scale on hover
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Add a more prominent shadow
            },
            '&:active': { // Visual feedback on click
              transform: 'scale(0.98)', // Slightly shrink on click
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.15)', // Smaller shadow on click
            },
          }}
        >
          Go to Proposal Evaluator
        </Button>
      </div>
    </div>
  );
};

export default Banner;
