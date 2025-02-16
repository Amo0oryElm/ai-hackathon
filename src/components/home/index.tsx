// import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import PricingCard from "../Card";
import Banner from "./banner";
// import Grid from '@mui/material/Grid2';
import target from '../../assets/icons/target-market.png'
import target1 from '../../assets/icons/target-market-2.png'
import target2 from '../../assets/icons/target-market-3.png'
// import { ReactComponent as Logo } from  '../../assets/icons/target-market-2.png'// Import SVG as a component
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { lazy, Suspense , useEffect, useRef, useState } from "react";
//  import Pyramid from '../Pyramid'
 const Pyramid = lazy(() => import('../Pyramid')); // Path to your Pyramid component


interface IReturnsOnInvestment {
  title: string;
  subtitle: string;
  number: number; // Assuming the icon is a URL or imported image
  width:number
}
 const Home = () => {
  // const [selectedCard, setSelectedCard] = useState(0);

  return (
    <div className="mb-[10rem]">
      <div className="max-w-[1400px] m-auto">
        <Banner />
        <div className="container relative z-10 mt-5 flex flex-col gap-10">
          <section className="flex flex-col gap-2 w-full my-6">
            <h2>Addressing the Challenge: Vendor Selection</h2>
            <div className="grid grid-flow-col gap-4 grid-cols-3 ">
              <CardSingle
              title="Current Approach"
              subtitle=" Manual evaluation of proposals often leads to inconsistencies,"
              />
              <CardSingle
              title="Our Solution: AI-Powered Evaluation"
              subtitle="subjectivity, and inefficiencies."
              />
            {/* <div 
                className="bg-gradient-to-r from-purple-900/70 to-purple-800/50 shadow-lg rounded-xl border border-[#B28FDB] backdrop-blur-sm px-12 py-8 w-96 h-48" >
                <h4 className="text-[24px]">
                  Current Approach
                </h4>
                <p className="text-[18px]">
                  Manual evaluation of proposals often leads to inconsistencies,
                </p>
              </div> */}
              {/* <div 
                className="bg-gradient-to-r from-purple-900/70 to-purple-800/50 shadow-lg rounded-xl border border-[#B28FDB] backdrop-blur-sm px-12 py-8 w-96 h-48" >
                  <h4 className="text-[24px]">
                   Our Solution: AI-Powered Evaluation
                  </h4>
                  <p className="text-[18px]">
                    subjectivity, and inefficiencies.
                  </p>
              </div> */}
            </div>
           
          </section>
          <section className="mt-4 flex flex-col gap-5 w-full my-6">
            <h2>Our Solution: AI-Powered Evaluation</h2>
            <OurSolution/>
            {/* <ul className="list-inside list-disc">
              <li>
                Automated Proposal Analysis: AI extracts key insights from
                proposals.
              </li>
              <li>Objective Scoring: AI eliminates bias and subjectivity.</li>
              <li>
                Comprehensive Evaluation: Technical and financial analyses ensure
                a holistic assessment.
              </li>
            </ul> */}
          </section>
          <section className="flex flex-col gap-4 w-full my-6">
            <h2>
              Pricing Strategy
              <small className="text-sm"> "illustrative"</small>
              </h2>
            <PricingCard />
          </section>
          <section className="mt-4 flex flex-col gap-4 w-full my-6">
            <h2>Projected Return on Investment: Strong Growth Potential</h2>
            <ReturnsOnInvestment
              title={"First Year"}
              subtitle={"20-30 clients, 5-7 million SAR revenue."}
              number={1}
              width={200}
            />
            <ReturnsOnInvestment
              title={"Second Year"}
              subtitle={"50-70 clients, 12-15 million SAR revenue.​"}
              number={2}
              width={500}
            />
            <ReturnsOnInvestment
              title={"Third Year"}
              subtitle={"100+ clients, 25-30 million SAR revenue.​"}
              number={3}
              width={800}
            />
          </section>
          <section className="mt-4 flex flex-col gap-4 w-full my-6">
            <h2>Target Markets</h2>
            
          <TargetMarketCard/>
            
              
            {/* <ul className="list-inside list-disc">
              <li>Government: Ministries, agencies, institutions.</li>
              <li>Private: Large corporations, financial institutions.</li>
              <li>Specialized: Oil and gas, healthcare, education.</li>
            </ul> */}
          </section>
          <section className="mt-4 flex flex-col gap-4 w-full my-6">
            <Suspense fallback={<div>Loading ...</div>}>
               <Pyramid />
            </Suspense>
           
            {/* <h2>Competitive Advantages</h2>
            <ul className="list-inside list-disc">
              <li>Government Integration</li>
              <li>Arabic Support</li>
              <li>Cybersecurity Standards</li>
              <li>Local Expertise</li>
              <li>Advanced Reporting</li>
            </ul> */}
          </section>
        </div>
      </div>
    </div>
  );
};
const CardSingle = ({title, subtitle}: {title: string, subtitle: string}) =>{

  return (
    <Card 
    sx={{
        borderRadius: '1rem',
        minHeight: 200,
        border: '1px solid transparent', // Start with transparent border
        transition: 'border-color 0.3s ease, transform 0.2s ease', // Smooth transitions
        '&:hover': {
            borderColor: '#673ab7', // Nice hover border color (adjust as needed)
            transform: 'scale(1.02)', // Subtle scale on hover
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
        },
    }}
    >
     
      <CardActionArea
        sx={{
            height: '100%',
            transition: 'background-color 0.3s ease', // Smooth background transition
            '&[data-active]': {
              backgroundColor: '#1a2027', // Darker background when active
            },
            '&:hover': { // Hover effect when not active
              backgroundColor: 'rgba(103, 58, 183, 0.1)', // Subtle hover background
            },
        }}
      >
        <CardContent 
            className='flex flex-col gap-4 justify-between'
            sx={{
            height: '100%',
            // backgroundImage: 'linear-gradient(45deg, #32156C, #0D0A2C, #FF4081)',
            backgroundImage: 'linear-gradient(45deg, rgba(88, 28, 135, 0.7), rgba(107, 33, 168, 0.5))',
            backgroundColor:'#1a2027',
            color: 'white',
            padding: '1.5rem', // Add some padding
          }}
                >
            <div className="flex flex-col gap-5">
              {/* <img className="bg-transparent w-[30px]" src={card.icon}/> */}
                <Typography 
                    sx={{
                        fontSize:'2rem'
                    }}
                variant="h5" component="div">
                    {title}
                </Typography>
                <Typography
                sx={{fontSize:'1.25rem'}}
                variant="body1" color="white">
                    {subtitle}
                </Typography>

            </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
const ReturnsOnInvestment = ({ title, subtitle, number, width:targetWidth }:IReturnsOnInvestment) => {
  const initialWidth = 10;
  const [width, setWidth] = useState(10);
  const divRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has occurred

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasAnimated(true);
        setIsVisible(entry.isIntersecting); // Update visibility state
      },
      { threshold: 0.5 } // Adjust threshold as needed (0.5 means 50% visible)
    );

    if (divRef.current) {
      observer.observe(divRef.current); // Observe the div
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current); // Clean up on unmount
      }
    };
  }, [hasAnimated]);
  useEffect(() => {
    if (isVisible) { // Animate only when visible
      const animateWidth = () => {
        if (divRef.current) {
          let currentWidth = initialWidth;
          const widthChange = targetWidth - initialWidth;
          const animationDuration = 500; // milliseconds
          const startTime = performance.now();

          const animate = (currentTime:number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / animationDuration, 1);

            currentWidth = initialWidth + widthChange * progress;
            setWidth(currentWidth);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      };
      animateWidth();
    } else {
      setWidth(initialWidth) // Reset Width
    }
  }, [isVisible, initialWidth, targetWidth]);

  return (
    <div className="flex flex-row gap-5 w-full overflow-hidden">
      <div
        ref={divRef} // Ref for the animated div
        style={{
          minWidth: `${width}px`, // Animated width
          transition: 'min-width 0.6s ease', // Smooth transition for non-JS animation (fallback)
          backgroundImage: 'linear-gradient(45deg, rgba(88, 28, 135, 0.7), rgba(107, 33, 168, 0.5))',
          backgroundColor:'#1a2027',
        }}
        className="border cursor-pointer hover:border-white border-[#4A2C85] py-[5rem] flex items-center h-[100px] rounded-xl text-2xl text-start"
      >
        <p className="text-[2rem] font-light mx-5">{number}</p>
      </div>
      <div className="flex flex-col justify-between pt-8">
        <h4 className="text-[28px]">{title} </h4>
        <p className="text-[20px]">{subtitle}</p>
        <hr className="w-[70vw] text-[#4A2C85]" />
      </div>
    </div>
  );
};

// const TargetMarket = () => {
//   return (
//     <div className="grid grid-flow-col grid-rows-2 gap-4">
//         <Card
//           title={"Government"}
//           subtitle={"Ministries, agencies, institutions"}
//           icon={icon}
//         />
//        <Card
//           title={"Private"}
//           subtitle={"Large corporations, financial institutions."}
//           icon={icon}
//         />
//        <Card
//           title={"Specialized"}
//           subtitle={"Oil and gas, healthcare, education."}
//           icon={icon}
//         />
//     </div>
//   );
// };
 
const cards = [
  {
    id: 1,
    title: 'Government',
    subtitle:'Ministries, agencies, institutions.',
    icon:target
  },
  {
    id: 2,
    title: 'Private',
    subtitle:'Large corporations, financial institutions.',
    icon:target1
  },
  {
    id: 3,
    title: 'Specialized',
    subtitle:'Oil and gas, healthcare, education.',
    icon:target2
  },
];
function TargetMarketCard() {
  const [selectedCard, setSelectedCard] = useState(0);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
        gap: 2,
      }}
    >
       
      {cards.map((card, index) => (
        <Card 
        key={index+200}
        sx={{
            borderRadius: '1rem',
            minHeight: 200,
            border: '1px solid transparent', // Start with transparent border
            transition: 'border-color 0.3s ease, transform 0.2s ease', // Smooth transitions
            '&:hover': {
                borderColor: '#673ab7', // Nice hover border color (adjust as needed)
                transform: 'scale(1.02)', // Subtle scale on hover
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
            },
        }}
        >
         
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
                height: '100%',
                transition: 'background-color 0.3s ease', // Smooth background transition
                '&[data-active]': {
                  backgroundColor: '#1a2027', // Darker background when active
                },
                '&:hover': { // Hover effect when not active
                  backgroundColor: 'rgba(103, 58, 183, 0.1)', // Subtle hover background
                },
            }}
          >
            <CardContent 
                className='flex flex-col gap-4 justify-between'
                sx={{
                height: '100%',
                // backgroundImage: 'linear-gradient(45deg, #32156C, #0D0A2C, #FF4081)',
                backgroundImage: 'linear-gradient(45deg, rgba(88, 28, 135, 0.7), rgba(107, 33, 168, 0.5))',
                backgroundColor:'#1a2027',
                color: 'white',
                padding: '1.5rem', // Add some padding
              }}
                    >
                <div className="flex flex-col gap-5">
                  <img className="bg-transparent w-[30px]" src={card.icon}/>
                    <Typography 
                        sx={{
                            fontSize:'2rem'
                        }}
                    variant="h5" component="div">
                        {card.title}
                    </Typography>
                    <Typography
                    sx={{fontSize:'1.25rem'}}
                    variant="body1" color="white">
                        {card.subtitle}
                    </Typography>

                </div>
            
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
function OurSolution(){
  const oursolution = [
    {
      id: 1,
      title: 'Automated Proposal Analysis',
      description:'AI extracts key insights from proposals, providing a comprehensive overview of vendor capabilities.',
    },
    {
      id: 2,
      title: 'Objective Scoring',
      description:'AI consistently analyzes proposals based on pre-defined criteria, eliminating bias and subjectivity.',
    },
    {
      id: 3,
      title: 'Evaluation Comprehensive',
      description:'AI conducts both technical and financial analyses, ensuring a holistic assessment of vendors.',
    },
  ];
  const [selectedCard, setSelectedCard] = useState(0);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
        gap: 2,
      }}
    >
       
      {oursolution.map((card, index) => (
        <Card 
        key={index+10}
        sx={{
            borderRadius: '1rem',
            minHeight: 200,
            border: '1px solid transparent', // Start with transparent border
            transition: 'border-color 0.3s ease, transform 0.2s ease', // Smooth transitions
            '&:hover': {
                borderColor: '#673ab7', // Nice hover border color (adjust as needed)
                transform: 'scale(1.02)', // Subtle scale on hover
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
            },
        }}
        >
         
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
                height: '100%',
                transition: 'background-color 0.3s ease', // Smooth background transition
                '&[data-active]': {
                  backgroundColor: '#1a2027', // Darker background when active
                },
                '&:hover': { // Hover effect when not active
                  backgroundColor: 'rgba(103, 58, 183, 0.1)', // Subtle hover background
                },
            }}
          >
            <CardContent 
                className='flex flex-col gap-4 justify-between'
                sx={{
                height: '100%',
                // backgroundImage: 'linear-gradient(45deg, #32156C, #0D0A2C, #FF4081)',
                backgroundImage: 'linear-gradient(45deg, rgba(88, 28, 135, 0.7), rgba(107, 33, 168, 0.5))',
                backgroundColor:'#1a2027',
                color: 'white',
                padding: '1.5rem', // Add some padding
              }}
                    >
                <div className="flex flex-col gap-5">
                  {/* <img className="bg-transparent w-[30px]" src={card.icon}/> */}
                    <Typography 
                        sx={{
                            fontSize:'2rem'
                        }}
                    variant="h5" component="div">
                        {card.title}
                    </Typography>
                    <Typography
                    sx={{fontSize:'1.25rem'}}
                    variant="body1" color="white">
                        {card.description}
                    </Typography>

                </div>
              
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );  
}
export default Home;
