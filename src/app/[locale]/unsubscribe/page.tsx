"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { pb } from "@/lib/pocketbase";

// 💡 LOGIKA UTAMA DIPIZAHKAN AGAR BISA DIBUNGKUS SUSPENSE
function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [status, setStatus] = useState("processing");

  useEffect(() => {
    const processUnsubscribe = async () => {
      if (!email) {
        setStatus("error");
        return;
      }

      console.log("Mencoba unsubscribe untuk email:", email);

      try {
        // Cari data subscriber berdasarkan email di PocketBase
        const record = await pb.collection("subscribers").getFirstListItem(`email='${email.toLowerCase()}'`);
        
        if (record) {
          // Ubah status menjadi inactive
          await pb.collection("subscribers").update(record.id, {
            status: "inactive",
          });
          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("Unsubscribe error:", error);
        setStatus("error");
      }
    };

    processUnsubscribe();
  }, [email]);

  return (
    <div className="max-w-md w-full p-8 border border-gray-200 rounded-lg shadow-sm bg-white">
      <h2 className="text-[24px] font-semibold text-black mb-4 uppercase tracking-wider">
        Mores Strategics
      </h2>
      
      {status === "processing" && (
        <p className="text-gray-500">Processing your unsubscribe request...</p>
      )}
      
      {status === "success" && (
        <div>
          <p className="text-green-600 font-medium mb-2">Unsubscribed Successfully</p>
          <p className="text-gray-600 text-[14px]">
            Your email <strong>{email}</strong> has been removed from our Moresight newsletter list.
          </p>
        </div>
      )}
      
      {status === "error" && (
        <div>
          <p className="text-red-500 font-medium mb-2">Unsubscribe Failed</p>
          <p className="text-gray-600 text-[14px]">
            Invalid email link or record not found. Please contact support@mores.id if you continue to receive emails.
          </p>
        </div>
      )}
    </div>
  );
}

// 🚀 WRAPPER UTAMA YANG DI-EXPORT
export default function UnsubscribePage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center font-sans px-4 text-center">
      {/* 💡 WAJIB: Membungkus Client Component yang membaca searchParams dengan Suspense */}
      <Suspense fallback={<p className="text-gray-500">Loading...</p>}>
        <UnsubscribeContent />
      </Suspense>
    </div>
  );
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";