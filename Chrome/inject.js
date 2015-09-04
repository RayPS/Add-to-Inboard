if (window.top === window){

  var mob = new MutationObserver(function(elms) {
    var bucket = elms[0].target.querySelector('.bucket')
    addButton(bucket)
  })

  var html = '<div class="meta-act">\
        <div class="inboard">\
          <a class="meta-act-link meta-inboard" href="javascript:void(0)">Add to Inboard</a>\
        </div>\
      </div>'

  var addButton = function(bucket) {
    bucket.parentNode.insertAdjacentHTML('afterend', html)

    document.querySelector('.meta-inboard').addEventListener('click', function() {
      var url = document.querySelector('.the-shot .single-img img').getAttribute('src'),
          title = document.querySelector('#screenshot-title').innerText,
          web_url = window.location.href,
          params = {
              url: url,
              title: title,
              web_url: web_url
          },
          inboard_url = 'inboard://import?'

      for(name in params) {
        inboard_url += name + '=' + encodeURIComponent(params[name]) + '&'
      }
      console.log(inboard_url)
      window.open(inboard_url, '_self')
    })
  }

  if (document.querySelector('.dribbbles') != null) {
    mob.observe(document.querySelector('.overlay-content'), {
      childList: true
    })
  }

  if (document.querySelector('.bucket') != null) {
    addButton(document.querySelector('.bucket'))
  }
}
