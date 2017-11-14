<script>
import D3Network from 'vue-d3-network/src/vue-d3-network';
import customSvgRenderer from './svgRenderer'

export default {
    extends: D3Network,

    data() {
        return {
            moved: false
        }
    },

    components: {
        customSvgRenderer
    },

    render (createElement) {
        let ref = 'svg'
        let props = {}
        let renderer = 'custom-svg-renderer'
        let bindProps = [
            'size',
            'nodes',
            'links',
            'selected',
            'linksSelected',
            'strLinks',
            'linkWidth',
            'nodeLabels',
            'fontSize',
            'labelOffset',
            'offset',
            'padding',
            'nodeSize',
            'noNodes'
        ]
        for (let prop of bindProps) {
            props[prop] = this[prop]
        }
        props.nodeSym = this.nodeSvg
        if (this.canvas) {
            renderer = 'canvas-renderer'
            ref = 'canvas'
            props.canvasStyles = this.options.canvasStyles
        }
        return createElement('div', {
            attrs: { class: 'net' },
            on: { 'mousemove': this.move, '&touchmove': this.move }
        },[
            createElement(renderer, {
                props, ref, on: { action: this.methodCall }
            })
        ])
    },

    methods: {
        mouseDown() {
            this.moved = false;
        },

        nodeClick(event, node) {
            if (!this.moved) {
                this.$emit('node-click', event, node);
            }
        },

        linkHover(event, link) {
            this.$emit('link-hover', event, link);
        },

        nodeHover(event, node) {
            this.$emit('node-hover', event, node);
        },

        hoverEnd() {
            this.$emit('hover-end');
        },

        move (event) {
            let pos = this.clientPos(event)
            if (this.dragging !== false && this.nodes[this.dragging]) {
                this.simulation.restart()
                this.simulation.alpha(0.5)
                this.nodes[this.dragging].fx = pos.x - this.mouseOfst.x
                this.nodes[this.dragging].fy = pos.y - this.mouseOfst.y
            }
            this.moved = true;
        },
    }
}
</script>
