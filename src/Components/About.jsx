/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

import image2 from "../images/3. Foto- Jannina Romero Mori.jpg";

const imageAltText2 = "JanninaFoto";


/**
 * Sort description that expands on your title on the Home component.
 */
const description = "Hi, my name is Jannina Romero. I am a student of industrial engineering at the National University of San Marcos - Perú. ";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Creative",
  "Leadership",
  "Resilient",
  "Teamwork",
  "Communication",
  "Innovative",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "This blog is a space for the community of curious minds passionate about engineering. Here, you'll find stories, reflections and projects that I hope will inspire you as well";

const About = () => {
  return (
    <section className="padding" id="about">
        <img className="background" src={image} alt={imageAltText} />
        <div
          style={{
            backgroundColor: "white",
            width: "60%",
            padding: "8rem",
            margin: "1.5rem auto",
            textAlign: "center",
          }}  
        >
            <img
                src={image2}
                style={{ height: "18%", width: "30%", objectFit: "center" }}
                alt={imageAltText2}
            />
    
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.5rem",
            margin: "2rem 2rem",
            gap: "1rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
        
      </div>
      
    </section>
  );
};

export default About;
