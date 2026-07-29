"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
// 💡 IMPORT MODAL SUBSCRIPTION DARI FOLDER DETAIL
import { NewsletterSubscribeModal } from "@/components/Section/MoresightDetailPage/NewsletterSubscribeModal";

type NewsletterDetailContentProps = {
    item: {
        id: string;
        cover_image: string;
        authors: string;
        publish_date: string;
        reading_time: number;
        pdf_file_en: string;
        pdf_file_id: string;
        content: string;
    };
    locale: string;
};

export const NewsletterDetailContent = ({ item, locale }: NewsletterDetailContentProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // 💡 STATE UNTUK KONTROL POP-UP MODAL SUBSCRIPTION
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(locale === "id" ? "id-ID" : "en-US", options);
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Mores Strategics Newsletter",
                    url: window.location.href,
                });
            } catch (err) {
                console.log("Error sharing:", err);
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert(locale === "id" ? "Tautan berhasil disalin!" : "Link copied to clipboard!");
        }
    };

    // 💡 FUNGSI PARALEL: Membuka Preview PDF di Tab Baru & Memunculkan Modal Subscribe
    const handleDownloadClick = async (e: React.MouseEvent<HTMLAnchorElement>, pdfUrl: string) => {
        e.preventDefault(); // Menghentikan aksi download langsung bawaan HTML
        if (!pdfUrl) return;

        setIsDropdownOpen(false); // Tutup dropdown menu pilihan bahasa
        setIsModalOpen(true);     // LANGSUNG MUNCULKAN MODAL SUBSCRIPTION DI TAB INI

        try {
            // Mengunduh file PDF secara background dalam bentuk Blob data
            const response = await fetch(pdfUrl);
            const blob = await response.blob();
            
            // 🚀 MENGUBAH TIPE BLOB: Menegaskan application/pdf agar browser membuka preview, bukan mengunduh
            const pdfBlob = new Blob([blob], { type: "application/pdf" });
            
            // Membuat URL lokal sementara untuk preview
            const localUrl = window.URL.createObjectURL(pdfBlob);
            
            // Membuka tab baru untuk menampilkan preview PDF asli
            window.open(localUrl, "_blank");
            
        } catch (error) {
            console.error("Preview failed using fetch blob, rolling back to direct tab:", error);
            // Fallback aman jika terjadi masalah CORS di localhost, langsung buka URL asli PocketBase di tab baru
            window.open(pdfUrl, "_blank");
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        /* 💡 PERBAIKAN: Mengubah pt-8 menjadi pt-16 (bisa diganti pt-20 jika ingin lebih renggang) untuk mengatasi layout mepet di image_bb19bc.jpg */
        <section className="w-full bg-white pt-20 pb-16">
            {/* 💡 DIUBAH: px-4 diganti ke section-padding-x untuk mobile, dan diimbangi kembali dengan md:px-8 dst di desktop */}
            <div className="max-w-[1280px] mx-auto section-padding-x md:px-8 lg:px-12 xl:px-16 w-full flex flex-col">

                {/* ================= BAR TOOLBAR METADATA & ACTIONS ================= */}
                <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-y-6 pb-5 border-b-[1.5px] border-[#B6B6B6] mb-12">

                    {/* SISI KIRI: METADATA */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-x-16 gap-y-2">
                        <div className="max-w-[273px] font-sans text-[12px] leading-[15px] text-black font-normal">
                            By <span className="underline decoration-gray-400 underline-offset-2">{item.authors}</span>
                        </div>

                        <div className="flex flex-col gap-[2px] font-sans text-[12px] leading-[15px] font-normal">
                            <span className="text-black">{formatDate(item.publish_date)}</span>
                            <span className="text-[#00A2B6]">{item.reading_time} min read</span>
                        </div>
                    </div>

                    {/* SISI KANAN: SHARE & DOWNLOAD DROPDOWN */}
                    <div className="flex items-center gap-x-16 self-end md:self-auto">

                        {/* 1. TOMBOL SHARE */}
                        <button
                            onClick={handleShare}
                            className="flex flex-col items-center gap-y-1 group cursor-pointer shrink-0"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="text-black group-hover:text-[#00A2B6] transition-colors"
                            >
                                <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2.5" />
                                <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2.5" />
                                <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2.5" />
                                <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                            <span className="font-sans text-[10px] leading-[12px] text-black text-center group-hover:text-[#00A2B6] transition-colors">
                                Share
                            </span>
                        </button>

                        {/* 2. TOMBOL DOWNLOAD DROPDOWN */}
                        <div className="relative inline-block text-left mb-[3px]" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-[182px] pb-[6px] border-b-[1.5px] border-[#B6B6B6] flex items-center justify-between text-black hover:border-black transition-colors cursor-pointer"
                            >
                                <svg
                                    className="w-5 h-5 text-black"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>

                                <span className="font-sans text-[15px] leading-[24px] font-normal tracking-wide">
                                    Download
                                </span>

                                <svg
                                    className={`w-[18px] h-[18px] text-[#00A2B6] transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Menu Elemen Pilihan Bahasa Dropdown */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-[182px] bg-white border border-gray-200 shadow-md z-30 animate-fadeIn">
                                    <div className="py-1 font-sans text-[13px]">
                                        <a
                                            href={item.pdf_file_en || "#"}
                                            onClick={(e) => handleDownloadClick(e, item.pdf_file_en)}
                                            className={`block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-[#00A2B6] transition-colors ${!item.pdf_file_en ? "pointer-events-none opacity-30" : ""}`}
                                        >
                                            English
                                        </a>
                                        <a
                                            href={item.pdf_file_id || "#"}
                                            onClick={(e) => handleDownloadClick(e, item.pdf_file_id)}
                                            className={`block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-[#00A2B6] transition-colors ${!item.pdf_file_id ? "pointer-events-none opacity-30" : ""}`}
                                        >
                                            Bahasa
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                </div>

                {/* ================= GRID ARTIKEL UTAMA ================= */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-x-12 gap-y-8 items-start">
                    {/* Kolom Kiri: Sticky Cover */}
                    <div className="lg:sticky lg:top-[120px] w-[169px] h-[239px] bg-gray-50 shadow-sm overflow-hidden shrink-0 mx-auto lg:mx-0">
                        <Image
                            src={item.cover_image}
                            alt="Newsletter Cover"
                            width={169}
                            height={239}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>

                    {/* Kolom Kanan: Isi RichText */}
                    <div className="w-full font-sans text-[16px] leading-[26px] text-black prose max-w-none">
                        <div
                            dangerouslySetInnerHTML={{ __html: item.content }}
                            className="moresight-rich-text"
                        />
                    </div>
                </div>

            </div>

            {/* 💡 SEMATKAN MODAL SUBSCRIPTION DI BAGIAN PALING BAWAH JSX */}
            <NewsletterSubscribeModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </section>
    );
};