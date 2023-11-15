import React, { useEffect, useRef } from "react";
import 'bulma/css/bulma.min.css';
import { ColorType, createChart } from 'lightweight-charts';


export const Grafico = () => {

    const chartContainerRef = useRef();

    useEffect(() => {

        const initialData = [
            { time: '2018-12-21', value: 33.61 },
            { time: '2018-12-22', value: 32.51 },
            { time: '2018-12-23', value: 31.11 },
            { time: '2018-12-24', value: 27.02 },
            { time: '2018-12-25', value: 27.32 },
            { time: '2018-12-26', value: 25.17 },
            { time: '2018-12-27', value: 28.89 },
            { time: '2018-12-28', value: 25.46 },
            { time: '2018-12-29', value: 23.92 },
            { time: '2018-12-30', value: 22.68 },
            { time: '2018-12-31', value: 22.67 },
        ];









        const chart = createChart(chartContainerRef.current, {

             layout: {

                background: {type: ColorType.Solid, color: "white" },

             },


           width: chartContainerRef.current.clientwidth,
           height: 400, 

        });


        const newSeries = chart.addAreaSeries({
        
          lineColor: "purple",
          topColor: "yellow",
          bottomColor: "purple",

        }); 


       newSeries.setData(initialData);




       return () => [ chart.remove()]; 

       

       
    },  []);







    return (

    <div ref={chartContainerRef}>     </div>


    )
    


    }