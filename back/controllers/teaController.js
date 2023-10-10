import Tea from "../models/TeaModel.js"

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Récupération de tous les thés
 */
export const GetTeas = async (req, res) => {
    try {
        const teas = await Tea.find({}).sort({createdAt: -1}).limit(30)

        res.json(teas)
    } catch (error) {
        res.json({message:"Erreur, impossible de récupérer les thés"})

    }

}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Récupérer le dernier thé inséré en BDD
 */
export const GetLastTea = async (req, res) => {
try {

    const lastTea = await Tea.find().sort({createdAt: -1}).limit(1)

    res.json(lastTea)
    
} catch (error) {
    res.json({message: "Impossible d'obtenir le dernier thé"})
}

}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Récupération du meilleur thé en BDD (celui qui a le plus de order_count)
 */
export const GetBestTea = async (req, res) => {

try {
    const bestTea = await Tea.find().sort({"orders_count": -1}).limit(1)

    res.json(bestTea)
} catch (error) {
    res.json({message:"Impossible d'obtenir le best seller"})
}

}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Récupérer un seul thé par son ID
 */
export const GetOneTea = async (req, res) => {
    
    try {
         const {id} = req.params

    let tea = await Tea.findById(id)

    res.json(tea)
    } catch (error) {
        res.json({message:"Désolé, aucun thé trouvé avec cet ID"})
    }
   

}