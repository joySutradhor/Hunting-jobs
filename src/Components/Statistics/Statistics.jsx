import React from 'react';
import { PieChart, Pie } from "recharts";

const Statistics = () => {
    const data01 = [
        { name: "Group A", value: 30 },
        { name: "Group B", value: 60 },
        { name: "Group C", value: 60},
        { name: "Group E", value: 60 },
        { name: "Group F", value: 60 },
        { name: "Group G", value: 60},
        { name: "Group H", value: 60 },
        { name: "Group I", value: 60 },
    ];
    const data02 = [
        { name: "A1", value: 30 },
        { name: "A2", value: 60 },
        { name: "A3", value: 60 },
        { name: "A4", value: 60 },
        { name: "A5", value: 60 },
        { name: "A6", value: 60 },
        { name: "A7", value: 60 },
        { name: "A8", value: 60 },

    ];
    return (
        <div className='mx-20 flex justify-center items-center'>
           <div className='flex flex-col justify-center text-center'>
           <PieChart width={400} height={400}>
                <Pie
                    data={data01}
                    dataKey="value"
                    cx={200}
                    cy={200}
                    outerRadius={60}
                    fill="#8884d8"
                />

                <Pie
                    data={data02}
                    dataKey="value"
                    cx={200}
                    cy={200}
                    innerRadius={50}
                    outerRadius={150}
                    fill="#82ca9d"
                    label
                />
            </PieChart>
            <h2 className='font-semibold'>Total Assignment : 08 </h2>
            <h2 className='p-2 font-semibold'>Assignment Result Statistics</h2>
           </div>
        </div>
    );
};

export default Statistics;