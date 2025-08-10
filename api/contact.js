import { z } from "zod";

// Define the schema directly here since we don't need the database
const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  contact_number: z.string().min(1, "Contact number is required"),
  message: z.string().min(1, "Message is required"),
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const contactData = insertContactSchema.parse(req.body);
    const googleScriptUrl = process.env.GOOGLE_URL;

    if (!googleScriptUrl) {
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
    } catch {
      console.warn("Failed to parse Google Script response");
    }

    if (!googleRes.ok) {
      return res.status(502).json({ error: "Failed to send contact data" });
    }

    return res.json({ success: true, contact: contactData, sheetsResponse: googleResBody });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid contact data", details: error.errors });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
}
