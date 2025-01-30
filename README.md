# E-Commerce de Michis 🐾

## Descripcion 
"E-Commerce de Michis es una aplicación desarrollada con **React, Vite, y Firebase** que permite a los usuarios explorar productos, agregarlos al carrito, y realizar compras. La app integra funciones de autenticación y almacenamiento de datos en **Firestore.**"

## Caracteristicas Principales
### Lista de funcionalidades mas destacadas.

1. **Autenticación de usuarios**: (simulada).
2. **Visualización dinámica de productos**: desde Firestore.
3. **Gestión de carrito de compras.**: Carrito de compras a travez de hook.
4. **CRUD de Productos**: Actualización y eliminación de productos.
5. **Variables de entorno**: Uso de variables de entorno para configuraciones sensibles.
6. **Diseño responsivo**: Diseño responsivo con CSS puro.

### Lista de funcionalidades en otro tipo de aspecto

## Funcionalidades principales

```sh
| Característica        | Descripción                          | Estado   |
|-----------------------|--------------------------------------|----------|
| Autenticación         | Registro e inicio de sesión         | ✅ Listo  |
| Carrito de compras    | Añadir y eliminar productos          | ✅ Listo  |
| Integración con Firestore | CRUD en tiempo real                | ✅ Listo  |
| Filtros de búsqueda   | Buscar por categoría o precio        | 🔄 En progreso |
```

## Tecnologias Utilizadas

- Frontend: React + Vite
- Base de datos: Firebase Firestore
- Estilos: CSS puro y Flexbox
- Gestión de estado: React Context API
- Variables de entorno: .env con soporte para Vite

## Instalacion

Instrucciones paso a paso para clonar y ejecutar la aplicación.

```shellscript
# Clonar el repositorio
git clone https://github.com/tu-repositorio/michis-ecommerce.git

# Entrar al directorio del proyecto
cd michis-ecommerce

# Instalar dependencias
npm install

# Crear un archivo .env con las variables de entorno necesarias
VITE_API_URL=https://tu-api-url.com
VITE_API_KEY=tu-api-key

# Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en http://localhost:5173/

## Configura la base de datos

Crea un archivo .env en la raíz del proyecto y define la variable de entorno para conectar tu base de datos en **Firebase**:

```sh
VITE_apiKey= tu-key
VITE_authDomain= tu-key
VITE_projectId= tu-key
VITE_storageBucket= tu-key
VITE_messagingSenderId= tu-key
VITE_appId= tu-key
VITE_measurementId= tu-key
```

## Estructura del Proyecto

```sh
├── src/
    ├── components/   # Componentes reutilizables
    ├── context/      # Proveedores de contexto (Cart, User)
    ├── hooks/        # Custom hooks (e.g., useFetch)
    ├── pages/        # Vistas principales
    ├── services/     # Constantes y servicios (Firebase config)
```

## Configuración de Firebase
1. Accede a Firebase Console.
2. Crea un proyecto y habilita Firestore Database.
3. Configura las reglas de Firestore para el entorno de desarrollo:

```sh
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

### URL del Deploy en Producción
El proyecto está desplegado en Netlify y Versel, puedes acceder a la aplicación en los siguientes URL:
- **[URL Netlify](https://tiendamichis.netlify.app/)**
- **[URL Versel](https://clase-8-react-deploy-5u44fy6zs-soldiersnakes-projects.vercel.app/)**

### Capturas de la aplicacion

- ### Desde la app:

![Página principal de la app](./src/img/producto5.jpg "Imagen desde la app")

- ### Url Externa:

![Página principal de la app](https://m.media-amazon.com/images/I/71N9mC+WoeL._AC_UL320_.jpg "Imagen desde url externa")

- ### Con HTML / CSS

<div align="center">
  <img src="./src/img/categoria3.jpg" alt="Página principal" width="600">
</div>

### Aprendizajes y Retos
- Comparte lo que aprendiste al desarrollar esta app y los retos que enfrentaste.
- Ejemplo:
    Aprendí a manejar Firestore para almacenar y consultar datos en tiempo real. Además, mejorar la gestión de estado con Context API fue un gran desafío, pero valió la pena.

## Contribución

¡Contribuciones son bienvenidas! Por favor, sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios y haz commit (`git commit -m 'Añadida nueva funcionalidad'`).
4. Haz push a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.

## Roadmap (funcionalidades futuras)

- [x] Autenticación con Firebase
- [x] CRUD en Firestore
- [ ] Implementar filtros avanzados
- [ ] Soporte para múltiples idiomas
- [ ] Diseño responsivo mejorado


### Créditos
- A todos los alumnos presentes gracias por acompañarme en esta primera comision
- Especialmente tambien al Tutor Nacho por el aguante y el acompañamiento

### Licencia
- Menciona si el código está bajo una licencia (ej., MIT, GPL, etc.). (Lo hizo Mariano dictando clases para Coder 😅)

## Comentarios Finales

#### Nuevamente Muchas gracias por todo Coder's 😁

<div align="center">
  <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExODhxdTNyMXhncHZ4djEwZHUwMW5kdmY1OXk0Nng2MTFjNGJxa3pmbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pNn4hlkovWAHfpLRRD/giphy.gif" alt="Vegeta Crying" width="600">
</div>

<div align="center">
  <img src="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif" alt="Adios" width="600">
</div>