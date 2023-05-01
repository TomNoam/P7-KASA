import React from "react";

import ProposBanner from "../components/ProposBanner/ProposBanner";
import Acordion from "../components/Acordion/Acordion";
import data from "../proposText.json";

export default function PagePropos() {
    return (
        <div className="proposContainer">
            <ProposBanner />
            <section className="accordionContainer">
                {data.map((item) => <Acordion key={item.name} item={item} name={item.name} content={item.content} />)}
            </section>
        </div>
        )
}