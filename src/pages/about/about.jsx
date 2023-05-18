import './about.css'
import deco from '../../assets/icons/Deco.svg'
import heart from '../../assets/icons/Values/Heart.svg'
import lock from '../../assets/icons/Values/lock.svg'
import balance from '../../assets/icons/Values/Balance.svg'
import logo from '../../assets/onlyLogoShape.svg'

import React, { useEffect } from 'react';





export function About() {

    const circleRatio = 0.05;
    const logoRatio = 0.05;

    useEffect(() => {
        const handleMouseMove = (event) => {
            const viewportWidth = window.innerWidth;
    
            if (viewportWidth > 720) {
                const mouseX = event.clientX;
                const mouseY = event.clientY;
    
                const circleX = mouseX * circleRatio;
                const circleY = mouseY * circleRatio;
                const logoX = mouseX * logoRatio;
                const logoY = mouseY * logoRatio;
    
                const logoBackground = document.getElementById('logoBackground');
                const logoShape = document.getElementById('logoShape');
    
                logoBackground.style.transform = `translate(${circleX}px, ${circleY}px)`;
                logoShape.style.transform = `translate(${logoX}px, ${logoY}px)`;
            }
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    

    return (
        <main>
            <header id="headerAbout">
                <div id="aContent" className='marginsSpacing'>
                    <h1 className='txtHeading'>Nossa História</h1>
                </div>
                <div id='aBackground'>
                    <div className="bgCover"></div>
                </div>
            </header>
            <section id='aboutContent' className='marginsSpacing lightSection'>
                <div id="whoWeAre">
                    <div id="wwa-title">
                        <img src={deco} />
                        <h1 className='txtTitle'>Quem nós somos?</h1>
                        <img src={deco} />
                    </div>
                    <p className='txtSubtitle'>Somos um escritório de advocacia que presta serviços de Consultoria , Contencioso e Planejamento Jurídico, com atuação forte no Direito Empresarial.<br/><br/>

O escritório oferece aos clientes serviços personalizados, baseados na vasta experiência e nas habilidades da equipe técnica, que perpassam por todas as áreas do Direito, fazendo possível defender os mais diversos interesses e necessidades dos clientes, sejam pessoas jurídicas ou físicas, sempre de forma fundamentada, objetiva, comprometida, eficiente e criativa.
</p>
                </div>
                <div id="ourValues">
                    <div id="ov-title">
                        <h1 className='txtTitle'>Nossos Valores</h1>
                        <img src={deco} />
                        <p className='txtSubtitle'>Na CATEB ADVOGADOS, nossos valores guiam nosso trabalho e relacionamento com os clientes, focando na qualidade, ética e no melhor para nossos clientes e a sociedade.</p>
                    </div>
                    <div id="ov-values">
                        <div className="valueCard">
                            <img src={heart} className='vc-img' />
                            <div className="vc-title txtTitle">Confiança e Transparência</div>
                            <div className="vc-content txtSubtitle">Construção de relacionamentos duradouros com nossos clientes, fundamentados na confiança, transparência e comunicação aberta</div>
                        </div>
                        <div className="valueCard">
                            <img src={balance} className='vc-img' />
                            <div className="vc-title txtTitle">Justiça e Equilíbrio</div>
                            <div className="vc-content txtSubtitle">Compromisso com a justiça, equilíbrio e respeito aos direitos e interesses de nossos clientes em todas as situações</div>
                        </div>
                        <div className="valueCard">
                            <img src={lock} className='vc-img' />
                            <div className="vc-title txtTitle">Proteção Empresarial</div>
                            <div className="vc-content txtSubtitle">Dedicação em proteger e defender os interesses empresariais, garantindo segurança e crescimento no ambiente de negócios</div>
                        </div>
                    </div>
                </div>
                <div id="logoBackground">
                    <img id="logoShape" src={logo} alt="Logo" />
             </div>
            </section>
        </main>
    )
}