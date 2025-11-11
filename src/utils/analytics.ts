// Placeholder analytics utility
// TODO: Integrate with analytics service (GA, Plausible, etc.)

export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window === 'undefined') return

  // Placeholder: Send to API route
  fetch('/api/analytics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event: eventName,
      properties,
      timestamp: new Date().toISOString(),
    }),
  }).catch((error) => {
    console.error('Analytics error:', error)
  })
}

export function trackPageView(path: string) {
  trackEvent('page_view', { path })
}

export function trackButtonClick(buttonName: string) {
  trackEvent('button_click', { button: buttonName })
}

