---
title: "Zp - Zig Copy"
description: "Alternativa a comando cp de Linux, escrito en Zig"
tags: ["Zig", "Cli", "Linux", "Open Source"]
date: 2026-02-13
lang: "es"
repo: "https://github.com/fedhinen/zp"
---

# Zp - Zig Copy

Este proyecto nacio por curiosidad, estaba viendo un video de Jarred Summer ([SFNode Meetup: Bun with Jarred Sumner](https://youtu.be/eF48Ar-JjT8?si=fuo2v8ohuN54tHDO)) y me parecio interesante lo que menciono como modo dificil para copiar archivos, donde el modo facil seria leer el archivo y escribirlo.

De esto me puse a investigar y encontre que para algunos sistemas de ficheros como btrfs, existen unos `system calls` como `copy_file_range`, o el uso de `reflinks` que en principio permitirian copiar archivos de forma mas rapida, aunque en principio me parecia dificil porque quiero pensar que `cp` ya esta optimizado.

Aun asi, me dispuse a implementar mi version de `cp` usando Zig, y para mi sorpresa, si es ligeramente mas rapida que `cp` incluso usando `reflinks=always`.

Lo siguiente que queria hacer con este proyecto, era preparar los archivos suficientes para hacer un release en automatico, para esto, cree el workflow en Github Actions, un script de build y poco mas, de modo que al subir un nuevo tag, se crea un nuevo release con los binarios en diversos sistemas (Linux y MacOS).

El proyecto esta en etapa temprana, pero se pueden descargar los binarios y probarlo, tiene muchos errores y cosas por mejorar, esta abierto a contribuciones
