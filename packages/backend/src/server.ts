import './core/initialise';
import app from './app';
import { PORT } from './config';

app
  .listen(PORT, () => {
    console.info(`Server is online on port : ${PORT}`);
  });

export default app;