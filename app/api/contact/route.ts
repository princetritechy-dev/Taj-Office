import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, subject, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return Response.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_TO_EMAIL, // ✅ receiver
      subject: `Contact Form: ${subject || "General Inquiry"}`,
      text: `Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "-"}
Subject: ${subject || "General Inquiry"}

Message:
${message}
`,
    });

    return Response.json({ success: true });
  } catch (err: any) {
  console.error("MAIL ERROR:", err?.response || err);
  return Response.json(
    { success: false, error: err?.response || "Server error" },
    { status: 500 }
  );
}
}
