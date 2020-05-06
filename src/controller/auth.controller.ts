import { SportService } from '../services/sport.service';
import express, { Router, Request, Response, Application } from 'express';
// import jwt from 'express-jwt';

export const AuthController = (app: Application) => {

    const authRouter: Router = express.Router();
    // const sportService = new SportService();

    // const secret = process.env.WILD_JWT_SECRET;
    // if (!secret) {
    //     throw new Error('Pas de secret setup');
    // }

    // sportsRouter.use(jwt({secret}));

    authRouter.post('/signup', (req: Request, res: Response) => {

        res.send('I am in POST signup');
    });

    app.use('/auth', authRouter);
};
