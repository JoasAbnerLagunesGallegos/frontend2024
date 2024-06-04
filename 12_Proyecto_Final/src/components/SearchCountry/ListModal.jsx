import React, { useState } from "react"

const ListModal = ({ countries }) => {

    const elementosPorPagina = 10;
    const [paginaActual, setPaginaActual] = useState(1);

    const elementosPaginados = countries.slice(
        (paginaActual - 1) * elementosPorPagina,
        paginaActual * elementosPorPagina
    )

    const handlePrev = () => {
        if (paginaActual > 1) {
            setPaginaActual(paginaActual - 1)
        }
    }

    const handleNext = () => {
        if (paginaActual < 26) {
            setPaginaActual(paginaActual + 1)
        }  
    }

    return (

        <div className="modal fade" id="listModal">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" id="ListModalLabel">
                            Available country codes
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-body container">
                            <div className="row text-start">
                                <div className="col">

                                    {

                                        elementosPaginados.map((countryData, index) => (
                                            <div key={index}>
                                                <li key={index}>
                                                    <img
                                                        src={`${countryData.flag}`} />
                                                    {" "} {countryData.name}
                                                    {" "}/ Code: {countryData.code}
                                                </li>
                                            </div>
                                        ))

                                    }


                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="modal-footer">

                        <p> Current Page: {paginaActual} of 26</p>

                        <button
                        type="button"
                        className="btn btn-outline-danger" 
                        onClick={handlePrev}
                        > <i class="bi bi-arrow-bar-left"></i>
                        Previous</button>

                        <button
                        type="button"
                        className="btn btn-outline-success" 
                        onClick={handleNext}
                        >Next
                        <i class="bi bi-arrow-bar-right"></i></button>

                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            data-bs-dismiss="modal"
                        >Close
                        <i class="bi bi-x-lg"></i></button>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default ListModal