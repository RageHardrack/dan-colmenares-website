import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";

import { blogRoutes, portfolioRoutes } from "./routes";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));

// Rutas
app.use("/blog", blogRoutes);
app.use("/portfolio", portfolioRoutes);

// Static Files
app.use(express.static(path.join(__dirname, "..", "..", "dist")));

export default app;
