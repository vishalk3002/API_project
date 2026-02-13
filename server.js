require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const authRoutes = require("./routes/auth-routes");
const homeRoutes = require("./routes/home-route");
const adminRoutes = require("./routes/admin-route");
const uploadImageRoutes = require("./routes/image-routes");
const path = require("path");

connectToDB();

const app = express();
const PORT = process.env.PORT;

//Middlewares
app.use(express.json());
//API Routes
app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/image", uploadImageRoutes);

//Server Views
app.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname, "views/login.html"))
);
app.get("/register", (req, res) =>
  res.sendFile(path.join(__dirname, "views/register.html"))
);
app.get("/user", (req, res) =>
  res.sendFile(path.join(__dirname, "views/user.html"))
);
app.get("/admin", (req, res) =>
  res.sendFile(path.join(__dirname, "views/admin.html"))
);

app.listen(PORT, () => {
  console.log(`The server is running at ${PORT}`);
});
