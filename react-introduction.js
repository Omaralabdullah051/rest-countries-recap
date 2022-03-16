/*
//What is React?
React is a javascript library for building user interfaces.

//How does React works?
Instead of manipulating the browser's DOM directly,React creats a virtual DOM in memory,where it does all the necessary manipulating,before making the changes in the browser DOM.


//What's the benefit of using react library?
When we dynamically adds or removes data via js,each an every time a new DOM is created for the same page.This repeated creation of DOM makes unnecessary memory wastage and reduces the performance of the application.But React is not directly operating on the browser's DOM immediately.It creates a virtual DOM in memory and then operates on it.After the virtual dom has been updated,React determines what changes made to the actual browser's DOM.React only changes what needs to be changed.


//Rendering elements:
//firstly we need to create react element.and then need to render the element into the Virtual DOM.After manipulating on virtual DOM,finally react changes the actual browser's DOM.


//JSX:
javascript XML.Allows us to write HTML in React and converts HTML tags into React elements.It is the most easier way to create React elements.It allows us to create React elements and place them in the DOM without any createElements() and/or appendChild() methods.

//Component in React:
React component is the building block of a react application.It represents a small chunk of user interface in a web page.The primary job of react component is to render its user interface and update it whenever its internal state is changed.In addition to rendering the UI,it manages the events belongs to its user interface.
1.initial rendering of the user interface.
2.Management and handling of events.
3.Updating the user interface whenever the internal state is changed.



*/