import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
    const res = await fetch('https://api.github.com/users')
    let data = await res.json()
    console.log('test- call')
    req.respond({ body:JSON.stringify(data)});
}