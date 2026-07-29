"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { pb } from "@/lib/pocketbase";
import { useTranslations, useLocale } from "next-intl"; // 💡 IMPOR useLocale UNTUK MULTI-BAHASA

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export const NewsletterSubscribeModal = ({ isOpen, onClose }: Props) => {
    const t = useTranslations("NewsletterModal"); // 💡 Inisialisasi terjemahan skop NewsletterModal
    const currentLocale = useLocale(); // 💡 Mendapatkan bahasa sistem aktif saat ini ("en" atau "id")
    const [email, setEmail] = useState("");

    // 💡 STATE BARU: Menyimpan bahasa pilihan user, default otomatis mengikuti sistem halaman saat ini
    const [selectedLocale, setSelectedLocale] = useState(currentLocale);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    
    // 💡 STATE BARU UTAL: Menangani pesan error validasi & duplikasi secara inline
    const [errorMsg, setErrorMsg] = useState("");

    // Sinkronisasi state jika di tengah jalan bahasa sistem utama berubah
    useEffect(() => {
        setSelectedLocale(currentLocale);
    }, [currentLocale]);

    // Reset pesan error setiap kali modal ditutup atau dibuka kembali
    useEffect(() => {
        if (!isOpen) {
            setEmail("");
            setErrorMsg("");
            setIsSubmitted(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg(""); // Bersihkan error lama setiap kali form di-submit ulang
        
        // Validasi format email dasar
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const cleanEmail = email.trim().toLowerCase();

        if (!email || !emailRegex.test(cleanEmail)) {
            // 💡 SESUAI KEY JSON: Menggunakan validationError
            setErrorMsg(t("validationError") || "Please enter a valid email address."); 
            return;
        }

        setLoading(true);
        try {
            // 🔍 1. Periksa ketersediaan email terlebih dahulu di PocketBase
            const existingRecord = await pb
                .collection("subscribers")
                .getFirstListItem(`email="${cleanEmail}"`)
                .catch(() => null);

            // ⛔ KONDISI A: Email sudah ada DAN statusnya sudah Aktif
            if (existingRecord && existingRecord.status === "active") {
                // 💡 SESUAI KEY JSON: Menggunakan duplicateError
                setErrorMsg(t("duplicateError") || "This email is already subscribed."); 
                setLoading(false);
                return;
            }

            // 🔄 KONDISI B: Email ada tapi statusnya Inactive
            if (existingRecord && existingRecord.status === "inactive") {
                await pb.collection("subscribers").update(existingRecord.id, {
                    status: "active",
                    language: selectedLocale,
                });
            } else {
                // ✨ KONDISI C: Email benar-benar baru
                await pb.collection("subscribers").create({
                    email: cleanEmail,
                    status: "active",
                    language: selectedLocale,
                });
            }

            // 🚀 2. TEMBAK API RESEND
            await fetch("/api/send-thankyou", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    email: cleanEmail, 
                    locale: selectedLocale 
                }),
            });

            setIsSubmitted(true);
        } catch (error: any) {
            console.error("Subscription failed:", error);
            
            if (error?.status === 400 && error.message.includes("email already exists")) {
                // 💡 SESUAI KEY JSON: Menggunakan duplicateError
                setErrorMsg(t("duplicateError") || "This email is already subscribed.");
            } else {
                const baseErrorText = t("generalError") || "Something went wrong.";
                setErrorMsg(`${baseErrorText} (${error.message})`);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 animate-fade-in">
            {/* WRAPPER RELATIF UTAMA */}
            <div className="relative w-full max-w-[638px]">

                {/* TOMBOL "X" / TUTUP MODAL */}
                <button
                    onClick={onClose}
                    className="absolute -top-4 -right-1 md:-top-[18px] md:-right-[33px] z-50 flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0 select-none w-[32px] h-[32px]"
                    aria-label="Close Modal"
                >
                    <Image
                        src="/images/btn-close.svg"
                        alt="Close Button"
                        width={32}
                        height={32}
                        priority
                        className="w-full h-full object-contain"
                    />
                </button>

                {/* KOTAK BINGKAI UTAMA MODAL */}
                <div
                    className={`bg-white rounded-[10px] w-full relative p-8 md:p-10 flex flex-col items-center justify-center transition-all duration-300 ${isSubmitted ? "h-auto min-h-[372px]" : "h-auto min-h-[440px]"
                        }`}
                >

                    {/* ARTWORK UTAMA: SVG ILLUSTRATION */}
                    <div className="relative w-full max-w-[540px] h-[140px] flex items-center justify-center mb-6 select-none pointer-events-none">
                        {!isSubmitted ? (
                            <Image
                                src="/images/il-subscribe.svg"
                                alt="Subscribe Illustration"
                                width={540}
                                height={140}
                                priority
                                className="w-full h-full object-contain"
                            />
                        ) : (
                            <Image
                                src="/images/il-subscribe-success.svg"
                                alt="Subscribe Success Illustration"
                                width={540}
                                height={140}
                                priority
                                className="w-full h-full object-contain"
                            />
                        )}
                    </div>

                    {/* KONTEN TEKS & FORM INTERAKSI */}
                    {!isSubmitted ? (
                        <div className="w-full flex flex-col items-center text-center">
                            <h3 className="font-supplymono text-[24px] md:text-[28px] font-normal leading-[40px] tracking-[-0.02em] text-[#00A2B6] uppercase mb-2">
                                {t("title")}
                            </h3>
                            <p className="font-inter text-[15px] md:text-[16px] text-black mb-8">
                                {t("subtitle")}
                            </p>

                            {/* 💡 SINKRONISASI LAYOUT: KOLOM EMAIL & DROPDOWN DENGAN DIMENSI PANJANG/LEBAR YANG SAMA */}
                            <form onSubmit={handleSubmit} className="w-full max-w-[580px] flex flex-col items-center gap-5">

                                {/* 🚀 Menggunakan Grid agar lebar kolom Email dan Dropdown Bahasa terbagi rata (50-50) */}
                                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 items-start justify-center">

                                    {/* Sisi Kiri: Tempat Input Email */}
                                    {/* 💡 DITAMBAHKAN: Kondisi jika errorMsg ada, border box ini akan otomatis berubah menjadi merah keras */}
                                    <div className={`w-full h-[42px] bg-[#EBEBEB] flex items-center px-4 rounded-sm transition-all duration-200 ${
                                        errorMsg ? "border border-red-500 ring-1 ring-red-500 bg-red-50/10" : ""
                                    }`}>
                                        <div className="w-5 h-5 mr-3 flex items-center justify-center flex-shrink-0 select-none pointer-events-none">
                                            <Image
                                                src="/images/ic-mail.svg"
                                                alt="Mail Icon"
                                                width={20}
                                                height={20}
                                                className="object-contain w-full h-full"
                                            />
                                        </div>
                                        <input
                                            type="email"
                                            required
                                            placeholder={t("placeholder")}
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                if (errorMsg) setErrorMsg(""); // Hapus indikasi merah saat user mengetik ulang
                                            }}
                                            className="w-full bg-transparent text-black font-inter text-[15px] focus:outline-none placeholder-[#ACACAC]"
                                        />
                                    </div>

                                    {/* Sisi Kanan: Dropdown Pilihan Bahasa (Lebar Sama Panjang dengan Email) */}
                                    <div className="w-full h-[42px] bg-[#EBEBEB] flex items-center px-[10px] rounded-sm relative">
                                        <select
                                            value={selectedLocale}
                                            onChange={(e) => setSelectedLocale(e.target.value)}
                                            className="w-full bg-transparent text-[#ACACAC] font-inter text-[16px] leading-[24px] focus:outline-none appearance-none pr-10 cursor-pointer z-10 font-normal"
                                        >
                                            <option value="en" className="text-black">English</option>
                                            <option value="id" className="text-black">Indonesia</option>
                                        </select>

                                        {/* Ikon Panah Dropdown Sesuai Ukuran Figma (teenyicons:down-outline) */}
                                        <div
                                            style={{ width: '22.76px', height: '17.97px' }}
                                            className="absolute right-[14px] top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none z-0"
                                        >
                                            <svg width="100%" height="100%" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 6L11.5 13L19 6" stroke="#ACACAC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>

                                </div>

                                {/* 💡 BLOK BARU: Menampilkan Pesan Teks Error Di Bawah Input Field */}
                                {errorMsg && (
                                    <div className="w-full text-left text-red-500 font-inter text-[13px] mt-[-8px] px-1 animate-fade-in font-medium">
                                        {errorMsg}
                                    </div>
                                )}

                                {/* Bagian Bawah Tengah: Tombol Submit Simetris */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="h-[42px] px-12 bg-[#00A2B6] text-white font-supplymono text-[16px] uppercase tracking-wider hover:bg-[#008b9c] transition-colors disabled:opacity-50 flex-shrink-0 mx-auto rounded-sm mt-2"
                                >
                                    {loading ? "..." : t("buttonSubmit")}
                                </button>

                            </form>
                        </div>
                    ) : (
                        <div className="w-full flex flex-col items-center text-center animate-fade-in">
                            <h3 className="font-supplymono text-[24px] md:text-[28px] font-normal leading-[40px] tracking-[-0.02em] text-[#00A2B6] uppercase mb-2">
                                {t("successTitle")}
                            </h3>
                            <p className="font-inter text-[16px] md:text-[18px] text-black">
                                {t("successSubtitle")}
                            </p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};