import React from 'react'
import one from './image/one.jpg'
import Menu from './Home/Menu'

const Project = () => {
  return (
    <div >
      <Menu />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* <img src={one}></img> */}
            <h2>Projects</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project