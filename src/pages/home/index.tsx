import * as React from 'react'
import Navbar from '../../components/Navbar/index'
import Table from '../../components/Table/index'
import './home.scss'
import SearchIcon from '../../assets/images/search-icon.svg'
import FilterIcon from '../../assets/images/filter-icon.svg'
import SortIcon from '../../assets/images/sort-icon.svg'
import { Link } from 'react-router-dom'
import { Data } from '../../data'
import { Data2 } from '../../data'
import { Columns } from '../../data'




const Home = () => {

  return (

    <div className='home'>
        <Navbar/>
        <div className='home-header'>
            <div className='welcome-text'>
                <h2>Good Day [User],</h2>
            </div>
            <div className='raise-btn'>
               <Link to='/createTicket'> <button>Raise Ticket</button></Link>
            </div>
        </div>
        <div className='recent-tickets'>
            <div className='recent-tickets-header'>
                <h2>Recent Tickets</h2>
            </div>
            <Table columns={Columns} data={Data}/>
        </div>
        <div className='ticket-history-section'>
        <div className='history-text'>
                <h2>Ticket History</h2>
            </div>
            <div className='inputs'>
                <div className='left'>
                    <div className='filter'>
                        <div className='filter-wrapper'>
                            <img src={FilterIcon} alt="filter"/>
                            <h3>Filter</h3>
                        </div>
                    </div>
                    <div className='sort'>
                    <div className='sort-wrapper'>
                            <img src={SortIcon} alt="sort"/>
                            <h3>Sort</h3>
                        </div>
                    </div>
                    <div className='search'>
                    <span className='search-icon'><img src={SearchIcon} alt="search"/></span>
                <input className='search-input' type="text" placeholder='Search'/>
                    </div>
                </div>
                <div className='right'>
                    <div className='filter-field'>
                        <div className='filter-field-wrapper'>
                            
                                <p>Filter</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='history-table'>
            <Table columns={Columns} data={Data2}/>
            </div>

        </div>
    </div>
  )
}

export default Home