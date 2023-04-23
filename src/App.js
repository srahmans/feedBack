//import { useState } from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
//import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from "./context/FeedbackContext"
import AboutIconLink from "./components/AboutIconLink"
import Post from "./components/Post"
import { Link } from "react-router-dom"
//import Card from "./components/shared/Card"

function App(){
  
   return  (
      <FeedbackProvider>
    <Router>
    <Header/>
    
    <div className="container">
    <Routes>
        <Route exact path="/" element={
                <>
               <FeedbackForm/>
               <FeedbackStats/>
               <FeedbackList/>
               <AboutIconLink/>
               <Link to={'/post'}> <p>Post Page</p> </Link>
               </>
            }/>
            
        <Route path="/about" element={<AboutPage />} />
        <Route path="/post/*" element={<Post />} />
      </Routes>
        
    </div>
   
    </Router>
    </FeedbackProvider>
           )
}

export default App