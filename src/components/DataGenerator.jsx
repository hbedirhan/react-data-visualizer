import { useEffect } from 'react';

const DataGenerator = ({ setData, running, interval, numberRange, setLabels }) => {

  useEffect(() => {
    const generateRandomNumber = () => Math.floor(Math.random() * numberRange) + 1;

    if (running) {
      const intervalId = setInterval(() => {
        const newData1 = generateRandomNumber();
        const newData2 = generateRandomNumber();

        setLabels((prevLabels) => [...prevLabels, (prevLabels.length + 1).toString()]);

        setData((prevData) => {
          return {
            ...prevData,
            dataSet1: [...prevData.dataSet1, newData1],
            dataSet2: [...prevData.dataSet2, newData2],
          };
        });
      }, interval);

      return () => clearInterval(intervalId);
    }
  }, [running, interval, numberRange, setLabels, setData]);

  return null;
};

export default DataGenerator;
