document.addEventListener("DOMContentLoaded", () => {
  const lineChart = document.querySelector("#lineChart");

  const labels = [
    "22 May",
    "23 May",
    "24 May",
    "25 May",
    "26 May",
    "27 May",
    "28 May",
    "29 May",
    "30 May",
    "31 May",
    "1 June",
    "2 June",
    "3 June",
    "4 June",
    "5 June",
    "6 June",
    "7 June",
    "8 June",
    "9 June",
  ];

  new Chart(lineChart, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Old Views",
          data: [
            1844, 1554, 1273, 1284, 1126, 946, 964, 1793, 1432, 1130, 1074, 954,
            856, 833, 1536, 1416, 1248, 1226,
          ],
          borderColor: "rgba(66, 138, 245, 1)",
        },
        {
          label: "New Views",
          data: [
            1199, 1314, 1147, 1403, 1217, 1015, 1138, 1272, 957, 862, 716, 712,
            610, 585, 847, 744, 756, 781,
          ],
          borderColor: "rgba(235, 134, 52, 1)",
        },
      ],
    },
  });
});

// PIE CHART

document.addEventListener("DOMContentLoaded", () => {
  const pieChart = document.querySelector("#pieChart");

  new Chart(pieChart, {
    type: "pie",
    data: {
      labels: ["Serbia", "BiH", "Croatia", "Macedonia", "Montenegro", "Others"],
      datasets: [
        {
          label: "Countries",
          data: [49.6, 20.3, 9.5, 3.6, 2.6, 14.4],
          backgroundColor: [
            "rgba(66, 138, 245, 0.7)",
            "rgba(235, 134, 52, 0.7)",
            "rgba(52, 235, 52, 0.7)",
            "rgba(235, 52, 235, 0.7)",
            "rgba(235, 235, 52, 0.7)",
            "rgba(52, 235, 235, 0.7)",
          ],
        },
      ],
    },
  });
});

// BAR CHART

document.addEventListener("DOMContentLoaded", () => {
  const barChart = document.querySelector("#barChart");
  new Chart(barChart, {
    type: "bar",
    data: {
      labels: ["13-17", "18-24", "25-34", "35-44", "45-54", "55-64", "65+"],
      datasets: [
        {
          label: "Age Groups",
          data: [1.7, 43.3, 34.4, 13.6, 5.6, 1.2, 0.2],
          backgroundColor: [
            "rgba(66, 138, 245, 0.7)",
            "rgba(235, 134, 52, 0.7)",
            "rgba(52, 235, 52, 0.7)",
            "rgba(235, 52, 235, 0.7)",
            "rgba(235, 235, 52, 0.7)",
            "rgba(52, 235, 235, 0.7)",
          ],
        },
      ],
    },
  });
});
