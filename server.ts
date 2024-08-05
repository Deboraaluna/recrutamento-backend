//ponto de partida/entrada da aplicação
import dotenv from 'dotenv';
import app from './app'; // supondo que app.ts é o arquivo principal do Express
import connectDB from './src/config/db';

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
