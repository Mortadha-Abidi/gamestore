const express = require("express");
const app = express();
const adminroutes = require("./routes/product.routes.admin");

const cors = require('cors');
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json())
app.use("/admin", adminroutes);

app.listen(PORT, function () {
    console.log(`listening on port  http://localhost:${PORT}`);
  });