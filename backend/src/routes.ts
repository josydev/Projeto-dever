import express, { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import knex from './database/connection';
import WorkspaceController from './controllers/WorkspaceController/WorkspaceController';
import CategoriasController from './controllers/CategoriasController/CategoriasController';

//Instanciando as classes 
const routes = express.Router();
const  workspaceController = new  WorkspaceController();
const categoriasController = new CategoriasController();


/*
//Importando as classes que nós criamos separadamente





const WorkspaceController = new WorkspaceController();
const CategoriasController = new CategoriasController();

routes.get('/home', WorkspaceController.index);

//Método dentro da classe que realiza a criação do ponto

/*
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show)
*/

/*Por que a gente escreveu index e não list?
Porque é meio que um padrão da comunidade  quando a gente cria um  controller a gente ter os métodos nesses formatos aqui index, show, create/store, update, delete/destroy


routes.get('/', (req: Request, res: Response) => {
    return res.json({ Hello: 'Wold'});
});*/





/*
routes.get('/users', async (req: Request, res: Response) => {
    const usuarios = await knex('usuarios').select('*');

    return res.json(usuarios);

});
*/

//Create
routes.post('/home', workspaceController.create);
routes.post('/categoria', categoriasController.create);

//See all Items
routes.get('/workspace', workspaceController.index);
routes.get('/categoria', categoriasController.index);

//Show only Item
routes.get('/home/:id', workspaceController.show);
routes.get('/categoria/:id', categoriasController.show);


//Update only item
routes.put('/home/:id', workspaceController.update);
routes.put('/categoria/:id', categoriasController.update);

//Delete only item
routes.delete('/home/:id', workspaceController.delete);
routes.delete('/categoria/:id', categoriasController.delete);


export default routes;

