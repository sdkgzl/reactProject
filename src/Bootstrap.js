import { Button,Tab,Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Bootstrap(){
return(
    <div>
        <h3>Bootstrap Komponentleri</h3>
        <Button variant='success'>Button</Button>
        <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <div>Home</div>
      </Tab>
      <Tab eventKey="profile" title="Profile">
      <div>Profile</div>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
      <div>Contact</div>
      </Tab>
    </Tabs>
    </div>
)
}

export default Bootstrap;