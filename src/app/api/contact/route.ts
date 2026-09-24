import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, servicePillar, budget, message } = body;

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, and message are required." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "contact@hiregurkha.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    // Log the submission server-side
    console.log("----------------------------------------");
    console.log("📥 NEW CONTACT CONSULTATION SUBMISSION:");
    console.log(`- Recipient Inbox: ${recipientEmail}`);
    console.log(`- Name: ${name}`);
    console.log(`- Email: ${email}`);
    console.log(`- Phone: ${phone || "N/A"}`);
    console.log(`- Service Area: ${servicePillar}`);
    console.log(`- Budget: ${budget}`);
    console.log(`- Message: ${message}`);
    console.log("----------------------------------------");

    // If Resend API Key is set in environment, send real email via Resend
    if (resendApiKey) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Hire Gurkha Website <onboarding@resend.dev>",
          to: [recipientEmail],
          reply_to: email,
          subject: `New Lead Consultation: ${name} (${servicePillar})`,
          html: `
            <h2>New Inquiry from Hire Gurkha LLC Website</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Service Focus:</strong> ${servicePillar}</p>
            <p><strong>Budget Range:</strong> ${budget}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f4f4f4; padding: 12px; border-left: 4px solid #F5A800;">
              ${message.replace(/\n/g, "<br/>")}
            </blockquote>
          `,
        }),
      });

      if (!resendRes.ok) {
        const errorData = await resendRes.json();
        console.error("Resend API Email Error:", errorData);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Consultation request received successfully. We will reply within 24 hours.",
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
