import express, { type Express } from "express";
import {createServer, type Server} from "http";
import {z} from "zod";
import { insertContactSchema } from "@shared/schema";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server>{
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      const googleScriptUrl = process.env.GOOGLE_URL;

      if (!googleScriptUrl) {
        console.error("Google Script URL not set");
        return res.status(500).json({ error: "Google Script URL not configured" });
      }

      const googleRes = await fetch(googleScriptUrl, {
        method: "POST",
        body: JSON.stringify(contactData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      let googleResBody = null;
      try {
        googleResBody = await googleRes.json();
      } catch (jsonErr) {
        console.warn("Failed to parse Google Script response as JSON", jsonErr);
      }

      if (!googleRes.ok) {
        console.error("Google Script failed", googleRes.status, googleResBody);
        return res.status(502).json({ error: "Failed to send contact data to Google Script" });
      }

      return res.json({ success: true, contact, sheetsResponse: googleResBody });

    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Zod validation failed:", error.errors);
        return res.status(400).json({ error: "Invalid contact data", details: error.errors });
      } else {
        console.error("Internal server error:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  app.get("/api/test", (req, res) => {
    res.json({ message: "Server is working!" });
  });

  const httpServer = createServer(app);
  return httpServer;
}

