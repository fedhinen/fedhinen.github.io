---
title: "Todo P2P: Decentralized Synchronization"
description: "Local-First task manager with serverless P2P synchronization"
tags: ["Flutter", "Dart", "P2P", "CRDT", "Local-First"]
date: 2025-12-01
lang: "en"
repo: "https://github.com/fedhinen/todo_p2p"
---

**Todo P2P** is a proof of concept for a robust **Local-First** architecture. It is a task management application that enables automatic synchronization between devices on a local network without relying on any central server or internet connection.

## 💡 The Problem
Modern applications rely heavily on the cloud. If the server goes down or you lack internet access, your data becomes inaccessible or fails to sync. I wanted to explore an alternative where the user is the true owner of their data.

## 🛠️ Technical Solution
I developed a custom synchronization protocol over TCP that uses **mDNS (Bonjour)** for automatic device discovery on the local network.

### Key Features:
- **Decentralized Synchronization**: Direct device-to-device communication.
- **Conflict Resolution (CRDTs)**: Implementation of **Vector Clocks** to handle concurrent edits and determine the causal order of events without a central time authority.
- **Security**: Mutual authentication using Elliptic Curve Cryptography (**Ed25519**). Private keys never leave the device.
- **Local Persistence**: SQLite database (Floor) as the single source of truth.

## 🔧 Tech Stack
- **Flutter & Dart**: Cross-platform UI (Android, Linux, iOS).
- **Bonsoir**: mDNS service discovery.
- **Floor (SQLite)**: Persistence and operation log management.
- **Cryptography**: Digital signatures and key generation.
- **TCP/UDP Sockets**: Low-level communication for data transfer.

This project demonstrates that it is possible to build complex collaborative software without expensive backend infrastructure, prioritizing user privacy and autonomy.
