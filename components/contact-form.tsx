"use client";

import { Check, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) return (
    <div className="contact-form form-success" role="status">
      <div><div className="success-icon"><Check size={25} /></div><h3>Aplicação preparada.</h3><p>Este protótipo já está pronto para conectar o envio a um CRM, e-mail ou automação do PubMachine.</p><button className="button button-secondary" style={{ marginTop: 18 }} onClick={() => setSent(false)}>Enviar outra resposta</button></div>
    </div>
  );

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row"><div className="field"><label htmlFor="nome">Nome</label><input id="nome" name="nome" placeholder="Como podemos chamar você?" required /></div><div className="field"><label htmlFor="empresa">Empresa, se tiver</label><input id="empresa" name="empresa" placeholder="Nome da empresa" /></div></div>
      <div className="form-row"><div className="field"><label htmlFor="email">E-mail</label><input id="email" name="email" type="email" placeholder="voce@empresa.com" required /></div><div className="field"><label htmlFor="telefone">Telefone / WhatsApp</label><input id="telefone" name="telefone" type="tel" placeholder="(00) 00000-0000" required /></div></div>
      <div className="field"><label htmlFor="perfil">Qual é o seu momento?</label><select id="perfil" name="perfil" defaultValue="" required><option value="" disabled>Selecione uma opção</option><option>Quero começar do zero</option><option>Já tenho uma empresa</option><option>Quero licenciar ou franquear</option><option>Quero uma parceria</option><option>Outro</option></select></div>
      <div className="field"><label htmlFor="mensagem">O que você quer construir?</label><textarea id="mensagem" name="mensagem" placeholder="Conte um pouco sobre seu momento, objetivo ou oportunidade..." required /></div>
      <button type="submit" className="button button-primary form-submit">Enviar aplicação <Send size={14} /></button>
    </form>
  );
}
