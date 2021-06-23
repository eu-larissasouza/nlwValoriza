import express from "express";

// @types/express
const app = express();

//Tipos de métodos 
/**
 * GET     => Buscar uma informação
 * POST    => Inserir (Criar) uma informação
 * PUT     => Alterar uma informação
 * DELETE  => Remover um dado
 * PATCH   => Alterar uma informação específica
 */

//Criando um recurso (rota)
app.get("/test", (request, response) => {
  //Request => Informações que estão entrando
  //Response => Informações que estão saindo
  return response.send("Olá NLW");
});

//Sempre que estivermos acessando algo pelo browser, toda requisição que ele recebe será por padrão uma requisição GET, para utilizar outros tipos de requisição usaremos o Insomnia
app.post("/test-post", (request, response) => {
  return response.send("Olá NLW, método POST");
})

//http://localhost:3000
app.listen(3000, () => console.log("Server is running"));