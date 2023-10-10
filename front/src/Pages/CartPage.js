import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getCookie } from '../utils/Auth';
import axios from 'axios';

const CartPage = () => {

    const [cart, setCart] = useState([]);
    const [user, setUser] = useState(false)
    useEffect(() => {
        const ls = JSON.parse(localStorage.getItem("cart"))
        setUser(getCookie())
        console.log(getCookie())
        setCart(ls)
    }, [])

    const handleDelete = (index) =>{
           // Créez une copie du tableau cart
           const updatedCart = [...cart];

           // Supprimez l'élément à l'indice donné
           updatedCart.splice(index, 1);
   
           // Mettez à jour l'état local avec le nouveau tableau
           setCart(updatedCart);
   
           // Mettez à jour le localStorage avec le nouveau tableau
           localStorage.setItem("cart", JSON.stringify(updatedCart));

        // Émettez un événement personnalisé "cartChange" pour notifier le changement de panier
        const cartChangeEvent = new Event("cartChange");
        window.dispatchEvent(cartChangeEvent);
    }
    
    const validateCart = () =>{
       let confirmOrder = window.confirm("Voulez vous vraiment valider votre commande?")

       if(!confirmOrder){
        return null
       }

       let cart = JSON.parse(localStorage.getItem("cart")) || []
   
       const order = {
        user: getCookie(), // On va récupérer l'ID de l'utilisateur connecté,
        items: cart
       // La date et le prix total on va le gérer directement dans le back et non dans le front     
       }
       axios.post("http://localhost:7000/new-order", order, {withCredentials: true})
       .then((res)=>{
        console.log("La commande a bien été validé")
       })
     
    }

    return (
        <main className="container" >

            <section className="tea"><img src="/img/tea/1.jpg" alt="Tasse de thé" /><h2>
                <span>Votre panier</span></h2>
                <table>
                    <thead>
                        <tr>
                            <th>Réf</th>
                            <th>Produit</th>
                            <th>Conditionnement</th>
                            <th>Prix</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((q, i) => <tr key={i}><td>{q.ref}</td><td>{q.name}</td><td>{q.conditioning}</td><td>{q.price.toFixed(2)}€</td><td><NavLink title='Retirer le produit du panier' name={i} onClick={() => handleDelete(i)}><i className='fa fa-trash'/></NavLink></td></tr>)}
                    </tbody>
                </table>
                <p className="clear">&nbsp;</p>
                {user &&    
                    <section className="listing-product"><div className="btn" onClick={validateCart}>Commander</div>
                    </section>}
            </section>

        </main>
    );
};

export default CartPage;