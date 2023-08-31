import React from 'react'

const Photosearch = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className="col-lg-8">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">unsplash</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
        <div className="col-lg-4 p-2">
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        <div className='my-masonry-grid'>
          <div className="my-masonry-grid_column">
            <div className="col">
            <div class="bg-dark text-white mb-4 card" style={{cursor: "pointer"}}>
              <img class="card-img" src="https://images.unsplash.com/photo-1682685797898-6d7587974771?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wzMzYyNjV8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5Mjg2NDc4Nnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=200" alt="Card image" />
              <div class="card-img-overlay">
                <div class="card-title h5">NEOM</div>
                <p class="card-text">Amongst expansive red sands and spectacular sandstone rock formations, Hisma Desert – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.</p>
                <p class="card-text">2023-04-28T12:46:16Z</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photosearch