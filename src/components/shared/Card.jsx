import PropTypes from "prop-types"
function Card({children, reverse}) {
  return (
    //Conditional Class Example
    //<div className={`card ${reverse && 'reverse'}`}>{children}</div>
   // Conditional Style Example
     <div className="card" style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : 'skyblue',
        color: reverse ?  'white' : 'black' 
     }}>
      {children}
     </div>
    )
}
Card.defaultProps = {
    reverse: true,
}
Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool.isRequired,
}

export default Card
