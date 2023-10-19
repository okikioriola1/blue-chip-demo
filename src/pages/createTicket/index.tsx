import * as React from 'react'
import Navbar from '../../components/Navbar/Index'
import ArrowLeftIcon from '../../assets/images/arrow-left.svg'
import './createticket.scss'
import { Link } from 'react-router-dom'
import AddIcon from '../../assets/images/plus-circle.svg'
import PlaceholderImg from '../../assets/images/placeholder.svg'
import CarouselLeft from '../../assets/images/carousel-left.svg'
import CarouselRight from '../../assets/images/carousel-right.svg'


const CreateTicket = () => {
  return (
    <div className='create-ticket'>
    <Navbar/>
    <div className='create-header'>
            <Link to="/"><div className='back-btn'>
               <img src={ArrowLeftIcon} alt="left-arrow"/>
            </div></Link>
            <div className='intro-text'>
                <h2>Create Ticket</h2>
            </div>

        </div>
        <div className='create-ticket-main'>
            <div className='create-ticket-main__wrapper'>
                <form className='mainform-section'>
                    <div className='left'>
                    <div className='ticket-header'>
                            <h2>Ticket Info Cont.</h2>
                            <hr />
                        </div>
                    <div className='form-inputs'>
                        <div className='inputs'>
                            <label>Title</label>
                            <input type="text" placeholder="Ticket Title"/>
                        </div>
                        <div className='inputs'>
                            <label>Description</label>
                            <textarea placeholder="Describe the issue here"></textarea>
                        </div>

                    </div>
                    <div className='ticket-header'>
                            <h2>Attachments</h2>
                            <hr />
                        </div>
                        <div className='attachments'>
                        <div className='add-attachment'>
                            <img src={AddIcon} alt="add"/>
                            <h2>Add Attachment</h2>

                        </div>
                        <div className='attachment-placeholder'>
                            <div className='placeholder'><img src={PlaceholderImg} alt="placeholder"/></div>
                            <div className='placeholder'><img src={PlaceholderImg} alt="placeholder"/></div>
                            <div className='placeholder'><img src={PlaceholderImg} alt="placeholder"/></div>
                            <div className='placeholder'><img src={PlaceholderImg} alt="placeholder"/></div>
                            <div className='placeholder'><img src={PlaceholderImg} alt="placeholder"/></div>


                        </div>
                        <div className='carousel-controls'>
                            <img src={CarouselLeft} alt="left"/>
                            <div className='pointers'>
                                <div className="point"></div>
                                <div className="point"></div>
                                <div className="point"></div>
                                <div className="point"></div>
                            </div>
                            <img src={CarouselRight} alt="right"/>

                        </div>
                        </div>

                    </div>
                    <div className='right'>
                        <div className='ticket-header'>
                            <h2>Ticket Info Cont.</h2>
                            <hr />
                        </div>
                        <div className='form-inputs'>
                            <div className='inputs'>
                            <label>Project</label>
                                <select id="dropdown" placeholder='Select' className="custom-dropdown">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                    <option value="option4">Option 4</option>
                                </select>
                            </div>
                            <div className='inputs'>
                            <label>Category</label>
                                <select id="dropdown" placeholder='Select' className="custom-dropdown">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                    <option value="option4">Option 4</option>
                                </select>
                            </div>
                            <div className='inputs'>
                            <label>Urgency</label>
                                <select id="dropdown" placeholder='Select' className="custom-dropdown">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                    <option value="option4">Option 4</option>
                                </select>
                            </div>
                            <div className='inputs'>
                            <label>Impact</label>
                                <select id="dropdown" placeholder='Select' className="custom-dropdown">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                    <option value="option4">Option 4</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </form>
                <div className='ticket-btn'>
                    <div className='ticket-btn__wrapper'>
                    <button className='cancel'>Cancel</button>
                    <button className='create'>Create Ticket</button>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default CreateTicket