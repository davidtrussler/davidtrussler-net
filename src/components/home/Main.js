import React from 'react';
import {Image} from '../shared/Image'; 
import {Anchor} from '../shared/Anchor'; 

export function Main() {
	return (
	  <main>
	    <div className="constrained">
	      <div className="main__inner">
	      	<Image fileName="nye_19_464.jpg" alt="David Trussler"/>

	        <p>I am a Frontend Web Developer based in Coventry and London. I&#8217;m also a runner of half and full marathons, an occasional musician (improvised reeds and electronics), a supporter of the football teams of Coventry City and Wales and a sometime commentator on politics.</p>

	        <p>I have been working in web development for several years after emerging from the print industry, both in design and in the actual process of applying ink to paper. With this background, it&#8217;s no surprise that I am a bit obsessed with good, old-fashioned values of typography and find bringing this into the digital age a fascinating challenge.</p>

	        <p>I have extensive experience of all aspects of Front End Web Development and consider myself a dedicated team member, committed to producing work of the highest standards within tight deadlines. I have a good appreciation of visual design and a creative and innovative approach to problem-solving.</p>

	        <p>I&#8217;m an enthusiastic advocate of responsive design and a mobile-first approach and have a good understanding of the concepts of object oriented development, progressive enhancement, accessibility and cross-browser compatibility. I&#8217;m very enthusiastic about looking for ways to enhance the user experience, and to pro-actively incorporate new ideas and practices in web development.</p>

	        <p>I&#8217;m keen to use modern technology to help online users enrich and better their lives with well-designed tools and accessible information. I&#8217;m passionate about being involved at every stage of the process, collaborating with a wide range of other team members to solve problems and push for the most effective way to achieve results.</p>

	        <p>I currently work at the <Anchor href="https://www.moneyadviceservice.org.uk" target="_blank" link="Money Advice Service"/>, where my key achievements have been</p>

	        <ul className="bullet-list">
	          <li>playing a major role in gaining and maintaining the accreditation of AA level accessibility of the public site</li>
	          <li>setting up Unit and End to End tests on new areas of work on the site</li>
	          <li>developing the current fully-accessible navigation</li>
	        </ul>

	        <p>My key skills in Front End Web Development are</p>

	        <ul className="bullet-list">
	          <li>skilled in writing semantic HTML</li>
	          <li>skilled in writing efficient CSS</li>
	          <li>skilled in vanilla JavaScript and familiarity with frameworks such as React</li>
	          <li>experienced in working with a Test Driven Development approach, using Cucumber and Karma to apply End to End and Unit Tests to JavaScript components</li>
	          <li>a good knowledge  of, and full commitment to, web accessibility standards</li>
	          <li>fully versed in the principles of progressive enhancement, mobile first and responsive design</li>
	          <li>committed to applying web standards in all Front End work</li>
	          <li>a good familiarity of back end languages such as Ruby and PHP</li>
	          <li>experienced in the use of Git and Github for version control</li>
	          <li>experienced in the use of various operating systems: Mac OS X, Linux, Windows</li>
	          <li>well organised and able to meet tight deadlines</li>
	          <li>experienced in liaising with Product Managers and discussing the technical aspects of a project</li>
	          <li>fully committed to the principles of working in an Agile environment</li>
	          <li>active in developer communities outside of the workplace</li>
	          <li>committed to mentoring and helping newer team members become established</li>
	        </ul>
	      </div>
	    </div>
	  </main>
  )
}
