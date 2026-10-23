"use client";

import { useState } from "react";
import { MediaHero } from "./media-hero";
import { MediaSpotlight } from "./media-spotlight";
import { MediaVideoGrid } from "./media-video-grid";
import { MediaRequestTour } from "./media-request-tour";
import { VideoItem } from "@/data/media-data";

export function MediaPageContent() {
    const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(null);

    return (
        <main className="min-h-screen bg-white text-zinc-900">
            <MediaHero />
            <MediaSpotlight onOpenModal={(video) => setActiveModalVideo(video)} />
            <MediaVideoGrid
                activeModalVideo={activeModalVideo}
                setActiveModalVideo={setActiveModalVideo}
            />
            <MediaRequestTour />
        </main>
    );
}
