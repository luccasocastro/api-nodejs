const db = require('../db');

module.exports = {
    findAll: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM carros', (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    }
};