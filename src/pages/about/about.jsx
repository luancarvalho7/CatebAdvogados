import './about.css'
import deco from '../../assets/icons/Deco.svg'
export function About() {
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
                    <p className='txtSubtitle'>Somos um escritório de advocacia que presta serviços de Consultoria e Planejamento Jurídico, tendo como foco o Direito Empresarial, identificando tendências e oportunidades, oferecendo a seus clientes serviços personalizados, baseados na experiência e habilidades de sua equipe técnica. A empresa busca equilibrar os interesses do cliente com o Direito e o bem comum, fundamentando-se em objetividade, comprometimento, eficiência e criatividade.<br /><br />

                        Atendemos clientes com diversos conflitos jurídicos, focando em questões legais complexas e situações de alto conflito para proporcionar soluções eficientes e personalizadas no Direito Empresarial.</p>
                </div>
                <div id="ourValues"></div>
                <div id="Logo"></div>
            </section>
        </main>
    )
}