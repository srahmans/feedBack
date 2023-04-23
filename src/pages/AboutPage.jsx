import Card from "../components/shared/Card"

import { Link } from "react-router-dom"
function AboutPage() {
  return (
    <Card>
      <h4>This is my first use of route component from react-route-dom. Calling this 'ABOUT PAGE'</h4>
      <p>You can get back to previous page by clicking below</p>
       <br></br>
       <p>
        <Link to={"/"}>Go Back</Link>
      </p>
    </Card>
  )
}
  export default AboutPage
