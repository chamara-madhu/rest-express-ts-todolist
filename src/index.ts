import express, { Application } from "express";
import cors from "cors";
import taskRoutes from "./routes/api/taskRoute"

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use("/api/v1/tasks", taskRoutes)


app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`)
})