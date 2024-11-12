// server/server.js
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(express.json());  // for parsing application/json
app.use("/api/auth", authRoutes);  // Register auth routes

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/crictrik", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB error:", err));

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
