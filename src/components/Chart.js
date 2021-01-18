import React from 'react'
import { Line } from 'react-chartjs-2';

const Chart = ({country, chartLabels, chartValues}) => {
        
    const chooseColor = () => {
        const random = [];
        for (let i = 0; i < 3; i++) {
          random.push(Math.floor(Math.random()*256));
        }
        return random;
      }
    const formatColor = (ary) => {
        return 'rgb(' + ary.join(', ') + ')';
      }

    const data = {
        labels: chartLabels,//['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: country,//'2020 (M)',
                data: chartValues,//[12, 19, 4, 6, 9],
                backgroundColor: formatColor(chooseColor()),
                borderColor: formatColor(chooseColor()),
                pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
                pointBorderColor: 'rgba(255, 206, 86, 0.2)',
                borderWidth: 0.5
            }
        ],
    }
    return (
        <div>
            <Line
                data={data}
                // width={600}
                // height={400}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true
                                }
                            }
                        ]
                    }
                }}
            />
        </div>
    )
}

export default Chart
