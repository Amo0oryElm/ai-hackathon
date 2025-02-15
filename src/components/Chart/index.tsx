import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BarChart } from '@mui/x-charts/BarChart';
import { SeriesValueFormatter } from '@mui/x-charts/internals';
import { useEffect, useState } from 'react';

// Define types for the scores data structure
interface CriteriaScores {
  Cost: number;
  [key: string]: number; // Allow for dynamic criteria names
}

interface Scores {
  [vendor: string]: CriteriaScores;
}

// Define type for the chart data point
interface ChartDataPoint {
  [criterion: string]: string | number;
  comp: string;
}

// Define type for the reformatted data
interface ReformattedData {
  [criterion: string]: ChartDataPoint[];
}

// Type for component props
interface SyncHighlightProps {
  data: Scores;
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
    MuiChartsLegend?: {
      styleOverrides?: {
        root?: {
          [key: string]: any;
        };
      };
    };
  }
}

export const valueFormatter: SeriesValueFormatter<number | null> = (value: number | null) => `${value}`;

const myTheme = createTheme({
  components: {
    MuiChartsAxis: {
      styleOverrides: {
        root: {
          '.my-special-chart': {
            width: 800
          },
          '& .MuiResponsiveChart': {
            width: "100%",
            stroke: 'white',
            maxWidth: 800
          },
          '& .MuiChartsAxis-label': {
            fill: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
          },
          '& .MuiChartsAxis-tickLabel': {
            fill: 'white',
            width: 100
          },
          '& .MuiChartsAxis-line': {
            stroke: 'white',
          },
          '& .MuiResponsiveChart-container': {
            width: "100%",
            fill: 'white',
            maxWidth: 700
          },
        }
      },
    },
    MuiChartsLegend: {
      styleOverrides: {
        root: {
          '& text': {
            fill: 'white !important',
            fontSize: '14px',
            fontWeight: 500,
          },
        },
      },
    },
  },
});

export default function SyncHighlight({ data: scores }: SyncHighlightProps) {
  const [reformattedData, setReformattedData] = useState<ReformattedData>({});
  useEffect(() => {
    const reformatted: ReformattedData = {};
    
    Object.entries(scores).forEach(([vendor, criteriaScores]) => {
      // console.log("criteriaScores")
      // console.log(criteriaScores)
      Object.entries(criteriaScores.scores).forEach(([criterion, score]) => {
        if (criterion !== "Total Score") {
          if (!reformatted[criterion]) {
            reformatted[criterion] = [];
          }
          reformatted[criterion].push({
            [criterion.replace(/\s+/g, '_')]: score,
            comp: vendor
          });
        }
      });
    });
    
    setReformattedData(reformatted);
  }, [scores]);

  return (
    <ThemeProvider theme={myTheme}>
      <div className="border border-white rounded-xl flex flex-col p-8">
        <div className="text-white">
          <h3 className="text-3xl">Technical Specifications</h3>
        </div>

        {Object.entries(reformattedData).map(([criterion, data], index) => {
          const chartSetting = {
            xAxis: [
              {
                label: criterion,
                colors: ['blue', 'red', 'green'],
              },
            ],
            width: 500,
            height: 400,
          };

          return (
            <div key={index} className="mb-6">
              <h4 className="text-xl font-semibold mb-2 mt-10">{criterion}</h4>
              <BarChart
                key={index}
                sx={{
                  width: 800
                }}
                className="my-special-chart"
                dataset={data}
                yAxis={[{
                  scaleType: 'band',
                  dataKey: 'comp',
                }]}
                grid={{ vertical: true }}
                series={[{ 
                  dataKey: criterion.replace(/\s+/g, '_'),
                  label: criterion,
                  valueFormatter 
                }]}
                layout="horizontal"
                {...chartSetting}
              />
            </div>
          );
        })}
      </div>
    </ThemeProvider>
  );
}