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

  static get properties(){
    return{
      title: { type: String },
      image: { type: String },
      description: { type: String },
      buttonTitle: { type: String, attribute: "button-title" },
      fancy: { type: Boolean, reflect: true } 
    };
  }
  constructor() {
    super();
    this.title = "My Customizable Card";
    this.image = "";
    this.description = "";
    this.buttonTitle = "";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        
      }

      :host([fancy]){
        background-color: var(--my-card-fancy-bg, blue);
        border: 2px solid skyblue;
      }

  .MerchCard, .MusicCard, .TourDates, .TopHits, .WikiPage {
  width:40%;
  padding: 8px;
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 15px; 
  margin-top: 10px;
  margin-bottom: 20px;
  display: block;
  text-align: center;
  overflow: hidden;
}

.image, .MerchPic, .TourPic{
  width: 100%;
  height:auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
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
  display: inline-block;
  background-color: #b78bda; 
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 10px;
  display: block;
  width: 120px;
  text-align: center;
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
openChanged(e) {
  console.log(e.newState);
  if (e.newState === "open") {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
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

      <div class="MerchCard">
      <img src="https://theweeknd.b-cdn.net/wp-content/uploads/2022/12/AHTD-TOUR-MERCH-PRODUCT-SHOTS-PORTAL-LS-BLACK-BACK.png" class = "MerchPic">
      <h2 class="Name">Merch</h2>
    <p class = "MerchDetails"> All Sizes Are Linked Below! 
       </p>
         <a href="https://hax.psu.edu" class="haxLink">Buy Now!</a>

         </div>

      <div class="TourDates">
      <img src="https://media.pitchfork.com/photos/6220d915d78e88f43d09ebf3/master/w_1280%2Cc_limit/The-Weeknd-Tour.jpg" class = "TourPic">
      <h2 class="Name">Tour Dates</h2>
    <p class = "TourDetails"> Buy A Ticket Below
       </p>
         <a href="https://hax.psu.edu" class="haxLink">See Dates!</a>
      </div>

      <div class="TopHits">
      <img src="https://i.ytimg.com/vi/v0SR6AqBUck/maxresdefault.jpg" class = "TourPic">
      <h2 class="Name">Top Hits</h2>
    <p class = "HitDetails"> Listen To His Top Hits!
       </p>
         <a href="https://hax.psu.edu" class="haxLink">Listen Here!</a>
      </div>

      <div class="WikiPage">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/The_Weeknd_with_hand_in_the_air_performing_live_in_Hong_Kong_in_November_2018_%28cropped%29.jpg/201px-The_Weeknd_with_hand_in_the_air_performing_live_in_Hong_Kong_in_November_2018_%28cropped%29.jpg" class = "TourPic">
      <h2 class="Name">Wiki Page</h2>
    <p class = "TourDetails"> Learn More About The Weeknd Here!
       </p>
         <a href="https://hax.psu.edu" class="haxLink">Details Here!</a>
      </div>

    </div>
    </div>`;
  }

}

globalThis.customElements.define(MyCard.tag, MyCard);
