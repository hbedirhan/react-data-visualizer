import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { updateLabels, updateData } from '../redux/barSlice';


ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

function BarChart({ datasets, labels }) {

  const options = useSelector(state => state.barSlice.options);
  const data = useSelector(state => state.barSlice.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateData({ datasetIndex: 0, data: datasets.dataSet1 }));
    dispatch(updateData({ datasetIndex: 1, data: datasets.dataSet2 }));
    dispatch(updateLabels(labels));
  }, [datasets])

  return (
    <>
      <div className='container'>
        <div className='containerBody' style={{width: `${1200 + (labels.length- 7) * 30}px`}}>
          <Bar className='chart' options={options} data={data} />
        </div>
      </div>
    </>
  );
}

export default BarChart;