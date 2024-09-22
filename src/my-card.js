import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My Customizable Card";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .MusicCard {
  width: 600px;
  padding: 8px;
  background-color: orange;
}

.image{
  width: 550px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.Name{
  text-align: center;  
}

.Biography{
  text-align: left;
  color: black;
  margin: 20px;
  font-size: 16px;
}

.haxLink{
    font-size: 17px;
}
h1{
  font-size: 17px;
}
h2{
  margin: 8px 0;
  font-size: 20px;
}
    `;
  }

cardListener(){
  //clone card
  //used chatgpt to help me figure out shadowRoot
this.shadowRoot.querySelector('.clone').addEventListener('click', () =>  {
  const newCard = this.shadowRoot.querySelector('.MusicCard').cloneNode(true);  
  this.shadowRoot.querySelector('#cardlist').appendChild(newCard);
});
// change image 
this.shadowRoot.querySelector('#change-image').addEventListener('click', () => {
   this.shadowRoot.querySelector('.image').src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/The_Weeknd_Cannes_2023.png/440px-The_Weeknd_Cannes_2023.png"; })

//delete card
this.shadowRoot.querySelector('#delete-card').addEventListener('click', () => {

  if(this.shadowRoot.querySelectorAll('.MusicCard').length > 1){
    this.shadowRoot.querySelector('.MusicCard:last-child').remove();
  }
});

    //bg color 
    this.shadowRoot.querySelector('#bg-color').addEventListener('click', () => {
      this.shadowRoot.querySelector('.MusicCard').style.backgroundColor = "lightblue";
    });

}

firstUpdated(){
  this.cardListener();
}

  render() {
    return html`<h1>Customizable Card</h1>
    <h2>Settings</h2>
    <div class="settings">
      <button class="clone">Clone Card</button>
      <button id ="bg-color">Change background</button>
      <button id ="change-image">Change image</button>
      <button id="delete-card">DELETE</button>
    </div>
    <div id ="cardlist">
    <div class="MusicCard">
      <img src="https://www.theweeknd.com/files/2024/09/DITF.jpg" class = "image">
      <h2 class="Name">The Weeknd</h2>
     <!-- i got this description from chatgpt -->
    <p class = "Biography"> The Weeknd, born Abel Tesfaye, is a Canadian artist known for his smooth mix of R&B, pop, and electronic sounds. He first caught attention in 2011 with his mixtapes and later blew up with hits like "Can't Feel My Face," "Blinding Lights," and "Starboy." His music dives into themes like love, heartbreak, and life’s ups and downs, all delivered with his signature high-pitched voice. Over the years, The Weeknd has become one of the biggest names in music, constantly evolving his sound and style.
       </p>
         <a href="https://hax.psu.edu" class="haxLink">Learn More Here!</a>
      </div>
    </div>
    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
