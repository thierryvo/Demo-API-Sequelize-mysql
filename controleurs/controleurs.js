// ==========================================================================================================
// restapicrud  API(CRUD) NodeJS Express                                                http://localhost:8080
// ==========================================================================================================
// dossier: C:\WORK\NODEJS\restapicrud
// fichier: controleurs/controleurs.js
// ==========================================================================================================
// import des modules nécessaires
import Produit from '../modeles/produits.js'
import produitValidation from '../validation/produitValidation.js'

const oOption = {
    attributes: {exclude: ['createdAt', 'updatedAt']}
}

// ==============================
// getAll()
// ==============================
const getAll = (req, res) => {
    Produit.findAll(oOption)
    .then((tabProduits) => {
        res.status(200).json(tabProduits)
    })
    .catch((error) => { res.status(500).json({message: "ERREUR Produit getAll(): error=  "+error}) })
}

// ==============================
// getOne()
// ==============================
const getOne = (req, res) => {
    const {id} = req.params
    Produit.findByPk(id, oOption)
    .then((produit) => {
        if(!produit){ res.status(404).json({message: "ERREUR Produit getOne(): NON Trouvé=  "+id}) }    
        //
        // RETOUR: produit          
        res.status(200).json(produit)
    })
    .catch((error) => { res.status(500).json({message: "ERREUR Produit getOne(): error=  "+error}) })
}

// ==============================
// createOne()
// ==============================
const createOne = (req, res) => {
    const {body} = req
    const {error} = produitValidation(body)
    if(error){ return res.status(401).json('ERREUR Produit createOne():'+error.details[0].message) }
    //
    // Appel du Modèle: pour CREER un ENREG.
    Produit.create({...body})
    .then(() => {
        res.status(201).json({message: "Produit créé en base de données"})
    })
    .catch((error) => { res.status(500).json({message: "ERREUR Produit createOne(): error=  "+error}) })
}

// ==============================
// updateOne()
// ==============================
const updateOne = (req, res) => {    
    const {id} = req.params
    const {body} = req
    Produit.findByPk(id)
    .then((produit) => {
        if(!produit){ res.status(404).json({message: "ERREUR Produit updateOne(): NON Trouvé=  "+id}) }  
        //
        // update   
        produit.titre = body.titre
        produit.prix = body.prix
        produit.description = body.description
        produit.save().then((oSave) => {
            //
            // RETOUR: produit          
            res.status(201).json({message: "Produit mise à jour: "+oSave})     
        })
        .catch((error) => { res.status(500).json({message: "ERREUR Produit updateOne(): error=  "+error}) })    
    })
    .catch((error) => { res.status(500).json({message: "ERREUR Produit updateOne(): error=  "+error}) })    
}

// ==============================
// deleteOne()
// ==============================
const deleteOne = (req, res) => {
    const {id} = req.params
    Produit.findByPk(id)
    .then((produit) => {
        if(!produit){ res.status(404).json({message: "ERREUR Produit deleteOne(): NON Trouvé=  "+id}) }  
        //
        // delete
        Produit.destroy({where: {id: id}}).then((oDelete) => {
            //
            // RETOUR: delete produit          
            res.status(200).json({message: "Produit supprimé; Nombre d'élément supprimé: "+oDelete})     
        })
        .catch((error) => { res.status(500).json({message: "ERREUR Produit deleteOne(): error=  "+error}) })    
    })
    .catch((error) => { res.status(500).json({message: "ERREUR Produit deleteOne(): error=  "+error}) })     
}

//
// EXPORT
export {getAll, getOne, createOne, updateOne, deleteOne}
