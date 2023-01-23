import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function midleware(req) {
  // Token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  // 
}
