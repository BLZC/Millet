import { VantComponent } from '../common/component';
import { safeArea } from '../mixins/safe-area';
VantComponent({
    data: {
        radio: 1
    },
    mixins: [safeArea()],
    props: {
        show: Boolean,
        title: String,
        cancelText: String,
        zIndex: {
            type: Number,
            value: 100
        },
        actions: {
            type: Array,
            value: []
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onSelect(event) {
            const { index } = event.currentTarget.dataset;
            const item = this.data.actions[index];
            if (item && !item.disabled && !item.loading) {
                this.$emit('select', item);
            }
        },
        add() {
            console.log("111111111111111")
        },
        onCancel() {
            this.$emit('close');
            wx.showToast({
                title: '已添加到购物车',
                icon: 'success',
                duration: 500
            })
        },
        onClose() {
            this.$emit('close');
        }
    }
});
