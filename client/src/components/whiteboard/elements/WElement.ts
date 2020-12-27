import { Component, Vue } from 'vue-property-decorator'
import Hammer from 'hammerjs'
@Component
export default class Element extends Vue {
    x = 0
    y = 0
    width = 50
    height = 50
    isResizing = false;
    mounted() {
        if (!(this.$el instanceof HTMLElement)) return
        const me = new Hammer(this.$el)
        me.add(new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }))
        me.on('pan', this.onDrag)
    }

    onDrag(evt: HammerInput) {
        if (!(this.$el instanceof HTMLElement) || this.isResizing) return
        if (evt.isFinal) {
            this.x += evt.deltaX
            this.y += evt.deltaY
            this.$el.style.left = this.x + 'px'
            this.$el.style.top = this.y + 'px'
        } else {
            this.$el.style.left = this.x + evt.deltaX + 'px'
            this.$el.style.top = this.y + evt.deltaY + 'px'
        }
    }
    onResize(evt: HammerInput) {
        if (!(this.$el instanceof HTMLElement)) return
        if (evt.isFinal) {
            this.isResizing = false;
            this.width = Math.max(10, this.width + evt.deltaX)
            this.height = Math.max(10, this.height + evt.deltaY)
            this.$el.style.width = Math.max(10, this.width) + 'px'
            this.$el.style.height = Math.max(10, this.height) + 'px'
        } else {
            this.isResizing = true;
            this.$el.style.width = Math.max(10, this.width + evt.deltaX) + 'px'
            this.$el.style.height = Math.max(10, this.height + evt.deltaY) + 'px'
        }
    }
}