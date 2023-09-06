const Services = require("./services");
const { v4: uuidv4 } = require('uuid');



class PermissaoService extends Services {
  constructor() {
    super('Permissoes');
  }
  async novoPermissao(dto) {
    const Permissao = {
      id: uuidv4(),
      nome: dto.nome,
      descricao: dto.descricao,
    }
    console.log(Permissao)
    return await this.novoRegistro(Permissao);
  }
}


module.exports = PermissaoService;