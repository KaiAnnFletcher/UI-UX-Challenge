import axios from "axios";
import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input,  SubmitBtn } from "../components/SearchForm";


//Search input state using useState Hooks
//Let's Add the local state for search input using useState hooks

const Search = () => {

    const [searchTerm, setSearchTerm ] = useState("");
    const onInputChange = (e) => {
        setSearchTerm(e.target.value)
    }

    let API_URL = `https://app.ticketmaster.com/discovery/v2/events.json?`;
    let key = `tHrmVAdC2bt5Sn5SJzCYlSMECvBjMt06`;


//Updating the event results to state
const [events, setEvents] = useState({ events: [] });

const fetchEvents = async () => {
    //Ajax call to API using Axios
    const result = await axios.get(`${API_URL}keyword=${searchTerm}&countryCode=US&dmaId=324&apikey=${key}`);
    console.log(result)
    setEvents(result.data._embedded);
    //Events result
    console.log(result.data._embedded);
}


const onSubmitHandler = (e) => {
    //Prevent the browser form refreshing after form submission
    e.preventDefault();
    //Call fetchEvents async function
    fetchEvents();
}

//Returning the UI for the events search results

return (

    <Container fluid>
        <Row>
          <Col size="md-12">

            <Jumbotron>

             <h1>Ticket Master API Search!</h1>   

            </Jumbotron>
            <br/>
            <br/>
            <br/>
            <br/>
            <form onSubmit={onSubmitHandler}>
                <Input
                type="search"
                name="events"
                placeholder="Type Search Value Here"
                value={searchTerm}
                onChange={onInputChange}
                />
            <SubmitBtn type="submit">Submit!</SubmitBtn>
            </form>

          </Col>
          </Row>


          <Row>
          <Col size ="md-12">

            <h1 style={{ textAlign: "center" }}>Event List</h1>

            {events.events ? (
                <List>
                    {events.events.map((event, index) => (
                        <ListItem key={index}>
                            <h3>{event.name}</h3><br/>
                            <h5>{event.description}</h5><br/>
                            <a target href ={event.url}>{event.url}</a>
                        </ListItem>
                    ))}
                </List>
            ) : (
                <h3 style={{textAlign: "center"}}>There are no results to display at this time. Type and submit a valid search value to begin the search.</h3>
            )}
          </Col>
          </Row>
          </Container>
)
}

Search.defaultProps = {
    events: []
};

export default Search;