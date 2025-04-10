// Диаграмма Doughnut
new Chart(document.getElementById('pieDoughnutChart'), {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [{
      data: [300, 50, 100, 200],
      backgroundColor: ['red', 'blue', 'yellow', 'green']
    }]
  }
});

// Диаграмма Radar
new Chart(document.getElementById('radarChart'), {
  type: 'radar',
  data: {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding'],
    datasets: [{
      data: [65, 59, 90, 81, 56],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: { scales: { r: { beginAtZero: true, max: 100 } } }
});
