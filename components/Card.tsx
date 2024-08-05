"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import { projects } from "@/data/Projects";
export function CardHoverEffect() {
    return (
        <div className="max-w-5xl mx-auto px-4">
            <HoverEffect items={projects} />
        </div>
    );
}