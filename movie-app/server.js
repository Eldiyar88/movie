import express from 'express';
import axios from 'axios';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT;
const API_URL = 'https://kinopoisk.dev/v1.2/movie';

app.use(cors());
app.use(express.json());

// Проксирование запросов к внешнему API
app.get('/api/movies', async (req, res) => {
  try {
    const response = await axios.get(API_URL, {
      params: req.query,
      headers: {
        'X-API-KEY': process.env.REACT_APP_API_KEY,
      },
      params: req.query
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from external API');
  }
});

app.get('/api/movies/:id', async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/${req.params.id}`, {
      headers: {
        'X-API-KEY': process.env.REACT_APP_API_KEY,
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data from external API');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
