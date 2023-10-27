const express = require("express");
const {
  cadastrar_Usuario,
  fazer_Login,
  perfil_Usuario_Logado,
  editar_Usuario_Logado,
} = require("../controladores/usuarios");
const {
  detalhar_Transacao,
  cadastrar_Transacao,
  editar_Transacao,
  excluir_Transacao,
  obter_Extrato,
  listar_Transacoes,
} = require("../controladores/transacoes");
const { listar_Categorias } = require("../controladores/categorias");
const { validar_Autenticacao } = require("../intermediarios/autenticacao");
const rotas = express();

rotas.post("/usuario", cadastrar_Usuario);
rotas.post("/login", fazer_Login);

rotas.use(validar_Autenticacao);

//Categorias

rotas.get("/categoria", listar_Categorias);
//Transacoes
rotas.post("/transacao", cadastrar_Transacao);

rotas.get("/categoria", listar_Categorias);
//Transacoes
rotas.get("/transacao/extrato", obter_Extrato);
rotas.post("/transacao", cadastrar_Transacao);
rotas.get("/transacao", listar_Transacoes);
rotas.get("/transacao?filtro[]=roupas&filtro[]=salários", listar_Transacoes);
rotas.get("/transacao/:id", detalhar_Transacao);
rotas.delete("/transacao/:id", excluir_Transacao);
rotas.put("/transacao/:id", editar_Transacao);

rotas.get("/usuario", perfil_Usuario_Logado);

rotas.put("/usuario", editar_Usuario_Logado);

module.exports = rotas;
