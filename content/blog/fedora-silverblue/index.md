---
title: Fedora SilverBlue
date: "2020-03-08T14:15:32.169Z"
description: Linux Beast for Production Machines
---


## "Push the limits of immutable operating systems and container technology in the larger Fedora family."

Recently, I came across this beast of an operating system based on an idea of the immutable operating system.
This blog post is mainly focused on explaining the creativity and mindset of fedora developers for Silverblue Project, and finally, my review on its use case.

> ### What is an immutable operating system?
> Immutable OS corresponds to an idea where any package installation does not affect the underlying operating system.
> This means that every setup is identical to every other setup of the same version. The operating system that is on disk is precisely the same from one machine > to the next, and it never changes as it is used.

Silverblue's immutable design is intended to make it more stable, less prone to bugs, and easier to test and develop. Finally, Silverblue's unchanging design also makes it an excellent platform for containerized apps as well as container-based software development. In each case, apps and containers are kept separate from the host system, improving stability and reliability.

Silverblue's core technologies have some other helpful features. OS updates are fast, and there's no waiting around for them to install: reboot, as usual, to start using the next version. With Silverblue, it is also possible to roll back to the previous version of the operating system, if something goes wrong.

### How to install Softwares and Updates?
It's a common doubt that popped up in my head, as the os is immutable how to will the packages and package management system works on it.
Silverblue has different options for installing software, compared with a standard Fedora Workstation (or other package-based Linux distributions). These include:

- Flatpak apps: this is the primary way that (GUI) apps get installed on Silverblue.
- Toolbox: Used primarily for CLI apps; development, debugging tools etc.
- Package layering: The rpm-ostree tool used for host updates is a full hybrid image/package system. By default, the system operates in pure image mode, but package layering is useful for things like libvirt, drivers, etc.

Installing updates with Silverblue is easy and fast (much faster than other operating systems). It also has a special rollback feature, in case anything goes wrong. As the entire OS is untouched after use, updates are image-based due which they are flexible and fast.

### But Do we need it as developers

The success of such an ambitious project majorly depends on the success of the Toolbox and availability of software on flathub.
For me, the advantage of using Linux is the availability of free, open-source software and the terminal. If I'm not able to fiddle around the base OS Kernel and Packages, Then it's not a DEV machine for me despite It's perks of stability and easy upgrade. I understand the more prominent picture fedora developers are taking into consideration But it's already been solved by container techs like Docker etc.

### Additional Docs and Links

- libostree docs: https://ostree.readthedocs.io/en/latest/ 
- rpm-ostree docs: https://rpm-ostree.readthedocs.io/en/latest/
- Flatpak docs: http://docs.flatpak.org/en/latest/
- Flathub: https://flathub.org/home
- Fedora Silverblue docs: https://docs.fedoraproject.org/en-US/fedora-silverblue/
- Fedora Silverblue where to contribute to the docs: https://github.com/fedora-silverblue/silverblue-docs
- Fedora Silverblue website: https://silverblue.fedoraproject.org/