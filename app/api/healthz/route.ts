export const dynamic = 'force-dynamic'

export async function GET() {
  return new Response(JSON.stringify({ status: 'ok', uptime: process.uptime() }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'no-store',
    },
  })
}

export async function HEAD() {
  return new Response(null, {
    status: 200,
    headers: { 'cache-control': 'no-store' },
  })
}