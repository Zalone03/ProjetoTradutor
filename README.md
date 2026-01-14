# 🌍 Tradutor Web — Tradução em Tempo Real com Voz

<img width="1280" height="852" alt="image" src="https://github.com/user-attachments/assets/e819d689-dde1-45dd-a5ae-4c75f929a7fe" />


Uma aplicação web moderna de tradução de textos com suporte a **reconhecimento de voz**, **tradução automática em tempo real**, **troca rápida de idiomas** e uma **interface simples**.

Este projeto foi pensado para ser **100% frontend**, utilizando tecnologias nativas do navegador e a API pública **Mymemory**.

---

## ✨ Funcionalidades

* 🌐 Tradução de texto entre múltiplos idiomas
* 🎙️ Entrada por voz (Speech-to-Text)
* 🔄 Troca rápida entre idioma de origem e destino
* ⚡ Tradução em tempo real enquanto o usuário digita ou fala
* 🧠 Detecção automática do idioma padrão do navegador
* 🗺️ Interface simples
* 📱 Totalmente responsivo (desktop e mobile)

---

## 🧩 Tecnologias Utilizadas

* **HTML5** — Estrutura da aplicação
* **CSS3** — Estilização moderna e responsiva
* **JavaScript** — Lógica da aplicação
* **Web Speech API** — Reconhecimento de voz nativo do navegador
* **Mymemory API** — Serviço de tradução open-source, por ser 

---

## 🎙️ Reconhecimento de Voz

A aplicação utiliza a **Web Speech API**, compatível com navegadores baseados em Chromium.

### Como funciona:

1. O usuário seleciona o idioma de origem
2. Clica no botão do microfone
3. Fala normalmente
4. O texto reconhecido é inserido automaticamente no campo de entrada
5. A tradução acontece em tempo real

> ⚠️ Observação: o reconhecimento de voz depende do suporte do navegador.

---

## 🌐 Tradução

A tradução é feita através da API pública do **LibreTranslate**:

* Não requer chave de API
* Open-source
* Suporte a dezenas de idiomas

A tradução é disparada automaticamente sempre que:

* O texto é digitado
* O texto é inserido via voz
* O idioma de origem ou destino é alterado

---

## 🔁 Troca de Idiomas

O botão central permite:

* Inverter idioma de origem ↔ destino
* Trocar automaticamente o texto de entrada com o texto traduzido

Tudo acontece de forma fluida, sem recarregar a página.

---

## 🌍 Idiomas Suportados

Inclui, entre outros:

* Português (Brasil)
* Inglês
* Espanhol
* Francês
* Alemão
* Italiano
* Japonês
* Coreano
* Chinês
* Russo
* Árabe

A lista pode ser facilmente expandida no arquivo JavaScript conforme suportado pela API.

---

## 📱 Responsividade

* Layout em flex adaptável
* Interface otimizada para celulares
* Botões e selects acessíveis ao toque

---

## 🚀 Como Usar

acesse o link: https://zalone03.github.io/ProjetoTradutor/

1. Escolha os idiomas
2. Digite ou fale
3. Veja a tradução em tempo real

---

## 📂 Estrutura do Projeto

```bash
📁 project-root
 ├── index.html
 ├── style.css
 ├── script.js
 ├── background.png
 ├── mic.png
 ├── listen.png
 └── README.md
```
---

Desenvolvido com foco em **aprendizado, UX e performance**, utilizando apenas tecnologias web.

Se quiser evoluir este projeto, sinta-se à vontade para contribuir 🚀

## Limitações e comportamento da API de tradução

Este projeto utiliza a MyMemory Translation API, uma API gratuita baseada em translation memory (memórias de traduções humanas), e não em inteligência artificial generativa.
Por esse motivo, alguns comportamentos são esperados, como Traduções inesperadas ou fora de contexto
