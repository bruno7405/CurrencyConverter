import ListGroup from "./components/ListGroup";
import Message from "./Message";
import CountryDropdown from "./components/CountryDropdown";

function App() {
  return (
    <>
      <Message></Message>
      <div>
        <ListGroup />
      </div>
      <CountryDropdown />
      <CountryDropdown />
    </>
  );
}

export default App;
