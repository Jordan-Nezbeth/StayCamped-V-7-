<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Browse Campers - StayCamped</title>
  <link rel="stylesheet" href="style.css" />
  <style>
    body {
      background-color: #1a1a1a;
      color: #fff;
      font-family: Arial, sans-serif;
      margin: 0;
    }
    header {
      background-color: #262626;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    header img {
      height: 50px;
    }
    .container {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 1rem;
    }
    h1 {
      color: #ffa500;
    }
    .filters {
      background: #2a2a2a;
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 2rem;
    }
    .filters select {
      margin-right: 1rem;
      padding: 0.5rem;
      border-radius: 4px;
      border: none;
    }
    .listing-card {
      background: #2a2a2a;
      border-radius: 8px;
      padding: 1rem;
      margin-bottom: 1.5rem;
    }
    .listing-card h3 {
      margin: 0;
      color: #ffa500;
    }
    .btn {
      background: #ffa500;
      color: #1a1a1a;
      border: none;
      padding: 0.5rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      display: inline-block;
      margin-top: 0.5rem;
    }
  </style>
</head>
<body>
  <header>
    <a href="index.html"><img src="logo.png" alt="StayCamped Logo"></a>
    <h2>Browse Campers</h2>
  </header>

  <div class="container">
    <h1>Find the Perfect Camper</h1>

    <div class="filters">
      <label for="filter-type">Type:</label>
      <select id="filter-type">
        <option value="">All</option>
        <option value="Travel Trailer">Travel Trailer</option>
        <option value="Fifth Wheel">Fifth Wheel</option>
        <option value="Class A">Class A</option>
        <option value="Class C">Class C</option>
      </select>
      
      <label for="filter-state">State:</label>
      <select id="filter-state">
        <option value="">All</option>
        <option value="KY">KY</option>
        <option value="TN">TN</option>
        <option value="OH">OH</option>
        <!-- Add more states here -->
      </select>
    </div>

    <div id="listing-container">Loading listings...</div>
  </div>

  <script src="scripts/listingsDirectory.js"></script>
</body>
</html>
