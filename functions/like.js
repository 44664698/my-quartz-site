export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // 处理跨域请求
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // 只允许 GET / POST，其它方法直接拒绝
  if (request.method !== "GET" && request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json", Allow: "GET, POST, OPTIONS" },
    });
  }

  // 若未在 Pages 后台绑定 KV，给出明确错误而不是直接抛异常
  if (!env || !env.LIKES_KV) {
    return new Response(JSON.stringify({ error: "LIKES_KV binding is not configured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // KV 键最长 512 字节，限制 pageId 长度，避免超长键导致 put 失败
  const rawPage = url.searchParams.get("page") || "index";
  const pageId = rawPage.slice(0, 200);

  const key = `like:${pageId}`;
  const stored = await env.LIKES_KV.get(key);
  const parsed = parseInt(stored ?? "0", 10);
  let count = Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;

  if (request.method === "POST") {
    // 点赞逻辑
    count += 1;
    await env.LIKES_KV.put(key, count.toString());
  }

  // 返回当前点赞数
  return new Response(JSON.stringify({ count }), {
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}