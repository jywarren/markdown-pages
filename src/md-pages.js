(function() {

function detectPath() {
  let path = document.location.hash.split("#")[1];
  path ||= "index";
  if (path[path.length - 1] === "/") path += "index"
  return path;
}

function fetchPath(path, element) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  fetch(path + '.md',{
    cache: 'no-cache'
    // cors issue but could serve locally
    // mode: 'cors', // no-cors, *cors, same-origin
  })
    .then((response) => response.text())
    .then((text) => {
  element ||= document.body;
      output = marked.parse(text);
      output = parseIncludes(output);
      element.innerHTML = output;
    });
}

fetchPath(detectPath());

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
