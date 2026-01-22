---
title: "MedIndex: Plataforma de Información Médica"
description: "API completa sobre medicamentos con web scraping automatizado y documentación interactiva"
tags: ["Spring Boot", "Java", "Python", "PostgreSQL", "Astro", "ETL", "Web Scraping"]
date: 2026-01-15
lang: "es"
docs: "https://medindex.fedhinen.me"
---

**MedIndex** es una API pública y gratuita que proporciona información estructurada sobre medicamentos. Nació de la necesidad de tener una API confiable para consultar datos farmacéuticos de forma programática.

## 💡 El Problema

No encontre una API pública que proporcione información completa sobre medicamentos y sobre todo que me agrade, la solución, crear una propia

## 🛠️ Solución Técnica

Una API REST completamente documentada que cualquiera puede usar:

1. **Extracción de Datos (Python)**: Una serie de scripts para obtener la información desde PLM, de momento no es automatica

2. **API REST (Spring Boot)**: Endpoints documentados con OpenAPI/Swagger para consultar medicamentos, sustancias activas, laboratorios y presentaciones. Incluye autenticación JWT para proteger el servicio.

3. **Base de Datos (PostgreSQL)**: Más de 10,000 medicamentos con información detallada sobre composición, indicaciones, contraindicaciones, dosis y más.

4. **Documentación (Astro + Starlight)**: Sitio con ejemplos de uso y guías de integración para facilitar la adopción de la API.

### Características Clave

- **API Pública**: Acceso gratuito a información estructurada de medicamentos.
- **Datos Completos**: Más de 10,000 medicamentos con composición, indicaciones, contraindicaciones, dosis y efectos secundarios.
- **Documentación Interactiva**: Swagger UI integrado para probar los endpoints sin escribir código.
- **Búsqueda Flexible**: Consultar por nombre de medicamento, sustancia activa o laboratorio.
- **Fácil Integración**: Respuestas JSON estándar y autenticación simple con API keys.

## 🔧 Stack Tecnológico

- **Spring Boot 4.0 & Java 25**: Framework empresarial moderno con JPA/Hibernate para persistencia.
- **Python**: Scripts ETL con scrapling, lxml y requests para web scraping robusto.
- **PostgreSQL 16**: Base de datos relacional con índices optimizados para rendimiento.
- **Astro + Starlight**: Framework estático para documentación técnica moderna.
- **Docker & Docker Compose**: Orquestación de servicios y despliegue simplificado.
- **SpringDoc OpenAPI**: Generación automática de documentación de API.
- **JWT & Spring Security**: Sistema de autenticación y autorización seguro.

## 📊 Arquitectura de Datos

La base de datos incluye las siguientes entidades principales:

- **Medicamentos**: Información básica y relaciones con laboratorios y formas farmacéuticas
- **Sustancias**: Principios activos con sus URLs de referencia
- **Presentaciones**: Detalles de dosis, cantidades y unidades
- **Detalles de Medicamentos**: Rubros completos (composición, indicaciones, contraindicaciones, etc.)
- **Laboratorios**: Fabricantes farmacéuticos
- **Formas Farmacéuticas**: Tipos de presentación (tabletas, soluciones, etc.)

## 🚀 Próximos Pasos

- **Actualizaciones Automáticas**: Automatizar el proceso de scraping para mantener la base de datos sincronizada con las fuentes oficiales periódicamente.
- **Rate Limiting**: Implementar límites de uso justos para mantener el servicio estable y prevenir abusos.
- **Búsqueda por Texto Completo**: Permitir búsquedas más inteligentes en descripciones e indicaciones.
- **Sponsors**: Abrir la posibilidad de sponsors para mantener y escalar el servicio gratuitamente.
- **Más Datos**: Expandir la cobertura a otros mercados farmacéuticos latinoamericanos.
- **Repositorio Público**: Abrir el código fuente para contribuciones de la comunidad.
