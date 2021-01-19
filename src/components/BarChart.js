import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'

const options={
  legend: {
    display: false
},
  maintainAspectRatio: true,
  responsive: true,
  title: { text: "Crude Oil", display: true },
  scales: {
      yAxes: [
          {
              ticks: {
                  autoSkip: true,
                  maxTicksLimit: 15,
                  beginAtZero: true
              },
              gridLines: {
                  display: true
              }
          }
      ],
      xAxes: [
          {
              gridLines: {
                  display: true
              }
          }
      ]
  }
}
  
  

const BarChart = ({ countries, values }) => {

  //console.log("countries: "+ countries)
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
  labels: countries,
  datasets: [
    {
      label: 'Barrels ber day (kb/d)',
      data: values,
      backgroundColor: [
        formatColor(chooseColor()),formatColor(chooseColor()),formatColor(chooseColor()),formatColor(chooseColor()),formatColor(chooseColor()),
        formatColor(chooseColor()),formatColor(chooseColor()),formatColor(chooseColor()),formatColor(chooseColor()),formatColor(chooseColor()),
      ],
      borderColor: [
        formatColor(chooseColor()),formatColor(chooseColor()),formatColor(chooseColor()),formatColor(chooseColor()),formatColor(chooseColor()),
        formatColor(chooseColor()),formatColor(chooseColor()),formatColor(chooseColor()),formatColor(chooseColor()),formatColor(chooseColor()),
      ],
      borderWidth: 1,
    },
  ],
}

return(
    <>
    <HorizontalBar data={data} options={options} />
  </>
  );
  
}

export default BarChart