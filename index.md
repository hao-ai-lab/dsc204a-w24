---
layout: home
title: Home
nav_order: 1
nav_exclude: false
permalink: index.html
seo:
  type: Course
  name: DSC 204A Winter 2024
---

# DSC 204A: Scalable Data Systems

{: .mb-2 }
Instructor: Hao Zhang, UC San Diego, Winter 2024
{: .mb-2 .fs-6 .text-grey-dk-000 }

<button class="js-toggle-dark-mode dm-btn btn">Toggle Dark Mode</button>

<!-- [Lecture Recordings]({https://bcourses.berkeley.edu/courses/COURSE_ID/external_tools/KALTURA_ID}){: .btn .btn-blue} -->

## Announcements


{% assign announcements = site.announcements | reverse %}
{% for announcement in announcements %}
{{ announcement }}
{% endfor %}


{% assign mods = site.modules | where: 'class', 'DSC204A' %}
{% assign active-mods = '' | split: '' %}

{% for mod in mods %}
  {% if mod.status == 'Active' %}
    {% assign active-mods = active-mods | push: mod %}
  {% endif %}
{% endfor %}

{% for module in active-mods %}
  {{ module }}
{% endfor %}

<script src="assets/darkmode.js"></script>
<script>
  const toggleDarkMode = document.querySelector('.js-toggle-dark-mode');

  jtd.addEvent(toggleDarkMode, 'click', function(){
    if (jtd.getTheme() === 'custom_dark') {
      jtd.setTheme('light');
      localStorage.setItem("darkMode", 0);
      toggleDarkMode.innerHTML = "Toggle Dark Mode";
      toggleDarkMode.classList.add('dm-btn');
        toggleDarkMode.classList.remove('dm-dark-btn');
    } else {
      jtd.setTheme('custom_dark');
      localStorage.setItem("darkMode", 1);
      toggleDarkMode.innerHTML = "Return to the Light";
      toggleDarkMode.classList.add('dm-dark-btn');
      toggleDarkMode.classList.remove('dm-btn');
    }
  });

    window.addEventListener("DOMContentLoaded", (event) => {
      onLoad();
  });
</script>
