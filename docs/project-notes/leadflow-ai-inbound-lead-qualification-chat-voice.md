# LeadFlow AI - Inbound Lead Qualification (Chat + Voice)

**Stack:** React, Vite, TypeScript, Next.js, Supabase, PostgreSQL, pgvector, Ollama, OpenAI, n8n, Vapi, Cal.com, Docker, SQL

> Extracted from the portfolio site during the phase 03 content pass.
> Kept here as project documentation; the site now carries a short overview only.

## General Information

**LeadFlow AI** is an inbound lead qualification system that meets prospects wherever they arrive - through an embeddable chat widget or over the phone - answers their questions from your own documentation, scores them, and books qualified leads straight into a calendar.

**My Role:** AI Systems Engineer - full-stack and GenAI integration, covering the widget, the retrieval pipeline, lead scoring, booking flow, workflow automation, and the admin CRM.

**Project Overview:**

**1. Embeddable Chat Widget:**

A self-contained React/Vite widget that drops into any site with a single script tag and talks to a TypeScript Next.js API, so the assistant can be deployed on a client site without touching their stack.

**2. Grounded Answers via RAG:**

Retrieval-augmented generation over Supabase Postgres with pgvector, so the assistant answers from a curated chunk store rather than improvising product details.

**3. Voice Channel:**

Vapi voice tools extend the same qualification logic to inbound phone calls, letting chat and voice share one backend and one lead pipeline.

**4. Automated Qualification and Booking:**

Heuristic scoring ranks incoming leads, and qualified prospects are handed to Cal.com to book a slot - written back to Supabase idempotently so a retried webhook never produces a duplicate appointment.

**5. Bilingual Support:**

The assistant operates in English and French, switchable from the widget, so a single deployment serves both audiences.

**6. Admin CRM:**

An internal dashboard surfacing captured leads, full conversation transcripts, and booked appointments in one place.

## Project Description

**1. Chat Widget (React / Vite):**

**Embeddable Client:**

- Standalone React application bundled with Vite for distribution as an embeddable widget.

- Installs on a host page via a script tag with tenant and language configuration attributes.

- Conversational UI with message history maintained across a visitor session.

- Language toggle switching the assistant between English and French at runtime.

---

**2. API Layer (Next.js / TypeScript):**

**Backend Services:**

- TypeScript Next.js API handling chat turns, retrieval, scoring, and booking orchestration.

- Serves as the single backend shared by both the chat widget and the voice channel.

- Configurable model backend supporting Ollama for local inference and OpenAI for hosted inference.

---

**3. Retrieval Pipeline (Supabase / pgvector):**

**Vector Store:**

- Supabase Postgres with the pgvector extension as the embedding store.

- Document content split into a chunk store for granular retrieval.

- Cosine similarity search exposed as a Postgres RPC, keeping ranking in the database rather than in application code.

- Embeddings generated through Ollama or OpenAI depending on deployment configuration.

---

**4. Lead Scoring and Booking:**

**Qualification:**

- Heuristic scoring model evaluating captured lead signals to rank prospect quality.

- Scored leads persisted to Supabase alongside their originating transcript.

**Appointment Flow:**

- Cal.com integration for scheduling qualified leads into available slots.

- Idempotent row writes to Supabase, so repeated or replayed booking events resolve to a single appointment record.

---

**5. Workflow Automation (n8n):**

**Event Handling:**

- HMAC-verified Cal.com webhooks, rejecting requests that fail signature validation.

- CRM event hooks dispatched fire-and-forget, so downstream automation never blocks a user-facing response.

- n8n runs containerized via Docker for reproducible workflow deployment.

---

**6. Voice Channel (Vapi):**

**Phone Qualification:**

- Vapi voice tools wired to the same retrieval and qualification backend used by chat.

- Inbound calls follow the same answer, score, and book path as a web conversation.

---

**7. Admin CRM:**

**Operator Dashboard:**

- Lead list with captured contact details and heuristic scores.

- Full conversation transcripts for reviewing how each lead was qualified.

- Appointment view reflecting confirmed Cal.com bookings.

---

**8. Infrastructure and Documentation:**

**Operations:**

- Versioned SQL migrations managing the Supabase schema.

- Docker-based n8n deployment for the automation layer.

- Demo walkthrough and architecture documentation maintained in the repository.

## Technologies Used

**1. Widget Frontend:**

- React for the embeddable chat interface.

- Vite for bundling the widget into a distributable script.

- Bilingual English and French interface support.

**2. API and Backend:**

- Next.js for the API layer serving chat, retrieval, and booking endpoints.

- TypeScript for static typing across the API surface.

**3. AI / GenAI Stack:**

- Retrieval-augmented generation grounding responses in indexed source content.

- Ollama for locally hosted embedding and chat inference.

- OpenAI as the hosted alternative for embeddings and chat completion.

- Prompt design tuned for qualification-oriented conversation.

**4. Data and Retrieval:**

- Supabase as the managed Postgres platform and application datastore.

- pgvector for embedding storage and vector similarity search.

- Postgres RPC implementing cosine similarity retrieval in-database.

- SQL migrations for versioned schema management.

**5. Automation and Integrations:**

- n8n for workflow orchestration and event routing.

- HMAC signature verification securing inbound Cal.com webhooks.

- Cal.com for appointment scheduling and availability.

- Vapi for the inbound voice channel and telephony tooling.

**6. Infrastructure:**

- Docker for containerized n8n deployment.

- Repository-maintained architecture and demo documentation.

## Libraries & Dependencies

**Frontend Libraries:**

1. **React** - Component library powering the embeddable chat widget.

2. **Vite** - Build tool bundling the widget for single-script-tag embedding.

3. **TypeScript** - Static typing shared across widget and API code.

**API Libraries:**

4. **Next.js** - Framework hosting the chat, retrieval, and booking API routes.

**AI / RAG Libraries:**

5. **Ollama** - Local model runtime for embeddings and chat inference.

6. **OpenAI** - Hosted embedding and chat completion provider.

**Data Libraries:**

7. **Supabase** - Managed Postgres platform providing database and client SDK.

8. **PostgreSQL** - Relational store for chunks, leads, transcripts, and appointments.

9. **pgvector** - Postgres extension enabling vector similarity search.

**Integration Libraries:**

10. **n8n** - Workflow automation handling webhooks and CRM event hooks.

11. **Cal.com** - Scheduling platform for booking qualified leads.

12. **Vapi** - Voice agent tooling for the inbound phone channel.

**Infrastructure:**

13. **Docker** - Containerized deployment of the n8n automation layer.
