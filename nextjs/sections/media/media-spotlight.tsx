"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Maximize2, MapPin, Calendar, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import { siteVideos, VideoItem, getYoutubeThumbnail, getYoutubeEmbedUrl } from "@/data/media-data";

interface MediaSpotlightProps {
    onOpenModal: (video: VideoItem) => void;
}

export function MediaSpotlight({ onOpenModal }: MediaSpotlightProps) {
    const featuredVideos = siteVideos.filter((v) => v.featured);
    const [selectedVideo, setSelectedVideo] = useState<VideoItem>(featuredVideos[0] || siteVideos[0]);
    const [isPlayingInline, setIsPlayingInline] = useState(false);

    const handleSelectVideo = (video: VideoItem) => {
        setSelectedVideo(video);
        setIsPlayingInline(false);
    };

    const spotlightThumbnail =
        selectedVideo.thumbnail && selectedVideo.thumbnail !== "auto"
            ? selectedVideo.thumbnail
            : getYoutubeThumbnail(selectedVideo.youtubeId || selectedVideo.videoUrl);

    const spotlightEmbed =
        selectedVideo.videoUrl.includes("/embed/")
            ? selectedVideo.videoUrl
            : getYoutubeEmbedUrl(selectedVideo.youtubeId || selectedVideo.videoUrl);

    return (
        <section id="spotlight-video" className="py-20 md:py-24 px-4 md:px-8 lg:px-16 w-full bg-zinc-50 border-b border-zinc-200">
            <div className="max-w-7xl mx-auto">
                {/* Section Header matching site standard */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-1.5">
                            <span className="size-1.5 bg-zinc-900 inline-block" />
                            <span className="text-sm text-zinc-900 tracking-wide uppercase font-medium">
                                FEATURED VIDEO SPOTLIGHT
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight leading-tight mt-3">
                            Cinematic Flyovers &amp; Walkthroughs
                        </h2>
                        <p className="text-zinc-500 text-sm md:text-base mt-2 max-w-xl">
                            Select between verified 4K aerial footage and complete architectural interior tours.
                        </p>
                    </div>

                    {/* Switcher Pills */}
                    <div className="flex flex-wrap items-center gap-2">
                        {featuredVideos.map((video) => {
                            const isSelected = selectedVideo.id === video.id;
                            return (
                                <button
                                    key={video.id}
                                    onClick={() => handleSelectVideo(video)}
                                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                                        isSelected
                                            ? "bg-zinc-900 text-white shadow font-semibold"
                                            : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-400 hover:text-zinc-900"
                                    }`}
                                >
                                    {video.category === "Site Progress & Drone" ? "Aerial Drone Survey" : "Villa 3D Tour"}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Main Player Box - Clean White Card */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-zinc-200 p-5 sm:p-7 lg:p-9 shadow-sm">
                    {/* Video Player (lg:col-span-8) */}
                    <div className="lg:col-span-8 relative rounded-2xl overflow-hidden aspect-video bg-black group border border-zinc-800 shadow-md">
                        {isPlayingInline ? (
                            <iframe
                                src={spotlightEmbed}
                                title={selectedVideo.title}
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <div className="relative w-full h-full">
                                <Image
                                    src={spotlightThumbnail}
                                    alt={selectedVideo.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                                {/* Badges */}
                                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                    <span className="bg-amber-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {selectedVideo.badge}
                                    </span>
                                    <span className="bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-md border border-white/20">
                                        {selectedVideo.resolution}
                                    </span>
                                </div>

                                {/* Duration Tag */}
                                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5">
                                    <Clock size={12} />
                                    <span>{selectedVideo.duration}</span>
                                </div>

                                {/* Center Play Trigger Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button
                                        onClick={() => setIsPlayingInline(true)}
                                        className="relative group/btn flex items-center justify-center size-20 sm:size-24 rounded-full bg-white text-zinc-900 shadow-2xl hover:scale-110 hover:bg-amber-400 transition-all duration-300 cursor-pointer"
                                        aria-label="Play Video"
                                    >
                                        <span className="absolute -inset-2 rounded-full bg-white/40 animate-ping pointer-events-none" />
                                        <Play size={30} className="fill-zinc-900 ml-1.5" />
                                    </button>
                                </div>

                                {/* Bottom Info Bar inside player */}
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-200">
                                    <div className="flex items-center gap-2">
                                        <MapPin size={14} className="text-amber-400 shrink-0" />
                                        <span className="truncate">{selectedVideo.locationTag}</span>
                                    </div>
                                    <button
                                        onClick={() => onOpenModal(selectedVideo)}
                                        className="inline-flex items-center gap-1.5 text-zinc-200 hover:text-white bg-black/60 px-3 py-1.5 rounded-md hover:bg-black/80 transition-colors cursor-pointer border border-white/10"
                                    >
                                        <Maximize2 size={13} />
                                        <span>Fullscreen Lightbox</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Side Info Panel (lg:col-span-4) */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
                        <div>
                            <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md inline-block uppercase tracking-wider mb-2.5 border border-amber-200">
                                {selectedVideo.category}
                            </span>

                            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 leading-snug">
                                {selectedVideo.title}
                            </h3>

                            <p className="text-zinc-600 text-sm mt-3 leading-relaxed">
                                {selectedVideo.description}
                            </p>

                            {/* Meta items */}
                            <div className="grid grid-cols-2 gap-3 py-4 my-4 border-y border-zinc-200 text-xs">
                                <div className="flex items-center gap-2 text-zinc-700">
                                    <Calendar size={14} className="text-zinc-500" />
                                    <span>{selectedVideo.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-zinc-700">
                                    <Clock size={14} className="text-zinc-500" />
                                    <span>{selectedVideo.duration} Duration</span>
                                </div>
                                <div className="flex items-center gap-2 text-zinc-700 col-span-2">
                                    <MapPin size={14} className="text-zinc-500" />
                                    <span className="truncate">{selectedVideo.locationTag}</span>
                                </div>
                            </div>

                            {/* Key Highlights list */}
                            <div>
                                <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-2 block">
                                    Key Site Milestones Shown:
                                </span>
                                <ul className="space-y-2">
                                    {selectedVideo.keyHighlights.slice(0, 3).map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                                            <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 pt-2">
                            <button
                                onClick={() => onOpenModal(selectedVideo)}
                                className="w-full inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3 px-5 rounded-xl text-sm transition-all duration-200 cursor-pointer shadow-sm"
                            >
                                <Play size={16} className="fill-white" />
                                Open Cinema Lightbox
                            </button>
                            <a
                                href="/inquiry"
                                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-50 text-zinc-900 font-medium py-3 px-5 rounded-xl text-sm transition-colors border border-zinc-200 text-center shadow-xs"
                            >
                                Inquire About This Location
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
