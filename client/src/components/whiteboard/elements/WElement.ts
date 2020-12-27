import { Component, Vue } from 'vue-property-decorator'
import Hammer from 'hammerjs'
@Component
export default class Element extends Vue {
    x = 0
    y = 0
    mounted() {
        if (!(this.$el instanceof HTMLElement)) return
        const me = new Hammer(this.$el)
        me.add(new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }))
        me.on('pan', evt => {
            if (!(this.$el instanceof HTMLElement)) return
            if (evt.isFinal) {
                this.x += evt.deltaX
                this.y += evt.deltaY
                this.$el.style.left = this.x + 'px'
                this.$el.style.top = this.y + 'px'
            } else {
                this.$el.style.left = this.x + evt.deltaX + 'px'
                this.$el.style.top = this.y + evt.deltaY + 'px'
            }
        })
    }
}