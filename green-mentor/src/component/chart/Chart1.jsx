import React, { useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line} from 'react-chartjs-2';

import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/action';
import Yoytable from './Yoytable';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Chart1() {
  const dispatch = useDispatch();
  const dateE = useSelector((pre) => pre.reducer.chartdatavalue);
  const Data_22 = dateE?.filter((el) => el.Year === 2022);
  const Data_23 = dateE?.filter((el) => el.Year === 2023);

  const Emission_22 = Data_22?.map((el) => el.Emissions);
  const RE_22 = Data_22?.map((el) => el.RE);

  const RE_23 = Data_23?.map((el) => el.RE);
  const Emission_23 = Data_23?.map((el) => el.Emissions);

  useEffect(() => {
    dispatch(getData());
  }, []);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "RE-2022",
        data: RE_22,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        yAxisID: 'y1',
      },
      {
        label: "RE-2023",
        data: RE_23,
        fill: false,
        borderColor: "#742774",
        yAxisID: 'y1',
      },
    //   {
    //     label: "Emission_22",
    //     data: Emission_22,
    //     fill: true,
    //     backgroundColor: "rgba(75,192,192,0.2)",
    //     borderColor: "rgba(75,192,192,1)",
    //     yAxisID: 'y',
    //   },
    //   {
    //     label: "Emission_23",
    //     data: Emission_23,
    //     fill: false,
    //     borderColor: "#742774",
    //     yAxisID: 'y',
    //   },
    //   {
    //     label: "bar Emission_22",
    //     data: Emission_22,
    //     backgroundColor: "rgba(255, 99, 132, 0.2)",
    //     borderColor: "rgba(255, 99, 132, 1)",
    //     yAxisID: 'y',
    //     type: 'bar',  // Use 'bar' instead of 'Bar'
    //   },
    //   {
    //     label: "bar Emission_23",
    //     data: Emission_23,
    //     backgroundColor: "rgba(54, 162, 235, 0.2)",
    //     borderColor: "rgba(54, 162, 235, 1)",
    //     yAxisID: 'y',
    //     type: 'bar',  // Use 'bar' instead of 'Bar'
    //   },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line and  Chart - Multi Axis',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'Emission/Revenue',
        },
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: 'R/E',
        },
      },
    },
  };

  return (
    <div className="App" id="Chart">
    <div className='Header'>
        <div>
            <img src='' />
             <p>Category-1</p>
        </div>
        <div></div>
    </div>
    <div className='Chart'>
    <Line options={options} data={data} />
    </div>
  
    
      {/* <Bar options={options} data={data} /> */}
      <div>
      <Table variant="simple">
      <Thead>
        <Tr>
          <Th fontSize="md">Month</Th>
          <Th fontSize="md">Emissions</Th>
          <Th fontSize="md">RE</Th>
          <Th fontSize="md">YOYRE</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Data_23.map((el, ind) => (
          <Tr key={ind}>
            <Td>{el.Month}</Td>
            <Td>{el.Emissions}</Td>
            <Td>{el.RE}</Td>
            <Td>{el.YOYRE}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
</div>

    </div>
  );
}

export default Chart1;
