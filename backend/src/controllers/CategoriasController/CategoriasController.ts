import { Request, Response, NextFunction} from 'express';
import knex from '../../database/connection';


class CategoriasController {

//Create

async create(request: Request, response: Response, next: NextFunction) { 
    try {

        const { titulo, FkIWorkspace } = request.body

        const categoriasItems = {
            titulo,
            FkIWorkspace,
        }
        
       const categorias = await knex('categorias').insert(categoriasItems);

            return response.json(categorias);

            

    } catch (error) {
        next(error)
    }
}



//Index

async index(request: Request, response: Response, next: NextFunction) { 
    try {
        const id = Number(request.params);

        const categorias = knex('categorias');
 /*
        if  (query) {
            query
            .join('usuarios', 'categorias.FkIdUsuarios', '=', 'usuarios.id')
            .select('categorias.titulo as categorias Nome', 'usuarios.nome')
            .where('usuarios', id);

            const results = await query;
        
        return response.json(results);
                
        }

        */

       if(categorias){
        /*
        categorias
        .join('usuarios', 'categorias.FkIdUsuarios', '=', 'usuarios.id')
        .where('usuarios.id', id).first().select('categorias.titulo as categorias', 'categorias.id', 'usuarios.nome');
        */
        const resultado = await categorias;

        return response.json(resultado);
    
        } 

        




    } catch (error) {
        next(error)
    }
}

//Show

async show(request: Request, response: Response, next: NextFunction) {
    try {

        const id = Number(request.params.id);

        const categorias = knex('categorias');
    
        if(categorias){
        
            categorias
            .join('workspace', 'categorias.FkIWorkspace', '=', 'workspace.id')
            .where('workspace.id', id).first().select('categorias.titulo as Categorias', 'workspace.id ', 'workspace.nome as Workspace');

        
        const resultado = await categorias;

        return response.json( resultado );
    
        } 

    }  
    
    catch (error) {
        return response.status(400).json({ message: 'Categorias not Found' });
    }

    
   
    
   

}

//Update
  async update(request: Request, response: Response, next: NextFunction) {
    try {
        const { titulo } = request.body
        const { id } = request.params
        
        
        await knex('categorias')
        .update({ titulo })
        .where({ id })

        return response.send()

    } catch (error) {
        next(error)
    }
}
//Delete

 //delete
   async delete(request: Request, response: Response, next: NextFunction) {
    try {
    const id  = Number(request.params.id);

    const categorias = await knex('categorias').where('id', id).delete();
    
    return response.json({ msg: 'successfully deleted' });

    } catch (error) {
        return response.status(400).json({ message: 'User not found.' });
        //next(error)
    
    }
}

}


export default CategoriasController;