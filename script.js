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
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ], // Months of the year
    datasets: [
      {
        label: 'Electricity Theft Incidents',
        data: [12, 22, 34, 41, 52, 63, 96, 85, 96, 102, 118, 130], // Example data points for theft incidents (one per month)
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

// Data for rankings (added more details for the new columns)
const rankings = {
  2024: [
    { rank: 1, country: "Country A", loss: "5%", cost: 3.2, theft: 1200 },
    { rank: 2, country: "Country B", loss: "6%", cost: 4.1, theft: 1400 },
    { rank: 3, country: "Country C", loss: "7%", cost: 5.3, theft: 1600 },
  ],
  2023: [
    { rank: 1, country: "Country X", loss: "4.5%", cost: 2.9, theft: 1100 },
    { rank: 2, country: "Country Y", loss: "5.5%", cost: 3.7, theft: 1350 },
    { rank: 3, country: "Country Z", loss: "6.5%", cost: 4.8, theft: 1500 },
  ],
  2022: [
    { rank: 1, country: "Country P", loss: "6%", cost: 3.8, theft: 1250 },
    { rank: 2, country: "Country Q", loss: "6.5%", cost: 4.5, theft: 1450 },
    { rank: 3, country: "Country R", loss: "7.2%", cost: 5.9, theft: 1700 },
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
        <td>${entry.cost}</td>
        <td>${entry.theft}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Initialize table with the default year (2024)
document.addEventListener("DOMContentLoaded", () => {
  updateRankingTable();
});
