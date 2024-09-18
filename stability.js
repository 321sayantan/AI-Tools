import fs from "node:fs";
import axios from "axios";
import FormData from "form-data";

const payload = {
  prompt: "",
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

if (response.status === 200) {
  fs.writeFileSync("./lighthouse.webp", Buffer.from(response.data));
} else {
  throw new Error(`${response.status}: ${response.data.toString()}`);
}
