import { NextResponse } from "next/server";
import sql from "@/lib/db";

export async function GET() {
  const ranking = await sql`
    SELECT * FROM participantes 
    ORDER BY pontos DESC 
    LIMIT 5
  `;
  return NextResponse.json(ranking);
}

export async function POST(req: Request) {
  const { nome, email, area, pontos, acertos } = await req.json();
  const data = new Date().toISOString().split("T")[0];

  await sql`
    INSERT INTO participantes (nome, email, area, pontos, acertos, data)
    VALUES (${nome}, ${email}, ${area}, ${pontos}, ${acertos}, ${data})
  `;

  return NextResponse.json({ ok: true });
}
