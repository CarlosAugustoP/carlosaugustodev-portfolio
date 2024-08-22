import React from "react";
import "../app/globals.css";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
// ENVELOP AN IMAGE CONTAINER AROUND ALL IMGS. BRIDGE IS BROKEN BECAUSE YOU CURRENTLY HAVE AN IMAGE THAT IS TOO VERTICALLY LARGE, PUSHING DESCRIPTION DOWN
export default function MobilePC({ mainImg, title, description, image1, image2, image3, githubLink, deployLink, stack = [], className }) {
    return (
        <div>
            <h1 className="text-white">{title}</h1>
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <img src={mainImg} alt={title} className="" />
                    </CarouselItem>
                        <img src={image1} alt={title} className="" />
                    <CarouselItem>
                        <img src={image2} alt={title} className="" />
                    </CarouselItem>
                    <CarouselItem>
                        <img src={image3} alt={title} className="" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <p className="text-white">{description}</p>
        </div>
    );
}