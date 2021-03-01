---
layout: base-layout
---

<style>
  h1 {
    font-size: 3rem;
    border-bottom: none;
  }
</style>

# Andrew Sosa

<br>

I'm a [software engineer]({{links.github}}) focusing on data engineering and pipeline automation. Check out my [github]({{links.github}}), [linkedin]({{links.linkedin}}), [resume]({{links.resume}}) or send me an [email]({{links.email}}).

Here's some stuff I've been working on.

{% for proj in collections.repos reversed %}
  <br>

  > ## {{ proj.data.title }}
  > {{ proj.data.byline }}
  > <br>
  > <br>
  > {{ proj.data.links}}
{% endfor %}


