import React, { useEffect } from "react"
import { useContext } from "react"
import { Context } from "../store/appContext"
import Dashboard from "./dashboard"
import data from "./data.js"


const Resultados = props => {
    const { store, actions } = useContext(Context)


    useEffect(() => {
        fetch('./db.json')
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
    }, [])

    return (
        <div className="">
            <div id="home" className="container ">
                <Dashboard />
                <div id="dashboard" className=" col-md-12">
                    <div className=" mb-4 card">
                        <div className="card-body">
                            <div className="col">
                                <h2>Escribe el Hotel que buscas</h2>
                                <input
                                    label="Buscar Hotel"
                                    value={store.buscarHotel}
                                    onChange={(e) => actions.handleChange(e)}
                                    name="buscarHotel"
                                    icon="search"
                                    type="" />
                            </div>
                            <br />
                            <br />

                        </div>
                    </div>
                </div>


                <div id="dashboard" className=" col-md-12">
                    <div className=" mb-4 card">
                        <div className="card-body">
                            {data
                                .filter((hotel) => {
                                    const { hotel_name } = hotel
                                    return (hotel_name.includes(store.buscarHotel))
                                })
                                .map(hotel => {
                                    return (
                                        <div class="card-img col-md-4 mb-3 col-sm-10 col-xs-10">
                                            <img
                                                className="card card-img"
                                                id="card-hoteles2"
                                                src={hotel.imagen}
                                                alt="..." />
                                            <div class="ml-2 pl-1 card-img-overlay" id="boton">
                                                {/* Boton Modal */}
                                                <div id="modal">
                                                </div>
                                                <h5 class="mt-4 card-title">{hotel.hotel_name} </h5>
                                            </div>
                                        </div> /* fin del card */
                                    )
                                })}




                        </div>
                    </div>
                </div>



            </div>
        </div>

    )
}

export default Resultados
