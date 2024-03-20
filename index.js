const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 1010;
app.use(express.json());
const dbconnect = require("./config/database");
const router = require("./routes/router");
dbconnect();

app.use("/api", router)
app.use(express.json())
// app.get("/", (req, res) => {
//     res.send(`<h1>This is homepage </h1>`)
// });


app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
