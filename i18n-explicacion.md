# Estructura del Proyecto e Internacionalización (i18n)

Este proyecto utiliza una estrategia de **enrutamiento basado en carpetas (folder-based routing)** de Astro para manejar los idiomas, combinada con un archivo de configuración centralizado para el contenido.

## 1. Estructura de Archivos

```
src/
├── i18n/
│   └── cv-content.ts       <-- AQUÍ están todos los textos (EN y ES)
├── components/
│   ├── CV.astro            <-- Componente "Maestro" (Diseño único)
│   └── LanguageSwitch.astro <-- Botón flotante para cambiar idioma
└── pages/
    ├── index.astro         <-- Redirige a /en (Idioma por defecto)
    ├── en/
    │   └── index.astro     <-- Página en Inglés (carga datos EN)
    └── es/
        └── index.astro     <-- Página en Español (carga datos ES)
```

## 2. ¿Cómo funciona?

### A. El Contenido (`src/i18n/cv-content.ts`)
Es un objeto de TypeScript gigante que tiene dos claves principales: `en` y `es`.
Si quieres cambiar un texto, **solo editas este archivo**.

```typescript
export const cvData = {
  en: {
    header: { name: "Simon...", role: "Developer..." },
    // ...
  },
  es: {
    header: { name: "Simon...", role: "Desarrollador..." },
    // ...
  }
};
```

### B. El Diseño (`src/components/CV.astro`)
Es una plantilla "tonta". No tiene texto hardcodeado. Recibe los textos como propiedades (`props`).
```astro
---
const { content } = Astro.props;
---
<h1>{content.header.name}</h1>
<p>{content.about}</p>
```

### C. Las Rutas (`src/pages/`)
Cada página simplemente importa el componente `CV` y le pasa los datos correspondientes.

*   **`src/pages/en/index.astro`**:
    ```astro
    <CV content={cvData.en} lang="en" />
    ```
*   **`src/pages/es/index.astro`**:
    ```astro
    <CV content={cvData.es} lang="es" />
    ```

## 3. Navegación
*   Si entras a `tudominio.com/` -> Te redirige a `/en`.
*   Si entras a `tudominio.com/en` -> Ves el CV en Inglés.
*   Si entras a `tudominio.com/es` -> Ves el CV en Español.
*   El botón **LanguageSwitch** detecta en qué carpeta estás y te manda a la contraria.
