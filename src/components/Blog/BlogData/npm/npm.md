---
title: "Dependency & Package Management with NPM"
author: "Ahsaan Ullah"
date: "2025-02-20"
tags:
  - npm
  - nodejs
  - javascript
  - packages
  - dependencies
  - learning
---

# **Dependency & Package Management with NPM**

I recently completed an **NPM** course on the platform  
[Platzi](https://platzi.com/cursos/npm/) — it was a simple refresher, so I’m writing this post as notes and summary.

---

## What is NPM (Node Package Manager)?

It’s the default package manager for Node.js and the most popular one in JavaScript.  
Here you’ll find thousands of resources, tools, and libraries that you can use in your projects.  
You can also publish your own packages and share them with the community.  
Official website: [NPM](https://www.npmjs.com/)

---

## **Getting Started**

- Install [Node.js](https://nodejs.org/) — Node comes with NPM included.
- You can also check if newer NPM versions exist and install them using:  
  `npm install -g npm@latest`

### **Recommendation**

> NPM is easy to use, and if you ever have doubts about a command,
> you can use:
>
> - `npm help` → Shows common commands, their usage, and the full list of available commands  
> - `npm <command> -h` → Shows help for a specific command

Another great option is always reading documentation.

---

## Basic Configuration

### **Initialize a Project**

`npm init` → Creates a `package.json` file which contains project info, dependencies, scripts, etc.

`npm init -y` or `npm init --yes` → Creates a default `package.json` quickly, accepting all defaults.

You can also set default values to speed up the process:

- `npm set init.author.email <email>`
- `npm set init.author.name <name>`
- `npm set init.license <license>`

---

## Installing Dependencies

### **Installing Required Dependencies**

Dependencies must be installed in the root folder of your project.

`npm install <pkg>`  
`npm i <pkg> --save`  
`npm i <pkg> -S`  
All of these install the package as a production dependency (default behavior).

Example:  
Install Moment.js → `npm install moment`

- **i** is a shortcut for *install*  
- **-S** is a shortcut for *--save*
- **node_modules** → Folder where all modules are installed
- **package-lock.json** → Ensures that when the project is cloned, the exact same package versions are installed (ignores `^` and `~`)

Useful commands:

- Simulate installation: `npm i <pkg> --dry-run`
- Force installation: `npm i <pkg> -f` or `npm i <pkg> --force`
- Install a specific version: `npm i <pkg>@<version>`

---

### **Installing Global Dependencies**

`npm i <pkg> -g` → Installs a package globally so you can use it anywhere.

Check your global packages:

`npm list -g --depth 0`

---

### **Installing Optional Dependencies**

`npm i <pkg> -O` → Installs a package as an optional dependency.

---

### **List Project Packages**

`npm list` → Lists all packages in a project and shows the dependency tree.

---

## Updating & Removing Packages

- `npm update` → Updates all dependencies
- `npm update <pkg>` → Updates a specific dependency
- `npm uninstall <pkg>` → Removes the dependency from the project and from package.json
- `npm uninstall <pkg> --no-save` → Removes from node_modules but keeps it in package.json

---

- `npm outdated` → Shows packages that can be updated, current version, latest version, and dependency info  
- `npm outdated --dd` → Shows deeper detailed logs  
  (`--dd` enables verbose mode and works with other commands too)

---

## **Security**

- `npm audit` → Shows vulnerability information  
- `npm audit --json` → Same output but in JSON format  
- `npm update <pkg> --depth 2` → Updates vulnerable packages (depth = how deep it checks)

---

## Version Symbols in Package.json

- `^` → Updates minor + patch versions  
- `~` → Updates only patch versions  
- `<` → Lower than  
- `<=` → Lower or equal  
- `>` → Greater than  
- `>=` → Greater or equal  

---

![npm](https://blog.desdelinux.net/wp-content/uploads/2020/10/NPM.jpg.webp)
