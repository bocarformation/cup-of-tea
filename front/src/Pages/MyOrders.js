import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/orders-user`, { withCredentials: true })
            .then((res) => {
                setOrders(res.data)
                console.log(res.data)

            })
    }, [])
    return (
        <main className="container" >

            <section className="tea"><img src="/img/tea/2.jpg" alt="Tasse de thé" /><h2>
                <span>Mes commandes</span></h2>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Commande</th>
                            <th>Prix total</th>

                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((q, i) => (
                            
                            <tr key={i}>
                               
                                <td>{new Date(q.date).toLocaleString()}</td>
                                <td> <details> 
                                <summary>Voir détails de la commande</summary>{q.items.map((it,i)=> 
                                <li key={i}>
                               
                
                              {it.conditioning} - {it.price.toFixed(2)}€
                              
                                </li>)}</details></td>
                                <td><strong>{q.total_price.toFixed(2    )}€</strong></td>
                                
                            </tr>
                        ))}

                    </tbody>
                </table>

            </section>

        </main>
    );
};

export default MyOrders;