export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // 仅在根路径（首页）触发语言分发判断
  if (url.pathname === '/' || url.pathname === '/index.html') {
    // 1. 优先读取客户端 Cookie 中记录的用户手动偏好
    const cookie = request.headers.get('Cookie') || '';
    const match = cookie.match(/(?:^|;\s*)hoyoshade_lang=([^;]+)/);
    if (match) {
      const preferred = decodeURIComponent(match[1]).trim();
      if (preferred === 'zh_cn') {
        return Response.redirect(new URL('/zh_cn/' + url.search + url.hash, url), 302);
      }
      if (preferred === 'zh_hk') {
        return Response.redirect(new URL('/zh_hk/' + url.search + url.hash, url), 302);
      }
      if (preferred === 'en') {
        return next();
      }
    }

    // 2. 用户未手动选择过，检测浏览器发来的 Accept-Language 请求头
    const acceptLang = (request.headers.get('Accept-Language') || '').toLowerCase();

    // 繁体中文匹配 (港澳台/繁体字符集)
    if (/zh-(hk|tw|mo)|hant/.test(acceptLang)) {
      return Response.redirect(new URL('/zh_hk/' + url.search + url.hash, url), 302);
    }

    // 简体中文及其他中文匹配
    if (acceptLang.startsWith('zh') || /zh-cn|zh-sg|hans/.test(acceptLang)) {
      return Response.redirect(new URL('/zh_cn/' + url.search + url.hash, url), 302);
    }
  }

  return next();
}
