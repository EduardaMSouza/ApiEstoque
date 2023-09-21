const AuthService = require("../services/AuthServices");


const authService = new AuthService()
  

class AuthController {
  static async login(req, res, next) {
    try{
      const { email, senha } = req.body;
      const login = await authService.login({email, senha});
      if(login.accessToken && login.tokenOpaco){
        res.set('Authorization', login.accessToken);
        res.status(200).send(login.tokenOpaco);
      }else{
        res.status(401).send({msg: 'Informacoes de usuario incorretas'});
      }
    }catch(erro) {
      next(erro);
    }
  }
  static async refresh(req, res, next) {
    try{
      const { refreshToken } = req.body;
      const accessToken = await authService.refresh(refreshToken);
      if(accessToken){
        res.status(200).send(accessToken);
      }else{
        res.status(401).send({msg: 'Informacoes de usuario incorretas'});
      }
    }catch(erro) {
      next(erro);
    }
  }
}


module.exports = AuthController;