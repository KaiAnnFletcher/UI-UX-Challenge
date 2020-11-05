import axios from "axios";
import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { SubmitBtn } from "../components/SearchForm";
import AutocompleteAuthor from '../components/Autocomplete_author';
import AutocompleteTitle from '../components/Autocomplete_title';
import AutocompleteSubject from '../components/Autocomplete_subject';


//Search input state using useState Hooks
//Let's Add the local state for search input using useState hooks

const Search = () => {

    const [ author, setAuthor ] = useState("");
    const onInputChange_1 = (e) => {
        setAuthor(e.target.value)
    }

    const [title, setTitle] = useState("");
    const onInputChange_2 = (e) => {
        setTitle(e.target.value)
    }

    const [subject, setSubject] = useState("");
    const onInputChange_3 = (e) => {
        setSubject(e.target.value)
    }
    
    

    let API_URL = `https://www.googleapis.com/books/v1/volumes`;
    let API_KEY = require("../utils/api/.env")

//Updating the event results to state
//Updating the books search results to state
const [books, setBooks] = useState({ items: [] });

const fetchBooks = async () => {
    //Ajax call to API using Axios
    const result = await axios.get(`${API_URL}?q=inauthor:${author}&intitle:${title}&subject:${subject}key=${API_KEY}`);
    console.log(result);
    setBooks(result.data);
    // Books result
    console.log(result.data);
}

const onSubmitHandler = (e) => {
    //Prevent the browser form refreshing after form submission
    e.preventDefault();
    fetchBooks();
    }



//Returning the UI for the events search results

return (

    <Container fluid>
        <Row>
          <Col size="md-12">

            <Jumbotron>
            <h1>Book Search With Google!</h1>   
            <p>Type any Search Value to Begin Your Search</p>
            </Jumbotron>
            <br/>
            <br/>
            <br/>
            <br/>
            <form onSubmit={ onSubmitHandler }>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <AutocompleteAuthor
                onChange={onInputChange_1}
                value= {author}
                suggestions={['White', 'Black', 'Green', 'Blue', 'Yellow', 'Red']}
                />&nbsp; &nbsp; &nbsp; &nbsp;

                <AutocompleteTitle
                onChange={onInputChange_2}
                value= {title}
                suggestions={['White', 'Black', 'Green', 'Blue', 'Yellow', 'Red']}
                />&nbsp; &nbsp; &nbsp; &nbsp;

                <AutocompleteSubject
                onChange={onInputChange_3}
                value= {subject}
                suggestions={['White', 'Black', 'Green', 'Blue', 'Yellow', 'Red']}
                />&nbsp; &nbsp; &nbsp; &nbsp;
             
            <SubmitBtn type="submit">Submit!</SubmitBtn>
            </div>
            </form>

          </Col>
          </Row><br/><br/>


          <Row>
          <Col size ="md-12">

          <h1 style={{ textAlign: "center" }}>Book List</h1>

{books.items.length && books.items.length !== undefined ? (
    <List>
        {books.items.map((book, index) => (
            <ListItem key={index}>
                <Container>
                <h3 style={{ textAlign: "center" }}>{book.volumeInfo.title}</h3>
                <div style={{ alignSelf: "center" }}><img style={{ display: 'flex', justifyContent: 'center' }} alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} /></div>
                {/*<a target = "_blank" rel="noreferrer" style={{ display: 'flex', justifyContent: 'center', color: "purple" }} href ={event.url}>{event.url}</a> */}
                {book.selfLink ? (<a target = "_blank" rel="noreferrer" style={{ display: 'flex', justifyContent: 'center', color: "purple" }} href ={book.selfLink}>{book.selfLink}</a>) : (<p style={{ textAlign: "center" }}>No link available</p>)}
                <br/>
                <br/>
                <br/>
                <br/>
                </Container>
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
    books: []
};

export default Search;


