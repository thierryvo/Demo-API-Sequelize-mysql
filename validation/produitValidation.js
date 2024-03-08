// ==========================================================================================================
// restapicrud  API(CRUD) NodeJS Express                                                http://localhost:8080
// ==========================================================================================================
// dossier: C:\WORK\NODEJS\restapicrud
// fichier: validation/produitValidation.js
// ==========================================================================================================
// import des modules nécessaires
import Joi from 'joi'

//
// CREER une fonction flêchée qui va prendre le body à valider
const produitValidation = (body) => {
    // On utilise Joi: pour Définir un Schéma de Validation
    const ProduitSchemaDeValidation = Joi.object({
        titre: Joi.string().min(3).max(40).trim().required(),
        prix: Joi.number().required(),
        description: Joi.string().min(5).max(500)
    })
    //
    // Retour Validation
    return ProduitSchemaDeValidation.validate(body)
}
//
// EXPORT
export default produitValidation

