import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import data from '../../data/AreasOfAct.json'

import './actArea.css'
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
  2: dEmpresarial,
  3: dCivil,
  4: dPenal,
  5: dInternacional,
  6: dAdministrativo,
  7: dTrabalhista,
  8: dAmbiental,
  9: dPrevidenciario,
  10: dJuridico,
}   

export function ActArea() {

    const {id} = useParams()
    const currentData = data[id-1]

    const [content, setContent] = useState('');

    useEffect(() => {
        setContent(currentData.text);
      }, [id]);
        
    const convertNewlinesToBreaks = (text) => {
      const lines = text.split('\n');
      return lines.map((line, index) => (
        <React.Fragment key={index}>
          <span>{line}</span>
          {index < lines.length - 1 && <br />}
        </React.Fragment>
      ));
    };

   
    return (
        <main className='actAreaPage marginsSpacing'>
            <div className="navArea"></div>
            <section className='aap-Content'>
                <div className="aap-heading"><img src={areaIcons[id]} className='aap-icon'/><h1 className='txtTitle'>{currentData.title}</h1></div>
                <div className="aap-pArea">
                    <p className='aap-paragraph'>{convertNewlinesToBreaks(content)}</p>
                </div>
                <div className="aap-buttons">
                    <Link to='/' className='btn btnSecond'>Voltar</Link>
                    <Link to='/Contato' className='btn btnMain'>Contato</Link>
                </div>
            </section>
        </main>
    )
}