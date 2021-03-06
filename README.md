# **test-front**

>Puedes observar las tarjetas de varios pokemon y almacenar tus favoritos. Aseg煤rate de ir y observar m谩s detalles seleccionando cada tarjeta. No olvides que es una PWA por lo tanto, puedes descargar la app desde el navegador para una experiencia m谩s c贸moda 馃榾.

<br/>

## **Autenticaci贸n**
- Controlado gracias a Firebase Auth, disfruta de acceder por correo y contrase帽a o ingresa directamente con tu usuario de Google.

## **Header**
- **Name:** arriba a la izquierda aparecer谩 el nombre del usuario loggeado
- **Filter** lateral derecho (header inferior en mobile) filtro de Pokemon para encontrar a ese Pokemon que tanto a帽oras.

## **Botones Navegaci贸n**
- **Home:** P谩gina por defecto de la aplicaci贸n y al presionarla puedes volver al listado de todos los pokemon, siempre hay m谩s que puedes agregar a tus favoritos 馃.

- **Favorites:** Porque sabemos que te gusta observar a tus consentidos, este bot贸n te lleva directo a la vista en que puedes navegar por todos los pokemon que se robaron tu atenci贸n.

- **Logout:** Comparte la experiencia y cierra sesi贸n si deseas dejar que un amigo o amiga pruebe a crear su propia cuenta y conocer varios pokemon.


# Recursos
+ 鈿涳笍 React
+ 馃挮 Redux -> https://es.redux.js.org/
+ 馃挮 Redux-persistor -> https://github.com/rt2zz/redux-persist
+ 馃殌 React-router -> https://reactrouter.com/docs/en/v6
+ 馃帹 Material UI -> https://mui.com/material-ui/getting-started/installation/
+ 馃М Firebase / Firestore -> https://firebase.google.com/docs
+ 馃 Vercel -> https://vercel.com/docs

## Decisiones T茅cnicas
- Se Utiliz贸 Redux persistor con la idea de persistir la informaci贸n y hacer manejo de esta desde el localStorage (No necesario, solo se quizo mostrar el manejo)
- Material UI se implement贸 por la comodidad y familiaridad con la misma, adem谩s que es la misma que se utiliza en la empresa que dise帽贸 la prueba
- Se realiz贸 el despliegue en Vercel dado que es muy f谩cil de manipular y monitorear, adem谩s de familiaridad con la herramienta.
- Se trabaj贸 con SASS en los estilos puesto que nos permite una buena visualizaci贸n de las hojas de estilo, y por su buen acoplamiento con la nomenclatura BEM
- Se implement贸 el manejo de Firebase y Firestore como herramientas de autenticaci贸n y almacenamiento ya que son herramientas que nos facilitan el tener que pensar en una soluci贸n de Backend.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
