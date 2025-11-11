import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // TODO: Integrate with analytics service (GA, Plausible, etc.)
    // For now, just log the event
    console.log('Analytics event:', body)

    return NextResponse.json(
      { message: 'Event tracked successfully' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to track event' },
      { status: 500 }
    )
  }
}

