import express, { Request, Response } from "express";
import characterRoutes from "./routes/characterRoutes";
import cors from "cors";

const app = express();
const port = process.env.PORT || 80;

app.use(express.json());
app.use(cors());

app.use("/api", characterRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
