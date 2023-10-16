--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Homebrew)
-- Dumped by pg_dump version 14.8 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: contacts; Type: TABLE; Schema: public; Owner: jia
--

CREATE TABLE public.contacts (
    contact_id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255),
    phone character varying(255) NOT NULL,
    notes character varying(255)
);


ALTER TABLE public.contacts OWNER TO jia;

--
-- Name: contacts_contact_id_seq; Type: SEQUENCE; Schema: public; Owner: jia
--

CREATE SEQUENCE public.contacts_contact_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contacts_contact_id_seq OWNER TO jia;

--
-- Name: contacts_contact_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jia
--

ALTER SEQUENCE public.contacts_contact_id_seq OWNED BY public.contacts.contact_id;


--
-- Name: contacts contact_id; Type: DEFAULT; Schema: public; Owner: jia
--

ALTER TABLE ONLY public.contacts ALTER COLUMN contact_id SET DEFAULT nextval('public.contacts_contact_id_seq'::regclass);


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: jia
--

COPY public.contacts (contact_id, name, email, phone, notes) FROM stdin;
1	John Doe	tzirw@example.com	555-555-5555	Notes about John Doe
2	Jane Doe	tugrp@example.com	555-555-5555	Notes about Jane Doe
3	Bob Smith	ztejd@example.com	555-555-5555	Notes about Bob Smith
\.


--
-- Name: contacts_contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jia
--

SELECT pg_catalog.setval('public.contacts_contact_id_seq', 3, true);


--
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: jia
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (contact_id);


--
-- PostgreSQL database dump complete
--

