import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Teas = () => {
    const [categories, setCategories] = useState([]);
    const [blackTea, setBlackTea] = useState([]);
    const [greenTea, setGreenTea] = useState([]);
    const [oolong, setOolong] = useState([]);
    const [whiteTea, setWhiteTea] = useState([]);
    const [rooibos, setRooibos] = useState([]);
    const [teas, setTeas] = useState([]);


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/category`)
            .then((res) => {
                setCategories(res.data)

            }
            )

        axios.get(`${process.env.REACT_APP_API}/teas`)
            .then((res) => {
                let bts = [];
                let gts = [];
                let ool = [];
                let wts = [];
                let roo = [];

                for (const tea of res.data) {

                    console.log(tea.category)
                    if (tea.category.includes("Thé noir")) {
                        bts.push(tea)
                    }
                    else if (tea.category.includes("Thé vert")) {
                        gts.push(tea)
                    } else if (tea.category.includes("Oolong")) {
                        ool.push(tea)
                    } else if (tea.category.includes("Thé blanc")) {
                        wts.push(tea)
                    }
                    else if (tea.category.includes("Rooibos")) {
                        roo.push(tea)
                        
                    }
                }
                setBlackTea(bts)
                setGreenTea(gts)
                setOolong(ool)
                setRooibos(roo)
                setWhiteTea(wts)

            }
            )
    }, [])

    return (
        <main class="container">
 <section class="tea">
    {}
            {categories.map((c, i) => (
                <>
                    <img src={`${process.env.REACT_APP_API}/img/tea/${c.img}`} alt="Tasse de thé noir" />
                    <h2><span>{c.name}</span></h2>
                    <p class="clear">{c.description}</p>
                    {c.name === "Thé noir" && (

                        <section class="listing-product" key={i}>
                        {blackTea.map((bt, i) => (

                                <article>
                                    <h3>{bt.name}</h3>
                                    <img src={`${process.env.REACT_APP_API}/img/product/${bt.img_min}`} alt={bt.name} />
                                    <section class="price">
                                        <p>À partir de <strong>9,00€</strong></p>
                                    </section>
                                    <NavLink className="btn" to={`/the/${bt._id}`}>Voir ce produit</NavLink>
                                </article>
                        ))}
                            </section>
                    )}
                    {c.name === "Thé vert" && (

<section class="listing-product" key={i}>
{blackTea.map((bt, i) => (

        <article>
            <h3>{bt.name}</h3>
            <img src={`${process.env.REACT_APP_API}/img/product/${bt.img_min}`} alt={bt.name} />
            <section class="price">
                <p>À partir de <strong>9,00€</strong></p>
            </section>
            <NavLink className="btn" to={`/the/${bt._id}`}>Voir ce produit</NavLink>
        </article>
))}
    </section>
)}
                    {c.name === "Thé blanc" && (

<section class="listing-product" key={i}>
{blackTea.map((bt, i) => (

        <article>
            <h3>{bt.name}</h3>
            <img src={`${process.env.REACT_APP_API}/img/product/${bt.img_min}`} alt={bt.name} />
            <section class="price">
                <p>À partir de <strong>9,00€</strong></p>
            </section>
            <NavLink className="btn" to={`/the/${bt._id}`}>Voir ce produit</NavLink>
        </article>
))}
    </section>
)}
                    {c.name === "Oolong" && (

<section class="listing-product" key={i}>
{blackTea.map((bt, i) => (

        <article>
            <h3>{bt.name}</h3>
            <img src={`${process.env.REACT_APP_API}/img/product/${bt.img_min}`} alt={bt.name} />
            <section class="price">
                <p>À partir de <strong>9,00€</strong></p>
            </section>
            <NavLink className="btn" to={`/the/${bt._id}`}>Voir ce produit</NavLink>
        </article>
))}
    </section>
)}
                    {c.name === "Rooibos" && (

<section class="listing-product" key={i}>
{blackTea.map((bt, i) => (

        <article>
            <h3>{bt.name}</h3>
            <img src={`${process.env.REACT_APP_API}/img/product/${bt.img_min}`} alt={bt.name} />
            <section class="price">
                <p>À partir de <strong>9,00€</strong></p>
            </section>
            <NavLink className="btn" to={`/the/${bt._id}`}>Voir ce produit</NavLink>
        </article>
))}
    </section>
)}

                </>
            ))}
</section>

        </main>
    );
};

export default Teas;