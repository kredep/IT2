@import url('https://fonts.googleapis.com/css?family=Montserrat:700');
* {
    box-sizing: border-box;
}

body {
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  text-align: center;
  margin: 0;
  color: white;
  border: 2px solid white;
}

button, input[type='text'] {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
}

/* Style the header */
.header {
  grid-area: header;
  background-color: rgb(45, 13, 86);
  padding: 30px;
  text-align: center;
  font-size: 35px;
}

.middle {
  grid-area: middle;
}

/* The grid container */
.grid-container {
  display: grid;
  grid-template-areas:
  'header header header'
  'left middle right'
  'footer footer footer';
  /* grid-column-gap: 10px; - if you want gap between the columns */
}
.grid-container2 {
    display: grid;
    grid-template-columns: auto auto auto;
}

.left,
.middle,
.right {
  padding: 10px;
  height: auto;
}

/* Style the left column */
.left {
  grid-area: left;
}

/* Style the right column */
.right {
  grid-area: right;
}

/* Style the footer */
.footer {
  grid-area: footer;
  background-color: rgb(45, 13, 86);
  padding: 10px;
  text-align: center;
}
.grid-item {
    border: 2px solid white;
    background-color: rgb(45, 13, 86);
    padding: 30px;
    text-align: center;
    font-size: 35px;
}

.skjema {
  text-align: left;
  margin-left: 22%;
}

.bensin-pris {
  padding: 20px;
  background-color: darkgreen;
  border: 2px dashed white;
  color: white;
  text-shadow: 0px 2px rgb(50,50,50);
  font-size: 2em;
  font-weight: bold;
}
.diesel-pris {
  padding: 20px;
  background-color: darkblue;
  border: 2px dashed white;
  color: white;
  text-shadow: 0px 2px rgb(50,50,50);
  font-size: 2em;
  font-weight: bold;
}
.title {
  font-size: 1.4em;
  color: white;
  text-shadow: 0px 2px rgb(50,50,50);
}

.btn2 {
  border: 2px dashed white;
  background-color: darkred;
  padding: 10px;
  color: white;
  font-size: 1.5em;
  width: 140px;
  margin: 0;
}
.btn2:hover {
  background-color: red;
}

/* CUSTOM CHECKBOX */
.check-container {
    display: block;
    position: relative;
    padding-left: 70px;
    padding-top: 5px;
    margin-bottom: 12px;
    margin-left: 20%;
    width: 30%;
    float: left;
    clear: left;
    cursor: pointer;
    font-size: 22px;
    text-align: left;
    font-size: 1.7em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.check-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    background-color: rgb(0, 50, 50);
    border-radius: 20px;
}
.check-container:hover input ~ .checkmark, input[type='checkbox']:focus ~ .checkmark {
    background-color: red;
}
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}
.check-container input:checked ~ .checkmark:after {
    display: block;
}
.check-container .checkmark:after {
    left: 14px;
    top: -9px;
    width: 6px;
    height: 30px;
    border: solid white;
    border-width: 0 6px 6px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

/* CHECKBOX */

.textbox {
  border: 2px dashed white;
  background-color: blue;
  font-size: 1.5em;
  padding: 10px;
  text-align: center;
  color: white;
}
.textbox:focus {
  outline: 0;
}

/* CUSTOM CHECKBOX */

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
  .grid-container  {
    grid-template-areas:
    'header header'
    'left left'
    'middle middle'
    'right right'
    'footer footer';
  }
}

.btn {
  color: white;
  transition: 0.15s linear;
}

.btn:hover {
  background-color: rgb(68, 36, 109);
}

input[type='text'] {
  color: white;
}
