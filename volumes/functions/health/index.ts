// Deno.serve(async () => {
//   const memoryUsage = Deno.memoryUsage()
//   const health = {
//     status: 'healthy',
//     timestamp: new Date().toISOString(),
//     memory: {
//       rss: Math.floor(memoryUsage.rss / 1024 / 1024), // MB
//       heapUsed: Math.floor(memoryUsage.heapUsed / 1024 / 1024)
//     },
//     environment: {
//       denoVersion: Deno.version.deno,
//       region: Deno.env.get('DENO_REGION') || 'self-hosted'
//     }
//   }
  
//   return new Response(JSON.stringify(health), {
//     headers: { 'Content-Type': 'application/json' }
//   })
// })