import express, { type Request, Response, NextFunction } from "express";
import cors from "cors";
import { registerRoutes } from "../server/routes.ts";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

app.set("trust proxy", true);
app.use(cors());

// Required for some webhooks or parsing
declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req: any, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

// Initialize routes synchronously
registerRoutes(httpServer, app).catch(err => {
  console.error("Failed to register routes:", err);
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

export default app;
