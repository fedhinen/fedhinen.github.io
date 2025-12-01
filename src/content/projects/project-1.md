---
title: "Todo P2P: Sincronización Descentralizada"
description: "Gestor de tareas Local-First con sincronización P2P sin servidores"
tags: ["Flutter", "Dart", "P2P", "CRDT", "Local-First"]
date: 2025-12-01
lang: "es"
repo: "https://github.com/fedhinen/todo_p2p"
---

**Todo P2P** es una prueba de concepto de una arquitectura **Local-First** robusta. Es una aplicación de gestión de tareas que permite la sincronización automática entre dispositivos en una red local sin depender de ningún servidor central o conexión a internet.

## 💡 El Problema
Las aplicaciones modernas dependen excesivamente de la nube. Si el servidor cae o no tienes internet, tus datos son inaccesibles o no se sincronizan. Quería explorar una alternativa donde el usuario sea el verdadero dueño de sus datos.

## 🛠️ Solución Técnica
Desarrollé un protocolo de sincronización personalizado sobre TCP que utiliza **mDNS (Bonjour)** para el descubrimiento automático de dispositivos en la red local.

### Características Clave:
- **Sincronización Descentralizada**: Comunicación directa dispositivo a dispositivo.
- **Resolución de Conflictos (CRDTs)**: Implementación de **Relojes Vectoriales (Vector Clocks)** para manejar ediciones concurrentes y determinar el orden causal de los eventos sin una autoridad central de tiempo.
- **Seguridad**: Autenticación mutua mediante criptografía de curva elíptica (**Ed25519**). Las claves privadas nunca salen del dispositivo.
- **Persistencia Local**: Base de datos SQLite (Floor) como fuente única de verdad.

## 🔧 Stack Tecnológico
- **Flutter & Dart**: UI multiplataforma (Android, Linux, iOS).
- **Bonsoir**: Descubrimiento de servicios mDNS.
- **Floor (SQLite)**: Persistencia y manejo de logs de operaciones.
- **Cryptography**: Firmas digitales y generación de claves.
- **Sockets TCP/UDP**: Comunicación de bajo nivel para la transferencia de datos.

Este proyecto demuestra que es posible construir software colaborativo complejo sin infraestructura backend costosa, priorizando la privacidad y la autonomía del usuario.
