import { app } from "./app";
import dotenv from "dotenv/config"

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log("Server is running for ALL")
})