import "dotenv/config";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const createImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiResponse = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    res.status(200).json({
      status: true,
      data: aiResponse,
    });
  } catch (error) {
    console.log("Error raised: ", error);
    res.status(403).json({
      status: false,
      error: error?.response.data.error.message || "Internal Server Error!",
    });
  }
};

export { createImage };
