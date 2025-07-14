const express = require("express");
const { getapi_data } = require("./controllers/controllers.js");
const app = express();
const router = require("./auth_router/auth.js"); // ✅ use lowercase `router`
const productRoutes=require("./auth_router/productsroutes.js")
const { getProducts } = require("./controllers/apicontroller.js");
app.use(express.json());
app.use("/api/v1/login", router); // ✅ now matches
app.use("/api/v1/products", productRoutes);
app.get("/api/products", getProducts);

app.get("/api/products", getapi_data);

app.listen(1000, () => console.log("server is running"));
