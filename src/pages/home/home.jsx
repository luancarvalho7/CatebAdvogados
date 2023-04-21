
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './home.css'

import areasOfAct from '../../data/AreasOfAct.json'
import { AreasCard } from './components/areasCard'

import chartHeart from '../../assets/images/chartHeart.svg'
import chartStar from '../../assets/images/chartStar.svg'
import decoImg from '../../assets/icons/Deco.svg'

/* Card Icons*/
import dTributario from '../../assets/icons/Areas/dTributario.png';
import dTrabalhista from '../../assets/icons/Areas/dTrabalhista.png';
import dSocietario from '../../assets/icons/Areas/dSocietario.png';
import dPrevidenciario from '../../assets/icons/Areas/dPrevidenciario.png';
import dPenal from '../../assets/icons/Areas/dPenal.png';
import dJuridico from '../../assets/icons/Areas/dJuridico.png';
import dInternacional from '../../assets/icons/Areas/dInternacional.png';
import dEmpresarial from '../../assets/icons/Areas/dEmpresarial.png';
import dConsumidor from '../../assets/icons/Areas/dConsumidor.png';
import dCivil from '../../assets/icons/Areas/dCivil.png';
import dAmbiental from '../../assets/icons/Areas/dAmbiental.png';
import dAdministrativo from '../../assets/icons/Areas/dAdministrativo.png';

const areaIcons = {
    1: dTributario,
    2: dSocietario,
    3: dEmpresarial,
    4: dConsumidor,
    5: dPenal,
    6: dInternacional,
    7: dAdministrativo,
    8: dTrabalhista,
    9: dAmbiental,
    10: dPrevidenciario,
    11: dCivil,
    12: dJuridico
};



export function Home() {
    return (
        <main>
            <header >
                <div id="hContent" className='marginsSpacing'>
                    <h1 className='txtHeading'>Impacto Jurídico, Resultados Surpreendentes</h1>
                    <h2 className='txtSubtitle'>Advogados Experientes e Comprometidos com o Equilíbrio entre seus Direitos, Interesses e o Bem Comum</h2>
                    <div id="hButtons">
                        <button className='btn btnMain'> Fale Conosco </button>
                        <button className='btn btnSecond'> Saiba Mais </button>
                    </div>
                </div>
                <div id='hBackground'>
                    <div id="bgCover"></div>
                </div>
            </header>
            <section id='choice' className='marginsSpacing'>
                <h1 className='txtTitle'>A Escolha Simples para Disputas Complexas</h1>
                <h2 className="txtSubtitle">Compromisso com a justiça, equilíbrio e respeito aos direitos e interesses de nossos clientes em todas as situações</h2>
                <div id="choiceStatus">
                    <div className="cStatus">
                        <div className="cStatus-illustration"><img src={chartHeart}></img><h1>7230</h1></div>
                        <h1 className='cStautstxt'>Clientes Satisfeitos</h1>
                    </div>
                    <div className="cStatus">
                        <div className="cStatus-illustration"><img src={chartStar}></img><h1>98%</h1></div>
                        <h1 className='cStautstxt'>Casos bem-sucedidos</h1>
                    </div>
                </div>
            </section>
            <section id='actAreas' className='marginsSpacing'>
                <div id="aaInfo">
                    <div id="aaTitle"><h1 className='txtTitle'>Nossas Áreas de Atuação</h1> <img src={decoImg} /></div>
                    <div id="separatorBar"></div>
                    <div id='aaDescription'><h2 className='txtSubtitle'>Conheça nossas especialidades e descubra como podemos ajudá-lo a enfrentar os desafios jurídicos com eficiência e agilidade.
                    </h2></div>
                </div>
                {
                    <Swiper slidesPerView={'auto'} spaceBetween={24} centeredSlides={false}>
                        {areasOfAct.map(area => (
                            <SwiperSlide key={area.id}>
                                <AreasCard
                                    key={area.id}
                                    title={area.title}
                                    description={area.description}
                                    icon={areaIcons[area.id]}
                                    link={`/area/${area.id}`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                }
            </section>
        </main >

    )
}