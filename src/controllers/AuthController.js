const AuthService = require("../services/AuthServices");


const authService = new AuthService()
  

class AuthController {
  static async login(req, res, next) {
    try{
      const { email, senha } = req.body;
      const login = await authService.login({email, senha});
      if(login){
        res.status(200).send(login);
      }
      res.status(401).send({msg: 'Informacoes de usuario incorretas'});
    }catch(erro) {
      next(erro);
    }
  }
}


module.exports = AuthController;