import express from 'express';  // Using ES6 imports
import fetch from 'node-fetch';  // Use native fetch if Node.js 18+
import { promises as fs } from 'fs';  // Use promises for file system operations
import path from 'path';
import { fileURLToPath } from 'url';
import cors from "cors";
import axios from "axios"

const app = express();
app.use(cors());
app.use(express.json());  // Parse JSON bodies

// Determine dirname for ES6 modules
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Serve static images from 'images' directory
app.use('/images', express.static(path.join(dirname, 'images')));

app.post('/generate-image', async (req, res) => {
  const { prompt } = req.body;

  try {
    // const response = await fetch('https://api.stability.ai/v2beta/stable-image/generate/core', {
    //   method: 'POST',
    //   headers: {
    //     authorization: `Bearer sk-HZncvTep0hp5BBuGIpJLS0XJMkFujK1RmsFh3zFxtyAmR5j4`,
    //     accept: 'image/*',
    //   },
    //   body: new URLSearchParams({
    //     prompt: prompt || 'Lighthouse on a cliff overlooking the ocean',
    //     output_format: 'webp',
    //   }),
    // });

    const payload = {
      prompt: "cat",
      output_format: "webp",
    };

    const response = await axios.postForm(
      `https://api.stability.ai/v2beta/stable-image/generate/ultra`,
      axios.toFormData(payload, new FormData()),
      {
        validateStatus: undefined,
        responseType: "arraybuffer",
        headers: {
          Authorization: `Bearer sk-HZncvTep0hp5BBuGIpJLS0XJMkFujK1RmsFh3zFxtyAmR5j4`,
          Accept: "image/*",
        },
      }
    );

    console.log(response);

    if (response.ok) {
      const buffer = await response.buffer();
      const imagePath = path.join(dirname, 'images', 'lighthouse1.webp');

      // Write the image using promises (async/await)
    //   await fs.writeFile(imagePath, buffer);
      await fs.writeFile(imagePath, Buffer.from(response.data));

      // Send the image URL back to the client
      res.json({ imageUrl: '/images/lighthouse1.webp' });
    } else {
    //   const errorBody = await response.json();
      res.status(500).json({ error: "error" });
    }
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).json({ error: 'Failed to generate image' });
  }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));