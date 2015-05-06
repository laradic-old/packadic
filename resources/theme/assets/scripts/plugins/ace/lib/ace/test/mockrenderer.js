define(["require","exports","module"],function(e,t,n){var r=t.MockRenderer=function(e){this.container=document.createElement("div"),this.scroller=document.createElement("div"),this.visibleRowCount=e||20,this.layerConfig={firstVisibleRow:0,lastVisibleRow:this.visibleRowCount},this.isMockRenderer=!0,this.$gutter={}};r.prototype.getFirstVisibleRow=function(){return this.layerConfig.firstVisibleRow},r.prototype.getLastVisibleRow=function(){return this.layerConfig.lastVisibleRow},r.prototype.getFirstFullyVisibleRow=function(){return this.layerConfig.firstVisibleRow},r.prototype.getLastFullyVisibleRow=function(){return this.layerConfig.lastVisibleRow},r.prototype.getContainerElement=function(){return this.container},r.prototype.getMouseEventTarget=function(){return this.container},r.prototype.getTextAreaContainer=function(){return this.container},r.prototype.addGutterDecoration=function(){},r.prototype.removeGutterDecoration=function(){},r.prototype.moveTextAreaToCursor=function(){},r.prototype.setSession=function(e){this.session=e},r.prototype.getSession=function(e){return this.session},r.prototype.setTokenizer=function(){},r.prototype.on=function(){},r.prototype.updateCursor=function(){},r.prototype.animateScrolling=function(e,t){t&&t()},r.prototype.scrollToX=function(e){},r.prototype.scrollToY=function(e){},r.prototype.scrollToLine=function(e,t){var n=16,r=0;for(var i=1;i<e;i++)r+=this.session.getRowLength(i-1);t&&(r-=this.visibleRowCount/2),this.scrollToRow(r)},r.prototype.scrollSelectionIntoView=function(){},r.prototype.scrollCursorIntoView=function(){var e=this.session.getSelection().getCursor();e.row<this.layerConfig.firstVisibleRow?this.scrollToRow(e.row):e.row>this.layerConfig.lastVisibleRow&&this.scrollToRow(e.row)},r.prototype.scrollToRow=function(e){var e=Math.min(this.session.getLength()-this.visibleRowCount,Math.max(0,e));this.layerConfig.firstVisibleRow=e,this.layerConfig.lastVisibleRow=e+this.visibleRowCount},r.prototype.getScrollTopRow=function(){return this.layerConfig.firstVisibleRow},r.prototype.draw=function(){},r.prototype.onChangeTabSize=function(e,t){},r.prototype.updateLines=function(e,t){},r.prototype.updateBackMarkers=function(){},r.prototype.updateFrontMarkers=function(){},r.prototype.updateBreakpoints=function(){},r.prototype.onResize=function(){},r.prototype.updateFull=function(){},r.prototype.updateText=function(){},r.prototype.showCursor=function(){},r.prototype.visualizeFocus=function(){},r.prototype.setAnnotations=function(){},r.prototype.setStyle=function(){},r.prototype.unsetStyle=function(){},r.prototype.textToScreenCoordinates=function(){return{pageX:0,pageY:0}},r.prototype.screenToTextCoordinates=function(){return{row:0,column:0}},r.prototype.adjustWrapLimit=function(){}});