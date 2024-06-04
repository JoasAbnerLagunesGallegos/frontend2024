import React from "react"

const ListModal = ({ countries }) => {


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
                                        countries.map((countryData, index) => (
                                            <li key={index}>
                                                Country name: {countryData.name}
                                                {" "}/ Code: {countryData.code}
                                            </li>
                                        ))
                                    }   


                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="modal-footer">

                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            data-bs-dismiss="modal"
                        >Close</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ListModal