import React from "react"
import datamsg from "./datamsg.js"
import { useContext } from "react"
import { Context } from "../store/appContext.js"
import Dashboard from "./dashboard.jsx"


const Notificaciones = props => {

    const { store } = useContext(Context)

    return (
        <>
            <div className="">
                <div id="home" className="container ">

                    {/* container superior dashboard */}
                    <Dashboard />


                    {/* Notificaciones */}
                    <div className=" col-md-12">
                        <div id="dashboard" className=" mb-4 card">
                            <div className="card-body">
                                {datamsg.map(mensaje => {
                                    return (

                                        <div className="card mb-2 mr-3 ml-3 mt-3 pl-4 pr-4">
                                            <div id="iconos-notificaciones" className=" mt-2 ml-2 d-flex justify-content-between">
                                                <i class="far fa-envelope"></i>
                                                <p className="mr-2">{mensaje.fecha}</p>
                                            </div>
                                            <h5 id="nombre-mensaje" className="ml-2"><strong></strong> {mensaje.hotel}</h5>
                                            <p id="nombre-mensaje" className="ml-2 mt-2 pb-2">Estimado/a {store.name} </p>
                                            <p id="nombre-mensaje" className="ml-2 mt-2 pb-2">Usted tiene una reserva pendiente en {mensaje.hotel} de {mensaje.ubicacion} la cuál consta de {mensaje.habitacion} para {mensaje.personas} personas {mensaje.tiempo} </p>
                                            <p id="nombre-mensaje" className="ml-2 mt-2 pb-2">Saludos Cordiales </p>


                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>   


                </div>
            </div>

        </>
    )
}

export default Notificaciones