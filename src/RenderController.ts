export let RenderController = {
    _queuedRender: false,
    queueRender: function() {
        RenderController._queuedRender = true;
    },
    needsRender: function() {
        return RenderController._queuedRender || RenderController.activeAnimations.size > 0;
    },
    activeAnimations: new Set<any>()
};
export default RenderController;