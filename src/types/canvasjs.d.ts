declare module '@canvasjs/charts' {
    export class CanvasJSChart {
        constructor(containerId: string | HTMLElement, options: CanvasJSChartOptions);
        render(): void;
        destroy(): void;
    }
    export interface CanvasJSChartOptions {
        // ... (Add more options as you use them)
          title?: {
              text?: string;
              fontColor?: string;
              fontSize?: number;
              fontWeight?: string;
              horizontalAlign?: string;
              padding?: {
                  top?: number;
                  right?: number;
                  bottom?: number;
                  left?: number;
              }
          };
          animationEnabled?: boolean;
          backgroundColor?: string;
          axisX?: {
              labelFontColor?: string;
          };
          axisY?: {
              labelFontColor?: string;
          };
          data?: [{
              type?: string;
              showInLegend?: boolean;
              legendText?: string;
              indexLabel?: string;
              indexLabelFontColor?: string;
              toolTipContent?: string;
              dataPoints?: [{
                  label?: string;
                  y?: number;
                  color?: string;
              }];
          }];
          toolTip?: {
              animationEnabled?: boolean;
              contentFormatter?: (e: any) => string;
          };
      }
  }