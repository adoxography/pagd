<template>
  <div ref="network"></div>
</template>

<script>
import vis from 'vis';

export default {
  props: ['nodes', 'edges'],

  data() {
    return {
      network: null,
      options: {
        layout: {
          hierarchical: {
            direction: "UD",
            sortMethod: "directed"
          }
        },
        interaction: {
          hover: true,
          tooltipDelay: 0
        },
        nodes: {
          font: {
            face: 'DejaVuSerifCondensed',
            multi: 'html',
            vadjust: -1
          }
        },
        edges: {
          arrows: 'to'
        },
        height: "500px"
      }
    }
  },

  computed: {
    networkCanvas() {
      return this.$refs.network.getElementsByTagName("canvas")[0];
    }
  },

  mounted() {
    let container = this.$refs.network;

    let data = {
      nodes: new vis.DataSet(this.nodes),
      edges: new vis.DataSet(this.edges)
    }

    this.network = new vis.Network(container, data, this.options);

    this.network.on("click", params => {
      if (params.nodes.length == 1) {
        this.redirect(params.nodes[0], this.nodes);
      } else if (params.edges.length == 1) {
        this.redirect(params.edges[0], this.edges);
      }
    });

    this.network.on("showPopup", () => {
      this.changeCursor("pointer");
    });

    this.network.on("hidePopup", () => {
      this.changeCursor("default");
    });
  },

  methods: {
    redirect(id, items) {
      let selected = items.find(item => {
        return item.id == id;
      });

      window.location = selected.href;
    },

    changeCursor(newCursorStyle) {
      this.networkCanvas.style.cursor = newCursorStyle;
    }
  }
};
</script>
