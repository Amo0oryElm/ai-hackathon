// types/canvasjs.d.ts (Partial Type Definitions - Add more as needed)
 
 


// CanvasJSReact.js (Converted to ES Modules)
import React from 'react';
import * as CanvasJS from '@canvasjs/charts';

// Handle global CanvasJS if it exists (important for some setups)
const globalCanvasJS = typeof window !== 'undefined' && window.CanvasJS;
const usedCanvasJS = CanvasJS.Chart ? CanvasJS : globalCanvasJS || CanvasJS; // Use global if available, fallback to imported

class CanvasJSChart extends React.Component {
    constructor(props) {
        super(props);
        this.options = props.options || {};
        this.containerProps = props.containerProps ? { ...props.containerProps } : { width: "100%", position: "relative" };
        this.containerProps.height = props.containerProps && props.containerProps.height ? props.containerProps.height : this.options.height ? this.options.height + "px" : "400px";
        this.containerRef = React.createRef();
    }

    componentDidMount() {
        this.chart = new usedCanvasJS.Chart(this.containerRef.current, this.options);
        this.chart.render();

        if (this.props.onRef) {
            this.props.onRef(this.chart);
        }
    }

    shouldComponentUpdate(nextProps) {
        return !(nextProps.options === this.options);
    }

    componentDidUpdate() {
        this.chart.options = this.props.options;
        this.chart.render();
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.destroy();
        }

        if (this.props.onRef) {
            this.props.onRef(undefined);
        }
    }

    render() {
        return React.createElement('div', { id: this.props.id, ref: this.containerRef, style: this.containerProps });
    }
}

const CanvasJSReact = {
    CanvasJSChart: CanvasJSChart,
    CanvasJS: usedCanvasJS // Export the used CanvasJS
};

export default CanvasJSReact;