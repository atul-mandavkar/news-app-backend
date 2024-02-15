const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Import Axios for making HTTP requests

const app = express();

// Allow requests from all origins
app.use(cors());

// Define a route to fetch news from the NewsAPI
app.get("/news", async (req, res) => {// need to change path of /news to appropriate path of news app 
  try {
    // Make a GET request to the NewsAPI with your API key and country
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        country: "in", // Change 'us' to the appropriate country code
        apiKey: "4ff66c79f34b45a88a9ecc27e67c16f0", // Replace 'YOUR_NEWSAPI_API_KEY' with your actual API key
      },
    });

    // Send the response data back to the client
    res.json(response.data);
  } catch (error) {
    // If there's an error fetching data from the NewsAPI, send an error response
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news from NewsAPI" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
