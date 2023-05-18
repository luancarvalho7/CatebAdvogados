import './contact.css'
import { ContactForm } from './form'
export function Contact() {
    return (

        <div id="contact" className='marginsSpacing'>
            <div id="cct-Title">
                <h1 className='txtTitle'>Contato</h1>
                <h2 className='txtSubtitle'>Entre em contato conosco preenchendo o formuláro abaixo</h2>
            </div>
           <ContactForm/>
        </div>
    )
}