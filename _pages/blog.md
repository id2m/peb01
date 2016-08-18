---
layout: page
permalink: /blog/
title: "Blog"
date: 2015-09-23T14:11:44-04:00
modified: 2016-03-03T10:29:27-05:00
excerpt: "Cette page reprend l'ensemble des documents d'AG, bulletins d'informations, et études rattachées à nos activités"
showTitle: true
---

{{ page.excerpt | markdownify }}

{% assign ag_blog = site.blog | where: "type", "ag" | sort: "order" %}
{% assign information_blog = site.blog | where: "type", "information" | sort: "order" %}
{% assign eolien_blog = site.blog | where: "type", "eolien" | sort: "order" %}
{% assign divers_blog = site.blog | where: "type", "divers" | sort: "order" %}

## Notes d'information

{% comment %}
breakpoint md-max longueur blog 3min pr ajout retour page 150wpm
{% endcomment %}

<ul class="fl">
{% for item in information_blog %}
<li>
  <a href="{{site.baseurl}}{{ item.url }}">{{ item.title }}</a>
  {% assign halfWpm = site.words_per_minute | divided_by: 2 %}
  {% assign readtime = item.content | strip_html | number_of_words | plus:halfWpm | divided_by:site.words_per_minute  %}
        <span class="archive__item-time">{% if readtime <= 1 %}1{% else %}{{ readtime}}{% endif %} min de lecture</span>
</li>
{% endfor %}
</ul>

## Compte-rendu d'assemblée générale

<ul class="fl">
{% for item in ag_blog %}
<li>
  <a href="{{site.baseurl}}{{ item.url }}">{{ item.title }}</a>
  {% assign halfWpm = site.words_per_minute | divided_by: 2 %}
  {% assign readtime = item.content | strip_html | number_of_words | plus:halfWpm | divided_by:site.words_per_minute  %}
        <span class="archive__item-time">{% if readtime <= 1 %}1{% else %}{{ readtime }}{% endif %} min de lecture</span>
</li>
{% endfor %}
</ul>

## Etudes sur l'éolien

<ul class="fl">
{% for item in eolien_blog %}
<li>
  <a href="{{site.baseurl}}{{ item.url }}">{{ item.title }}</a>
  {% assign halfWpm = site.words_per_minute | divided_by: 2 %}
  {% assign readtime = item.content | strip_html | number_of_words | plus:halfWpm | divided_by:site.words_per_minute  %}
        <span class="archive__item-time">{% if readtime <= 1 %}1{% else %}{{ readtime }}{% endif %} min de lecture</span>
</li>
{% endfor %}
</ul>

## Divers

<ul class="fl">
{% for item in divers_blog %}
<li>
  <a href="{{site.baseurl}}{{ item.url }}">{{ item.title }}</a>
  {% assign halfWpm = site.words_per_minute | divided_by: 2 %}
  {% assign readtime = item.content | strip_html | number_of_words | plus:halfWpm | divided_by:site.words_per_minute  %}
        <span class="archive__item-time">{% if readtime <= 1 %}1{% else %}{{ readtime }}{% endif %} min de lecture</span>
</li>
{% endfor %}
</ul>
