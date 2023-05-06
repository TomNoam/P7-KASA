import React from "react";
import { useParams} from "react-router-dom";

import Carousel from "../components/Carousel/Carousel";
import Acordion from "../components/Acordion/Acordion";
import AcordionList from "../components/AcordionList/AcordionList";
import Tag from "../components/Tag/Tag";
import Host from "../components/Host/Host";
import Stars from "../components/Stars/Stars";
import Page404 from "./Page404";

import data from "../logements.json";


export default function PageFiche() {
       
        const { id } = useParams();
        const  found = data.find(item => item.id === id);       
        // console.log(id);
        // console.log(found);
        if (found === undefined){
                return <Page404/>
        }

        const tagsArray = found.tags;
        const hostArray = found.host;        
        const rating = found.rating;

        return (
                <div className="ficheContainer">                                                           
                        <Carousel/>
                        <section className="allInfoPic">       
                                <div className="titlePictureLine">
                                        <h1 className="ficheTitle"> { found.title }</h1>
                                        <div className="ficheLocation"> { found.location } </div>
                                        <div className="tagsContainer">
                                                {tagsArray.map((tags) => <Tag key={tags} tags={tags} /> )}
                                        </div>
                                </div>

                                <div className="tagStarsContainer">
                                        <Host key={Host} name={hostArray.name} picture={hostArray.picture}/>
                                        <Stars key={found.rating} rating={rating} /> 
                                </div>
                        </section> 
                        <section className="acordionsContainer">
                                <Acordion className="acordion01" key={found.id} item={found} name="Description" content={found.description} />
                                <AcordionList className="acordion02" key={found.equipments} item={found} name="Equipements" equipments={found.equipments} />                               
                        </section>                        
                </div>
        )       
} 