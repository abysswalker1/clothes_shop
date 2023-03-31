import express from "express";
import { httpStatuses } from "../constants";
import { RequestWithBody } from "../types";
import { registerUser } from "../models/auth_model";

const {SERVER_ERROR_500} = httpStatuses;

const authRouter = ( ) => {
  const Router = express.Router();

  Router.post('/register', async (requset: RequestWithBody<{email: string, password: string}>, response) => {
    try {
      const {email, password} = requset.body

        await registerUser(email, password)
        .then(pg_response => {
          response.status(200).json({response: pg_response});
        })

    } catch (e) {
      response.status(SERVER_ERROR_500).json({message: `${e}`})
    }
  })

  Router.post('/login', async () => {
    
  })

  return Router;
}

export default authRouter;