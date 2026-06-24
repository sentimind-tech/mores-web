import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // 🚀 1. Tangkap parameter locale (default ke 'en' jika tidak dikirim)
    const { email, locale = "en" } = await request.json();

    console.log(`=== API Route Dipanggil! Email: ${email} | Bahasa: ${locale}`);

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const unsubscribeUrl = `https://mores.id/id/unsubscribe?email=${encodeURIComponent(email)}`;

    // 🚀 Teks Bawaan (Default: English)
    let emailSubject = "Thank you for subscribing to Moresight!";
    let titleMain = `<span style="color:#00a2b6"><strong>Thank</strong></span><strong> You</strong>`; // Dinamis untuk baris 1
    let titleSub = "for Subscribing to"; // Dinamis untuk baris 2
    let greeting = "Hi, welcome! We’re glad you’re here.";
    let bodyP1 = "From now on, you'll be among the first to receive research updates, insights, curated articles, and special announcements delivered straight to your inbox.";
    let bodyP2 = "Our goal is simple: sharing relevant and thoughtful perspectives that keep you informed and inspired.";
    let bodyP3 = "To make sure you don't miss anything, please add our email address to your contacts or safe sender list.";
    let bodyP4 = "Thanks again for subscribing. We look forward to staying connected with you.";
    let regards = "Best regards,";
    let companyAddress = "Lina Building, 2nd Floor Unit 211<br/>JL. Rasuna Said Kav. B7<br/>South Jakarta 12910 - Indonesia";
    let optInText = "You are receiving this email because you opted in via our site.";
    let changePreferenceText = "Want to change how you receive these emails?";

    // 💡 SOLUSI: Bungkus seluruh frasa kalimat unsubscribe ke dalam satu variabel utuh
    let unsubscribeSentence = `You can <a href="${unsubscribeUrl}" style="color:#00a2b6; text-decoration:underline; font-weight:bold;">unsubscribe from this list</a>.`;

    // 💡 JIKA USER MENGGUNAKAN BAHASA INDONESIA, TIMPA VARIABEL DI ATAS
    if (locale === "id") {
      emailSubject = "Terima kasih telah berlangganan Moresight!";
      titleMain = `<span style="color:#00a2b6"><strong>Terima</strong></span><strong> Kasih</strong>`; // Berubah jadi Terima Kasih
      titleSub = "telah Berlangganan";
      greeting = "Halo, selamat datang! Kami senang Anda bergabung.";
      bodyP1 = "Mulai sekarang, Anda akan menjadi salah satu yang pertama menerima pembaruan riset, wawasan terbaru, artikel pilihan, dan pengumuman khusus yang dikirim langsung ke kotak masuk Anda.";
      bodyP2 = "Tujuan kami sederhana: membagikan perspektif yang relevan dan mendalam untuk memastikan Anda tetap mendapatkan informasi berharga dan inspirasi.";
      bodyP3 = "Agar tidak melewatkan apa pun, mohon tambahkan alamat email kami ke daftar kontak atau daftar pengirim aman Anda.";
      bodyP4 = "Terima kasih kembali atas kepercayaan Anda. Kami sangat menantikan untuk terus terhubung dengan Anda.";
      regards = "Salam hangat,";
      companyAddress = "Gedung Lina, Lantai 2 Unit 211<br/>JL. Rasuna Said Kav. B7<br/>Jakarta Selatan 12910 - Indonesia";
      optInText = "Anda menerima email ini karena Anda memilih untuk mendaftar melalui situs kami.";
      changePreferenceText = "Ingin mengubah pengaturan cara Anda menerima email ini?";

      // 💡 Menghilangkan kata statis "You can" dan tanda titik luar, diganti kalimat Indonesia yang rapi
      unsubscribeSentence = `Anda dapat <a href="${unsubscribeUrl}" style="color:#00a2b6; text-decoration:underline; font-weight:bold;">berhenti berlangganan dari daftar ini</a>.`;
    }

    // 🚀 3. Bungkus Variabel di Atas ke dalam Kerangka HTML Asli Moresight Anda
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
              <td style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;font-size:1em;line-height:155%;background-color:#ffffff">
                <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:600px;color:#000000;background-color:#ffffff;line-height:155%">
                  <tbody>
                    <tr>
                      <td style="padding:40px 20px 20px 20px">
                        
                        <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                          <tbody>
                            <tr>
                              <td align="left"><img alt="" src="https://resend-attachments.s3.amazonaws.com/dff54900-97fe-44c8-8936-b545294244a8" style="display:block;max-width:100%;border-radius:8px;height:auto" width="100%"/></td>
                            </tr>
                          </tbody>
                        </table>
                        <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin-top:20px;">
                          <tbody>
                            <tr>
                              <td align="center"><img alt="" height="98" src="https://resend-attachments.s3.amazonaws.com/831532fa-ee3e-448b-a7ba-143571b171c7" style="display:block;max-width:100%;border-radius:8px;height:auto" width="364"/></td>
                            </tr>
                          </tbody>
                        </table>

                        <h1 style="margin:0;padding:0;font-size:36px;line-height:140%;padding-top:0.389em;font-weight:600;text-align:center">${titleMain}</h1>
                        <h1 style="margin:0;padding:0;font-size:26px;line-height:140%;font-weight:600;text-align:center;margin-bottom:20px;">${titleSub} <span style="color:#00a2b6">More</span>Sight</h1>
                        
                        <p style="margin:0;padding:0;font-size:16px;padding-top:0.5em;padding-bottom:0.5em;text-align:left;color:#000000;">${greeting}</p>
                        <p style="margin:0;padding:0;font-size:16px;padding-top:0.5em;padding-bottom:0.5em;text-align:left;color:#000000;">${bodyP1}</p>
                        <p style="margin:0;padding:0;font-size:16px;padding-top:0.5em;padding-bottom:0.5em;line-height:180%;text-align:left;color:#000000;">${bodyP2}</p>
                        <p style="margin:0;padding:0;font-size:16px;padding-top:0.5em;padding-bottom:0.5em;text-align:left;color:#000000;">${bodyP3}</p>
                        <p style="margin:0;padding:0;font-size:16px;padding-top:0.5em;padding-bottom:0.5em;line-height:180%;text-align:left;color:#000000;">${bodyP4}</p>
                        
                        <p style="margin:20px 0 0 0;padding:0;font-size:16px;text-align:left;color:#000000;">${regards}</p>
                        <p style="margin:0;padding:0;font-size:16px;text-align:left;"><span style="color:#00a2b6"><strong>Mores </strong></span><strong>Research</strong></p>
                        
                        <hr style="width:100%;border:none;border-top:2px solid #eaeaea;margin:40px 0 20px 0;"/>

                        <table width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                          <tbody>
                            <tr>
                              <td width="60%" align="left" valign="top" style="font-size:14px; line-height:170%; color:#000000;">
                                <span style="color:#00a2b6"><strong>MORE</strong></span><strong>SIGHT</strong><br/>
                                Mores Research by Mores Strategics<br/>
                              </td>
                              <td width="40%" align="left" valign="top">
                                <p style="margin:0 0 8px 0;padding:0;font-size:14px;text-align:left;color:#000000;">Follow Us</p>
                                <table border="0" cellPadding="0" cellSpacing="0" role="presentation">
                                  <tbody>
                                    <tr>
                                      <td style="padding-right:8px;width:32px;"><a href="https://www.linkedin.com/company/mores-id/" rel="noopener noreferrer" target="_blank"><img alt="LinkedIn" height="32" src="https://resend.com/static/email/social-linkedin.png" style="display:block;" width="32"/></a></td>
                                      <td style="padding-right:8px;width:32px;"><a href="https://x.com/mores_id" rel="noopener noreferrer" target="_blank"><img alt="X" height="32" src="https://resend.com/static/email/social-x.png" style="display:block;" width="32"/></a></td>
                                      <td style="padding-right:8px;width:32px;"><a href="https://www.instagram.com/moresstrategics?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" rel="noopener noreferrer" target="_blank"><img alt="Instagram" height="32" src="https://resend.com/static/email/social-instagram.png" style="display:block;" width="32"/></a></td>
                                      <td style="padding-right:8px;width:32px;"><a href="https://youtube.com/@moresstrategics?si=utakL4ups1IAoTVm" rel="noopener noreferrer" target="_blank"><img alt="YouTube" height="32" src="https://resend.com/static/email/social-youtube.png" style="display:block;" width="32"/></a></td>
                                      <td style="padding-right:8px;width:32px;"><a href="https://www.tiktok.com/@mores.strategics?is_from_webapp=1&sender_device=pc" rel="noopener noreferrer" target="_blank"><img alt="TikTok" height="32" src="https://resend.com/static/email/social-tiktok.png" style="display:block;" width="32"/></a></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation">
                          <tbody>
                            <tr>
                              <td>
                                <p style="margin:30px 0 20px 0;padding:0;font-size:13px;line-height:150%;color:#555555;text-align:left;">
                                  <span style="color:#00a2b6"><strong>Mores </strong></span><strong>Strategics</strong><br/>
                                  ${companyAddress}
                                </p>
                                <p style="margin:0;padding:0;font-size:13px;line-height:150%;color:#555555;text-align:left;">
                                  ${optInText}<br/><br/>
                                  ${changePreferenceText}<br/>
                                  ${unsubscribeSentence}
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="margin-top:30px;">
                          <tbody>
                            <tr>
                              <td align="left"><img alt="" src="https://resend-attachments.s3.amazonaws.com/44e7f883-f036-4afe-b53b-5ee14d21d53b" style="display:block;max-width:100%;border-radius:8px;height:auto" width="100%"/></td>
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

    // 🚀 4. Eksekusi Pengiriman via Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer re_9i19WDuQ_2m4gBkaMdRPwZ94FXS1yzvKx`,
      },
      body: JSON.stringify({
        from: "Mores Research <newsletter@mores.id>",
        to: [email],
        subject: emailSubject, // Subjek Dinamis
        html: emailHtmlContent, // Konten Dinamis
        headers: {
          "List-Unsubscribe": `<${unsubscribeUrl}>`,
          "List-Unsubscribe-Post": "List-Unsubscribe=One-Click"
        }
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Gagal mengirim via Resend");

    return NextResponse.json({ success: true, data });

  } catch (error: any) {
    console.error("=== Error di Server API Route:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}