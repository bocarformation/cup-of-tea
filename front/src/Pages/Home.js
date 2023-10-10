import React, { useEffect, useState } from 'react';
import axios from "axios"
const Home = () => {

const [categories, setCategories] = useState([]);
const [lastTea, setLastTea] = useState("")
const [conditioning, setConditioning] = useState([])
const [bestSeller, setBestSeller] = useState("")
const [teas, setTeas] = useState([])

useEffect(()=> {
axios.get("${process.env.REACT_APP_API}/category")
.then((res)=>{
    setCategories(res.data)
    
})


axios.get("${process.env.REACT_APP_API}/last-tea")
.then((res)=>{
    setLastTea(res.data)
   setConditioning(parseInt(res.data[0].conditioning[0].price))
})

axios.get("${process.env.REACT_APP_API}/best-tea")
.then((res)=>{
	setBestSeller(res.data)

})


},[])

useEffect(()=>{
	axios.get(`${process.env.REACT_APP_API}/teas`)
	.then((res)=>{
		setTeas(res.data)
		
	})
},[])

    return (
<main class="container">
			<section id="noel">
				<h1>C'est noël chez Cup of Tea, profitez-en !</h1>
				<img src="img/offre-noel.jpg" alt="Offre spéciale pour noel ! Dès 45€ d'achat, le photophore de noël vous sera offert. Et dès 85€ un thé vert au prune et coing de 100 gramme vous sera offert" />
				<small>Pour toute commande effectuée avant le 20 décembre</small>
			</section>
			<section id="slider">
				<div class="flexslider">
					<ul class="slides">
						<li><img src="img/slider/1.jpg" alt="Retrouvez toute nos idées cadeaux pour les fêtes de noël" /></li>
						<li><img src="img/slider/2.jpg" alt="Retrouvez toute la collection des thés numéro 25 et notre nouvelle édition limitée" /></li>
					</ul>
				</div>
			</section>
			<section id="categorie">
				<h2><span>Choisissez votre thé</span></h2>
			{categories.map((oneC,i) => (
                	<a href="#" key={i}>
					<img src={`${process.env.REACT_APP_API}/img/tea/${oneC.img}`} alt={oneC.name} />
					<h3>{oneC.name}</h3>
				    </a>
            ))}
				
			</section>
            {(lastTea[0] && bestSeller[0] && teas[0]) && (

			<section id="tea">
				<article id="new">
					<h2><span>Notre nouveauté</span></h2>
					<img src={`${process.env.REACT_APP_API}/img/product/${lastTea[0].img_min}`} alt={lastTea[0].name} />
					<h3>{lastTea[0].name}</h3>
					<p>{lastTea[0].description}</p>
					<section class="price">
						<p>À partir de <strong>{conditioning.toFixed(2)}€</strong></p>
					</section>
					<a class="btn" href={`/the/${lastTea[0]._id}`}>Voir ce produit</a>
				</article>
				<article id="best">
					<h2><span>Notre best-seller</span></h2>
					<img src={`${process.env.REACT_APP_API}/img/product/${bestSeller[0].img_min}`} alt={bestSeller[0].name} />
					<h3>{bestSeller[0].name}</h3>
					<p>{bestSeller[0].description}</p>
					<section class="price">
						<p>À partir de <strong>{bestSeller[0].conditioning[0].price.toFixed(2)}€</strong></p>
					</section>
					<a class="btn" href={`/the/${bestSeller[0]._id}`}>Voir ce produit</a>
				</article>
				<article id="crush">
					<h2><span>Notre coup de coeur</span></h2>
					<img src={`${process.env.REACT_APP_API}/img/product/${teas[5].img_min}`} alt={teas[5].name} />
					<h3>{teas[5].name}</h3>
					<p>{teas[5].description}</p>
					<section class="price">
						<p>À partir de <strong>{teas[5].conditioning[0].price.toFixed(2)}€</strong></p>
					</section>
					<a class="btn" href={`/the/${teas[5]._id}`}>Voir ce produit</a>
				</article>
			</section>

            )}
		</main>
    );
};

export default Home;