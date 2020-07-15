import React from "react"

const Dashboard = props =>{
    return (
        <div className=" col-md-12">
        <div id="dashboard" className=" mb-4 card">
            <div className="card-body">
                <div className="mt-4 mb-4 cardSupIzq d-flex justify-content-between">
                    <h4>Dashboard</h4>
                    <div className="iconos">
                        <a className="" href="/buscar">
                            <i class="fas fa-search"></i>
                        </a>
                        <a href="/notificaciones">
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
    )
}

export default Dashboard