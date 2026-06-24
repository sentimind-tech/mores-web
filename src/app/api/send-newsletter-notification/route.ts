import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // 🚀 1. Ambil data dinamis edisi newsletter yang baru di-upload dari PocketBase
    const { 
      emailPenerima, 
      editionTitle,      // Contoh: "June 2026 — Market Insights & Research"
      pdfUrl,            // Contoh: "https://mores.id/api/files/collections/..."
      excerptEn,         // Ringkasan bahasa Inggris dari PocketBase
      excerptId,         // Ringkasan bahasa Indonesia dari PocketBase
      locale = "en" 
    } = await request.json();

    if (!emailPenerima || !pdfUrl) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Amankan link unsubscribe bawaan sistem
    const unsubscribeUrl = `https://mores.id/id/unsubscribe?email=${encodeURIComponent(emailPenerima)}`;

    // 🚀 2. Teks Dasar (Default: English)
    let emailSubject = `[Moresight] New Issue Available: ${editionTitle}`;
    let issueSub = `Edition: ${editionTitle}`;
    let greeting = "Hi Folks,";
    let bodyP1 = excerptEn || "Our latest comprehensive research and strategic analysis is officially out.";
    let bodyP2 = "Click the button below to instantly view and download the full PDF report.";
    let buttonText = "READ FULL NEWSLETTER (PDF)";
    let regards = "Happy reading,";
    let companyAddress = "Lina Building, 2nd Floor Unit 211<br/>JL. Rasuna Said Kav. B7<br/>South Jakarta 12910 - Indonesia";
    let optInText = "You are receiving this email because you subscribed to Moresight Insights.";
    let unsubscribeSentence = `You can <a href="${unsubscribeUrl}" style="color:#00a2b6; text-decoration:underline; font-weight:bold;">unsubscribe from this list</a>.`;

    // 💡 JIKA PREFERENSI USER ADALAH BAHASA INDONESIA, TIMPA VARIABEL
    if (locale === "id") {
      emailSubject = `[Moresight] Edisi Terbaru Telah Terbit: ${editionTitle}`;
      issueSub = `Edisi: ${editionTitle}`;
      greeting = "Halo Rekan Mores,";
      bodyP1 = excerptId || "Riset komprehensif dan analisis strategis terbaru kami resmi dirilis.";
      bodyP2 = "Klik tombol di bawah ini untuk langsung membaca dan mengunduh laporan PDF selengkapnya.";
      buttonText = "BACA NEWSLETTER SELENGKAPNYA (PDF)";
      regards = "Selamat membaca,";
      companyAddress = "Gedung Lina, Lantai 2 Unit 211<br/>JL. Rasuna Said Kav. B7<br/>Jakarta Selatan 12910 - Indonesia";
      optInText = "Anda menerima email ini karena Anda berlangganan Moresight Insights.";
      unsubscribeSentence = `Anda dapat <a href="${unsubscribeUrl}" style="color:#00a2b6; text-decoration:underline; font-weight:bold;">berhenti berlangganan dari daftar ini</a>.`;
    }

    // 🚀 3. Suntikkan Variabel Dinamis & Excerpt PocketBase ke dalam HTML
    const emailHtmlContent = `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html dir="ltr" lang="${locale}">
      <head>
        <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"/>
        <meta content="width=device-width" name="viewport"/>
        <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
        <title>${emailSubject}</title>
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
                        <p style="margin:0 0 20px 0; padding:0; font-size:16px; text-align:center; color:#555555; font-style:italic;">
                          ${issueSub}
                        </p>
                        
                        <p style="margin:0; padding:0; font-size:16px; padding-top:0.5em; padding-bottom:0.5em; text-align:left; color:#000000;">${greeting}</p>
                        
                        <p style="margin:0; padding:0; font-size:16px; padding-top:0.5em; padding-bottom:0.5em; text-align:left; color:#000000; line-height:160%;">
                          ${bodyP1}
                        </p>
                        
                        <p style="margin:0; padding:0; font-size:16px; padding-top:0.5em; padding-bottom:1.5em; text-align:left; color:#000000;">
                          ${bodyP2}
                        </p>

                        <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin:10px auto 30px auto;">
                          <tbody>
                            <tr>
                              <td align="center" bgcolor="#00A2B6" style="border-radius:4px;">
                                <a href="${pdfUrl}" target="_blank" style="font-family:sans-serif; font-size:16px; color:#ffffff; text-decoration:none; font-weight:bold; padding:12px 36px; display:inline-block; letter-spacing:0.5px;">
                                  ${buttonText}
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        
                        <p style="margin:20px 0 0 0; padding:0; font-size:16px; text-align:left; color:#000000;">${regards}</p>
                        <p style="margin:0; padding:0; font-size:16px; text-align:left;"><span style="color:#00a2b6"><strong>Mores </strong></span><strong>Research</strong></p>
                        
                        <hr style="width:100%; border:none; border-top:2px solid #eaeaea; margin:40px 0 20px 0执行;"/>

                        <table width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                          <tbody>
                            <tr>
                              <td width="60%" align="left" valign="top" style="font-size:14px; line-height:170%; color:#000000;">
                                <span style="color:#00a2b6"><strong>MORE</strong></span><strong>SIGHT</strong><br/>
                                Mores Research by Mores Strategics<br/>
                              </td>
                              <td width="40%" align="left" valign="top">
                                <p style="margin:0 0 8px 0; padding:0; font-size:14px; text-align:left; color:#000000;">Follow Us</p>
                                <table border="0" cellPadding="0" cellSpacing="0" role="presentation">
                                  <tbody>
                                    <tr>
                                      <td style="padding-right:8px; width:32px;"><a href="https://www.linkedin.com/company/mores-id/" target="_blank"><img alt="LinkedIn" height="32" src="https://resend.com/static/email/social-linkedin.png" width="32"/></a></td>
                                      <td style="padding-right:8px; width:32px;"><a href="https://x.com/mores_id" target="_blank"><img alt="X" height="32" src="https://resend.com/static/email/social-x.png" width="32"/></a></td>
                                      <td style="padding-right:8px; width:32px;"><a href="https://www.instagram.com/moresstrategics" target="_blank"><img alt="Instagram" height="32" src="https://resend.com/static/email/social-instagram.png" width="32"/></a></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <p style="margin:30px 0 20px 0; padding:0; font-size:13px; line-height:150%; color:#555555; text-align:left;">
                          <span style="color:#00a2b6"><strong>Mores </strong></span><strong>Strategics</strong><br/>
                          ${companyAddress}
                        </p>
                        <p style="margin:0; padding:0; font-size:13px; line-height:150%; color:#555555; text-align:left;">
                          ${optInText}<br/><br/>
                          ${unsubscribeSentence}
                        </p>

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
      </body>
      </html>
    `;

    // 🚀 4. Kirim Menggunakan Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer re_9i19WDuQ_2m4gBkaMdRPwZ94FXS1yzvKx`,
      },
      body: JSON.stringify({
        from: "Mores Research <newsletter@mores.id>",
        to: [emailPenerima],
        subject: emailSubject,
        html: emailHtmlContent,
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Gagal mengirim broadcast email");

    return NextResponse.json({ success: true, data });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}