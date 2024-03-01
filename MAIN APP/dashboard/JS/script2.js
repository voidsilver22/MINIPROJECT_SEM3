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

// Function to remove an expense
function removeExpense(index) {
    expenses.splice(index, 1); // Remove expense from array
    updateTableAndChart(); // Update table and chart
}

document.addEventListener('DOMContentLoaded', function() {
    let expenses = []; // Array to store user expenses

    const expenseForm = document.getElementById('expenseForm');
    const tableBody = document.getElementById('expenseTableBody');

    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const date = expenseForm.elements.date.value;
        const category = expenseForm.elements.category.value;
        const description = expenseForm.elements.description.value;
        const amount = parseFloat(expenseForm.elements.amount.value);

        // Validate amount
        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        // Add expense to array
        expenses.push({ date, category, description, amount });

        // Reset form fields
        expenseForm.reset();

        // Update table and chart
        updateTableAndChart();
    });

    // Function to update table and chart
    function updateTableAndChart() {
        tableBody.innerHTML = ''; // Clear existing rows

        // Populate table and calculate percentages
        expenses.forEach(function(expense, index) {
            const percentage = ((expense.amount / getTotalAmount(expenses)) * 100).toFixed(2);
            const row = `
                <tr>
                    <td>${expense.date}</td>
                    <td>${expense.category}</td>
                    <td>${expense.description}</td>
                    <td>${percentage}%</td>
                    <td>$${expense.amount}</td>
                    <td><button onclick="removeExpense(${index})">Remove</button></td>
                </tr>
            `;
            tableBody.insertAdjacentHTML('beforeend', row);
        });

        // Update chart
        updateDonutChart();
    }

    // Function to update the donut chart
    function updateDonutChart() {
        // Retrieve data for chart
        const categories = expenses.map(expense => expense.category);
        const amounts = expenses.map(expense => expense.amount);

        // Chart configuration
        const chartOptions = {
            series: amounts,
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
    }

    // Function to calculate total amount
    function getTotalAmount(expenses) {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    }
});
