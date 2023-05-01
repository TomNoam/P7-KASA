import React from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Card from "../components/Card/Card";
import data from "../logements.json";

export default function PageHome() {
    return (
        <div className="homeContainer">
            <HomeBanner />
            <section className="cardsContainer">
                {data.map((housing) => <Card key={housing.id} housing={housing}/>)}
            </section>
        </div>
        )
}