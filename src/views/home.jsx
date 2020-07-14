import React from "react"

const Home = props => {
    return (
        <>


            <div id="home">
                <div className="container">

                    {/* container superior dashboard */}
                    <div className="">
                        <div id="dashboard" className=" mb-4 card col-md-12">
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

                    <div className="d-flex justify-content-between">
                        {/* container izquierda */}
                        <div id="card-usuario" className="col-md-8">
                            <div className="mt-4 card-body">
                                <h4 className="mt-3">Bienvenido</h4>
                                <h3 className="mt-4">David Anderson</h3>
                                <hr />
                                <h5 className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id et nihil dolores porro a in, eaque laudantium temporibus fuga molestias.</h5>
                            </div>
                        </div>

                        {/* container derecha */}
                        <div className="col-md-4 ">
                            <div className="card bg-white">
                                <h3 className="mt-2 pl-4 pr-4">Notificaciones</h3>
                                <div className="card mb-4 mr-3 ml-3 mt-3 pl-4 pr-4">
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

                    <div className="row">
                        <div className="row">
                            <div className="card-group">
                                <div className="col-md-1 mr-4"></div> {/* Margen */}

                                <div className=" card  ml-4 col-md-2  ">

                                    <div className="card mb-4">
                                        <div id="iconos-notificaciones" className=" mt-2 ml-2 d-flex justify-content-between">
                                            <i class="far fa-envelope"></i>
                                            <p className="mr-2">2-Abr</p>
                                        </div>
                                        <h4 id="nombre-mensaje" className="ml-2">Juan Perez</h4>
                                        <p id="nombre-mensaje" className="ml-2 mt-2">It is a long established fact that a reader will</p>
                                    </div>
                                    <div className="card mb-4">
                                        <div id="iconos-notificaciones" className=" mt-2 ml-2 d-flex justify-content-between">
                                            <i class="far fa-envelope"></i>
                                            <p className="mr-2">2-Abr</p>
                                        </div>
                                        <h4 id="nombre-mensaje" className="ml-2">Juan Perez</h4>
                                        <p id="nombre-mensaje" className="ml-2 mt-2">It is a long established fact that a reader will</p>
                                    </div>
                                    <div className="card mb-4">
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
                    <h1>Home</h1>
                </div>
            </div>
        </>
    )
}

export default Home