import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"  alt="" />
            </div>

            <div className="home__row">
                <Product id="1" title="Fashion And Youth Men's Cotton Ken Kaneki Unmasked Anime Tokyo Ghoul Hoodie Sweatshirt Jacket (Black, Medium)" price={999} image="https://images-na.ssl-images-amazon.com/images/I/51D9Ha-2YQL._UL1100_.jpg" rating={5} />
                <Product id="2" title="Fashion And Youth Men's Cotton Naruto Kakashi 2 Anime Jacket Sweatshirt (Black, Medium)" price={899} image="https://images-na.ssl-images-amazon.com/images/I/51S1HJ8w%2BNL._UL1100_.jpg" rating={4} />
            </div>

            <div className="home__row">
            <Product id="3" title="Fashion And Youth It's an Anime Things You Wouldn't Understand Navy Blue Hoodie | Anime Sweatshirt Jacket | Mens Hoodies Hoodies for Mens Sweatshirt Navy Blue Color" price={999} image="https://images-na.ssl-images-amazon.com/images/I/51xMMHE5xyL._UL1100_.jpg" rating={5} />
            <Product id="4" title="Fashion And Youth Naruto Nine Tails | Naruto Shippuden Black Cotton Hoodie | Anime Sweatshirt Jacket | Mens Hoodies Hoodies for Mens Sweatshirt Black Color" price={999} image="https://images-na.ssl-images-amazon.com/images/I/51qVHabawyL._UL1100_.jpg" rating={5} />
            <Product id="5" title="Fashion N Life One Punch Man Anime Premium Cotton Black Hoodie | Sweatshirt Jacket (Medium, Blue)" price={899} image="https://images-na.ssl-images-amazon.com/images/I/610VnmFJtdL._UL1500_.jpg" rating={5} />
            </div>

            <div className="home__row">
            <Product id="6" title="Fashion And Youth Men's Cotton Sweatshirt Jacket (Black, Medium)" price={799} image="https://images-na.ssl-images-amazon.com/images/I/51CATW-c0BL._UL1100_.jpg" rating={5} />
            <Product id="7" title="Fashion And Youth L Face Navy Blue Anime Hoodie | Light Yagami Hoodie Sweatshirt | Anime Jacket Sweatshirt | Mens Hoodies Hoodies for Mens Sweatshirt Navy Blue Color" price={999} image="https://images-na.ssl-images-amazon.com/images/I/51eM44SIiWL._UL1100_.jpg" rating={5} />
            </div>
        </div>
    )
}

export default Home
