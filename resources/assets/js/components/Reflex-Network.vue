<template>
  <div>
    <svg style="width: 0; height: 0">
      <defs>
        <marker id="markerArrow" markerWidth="13" markerHeight="13" refX="10" refY="5"
               orient="auto">
            <path d="M2,0 L2,8 L8,5 L2,2" style="fill: rgb(150, 150, 150);" />
        </marker>

        <polygon id="star">
          <path  d="
            M 200.000 207.000
            L 208.817 212.135
            L 206.657 202.163
            L 214.266 195.365
            L 204.114 194.337
            L 200.000 185.000
            L 195.886 194.337
            L 185.734 195.365
            L 193.343 202.163
            L 191.183 212.135
            L 200.000 207.000
          "/>
        </polygon>
      </defs>
    </svg>
	  <d3-network
      :net-nodes="graphData.nodes"
      :net-links="graphData.links"
      :options="options"
      v-on="{'node-click': onClickNode, 'link-click': onClickLink}"
      :linkCb="formatLink"
      :nodeCb="formatNode"
    />
    <alg-modal ref="modal" :title="modal.title" :content="modal.content"></alg-modal>
  </div>
</template>

<script>
import D3Network from 'vue-d3-network';

export default {
    components: { D3Network },
    props: ['graph-data'],
    data() {
        return {
            options: {
                nodeLabels: true,
                force: 2000,
                fontSize: 20,
                linkWidth: 2
            },
            modal: {
              title: '',
              content: ''
            }
        }
    },

    methods: {
      onClickNode(event, node) {
        this.modal.content = "<a href=\"/phonemes/" + node.id + "\"><i>" + node.name + "</i> (" + node.language.name + ")</a>";
        this.$refs.modal.open();
      },

      onClickLink(event, link) {
        let reflex = link.reflex;

        let parent = this.graphData.nodes.filter(node => {
          return node.id == reflex.parent_id;
        })[0];
        let child = this.graphData.nodes.filter(node => {
          return node.id == reflex.reflex_id;
        })[0];

        let name = "<i>" + parent.name + "</i> (" + parent.language.name + ") > <i>" + child.name + "</i> (" + child.language.name + ")";

        if (reflex.environment) {
          name += "  / " + reflex.environment;
        }

        this.modal.content = "<a href=\"/reflexes/" + reflex.id + "\">" + name + "</a>";
        this.$refs.modal.open();
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
}

.node {
  stroke: rgb(76, 76, 76);
  stroke-width: 1px;
}

.node-label {
  fill: rgb(76, 76, 76);
}
</style>
