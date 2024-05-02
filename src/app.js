require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const { authRouter } = require("./domain/auth/auth.routes");
const { dashboardRouter } = require("./domain/dashboard/dashboard.routes");
const {
  categoryRouterWeb,
  categoryRouter,
} = require("./domain/category/category.routes");
const {
  productRouter,
  productRouterWeb,
} = require("./domain/products/product.routes");
const {
  supplierRouter,
  supplierRouterWeb,
} = require("./domain/suppliers/supplier.routes");
const connectDB = require("./config/database");
const { userRouter, userRouterWeb } = require("./domain/users/user.routes");
const { checkAuthenticated } = require("./middleware/authentication");
const app = express();

// Set static folder
app.use("/static", express.static(path.join(__dirname, "/public")));

// Set Layout
app.use(expressLayouts);
app.set("layout", "layouts/dashboard");

// Set view engine
app.set("view engine", "ejs");

// Set directory views
app.set("views", path.join(__dirname, "/views"));


// express-session for managament session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
// Middleware that only parses JSON
app.use(express.json());



// Connect DB
connectDB();

// Router API
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/supplier", supplierRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/user", userRouter);

// Router Website
app.use("/auth", authRouter);
app.use("/dashboard", checkAuthenticated, dashboardRouter);
app.use("/category", checkAuthenticated, categoryRouterWeb);
app.use("/supplier", checkAuthenticated, supplierRouterWeb);
app.use("/product", checkAuthenticated, productRouterWeb);
app.use("/user", checkAuthenticated, userRouterWeb);

// Redirect to login when user get index app
app.get("/", (request, response) => {
  response.redirect("/auth/login");
});

// When pages not found
app.get("*", (request, response) => {
  response.redirect("/dashboard");
});

exports.app = app;
