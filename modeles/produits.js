// ==========================================================================================================
// restapicrud  API(CRUD) NodeJS Express                                                http://localhost:8080
// ==========================================================================================================
// dossier: C:\WORK\NODEJS\restapicrud
// fichier: modeles/produits.js
// ==========================================================================================================
// import des modules nécessaires
import sequelize from 'sequelize'
import db from '../db/db.js'

// CREER un nouveau Schéma: produit    ( Nom du modèle (nom de la table créée):  produit )
// oOptions: Objet d'options qui définie la table à CREER dans la base de données
const {DataTypes} = sequelize
const nomDuModele = 'produit'
const oOptions = {
    id : {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titre: {type: DataTypes.STRING, allowNull: false },
    prix: {type: DataTypes.FLOAT, allowNull: false},
    description: {type: DataTypes.TEXT, allowNull: true}
}
const Produit = db.define(nomDuModele, oOptions)
//
// EXPORT
export default Produit