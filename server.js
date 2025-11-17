// server.js ou index.js
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos da build do Vite
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const response = await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: { name: 'Site', email: 'suporte@sosmecanicos.com.br' },
        to: [{ email: 'zmmateus2@gmail.com' }],
        replyTo: { email: email },
        subject: 'Novo contato do site ZM6 Digital',
        htmlContent: `<p>Nome: ${name}</p><p>Email: ${email}</p><p>Mensagem: ${message}</p>`,
      },
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).json({ success: true, response: response.data });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Redirecionar todas as outras rotas para index.html (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
