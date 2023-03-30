const CarroService = require('../services/CarroService');

module.exports = {
    findAll: async (req,res) => {
        let json = {error:'', result:[]};

        let carros = await CarroService.findAll();

        for(let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo
            });
        }
        res.json(json);
    },
    
    findById: async (req,res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let carro = await CarroService.findById(codigo);

        if(carro){
            json.result = carro;
        }

        res.json(json);
    },

    insert: async (req,res) => {
        let json = {error:'', result:{}};

        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(modelo && placa){
            let CarroCodigo = await CarroService.insert(modelo, placa);
            json.result = {
                codigo: CarroCodigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    update: async (req,res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(modelo && placa && codigo){
            await CarroService.update(codigo, modelo, placa);
            json.result = {
                codigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    delete: async(req,res) => {
        let json = {error:'', result:{}};

        await CarroService.delete(req.params.codigo);

        res.json(json);
    }
}