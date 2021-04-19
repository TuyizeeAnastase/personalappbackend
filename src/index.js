import express from 'express';
import routers from './routers/index.js';
import bodyparser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from '../swagger.json';

const app=express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(routers)

const port=5000;

app.listen(port,()=>{
    console.log(port)
})


export default app;