import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { getStoredDonations } from "../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
    const donations = useLoaderData();
    const [allDonations, setAllDonations] = useState([]);
    const [filteredDonations, setFilteredDonations] = useState([]);

    useEffect(() => {
        const storedDonations = getStoredDonations();
        if (donations.length) {
            const donated = donations.filter(donate => storedDonations.includes(donate.id));
            setAllDonations(donations);
            setFilteredDonations(donated);
        }
    }, [donations]);


    const totalAllDonations = allDonations.reduce(
        (total, donation) => total + (donation.donation_price || 0),
        0
    );


    const totalFilteredDonations = filteredDonations.reduce(
        (total, donation) => total + (donation.donation_price || 0),
        0
    );


    const total = totalAllDonations + totalFilteredDonations;
    const percentAllDonations = (totalAllDonations / total) * 100;
    const percentFilteredDonations = (totalFilteredDonations / total) * 100;

    const data = [
        { name: "Total Donation", value: percentAllDonations },
        { name: "Your Donation", value: percentFilteredDonations },
    ];

    const COLORS = ["#FF444A", "#00C49F"];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="-mt-16 w-11/12 mx-auto flex justify-center items-center">
            <PieChart width={600} height={600}>
                <Pie
                    data={data}
                    cx={300}
                    cy={300}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((_, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip /> 
                <Legend />
            </PieChart>
        </div>
    );
};

export default Statistics;
