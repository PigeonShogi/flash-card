const express = require("express");

const app = express();
const PORT = 3456;

app.get("/", (_req, res) => {
  res.status(200).json({ result: "success", message: "伺服器運作中" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
