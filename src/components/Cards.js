import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards  () {
    return (
        <div className="cards">

            <h1>Check out these EPIC Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon jungle"
                        label="Adventure"
                        path='/services' 
                        />
                            <CardItem
                        src="images/img-2.jpg"
                        text="Travel through the Islands of bali in a private cruise"
                        label="/Luxury"
                        path='/services' 
                        />
                            {/* <CardItem
                        src="images/img-3.jpg"
                        text="Explore the amazing place with your friends"
                        label="Explore"
                        path='/services' 
                        /> */}

                        {/* <CardItem
                        src="images/img-4.jpg"
                        text="Never miss a chance to explore yourself and think about yourself"
                        label="Thinking"
                        path='/services' 
                        /> */}

                        {/* <CardItem
                        src="images/img-5.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon jungle"
                        label="Adventure"
                        path='/services' 
                        /> */}

                    </ul>
                    <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
