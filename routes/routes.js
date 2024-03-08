// ==========================================================================================================
// restapicrud  API(CRUD) NodeJS Express                                                http://localhost:8080
// ==========================================================================================================
// dossier: C:\WORK\NODEJS\restapicrud
// fichier: routes/routes.js
// ==========================================================================================================
// import des modules nécessaires
import {Router} from "express"
import {getAll, getOne, createOne, updateOne, deleteOne} from '../controleurs/controleurs.js'

/*************************************************/
/*** Récupération du routeur d'express           */
const routeur = Router()

// ROUTES  les routes de l'API 1
// const prefixeRouteAPI = maConfigurationLocal.routeAPI; // "/api/v1"
// const authentification = require('../middlewares/authentification');
//routeur.get('/utilisateurmoi', authentification, UtilisateurControleur.readme);

/*************************************************/
/*** Routage de la ressource                     */
//const authentification = require('../middlewares/authentification');
routeur.get('/getAll', getAll)              // get   : lecture    tous   
routeur.get('/getOne/:id', getOne)          // get   : lecture     un   
routeur.put('/createOne', createOne)        // put   : ajout       un     l: put pour ajout ( et non post)
routeur.patch('/updateOne/:id', updateOne)  // patch : mise à jour un 
routeur.delete('/deleteOne/:id',deleteOne)  // delete: supprimer   un 

// Export
export default routeur
