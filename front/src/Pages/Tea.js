import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Tea = () => {
    const [tea, setTea] = useState("");
    const [pochette, setPochette] = useState([]);
    const [libelle, setLibelle] = useState();
    const [price, setPrice] = useState(0);
    const [items, setItems] = useState([]); // Utilisez un state pour les éléments du panier
    const { id } = useParams();

        // Initialisez ls avec un tableau vide s'il n'existe pas dans le localStorage
        let ls = JSON.parse(localStorage.getItem("cart")) || [];
        
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/tea/${id}`)
        .then((res) => {
            setTea(res.data);
            setPochette(res.data.conditioning);
            setPrice(res.data.conditioning[0].price);
            setLibelle(res.data.conditioning[0]);
        });
    }, []);

    const handleChange = (e) => {
        setPrice(pochette[e.target.value].price);
        setLibelle(pochette[e.target.value]);
    }

    const handleClick = (e) => {
        let item = {
            ref: tea.ref,
            name: tea.name,
            conditioning: libelle.libelle,
            price: price,
        }
    
        // Mise à jour du state local items
        setItems([...items, item]);
        
        // Mettez à jour le localStorage
        const updatedCart = [...ls, ...items, item];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    
        // Déclenchez un événement personnalisé pour notifier le changement de panier
        const cartChangeEvent = new Event("cartChange");
        window.dispatchEvent(cartChangeEvent);      
    }

    // Utilisez useEffect pour mettre à jour le localStorage lorsque items change
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify([...ls, ...items]));
    }, [items]);

    return (
        <main class="container">
        <section id="product">
            <section id="product-detail">
                <div id="product-name">
                    <h1>{tea.name}</h1>
                    <h2>{tea.mini_desc}</h2>
                    <p>Ref : {tea.ref}</p>
                </div>
                <div id="rating">
                    <i class="gold fa fa-star" aria-hidden="true"></i>
                    <i class="gold fa fa-star" aria-hidden="true"></i>
                    <i class="gold fa fa-star" aria-hidden="true"></i>
                    <i class="gold fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <a href="#">Voir les 56 avis clients</a>
                </div>
            </section>
            <section id="product-quantity">
                <img src={`${process.env.REACT_APP_API}/img/product/${tea.img_min}`} alt={tea.name} />
                <div class="price">
                    <select name="quantity" onChange={handleChange}>
                        {pochette.map((p,i)=>(
                            <option key={i} value={i}>{p.libelle}</option>
                        ))}
                        
                    </select>
                    <h3>{price.toFixed(2)}€</h3>
                    <a class="btn" href="#" onClick={handleClick}>Ajouter au panier</a>
                    <a id="wishlist" href="#">Ajouter à ma liste d'envie</a>
                </div>
            </section>
            <section id="product-description">
                {tea.description}
                <p><strong>Profitez d'une remise de 5% sur la pochette de 500g (prix déjà remisé).</strong></p>
                <p><strong>Profitez d'une remise de 10% sur le lot de 2 pochettes de 500g (prix déjà remisé).</strong></p>
            </section>
        </section>
    </main>
    );
};

export default Tea;