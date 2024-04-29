const express = require("express")
const userRoutes = require("./src/routes/userRoutes");
require('dotenv').config();

const app = express();
const cors = require("cors");

const PORT = process.env.PORT ;

app.use(cors())
app.use(express.json())

app.use("/", userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});