# 🚀 Renotech Landing Page

Este proyecto es la **Landing Page comercial oficial de Renotech** construida para la captura rápida de Leads en Bolivia mediante velocidad extrema, SEO optimizado y estrategias de conversión enfocadas en WhatsApp.

## 🌟 Arquitectura Tecnológica
- **Framework Principal**: [Astro](https://astro.build) (Island Architecture, 0% JavaScript embebido por defecto para máximo rendimiento).
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/) (Clases utilitarias directas inyectadas globalmente).
- **Hosting Objetivo**: Firebase App Hosting / Vercel.

---

## 📂 Estructura del Proyecto

* `src/pages/`: Rutas de la web.
  * `index.astro`: Página principal de aterrizaje.
  * `privacidad.astro`: Políticas de privacidad (Requisito legal absoluto para Meta Ads / Google Ads).
  * `404.astro`: Página de recate elegante para URLs rotas.
* `src/components/`: Piezas de UI modulares.
  * `Hero`, `Brands`, `Stats`, `Navbar`, `Footer`, etc. Todo estilizado con Tailwind.
* `src/layouts/Layout.astro`: El corazón HTML `<head>` donde se inyectan dinámicamente el SEO, OpenGraph, Twitter Cards, los Favicons y el CSS global.
* `public/`: Assets estáticos inmutables.
  * Contiene el PWA `manifest.json`, iconos autogenerados, los robots e imágenes pesadas optimizadas en `.webp` / `.svg`.

---

## 📈 SEO y "Marketing Readiness"
La Landing está construida como un arma de conversión masiva:
1. **JSON-LD LocalBusiness**: Ya incrustado en `Layout.astro`. Le dice a Google directamente dónde opera Renotech y qué vende (AutoPartsStore).
2. **Canonical URL**: Protege la autoridad de dominio de `https://renotech.lat/`.
3. **PWA y Favicons**: Generados matemáticamente para iOS, Android y Navegadores Desktop, dando sensación nativa y subiendo el Lighthouse score (PWA).
4. **Política de Privacidad**: Preparada para protegerte de baneos en plataformas Publicitarias como Business Manager (Meta).

---

## 🌳 Git Workflow: "Trunk-Based Development"

Dado que esto es una Landing Page (sitio estático informativo veloz) y **no** un ecosistema MVC complejo, se recomienda estrictamente el flujo ágil **Trunk-Based Development** en lugar del Git Flow tradicional ("Cocina vs Restaurante"). No es necesario usar ramas como `desarrollo` o `despliegue`.

1. **`main` es La Verdad Única**: Toda confirmación de código va directamente a la rama `main` y se despliega automáticamente en segundos.
2. **Commits Pequeños y Atómicos**: Si cambias un texto, añades un testimonio o cambias un número de WhatsApp, súbelo directamente.
   ```bash
   git add .
   git commit -m "fix: actualizar número de WhatsApp de Sucre a la central"
   git push origin main
   ```
3. **Las Ramas son Excepciones Breves**: Solo si vas a rediseñar una sección gigantesca o agregar componentes enteros (por ejemplo, una Pasarela de Pago) y no quieres romper producción, creas una rama (`git checkout -b feature/nuevo-hero`). La terminas en horas y haces merge directo a `main`.

---

## 🤖 Comandos Locales (Desarrollo)

Abre la terminal de VSCode en la raíz del proyecto para ejecutarlos:

| Comando | Para qué sirve |
| :--- | :--- |
| `npm install` | Instala (o reinstala) los paquetes de dependencias necesarias (`node_modules/`). |
| `npm run dev` | Inicia un Servidor Local ultra veloz en `localhost:4321`. **(Uso de desarrollo)** |
| `npm run build` | Compila toda la web en HTML puro comprimido y optimizado dentro de la carpeta `dist/`. |
| `node generate-icons.mjs` | Script nativo de node personalizado creado para el proyecto para rescalar y generar iconos PWA de la marca desde el logo maestro. |
