---
title: "Pulse: Remote Code Execution Platform"
description: "Self-hosted FaaS platform for executing functions in isolated containers"
tags: ["SvelteKit", "Python", "FastAPI", "Docker", "FaaS", "TypeScript"]
date: 2025-12-16
lang: "en"
repo: "https://github.com/fedhinen/pulse"
---

**Pulse** is a **Function-as-a-Service (FaaS)** platform designed to enable on-demand code execution in isolated and secure environments. It allows developers to deploy Python and TypeScript functions without worrying about the underlying infrastructure.

## 💡 The Problem
Executing user code or dynamic scripts securely is a complex challenge. Commercial solutions like AWS Lambda can be expensive and hard to debug locally, while building a custom solution requires handling container orchestration, security, and resource isolation.

## 🛠️ Technical Solution
Pulse implements a microservices architecture that separates management from execution:

1.  **Web & API Gateway (SvelteKit)**: Handles user authentication, function management, API keys, and data persistence.
2.  **Manager Service (Python/FastAPI)**: A dedicated service that interacts directly with the Docker Daemon. It is responsible for provisioning ephemeral containers, injecting user code, and capturing output.
3.  **Isolated Runtimes**: Optimized Docker images for each language (Python, TypeScript) ensuring code runs in a clean and secure environment.

### Key Features:
- **Multi-Runtime**: Native support for Python and TypeScript.
- **Total Isolation**: Each execution occurs in an independent Docker container.
- **API Key Management**: Secure authentication for invoking functions remotely.
- **Management Dashboard**: Web interface to create, edit, and test functions.

## 🔧 Tech Stack
- **SvelteKit**: Full-stack framework for the web application and main API.
- **Python & FastAPI**: High-performance container orchestration service.
- **Docker SDK**: For programmatic management of containers and volumes.
- **Drizzle ORM & PostgreSQL**: Robust and typed data persistence.
- **Better Auth**: Secure authentication system.
- **TailwindCSS**: Modern and responsive styling.

## 🚀 Roadmap
The project is currently under active development. Next steps include:

1.  **Persistent Logs**: Save execution logs in the database for auditing and debugging.
2.  **Async Execution**: Handling remote handlers with **RabbitMQ** and endpoints to query the status of long-running tasks.
3.  **Rate Limiting**: Add call limits to prevent server resource exhaustion.
4.  **Startup Optimization**: Strategies to mitigate "Cold Start" and improve "Hot Start" of containers.
5.  **Refactoring**: Apply design patterns to improve the maintainability of the Manager code.
6.  **UI/UX**: Improve the styling and user experience of the dashboard.
7.  **Monetization**: Implementation of payments and usage quotas.
