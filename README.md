# ui-ux-challenge
Your task is to create an interactive, browser-based search bar for exploring events from Ticketmaster’s API. The endpoints you will be using will be /discovery/v2/events. This search bar will accept user inputs (texts, numbers, etc), and return the result in a search list.

BUILD ISSUES

During the course of ths challenge I encountered a CORS error that applied to the ticketmaster API.

It seemed as though the only solution which worked for this error involved building and deploying a cors-anywhere app on heroku which acts as a proxy. So you send the request through this proxy url which sends the request with the correct header configuration.

I tried testing in POstman and getting the correct headers but this did not work.

Other types of easier solutions did not work.

As a result I just switched to the Google Books API.

CURRENT ISSUE

After getting the autocomplete to work in the searchbar, the google books API now seems to be deafulting the search. I am not sure why but this is the next item to be fixed.