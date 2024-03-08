// ==========================================================================================================
// restapicrud  API(CRUD) NodeJS Express                                                http://localhost:8080
// ==========================================================================================================
// dossier: C:\WORK\NODEJS\restapicrud
// fichier: db/db.js
// ==========================================================================================================
// import des modules nécessaires
import {Sequelize} from 'sequelize'

// Instanciation de Sequelize,
//  avec quelques informations:  mysql ou mysql2 ?
const baseDeDonnees = 'crud'
const nomUtilisteur = 'root'
const motDePasse = 'root'
const oOptions = {
    dialect: 'mysql',
    host: 'localhost'
}
export default new Sequelize(baseDeDonnees, nomUtilisteur, motDePasse, oOptions)