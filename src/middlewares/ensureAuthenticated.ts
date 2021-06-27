import {
  Request,
  Response,
  NextFunction
} from "express";
import {
  verify
} from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

  // Receber o token
  const authtoken = request.headers.authorization;

  // Validar se o token está preenchido
  if (!authtoken) {
    return response.status(401).end();
  }

  const [, token] = authtoken.split(" ");

  try {
    // Verificar se o token é válido
    const { sub } = verify(
      token,
      "340f3b2f3a5b4b4060f74233d56e8af1"
    ) as IPayload;

    // Recuperar informações do usuário
    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }

}