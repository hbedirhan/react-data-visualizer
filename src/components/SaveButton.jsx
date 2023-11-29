import React from 'react'

function SaveButton({ setData, data, labels, setLabels, stopGeneratingData }) {

    const saveData = () => {
        localStorage.setItem('data', JSON.stringify(data));
        localStorage.setItem('labels', JSON.stringify(labels));
        stopGeneratingData();
    };
    const loadData = () => {
        setData(JSON.parse(localStorage.getItem('data')));
        setLabels(JSON.parse(localStorage.getItem('labels')));
    };

    return (
        <>
            <button className='btn' onClick={saveData}>Save</button>
            <button className='btn' onClick={loadData}>Load</button>
        </>
    )
}

export default SaveButton