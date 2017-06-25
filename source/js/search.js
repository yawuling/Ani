$(function () {
  var keyInput = $('#search-key'),
      searchResult = $('#search-result'),
      searchContent = $('#search-result .search-result-content'),
      searchMask = $('#search-mask'),
      searchTpl = $('#search-tpl').html(),
      searchData, winWidth, winHeight;

  function loadData (callback) {
    if (!searchData) {
      $.get('/content.json', function (data) {
          searchData = data instanceof Array ? data : data.posts;
          callback(searchData);
      });
    } else {
      callback(searchData);
    }
  }

  function matcher (post, regExp) {
    return regExp.test(post.title) || post.tags.some(function (tag) {
      return regExp.test(tag.name)
    }) || regExp.test(post.text);
  }

  function tpl (html, data) {
    return html.replace(/\{\{\w+\}\}/g, function (str) {
      var prop = str.replace(/\{|\}/g, '');
      return data[prop] || '';
    });
  }

  function render (data) {
    var html = '';

    if (data.length) {
      html = data.map(function (post) {
        return tpl(searchTpl, {
          title: post.title,
          path: post.path,
          date: new Date(post.date).toLocaleDateString(),
          tags: post.tags.map(function (tag) {
            return '<div><i class="iconfont icon-msnui-tag"></i><span>' + tag.name + '</span></div>';
          }).join('')
        });
      }).join('');
    } else {
      html = '<div class="tips">' +
              '<i class="iconfont icon-baoqian"></i>' +
              '<span>查询不到结果</span>' +
             '</div>';
    }

    searchContent.html(html);
  }

  function search (e) {
    var key = this.value.trim();

    if (!key) {
      return;
    }

    var regExp = new RegExp(key.replace(/[ ]/g, '|'), 'gmi');
    loadData(function (data) {
      var result = data.filter(function (post) {
        return matcher(post, regExp);
      })

      render(result);
    });

    e.preventDefault();

    searchResult.removeClass('hide');
    searchMask.removeClass('hide');
  }

  keyInput.on('focus', function () {
    keyInput.on('input', search);
  });
  searchMask.on('click', function () {
    searchResult.addClass('hide');
    searchMask.addClass('hide');
  });

});
