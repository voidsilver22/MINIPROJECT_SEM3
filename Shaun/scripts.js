// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

const areaChartOptions = {
  series: [
    // {
    //   name: 'Expenses',
    //   data: [200, 300, 250, 400, 350, 500, 450, 300, 350, 400, 450, 500],
    // },
    {
      name: 'Goals',
      data: [250, 350, 300, 450, 400, 550, 500, 400, 450, 500, 550, 600],
    },
  ],
  chart: {
    height: 500,
    type: 'line',
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#4f35a1'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  markers: {
    size: 5,
  },
  yaxis: [
    {
      title: {
        text: 'Amount ($)',
      },
      tickAmount: 8, // Adjust the number of ticks on the Y-axis
      max: 700
    },
    {
      opposite: true,
      title: {
        text: 'Goals ($)',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (val) {
        return "$" + val
      }
    }
  },

  annotations: {
    xaxis: [
      {
        x: 'Jan',
        strokeDashArray: 0,
        borderColor: '#e0e0e0',
      },
      {
        x: 'Feb',
        strokeDashArray: 0,
        borderColor: '#e0e0e0',
      },
      {
        x: 'Mar',
        strokeDashArray: 0,
        borderColor: '#e0e0e0',
      },
      {
        x: 'Apr',
        strokeDashArray: 0,
        borderColor: '#e0e0e0',
      },
      {
        x: 'May',
        strokeDashArray: 0,
        borderColor: '#e0e0e0',
      },
      {
        x: 'Jun',
        strokeDashArray: 0,
        borderColor: '#e0e0e0',
      },
      {
        x: 'Jul',
        strokeDashArray: 0,
        borderColor: '#e0e0e0',
      },
      {
        x: 'Aug',
        strokeDashArray: 0,
        borderColor: '#e0e0e0',
      },
      {
        x: 'Sept',
        strokeDashArray: 0,
        borderColor: '#e0e0e0',
      },
      {
        x: 'Oct',
        strokeDashArray: 0,
        borderColor: '#e0e0e0',
      },
      {
        x: 'Nov',
        strokeDashArray: 0,
        borderColor: '#e0e0e0',
      },
      {
        x: 'Dec',
        strokeDashArray: 0,
        borderColor: '#e0e0e0',
      }
    ]
  }

};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();



