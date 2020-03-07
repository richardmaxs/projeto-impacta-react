const restful = require('node-restful');
const { Schema } = restful.mongoose;

const contato = new Schema({
   data: { type: Date },
   nome: { type: String },
   email: {type: String},
   assunto: { type: String }
});

module.exports =  restful.model('contatos', contato);
