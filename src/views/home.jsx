import React from "react"

const Home = props => {
    return (
        <>
            <div className="">
                <div class="sidenav">
                    <a id="sidebar-home" href="/">
                        <i class="fas fa-home"></i>
                    </a>
                    <a id="sidebar-calendario" href="/calendario">
                        <i class="fas fa-calendar-alt"></i>
                    </a>
                    <a id="sidebar-usuarios" href="#">
                        <i class="far fa-user"></i>
                    </a>
                    <a id="sidebar-informes" href="#">
                        <i class="far fa-file"></i>
                    </a>
                    <a id="sidebar-graficos" href="#">
                        <i class="fas fa-chart-bar"></i>
                    </a>
                </div>

                <div id="home">
                    <div className="card-group">
                        <div className="col-md-1"></div>
                        <div id="dashboard" className="card col-md-10">
                            <div className="card-body">
                                    <h4 className="text-white">a</h4>
                                <div className="cardSupIzq d-flex justify-content-between">
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
                                    <h4 className="text-white">a</h4>


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