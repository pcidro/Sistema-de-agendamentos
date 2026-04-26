# 💈 Barber Schedule

Acesse o projeto online:
👉 https://barbersschedule.netlify.app/

O **Barber Schedule** é um sistema de agendamento para barbearias desenvolvido para oferecer uma experiência simples e intuitiva tanto para o barbeiro quanto para o cliente. O sistema permite organizar atendimentos por períodos e garante a integridade dos dados através de diversas regras de negócio.

## Sobre o projeto

O projeto foca na gestão de horários, permitindo selecionar data, horário e nome do cliente. Os agendamentos são organizados automaticamente entre **Manhã, Tarde e Noite**, sendo exibidos em tempo real na interface.

## Tecnologias utilizadas

O projeto foi construído utilizando as melhores práticas do ecossistema React:

- **React** (Biblioteca principal)
- **TypeScript** (Tipagem estática para maior segurança)
- **Tailwind CSS** (Estilização moderna e responsiva)
- **Context API** (Gerenciamento de estado global)
- **Custom Hooks** (Encapsulamento de lógica de negócio)
- **LocalStorage** (Persistência de dados no navegador)
- **React Hot Toast** (Feedbacks visuais dinâmicos)

## ⚙️ Funcionalidades

- **Seleção de data:** Calendário interativo para agendamentos.
- **Gestão de horários:** Seleção apenas de horários disponíveis.
- **Identificação:** Cadastro rápido do nome do cliente.
- **Dashboard em tempo real:** Listagem imediata após o agendamento.
- **Organização por períodos:** Filtros automáticos para Manhã, Tarde e Noite.

## Regras de Negócio e Validações

Para garantir a consistência do sistema, foram implementadas as seguintes travas:

- Impedimento de agendamentos em horários que já passaram.
- Bloqueio de horários já ocupados por outros clientes.
- Impossibilidade de agendamentos retroativos (datas passadas).
- Limite de agendamento fixado em no máximo 10 dias no futuro.
- Atualização dinâmica da lista de horários conforme a disponibilidade.

### Validação de Formulário:

O sistema monitora o estado de envio (`submitted`) e valida obrigatoriedade dos campos (data, horário e nome). O botão de ação é desabilitado em caso de inconsistência, e o usuário recebe feedback visual via `toast.success` ao finalizar.

## Hooks Personalizados:

useScheduling: Gerencia o formulário, valida dados e cria o objeto de agendamento com o período correto.

useAgenda: Responsável por filtrar e organizar os dados que serão exibidos na tela conforme a data selecionada.

## Arquitetura e Organização

A estrutura de pastas foi pensada para escalabilidade e separação de responsabilidades:

src/
├── components/ # Componentes de UI reutilizáveis
├── modules/ # Módulos principais (Booking e Schedule)
├── context/ # Gerenciamento de estado (Appointments Context)
├── hooks/ # Lógica extraída (useScheduling, useAgenda)
├── utils/ # Funções auxiliares e formatadores
└── types/ # Definições de interfaces TypeScript

## Como rodar o projeto

Clone o repositório.

Instale as dependências:

npm install
Inicie o servidor de desenvolvimento:

npm run dev

## Aprendizados

Durante o desenvolvimento deste projeto, foram consolidados importantes conceitos:

Gerenciamento de estado com Context API
Criação e uso de Custom Hooks para separar lógica de negócio
Organização de código em arquitetura modular
Manipulação de datas e tratamento de timezone no JavaScript
Implementação de validação de formulários e controle de erros
Aplicação de regras de negócio no frontend
Construção de interfaces responsivas com Tailwind CSS

## Possíveis melhorias futuras

Autenticação de usuários (Login/Senha).

Integração com backend e banco de dados real (PostgreSQL/Node.js).
