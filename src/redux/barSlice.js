import { createSlice } from "@reduxjs/toolkit";

export const barSlice = createSlice({
    name: 'bar',
    initialState: {
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart - Stacked',
                },
            },
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                },
            },
        },
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [605, 117, 644, 312, 339, 502, 459],
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
                {
                    label: 'Dataset 2',
                    data: [838, 582, 300, 446, 259, 524, 92],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],
        },
    },
    reducers: {
        updateLabels: (state, action) => {
            state.data.labels = action.payload;
        },
        updateData: (state, action) => {
            const { datasetIndex, data } = action.payload;
            state.data.datasets[datasetIndex].data = data;
        },
    },
});

export const { updateData, updateLabels } = barSlice.actions;
export default barSlice.reducer;