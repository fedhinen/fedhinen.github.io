---
title: "Pulse: Plataforma de Ejecución de Código Remoto"
description: "Plataforma FaaS autohospedada para ejecutar funciones en contenedores aislados"
tags: ["SvelteKit", "Python", "FastAPI", "Docker", "FaaS", "TypeScript"]
date: 2025-12-16
lang: "es"
repo: "https://github.com/fedhinen/pulse"
---

**Pulse** es una plataforma de **Function-as-a-Service (FaaS)** diseñada para permitir la ejecución de código bajo demanda en entornos aislados y seguros. Permite a los desarrolladores desplegar funciones en Python y TypeScript sin preocuparse por la infraestructura subyacente.

## 💡 El Problema
Ejecutar código de usuario o scripts dinámicos de forma segura es un desafío complejo. Las soluciones comerciales como AWS Lambda pueden ser costosas y difíciles de depurar localmente, mientras que construir una solución propia requiere manejar orquestación de contenedores, seguridad y aislamiento de recursos.

## 🛠️ Solución Técnica
Pulse implementa una arquitectura de microservicios que separa la gestión de la ejecución:

1.  **Web & API Gateway (SvelteKit)**: Maneja la autenticación de usuarios, gestión de funciones, claves de API y persistencia de datos.
2.  **Manager Service (Python/FastAPI)**: Un servicio dedicado que interactúa directamente con el Docker Daemon. Se encarga de aprovisionar contenedores efímeros, inyectar el código del usuario y capturar la salida.
3.  **Runtimes Aislados**: Imágenes Docker optimizadas para cada lenguaje (Python, TypeScript) que garantizan que el código se ejecute en un entorno limpio y seguro.

### Características Clave:
- **Multi-Runtime**: Soporte nativo para Python y TypeScript.
- **Aislamiento Total**: Cada ejecución ocurre en un contenedor Docker independiente.
- **Gestión de API Keys**: Autenticación segura para invocar funciones remotamente.
- **Dashboard de Gestión**: Interfaz web para crear, editar y probar funciones.

## 🔧 Stack Tecnológico
- **SvelteKit**: Framework full-stack para la aplicación web y API principal.
- **Python & FastAPI**: Servicio de orquestación de contenedores de alto rendimiento.
- **Docker SDK**: Para la gestión programática de contenedores y volúmenes.
- **Drizzle ORM & PostgreSQL**: Persistencia de datos robusta y tipada.
- **Better Auth**: Sistema de autenticación seguro.
- **TailwindCSS**: Estilizado moderno y responsivo.

## 🚀 Roadmap
El proyecto se encuentra en desarrollo activo. Los próximos pasos incluyen:

1.  **Logs Persistentes**: Guardar logs de ejecución en base de datos para auditoría y depuración.
2.  **Ejecución Asíncrona**: Manejo de handlers remotos con **RabbitMQ** y endpoints para consultar el estado de tareas largas (Polling/Webhooks).
3.  **Rate Limiting**: Agregar límites de llamadas para proteger los recursos del servidor.
4.  **Optimización de Arranque**: Estrategias para mitigar el "Cold Start" y mejorar el "Hot Start" de contenedores.
5.  **Refactorización**: Aplicar patrones de diseño para mejorar la mantenibilidad del código del Manager.
6.  **UI/UX**: Mejorar el estilo y la experiencia de usuario en el dashboard.
7.  **Monetización**: Implementación de sistema de pagos y cuotas de uso.
