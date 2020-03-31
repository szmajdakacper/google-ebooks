import React from 'react'

export default function Search(props) {
    return (
        <div className="row bg-light p-0 shadow-sm">
            <div className="col-4">
                <h2>Search EBooks!</h2>
            </div>
            <div className="col-4">
                <form className="form-group my-0" onSubmit={props.submittedHandler}>
                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md-7">
                            <div className="form-group mb-0">
                                <input name="q" value={props.q} onChange={props.changedHandler} type="search" className="form-control" id="search" placeholder="Search" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5 mb-0">
                            <button type="submit" className="btn btn-outline-secondary w-100">Search</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-4">
            </div>
            <div className="col-12">
                <div className="form-check form-check-group">
                    <input name="freeEbooks" onChange={props.checkboxHandler} className="form-check-input" type="checkbox" />
                    <label className="form-check-label" htmlFor="groupCheckbox2">Only Free Ebooks</label>
                </div>
            </div>
        </div>
    )
}
