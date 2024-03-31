import React ,{useState} from 'react';
import '../Styles/dropdown.css'
import '../Styles/Sidebar.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Eventform from '../forms/Eventform.jsx';

const Sidebar = ({...props }) => {
  const [showEvents, setShowEvents] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showCondtions, setShowCondtions] = useState(false);

  const handleShowEvents = () => setShowEvents(true);
  const handleCloseEvents = () => setShowEvents(false);

  const handleShowActions = () => setShowActions(true);
  const handleCloseActions = () => setShowActions(false);

  const handleShowConditions = () => setShowCondtions(true);
  const handleCloseConditions = () => setShowCondtions(false);

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  

  // const handleShow = (option) => {
  //   setSelectedOption(option);
  //   setShow(true);
  // };
  // const handleClose = () =>{
  //   setShow(false);
  // };
  
  
  const [startDate, setStartDate] = useState(new Date());

  const ScheduledTime = () => (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect dateFormat="Pp" />
  );

  const keys = ['event', 'action', 'True', 'False', 'condition', 'Deny', 'Terminate', 'Approve', 'ScheduledTime' ];
const nodeType = keys.reduce((obj, key) => {
  obj[key] = 'default';
  return obj;
}, {});

  return (<>
  <div className="Sidebar">

    <div className="sidebarbuttons">
    <button onClick={handleShowEvents}>
      Events
    </button>
    <button onClick={handleShowActions}> Actions </button>
    <button onClick={handleShowConditions}> Conditions </button>
    </div>
      {/* Events offcanvas */}
      <Offcanvas className="offcanvas" show={showEvents} onHide={handleCloseEvents} backdrop={false} placement="end" {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Events</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <Eventform/>
        </div>
        </Offcanvas.Body>
      </Offcanvas>

    {/* action offcanvas*/}
    <Offcanvas className="offcanvas" show={showActions} onHide={handleCloseActions} backdrop={false} placement="end" {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Actions</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          action
        </Offcanvas.Body>
      </Offcanvas>

    {/* condition offcanvas */}
    <Offcanvas className="offcanvas" show={showCondtions} onHide={handleCloseConditions} backdrop={false} placement="end" {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Condtions</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        true
        </Offcanvas.Body>
      </Offcanvas>



    {/* output dropdown */}
    </div>
    </>
  )

}
export default Sidebar;