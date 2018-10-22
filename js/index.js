var i=0;
var txt="I am a full stack web developer.I develop web solutions that improve people's lives and take businesses to the next level";
var speed=250;

window.onload=function typeWriter(){
				if(i<txt.length){
					document.getElementById("typewriter").innerHTML +=txt.charAt(i);
					i++;
					setTimeout(typeWriter,speed);
				}
			}
			
    $(function () {

    var $container = $('#container').masonry({
        itemSelector: '.item',
        columnWidth: 200
    });

    // reveal initial images
    $container.masonryImagesReveal($('#images').find('.item'));
});

$.fn.masonryImagesReveal = function ($items) {
    var msnry = this.data('masonry');
    var itemSelector = msnry.options.itemSelector;
    // hide by default
    $items.hide();
    // append to container
    this.append($items);
    $items.imagesLoaded().progress(function (imgLoad, image) {
        // get item
        // image is imagesLoaded class, not <img>, <img> is image.img
        var $item = $(image.img).parents(itemSelector);
        // un-hide item
        $item.show();
        // masonry does its thing
        msnry.appended($item);
    });

    return this;
};