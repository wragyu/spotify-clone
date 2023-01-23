import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function midleware(req) {
  const token = await getToken({ req })
}
