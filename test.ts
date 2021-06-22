//Definindo tipos no TypeScript
//nomeDaVariavel: tipoDaVariavel

interface Usuario {
  nome: string;
  email: string;
  telefone?: string; //O ponto de interrogação define que o telefone é uma variável opcional
}

function enviarEmail({ nome, email, telefone }: Usuario) {
  console.log(`Olá ${nome} seu email é ${email} e seu telefone é ${telefone}`);
}

enviarEmail({
  nome: "Larissa Souza",
  email: "larissa.souza@gmail.com",
})