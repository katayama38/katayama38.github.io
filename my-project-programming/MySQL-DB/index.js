window.addEventListener('scroll', function(){
    const scroll = this.window.scrollY;
    const windowHeight = this.window.innerHeight;
    const boxes = this.document.querySelectorAll('.box');

    boxes.forEach(function(box){
        const distanceToBox = box.offsetTop;
        if(scroll + windowHeight > distanceToBox) {
            box.classList.add('is-active');
        }
    });
});