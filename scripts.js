// Navigate to overview.html when clicking the overview card
document.getElementById("overview-card").addEventListener("click", function () {
    window.location.href = "overview.html";
});

// Navigate to transaction_analysis.html when clicking the transaction card
document.getElementById("transaction-card").addEventListener("click", function () {
    window.location.href = "transaction_analysis.html";
});

// Navigate to reports_logs.html when clicking the reports card
document.getElementById("reports-card").addEventListener("click", function () {
    window.location.href = "reports_logs.html";
});

// Navigate to system_settings.html when clicking the system settings card
document.getElementById("settings-card").addEventListener("click", function () {
    window.location.href = "system_settings.html";
});

// Chart.js is used for charts, you can add the library via CDN in your HTML file
const ctx = document.getElementById('transactionChart').getContext('2d');
const transactionChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Transaction Volume',
            data: [1200, 1900, 3000, 5000, 2000, 3000],
            borderColor: 'rgba(0, 112, 186, 0.8)',
            backgroundColor: 'rgba(0, 112, 186, 0.1)',
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Example function to populate the transaction table with sample data
const transactions = [
    { id: 'TX12345', user: 'User1', amount: '$500', status: 'Flagged' },
    { id: 'TX12346', user: 'User2', amount: '$1200', status: 'Pending' },
    { id: 'TX12347', user: 'User3', amount: '$150', status: 'Cleared' }
];

const transactionTableBody = document.getElementById('transactionTableBody');
transactions.forEach(transaction => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${transaction.id}</td>
        <td>${transaction.user}</td>
        <td>${transaction.amount}</td>
        <td>${transaction.status}</td>
        <td><button>Action</button></td>
    `;
    transactionTableBody.appendChild(row);
});
document.addEventListener('DOMContentLoaded', function () {
    // Simulate loading data on the Overview page
    if (document.getElementById('data-overview')) {
        document.getElementById('data-overview').style.opacity = 0;
        setTimeout(() => {
            document.getElementById('data-overview').style.opacity = 1;
        }, 500);
    }

    // Add click event listeners for each table row (just for demo)
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        row.addEventListener('click', () => {
            alert('You clicked on a transaction.');
        });
    });
});
// Navigate to overview.html when clicking the overview card
document.getElementById("overview-card").addEventListener("click", function () {
    window.location.href = "overview.html";
});

// Navigate to transaction_analysis.html when clicking the transaction card
document.getElementById("transaction-card").addEventListener("click", function () {
    window.location.href = "transaction_analysis.html";
});

// Navigate to reports_logs.html when clicking the reports card
document.getElementById("reports-card").addEventListener("click", function () {
    window.location.href = "reports_logs.html";
});

// Navigate to system_settings.html when clicking the system settings card
document.getElementById("settings-card").addEventListener("click", function () {
    window.location.href = "system_settings.html";
});

// Fake data for the chart on the overview page
const overviewCtx = document.getElementById('overviewChart').getContext('2d');
const overviewChart = new Chart(overviewCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Transaction Volume',
            data: [1200, 1500, 1800, 2000, 2300, 2200, 2500, 3000, 3500, 4000, 4200, 4500],
            borderColor: 'rgba(0, 112, 186, 0.8)',
            backgroundColor: 'rgba(0, 112, 186, 0.1)',
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});




// Fake data for suspicious transactions
const overviewTransactions = [
    { id: 'TX20231101', user: 'User123', amount: '$750', status: 'Flagged' },
    { id: 'TX20231102', user: 'User456', amount: '$1200', status: 'Under Review' },
    { id: 'TX20231103', user: 'User789', amount: '$3400', status: 'Flagged' },
    { id: 'TX20231104', user: 'User101', amount: '$500', status: 'Pending' },
    { id: 'TX20231105', user: 'User202', amount: '$90', status: 'Cleared' }
];

// Populate the suspicious transactions table on the overview page
const overviewTransactionTableBody = document.getElementById('overviewTransactionTable');
overviewTransactions.forEach(transaction => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${transaction.id}</td>
        <td>${transaction.user}</td>
        <td>${transaction.amount}</td>
        <td>${transaction.status}</td>
        <td><button>Action</button></td>
    `;
    overviewTransactionTableBody.appendChild(row);
});

// Simulate data loading with a fade-in effect for the overview content
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('data-overview')) {
        document.getElementById('data-overview').style.opacity = 0;
        setTimeout(() => {
            document.getElementById('data-overview').style.opacity = 1;
        }, 500);
    }
});



