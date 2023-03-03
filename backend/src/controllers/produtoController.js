const knex = require('../database/index')
  
  module.exports = {
   
      
//GET Produtos
async getAll(req, res){

   const result = await knex('produtos');

    return res.json(result)
   },

// POST PRODUTOS
async create(req, res){
    try{
        const { titulo } = req.body;
        const { valor } = req.body;
        const { descricao } = req.body;
        const { imagem } = req.body;

        await knex('produtos').insert({
            titulo,
            valor,
            descricao,
            imagem
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
            const { titulo } = req.body;
            const { valor } = req.body;
            const { descricao } = req.body;
            const { imagem } = req.body;

            await knex('produtos').update({
                titulo,
                valor,
                descricao,
                imagem
        }).where({id});
        return res.status(201).send();
}
catch(error){
    console.log(error);
}
},
        async delete(req, res){
        try{
            const { id } = req.params;

            await knex('produtos').where({ id }).del();

            return res.send();
        }
        catch(error){
            console.log(error);
        }
    }
}