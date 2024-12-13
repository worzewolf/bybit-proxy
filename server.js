const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/bybit", async (req, res) => {
    try {
        // Forward request to Bybit API
        const { symbol = "BTCUSDT", category = "linear" } = req.query;
        const response = await axios.get("https://api.bybit.com/v5/market/tickers", {
            params: { symbol, category },
        });
        console.log(response.data)
        // Send back the response
        res.json(response.data);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send({ error: "Failed to fetch data from Bybit" });
    }
});

app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
