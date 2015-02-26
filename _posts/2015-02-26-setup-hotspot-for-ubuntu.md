---
layout: post
title: "Setup Hotspot for Ubuntu"
summary: "Set up hotspot with hostapd and dnsmasq mainly. It also contains how to set ip forward in order to use host proxy. And how to set up with wireless usb network card, which uses TL-WN823N based on Realtek driver as a example."
category: ubuntu
---

### Two main steps.

One: use __hostapd__ to set up hotspot. Another: use __dnsmasq__ to set up DNS forwarder and DHCP server.

1. Install.

        # apt-get install hostapd
        # apt-get install dnsmasq

2. Configure `hostapd.conf` and replace it of `/etc/hostapd/hostapd.conf`. Here is the example.

        interface=              # interface used by the AP, wlan0 or others.
        driver=                 # network card driver, nl80211 may be the common. or rtl871xdrv. or others.
        hw_mode=                # g simply means 2.4GHz, a means 5GHz.
        wmm_enabled=            # QoS support.
        ignore_broadcast_ssid=  # hide ssid. 0=disabled, 1=enabled.

        ssid=                   # define name of the AP.
        channel=                # define channel to use.
        auth_algs=              # 1=wpa, 2=wep, 3=both.

        # wpa settings.
        wpa=                    # 0=disabled, 1=WPA1, 2=WPA2. 
        wpa_passphrase=         # password.
        wpa_key_mgmt=WPA-PSK 
        rsn_pairwise=CCMP

        # wep settings.
        wep_default_key=        # set the default key.
        wep_key0=               # password 0.
        wep_key1=               # password 1.

3. Configure `/etc/dnsmasq.conf`. Add the following example to the last.

        interface=              # interface used by the AP, wlan0 or others.
        bind-interfaces         # only listen the appointed interface.
        except-interface=lo     # ignore listening lo interface.
        dhcp-range=             # dhcp range. refer the default setting.
        dhcp-option=            # dhcp option. refer the default setting.

4. Start both.

        # ifconfig WLAN-INTERFACE up
        # ifconfig WLAN-INTERFACE IP-ADDRESS
        # hostapd -B /etc/hostapd/hostapd.conf
        # /etc/init.d/dnsmasq restart


### IP forward

Using __proxy__ needs to set up ip forward. 

1. Uncomment `net.ipv4.ip_forward=1` in `/etc/sysctl.conf`.

2. Run the following shell commands. Here using `192.168.0.0/8` for example.

        # $EXTERNAL=your main network interface
        # iptables -F
        # iptables -X
        # iptables -t nat -F
        # iptables -t nat -X
        # iptables -t nat -A POSTROUTING -s 192.168.0.0/8 -o $EXTERNAL -j MASQUERADE
        # iptables -A FORWARD -s 192.168.0.0/8 -o $EXTERNAL -j ACCEPT
        # iptables -A FORWARD -d 192.168.0.0/8 -m conntrack --ctstate ESTABLISHED,RELATED -i $EXTERNAL -j ACCEPT

3. While connecting hotspot, remember to set the host ip and port which is appointed.


### Use mini wireless usb network card

TL-WN823N based on rtl8192cu driver as a example.

1. Confirm if it is Realtek 8192cu chip.

        # lsusb
        # Bus 003 Device 008: ID 0bda:8178 Realtek Semiconductor Corp. RTL8192CU 802.11n WLAN Adapter
        # dmesg | grep 8192cu

2. You can get the driver from [Realtek Downloads](http://www.realtek.com.tw/downloads/downloadsView.aspx?Langid=1&PNid=48&PFid=48&Level=5&Conn=4&DownTypeID=3&GetDown=false&Downloads=true#RTL8192CU).

3. Build and install.

        $ tar -xzvf PATH/RTL8188C_8192C_USB_linux_v*.gz
        $ cd RTL8188C_8192C_USB_linux_v*
        $ sudo ./install.sh

4. Build specific `hostapd` and replace it of the default of system.

        $ tar zxvf RTL8188C_8192C_USB_linux_*/wpa_supplicant_hostapd/wpa_supplicant_hostapd-0.8_rtw_*.tar.gz
        $ cd ~/wpa_supplicant_hostapd-0.8_*/hostapd
        $ make
        $ sudo cp hostapd hostapd_cli /usr/local/sbin

5. Add items into `/etc/modprobe.d/blacklist.conf`.

        # blacklist native realtek 8192cu drivers
        blacklist rtl8192cu
        blacklist rtl_usb
        blacklist rtlwifi
        blacklist rtl8192c_common

6. New file `/etc/udev/rules.d/98-usb-wifi.rules` with the following content.

        ACTION=="add", SUBSYSTEM=="net", ENV{ID_VENDOR_ID}=="0bda", ENV{ID_MODEL_ID}=="8178", RUN+="/usr/local/sbin/hostapd-start"
        ACTION=="remove", SUBSYSTEM=="net", ENV{ID_VENDOR_ID}=="0bda", ENV{ID_MODEL_ID}=="8178", RUN+="/usr/local/sbin/hostapd-stop"

7. Replace the configure of `hostapd` to the follows.

        driver=rtl871xdrv

8. Restart `hostapd` and `dnsmasq`.

9. Search and connect the hotspot.
