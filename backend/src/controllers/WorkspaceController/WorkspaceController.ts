import { Request, Response, NextFunction} from 'express';
import knex from '../../database/connection';


class WorkspaceController {

/*
    
    async create(request: Request, response: Response, next: NextFunction) {
        try{
        const {
            titulo,
            usuario
        } = request.body;
    
        const trx = await knex.transaction();
        
        //Colocamos tudo dentro de uma váriavel isso também nos ajudará a fazer a verificação
    
        const workspaces = {
            titulo
        }
    
        const insertedIds = await trx('workspace').insert(workspaces);
    
        //referenciando
    
        const workspace_id = insertedIds[0];
    
        //precisaremos criar uma nova variável 
        const worspaceUsuario = usuarios.map((usuarios_id: number) =>{
    
            return {
                usuarios_id,
                worspace_id,
            };
    
        });
    
        await trx('usuarios').insert(worspaceUsuario);
    
        //Isso aqui realmente vai fazer os inserts na base de dados 
        await trx.commit();
        //Os três pontos significa spred operator, que significa pegar todas as informações  que nós temos no objeto e retornar dentro de outro
    
        return response.json({ 
            id: workspace_id,
            ...workspace,
        });
    } catch (error) {
        next(error)
    }

    } // fim create

    //delete

    async delete(request: Request, response: Response, next: NextFunction) { 
        try {
            const  { id } = req.params;
            await knex('workspace')
            .where({ id })
            .del();

            return response.status(201).send()

        } catch (error) {
            next(error)
        }
    }
   */
//Create

async create(request: Request, response: Response, next: NextFunction) { 
    try {

        const { titulo, FkIdUsuarios } = request.body

        const worksapceItems = {
            titulo,
            FkIdUsuarios,
        }
        
       const workspace = await knex('workspace').insert(worksapceItems);

            return response.json(workspace);

            

    } catch (error) {
        next(error)
    }
}



//Index

async index(request: Request, response: Response, next: NextFunction) { 
    try {
        const id = Number(request.params);

        const workspace = knex('workspace');
 /*
        if  (query) {
            query
            .join('usuarios', 'workspace.FkIdUsuarios', '=', 'usuarios.id')
            .select('workspace.titulo as Workspace Nome', 'usuarios.nome')
            .where('usuarios', id);

            const results = await query;
        
        return response.json(results);
                
        }

        */

       if(workspace){
        /*
        workspace
        .join('usuarios', 'workspace.FkIdUsuarios', '=', 'usuarios.id')
        .where('usuarios.id', id).first().select('workspace.titulo as Workspace', 'workspace.id', 'usuarios.nome');
        */
        const resultado = await workspace;

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

        const workspace  = knex('workspace');
    
        if(workspace){
            
        workspace
        .join('usuarios', 'workspace.FkIdUsuarios', '=', 'usuarios.id')
        .where('workspace.id', id).first().select('workspace.titulo as Workspace', 'workspace.id', 'usuarios.nome');
        
        const resultado = await workspace;

        return response.json( resultado );
    
        } 

    }  
    
    catch (error) {
        return response.status(400).json({ message: 'Worksapce not Found' });
    }

    
   
    
   

}

//Update
  async update(request: Request, response: Response, next: NextFunction) {
    try {
        const { titulo } = request.body
        const { id } = request.params
        
        
        await knex('workspace')
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

    const workspace = await knex('workspace').where('id', id).delete();
    
    return response.json({ msg: 'successfully deleted' });

    } catch (error) {
        return response.status(400).json({ message: 'User not found.' });
        //next(error)
    
    }
}

}






export default WorkspaceController;