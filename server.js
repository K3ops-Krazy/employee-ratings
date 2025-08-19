const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Stocăm rating-urile în memorie (doar pentru test, se pierd la restart)
let ratings = {};

app.get("/ratings/:skill", (req, res) => {
    const skill = req.params.skill;
    res.json(ratings[skill] || []);
});

app.post("/ratings/:skill", (req, res) => {
    const skill = req.params.skill;
    const { rating } = req.body;

    if (!ratings[skill]) ratings[skill] = [];
    ratings[skill].push(rating);

    res.json({ message: "Rating adăugat", ratings: ratings[skill] });
});

app.listen(PORT, () => console.log(`Serverul rulează pe port ${PORT}`));
