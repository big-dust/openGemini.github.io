import{_ as a,X as e,Y as s,a3 as n}from"./framework-a4aa538b.js";const o={},t=n(`<h1 id="create-database" tabindex="-1"><a class="header-anchor" href="#create-database" aria-hidden="true">#</a> CREATE DATABASE</h1><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token operator">&lt;</span>database_name<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token keyword">WITH</span> <span class="token punctuation">[</span>DURATION <span class="token operator">&lt;</span>duration<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">REPLICATION</span> <span class="token operator">&lt;</span>n<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>SHARD DURATION <span class="token operator">&lt;</span>duration<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>NAME <span class="token operator">&lt;</span>retention<span class="token operator">-</span>policy<span class="token operator">-</span>name<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="语法描述" tabindex="-1"><a class="header-anchor" href="#语法描述" aria-hidden="true">#</a> 语法描述</h2><p><code>CREATE DATABASE</code>需要数据库名称。</p><p><code>WITH</code> ，<code>DURATION</code>，<code>REPLICATION</code>，<code>SHARD DURATION</code>，<code>NAME</code> 子句以及创建与数据库相关联的单个保留策略是可选项。 如果未在<code>WITH</code>之后指定子句，则会默认创建名称为<code>autogen</code>的保留策略。</p><p>成功的<code>CREATE DATABASE</code>查询不返回任何结果。</p><p>如果创建一个已经存在的数据库，openGemini 不执行任何操作，但也不会返回错误。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="创建数据库" tabindex="-1"><a class="header-anchor" href="#创建数据库" aria-hidden="true">#</a> 创建数据库</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token string">&quot;NOAA_water_database&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该查询创建一个名为 <code>NOAA_water_database</code>的数据库。</p><p>默认情况下，openGemini还会创建默认的保留策略<code>autogen</code>并与数据库<code>NOAA_water_database</code>进行关联。</p><h2 id="创建具有特定保留策略的数据库" tabindex="-1"><a class="header-anchor" href="#创建具有特定保留策略的数据库" aria-hidden="true">#</a> 创建具有特定保留策略的数据库</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token string">&quot;NOAA_water_database&quot;</span> <span class="token keyword">WITH</span> DURATION <span class="token number">3</span>d <span class="token keyword">REPLICATION</span> <span class="token number">1</span> SHARD DURATION <span class="token number">1</span>h NAME <span class="token string">&quot;liquid&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该操作创建一个名称为<code>NOAA_water_database</code>的数据库。还为<code>NOAA_water_database</code>创建一个默认的保留策略，名称为<code>liquid</code>，其<code>DURATION</code>为3d，复制因子为1，分片组持续时间为1h。</p>`,16),c=[t];function d(p,r){return e(),s("div",null,c)}const i=a(o,[["render",d],["__file","create_database.html.vue"]]);export{i as default};
