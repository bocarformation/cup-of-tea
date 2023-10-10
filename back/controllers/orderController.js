import Order from "../models/OrderModel.js"

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Valider le panier de l'utilsateur donc créer une nouvelle commande, attention c'est ici qu'on calcule le total et pas dans REACT
 */
export const AddOrder = async (req, res) => {

try {
    
    // Validation et calcul du prix total en provenance du back et non du front

    // On aurait pu aller plus loin c-à-d récupérer les prix à partir de la BDD et non du front(LS)
let price = 0;
for (const p of req.body.items) {
    price += p.price
}
    
let newOrder = new Order({
    userId: req.body.user,
    items: req.body.items,
    date: new Date(),
    total_price: price,
})

await newOrder.save();

res.json({message:"Votre commande a bien été enregistré"})

} catch (error) {
    res.json({message: "Impossible de valider votre commande"})
}

}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Récupérer toutes les commandes de tous les utilisateurs
 */
export const GetOrders = async (req, res) => {
  try {
    const orders = await Order.find({})

    res.json(orders)
    
  } catch (error) {
    res.json({message: "Pas de commandes trouvée"})
  }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Récupération des commandes par utilisateur
 */
export const GetOrdersByUser = async (req,res) => {

    
    try {
        // On va chercher les commandes qui sont liées à l'utilisateur
        console.log(req.session.isLogged)
        let orders = await Order.find({userId: req.session.isLogged })
        

        res.json(orders)
    } catch (error) {
        res.json({message: "Utilisateur/Commande non trouvée"})
    }

}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * Récupérer une commande spécifique
 */
export const GetOneOrder = async (req, res) => {

try {
    const {id} = req.params
    const order = await Order.find({_id: id})

    res.json(order)
    
} catch (error) {

    res.json({message: "Aucune commande avec cet ID"})
    
}
}