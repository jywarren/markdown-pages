(function() {

let mdElement = document.getElementsByClassName('md-pages')[0];

fetchPath(detectPath(), mdElement);

function detectPath() {
  let path = document.location.hash.split("#")[1];
  path ||= "index";
  if (path[path.length - 1] === "/") path += "index"
  return path;
}

function fetchPath(path, element) {
  element ||= document.body;
  if (path.substr(-3, 3) !== '.md') path += '.md'
  if (path[0] === '/') path = path.substr(1, path.length-1);
  fetch(path,{
    cache: 'no-cache',
    // mode: 'cors', // no-cors, *cors, same-origin
    mode: 'cors'
  })
    .then((response) => {
      if (!response.ok) {
        return "Page not found."
      }
      return response.text()
    })
    .then((text) => {
      displayText(text, element);
    });
}

function displayText(text, element) {
  output = marked.parse(text);
  output = parseIncludes(output);
  element.innerHTML = output;
  // identify relative paths like [link](posts/4.md) & prefix as #posts/4.md
  let links = Array.from(element.getElementsByTagName('a'));
  links.forEach(function(link) {
    let href = link.attributes['href'].value;
    if (href === "/") link.attributes['href'].value = document.location.href.split('#')[0];
    else if (href[0] !== "h") link.attributes['href'].value = "#" + href;
  });
}

window.onhashchange = function() {
  fetchPath(detectPath(), mdElement);
}

// include another page within this one
function parseIncludes(text) {
  // will need to be fixed for unique ids, to allow includes twice per page
  function replaceIncludes(match, p1, p2) {
    setTimeout(function insertCollections() {
      fetchPath(p2, document.getElementById('include-' + p2), mdElement);
    },0);
    return "<div id='include-" + p2 + "'></div>";
  }
  return text.replace(/(?:[\>`])(\<p\>)?\[include\:(\S+)\]/, replaceIncludes)
}

})()
