<template lang="pug">
  svg(ref="svg"
    :width="size.w"
    :height="size.h"
    class="net-svg"
    @mouseup='emit("dragEnd",[$event])'
    @touchend.passive='emit("dragEnd",[$event])'
    @touchstart.passive=''
    )

    //-> links
    g.links#l-links( v-if='strLinks')
        line( v-for="link,index in links"
          :x1='link.source.x'
          :y1='link.source.y'
          :x2='link.target.x'
          :y2='link.target.y'
          v-tooltip="'hello'"
          @mouseover='emit("linkHover",[$event,link])'
          @mouseout='emit("hoverEnd")'
          @click='emit("linkClick",[$event,link])'
          @touchstart.passive='emit("linkClick",[$event,link])'
          :stroke-width='linkWidth'
          :class='linkClass(link.id)')

    g.links#l-links(v-else)
        path(v-for="link in links" ouch
          :d="curve(link)"
          @mouseover='emit("linkHover",[$event,link])'
          @mouseout='emit("hoverEnd")'
          @click='emit("linkClick",[$event,link])'
          @touchstart.passive='emit("linkClick",[$event,link])'
          :stroke-width='linkWidth'
          :class='linkClass(link.id) + " curve"')
    //- -> nodes
    g.nodes#l-nodes(v-if='!noNodes')
      template(v-for='(node,key) in nodes')
        svg(v-if='svgIcon(node)'
          :key='key'
          :viewBox='svgIcon(node).attrs.viewBox'
          :width='getNodeSize(node, "width")'
          :height='getNodeSize(node, "height")'
          @mouseover='emit("nodeHover",[$event,node])'
          @mouseout='emit("hoverEnd")'
          @mousedown='emit("mouseDown")'
          @mouseup='emit("nodeClick",[$event,node])'
          @touchend.passive='emit("nodeClick",[$event,node])'
          @mousedown.prevent='emit("dragStart",[$event,key])'
          @touchstart.passive='emit("dragStart",[$event,key])'
          :x='node.x - getNodeSize(node, "width") / 2'
          :y='node.y - getNodeSize(node, "height") / 2'
          :style='nodeStyle(node)'
          :title="node.name"
          :class='"node-svg " + nodeClass(node)'
          v-html='svgIcon(node).data'
          )

        //- default circle nodes
        circle(v-else
        :key='key'
        :r="getNodeSize(node) / 2"
        @mouseover='emit("nodeHover",[$event,node])'
        @mouseout='emit("hoverEnd")'
        @mousedown='emit("mouseDown")'
        @mouseup='emit("nodeClick",[$event,node])'
        @touchend.passive='emit("nodeClick",[$event,node])'
        @mousedown.prevent='emit("dragStart",[$event,key])'
        @touchstart.passive='emit("dragStart",[$event,key])'
        :cx="node.x"
        :cy="node.y"
        :style='nodeStyle(node)'
        :title="node.name"
        :class="nodeClass(node)"
        )

    //- -> Labels
    g.labels#node-labels( v-if="nodeLabels")
      text.node-label(v-for="node in nodes"
        :x='node.x + (getNodeSize(node) / 2) + (fontSize / 2)'
        :y='node.y + labelOffset.y'
        :font-size="fontSize"
        :class='(node._labelClass) ? node._labelClass : ""'
        :stroke-width='fontSize / 8'
      ) {{ node.name }}
</template>

<script>
import svgRenderer from 'vue-d3-network/src/components/svgRenderer';
import Tooltip from 'vue-directive-tooltip';
import 'vue-directive-tooltip/css/index.css';

export default {
  extends: svgRenderer,

  directives: {
    Tooltip
  }
}
</script>
