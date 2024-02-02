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

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const categories = ['Home', 'Food', 'Transport', 'Health', 'Education', 'Phone', 'Clothes', 'Entertainment', 'Other'];
    const expenses = [
        { date: '2024-01-26', category: 'Home', description: 'Monthly rent', amount: 200 },
        { date: '2024-01-27', category: 'Food', description: 'Groceries', amount: 300 },
        { date: '2024-01-28', category: 'Transport', description: 'Fuel', amount: 150 },
        { date: '2024-01-29', category: 'Health', description: 'Medicines', amount: 100 },
        { date: '2024-01-30', category: 'Education', description: 'Books', amount: 80 },
        { date: '2024-02-01', category: 'Phone', description: 'Phone bill', amount: 50 },
        { date: '2024-02-02', category: 'Clothes', description: 'T-shirt', amount: 70 },
        { date: '2024-02-03', category: 'Entertainment', description: 'Movie tickets', amount: 120 },
        { date: '2024-02-04', category: 'Other', description: 'Miscellaneous', amount: 90 }
    ]; 

    const chartOptions = {
        series: expenses.map(expense => expense.amount),
        chart: {
            type: 'donut',
            height: 500,
        },
        labels: categories,
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 500
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$" + val
                }
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '35%',
                    labels: {
                        show: true,
                        name: {
                            offsetY: 20
                        },
                        value: {
                            offsetY: -20,
                            formatter: function (val) {
                                return "$" + val;
                            }
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                }, 0)
                            }
                        }
                    }
                }
            }
        }
    };

    const chart = new ApexCharts(document.querySelector('#chart'), chartOptions);
    chart.render();

    // Populate expense details table
// Populate expense details table
const tbody = document.querySelector('.expense-details table tbody');
for (let i = 0; i < expenses.length; i++) {
    const percentage = ((expenses[i].amount / getTotalAmount(expenses)) * 100).toFixed(3); // Adjusted to 3 decimal places
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${expenses[i].date}</td>
        <td>${expenses[i].category}</td>
        <td>${expenses[i].description}</td>
        <td>${percentage}%</td>
        <td>$${expenses[i].amount}</td>
    `;
    tbody.appendChild(tr);
}

});

// Function to calculate total amount
function getTotalAmount(expenses) {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}
