import{_ as s,X as a,Y as e,a3 as n}from"./framework-a4aa538b.js";const t={},r=n(`<h1 id="set-password" tabindex="-1"><a class="header-anchor" href="#set-password" aria-hidden="true">#</a> SET PASSWORD</h1><p>重置密码</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> PASSWORD <span class="token keyword">FOR</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token string">&#39;&lt;password&gt;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> PASSWORD <span class="token keyword">FOR</span> <span class="token string">&quot;todd&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;your_pwd&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>密码字符串必须用单引号引起来，验证请求时，请包含单引号</p><p>建议避免在密码中使用单引号（‘）和反斜杠（\\）字符，对于包含这些字符\\’的密码，在创建密码和提交身份验证请求时，请使用反斜杠对特殊字符进行转义，（例如（））</p></div>`,7),d=[r];function o(i,l){return a(),e("div",null,d)}const p=s(t,[["render",o],["__file","set_password.html.vue"]]);export{p as default};
