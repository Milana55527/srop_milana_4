window.addEventListener('DOMContentLoaded', () => {
  // Doughnut Chart
  const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
  new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
      labels: ['Apples', 'Bananas', 'Cherries', 'Grapes'],
      datasets: [{
        data: [25, 15, 30, 30],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)'
        ],
        borderColor: '#fff',
        borderWidth: 3,
        hoverOffset: 20
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#333',
            font: {
              size: 14
            }
          }
        }
      }
    }
  });

  // Radar Chart
  const radarCtx = document.getElementById('radarChart').getContext('2d');
  new Chart(radarCtx, {
    type: 'radar',
    data: {
      labels: ['Speed', 'Strength', 'Agility', 'Endurance', 'Intelligence', 'Luck'],
      datasets: [{
        label: 'Player Stats',
        data: [80, 60, 75, 90, 70, 65],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.3)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          angleLines: {
            color: '#ccc'
          },
          grid: {
            color: '#ddd'
          },
          pointLabels: {
            color: '#333'
          },
          ticks: {
            color: '#333',
            backdropColor: 'transparent'
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: '#333',
            font: {
              size: 14
            }
          }
        }
      }
    }
  });
});
