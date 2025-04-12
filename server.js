const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/search", (req, res) => {
  const { from, to, date, category } = req.body;

  res.json({
    message: `✨ Found awesome ${category} deals from ${from} to ${to}!`,
    from,
    to,
    date,
    category,
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
