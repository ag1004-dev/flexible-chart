//Importing stuff
import React from 'react';

import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend, ScriptableContext, } from "chart.js";
import { Chart as ReactChart, Line } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Filler, Legend, CategoryScale, LinearScale, PointElement, LineElement);

// init our Line Chart with gradient of course

const CoinPriceChart = (props) => {

    const data = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
        datasets: [
            {
                data: [22, 45, 23, 41, 18, 11, 32, 31, 63, 54, 45, 49, 54, 36],
                pointRadius: 0,
                pointHoverRadius: 2,
                backgroundColor: (context: ScriptableContext<"line">) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 250);
                    gradient.addColorStop(0, "rgba(91,56,237,0.45)");
                    gradient.addColorStop(1, "rgba(91,56,237,0.0)");
                    return gradient;
                }, //background gradient color
                borderColor: "rgba(91,56,237,255)", //line color
                fill: true, // this line allow us to use background gradient

            }
        ],
    };


    return (
        <div
            {...props}
        >
            <Line id="myChart" data={data} /> 
        </div>
    );
};

export default CoinPriceChart;

