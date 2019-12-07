import React from "react"

import Blog from "./Blog"

import PPOW from "../../img/ppow.png"
import ComingSoon from "../../img/coming-soon.png"

function Blogs() {
  return (
    <div id="blog" className="item-blog">
      <h2>BLOG</h2>
      <span className="h2-underline"></span>
      <div className="blog-grid">
        <Blog
          id="blog1"
          url="https://medium.com/swlh/the-political-power-of-words-3ea8c98686d9"
          image={PPOW}
          alt="A word cloud featuring the most common words tweeted by Joe Biden; projected onto the U.S. flag"
          title="The Political Power of Words"
          datetime="2019-07-28 20:00"
          date="SUNDAY, JULY 28, 2019"
          preview='It was the Lebanese-born poet and painter, Kahlil Gibran, who once uttered, "all our words are but crumbs that fall down from the feast of the mind." They are thoughts thrust into existence...'
        />
        <Blog
          id="blog2"
          url="https://medium.com/@mjhwrites"
          image={ComingSoon}
          alt="Coming Soon"
          title="To Be Written"
          datetime=""
          date="TBA"
          preview='Iceland art party viral activated charcoal chicharrones freegan, snackwave pickled. Vegan vice pabst kale chips chicharrones succulents, activated charcoal...'
        />
        <Blog
          id="blog3"
          url="https://medium.com/@mjhwrites"
          image={ComingSoon}
          alt="Coming Soon"
          title="To Be Written"
          datetime=""
          date="TBA"
          preview='Tofu chillwave gluten-free hexagon, tbh kitsch marfa disrupt kale chips hoodie banjo. Keffiyeh cray jianbing health goth pok pok flannel pork belly brunch edison bulb kogi chillwave...'
        />
        <Blog
          id="blog4"
          url="https://medium.com/@mjhwrites"
          image={ComingSoon}
          alt="Coming Soon"
          title="To Be Written"
          datetime=""
          date="TBD"
          preview="Fanny pack narwhal leggings blue bottle, disrupt mlkshk affogato organic ennui ugh cronut +1 VHS man braid. Bitters single-origin coffee street art, literally viral readymade 90's..."
        />
      </div>
    </div>
  )
}


export default Blogs