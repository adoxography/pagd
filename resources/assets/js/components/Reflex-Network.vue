<template>
  <div>
    <floating-tool-tip :options="tooltipOptions"></floating-tool-tip>
    <svg style="width: 0; height: 0">
      <defs>
        <marker id="markerArrow" markerWidth="13" markerHeight="13" refX="10" refY="5" orient="auto">
            <path d="M2,0 L2,8 L8,5 L2,2" style="fill: rgb(150, 150, 150);" />
        </marker>
      </defs>
    </svg>
	  <d3-network
      :net-nodes="graphData.nodes"
      :net-links="graphData.links"
      :options="options"
      v-on="{'node-click': onClickNode, 'link-click': onClickLink, 'node-hover': onHoverNode, 'link-hover': onHoverLink, 'hover-end': onHoverEnd}"
      :linkCb="formatLink"
      :nodeCb="formatNode"
    />
  </div>
</template>

<script>
import D3Network from './d3/D3-Network';
import Tooltip from './Floating-Tool-Tip';

export default {
    components: { D3Network, 'floating-tool-tip': Tooltip },
    props: ['graph-data'],
    data() {
        return {
            tooltipOptions: {
              x: 0,
              y: 0,
              show: false,
              content: ''
            },
            options: {
                nodeLabels: true,
                force: 2000,
                fontSize: 20,
                linkWidth: 2
            }
        }
    },

    methods: {
      onClickNode(event, node) {
        window.location = "/phonemes/" + node.id;
      },

      onHoverNode(event, node) {
        this.tooltipOptions.y = event.screenY;
        this.tooltipOptions.x = event.screenX;
        this.tooltipOptions.content = node.language.name;
        this.tooltipOptions.show = true;
      },

      onClickLink(event, link) {
        window.location = "/reflexes/" + link.reflex.id
      },

      onHoverLink(event, link) {
        let content = link.reflex.environment;
        if (!content) {
          content = 'elsewhere';
        }

        this.tooltipOptions.y = event.screenY;
        this.tooltipOptions.x = event.screenX;
        this.tooltipOptions.content = content;
        this.tooltipOptions.show = true;
      },

      onHoverEnd() {
        this.tooltipOptions.show = false;
      },

      formatLink(link) {
        return link;
      },

      formatNode(node) {
        if (node._cssClass == 'focus') {
          node._size = 18;
        } else {
          node._size = 10;
        }

        return node;
      }
    }
};
</script>

<style src="vue-d3-network/dist/vue-d3-network.css"></style>
<style>
line.link {
  stroke: rgb(150, 150, 150);
  marker-end: url(#markerArrow);
}

line.link:hover {
  marker-end: none;
  cursor: pointer;
}

circle.node:hover {
  cursor: pointer;
}

circle.node {
  stroke: rgb(76, 76, 76);
  stroke-width: 1px;
}

text.node-label {
  fill: rgb(76, 76, 76);
}
</style>
