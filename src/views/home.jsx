import React, { useContext, useState } from "react"
import { Context } from "../store/appContext"
import data from "../component/data.js"
import { useEffect } from "react"
import Modal from "../component/modal"
import datamsg from "../component/datamsg"
import { Link } from "react-router-dom"
import Dashboard from "../component/dashboard"

const Home = props => {
    const { store, actions } = useContext(Context)


    useEffect(() => {
        fetch('./db.json')
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
    }, [])


    return (
        <>


            <div className="">
                <div id="home" className="container ">

                    {/* container superior dashboard */}
<Dashboard />

                    <div id="container-izq" className=" d-flex justify-content-between">
                        {/* container izquierda */}
                        <div className="col-md-8 col-sm-12">
                            <div id="card-usuario" className="card mb-4 card-body">
                                <h4 className="mt-2">Bienvenido</h4>
                                <h3 className="mt-4">{store.name}</h3>
                                <hr />
                                <h5 className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id et nihil dolores porro a in, eaque laudantium temporibus fuga molestias.</h5>
                            </div>

                            <div className="col-sm-12 card mb-4 justify-content-between">
                                <div className="card-group mb-4 mt-4 justify-content-between">
                                    <span id="notificaciones" className="card-group">
                                        <div id="dibujo-card-mitad-izq" className="col-md-2">
                                            <i class="far fa-envelope"></i>
                                        </div>
                                        <p className="col-md-10">Notificaciones<br /> is simply dum</p>
                                    </span>

                                    <span id="hoteles" className="card-group">
                                        <div id="dibujo-card-mitad-izq" className="col-md-2">
                                            <i class="fas fa-bed"></i>
                                        </div>
                                        <p className="col-md-10">Hoteles <br /> is simply dum</p>
                                    </span>
                                    <span id="pagos" className="mr-3 card-group">
                                        <div id="dibujo-card-mitad-izq" className="col-md-2">
                                            <i class="far fa-credit-card"></i>
                                        </div>
                                        <p className="col-md-10">Pagos <br /> is simply dum</p>
                                    </span>
                                </div>

                            </div>

                            <h3 id="hoteles-disponibles" className="mb-4 mt-2">Hoteles Disponibles</h3>
                            <div className=" card-group ">
                                {data.map(hotel => {
                                    return (

                                        <div class=" card-img col-md-4 mb-3 col-sm-10 col-xs-10">
                                            <img
                                                className="card card-img"
                                                id="card-hoteles2"
                                                src={hotel.imagen}
                                                alt="..." />
                                            <div class="ml-2 pl-1 card-img-overlay" id="boton">
                                                {/* Boton Modal */}
                                                <div id="modal">
                                                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
                                                        Reservar
                                                    </button>
                                                </div>
                                                <h5 class="mt-4 card-title">{hotel.hotel_name} </h5>
                                            </div>
                                        </div> /* fin del card */
                                    )
                                })}

                            </div> {/* fin del mapeo */}

                        </div>

                        {/* container derecha */}
                        <div className="col-md-4 col-sm-12 ">
                            <div className="card bg-white">
                                <h4 className="mt-2 pl-4 pr-4">Notificaciones</h4>
                                {datamsg.map(mensaje => {
                                    return (

                                        <div className="card mb-2 mr-3 ml-3 mt-3 pl-4 pr-4">
                                            <div id="iconos-notificaciones" className=" mt-2 ml-2 d-flex justify-content-between">
                                                 <i class="far fa-envelope"></i>
                                                <p className="mr-2">{mensaje.fecha}</p>
                                            </div>
                                            <h5 id="nombre-mensaje" className="ml-2">{mensaje.nombre}</h5>
                                            <p id="nombre-mensaje" className="ml-2 mt-2 pb-2">{mensaje.mensaje_corto}</p>
                                            <Link to="/notificaciones:mensaje"> <button className="mb-3 btn btn-primary">Leer</button></Link>

                                        </div>
                                    )
                                })}


                            </div>
                        </div>

                    </div>


                </div>
            </div>

            <Modal />



        </>
    )
}

export default Home