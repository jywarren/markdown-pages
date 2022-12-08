(function() {

function detectPath() {
  let path = document.location.hash.split("#")[1];
  path ||= "index";
  if (path[path.length - 1] === "/") path += "index"
  return path;
}

function fetchPath(path, _element) {
  let element = _element ? _element : document.body;
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  if (path.substr(-3, 3) !== '.md') path += '.md'
  fetch(path,{
    cache: 'no-cache',
    // mode: 'cors', // no-cors, *cors, same-origin
    mode: 'cors'
  })
    .then((response) => response.text())
    .then((text) => {
      // break this into its own function displayText()
      console.log('inserting into', element);
      output = marked.parse(text);
      output = parseIncludes(output);
      element.innerHTML = output;
      // identify relative paths like [link](posts/4.md) & prefix as #posts/4.md
      let links = Array.from(element.getElementsByTagName('a'));
      links.forEach(function(link) {
        let href = link.attributes['href'].value;
        if (href[0] !== "h") link.attributes['href'].value = "#" + href;

      });
    });
}

fetchPath(detectPath(), document.getElementsByClassName('md-pages')[0]);

window.onhashchange = function() {
  fetchPath(detectPath());
}



// attempts to make listing pages

// this is general purpose, but could be modified to allow for thumbnail images,
// automated searching on a pattern like post-1, post-2... 
function parseIncludes(text) {
  // will need to be fixed for unique ids, to allow includes twice per page
  function replaceIncludes(match, p1, p2) {
    setTimeout(function insertCollections() {
      fetchPath(p2, document.getElementById('include-' + p2));
    },0);
    return "<div id='include-" + p2 + "'></div>";
  }
  return text.replace(/(?<![\>`])(\<p\>)?\[include\:(\S+)\]/, replaceIncludes)
}

})()
