import { contactSchema } from "@/helpers/validationSchema";
import { connectToDatabase, insertDocument } from "../../helpers/mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { formData } = req.body;

    try {
      await contactSchema.validate(formData);
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
      return;
    }

    let client;

    try {
      client = await connectToDatabase();
    } catch (error) {
      res.status(500).json({ success: false, message: "Could not connect to database." });
      return;
    }

    try {
      await insertDocument(client, "contact", formData);
      client.close();
      res.status(201).json({ success: true, message: "Successfully stored message!" });
    } catch (error) {
      client.close();
      res.status(500).json({ success: false, message: "Storing message failed!" });
      return;
    }
  }
}

export default handler;
