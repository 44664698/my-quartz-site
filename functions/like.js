export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const pageId = url.searchParams.get("page") || "index";
  
    // 处理跨域请求
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };
  
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }
  
    const key = `like:${pageId}`;
    let count = await env.LIKES_KV.get(key);
    count = count ? parseInt(count) : 0;
  
    if (request.method === "POST") {
      // 点赞逻辑
      count += 1;
      await env.LIKES_KV.put(key, count.toString());
    }
  
    // 返回当前点赞数
    return new Response(JSON.stringify({ count }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }