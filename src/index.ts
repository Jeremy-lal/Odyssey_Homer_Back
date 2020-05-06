import express from 'express';
import { AuthController } from './controller/auth.controller';

import loaders from './loaders';
import { AuthService } from './services/auth.service';

async function startServer() {
  const app = express();

  await loaders(app);

  AuthController(app);

  app.listen(3000, () => console.log('Express server  is running'));
}

startServer();
