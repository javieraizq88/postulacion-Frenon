import React from "react"

const Home = props => {
    return (
        <>


            <div className="">
                <div id="home" className="container ">

                    {/* container superior dashboard */}
                    <div className=" col-md-12">
                        <div id="dashboard" className=" mb-4 card">
                            <div className="card-body">
                                <div className="mt-4 mb-4 cardSupIzq d-flex justify-content-between">
                                    <h4>Dashboard</h4>
                                    <div className="iconos">
                                        <a className="" href="#">
                                            <i class="fas fa-search"></i>
                                        </a>
                                        <a href="#">
                                            <i class="far fa-envelope"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fas fa-cog"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fas fa-chart-bar"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="container-izq" className=" d-flex justify-content-between">
                        {/* container izquierda */}
                        <div className="col-md-8 col-sm-12">
                            <div id="card-usuario" className="card mb-4 card-body">
                                <h4 className="mt-2">Bienvenido</h4>
                                <h3 className="mt-4">David Anderson</h3>
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
                                <div class=" card-img col-md-4 mb-3 col-sm-10 col-xs-10">
                                    <img
                                        className="card card-img"
                                        id="card-hoteles2"
                                        src="https://images.unsplash.com/photo-1582301217431-c5f83dfd8ec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                        alt="..." />
                                    <div class="ml-2 pl-1 card-img-overlay" id="boton">
                                        <h5 class="card-title">WANHARA HOTEL </h5>
                                        <botton class="mt-5 btn btn-danger"> Reservar</botton>
                                    </div>
                                </div>

                                <div class=" card-img col-md-4 mb-3 col-sm-10 col-xs-10">
                                    <img
                                        className="card card-img"
                                        id="card-hoteles2"
                                        src="https://images.unsplash.com/photo-1582301217431-c5f83dfd8ec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                        alt="..." />
                                    <div class="ml-2 pl-1 card-img-overlay" id="boton">
                                        <h5 class="card-title">Card title</h5>
                                        <botton class="mt-5 btn btn-danger"> Reservar</botton>
                                    </div>
                                </div>
                                <div class=" card-img col-md-4 mb-3 col-sm-10 col-xs-10">
                                    <img
                                        className="card card-img"
                                        id="card-hoteles2"
                                        src="https://images.unsplash.com/photo-1582301217431-c5f83dfd8ec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                        alt="..." />
                                    <div class="ml-2 pl-1 card-img-overlay" id="boton">
                                        <h5 class="card-title">Card title</h5>
                                        <botton class="mt-5 btn btn-danger"> Reservar</botton>
                                    </div>
                                </div>
                            </div>

                            <div className="card-group justify-content-between">
                                <div id="card-hoteles2" class="card-img col-md-6 mb-3 col-sm-10 col-xs-10">
                                    <img
                                        className="card card-img"
                                        id="card-hoteles2"
                                        src="https://images.unsplash.com/photo-1582301217431-c5f83dfd8ec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                        alt="..." />
                                    <div class="ml-3 card-img-overlay" id="boton">
                                        <h5 class="card-title">Card title</h5>
                                        <botton class="mt-5 btn btn-secondary"> Reservar</botton>
                                    </div>
                                </div>
                                <div id="card-hoteles2" class=" card-img col-md-6 mb-3 col-sm-10 col-xs-10">
                                    <img
                                    id="card-hoteles2"
                                        className="card card-img"
                                        src="https://images.unsplash.com/photo-1582301217431-c5f83dfd8ec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                        alt="..." />
                                    <div class="ml-3 card-img-overlay" id="boton">
                                        <h5 class="card-title">Card title</h5>
                                        <botton class="mt-5 btn btn-secondary"> Reservar</botton>
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* container derecha */}
                        <div className="col-md-4 col-sm-12 ">
                            <div className="card bg-white">
                                <h4 className="mt-2 pl-4 pr-4">Notificaciones</h4>
                                <div className="card mb-2 mr-3 ml-3 mt-3 pl-4 pr-4">
                                    <div id="iconos-notificaciones" className=" mt-2 ml-2 d-flex justify-content-between">
                                        <i class="far fa-envelope"></i>
                                        <p className="mr-2">2-Abr</p>
                                    </div>
                                    <h5 id="nombre-mensaje" className="ml-2">Juan Perez</h5>
                                    <p id="nombre-mensaje" className="ml-2 mt-2 pb-2">It is a long established fact that a reader will</p>
                                </div>

                                <div className="card mb-2 mr-3 ml-3 mt-3 pl-4 pr-4">
                                    <div id="iconos-notificaciones" className=" mt-2 ml-2 d-flex justify-content-between">
                                        <i class="far fa-envelope"></i>
                                        <p className="mr-2">2-Abr</p>
                                    </div>
                                    <h4 id="nombre-mensaje" className="ml-2">Juan Perez</h4>
                                    <p id="nombre-mensaje" className="ml-2 mt-2">It is a long established fact that a reader will</p>
                                </div>

                                <div className="card mb-2 mr-3 ml-3 mt-3 pl-4 pr-4">
                                    <div id="iconos-notificaciones" className=" mt-2 ml-2 d-flex justify-content-between">
                                        <i class="far fa-envelope"></i>
                                        <p className="mr-2">2-Abr</p>
                                    </div>
                                    <h4 id="nombre-mensaje" className="ml-2">Juan Perez</h4>
                                    <p id="nombre-mensaje" className="ml-2 mt-2">It is a long established fact that a reader will</p>
                                </div>

                                <div className="card mb-2 mr-3 ml-3 mt-3 pl-4 pr-4">
                                    <div id="iconos-notificaciones" className=" mt-2 ml-2 d-flex justify-content-between">
                                        <i class="far fa-envelope"></i>
                                        <p className="mr-2">2-Abr</p>
                                    </div>
                                    <h4 id="nombre-mensaje" className="ml-2">Juan Perez</h4>
                                    <p id="nombre-mensaje" className="ml-2 mt-2">It is a long established fact that a reader will</p>
                                </div>

                                <div className="card mb-2 mr-3 ml-3 mt-3 pl-4 pr-4">
                                    <div id="iconos-notificaciones" className=" mt-2 ml-2 d-flex justify-content-between">
                                        <i class="far fa-envelope"></i>
                                        <p className="mr-2">2-Abr</p>
                                    </div>
                                    <h4 id="nombre-mensaje" className="ml-2">Juan Perez</h4>
                                    <p id="nombre-mensaje" className="ml-2 mt-2">It is a long established fact that a reader will</p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Home