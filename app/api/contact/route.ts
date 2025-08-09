import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");

  const formspree = process.env.FORMSPREE_ENDPOINT; // optional
  if (formspree) {
    await fetch(formspree, { method: "POST", body: formData });
    return NextResponse.json({ ok: true });
  }

  console.log("Contact request", { name, email });
  return NextResponse.json({ ok: true });
}
