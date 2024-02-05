document.addEventListener('DOMContentLoaded', function() {
  var ctx = document.getElementById('myBarChart').getContext('2d');
  var ctx2 = document.getElementById('myBarChart2').getContext('2d');
  var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          beginAtZero: true
        }
      },
      indexAxis: 'x', // Use 'y' for vertical double bar graph
      barThickness: 50
      , // Adjust this value to change the gap between bars
      categoryPercentage: 10, // Adjust this value to change the width of bars
    }
  });
  var myBarChart2 = new Chart(ctx2, {
    type: 'bar',
    data: barChartData2,
    options: {
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          beginAtZero: true
        }
      },
      indexAxis: 'x', // Use 'y' for vertical double bar graph
      barThickness: 50
      , // Adjust this value to change the gap between bars
      categoryPercentage: 10, // Adjust this value to change the width of bars
    }
  });
});
