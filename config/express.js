import express from 'express';

const app = express();
app.use(express.json());
app.listen({ port: 4000 }, async () => {
  console.log(`App listening on port 4000! 🚀 `);
});

export default app;
