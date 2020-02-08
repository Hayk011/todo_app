const express = require("express");
const app = express();
const mongoose = require("mongoose");
const homeRout = require("./routes/home");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", homeRout);
async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://hayk:3706884262@cluster0-tubdo.mongodb.net/test?retryWrites=true&w=majority`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }
    );
    app.listen(5000, (req, res) => {
      console.log("server is runing");
    });
  } catch (e) {
    console.log(e);
  }
}
start();
