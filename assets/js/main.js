/*Navbar Js Start Here*/
let ul = document.getElementById('navul'),
    openIcon = document.getElementById('open'),
    closeIcon = document.getElementById('close');

openIcon.onclick = function () {
    openIcon.style.display = "none"
    ul.style.right = "0px"
    closeIcon.style.display = "inherit"
}
closeIcon.onclick = function () {
    closeIcon.style.display = "none"
    ul.style.right = "-250px"
    openIcon.style.display = "inherit"
}
/*Navbar Js End Here*/
/*Bar-Chart Start here Here*/
const barChart1 = document.getElementById('barChart1').getContext('2d');
const myChart1 = new Chart(barChart1, {
    type: 'bar',
    data: {
        labels: ['Facebook', 'Instagram', 'Youtube', 'LinkedIn', 'Twitter'],
        datasets: [{
            data: [720, 620, 520, 420, 320],
            label: "Response",
            backgroundColor: [
                "#616879",
                "#727171",
                "#F2C94D",
                "#70CF97",
                "#27AE61"
            ],
            borderRadius: 15,
        }]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    color: 'green',
                }
            }
        },
        scales: {
            y: {
                min: 0,
                ticks: {
                    stepSize: 250
                }
            }
        }
    }
})
/*Bar-Chart End here Here*/
/*Line-Chart Start here Here*/
const lineChart1 = document.getElementById('lineChart1').getContext('2d');
const myChart2 = new Chart(lineChart1, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [{
                label: 'Facebook Response',
                data: [324, 345, 232, 233, 453, 342, 233],
                borderColor: 'red'
            },
            {
                label: 'Twitter Response',
                data: [232, 543, 232, 345, 233, 532, 344],
                borderColor: 'green',
            },
            {
                label: 'Instagram Response',
                data: [342, 533, 334, 343, 543, 334, 344],
                borderColor: 'blue'
            }
        ]
    },
    options: {
        scales: {
            y: {
                min: 0,
                ticks: {
                    stepSize: 250
                }
            }
        }
    }
})
/*Line-Chart End here Here*/
/*Radar-Chart start here Here*/
const radarChart1 = document.getElementById('radarChart1').getContext('2d');
const myChart3 = new Chart(radarChart1, {
    type: 'radar',
    data: {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [{
            label: '1st Data',
            data: [75, 45, 23, 45, 55, 45, 44],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
    }
})
/*Radar-Chart End here Here*/
/*Doughnut-Chart Start here Here*/
const doughnutChart1 = document.getElementById('doughnutChart1').getContext('2d');
const myChart4 = new Chart(doughnutChart1, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Green'],
        datasets: [{
            labels: 'Colours',
            data: [200, 150, 350],
            backgroundColor: ['red', 'blue', 'green'],
            hoverOffset: 4,
        }]
    },
})
/*Doughnut-Chart End here Here*/
/*Pie-Chart Start here Here*/
const pieChart1 = document.getElementById('pieChart1').getContext('2d');
const myChart5 = new Chart(pieChart1, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Green'],
        datasets: [{
            labels: 'Colours',
            data: [250, 150, 350],
            backgroundColor: ['red', 'blue', 'green'],
            hoverOffset: 4
        }]
    }
})
/*Pie-Chart End here Here*/
/*Polar-Area-Chart Start here Here*/
const polarAreaChart1 = document.getElementById('polarAreaChart1').getContext('2d');
const myChart6 = new Chart(polarAreaChart1, {
    type: 'polarArea',
    data: {
        labels: ['Red', 'Blue', 'Green', 'Yellow'],
        datasets: [{
            label: 'Colours',
            data: [34, 45, 56, 43],
            backgroundColor: ['red', 'blue', 'green', 'yellow']
        }]
    }
})
/*Polar-Area-Chart End here Here*/