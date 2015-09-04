if (window.top === window){

    var html = '<div class="meta-act">\
                <div class="inboard">\
                    <a class="meta-act-link meta-inboard" href="javascript:void(0)">Add to Inboard</a>\
                </div>\
            </div>'

    document.querySelector('.bucket').parentNode.insertAdjacentHTML('afterend', html)

    document.querySelector('.meta-inboard').addEventListener('click', function() {
      url = document.querySelector('.the-shot .single-img img').getAttribute('src')
      title = document.querySelector('#screenshot-title').innerText
      web_url = window.location.href
      params = {
        url,
        title,
        web_url
      }
      url = 'inboard://import?'
      for(name in params) {
        url += name + '=' + encodeURIComponent(params[name]) + '&'
      }
      window.open(url, '_self')
    })
}
