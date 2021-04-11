import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.listen({ port: 4000 }, async () => {
  console.log(`App listening on port 4000! 🚀 `);
});

export default app;
