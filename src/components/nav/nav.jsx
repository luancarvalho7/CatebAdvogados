import React, { useState } from 'react';
import './nav.css';
import catebadvogadosLogo from '../../assets/catebadvogados.svg';
import closeIcon from '../../assets/icons/close.svg';
import { Link } from 'react-router-dom';

export function Nav() {
    const [navHeight, setnavHeight] = useState('75px');
    const [nLinksOp, setnLinksOp] = useState('0');


    const togglenavHeight = () => {
        setnavHeight((prevState) => (prevState === '75px' ? '240px' : '75px'));
        setnLinksOp((prevState) => (prevState === '0' ? '100' : '0'));
    };

    const handleClick = (element) => {
        const target = document.getElementById(element);
        console.log('x')
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav id="nav" style={{
            backgroundColor: navHeight === '240px' ? `var(--blue800)` : 'transparent',
            height: navHeight
        }}>
            <div id="navContent" className="marginsSpacing">
                <Link to='/'><img src={catebadvogadosLogo} id="logoCateb" alt="Cateb Advogados Logo" /></Link>
                <div id="navLinks">
                    <a className="nLink" onClick={() => handleClick('actAreas')}>Áreas de Atuação</a>
                    <Link className="nLink" to="/"> Sobre </Link>
{/*                     <Link className="nLink" to="/"> Blog </Link>
 */}                    <Link className="nLink" to="/"> Contato </Link>
                </div>
                <div
                    id="hamburguerMobile"
                    onClick={togglenavHeight}
                    style={{
                        backgroundImage: navHeight === '240px' ? `url(${closeIcon})` : '',
                    }}
                ></div>
            </div>
            <div id="linksMobile" style={{ opacity: nLinksOp }}>
                <a className="nLink" onClick={() => handleClick('actAreas')}>Áreas de Atuação</a>
                <Link className="nLink" to="/"> Sobre </Link>
{/*                 <Link className="nLink" to="/"> Blog </Link>
 */}                <Link className="nLink" to="/"> Contato </Link>
            </div>
        </nav>
    );
}
