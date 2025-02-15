import { JSX, useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from '@mui/material/Typography';
import { Box, Stack } from "@mui/material";

// Interface for individual criteria scores
interface CriteriaScores {
  Cost: number;
  [key: string]: number; // Allow for dynamic criteria names
}

// Interface for the scores object
interface Scores {
  [vendor: string]: CriteriaScores;
}

// Interface for the component props
interface BasicPieProps {
  data: Scores;
}

// Interface for the reformatted data structure
interface ChartDataPoint {
  id: number;
  value: number;
  label: string;
}

interface DataSet {
  vendor: string;
  dataSeries: ChartDataPoint[];
}

declare module '@mui/material/styles' {
  interface Components {
    MuiChartsAxis?: {
      styleOverrides?: {
        root?: {
          [key: string]: any;
        };
      };
    };
  }
}

const myTheme = createTheme({
  components: {
    MuiChartsAxis: {
      styleOverrides: {
        root: {
          "& .MuiChartsAxis-label": {
            fill: "purple",
            fontSize: "16px",
            fontWeight: "bold",
          },
          "& .MuiChartsAxis-tickLabel": {
            fill: "green",
          },
          "& .MuiChartsAxis-line": {
            stroke: "gray",
          },
        },
      },
    },
  },
});

export default function BasicPie({ data: scores }: BasicPieProps): JSX.Element {
  const value = 39;
  const fullScale = 70;
  const degrees = (value / fullScale) * 360;

  const [dataSet, setDataSet] = useState<DataSet[]>([]);

  useEffect(() => {
    const dataSets: DataSet[] = [];
    
    Object.entries(scores).forEach(([vendor, criteriaScores]) => {
      const reformatted: ChartDataPoint[] = [];
      
      Object.entries(criteriaScores).forEach(([criterion, score]) => {
        if (criterion !== "Cost" && criterion !== "Total Score") {
          const label = criterion;
          const existingEntry = reformatted.find((entry) => entry.label === label);

          if (existingEntry) {
            existingEntry.value += score;
          } else {
            reformatted.push({
              id: reformatted.length,
              value: score,
              label,
            });
          }
        }
      });
      
      dataSets.push({
        vendor,
        dataSeries: reformatted
      });
    });
    
    setDataSet(dataSets);
  }, [scores]);

  return (
    <ThemeProvider theme={myTheme}>
      <div className="border border-white rounded-xl flex flex-col p-8">
        <div className="text-white mb-15">
          <h3 className="text-3xl">
            Vendor Scores
          </h3>
        </div>
        <Stack direction="row" width="100%" textAlign="center" spacing={2}>
          {dataSet.map((dt, i) => (
            <Box 
              key={i}
              flexGrow={1}
            >
              <Typography
                sx={{
                  transform: "translate(-30px, -15px)"
                }}
              >
                {dt.vendor}
              </Typography>
              <PieChart
                series={[
                  {
                    data: dt.dataSeries,
                    highlightScope: { fade: "global", highlight: "item" },
                    faded: {
                      innerRadius: 60,
                      additionalRadius: -30,
                      color: "gray",
                    },
                    innerRadius: 60,
                    outerRadius: 100,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: -45,
                    endAngle: degrees,
                  },
                ]}
                height={200}
                slotProps={{
                  legend: {
                    hidden: true,
                  },
                }}
              />
            </Box>
          ))}
        </Stack>
      </div>
    </ThemeProvider>
  );
}