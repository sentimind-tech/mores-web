import { pb } from "@/lib/pocketbase";
import { TMoresightItem } from "@/components/Section/MoresightPage/MoresightList/MoresightCard";

export type TNewsletterParams = {
  sortBy?: string;
  keyword?: string;
};

// Fungsi untuk mengambil list data dengan fitur filter, pencarian, dan paginasi
async function getNewsletterList(
  params: TNewsletterParams = {},
  page: number = 1,
  perPage: number = 3 // Kita set default 3 data per halaman sesuai spesifikasi awal UI Anda
) {
  try {
    let queryParams: any = {
      sort: "-publish_date", // Default: Edisi terbaru
      requestKey: null,
    };

    // Logika pengurutan dropdown filter
    if (params.sortBy === "older") {
      queryParams.sort = "publish_date";
    }

    let filters: string[] = [];

    // Logika pencarian kata kunci (Mendukung pencarian di judul EN, ID, dan nomor Volume)
    if (params.keyword) {
      filters.push(`(title_en ~ "${params.keyword}" || title_id ~ "${params.keyword}" || volume ~ "${params.keyword}")`);
    }

    if (filters.length > 0) {
      queryParams.filter = filters.join(" && ");
    }

    let response = await pb
      .collection("newsletters")
      .getList<TMoresightItem>(page, perPage, queryParams);

    return response;
  } catch (error) {
    console.error("Error fetching newsletters:", error);
    return null;
  }
}

// 💡 SEKARANG: Fungsi menerima parameter kedua `locale` dengan default "en"
async function getNewsletterDetail(slug: string, locale: string = "en") {
  try {
    // Tentukan kolom database yang akan dicocokkan berdasarkan bahasa aktif
    const slugField = locale === "id" ? "slug_id" : "slug_en";

    // Kueri dinamis diarahkan ke kolom slugField sesuai bahasa saat ini
    let response = await pb
      .collection("newsletters")
      .getFirstListItem<TMoresightItem>(`${slugField}="${slug}"`, {
        requestKey: null,
      });
    return response;
  } catch (error) {
    console.error(`Error fetching newsletter detail for ${slug}:`, error);
    return null;
  }
}

// Fungsi untuk mengambil rekomendasi newsletter terbaru (mengecualikan edisi aktif)
async function getLatestNewslettersExcept(currentId: string, limit: number = 2) {
  try {
    let queryParams: any = {
      sort: "-publish_date",
      filter: `id != "${currentId}"`, // Kunci penyaringan: mengabaikan ID newsletter aktif
      requestKey: null,
    };

    let response = await pb
      .collection("newsletters")
      .getList<TMoresightItem>(1, limit, queryParams);

    return response;
  } catch (error) {
    console.error("Error fetching latest newsletters recommendation:", error);
    return null;
  }
}

// Fungsi mengambil 1 data newsletter terbaru untuk seksi teaser halaman Research
async function getLatestSingleNewsletter() {
  try {
    const response = await pb
      .collection("newsletters")
      .getList<TMoresightItem>(1, 1, {
        sort: "-publish_date",
        requestKey: null,
      });
    return response.items[0] || null;
  } catch (error) {
    console.error("Error fetching latest single newsletter:", error);
    return null;
  }
}

export { getNewsletterList, getNewsletterDetail, getLatestNewslettersExcept, getLatestSingleNewsletter };