if window.top == window

    addToInboard = () ->
        src = document.querySelector('.the-shot .single-img img').getAttribute('src')
        window.open('inboard://import?url=' + src, '_self')

    html = '<div class="meta-act">\
                <div class="inboard">\
                    <a class="meta-act-link meta-inboard" href="javascript:void(0)">Add to Inboard</a>\
                </div>\
            </div>'

    document.querySelector('.rebound').parentNode.insertAdjacentHTML('beforebegin', html)
    
    document.querySelector('.meta-inboard').addEventListener('click', addToInboard)

