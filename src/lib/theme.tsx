
import { createTheme,Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

 const theme = createTheme({
    palette: {
      primary: {
        main: '#763CBC',
        contrastText: '#FAFAFA',
      },
      secondary: {
        main: '#763CBC',
        contrastText: '#031830'
      },
      error: {
        main: '#B7372E',
      },
      warning: {
        main: '#F29D50',
        
      },
      info: {
        main: '#90531D',
      },
      success: {
        main: '#40C97B',
      },
      text: {
        primary: '#FAFAFA',
        secondary: '#A1A1A1',
        disabled: '#456485',
      },
      divider: '#2C5886',
    },
  });

 export const customTheme = createTheme(theme,{
    components:{
             // Customize the InputLabel component
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.primary, // Default label color
                    border: theme.palette.text.primary, // Default label color
                    '&.Mui-focused': {
                        color: theme.palette.text.primary, // Label color when the Select is focused
                    },
                    '&.Mui-disabled': {
                        color: '#a0a0a0', // Label color when disabled
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
              root: ({ theme }:{ theme: Theme }) => ({
                borderRadius: 6,
                // Optional: Ensure consistent styling across variants
                '& label.Mui-focused': {
                  color: theme.palette.text.primary
                },
                '& .MuiInput-underline:before': { // Target the "before" pseudo-element (the resting underline)
                    borderBottomColor: theme.palette.text.primary, // Change the resting underline color
                  },
                // Customize different input variants
                '&.MuiTextField-root': {
                  // Standard variant customization
                  '& .MuiInput-underline:after': {
                    borderBottomColor: theme.palette.primary.main,
                  },
                  '& .MuiInput-underline': {
                    borderBottomColor: theme.palette.primary.main,
                  },
                  
                 
                   
                },
              }),
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: ({theme}: { theme: Theme }) => ({
                // Base styles
                // borderRadius: theme.shape.borderRadius,
                borderRadius: 6,
                
                // Transition for smooth state changes
                transition: theme.transitions.create([
                  'border-color',
                  'box-shadow',
                  'background-color'
                ], {
                  duration: 200,
                }),
      
                // Default state border
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.divider,
                  borderWidth: 1,
                  transition: theme.transitions.create([
                    'border-color',
                    'border-width'
                  ]),
                },
      
                // Hover state
                '&:hover': {
                  backgroundColor: alpha(theme.palette.secondary.main, 0.01),
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.primary.main,
                  },
                },
      
                // Focus state
                '&.Mui-focused': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.secondary.main,
                    borderWidth: 1,
                  },
                  boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.dark, 0.1)}`,
                },
      
                // Error state
                '&.Mui-error': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.error.main,
                  },
                  '&.Mui-focused': {
                    boxShadow: `0 0 0 4px ${alpha(theme.palette.error.main, 0.1)}`,
                  },
                },
      
                // Disabled state
                '&.Mui-disabled': {
                  backgroundColor: alpha(theme.palette.action.disabled, 0.05),
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.action.disabled,
                  },
                },
      
                // Input padding and font styles
                '& input': {
                  padding: '12px 14px',
                  fontSize: theme.typography.body1.fontSize,
                  '&::placeholder': {
                    color: theme.palette.text.secondary,
                    opacity: 0.7,
                  },
                },
              }),
      
              // Size variants
              sizeSmall: {
                '& input': {
                  padding: '8px 10px',
                  fontSize: theme.typography.body2.fontSize,
                },
              },
      
              sizeLarge: {
                '& input': {
                  padding: '16px 18px',
                  fontSize: theme.typography.h6.fontSize,
                },
              },
      
              // Multiline variant
              multiline: {
                padding: '8px 12px',
              },
            },
      
            defaultProps: {
              size: 'medium',
            },
          },
    }
})
 
export const tableTheme = createTheme(theme,{
    components: {
        MuiTableContainer: {
            styleOverrides: {
              root: {
                backgroundColor: 'transparent',
              },
            },
          },
          MuiTable: {
            styleOverrides: {
              root: {
                borderCollapse: 'collapse',
              },
            },
          },
          MuiTableHead: {
            styleOverrides: {
              root: {
                backgroundColor: 'transp',
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                // border: 1px solid rgba(255, 255, 255, 0.3);
              },
            },
          },
          MuiTableCell: {
            styleOverrides: {
              head: {
                fontWeight: 'bold',
              },
            },
          },
          MuiTableRow: {
            styleOverrides: () => ({
              root: {
                '&:last-child td, &:last-child th': { border: 0 },
              },
              // Target even rows:
              even: {
                backgroundColor: 'transparent', // Or a custom color
              },
              // Target odd rows:
              odd: {
                backgroundColor: 'red', // Or a custom color
              },
            }),
          },
      },
})
 

 

 