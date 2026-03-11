import { NextRequest } from 'next/server';

export async function GET() {
  return Response.json({ orders: [] });
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: 'Failed' }, { status: 500 });
  }
}
