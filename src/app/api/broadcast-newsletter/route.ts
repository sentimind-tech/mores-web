import { NextResponse } from "next/server";
import { pb } from "@/lib/pocketbase";

export async function POST(request: Request) {
  try {
    // 1. Ambil ID newsletter yang baru saja dibuat di PocketBase
    const { newsletterId } = await request.json();

    if (!newsletterId) {
      return NextResponse.json({ error: "Newsletter ID is required" }, { status: 400 });
    }

    // 2. Ambil detail data newsletter dari PocketBase berdasarkan ID
    const newsletter = await pb.collection("newsletters").getOne(newsletterId);

    if (!newsletter) {
      return NextResponse.json({ error: "Newsletter record not found" }, { status: 404 });
    }

    // 3. Ambil seluruh list subscriber yang berstatus 'active'
    const activeSubscribers = await pb.collection("subscribers").getFullList({
      filter: 'status = "active"',
    });

    if (activeSubscribers.length === 0) {
      return NextResponse.json({ message: "No active subscribers found." });
    }

    // 💡 MODE TESTING LOKAL AMAN: Filter pengiriman hanya ke email pribadi Anda agar tidak bocor
    const testingSubscribers = activeSubscribers.filter(sub => sub.email === "archive@mores.id");

    if (testingSubscribers.length === 0) {
      return NextResponse.json({ message: "Testing email archive@mores.id is not active or found." });
    }

    console.log(`=== Memulai broadcast ke ${testingSubscribers.length} email pengujian...`);

    // 4. Lakukan perulangan untuk mengirim email satu per satu
    for (const subscriber of testingSubscribers) {
      const unsubscribeUrl = `https://mores.id/id/unsubscribe?email=${encodeURIComponent(subscriber.email)}`;
      const locale = subscriber.language || "en";

      // --- SETUP MULTI-BAHASA KUSTOM SEPADAN DENGAN FIELD POCKETBASE ---

      // 1. Inisialisasi variabel default (Bahasa Inggris)
      let editionName = newsletter.title_en || "Latest Edition";
      let fileFieldName = "pdf_file_en";
      let emailSubject = `[Moresight] New Issue Available: ${editionName}`;
      let issueSub = `Edition: ${editionName}`;
      let greeting = "Hi Folks,";

      // Pastikan mengambil field 'excerpt_en' dari PocketBase
      let bodyP1 = newsletter.excerpt_en || "Our latest comprehensive research and strategic analysis is officially out.";

      let bodyP2 = "Click the button below to instantly view and download the full PDF report.";
      let buttonText = "READ FULL NEWSLETTER (PDF)";
      let regards = "Happy reading,";
      let companyAddress = "Lina Building, 2nd Floor Unit 211<br/>JL. Rasuna Said Kav. B7<br/>South Jakarta 12910 - Indonesia";
      let optInText = "You are receiving this email because you subscribed to Moresight Insights.";
      let unsubscribeSentence = `You can <a href="${unsubscribeUrl}" style="color:#00a2b6; text-decoration:underline; font-weight:bold;">unsubscribe from this list</a>.`;

      // 2. Kondisional jika preferensi subscriber adalah Bahasa Indonesia (id)
      if (locale === "id") {
        editionName = newsletter.title_id || "Edisi Terbaru";
        fileFieldName = "pdf_file_id";
        emailSubject = `[Moresight] Edisi Terbaru Telah Terbit: ${editionName}`;
        issueSub = `Edisi: ${editionName}`;
        greeting = "Halo Rekan Mores,";

        // Pastikan mengambil field 'excerpt_id' dari PocketBase
        bodyP1 = newsletter.excerpt_id || "Riset komprehensif dan analisis strategis terbaru kami resmi dirilis.";

        bodyP2 = "Klik tombol di bawah ini untuk langsung membaca dan mengunduh laporan PDF selengkapnya.";
        buttonText = "BACA NEWSLETTER SELENGKAPNYA (PDF)";
        regards = "Selamat membaca,";
        companyAddress = "Gedung Lina, Lantai 2 Unit 211<br/>JL. Rasuna Said Kav. B7<br/>Jakarta Selatan 12910 - Indonesia";
        optInText = "Anda menerima email ini karena Anda berlangganan Moresight Insights.";
        unsubscribeSentence = `Anda dapat <a href="${unsubscribeUrl}" style="color:#00a2b6; text-decoration:underline; font-weight:bold;">berhenti berlangganan dari daftar ini</a>.`;
      }

      // 3. Generate Link URL PDF Absolute menggunakan nama field dinamis
      const pdfUrl = pb.files.getUrl(newsletter, newsletter[fileFieldName]);

      // --- RENDER HTML TEMPLATE ---
      const emailHtmlContent = `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html dir="ltr" lang="${locale}">
        <head>
          <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"/>
          <meta content="width=device-width" name="viewport"/>
          <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
          <title>${emailSubject}</title>
          <style type="text/css">
            .dynamic-content,
            .dynamic-content p, 
            .dynamic-content span, 
            .dynamic-content font,
            .dynamic-content div {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif !important;
              font-size: 16px !important;
              color: #000000 !important;
              line-height: 160% !important;
              text-align: left !important;
            }
          </style>
        </head>
        <body style="background-color:#ffffff; margin:0; padding:0;">
          <table border="0" width="100%" cellPadding="0" cellSpacing="0" role="presentation" align="center">
            <tbody>
              <tr>
                <td style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif; font-size:1em; line-height:155%; background-color:#ffffff">
                  <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:600px; color:#000000; background-color:#ffffff; line-height:155%">
                    <tbody>
                      <tr>
                        <td style="padding:40px 20px 20px 20px">
                          <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                            <tbody>
                              <tr>
                                <td align="left">
                                  <a href="${pdfUrl}" target="_blank">
                                    <img alt="New Newsletter Edition" src="https://resend-attachments.s3.amazonaws.com/dff54900-97fe-44c8-8936-b545294244a8" style="display:block; max-width:100%; border-radius:8px; height:auto; border:none;" width="100%"/>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin-top:20px;">
                            <tbody>
                              <tr>
                                <td align="center"><img alt="" height="98" src="https://resend-attachments.s3.amazonaws.com/831532fa-ee3e-448b-a7ba-143571b171c7" style="display:block; max-width:100%; height:auto" width="364"/></td>
                              </tr>
                            </tbody>
                          </table>
                          <h1 style="margin:0; padding:0; font-size:28px; line-height:140%; padding-top:0.5em; font-weight:600; text-align:center;">
                            <span style="color:#00a2b6"><strong>NEW ISSUE</strong></span><strong> AVAILABLE</strong>
                          </h1>
                          <p style="margin:0 0 20px 0; padding:0; font-size:16px; text-align:center; color:#555555; font-style:italic;">${issueSub}</p>
                          <p style="margin:0; padding:0; font-size:16px; padding-top:0.5em; padding-bottom:0.5em; text-align:left; color:#000000;">${greeting}</p>
                          
                          <div class="dynamic-content" style="margin:0; padding:0; padding-top:0.5em; padding-bottom:0.5em;">
                            ${bodyP1}
                          </div>

                          <p style="margin:0; padding:0; font-size:16px; padding-top:0.5em; padding-bottom:1.5em; text-align:left; color:#000000;">${bodyP2}</p>
                          <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin:10px auto 30px auto;">
                            <tbody>
                              <tr>
                                <td align="center" bgcolor="#00A2B6" style="border-radius:4px;">
                                  <a href="${pdfUrl}" target="_blank" style="font-family:sans-serif; font-size:16px; color:#ffffff; text-decoration:none; font-weight:bold; padding:12px 36px; display:inline-block; letter-spacing:0.5px;">${buttonText}</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <p style="margin:20px 0 0 0; padding:0; font-size:16px; text-align:left; color:#000000;">${regards}</p>
                          <p style="margin:0; padding:0; font-size:16px; text-align:left;"><span style="color:#00a2b6"><strong>Mores </strong></span><strong>Research</strong></p>
                          <hr style="width:100%; border:none; border-top:2px solid #eaeaea; margin:40px 0 20px 0;"/>
                          
                          <!-- ==================================================================== -->
                          <!-- 🚀 LAYOUT SOSIAL MEDIA SINKRON DENGAN TEMPLATE YANG ANDA BERIKAN -->
                          <!-- ==================================================================== -->
                          <table width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                            <tbody>
                              <tr>
                                <td width="60%" align="left" valign="top" style="font-size:14px; line-height:170%; color:#000000;">
                                  <span style="color:#00a2b6"><strong>MORE</strong></span><strong>SIGHT</strong><br/>Mores Research by Mores Strategics<br/>
                                </td>
                                <td width="40%" align="left" valign="top">
                                  <p style="margin:0; padding:0; font-size:1em; padding-top:0.5em; padding-bottom:0.5em; text-align:left; color:#000000;">
                                    Follow Us
                                  </p>
                                  <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tbody>
                                      <tr>
                                        <td>
                                          <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                            <tbody style="width:100%">
                                              <tr style="width:100%">
                                                <td data-id="__react-email-column"></td>
                                                <td align="center" data-id="__react-email-column" style="padding-right:8px; width:32px; box-sizing:content-box">
                                                  <a href="https://www.linkedin.com/company/mores-id/" rel="noopener noreferrer" target="_blank">
                                                    <img alt="LinkedIn" height="32" src="https://resend.com/static/email/social-linkedin.png" style="display:block; outline:none; border:none; text-decoration:none" width="32"/>
                                                  </a>
                                                </td>
                                                <td align="center" data-id="__react-email-column" style="padding-right:8px; width:32px; box-sizing:content-box">
                                                  <a href="https://x.com/mores_id" rel="noopener noreferrer" target="_blank">
                                                    <img alt="X (former Twitter)" height="32" src="https://resend.com/static/email/social-x.png" style="display:block; outline:none; border:none; text-decoration:none" width="32"/>
                                                  </a>
                                                </td>
                                                <td align="center" data-id="__react-email-column" style="padding-right:8px; width:32px; box-sizing:content-box">
                                                  <a href="https://www.instagram.com/moresstrategics?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==" rel="noopener noreferrer" target="_blank">
                                                    <img alt="Instagram" height="32" src="https://resend.com/static/email/social-instagram.png" style="display:block; outline:none; border:none; text-decoration:none" width="32"/>
                                                  </a>
                                                </td>
                                                <td align="center" data-id="__react-email-column" style="padding-right:8px; width:32px; box-sizing:content-box">
                                                  <a href="https://youtube.com/@moresstrategics?si=utakL4ups1IAoTVm" rel="noopener noreferrer" target="_blank">
                                                    <img alt="YouTube" height="32" src="https://resend.com/static/email/social-youtube.png" style="display:block; outline:none; border:none; text-decoration:none" width="32"/>
                                                  </a>
                                                </td>
                                                <td align="center" data-id="__react-email-column" style="padding-right:8px; width:32px; box-sizing:content-box">
                                                  <a href="https://www.tiktok.com/@mores.strategics?is_from_webapp=1&amp;sender_device=pc" rel="noopener noreferrer" target="_blank">
                                                    <img alt="TikTok" height="32" src="https://resend.com/static/email/social-tiktok.png" style="display:block; outline:none; border:none; text-decoration:none" width="32"/>
                                                  </a>
                                                </td>
                                                <td data-id="__react-email-column"></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!-- ==================================================================== -->

                          <p style="margin:30px 0 20px 0; padding:0; font-size:13px; line-height:150%; color:#555555; text-align:left;">
                            <span style="color:#00a2b6"><strong>Mores </strong></span><strong>Strategics</strong><br/>${companyAddress}
                          </p>
                          <p style="margin:0; padding:0; font-size:13px; line-height:150%; color:#555555; text-align:left;">${optInText}<br/><br/>${unsubscribeSentence}</p>
                          <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin-top:30px;">
                            <tbody>
                              <tr>
                                <td align="left"><img alt="" src="https://resend-attachments.s3.amazonaws.com/44e7f883-f036-4afe-b53b-5ee14d21d53b" style="display:block; max-width:100%; border-radius:8px; height:auto" width="100%"/></td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>
      `;

      // 5. Eksekusi Pengiriman ke Resend API
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer re_9i19WDuQ_2m4gBkaMdRPwZ94FXS1yzvKx`,
        },
        body: JSON.stringify({
          from: "Mores Research <newsletter@mores.id>",
          to: [subscriber.email],
          subject: emailSubject,
          html: emailHtmlContent,
        }),
      });
    }

    return NextResponse.json({ success: true, message: "Broadcast testing completed!" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}