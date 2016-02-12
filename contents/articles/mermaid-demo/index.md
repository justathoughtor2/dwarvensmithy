---
title: mermaid Demo
author: justathoughtor2
date: 2016-02-12
template: article.jade
---

A demonstration of the utility of mermaid diagrams in Dwarven Smithy!

## A simple flowchart demo...
mermaid
    graph TD
        A["fa:fa-credit-alt Donate"]
        A-->B["fa:fa-ban No money?!"]
        A-->C["fa:fa-spinner Processing transaction..."]
        C-->D["fa:fa-dollar Ka-ching!"]
