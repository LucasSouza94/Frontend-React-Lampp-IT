import React, {Component} from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import { Link } from 'react-router-dom';

class Pagina404 extends Component{
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
                <div className="col-md-8 order-md-1 col-lg-7 text-center text-md-start">
                  <h1 className="mb-3">Pagina ou conteudo não encontrado...</h1>
                  <div className="d-flex flex-column flex-md-row">
                    <Link to="/empresa/novo" className="btn btn-lg btn-bd-primary mb-3 me-md-3">Cadastrar Empresa</Link>
                    <Link to="/empresas" className="btn btn-lg btn-outline-secondary mb-3">Listar Empresas</Link>
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
export default Pagina404;