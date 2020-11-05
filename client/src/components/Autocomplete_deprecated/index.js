// import React, { Component, useState } from 'react';
// import { List, ListItem } from "../List";
// import { Col, Row, Container } from "../Grid";
// import axios from "axios";

// class AutoComplete extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             suggetsions: [],
//             author: '',
//             title: '',
//             subject: '',
//             activeIndex: 0
//         };
//         this.getSuggetsions = this.getSuggestions.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//         this.handleKeyDown = this.handleKeyDown.bind(this)
//     }

    

// //Handle Search Function
// getSuggestions(prefix) {
//     const result = Array
//     .from(new Array(10), function(x, i) {
//         return i
//     })
//     .map(function(x) {
//         const mockList =[
//             'A. American',
// 'A. Bertram Chandler',
// 'A. Meredith Walters',
// 'A. Zavarelli',
// 'A.A. Albright',
// 'A.A. Attanasio',
// 'A.A. Dhand',
// 'A.B. Guthrie, Jr.',
// 'A.C. Arthur',
// 'A.C. Baantjer',
// 'A.C. Crispin',
// 'A.C. Gaughen',
// 'A.C.F. Bookens',
// 'A.D. Davies',
// 'A.D. Garrett',
// 'A.D. Scott',
// 'A.E. Howe',
// 'A.E. van Vogt',
// 'A.G. Howard',
// 'A.G. Riddle',
// 'A.J. Aalto',
// 'A.J. Banner',
// 'A.J. Cronin',
// 'A.J. Finn',
// 'A.J. Hartley',
// 'A.J. Kohler',
// 'A.J. Pearce',
// 'A.J. Rivers',
// 'A.J. Scudiere',
// 'A.J. Steiger'
//         ];
// let index = Math.floor(Math.random() * 9);
// return prefix + ' ' + mockList[x] + ' ' + mockList[index]
// });
// const delay = Math.random() * 800 + 200; //delay 200 ~ 1000ms
// return new Promise(function(resolve, reject) {
//     setTimeout(resolve, delay, result)
// });
// } 

// handleChange(e) {
//     const value_1 = e.target.value;
//     const value_2 = e.target.value;
//     const value_3 = e.target.value
//     this.setState({
//         author: value_1,
//         title: value_2,
//         subject: value_3
//     });
//         if(value_1 || value_2 || value_3) {
//             //get suggetsion items here
//             this.getSuggestions(value_1 || value_2 || value_3).then(result => {
//                 if(this.state.author || this.state.title || this.state.subject) {
//                     this.setState({
//                         suggestions: result
//                     })
//                 }
//             });
//         } else {
//         this.setState({
//             suggestions: []
//         })
// }
// }

// handleClick(selectedText) {
//     this.setState({
//         activeIndex: 0,
//         author: selectedText,
//         title: selectedText,
//         subject: selectedText,
//         suggestions: []
//     });
// }

// handleKeyDown(e) {
//     let { activeIndex, suggestions } = this.state;
//     if (e.keyCode === 13) {
//         this.setState({
//             activeIndex: 0,
//             author: suggestions[activeIndex],
//             title: suggestions[activeIndex],
//             subject: suggestions[activeIndex],
//             suggestions: []
//         })
//     } else if (e.keyCode === 38) {
//         if (activeIndex === 0) return;
//         this.setState({
//             activeIndex: activeIndex - 1
//         });
//     }else if (e.keyCode === 40) {
//         if(activeIndex === suggestions.length - 1) return;
//         this.setState({
//             activeIndex: activeIndex + 1
//         });
//     }
// }

// suggestionsSelected(value_1, value_2, value_3) {
//     this.setState({
//         author: value_1,
//         title: value_2,
//         subject: value_3,
//         suggestions: []
//     })
// }

// renderSuggestions() {
//     const { suggestions } = this.state;
//     if (!suggestions) return null;
//     else {
//         const list =
//         <ul>
//             { suggestions.map((item, index) =>
//             <li
//                 className={
//                     index === this.state.activeIndex ? 'active' : ''
//                 }
//                 key={item}
//                 onClick={() => this.handleClick(item)}
//                 > {item} </li>
//             )
//     }
//         </ul>
//         return list;
//     }
// }

// //Add API call
// fetchBooks = async () => {
//     let API_URL = `https://www.googleapis.com/books/v1/volumes`;
//     let key = require("../../utils/API/.env")

//     //Updating the event results to state
//     //Updating the books search results to state
//     const [books, setBooks] = useState({ items: [] });

//     const result = await axios.get(`${API_URL}?q=inauthor:${author}&intitle:${title}&subject:${subject}key=${key}`);
//     console.log(result);
//     setBooks(result.data);
//     // Books result
//     console.log(result.data);
// }

// onSubmitHandler = (e) => {
//     //Prevent the browser form refreshing after form submission
//     e.preventDefault();
//     if( author === "" && title === "" && subject === "")  {
//         alert("Please enter valid search terms")
//     } else {
//     //Call fetchEvents async function
//     fetchBooks();
//     }
// }

// render() {
//     return 
//     (
//         <Container fluid>
//         <Row>
//         <Col size="md-12">
//     <form onSubmit={onSubmitHandler}>

//       <div className='wrapper'>
//         <div className='container col-sm-12 col-lg-6 mt-2'>
//           <div className='search'>
//             <input 
//               className='form-control'
//               type="text" 
//               value={ this.state.author }
//               onChange={ this.handleChange }
//               onKeyDown={ this.handleKeyDown }
//             />
//             <input 
//               className='form-control'
//               type="text" 
//               value={ this.state.title }
//               onChange={ this.handleChange }
//               onKeyDown={ this.handleKeyDown }
//             />
//             <input 
//               className='form-control'
//               type="text" 
//               value={ this.state.subject }
//               onChange={ this.handleChange }
//               onKeyDown={ this.handleKeyDown }
//             />
//             <input type='submit' value='' className='search-btn' />
//           </div>
//           { this.renderSuggestions() }
//         </div>
//       </div>

//       </form><br/>
//       </Col>
//       </Row>


// <Row>
// <Col size="md-12">
// <h1 style={{ textAlign: "center" }}>Book List</h1>

// {books.items.length && books.items.length !== undefined ? (
//     <List>
//         {books.items.map((book, index) => (
//             <ListItem key={index}>
//                 <Container>
//                 <h3 style={{ textAlign: "center" }}>{book.volumeInfo.title}</h3>
//                 <div style={{ alignSelf: "center" }}><img style={{ display: 'flex', justifyContent: 'center' }} alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} /></div>
//                 {/*<a target = "_blank" rel="noreferrer" style={{ display: 'flex', justifyContent: 'center', color: "purple" }} href ={event.url}>{event.url}</a> */}
//                 {book.selfLink ? (<a target = "_blank" rel="noreferrer" style={{ display: 'flex', justifyContent: 'center', color: "purple" }} href ={book.selfLink}>{book.selfLink}</a>) : (<p style={{ textAlign: "center" }}>No link available</p>)}
//                 <br/>
//                 <br/>
//                 <br/>
//                 <br/>
//                 </Container>
//             </ListItem>
//         ))}
//     </List>
// ) : (
//     <h3 style={{textAlign: "center"}}>There are no results to display at this time. Type and submit a valid search value to begin the search.</h3>
// )}

// </Col>
// </Row>
// </Container>
//     )
// };

// }

// export default AutoComplete;