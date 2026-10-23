"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    Play,
    X,
    ChevronLeft,
    ChevronRight,
    Search,
    Clock,
    Calendar,
    MapPin,
    Eye,
    CheckCircle2,
    Share2,
    SlidersHorizontal,
} from "lucide-react";
import { siteVideos, mediaCategories, VideoItem, getYoutubeThumbnail, getYoutubeEmbedUrl } from "@/data/media-data";

interface MediaVideoGridProps {
    activeModalVideo: VideoItem | null;
    setActiveModalVideo: (video: VideoItem | null) => void;
}

export function MediaVideoGrid({ activeModalVideo, setActiveModalVideo }: MediaVideoGridProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [copiedId, setCopiedId] = useState<string | null>(null);

    // Filter videos based on category and search query
    const filteredVideos = useMemo(() => {
        return siteVideos.filter((video) => {
            const matchesCategory =
                selectedCategory === "All" || video.category === selectedCategory;
            const matchesSearch =
                searchQuery.trim() === "" ||
                video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                video.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
                video.keyHighlights.some((h) =>
                    h.toLowerCase().includes(searchQuery.toLowerCase())
                );
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    // Handle Keyboard Navigation in Modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!activeModalVideo) return;
            if (e.key === "Escape") {
                setActiveModalVideo(null);
            } else if (e.key === "ArrowRight") {
                navigateModal(1);
            } else if (e.key === "ArrowLeft") {
                navigateModal(-1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeModalVideo, filteredVideos]);

    const navigateModal = (direction: number) => {
        if (!activeModalVideo) return;
        const currentIndex = filteredVideos.findIndex((v) => v.id === activeModalVideo.id);
        if (currentIndex === -1) return;
        const newIndex =
            (currentIndex + direction + filteredVideos.length) % filteredVideos.length;
        setActiveModalVideo(filteredVideos[newIndex]);
    };

    const handleShare = (video: VideoItem, e: React.MouseEvent) => {
        e.stopPropagation();
        if (typeof window !== "undefined") {
            const url = `${window.location.origin}/media#${video.id}`;
            navigator.clipboard.writeText(url);
            setCopiedId(video.id);
            setTimeout(() => setCopiedId(null), 2500);
        }
    };

    return (
        <section id="all-videos" className="py-20 md:py-28 px-4 md:px-8 lg:px-16 w-full bg-white text-zinc-900 relative">
            <div className="max-w-7xl mx-auto">
                {/* Section Header matching site standard */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                    <div>
                        <div className="flex items-center gap-1.5">
                            <span className="size-1.5 bg-zinc-900 inline-block" />
                            <span className="text-sm text-zinc-900 tracking-wide uppercase font-medium">
                                ALL VIDEO RELEASES
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-[40px]/12 text-zinc-900 mt-4 font-medium leading-tight">
                            Browse All Video Material
                        </h2>
                        <p className="text-zinc-500 text-sm md:text-base mt-2 max-w-xl">
                            Filter by category or search through verified drone footage, plot layouts,
                            and project briefings.
                        </p>
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 size-4 pointer-events-none" />
                        <input
                            type="text"
                            placeholder="Search video titles, plots, drone..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-full pl-11 pr-9 py-3 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:bg-white shadow-sm transition"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700"
                            >
                                <X size={15} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Filter Categories Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
                    {mediaCategories.map((category) => {
                        const active = selectedCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                                    active
                                        ? "bg-zinc-900 text-white shadow font-semibold"
                                        : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-400 hover:text-zinc-900"
                                }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                {/* Results count info */}
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-6 px-1">
                    <span>
                        Showing <strong className="text-zinc-900 font-semibold">{filteredVideos.length}</strong> video{filteredVideos.length === 1 ? "" : "s"}
                        {selectedCategory !== "All" && ` in "${selectedCategory}"`}
                        {searchQuery && ` matching "${searchQuery}"`}
                    </span>
                    {(selectedCategory !== "All" || searchQuery) && (
                        <button
                            onClick={() => {
                                setSelectedCategory("All");
                                setSearchQuery("");
                            }}
                            className="text-zinc-900 hover:underline font-medium cursor-pointer"
                        >
                            Reset filters
                        </button>
                    )}
                </div>

                {/* Empty State */}
                {filteredVideos.length === 0 && (
                    <div className="py-20 text-center bg-zinc-50 rounded-2xl border border-zinc-200">
                        <SlidersHorizontal className="size-10 text-zinc-400 mx-auto mb-3" />
                        <h3 className="text-lg font-semibold text-zinc-900">No videos matched your criteria</h3>
                        <p className="text-zinc-500 text-sm mt-1 max-w-sm mx-auto">
                            Try adjusting your search terms or select &quot;All&quot; from the category filter.
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory("All");
                                setSearchQuery("");
                            }}
                            className="mt-4 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-medium cursor-pointer"
                        >
                            View All Videos
                        </button>
                    </div>
                )}

                {/* Video Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredVideos.map((video, index) => {
                        const thumbnailSrc =
                            video.thumbnail && video.thumbnail !== "auto"
                                ? video.thumbnail
                                : getYoutubeThumbnail(video.youtubeId || video.videoUrl);

                        return (
                                <motion.div
                                    key={video.id}
                                    id={video.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: index * 0.04 }}
                                    className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-zinc-400 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                                    onClick={() => setActiveModalVideo(video)}
                                >
                                    {/* Card Media Preview */}
                                    <div className="relative aspect-video w-full overflow-hidden bg-black">
                                        <Image
                                            src={thumbnailSrc}
                                            alt={video.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                                        />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Top Badges */}
                                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                                    <span className="bg-amber-500 text-zinc-950 text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                        {video.badge}
                                    </span>
                                </div>

                                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                                    <span className="bg-black/70 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded border border-white/10">
                                        {video.resolution}
                                    </span>
                                    <div className="bg-black/70 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
                                        <Clock size={10} />
                                        <span>{video.duration}</span>
                                    </div>
                                </div>

                                {/* Center Play Icon on Hover */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="size-14 rounded-full bg-white/95 text-zinc-900 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-amber-400 transition-all duration-300">
                                        <Play size={22} className="fill-zinc-900 ml-0.5" />
                                    </div>
                                </div>

                                {/* Bottom Metadata tag */}
                                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-zinc-200">
                                    <span className="truncate flex items-center gap-1">
                                        <MapPin size={11} className="text-amber-400 shrink-0" />
                                        {video.locationTag}
                                    </span>
                                    <span className="text-zinc-300 shrink-0 flex items-center gap-1">
                                        <Eye size={11} />
                                        {video.views}
                                    </span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-5 flex flex-col flex-1 justify-between">
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                        <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded uppercase tracking-wider border border-amber-100">
                                            {video.category}
                                        </span>
                                        <span className="text-[11px] text-zinc-400">
                                            {video.date}
                                        </span>
                                    </div>

                                    <h3 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-zinc-700 transition-colors line-clamp-2 leading-snug">
                                        {video.title}
                                    </h3>

                                    <p className="text-zinc-500 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                                        {video.description}
                                    </p>
                                </div>

                                {/* Card Footer & Share */}
                                <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 group-hover:underline">
                                        <Play size={12} className="fill-current" />
                                        Watch Video
                                    </span>

                                    <button
                                        onClick={(e) => handleShare(video, e)}
                                        className="text-zinc-400 hover:text-zinc-700 p-1.5 rounded-md hover:bg-zinc-100 transition-colors"
                                        title="Copy video link"
                                    >
                                        <Share2 size={14} />
                                    </button>
                                    </div>
                                </div>
                            </motion.div>
                            );
                        })}
                    </div>
            </div>

            {/* Notification Toast for Copy */}
            <AnimatePresence>
                {copiedId && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-6 right-6 z-50 bg-zinc-900 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 border border-zinc-700"
                    >
                        <CheckCircle2 size={16} className="text-emerald-400" />
                        <span>Direct Video Link Copied to Clipboard!</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CINEMATIC LIGHTBOX MODAL */}
            <AnimatePresence>
                {activeModalVideo && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveModalVideo(null)}
                    >
                        <motion.div
                            className="relative w-full max-w-5xl bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-2xl my-auto text-zinc-900"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setActiveModalVideo(null)}
                                className="absolute top-4 right-4 z-20 size-10 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all hover:scale-105 cursor-pointer"
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </button>

                            {/* Responsive 16:9 Video Player */}
                            <div className="relative aspect-video w-full bg-black">
                                <iframe
                                    src={
                                        activeModalVideo.videoUrl.includes("/embed/")
                                            ? activeModalVideo.videoUrl
                                            : getYoutubeEmbedUrl(activeModalVideo.youtubeId || activeModalVideo.videoUrl)
                                    }
                                    title={activeModalVideo.title}
                                    className="w-full h-full border-0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />

                                {/* Next / Previous Navigation Overlay Buttons */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigateModal(-1);
                                    }}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20 transition cursor-pointer"
                                    aria-label="Previous video"
                                >
                                    <ChevronLeft size={22} />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigateModal(1);
                                    }}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center border border-white/20 transition cursor-pointer"
                                    aria-label="Next video"
                                >
                                    <ChevronRight size={22} />
                                </button>
                            </div>

                            {/* Video Details & Meta Footer */}
                            <div className="p-6 sm:p-8 max-h-[40vh] overflow-y-auto">
                                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-200">
                                    <div className="flex items-center gap-2">
                                        <span className="bg-amber-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {activeModalVideo.badge}
                                        </span>
                                        <span className="bg-zinc-100 text-zinc-700 text-xs font-medium px-2.5 py-1 rounded-md border border-zinc-200">
                                            {activeModalVideo.resolution}
                                        </span>
                                        <span className="text-xs text-zinc-500">
                                            {activeModalVideo.duration} • {activeModalVideo.date}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 text-xs text-zinc-600">
                                        <MapPin size={13} className="text-amber-600" />
                                        <span>{activeModalVideo.locationTag}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 mt-4 leading-tight">
                                    {activeModalVideo.title}
                                </h3>

                                <p className="text-zinc-600 text-sm mt-3 leading-relaxed">
                                    {activeModalVideo.description}
                                </p>

                                {/* Highlights in Modal */}
                                <div className="mt-6 pt-5 border-t border-zinc-200">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 block mb-3">
                                        Key Highlights In This Video:
                                    </span>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {activeModalVideo.keyHighlights.map((highlight, idx) => (
                                            <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 bg-zinc-50 p-2.5 rounded-lg border border-zinc-200">
                                                <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Call to action row */}
                                <div className="mt-8 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div className="text-xs text-zinc-500">
                                        Interested in this plot or sector? Connect with our dedicated sales desk.
                                    </div>
                                    <div className="flex items-center gap-3 w-full sm:w-auto">
                                        <a
                                            href="/inquiry"
                                            className="w-full sm:w-auto text-center px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                                        >
                                            Inquire For This Plot
                                        </a>
                                        <button
                                            onClick={() => setActiveModalVideo(null)}
                                            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs sm:text-sm font-medium transition-colors border border-zinc-200"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
