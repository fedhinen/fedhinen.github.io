---
title: "MedIndex: API de Información Médica"
description: "Plataforma integral y API RESTful para la consulta de medicamentos y sustancias farmacéuticas"
tags: ["Java", "Spring Boot", "Python", "Astro", "Svelte", "PostgreSQL", "ETL"]
date: 2026-01-21
lang: "es"
repo: "https://github.com/fedhinen/medindex-api"
---

**MedIndex** es una solución completa para centralizar y exponer información farmacéutica detallada. Combina un potente proceso de extracción de datos (ETL) con una API robusta y una interfaz moderna de consulta.

## 💡 El Problema
La información sobre medicamentos, sus composiciones e interacciones suele estar dispersa en diversas fuentes o bloqueada en formatos difíciles de procesar automáticamente. Los desarrolladores y profesionales de la salud carecen de una API unificada y confiable para consultar estos datos de manera programática.

## 🛠️ Solución Técnica
El sistema se compone de tres pilares fundamentales que garantizan la integridad y disponibilidad de los datos:

1.  **Pipeline ETL (Python)**: Un sistema automatizado que extrae, limpia y normaliza datos de fuentes públicas (como PLM), procesando detalles complejos como dosis, contraindicaciones y composiciones.
2.  **API Backend (Spring Boot)**: Una arquitectura segura y escalable que expone los datos normalizados, gestionando la autenticación y las búsquedas complejas.
3.  **Frontend (Astro + Svelte)**: Una interfaz de usuario rápida y reactiva para la exploración manual del catálogo.

### Características Clave:
- **Base de Datos Unificada**: Información estructurada de miles de medicamentos y sustancias activas.
- **Búsqueda Avanzada**: Filtrado por nombre, sustancia activa o laboratorio.
- **Seguridad**: Implementación de OAuth2 y JWT para proteger los endpoints de la API.
- **Alto Rendimiento**: Optimizaciones en base de datos y caché para respuestas rápidas.

## 🔧 Stack Tecnológico
- **Backend**: Java 25, Spring Boot 4.0, Spring Security, JPA/Hibernate.
- **Frontend**: Astro, Svelte, TailwindCSS.
- **Data & ETL**: Python (lxml, requests), PostgreSQL.
- **Infraestructura**: Docker, Docker Compose.

Este proyecto demuestra la capacidad de integrar múltiples lenguajes y arquitecturas (Microservicios, ETL, SPA) para resolver un problema de gestión de datos a gran escala.
