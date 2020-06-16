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

I'm a [software engineer](https://github.com/andrewsosa) focusing on data engineering and pipeline automation. Check out my [github](https://github.com/andrewsosa), [linkedin](https://www.linkedin.com/in/andrew-sosa), [resume page](/resume), [resume pdf](#) or send me an [email](mailto:andrew@andrewsosa.dev).

Here's some stuff I've been working on.

{% for proj in collections.repos %}
  <br>

  > ## {{ proj.data.title }}
  > {{ proj.data.byline }}
  > <br>
  > <br>
  > {{ proj.data.links}}
{% endfor %}


