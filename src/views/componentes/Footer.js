import React, {Component} from 'react';

class Footer extends Component{
  render(){
  return (
      <div>
          <footer className="bd-footer py-5 mt-5 bg-light">
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-6 mb-6">
                  <div className="list-unstyled small text-muted">
                    <p className="mb-2">Criado por Lucas Vasconcelos Souza. <a href="/docs/5.0/about/team/"></a> Desponibilizado no github <a href="https://github.com/twbs/bootstrap/graphs/contributors">para download.</a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
      </div>
    );
  }
}

export default Footer;
