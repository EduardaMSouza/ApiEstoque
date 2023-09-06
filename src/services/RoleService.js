const Services = require("./services");
const { v4: uuidv4 } = require('uuid');



class RoleService extends Services {
  constructor() {
    super('Roles');
  }
  async novoRole(dto) {
    const role = {
      id: uuidv4(),
      nome: dto.nome,
      descricao: dto.descricao,
    }
    console.log(role)
    return await this.novoRegistro(role);
  }
}


module.exports = RoleService;