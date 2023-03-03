const knex = require('../database/index')
  
  module.exports = {
   
      
//GET Produtos
async getAll(req, res){

   const result = await knex('pedido_ingresso');

    return res.json(result)
   },

// POST PRODUTOS
async create(req, res){
    try{
        const { nome_usuario } = req.body;
        const { cpf_usuario } = req.body;
        const { email } = req.body;
        const { id_ingresso } = req.body;

        await knex('pedido_ingresso').insert({
            nome_usuario,
            cpf_usuario,
            email,
            id_ingresso
            
        });
        return res.status(201).send();
}
catch(error){
    console.log(error);
}
},

// PUT PRODUTOS
async update(req, res){
    try{
            const { id } = req.params;
            const { nome_usuario } = req.body;
            const { cpf_usuario } = req.body;
            const { email } = req.body;
            const { id_ingresso } = req.body;

            await knex('pedido_ingresso').update({
                nome_usuario,
                cpf_usuario,
                email,
                id_ingresso
        }).where({id});
        return res.status(201).send();
}
catch(error){
    console.log(error);
}},


    // DELETE PRODUTOS
        async delete(req, res){
        try{
            const { id } = req.params;

            await knex('pedido_ingresso').where({ id }).del();

            return res.send();
        }
        catch(error){
            console.log(error);
        }
    }
}