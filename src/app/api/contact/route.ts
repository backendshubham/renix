import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // TODO: Integrate with email service or database
    // For now, just return success
    console.log('Contact form submission:', body)

    return NextResponse.json(
      { message: 'Message received successfully' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}

