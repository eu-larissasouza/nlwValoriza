import { getCustomRepository } from "typeorm"

import { compare } from "bcryptjs"

import { UsersRepositories } from "../repositories/UsersRepositories"

import { sign } from "jsonwebtoken"


interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    //Verificação da existência do email
    const user = await usersRepositories.findOne({
      email
    });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    //Verificação se a senha está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    //Gerar token
    const token = sign(
      {
        email: user.email
      },
      "340f3b2f3a5b4b4060f74233d56e8af1", {
      subject: user.id,
      expiresIn: "1d"
    }
    );

    return token;
  }
}

export { AuthenticateUserService }