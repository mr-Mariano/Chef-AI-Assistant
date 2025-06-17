const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { InferenceClient } = require('@huggingface/inference');

const app = express();
app.use(cors());
app.use(express.json());

// Agrega este log para ver el valor del token

const client = new InferenceClient(process.env.ANTROPHIC_HF_TOKEN);
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`
app.post('/api/anthropic', async (req, res) => {

  try {
    const { content } = req.body;
    const chatCompletion = await client.chatCompletion({
      provider: "novita",
      model: "deepseek-ai/DeepSeek-V3-0324",
      max_tokens : 1024,
      messages: [
        {
            role : "user" ,
            content : content
        },
        {
          role : "system",
          content : SYSTEM_PROMPT
        }
      ]
    });
    res.json(chatCompletion.choices[0].message);
  } catch (error) {
    console.error("Error en el backend:", error); // <-- Agrega este log para ver el error completo
    res.status(500).json({ error: error.message });
  }
});

app.listen(5030, () => console.log('Backend corriendo en puerto 5030'));