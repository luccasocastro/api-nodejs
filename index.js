const express = require('express');
const server = express();

server.get('/', (req,res)=>{
    return res.json({mensagem: 'Nossa API está funcionando!'})
})

server.listen(3000, ()=>{
    console.log('servidor está funcionando...')
});