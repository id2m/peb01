---
layout: page
permalink: /nous-rejoindre/
title: "Nous rejoindre"
date: 2016-02-23T14:11:44-04:00
modified: 2016-03-03T10:29:27-05:00
description: "contact peb par mail, facebook, et bulletin d'adhésion displonible au format pdf, à retourner par voie postale"
---

{% assign nous-rejoindre = site.nous-rejoindre | sort: "order" %}


{% for post in nous-rejoindre %}
  {{post.content}}
{% endfor %}

<div class="modernizr">
<ul><li class="borderimage">borderimage</li><li class="canvastext">canvastext</li><li class="canvaswinding">canvaswinding</li><li class="csspositionsticky">csspositionsticky</li><li class="flexbox">flexbox</li><li class="flexboxlegacy">flexboxlegacy</li><li class="flexboxtweener">flexboxtweener</li><li class="inlinesvg">inlinesvg</li><li class="json">json</li><li class="mediaqueries">mediaqueries</li><li class="serviceworker">serviceworker</li><li class="smil">smil</li><li class="srcset">srcset</li><li class="svg">svg</li><li class="svgasimg">svgasimg</li><li class="svgclippaths">svgclippaths</li><li class="svgfilters">svgfilters</li><li class="svgforeignobject">svgforeignobject</li><li class="setclasses">setclasses</li></ul>
</div>

