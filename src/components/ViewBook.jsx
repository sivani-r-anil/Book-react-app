import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewBook = () => {

    const [data, changeData] = useState(
        [
            { "name": "Silent Patient", "author": "Alex Michaelides", "price": "300", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToPIOZzqMn2hc6ikox3HqPNyUXKu6Oqwdf02mbRo1oxREblaOEpccJmDg&s=10" },
            { "name": "To All the I've Loved Before", "author": "Jenny Han", "price": "250", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDLf09F0M_rN89y8J6QMod3xIKt5jNe8MbAhLRxVuKg&s=10" },
            { "name": "Harry Potter", "author": "JK Rowling", "price": "500", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaoqT7PrSNAjTB4JrpWSQJINvvJHWedqcMcIYuaPYHag&s=10" },
            { "name": "Life of Pi", "author": "Yann Martel", "price": "400", "avatar": "https://www.ingramspark.com/hs-fs/hubfs/71wW1coSR0L-_UF1000%2C1000_QL80_-jpg.jpeg?width=273&height=417&name=71wW1coSR0L-_UF1000%2C1000_QL80_-jpg.jpeg" },
            { "name": "Night Birds", "author": "Kate J Armstrong", "price": "350", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIqrYjbYYhYNxTOlvOKbp7m_1N4DcPDoXhGCfB5mAtbEM1wzUhg_F1KFw&s=10" },
        ]
    )

    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h2>BOOK DETAILS...</h2>
                        <div className="row g-3">

                            {data.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">

                                            <div class="card">
                                                <img src={value.avatar}
                                                    class="card-img-top" alt="..." height="400px"></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.name}</h5>
                                                </div>
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">Author:{value.author}</li>
                                                    <li class="list-group-item">Price:{value.price}</li>
                                                    <li class="list-group-item"><a href="#" class="btn btn-dark">Add to cart</a></li>
                                                </ul>
                                            </div>

                                        </div>
                                    )
                                }
                            )}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewBook