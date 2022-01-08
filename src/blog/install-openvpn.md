---
title: "Install Openvpn"
time: 5
date: 2022-01-08
description: "In this blog I will show you how to install Openvpn on VPS"
category: "Vpn"
author: "Tuhin Kanti Pal"
imgurl: "https://telegra.ph/file/58f8dec8a5014cecf9854.png"
---

**In** this Blog I'm gonna show you how can you install OpenVpn on Your server. This is much better than paid vpn services.

### Install OpenVpn

```shell
sudo -i
wget https://git.io/vpn -O openvpn-install.sh
chmod 777 openvpn-install.sh
bash openvpn-install.sh
```

- ip address will be your public ip of server
- udp is recommended
- port will be '1194', make sure you allow it in your firewall
- dns resolver google (2) is recommended

### Serve the .ovpn over http and download it to connect with OpenVpn app

```shell
apt install apache2
cp [name].ovpn /var/www/html/[name].ovpn
```

- It will be available at http://[ip]/[name].ovpn

### Don't forget to delete it after use

```shell
rm /var/www/html/[name].ovpn
```

### Connect:

Download [OpenVpn connect](https://openvpn.net/download-open-vpn/) and go invisible.

<iframe width="100%" src="https://www.youtube.com/embed/NV2-l8vAcqo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
