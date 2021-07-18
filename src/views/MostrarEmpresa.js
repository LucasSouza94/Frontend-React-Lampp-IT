import React, {Component} from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import axios from "axios";
import InputMask from "react-input-mask";


class MostrarEmpresa extends Component{
  state = {
    empresa: {
      id: 0,
      nomeEmpresa: "",
      cnpj: "",
      endereco: "",
      email: "",
    }
  }

  onChange = (e) => {
    let empresa = this.state.empresa
    empresa[e.target.name] = e.target.value
    this.setState({empresa: empresa})
  }

  componentDidMount(){
    let id = this.props.match.params.id
    if(id){
      axios.get(`https://localhost:5001/empresa/${id}`). then (response =>{
      const empresa = response.data
      this.setState({empresa});
    })
    }
    
  }


  salvar =() =>{
    if(this.state.empresa.id > 0){
      axios.put(`https://localhost:5001/empresa/${this.state.empresa.id}`, this.state.empresa). then (response =>{
      this.props.history.push("/empresas")
    })
  }
  else{
    axios.post(`https://localhost:5001/empresa`, this.state.empresa). then (response =>{
      this.props.history.push("/empresas")
    })
  }
}

  render(){
    this.id = this.props.match.params.id
    return (
      <div>
        <Header></Header>
        <div>
          <div className="bd-masthead mb-3" id="content">
            <div className="container px-4 px-md-3">
              <div className="row align-items-lg-center">
                <div className="col-12 mx-auto col-md-12 order-md-2 col-lg-8">
                <h3 className="mb-3">Mostrando Empresa</h3>
                  <form>
                    <div className="form-group">
                      <label htmlFor="nomeEmpresa">Nome da Empresa</label>
                      <input type="text" className="form-control" id="nomeEmpresa" name="nomeEmpresa" onChange={this.onChange}  placeholder="Digite o nome da empresa" value={this.state.empresa.nomeEmpresa} />
                    </div> 
                    <div className="form-group">
                      <label htmlFor="cnpj">CNPJ</label>
                      <InputMask type="text" className="form-control" id="cnpj" name="cnpj" mask="99.999.999/9999-99" placeholder="Digite o CNPJ da empresa" value={this.state.empresa.cnpj} onChange={this.onChange} />
                    </div> 
                    <div className="form-group">
                      <label htmlFor="endereco">Endereço</label>
                      <input type="text" className="form-control" id="endereco" name="endereco" placeholder="Digite o endereço da empresa" value={this.state.empresa.endereco} onChange={this.onChange} />
                    </div> 
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" id="email" name="email" placeholder="Digite o email da empresa" value={this.state.empresa.email} onChange={this.onChange} />
                    </div> 
                    <hr />
                      <button type="button" onClick={this.salvar} className="btn btn-primary">Salvar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
export default MostrarEmpresa;