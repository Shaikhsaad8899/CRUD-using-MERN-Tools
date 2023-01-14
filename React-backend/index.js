const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

const mongoose = require("mongoose");

const post_route = require("./routes/postRoute");
app.use("/api", post_route );

mongoose.connect("mongodb://localhost:27017/React-BACKEND");
app.listen(8000, function () {
  console.log("Server is running on PORT:8000");
});
