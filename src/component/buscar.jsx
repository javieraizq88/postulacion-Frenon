// import React, { useEffect } from "react"
// import Dashboard from "./dashboard"
// import { useContext } from "react"
// import { Context } from "../store/appContext"

// const Buscar = props => {

//     // const { store, actions } = useContext(Context)

//     useEffect (() => {
//         fetch('./db.json')
//             .then(response => response.json())
//             .then(data => this.setState({ data: data }));
//     }, [])


//     return (
//         <div className="">
//             <div id="home" className="container ">
//                 <Dashboard />

//                 <div id="dashboard" className=" col-md-12">

//                     <div className=" mb-4 card">
//                         <div className="card-body">

//                             <label
//                                 className="col-md-4 col-xs-4"
//                                 id="pregunta1"
//                                 htmlFor="Hotel">
//                                 Escriba el Hotel que busca
//                                             </label>
//                             <input
//                                 type="text"
//                                 className="col-md-5 form-control"
//                                 name="name"
//                                 id="name"
//                                 placeholder="Nombre del hotel"
//                                 onChange={(e) => { actions.handleChange(e) }}
//                                 value={store.hotel}
//                             />
//                             <br />
//                             <br />

//                             <button
//                                 // onClick={}
//                                 type="button"
//                                 className="btn btn-success">
//                                 Buscar
//                                                     </button>

//                         </div>
//                     </div>
//                 </div>

//                 <div id="dashboard" className=" col-md-12">

//                     <div className=" mb-4 card">
//                         <div className="card-body">
//                             {data.map(hotel => {
//                                 return (

//                                     <div class=" card-img col-md-4 mb-3 col-sm-10 col-xs-10">
//                                         <img
//                                             className="card card-img"
//                                             id="card-hoteles2"
//                                             src={hotel.imagen}
//                                             alt="..." />
//                                         <div class="ml-2 pl-1 card-img-overlay" id="boton">
//                                             {/* Boton Modal */}
//                                             <div id="modal">
//                                                 <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
//                                                     Reservar
//                                 </button>
//                                             </div>
//                                             <h5 class="mt-4 card-title">{hotel.hotel_name} </h5>
//                                         </div>
//                                     </div> /* fin del card */
//                                 )
//                             })}




//                         </div>
//                     </div>
//                 </div>




//             </div>
//         </div>

//     )
// }

// export default Buscar