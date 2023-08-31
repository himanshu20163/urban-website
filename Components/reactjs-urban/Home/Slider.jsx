import React from 'react'
import banner from '../banner-urban.png'

const Slider = () => {
  return (
    <div className='slider-container'>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 d-flex justify-content-center align-items-start flex-column">
                  <h2 className=''>Leading MEP & Facility management company in Dubai</h2>
                  <p>Urban Science is always ready to accept your challenges
                    <br>
                    </br>
                  </p>
                  <span>
                  <button class="btn btn-outline-success enquiry-btn"  type="submit" >Search</button>
                  <button class="btn btn-outline "  type="submit" ><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path></svg>Watch video</button>
                  </span>
                 
                </div>
                <div className="col-lg-7 ">
                  <img src={banner} width="100%"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider