import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import BarChart from './components/BarChart';
import Input from './components/Input';
import DataGenerator from './components/DataGenerator';
import SaveButton from './components/SaveButton';

function App() {
  const [running, setRunning] = useState(false);
  const [data, setData] = useState({
    dataSet1: [],
    dataSet2: [],
  });
  const [interval, setInterval] = useState(1000);
  const [numberRange, setNumberRange] = useState(10);
  const [labels, setLabels] = useState([]);

  const startGeneratingData = () => {
    if (interval >= 1 && numberRange >= 1) {
      setRunning(true)
    }
  };
  const stopGeneratingData = () => setRunning(false);

  return (
    <>
      <SaveButton
        data={data}
        labels={labels}
        setData={setData}
        setLabels={setLabels}
        stopGeneratingData={stopGeneratingData} />
      <Input
        setInterval={setInterval}
        interval={interval}
        setNumberRange={setNumberRange}
        numberRange={numberRange} />
      <DataGenerator
        setData={setData}
        running={running}
        interval={interval}
        numberRange={numberRange}
        setLabels={setLabels}
      />
      <BarChart
        datasets={data}
        labels={labels} />
      <Button
        startGeneratingData={startGeneratingData}
        stopGeneratingData={stopGeneratingData} />
    </>
  );
}

export default App;
