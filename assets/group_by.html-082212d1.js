import{_ as s,X as n,Y as a,a3 as e}from"./framework-a4aa538b.js";const o={},p=e(`<h1 id="group-by" tabindex="-1"><a class="header-anchor" href="#group-by" aria-hidden="true">#</a> GROUP BY</h1><p><code>GROUP BY</code>子句按用户指定的tag或者时间区间对查询结果进行分组。</p><p><code>GROUP BY</code>子句按以下方式对查询结果进行分组：</p><ul><li>一个或多个指定的<code>tags</code></li><li>指定的时间间隔</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>不能使用<code>GROUP BY</code>对<code>fields</code>进行分组</p></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><h2 id="group-by-tags" tabindex="-1"><a class="header-anchor" href="#group-by-tags" aria-hidden="true">#</a> GROUP BY tags</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> COLUMN_CLAUSES FROM_CLAUSE <span class="token punctuation">[</span>WHERE_CLAUSE<span class="token punctuation">]</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token punctuation">[</span><span class="token operator">*</span> <span class="token operator">|</span> <span class="token operator">&lt;</span>tag_key<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token operator">&lt;</span>tag_key<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="group-by-time-intervals" tabindex="-1"><a class="header-anchor" href="#group-by-time-intervals" aria-hidden="true">#</a> GROUP BY time intervals</h2><p><code>GROUP BY time()</code>按用户指定的时间间隔对查询结果进行分组。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> COLUMN_CLAUSES FROM_CLAUSE <span class="token punctuation">[</span>WHERE_CLAUSE<span class="token punctuation">]</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">time</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>time_interval<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">[</span>tag_key<span class="token punctuation">]</span> <span class="token punctuation">[</span>fill<span class="token punctuation">(</span><span class="token operator">&lt;</span>fill_option<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>time(time_interval)</strong></p><p><code>GROUP BY time()</code>子句中的<code>time_interval</code>（时间间隔）是一个持续时间（duration），决定了openGemini按多大的时间间隔将查询结果进行分组。例如，当<code>time_interval</code>为<code>5m</code>时，那么在<code>WHERE</code>子句中指定的时间范围内，将查询结果按5分钟进行分组。</p><p><strong>fill()</strong></p><p><code>fill(&lt;fill_option&gt;)</code>是可选的，它会改变不含数据的时间间隔的返回值。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><h3 id="按单个tag对查询结果进行分组" tabindex="-1"><a class="header-anchor" href="#按单个tag对查询结果进行分组" aria-hidden="true">#</a> 按单个tag对查询结果进行分组</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> MEAN<span class="token punctuation">(</span><span class="token string">&quot;water_level&quot;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> <span class="token string">&quot;h2o_feet&quot;</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token string">&quot;location&quot;</span>
name: h2o_feet
tags: location<span class="token operator">=</span>coyote_creek
<span class="token operator">+</span><span class="token comment">------+--------------------+</span>
<span class="token operator">|</span> <span class="token keyword">time</span> <span class="token operator">|</span> mean               <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------+--------------------+</span>
<span class="token operator">|</span> <span class="token number">0</span>    <span class="token operator">|</span> <span class="token number">5.3591424203039155</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------+--------------------+</span>
<span class="token number">2</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>

name: h2o_feet
tags: location<span class="token operator">=</span>santa_monica
<span class="token operator">+</span><span class="token comment">------+--------------------+</span>
<span class="token operator">|</span> <span class="token keyword">time</span> <span class="token operator">|</span> mean               <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------+--------------------+</span>
<span class="token operator">|</span> <span class="token number">0</span>    <span class="token operator">|</span> <span class="token number">3.5307120942458803</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">------+--------------------+</span>
<span class="token number">2</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将查询结果按12分钟的时间间隔进行分组" tabindex="-1"><a class="header-anchor" href="#将查询结果按12分钟的时间间隔进行分组" aria-hidden="true">#</a> 将查询结果按12分钟的时间间隔进行分组</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token string">&quot;water_level&quot;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> <span class="token string">&quot;h2o_feet&quot;</span> <span class="token keyword">WHERE</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token string">&#39;2019-08-18T00:00:00Z&#39;</span> <span class="token operator">AND</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token string">&#39;2019-08-18T00:30:00Z&#39;</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">time</span><span class="token punctuation">(</span><span class="token number">12</span>m<span class="token punctuation">)</span>
name: h2o_feet
<span class="token operator">+</span><span class="token comment">---------------------+-------+</span>
<span class="token operator">|</span> <span class="token keyword">time</span>                <span class="token operator">|</span> count <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------+-------+</span>
<span class="token operator">|</span> <span class="token number">1566086400000000000</span> <span class="token operator">|</span> <span class="token number">4</span>     <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">1566087120000000000</span> <span class="token operator">|</span> <span class="token number">4</span>     <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token number">1566087840000000000</span> <span class="token operator">|</span> <span class="token number">4</span>     <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------+-------+</span>
<span class="token number">2</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),t=[p];function l(c,r){return n(),a("div",null,t)}const d=s(o,[["render",l],["__file","group_by.html.vue"]]);export{d as default};
