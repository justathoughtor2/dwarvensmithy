---
title: mermaid Demo
author: justathoughtor2
date: 2016-02-12
template: article.jade
---

A demonstration of the utility of mermaid diagrams in Dwarven Smithy!

## A simple flowchart...
```
mermaid0
    graph TD
        A["fa:fa-credit-card-alt Donate"]
        A-->B["fa:fa-ban No money?!"]
        A-->C["fa:fa-spinner Processing transaction..."]
        C-->D["fa:fa-dollar Ka-ching!"]
endmermaid0
```


## A simple Gantt chart...
```
mermaid1
    gantt
        title Gantt, yo.

        section Section 1
            Awesome stuff           :a1, 2016-02-12, 30d
            More awesome            :after a1,       20d
        section Section 2
            Be awesome              :2016-02-16,     12d
            Still more awesome      :24d
endmermaid1
```

