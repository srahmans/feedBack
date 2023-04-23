//import { useState } from "react"
import {FaTimes, FaEdit} from 'react-icons/fa'
import PropTypes from "prop-types"
import Card from "./shared/Card"
import FeedbackContext from "../context/FeedbackContext"
import { useContext } from "react"


function FeedbackItem({item}) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
   // const [rating, setRating] = useState(7)
   // const [text, setText] = useState('This is default feedback item')

    return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={()=> deleteFeedback(item.id)} className='close'>
            <FaTimes color='brown'/>
        </button>
        <button className='edit'>
            <FaEdit onClick={() => editFeedback(item)} color='khaki'/>
        </button>
        <div className="text-display">{item.text}</div>
     </Card>
  )
}
FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}
  export default FeedbackItem
