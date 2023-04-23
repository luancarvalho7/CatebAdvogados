import './footer.css'
import catebLogo from '../../assets/catebadvogados.svg'
import { Link } from 'react-router-dom';

import React from 'react';

  const handleClick = (element) => {
    const target = document.getElementById(element);
    console.log('x')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };


export function Footer() {
    return (
        <footer id='catebFooter' className='marginsSpacing'>
            <img src={catebLogo} id='footerCatebLogo' />

            <section>
                <div className="footerList">
                    <h1 className='fl-title'>Links Rápidos</h1>
                    <div className="fl-onlyLinks">
                        <Link to="/" className="fl-link">Início</Link>
                        <a className="fl-link" onClick={()=>handleClick('actAreas')}>Áreas de Atuação</a>
                        <Link to="/sobre" className="fl-link">Sobre</Link>
                    </div>
                </div>

                <div className="footerList">
                    <h1 className='fl-title'>Áreas de Atuação</h1>
                    <div className="fl-onlyLinks">
                        <Link to="/area/1" className="fl-link">Direito Tributário</Link>
                        <Link to="/area/2" className="fl-link">Direito Societário</Link>
                        <Link to="/area/3" className="fl-link">Direito Empresarial</Link>
                        <Link to="/area/4" className="fl-link">Direito do Consumidor</Link>
                        <Link to="/area/5" className="fl-link">Direito Penal</Link>
                        <Link to="/area/6" className="fl-link">Direito Internacional</Link>
                        <Link to="/area/7" className="fl-link">Direito Administrativo</Link>
                        <Link to="/area/8" className="fl-link">Direito Trabalhista</Link>
                        <Link to="/area/9" className="fl-link">Direito Ambiental</Link>
                        <Link to="/area/10" className="fl-link">Direito Previdenciário</Link>
                        <Link to="/area/11" className="fl-link">Direito Civil</Link>
                        <Link to="/area/12" className="fl-link">Planejamento Jurídico/Estratégico</Link>
                    </div>
                </div>

                <div className="footerList">
                    <h1 className='fl-title'>Telefones</h1>
                    <div className="fl-onlyLinks">
                        <Link to="/" className="fl-link"> <span>BH:</span> +55(31) 3261-6973</Link>
                        <Link to="/" className="fl-link"> <span>SP:</span> +55(31) 3261-6973</Link>
                    </div>
                </div>
                <div className="footerList">
                    <h1 className='fl-title'>Endereço</h1>
                    <div className="fl-onlyLinks">
                        <Link to="/" className="fl-link"> <span> Belo Horizonte: </span> <br/>
MGAV. Brasil, 1438, Conj. 1401 Bairro Funcionários <br/> CEP: 30.140-003</Link>
                        <Link to="/" className="fl-link"> <span>São Paulo:</span> <br/>  SPAv. Brigadeiro Faria Lima n˚ 1485,<br/> 1º e 2º Andar  Bairro Pinheiros - São Paulo <br/> CEP: 01452-002</Link>
                    </div>
                </div>

            </section>

        </footer>
    )
}