import React from "react"

const Sidebar = props => {
    return (

        <div class="sidenav">
            <a id="sidebar-home" href="/">
                <i class="fas fa-home"></i>
            </a>
            <a id="sidebar-calendario" href="#">
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
    )
}

export default Sidebar