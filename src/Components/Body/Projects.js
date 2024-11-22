import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import YummyRecipe from "../../Assets/yummy_recipe.png";
import AmazonClone from "../../Assets/amazonClone.png";
import IloveMovies from "../../Assets/iloveMovies.png";
import StockMarket from "../../Assets/StockMarket.png";
import "../../Styles/Projects.scss";

const displayedItems = [
  { id: 1, title: "Yummy Recipe MERN App", image: YummyRecipe, link : 'https://yummy-recipe-param.netlify.app/', desription : "Yummy Recipe MERN App is a web application for food enthusiasts to explore recipes and share their own recipes. The app includes user login and registration by Jsonwebtoken and Bcrypt for secure authentication. Users can view food recipes from a Mongo DB Altas database. Users can add their own recipes by providing recipe information and an image. The app allows users to search for recipes based on keywords or ingredients" },
  { id: 2, title: "Amazon Clone App",  image: AmazonClone, link : 'https://amazoncloneparam.netlify.app/', desription : "The Amazon Clone App is a web-based application that replicates the functionality of the popular e-commerce website, Amazon. The app allows users to register and create an account, login to their account, browse through a list of products, add products to their bucket, search products from the list, and remove products from their bucket. Users can also check out their bucket, make payments for their orders, and view their past orders." },
  { id: 3, title: "I Love Movies App", image: IloveMovies, link : 'https://ilovemoviesparam.netlify.app/', desription : "I Love Movies app allows users to browse a list of movies and TV shows by using an external API. Each movie and TV show poster can be clicked on, which then displays additional details about the movie or TV show, including cast member posters and the official trailer. Users can also search for a specific movie or TV show by making use of the endpoint API." },
  { id: 4, title: "Stock Market Dashboard", image: StockMarket, link : 'https://stockmarketparam.netlify.app/', desription : "The user enters the stock name and time frame and then gets specific data from API. The user views his watchlist in these dashboards. The user deletes specific stock in his watchlist." }
];

function Projects() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="project-list-container">
      <ul className="card-list" >
        <AnimatePresence>
          {displayedItems.map((card) => (
            <motion.li
              key={card.id}
              className={`card ${card.id % 2 === 0 ? 'small-card' : 'large-card'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCard(card.id)}
            >
              <div className="card-content-container">
                <motion.div
                  className="card-content"
                  layoutId={`card-container-${card.id}`}
                >
                  <motion.div
                    className="card-image-container"
                    layoutId={`card-image-container-${card.id}`}
                  >
                    <img className="card-image" src={card.image} alt={card.title} />
                  </motion.div>
                  <motion.div
                    className="title-container"
                    layoutId={`title-container-${card.id}`}
                  >
                    <h2 className="title">{card.title}</h2> 
                    <p className="hosted_link">
                      <a href={card.link} target="_blank" rel="noopener noreferrer">
                        Demo
                      </a>
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

 
      {selectedCard && (
        <motion.div
          className="full-screen-card"
          key="fullscreen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setSelectedCard(null)}
        >
          <motion.div className="full-screen-content flip-card" layoutId={`card-container-${selectedCard}`}>
            <motion.div className="flip-card-inner">
              <motion.div className="flip-card-front" layoutId={`card-image-container-${selectedCard}`}>
                <img
                  className="full-screen-image"
                  src={displayedItems.find((item) => item.id === selectedCard).image}
                  alt="full-screen"
                />
              </motion.div>
              <motion.div className="flip-card-back">
                <h2>{displayedItems.find((item) => item.id === selectedCard).title}</h2>
                <p>{displayedItems.find((item) => item.id === selectedCard).desription}</p>
                <p className="hosted_link_project">{displayedItems.find((item) => item.id === selectedCard).link}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Projects;