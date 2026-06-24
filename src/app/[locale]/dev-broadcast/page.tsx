"use client";

import React, { useState, useEffect } from "react";
import { pb } from "@/lib/pocketbase";

export default function DevBroadcastPage() {
    const [newsletters, setNewsletters] = useState<any[]>([]);
    const [selectedId, setSelectedId] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // 1. Tarik daftar edisi newsletter langsung dari PocketBase lokal saat halaman dibuka
    useEffect(() => {
        async function fetchNewsletters() {
            try {
                // 💡 SOLUSI: Menambahkan { requestKey: null } untuk mematikan auto-cancellation PocketBase
                const records = await pb.collection("newsletters").getFullList({
                    sort: "-created",
                    requestKey: null // <-- Menonaktifkan pelacakan pembatalan otomatis SDK
                });

                setNewsletters(records);
                if (records.length > 0) setSelectedId(records[0].id);
            } catch (err: any) {
                // Abaikan jika error disebabkan oleh pembatalan manual agar tidak memunculkan alert palsu
                if (!err.isAbort) {
                    setMessage("Gagal mengambil data newsletter: " + err.message);
                }
            }
        }
        fetchNewsletters();
    }, []);

    // 2. Handler untuk menembak API Route broadcast Next.js kita
    const handleStartBroadcast = async () => {
        if (!selectedId) return;
        setLoading(true);
        setMessage("");

        try {
            const response = await fetch("/api/broadcast-newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ newsletterId: selectedId }),
            });

            const result = await response.json();
            if (response.ok) {
                setMessage(`Sukses! ${result.message || "Email testing berhasil dikirim."}`);
            } else {
                setMessage(`Gagal: ${result.error}`);
            }
        } catch (err: any) {
            setMessage("Terjadi error: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-xl font-bold text-gray-800 mb-2 uppercase tracking-wide">
                    📢 Moresight Developer Tool
                </h1>
                <p className="text-sm text-gray-500 mb-6">
                    Gunakan halaman internal ini untuk mensimulasikan broadcast notifikasi email newsletter dari database lokal.
                </p>

                {newsletters.length === 0 ? (
                    <p className="text-amber-600 bg-amber-50 p-3 rounded text-sm">
                        Belum ada data di koleksi <strong>newsletters</strong> PocketBase Anda. Silakan isi data di PocketBase terlebih dahulu.
                    </p>
                ) : (
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Pilih Edisi Newsletter:
                            </label>
                            <select
                                value={selectedId}
                                onChange={(e) => setSelectedId(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-300 rounded p-2 text-black focus:outline-none focus:ring-2 focus:ring-[#00A2B6]"
                            >
                                {newsletters.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.title} ({item.id})
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            onClick={handleStartBroadcast}
                            disabled={loading}
                            className="w-full h-[42px] bg-[#00A2B6] text-white font-semibold rounded hover:bg-[#008b9c] transition-colors disabled:opacity-50 mt-2"
                        >
                            {loading ? "Sending..." : "LAUNCH BROADCAST TEST"}
                        </button>
                    </div>
                )}

                {message && (
                    <div className="mt-6 p-3 bg-gray-50 border border-gray-200 rounded text-sm text-gray-700 break-words font-mono">
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
}