import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom"

const Header = () => {
    const [totalPrice, setTotalPrice] = useState(0);

    /**
     * 
     * @returns 
     * Calcul du panier à jour
     */
    const calculateTotalPrice = async () => {
        const cart = await JSON.parse(localStorage.getItem("cart")) || [];
        let tp = 0;

        // Je mets à jour le prix total UNIQUEMENT pour le front (pour le back voir controller AddOrder)
        for (const item of cart) {
            tp += parseInt(item.price); 
        }

        return tp;
    }

    useEffect(() => {
        calculateTotalPrice().then((initialTotalPrice) => {
            setTotalPrice(initialTotalPrice);
        });

        const cartChangeHandler = async () => {
            const updatedTotalPrice = await calculateTotalPrice();
            setTotalPrice(updatedTotalPrice);
        }

        window.addEventListener("cartChange", cartChangeHandler);

        // Ma fonction de nettoyage, une fois qu'on a terminé notre useEffect, on retire l'event customisé
        return () => {
            window.removeEventListener("cartChange", cartChangeHandler);
        };
    }, []);

    return (
        <header>
            <img className="ribbon" src="img/ribbon.svg" alt="élu meilleur thé en 2016" />
            <section id="topbar">Livraison offerte à partir de 65€ d'achat !</section>
            <div className="container">
                <section id="logo">
                    <NavLink to={"/"}>
                        <img src="img/logo.png" alt="Logo de Cup of Tea" />
                    </NavLink>
                    <section id="cart">
                        <NavLink to={"/panier"} style={{color:"white"}}><span>Mon panier</span></NavLink>
                        <strong>{totalPrice.toFixed(2)}€</strong>
                    </section>
                </section>
                <nav>
                    <NavLink to={"/nos-thes"}>Thés</NavLink>
                    <NavLink to="#">Grands crus</NavLink>
                    <NavLink to="#">Accessoires</NavLink>
                    <NavLink to="#">Epicerie</NavLink>
                    <NavLink to={""}>Notre histoire</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
