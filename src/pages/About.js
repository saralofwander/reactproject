import React from "react";
//css
import '../css/index.css';
//bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const image = require('../images/slideshow/img_08.jpg')

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <p>A visual branding studio focused on product photography.</p>
      <br></br><br></br>
      <Container>
        <Row>
          <Col xs><h4>Mushrooms</h4><p>A mushroom or toadstool is the fleshy, spore-bearing fruiting body of a fungus, typically produced above ground, on soil, or on its food source.

            The standard for the name "mushroom" is the cultivated white button mushroom, Agaricus bisporus; hence the word "mushroom" is most often applied to those fungi (Basidiomycota, Agaricomycetes) that have a stem (stipe), a cap (pileus), and gills (lamellae, sing. lamella) on the underside of the cap. "Mushroom" also describes a variety of other gilled fungi, with or without stems, therefore the term is used to describe the fleshy fruiting bodies of some Ascomycota. These gills produce microscopic spores that help the fungus spread across the ground or its occupant surface.

            Forms deviating from the standard morphology usually have more specific names, such as "bolete", "puffball", "stinkhorn", and "morel", and gilled mushrooms themselves are often called "agarics" in reference to their similarity to Agaricus or their order Agaricales. By extension, the term "mushroom" can also refer to either the entire fungus when in culture, the thallus (called a mycelium) of species forming the fruiting bodies called mushrooms, or the species itself.</p></Col>
          <Col xs={{ order: 12 }}><h4>Etymology</h4><p>The terms "mushroom" and "toadstool" go back centuries and were never precisely defined, nor was there consensus on application. During the 15th and 16th centuries, the terms mushrom, mushrum, muscheron, mousheroms, mussheron, or musserouns were used.[2]

            The term "mushroom" and its variations may have been derived from the French word mousseron in reference to moss (mousse). Delineation between edible and poisonous fungi is not clear-cut, so a "mushroom" may be edible, poisonous, or unpalatable.[3][4] The word toadstool appeared first in 14th century England as a reference for a "stool" for toads, possibly inferring an inedible poisonous fungus.[5]</p></Col>
            


          <Col xs={{ order: 1 }}><h4>Identification</h4><p>Identifying mushrooms requires a basic understanding of their macroscopic structure. Most are Basidiomycetes and gilled. Their spores, called basidiospores, are produced on the gills and fall in a fine rain of powder from under the caps as a result. At the microscopic level, the basidiospores are shot off basidia and then fall between the gills in the dead air space. As a result, for most mushrooms, if the cap is cut off and placed gill-side-down overnight, a powdery impression reflecting the shape of the gills (or pores, or spines, etc.) is formed (when the fruit body is sporulating). The color of the powdery print, called a spore print, is used to help classify mushrooms and can help to identify them. Spore print colors include white (most common), brown, black, purple-brown, pink, yellow, and creamy, but almost never blue, green, or red.[6]

            While modern identification of mushrooms is quickly becoming molecular, the standard methods for identification are still used by most and have developed into a fine art harking back to medieval times and the Victorian era, combined with microscopic examination. The presence of juices upon breaking, bruising reactions, odors, tastes, shades of color, habitat, habit, and season are all considered by both amateur and professional mycologists. Tasting and smelling mushrooms carries its own hazards because of poisons and allergens. Chemical tests are also used for some genera.[7]

            In general, identification to genus can often be accomplished in the field using a local mushroom guide. Identification to species, however, requires more effort. A mushroom develops from a button stage into a mature structure, and only the latter can provide certain characteristics needed for the identification of the species. However, over-mature specimens lose features and cease producing spores. Many novices have mistaken humid water marks on paper for white spore prints, or discolored paper from oozing liquids on lamella edges for colored spored prints.</p></Col>
        </Row>
      </Container>
      <div className="mushroomImage">
      <img src={ image } alt="svamp" style={{ width: "800px", margin: "30px 0"}}/>
      </div>
    </div>
  )
};




export default About;