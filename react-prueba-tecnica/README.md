# Prueba técnica para Juniors y Trainees de React en Live Coding.

APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: `https://cataas.com/cat/says/${world}`

- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra.

## Instalar React desde un proyecto vanilla
- npm install @vitejs/plugin-react -E
- npm install react react-dom -E

## Configuracion de VITE
- crear archivo: vite.config.js
- import { defineConfig } from 'vite'
- import react from '@vitejs/plugin-react'
- export default defineConfig({
    plugins: [react()]
})