// var MODEL = (function(){

var homeContent = `<div class="home">
<div class="hero">
  <div class="hero-image hero-picture">
    <div class="callout">
      <h1>Header goes Here</h1>
      <h2>Less important text goes here</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
        aliquid minus nemo sed
      </p>

      <div class="button">Read More</div>
    </div>
  </div>
</div>

<div class="owner">
  <div class="owner-content">
    <p>
      “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium totam rem aperiam eaque ipsa
      quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Iste natus error sit voluptatem accusantium
      doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt
      explicabo”
    </p>
    <h4>John Smith</h4>
    <h6>Corporation CEO, books author.</h6>
  </div>
</div>

<div class="up-events">
  <div class="event-container">
    <div class="event-header">
      <h3>UPCOMING EVENTS:</h3>
    </div>
    <div class="eventDay-container">
      <a id="blog1" href="#">
        <div class="event-day">
          <div class="day">
            <h1>06</h1>
            <h2>JUL</h2>
          </div>
          <div class="day-info">
            <p>Sed et persipiatis unde omnis iste natus</p>
            <p id="red-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid temporibus quos aspernatur
            </p>
          </div>
        </div>
      </a>

      <a id="blog2" href="#">
        <div class="event-day">
          <div class="day">
            <h1>30</h1>
            <h2>JUL</h2>
          </div>
          <div class="day-info">
            <p>Sed et persipiatis unde omnis iste natus</p>
            <p id="red-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid temporibus quos aspernatur
            </p>
          </div>
        </div>
      </a>

      <a id="blog3" href="#">
        <div class="event-day">
          <div class="day">
            <h1>30</h1>
            <h2>AUG</h2>
          </div>
          <div class="day-info">
            <p>Sed et persipiatis unde omnis iste natus</p>
            <p id="red-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid temporibus quos aspernatur
            </p>
          </div>
        </div>
      </a>

      <a id="blog4" href="#">
        <div class="event-day">
          <div class="day">
            <h1>23</h1>
            <h2>NOV</h2>
          </div>
          <div class="day-info">
            <p>Sed et persipiatis unde omnis iste natus</p>
            <p id="red-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid temporibus quos aspernatur
            </p>
          </div>
        </div>
      </a>

      <a id="blog5" href="#">
        <div class="event-day">
          <div class="day">
            <h1>23</h1>
            <h2>DEC</h2>
          </div>
          <div class="day-info">
            <p>Sed et persipiatis unde omnis iste natus</p>
            <p id="red-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid temporibus quos aspernatur
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
</div>
// <script src="app/anchors.js"></script>`;

var aboutContent = `<div class="about">
<div class="hero">
  <div class="hero-image hero-picture"> 
  </div>
</div>

<div class="our-history">
    <div class="header-h1">
        <h3>OUR HISTORY:</h3>
    </div>
  <div class="history-content">
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni doloresipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
    </p> 
  </div>
</div>
</div>`;

var galleryContent = `<div class="gallery">
<div class="hero">
 <div class="hero-gallery"> 
    <div class="header-h1">
        <h3>GALLERY:</h3>
    </div>  
    <div class="galleries">
      <a id="gallery1" href="#">
        <div class="gallery-1 hero-picture">
          <div id="background-image"></div>
        </div>
      </a>
      <a id="gallery2" href="#">
        <div class="gallery-2 hero-picture"></div>
      </a>
      <a id="gallery3" href="#">
        <div class="gallery-3 hero-picture"></div>
      </a>
      <a id="gallery4" href="#">
        <div class="gallery-4 hero-picture"></div>
      </a>
      <a id="gallery5" href="#">
        <div class="gallery-5 hero-picture"></div>
      </a>
        
    </div>
 </div>
</div>
</div>
// <script src="app/anchors.js"></script>`;

var blogContent = `<div class="blog">
<div class="blog-container"> 
  <div class="header-h1">
      <h3>BLOG:</h3>
  </div> 
  <div class="blog-wrapper">
    <a id="blog1" href="#">
      <div class="date-blog">
          <div class="day">
            <h1>06</h1>
            <h2>JUL</h2>
          </div>
          <div class="right-blog">
            <div class="blog-image">
            </div>
            <p>Sed et persipiatis unde omnis iste natus</p>
            <p id="red-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </p>
          </div>
      </div>
    </a>
    <a id="blog2" href="#">
      <div class="date-blog">
          <div class="day">
            <h1>30</h1>
            <h2>JUL</h2>
          </div>
          <div class="right-blog">
            <div class="blog-image">
            </div>
            <p>Sed et persipiatis unde omnis iste natus</p>
            <p id="red-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </p>
          </div>
      </div>
    </a>
    <a id="blog3" href="#">
      <div class="date-blog">
          <div class="day">
            <h1>30</h1>
            <h2>AUG</h2>
          </div>
          <div class="right-blog">
            <div class="blog-image">
            </div>
            <p>Sed et persipiatis unde omnis iste natus</p>
            <p id="red-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </p>
          </div>
      </div>
    </a>  
    <a id="blog4" href="#">
      <div class="date-blog">
          <div class="day">
            <h1>23</h1>
            <h2>NOV</h2>
          </div>
          <div class="right-blog">
            <div class="blog-image">
            </div>
            <p>Sed et persipiatis unde omnis iste natus</p>
            <p id="red-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </p>
          </div>
      </div>
    </a>  
    <a id="blog5" href="#">
      <div class="date-blog">
          <div class="day">
            <h1>23</h1>
            <h2>DEC</h2>
          </div>
          <div class="right-blog">
            <div class="blog-image">
            </div>
            <p>Sed et persipiatis unde omnis iste natus</p>
            <p id="red-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </p>
          </div>
      </div>
    </a>
  </div>
</div>
</div>
// <script src="app/anchors.js"></script>`;

var contactContent = `<div class="contact">
<div class="header-h1">
  <h3>CONTACT US:</h3>
</div>
<div class="contact-container">
  <div class="contact-form">
    <input
      class="text-fields"
      type="text"
      name="your-name"
      id="your-name"
      placeholder="Your name..."
    />
    <input
      class="text-fields"
      type="text"
      name="email"
      id="email"
      placeholder="Email Address..."
    />
    <input
      class="text-fields"
      type="text"
      name="company"
      id="company"
      placeholder="Company..."
    />
    <textarea
      name="Message"
      id=""
      cols="30"
      placeholder="Message"
    ></textarea>
    <div class="button">send message</div>
  </div>
  <div class="map">
    <div class="map-image hero-picture"></div>
  </div>
</div>
</div>`;

var gallery1Content = `<div class="individual-gallery">
<div class="gallery-container">
  <div class="gallery1">
    <div class="gallery-hero hero-picture">
      <div class="gallery-callout">
        <div class="callout-num">
          <h1>1.</h1>
        </div>
        <div class="callout-description">
          <p>food festival </p>
        </div>
      </div>
    </div>
</div>
  <div class="gallery-info">
    <div class="info-left">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    </div>
    <div class="info-right">
      <p>Neque porro quisquam est, sit ametqui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
      sed quia non magnam aliquam 
      sed quia nonquaerat voluptatem. </p>
    </div>
  </div>
</div>
</div>`;

var gallery2Content = `<div class="individual-gallery">
<div class="gallery-container">
  <div class="gallery2">
    <div class="gallery-hero hero-picture">
      <div class="gallery-callout">
        <div class="callout-num">
          <h1>2.</h1>
        </div>
        <div class="callout-description">
          <p>dee-jay </p>
        </div>
      </div>
    </div>
</div>
  <div class="gallery-info">
    <div class="info-left">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    </div>
    <div class="info-right">
      <p>Neque porro quisquam est, sit ametqui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
      sed quia non magnam aliquam 
      sed quia nonquaerat voluptatem. </p>
    </div>
  </div>
</div>
</div>`;

var gallery3Content = `<div class="individual-gallery">
<div class="gallery-container">
  <div class="gallery3">
    <div class="gallery-hero hero-picture">
      <div class="gallery-callout">
        <div class="callout-num">
          <h1>3.</h1>
        </div>
        <div class="callout-description">
          <p>Speech </p>
        </div>
      </div>
    </div>
</div>
  <div class="gallery-info">
    <div class="info-left">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    </div>
    <div class="info-right">
      <p>Neque porro quisquam est, sit ametqui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
      sed quia non magnam aliquam 
      sed quia nonquaerat voluptatem. </p>
    </div>
  </div>
</div>
</div>`;

var gallery4Content = `<div class="individual-gallery">
<div class="gallery-container">
  <div class="gallery4">
    <div class="gallery-hero hero-picture">
      <div class="gallery-callout">
        <div class="callout-num">
          <h1>4.</h1>
        </div>
        <div class="callout-description">
          <p>open foodfest </p>
        </div>
      </div>
    </div>
</div>
  <div class="gallery-info">
    <div class="info-left">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    </div>
    <div class="info-right">
      <p>Neque porro quisquam est, sit ametqui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
      sed quia non magnam aliquam 
      sed quia nonquaerat voluptatem. </p>
    </div>
  </div>
</div>
</div>`;

var gallery5Content = `<div class="individual-gallery">
<div class="gallery-container">
  <div class="gallery5">
    <div class="gallery-hero hero-picture">
      <div class="gallery-callout">
        <div class="callout-num">
          <h1>5.</h1>
        </div>
        <div class="callout-description">
          <p>international</p>
        </div>
      </div>
    </div>
</div>
  <div class="gallery-info">
    <div class="info-left">
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
    </div>
    <div class="info-right">
      <p>Neque porro quisquam est, sit ametqui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
      sed quia non magnam aliquam 
      sed quia nonquaerat voluptatem. </p>
    </div>
  </div>
</div>
</div>`;

var blog1Content = `<div class="individual-blog">
        
<div class="hero">
    <div class="hero-image hero-picture"> 
      <div class="day">
        <h1>06</h1>
        <h2>JUN</h2>
      </div>
    </div>
</div> 
<div class="indBlog-container">
  <div class="comments-header">
    <p id="comm-red">Header#1</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciuntexplicabo. Nemo enim ipsam voluptatem quia voluptas sitexplicabo. Nemo enim ipsam voluptatem quia voluptas sit </p>

    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.non numquam eius modi tempora  ut labore et dolore magnam aliquam qua </p>
  </div>
  <div class="comments-header">
    <p id="comm-red">Header#2</p>    
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.non numquam eius modi tempora  ut labore et dolore magnam aliquam qua </p>
  </div>
</div>
</div>`;

var blog2Content = `<div class="individual-blog">
        
<div class="hero">
    <div class="hero-image hero-picture"> 
      <div class="day">
        <h1>30</h1>
        <h2>JUL</h2>
      </div>
    </div>
</div> 
<div class="indBlog-container">
  <div class="comments-header">
    <p id="comm-red">Header#1</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciuntexplicabo. Nemo enim ipsam voluptatem quia voluptas sitexplicabo. Nemo enim ipsam voluptatem quia voluptas sit </p>

    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.non numquam eius modi tempora  ut labore et dolore magnam aliquam qua </p>
  </div>
  <div class="comments-header">
    <p id="comm-red">Header#2</p>    
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.non numquam eius modi tempora  ut labore et dolore magnam aliquam qua </p>
  </div>
</div>
</div>`;

var blog3Content = `<div class="individual-blog">
        
<div class="hero">
    <div class="hero-image hero-picture"> 
      <div class="day">
        <h1>30</h1>
        <h2>AUG</h2>
      </div>
    </div>
</div> 
<div class="indBlog-container">
  <div class="comments-header">
    <p id="comm-red">Header#1</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciuntexplicabo. Nemo enim ipsam voluptatem quia voluptas sitexplicabo. Nemo enim ipsam voluptatem quia voluptas sit </p>

    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.non numquam eius modi tempora  ut labore et dolore magnam aliquam qua </p>
  </div>
  <div class="comments-header">
    <p id="comm-red">Header#2</p>    
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.non numquam eius modi tempora  ut labore et dolore magnam aliquam qua </p>
  </div>
</div>
</div>`;

var blog4Content = `<div class="individual-blog">
        
<div class="hero">
    <div class="hero-image hero-picture"> 
      <div class="day">
        <h1>23</h1>
        <h2>NOV</h2>
      </div>
    </div>
</div> 
<div class="indBlog-container">
  <div class="comments-header">
    <p id="comm-red">Header#1</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciuntexplicabo. Nemo enim ipsam voluptatem quia voluptas sitexplicabo. Nemo enim ipsam voluptatem quia voluptas sit </p>

    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.non numquam eius modi tempora  ut labore et dolore magnam aliquam qua </p>
  </div>
  <div class="comments-header">
    <p id="comm-red">Header#2</p>    
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.non numquam eius modi tempora  ut labore et dolore magnam aliquam qua </p>
  </div>
</div>
</div>`;

var blog5Content = `<div class="individual-blog">
        
<div class="hero">
    <div class="hero-image hero-picture"> 
      <div class="day">
        <h1>23</h1>
        <h2>DEC</h2>
      </div>
    </div>
</div> 
<div class="indBlog-container">
  <div class="comments-header">
    <p id="comm-red">Header#1</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciuntexplicabo. Nemo enim ipsam voluptatem quia voluptas sitexplicabo. Nemo enim ipsam voluptatem quia voluptas sit </p>

    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.non numquam eius modi tempora  ut labore et dolore magnam aliquam qua </p>
  </div>
  <div class="comments-header">
    <p id="comm-red">Header#2</p>    
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.non numquam eius modi tempora  ut labore et dolore magnam aliquam qua </p>
  </div>
</div>
</div>`;

    export function changePageContent (pageName) {
      // if (pageName == "blog1") {
      //   $("#day-day").html(`<h1>99</h1>
      //   <h2>TES</h2>`)
      //   pageName = "blog6"
      //   console.log("click inside-----> " + pageName);
      // }

        let contentName = pageName + "Content";
        
        $("#app").html(eval(contentName));

        if(pageName == "home"){
            $("nav").css("border-bottom", "2px solid #fff");
            $("nav a").css("color", "#fff")
            $("nav .logo").html(`<img src="images/logo-white.svg" alt="" />`)
        }
        else {
            $("nav").css("border-bottom", "2px solid #000");
            $("nav a").css("color", "#000")
            $("nav .logo").html(`<img src="images/logo-black.svg" alt="" />`)
        }

        anchorGalleryContent();
        anchorBlogContent();
        anchorHomeContent();
    };

function anchorHomeContent (pageName) {
  $(".up-events .event-container .eventDay-container a").click(function(e){
    let btnId = e.currentTarget.id;
    console.log("click " + btnId);
    changePageContent(btnId);
  });
};

// ************************************
function anchorBlogContent (pageName) {
  $(".blog .blog-container .blog-wrapper a").click(function(e){
    let btnId = e.currentTarget.id;
    console.log("click " + btnId);
    changePageContent(btnId);
  });
};

// **************************************
function anchorGalleryContent (pageName) {
    $(".gallery .hero .hero-gallery .galleries a").click(function(e){
      let btnId = e.currentTarget.id;
      console.log("click " + btnId);
      changePageContent(btnId);
    });
};
// ***************************************