import React, { useEffect } from "react"
import data from "./data.js"

const Modal = props => {

    useEffect(() => {
        fetch('./db.json')
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
    }, [])

    return (

        <>
            {
                data.map((hotel1, i) => {
                    console.log(hotel1)
                    return (
                        <div class="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h3 class="modal-title"
                                            id="exampleModalLabel">
                                            {hotel1.hotel_name}</h3>
                                        <button
                                            type="button"
                                            class="close"
                                            data-dismiss="modal"
                                            aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p><strong>Ubicación</strong> {hotel1.hotel_city}</p>
                                        <img
                                            id="img-modal"
                                            src={hotel1.imagen}
                                            alt="..." />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })

            }
        </>
    )
}

export default Modal