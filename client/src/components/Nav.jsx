
import React from 'react'
import '../App.css'

const Nav = () => {
    return (
        <div className=' w-100 d-flex align-items-end justify-content-between padded bg-light'>
            {/* <div className='row w-100'> */}
                <h1 className='d-flex'>Dealer Pro</h1>
                {/* <div className=''> */}
                    <ul className='nav d-flex'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>About</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Contact</a>
                        </li>
                    </ul>
                {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default Nav
