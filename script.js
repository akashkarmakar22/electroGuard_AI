document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});


function copyCode(codeId) {
  const code = document.getElementById(codeId).textContent;
  navigator.clipboard
    .writeText(code)
    .then(() => {
      alert("Code copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy code: ", err);
      alert("Failed to copy code to clipboard. Please manually copy the code.");
    });
}

function toggleCode(codeId) {
  const card = document.getElementById(codeId);
  card.classList.toggle("show-more-visible");
}


// Data for electricity theft/loss in India (fictional values in GWh)
const ctx = document.getElementById('electricityChart').getContext('2d');
const electricityChart = new Chart(ctx, {
  type: 'bar', // Bar chart to represent theft incidents
  data: {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ], // Months of the year
    datasets: [
      {
        label: 'Electricity Theft Incidents',
        data: [15, 25, 40, 60, 85, 110, 125, 120, 100, 75, 50, 35], // Example data points for theft incidents (one per month)
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red background color
        borderColor: 'rgba(255, 99, 132, 1)', // Darker red border color
        borderWidth: 2,
        barPercentage: 0.5, // Adjust bar width
        categoryPercentage: 0.5, // Adjust spacing between bars
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333', // Customize label color
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months', // Label for the X-axis
          color: '#333',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Incidents', // Label for the Y-axis
          color: '#333',
        },
        beginAtZero: true,
      },
    },
  },
});

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-images img");
    const totalSlides = slides.length;

    currentSlide = (index + totalSlides) % totalSlides;

    const offset = -currentSlide * 100; // Calculate offset for sliding
    document.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Data for rankings (5 rows per year)
const rankings = {
  2024: [
    { rank: 1, country: "Brazil", loss: "16%" },
    { rank: 2, country: "India", loss: "15%" },
    { rank: 3, country: "Nigeria", loss: "14%" },
    { rank: 4, country: "Pakistan", loss: "12%" },
    { rank: 5, country: "South Africa", loss: "11%" },
  ],
  2023: [
    { rank: 1, country: "Brazil", loss: "15.5%" },
    { rank: 2, country: "India", loss: "14.8%" },
    { rank: 3, country: "Nigeria", loss: "14.2%" },
    { rank: 4, country: "Pakistan", loss: "13%" },
    { rank: 5, country: "South Africa", loss: "12%" },
  ],
  2022: [
    { rank: 1, country: "Brazil", loss: "15%" },
    { rank: 2, country: "India", loss: "14.5%" },
    { rank: 3, country: "Nigeria", loss: "13.8%" },
    { rank: 4, country: "Pakistan", loss: "13.5%" },
    { rank: 5, country: "South Africa", loss: "12.5%" },
  ],
};


// Update year label when slider is moved
function updateYearLabel(year) {
  document.getElementById("year-label").textContent = year;
}

// Update ranking table when slider value changes
function updateRankingTable() {
  const year = document.getElementById("year-slider").value;
  const tableBody = document.getElementById("ranking-body");

  // Clear existing rows
  tableBody.innerHTML = "";

  // Insert new rows
  rankings[year].forEach((entry) => {
    const row = `
      <tr>
        <td>${entry.rank}</td>
        <td>${entry.country}</td>
        <td>${entry.loss}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Initialize table with the default year (2024)
document.addEventListener("DOMContentLoaded", () => {
  updateRankingTable();
});
