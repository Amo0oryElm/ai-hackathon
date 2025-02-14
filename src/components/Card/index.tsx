import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
 
const cards = [
  {
    id: 1,
    title: 'Basic Level',
    subtitle:'8,500 SAR/month',
    description: 'Up to 50 documents monthly.',
  },
  {
    id: 2,
    title: 'Intermediate Level',
    subtitle:'21,250 SAR/month',
    description: 'Up to 200 documents monthly.',
  },
  {
    id: 3,
    title: 'Advanced Level',
    subtitle:'41,500 SAR/month',
    description: 'Unlimited documents.',
  },
];

function PricingCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
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
            backgroundImage: 'linear-gradient(45deg, #32156C, #0D0A2C, #FF4081)',
            color: 'white',
            padding: '1.5rem', // Add some padding
          }}
                    >
                <div className="flex flex-col gap-5">
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
              <Typography 
              sx={{fontSize:'0.875rem'}}
              variant="body2" color="white">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default PricingCard;
