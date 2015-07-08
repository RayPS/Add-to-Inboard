if (window.top === window){

    var html = '<div class="meta-act">\
                <div class="inboard">\
                    <a class="meta-act-link meta-inboard" href="javascript:void(0)">Add to Inboard</a>\
                </div>\
            </div>'

    document.querySelector('.bucket').parentNode.insertAdjacentHTML('afterend', html)

    document.querySelector('.meta-inboard').addEventListener('click', function() {
      src = document.querySelector('.the-shot .single-img img').getAttribute('src')
      window.open('inboard://import?url=' + src, '_self')
    })
}
