import React from "react";
import "../app/globals.css";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function MobilePC({ mainImg, videoLink, title, description, image1, image2, image3, githubLink, deployLink, stack = [], className }) {
    return (
        <div className="w-3/4 flex flex-col gap-3 mb-10">
            <div className="mt-16 flex items-center justify-between">
                <h1 className="text-white text-2xl font-bold">{title}</h1>
                <div className="flex items-center gap-2">
                    {githubLink && (
                        <a href={githubLink} className="text-white">
                            <img src="img/github.svg" className="h-7 w-7" alt="GitHub Link" />
                        </a>
                    )}
                    {deployLink && (
                        <a href={deployLink} className="text-white">
                            <img src="img/deploy.svg" className="h-7 w-7" alt="Deploy Link" />
                        </a>
                    )}
                </div>
            </div>
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <div className="h-60 w-full flex justify-center items-center bg-black rounded-lg border-2 border-white">
                            {videoLink ? (
                                <iframe
                                    src={videoLink}
                                    title="Video"
                                    width="100%"
                                    height="100%"
                                    className="rounded-lg"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <img src={mainImg} alt={title} className="max-h-full max-w-full object-contain" />
                            )}
                        </div>
                    </CarouselItem>
                    {image1 && (
                        <CarouselItem>
                            <div className="h-60 w-full flex justify-center items-center bg-black rounded-lg border-2 border-white">
                                <img src={image1} alt={`${title} Image 1`} className="max-h-full max-w-full object-contain" />
                            </div>
                        </CarouselItem>
                    )}
                    {image2 && (
                        <CarouselItem>
                            <div className="h-60 w-full flex justify-center items-center bg-black rounded-lg border-2 border-white">
                                <img src={image2} alt={`${title} Image 2`} className="max-h-full max-w-full object-contain" />
                            </div>
                        </CarouselItem>
                    )}
                    {image3 && (
                        <CarouselItem>
                            <div className="h-60 w-full flex justify-center items-center bg-black rounded-lg border-2 border-white">
                                <img src={image3} alt={`${title} Image 3`} className="max-h-full max-w-full object-contain" />
                            </div>
                        </CarouselItem>
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <p className="text-white">{description}</p>
            <hr className="bg-white mt-3" />
            <div className="flex gap-2 mt-3">
                {stack.map((item, index) => (
                    <img key={index} src={item} alt={`Stack ${index + 1}`} className="h-5 w-5" />
                ))}
            </div>
        </div>
    );
}
