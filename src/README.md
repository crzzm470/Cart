# 🛒 E-Commerce Demo (React, TypeScript & Context)

Este proyecto es una aplicación de demostración de comercio electrónico (E-Commerce Demo) construida con **React** y **TypeScript**. Utiliza el patrón **Context API** para la gestión global de estado y **React Router DOM** para la navegación, simulando una aplicación escalable y moderna.

---

## ✨ Características Principales

- **Tecnología Moderna:** Construido con **React**, **TypeScript** y el *bundler* **Vite**.
- **Gestión de Estado Centralizada:** Implementación de la **React Context API** para el estado global (Carrito y Tema).
- **Temas Dinámicos:** Soporte para modo **Claro** y **Oscuro** (`ThemeProvider`).
- **Carrito Funcional:** Permite añadir productos, manteniendo el estado globalmente (`CartProvider`).
- **Navegación con Rutas:** Implementado con **React Router DOM** para:
  - **Lista de Productos** (`/`)
  - **Detalles del Producto** (`/producto/:id`)
- **API de Prueba:** Los datos de los productos se obtienen de la **DummyJSON API**.
- **Galería Interactiva:** La vista de detalle permite cambiar la imagen principal al hacer clic en las miniaturas de la galería.

---

## 🚀 Cómo Empezar

Sigue estos pasos para poner en marcha el proyecto en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/es/) (se recomienda la versión LTS) y npm/yarn.

### 1. Clonar el Repositorio

```bash
git clone https://github.com/crzzm470/Cart.git
cd cart
```

### 2. Instalar Dependencias

```bash

# Usando npm

npm install

# O usando yarn

yarn install
```

### 3. Ejecutar el Proyecto

```bash

# Usando npm

npm run dev

# O usando yarn

yarn dev
```

La aplicación estará disponible en tu navegador en `http://localhost:5173` (o un puerto similar).

---

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes de UI (Header, ProductCard, ProductDetail, ProductList, etc.)
├── context/             # Lógica de Contextos (CartContext.tsx, ThemeContext.tsx)
├── types/               # Definiciones de Tipos/Interfaces de TypeScript (product.ts)
├── assets/              # Estilos CSS globales y activos estáticos
├── App.tsx              # Componente principal que define el layout y envuelve las rutas
└── Root.tsx             # Punto de entrada de la aplicación, configura el Router y los Providers
```

---

## 🛠️ Tecnologías Utilizadas

| Tecnología                | Propósito Principal                                                          |
| -------------------------- | ----------------------------------------------------------------------------- |
| **React**            | Construcción de la interfaz de usuario.                                      |
| **TypeScript**       | Añade tipado estático y robustez al desarrollo.                             |
| **Vite**             | Servidor de desarrollo y*bundler* rápido.                                  |
| **React Router DOM** | Manejo de navegación entre vistas.                                           |
| **Context API**      | Inyección de estado y funciones (Carrito, Tema) en el árbol de componentes. |
| **DummyJSON API**    | Proporciona datos de productos para la demo.                                  |

---

## 🤝 Contribuciones

Si encuentras un error o tienes una sugerencia de mejora, siéntete libre de abrir un *issue* o enviar un *Pull Request*. ¡Toda ayuda es bienvenida!
