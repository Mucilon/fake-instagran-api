'use strict';

import express from 'express';
import {Application} from 'express';
import morgan from 'morgan';
import * as bodyParser from 'body-parser';
import Routes from './routes';
import Handlers from './resposeHandlers'
import path from 'path';
import cors from 'cors';


//class responsible for setting up and starting routes the API

class Api {
    public express: Application;


    constructor() {
        this.express = express();
        this.middleware();
    }

    middleware(): void{
        this.express.use(morgan('dev'));
        this.express.use(cors());
        this.express.use(bodyParser.urlencoded({ extended: true}));
        this.express.use(bodyParser.json());
        this.express.use(Handlers.errorHandlerApi);
        this.express.use('/files', express.static(path.resolve(__dirname, '..','..', 'uploads','resized')));
     
        this.router(this.express);
    }

    private router(app: Application): void{
        Routes.initRoutes(app);
    }


}

export default new Api().express;