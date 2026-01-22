---
title: "MedIndex: Medical Information Platform"
description: "Complete medicines API with automated web scraping and interactive documentation"
tags: ["Spring Boot", "Java", "Python", "PostgreSQL", "Astro", "ETL", "Web Scraping"]
date: 2026-01-15
lang: "en"
docs: "https://medindex.fedhinen.me"
---

**MedIndex** is a free and public API that provides structured information about medicines. It was born from the need to have a reliable API to query pharmaceutical data programmatically.

## 💡 The Problem

There is no public API that provides comprehensive information about medicines. Existing APIs are paid, outdated, or have severe limitations. Developers who need to integrate pharmaceutical information into their applications lack open and accessible options.

## 🛠️ Technical Solution

A fully documented REST API that anyone can use:

1. **Data Extraction (Python)**: Automated scripts that collect information from public pharmaceutical sources and normalize it into a structured database.

2. **REST API (Spring Boot)**: Documented endpoints with OpenAPI/Swagger to query medicines, active substances, laboratories, and presentations. Includes JWT authentication to protect the service.

3. **Database (PostgreSQL)**: Over 10,000 medicines with detailed information on composition, indications, contraindications, dosage, and more.

4. **Documentation (Astro + Starlight)**: Site with usage examples and integration guides to facilitate API adoption.

### Key Features

- **Public API**: Free access to structured medicine information.
- **Complete Data**: Over 10,000 medicines with composition, indications, contraindications, dosage, and side effects.
- **Interactive Documentation**: Integrated Swagger UI to test endpoints without writing code.
- **Flexible Search**: Query by medicine name, active substance, or laboratory.
- **Easy Integration**: Standard JSON responses and simple authentication with API keys.

## 🔧 Tech Stack

- **Spring Boot 4.0 & Java 25**: Modern enterprise framework with JPA/Hibernate for persistence.
- **Python**: ETL scripts with scrapling, lxml, and requests for robust web scraping.
- **PostgreSQL 16**: Relational database with optimized indexes for performance.
- **Astro + Starlight**: Static framework for modern technical documentation.
- **Docker & Docker Compose**: Service orchestration and simplified deployment.
- **SpringDoc OpenAPI**: Automatic API documentation generation.
- **JWT & Spring Security**: Secure authentication and authorization system.

## 📊 Data Architecture

The database includes the following main entities:

- **Medicines**: Basic information and relationships with laboratories and pharmaceutical forms
- **Substances**: Active ingredients with their reference URLs
- **Presentations**: Details on dosage, quantities, and units
- **Medicine Details**: Complete sections (composition, indications, contraindications, etc.)
- **Laboratories**: Pharmaceutical manufacturers
- **Pharmaceutical Forms**: Presentation types (tablets, solutions, etc.)

## 🚀 Next Steps

- **Automatic Updates**: Automate the scraping process to keep the database synchronized with official sources periodically.
- **Rate Limiting**: Implement fair usage limits to keep the service stable and prevent abuse.
- **Full-Text Search**: Enable smarter searches in descriptions and indications.
- **Sponsors**: Open the possibility for sponsors to maintain and scale the service for free.
- **More Data**: Expand coverage to other Latin American pharmaceutical markets.
- **Public Repository**: Open source the code for community contributions.
