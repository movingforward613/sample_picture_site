class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      .zone {
          /*padding:30px 50px;*/
          cursor:pointer;
          color:#FFF;
          font-size:2em;
          border-radius:4px;
          border:1px solid #bbb;
          transition: all 0.3s linear;
      }

      .zone:hover {
          -webkit-box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
          -moz-box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
          -o-box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
          box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
      }

      /***********************************************************************
       *  Nav Bar
       **********************************************************************/
      .main-nav {
          display: flex;
          list-style: none;
          margin: 0;
          font-size: 0.7em;
      }

      .push {
          margin-left: auto;
      }

      li {
          padding: 20px;
      }

      a {
          color: #f5f5f6;
          text-decoration: none;
      }

      .sticky {
        position: fixed;
        top: 0;
        width: 100%;
      }

      @media only screen and (max-width: 600px) {
          .main-nav {
            display: block;
            width: auto;
              font-size: 0.5em;
              padding: 0;
          }

          /* don't make the nav bar sticky for small screens */
          .sticky {
            position: relative;
          }
      }

      .blue {
          background: #7abcff; /* Old browsers */
          background: -moz-linear-gradient(top, #7abcff 0%, #60abf8 44%, #4096ee 100%); /* FF3.6+ */
          background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#7abcff), color-stop(44%,#60abf8), color-stop(100%,#4096ee)); /* Chrome,Safari4+ */
          background: -webkit-linear-gradient(top, #7abcff 0%,#60abf8 44%,#4096ee 100%); /* Chrome10+,Safari5.1+ */
          background: -o-linear-gradient(top, #7abcff 0%,#60abf8 44%,#4096ee 100%); /* Opera 11.10+ */
          background: -ms-linear-gradient(top, #7abcff 0%,#60abf8 44%,#4096ee 100%); /* IE10+ */
          background: linear-gradient(top, #7abcff 0%,#60abf8 44%,#4096ee 100%); /* W3C */
      }

      .dropdown {
        float: left;
        overflow: initial;
      }

      .dropdown .dropbtn {
        font-size: 17px;
        border: none;
        outline: none;
        color: white;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: -1;
      }

      .dropdown-content a {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
      }

      .topnav a:hover, .dropdown:hover .dropbtn {
        background-color: #555;
        color: white;
      }

      .dropdown-content a:hover {
        background-color: #ddd;
        color: black;
      }

      .dropdown:hover .dropdown-content {
        display: block;
      }

      @media screen and (max-width: 600px) {
        .topnav a:not(:first-child), .dropdown .dropbtn {
          display: none;
        }
        .topnav a.icon {
          float: right;
          display: block;
        }
      }

      @media screen and (max-width: 600px) {
        .topnav.responsive {position: relative;}
        .topnav.responsive .icon {
          position: absolute;
          right: 0;
          top: 0;
        }
        .topnav.responsive a {
          float: none;
          display: block;
          text-align: left;
        }
        .topnav.responsive .dropdown {float: none;}
        .topnav.responsive .dropdown-content {position: relative;}
        .topnav.responsive .dropdown .dropbtn {
          display: block;
          width: 100%;
          text-align: left;
        }
      }
      </style>

      <header>
      <!-- Navigation Bar -->
      <nav class="zone blue sticky">
        <ul class="main-nav">
          <div class="dropdown">
            <button class="dropbtn"><a href="animals.html">Animals</a>
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <li><a href="animals.html#land">Land Animals</a></li>
            <li><a href="animals.html#water">Water Animals</a></li>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">Dropdown
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <li><a href="dryScenery.html">Scenery</a></li>
              <li><a href="sunsets.html">Sunsets</a></li>
              <li><a href="water.html">Water</a></li>
              <li><a href="kotel.html">The Kotel</a></li>
            </div>
          </div>
          <li class="push"><a href="contact.html">Contact Us</a></li>
        </ul>
      </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);
