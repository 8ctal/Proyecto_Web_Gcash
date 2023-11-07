const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const formContainer = document.getElementById('form-container');

function showLoginForm() {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    loginBtn.disabled = true;
    signupBtn.disabled = false;
}

function showSignupForm() {
    signupForm.style.display = "block";
    loginForm.style.display = "none";
    signupBtn.disabled = true;
    loginBtn.disabled = false;
}
loginBtn.addEventListener('click', showLoginForm);
signupBtn.addEventListener('click', showSignupForm);


formContainer.style.display = 'flex';
formContainer.style.justifyContent = 'center';
formContainer.style.alignItems = 'center';

//ANIMATIONS
var ctx = document.getElementById('balance-chart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Balance'],
        datasets: [{
            label: 'Balance',
            data: [5000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            animateScale: true,
            animateRotate: true
        },
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        }
    }
});

// Home Page

function changeStatus(select) {
    var row = select.parentNode.parentNode;
    var status = row.cells[2];
    status.innerHTML = select.value;
}