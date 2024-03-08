// ==========================================================================================================
// restapicrud  API(CRUD) NodeJS Express                                                http://localhost:8080
// ==========================================================================================================
// dossier: C:\WORK\NODEJS\restapicrud
// tuto chaine : https://www.youtube.com/watch?v=xgQkbVjCtQ8&list=PL_fWONAepR_Bk2SyRkb_WtDxFarD51mr1&index=3
// mongoDBaccès: https://www.mongodb.com/cloud/atlas/register
// test        : http://localhost:8082/   (postman)
// test        :  node app.js
//                npm run dev          => lance nodemon, en Utilisant les scripts de package.json ***
// DESCRIPTION :  
//
// installation: npm install express 
//               npm install mysql2 sequelize joi
//               npm install nodemon --save-dev                                                                                                
// ==========================================================================================================
// import des modules nécessaires
import express from "express"

/*****************************************/
/* Initialisation de l'API (du serveur)  */
const appServeur = express();

/*****************************************/
/* Mise en place du paramétrage          */
appServeur.use(express.json())

/*****************************************/
/* Mise en place du routage              */
import routes from './routes/routes.js'
appServeur.get('/', (req, res) => res.send(`Je suis en ligne (RESTAPICRUD). Tout est OK.`));
appServeur.use(routes);
appServeur.get('*', (req, res) => res.status(501).send("Qu'est-ce que tu fais bon sang de bois!?!")); // 501 ressource non implémenté

/******************************************************************/
/* Démarrer la connexion BASE DE DONNEES    (mysql)               */
import Db from "./db/db.js"
Db.sync()
.then((console.log("Connexion à la Base de DONNEES réussie.")))
.catch(error => console.log(error))

/******************************************************************/
/* Démarrer le serveur: sur port 8080                             */
//const port = process.env.SERVEUR_PORT; //  || 8080;
const port = 8080;
appServeur.listen(port, () => {
    console.log("SERVEUR: restapicrud, demarré sur http://localhost:"+port);
});
