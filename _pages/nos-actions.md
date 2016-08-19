---
layout: page
permalink: /nos-actions/
title: "Nos actions"
date: 2016-02-23T14:11:44-04:00
modified: 2016-03-03T10:29:27-05:00
description: "présentation de nos actions"
---

{% assign nos-actions = site.nos-actions | sort: "order" %}


{% for post in nos-actions %}
  {{post.content}}
{% endfor %}
