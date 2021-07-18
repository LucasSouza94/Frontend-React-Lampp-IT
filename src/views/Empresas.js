import React, {Component} from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import { Link } from 'react-router-dom';
import axios from "axios";


class Empresas extends Component{
  state = { empresas: []}

  componentDidMount(){
    this.lista()
  }

  lista = () =>{
      axios.get('https://localhost:5001/empresas'). then (response =>{
        const empresas = response.data
        this.setState({empresas});
      })
  }

  excluir = (empresa) =>{
    if(window.confirm("Deseja realmente excluir?")){
      axios.delete(`https://localhost:5001/empresa/${empresa.id}`). then (response =>{
      this.lista()
  })
}
}

  render(){
    return (
      <div>
        <Header></Header>
        <div>
          <div className="bd-masthead mb-3" id="content">
            <div className="container px-4 px-md-3">
              <div className="row align-items-lg-center">
                <div className="col-8 mx-auto col-md-4 order-md-2 col-lg-5">
                </div>
                <div className="col-md-12 order-md-1 col-lg-10 text-center text-md-start">
                  <h1 className="mb-3">Lista de Empresas</h1>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nome da Empresa</th>
                        <th>CNPJ</th>
                        <th>Endereço</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                      </tr>
                      </thead>
                      <tbody>
                      {
                        this.state.empresas.map((empresa, index) => (
                          <tr key={index}>
                            <td>{empresa.nomeEmpresa}</td>
                            <td>{empresa.cnpj}</td>
                            <td>{empresa.endereco}</td>
                            <td>{empresa.email}</td>
                            <td><Link to={`/empresa/${empresa.id}`} className="btn btn-primary">Alterar</Link></td>
                            <td>
                              <button className="btn btn-danger" onClick={ () => {this.excluir(empresa)}}>Excluir</button>
                            </td>
                          </tr>
                        ))
                      }
                      </tbody>
                  </table>

                  <div className="d-flex flex-column flex-md-row">
                    <Link to="/empresa/novo" className="btn btn-lg btn-bd-primary mb-3 me-md-3">Cadastrar Empresa</Link>
                  </div>
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
export default Empresas;