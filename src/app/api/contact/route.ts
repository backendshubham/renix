import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // TODO: Implement contact form handling
    return NextResponse.json({ success: true, message: 'Message received' })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Contact API' })
}
