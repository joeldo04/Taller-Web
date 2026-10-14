# Taller de Ingeniería Web – Semana 2

**Universidad Técnica Particular de Loja (UTPL)**  
**Carrera:** Computación  
**Período académico:** Octubre 2026 – Febrero 2027

## Descripción

Este proyecto es una página web informativa sobre **Git y GitHub**, desarrollada para practicar la estructura inicial de un proyecto web y el uso del control de versiones.

La página incluye:

- Una explicación sencilla de qué son Git y GitHub.
- Las principales diferencias entre ambas herramientas.
- Una tabla de comandos básicos de Git.
- Conceptos como repositorio, commit, rama, README y .gitignore.
- Pasos para trabajar en equipo usando ramas.
- Los integrantes del grupo.
- Un botón que muestra u oculta un consejo utilizando JavaScript.

## Objetivo

Aprender a organizar archivos HTML, CSS y JavaScript, registrar cambios con Git y colaborar en un repositorio compartido de GitHub.

## Estructura del proyecto

```text
mi-proyecto-web/
├── index.html
├── css/
│   └── estilos.css
├── js/
│   └── app.js
├── README.md
└── .gitignore
```

## Tecnologías y herramientas

- **HTML5:** organiza el contenido de la página.
- **CSS3:** establece el diseño y los colores azul, amarillo y blanco.
- **JavaScript:** permite mostrar u ocultar un consejo en la página.
- **Visual Studio Code:** editor de código.
- **Git:** control de versiones.
- **GitHub:** publicación del repositorio y colaboración entre integrantes.

## Cómo visualizar la página

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto en **Visual Studio Code**.
3. Abrir el archivo **`index.html`** en el navegador (Chrome o Firefox).
4. Navegar por las secciones y probar el botón **«Mostrar consejo para el equipo»**.

No se necesitan instalaciones adicionales, frameworks ni base de datos.

## Comandos principales utilizados

| Comando | Descripción |
| --- | --- |
| `git status` | Consultar el estado de los archivos. |
| `git add .` | Preparar cambios para un commit. |
| `git commit -m "Avance del taller"` | Registrar los cambios preparados. |
| `git branch` | Mostrar las ramas locales. |
| `git switch -c web-completo` | Crear y cambiar a una rama nueva. |
| `git push -u origin web-completo` | Publicar la rama en GitHub. |
| `git pull origin main` | Obtener e integrar cambios de `main` en la rama actual; revisar antes de usar. |

### Cómo subir el proyecto a una rama del repositorio grupal

Si ya clonaste el repositorio del grupo y creaste la rama `web-completo`:

```bash
git status
git add index.html css/estilos.css js/app.js README.md .gitignore
git commit -m "Agregar pagina del taller Git y GitHub"
git push -u origin web-completo
```

> **Importante:** los archivos de este paquete se deben colocar **en la raíz del repositorio que ya clonaste**, sin agregar otra carpeta adicional. Si ya existe alguno de estos archivos, revisa antes de reemplazarlo para no perder trabajo de tus compañeros. **No vuelvas a ejecutar `git init`** dentro de un repositorio que ya clonaste.

## Integrantes

- Joel Domínguez Ochoa
- Marcelo Benítez
- Stalin Salinas

**Asignatura:** Ingeniería Web  
**Taller:** Estructura inicial del proyecto y comandos básicos de Git y GitHub
