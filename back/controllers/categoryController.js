import Category from "../models/CategoryModel.js"

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Récupération de TOUTES les catégories
 */
export const GetCategories = async (req, res) => {
    try {
        const categories = await Category.find({})
        res.json(categories)
    } catch (error) {
        res.json({message:"Aucune catégorie trouvée"})
    }
}