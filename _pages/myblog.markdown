---
layout: page
title: Blog
permalink: /myblog/
---

{%- assign posts = site.posts 
        | where: "publish", true %}
  
{%- if page.list_title -%}
  <h2 class="post-list-heading">{{ page.list_title }}</h2>
{%- endif -%}

<ul class="post-list" style="width: 50vw;">
  {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
  {%- for post in posts -%}
  <li>
    <h3>
      <a class="post-link" href="{{ post.url | relative_url }}">
        {{ post.title | escape }}
      </a><a class="post-meta">{{ post.date | date: date_format }}</a>
    </h3>
    {%- if site.minima.show_excerpts -%}
      {{ post.excerpt }}
    {%- endif -%}
  </li>
  {%- endfor -%}
</ul>
