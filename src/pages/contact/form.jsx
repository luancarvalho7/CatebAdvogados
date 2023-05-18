import React from 'react';
import './form.css'
import { useForm, ValidationError } from '@formspree/react';
export function ContactForm() {
    const [state, handleSubmit] = useForm("xeqwderk");
    if (state.succeeded) {
        return <p>Mensagem enviada com sucesso!</p>;
    }
    return (
        <form id="cct-Form" onSubmit={handleSubmit} >
            <label htmlFor="name">
                Nome:
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <label htmlFor="email">
                Email:
            </label>
            <input
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="textarea">
                Mensagem:
            </label>
            <textarea
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Enviar
            </button>
        </form>
    );
}
function App() {
    return (
        <ContactForm />
    );
}