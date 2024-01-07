---
layout: page
title: Staff
description: DSC 204A Winter 2024 Staff
---

# Staff

## Instructor

{% assign instructors = site.staffers | where: 'role', 'Instructor' %}

<div class="role flex">
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}
</div>

<!-- ## Lead GSIs

_All office hours are held in-person in Warren 101 unless otherwise specified_

{% assign leads = site.staffers | where: 'role', '20-hour Lead uGSI (UCS2)' %}

<div class="role flex">
{% for staffer in leads %}
{{ staffer }}
{% endfor %}
</div> -->

## Teaching Assistants

<!-- _All office hours are held in-person in Warren 101 unless otherwise specified_ -->

{% assign teaching_assistants = site.staffers | where: 'role', 'Teach Assistant' %}

<div class="role flex">
{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
</div>

<!-- ## Tutors

{% assign tutors = site.staffers | where: 'role', 'Tutor (UCS1)' %}

<div class="role flex">
{% for staffer in tutors %}
{{ staffer }}
{% endfor %}
</div>  -->

<script src="../assets/darkmode.js"></script>
<script>
  window.addEventListener("DOMContentLoaded", (event) => {
    onLoad();
});
</script>
