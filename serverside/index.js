const express = require("express");
const app = express();
const adminroutes = require("./routes/product.routes.admin");
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const cors = require('cors');
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin:["http://localhost:5000","http://localhost:3000"],
  methods:["GET","post","PATCH","PUT"],
  credentials:true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      
      expires: 60 * 60 * 24,
    },
  })
);
app.use("/admin", adminroutes);

app.listen(PORT, function () {
    console.log(`listening on port  http://localhost:${PORT}`);
  });