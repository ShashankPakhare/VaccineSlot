import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nevbar = () => {

    return (
        <>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Vaccince Slot</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Corona Cases</a>
      </li>
      
     
    </ul>
  </div>
</nav>
        </>
    )
}
