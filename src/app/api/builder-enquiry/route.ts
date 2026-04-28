import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { builderEnquirySchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = builderEnquirySchema.parse(body);

    const enquiry = await prisma.builderEnquiry.create({
      data: validated,
    });

    // Send notification email via Brevo
    try {
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0F172A; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 20px;">New Builder Enquiry</h1>
          </div>
          <div style="background: #fff; padding: 24px; border: 1px solid #E2E8F0; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #94A3B8; width: 40%;">Company</td><td style="padding: 8px 0; color: #0F172A; font-weight: 500;">${validated.companyName}</td></tr>
              <tr><td style="padding: 8px 0; color: #94A3B8;">Contact Person</td><td style="padding: 8px 0; color: #0F172A; font-weight: 500;">${validated.contactPerson}</td></tr>
              <tr><td style="padding: 8px 0; color: #94A3B8;">Phone</td><td style="padding: 8px 0; color: #0F172A; font-weight: 500;">${validated.phone}</td></tr>
              <tr><td style="padding: 8px 0; color: #94A3B8;">Email</td><td style="padding: 8px 0; color: #0F172A; font-weight: 500;">${validated.email}</td></tr>
              <tr><td style="padding: 8px 0; color: #94A3B8;">City</td><td style="padding: 8px 0; color: #0F172A; font-weight: 500;">${validated.city}</td></tr>
              <tr><td style="padding: 8px 0; color: #94A3B8;">Projects</td><td style="padding: 8px 0; color: #0F172A; font-weight: 500;">${validated.projects}</td></tr>
              <tr><td style="padding: 8px 0; color: #94A3B8;">Monthly Enquiries</td><td style="padding: 8px 0; color: #0F172A; font-weight: 500;">${validated.monthlyEnquiries}</td></tr>
              <tr><td style="padding: 8px 0; color: #94A3B8;">Team Size</td><td style="padding: 8px 0; color: #0F172A; font-weight: 500;">${validated.teamSize}</td></tr>
              ${validated.message ? `<tr><td style="padding: 8px 0; color: #94A3B8;">Message</td><td style="padding: 8px 0; color: #0F172A; font-weight: 500;">${validated.message}</td></tr>` : ""}
            </table>
          </div>
        </div>
      `;

      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          accept: "application/json",
          "api-key": process.env.BREVO_API_KEY || "",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          sender: { name: "Partnero", email: "admin@partner-o.com" },
          to: [{ email: process.env.ADMIN_EMAIL || "admin@partner-o.com", name: "Admin" }],
          subject: "New Builder Enquiry Received",
          htmlContent,
        }),
      });
    } catch (emailError) {
      console.error("Email send failed:", emailError);
    }

    return NextResponse.json(
      { success: true, id: enquiry.id },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: error },
        { status: 400 }
      );
    }
    console.error("Builder enquiry error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
