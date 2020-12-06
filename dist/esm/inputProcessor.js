import { doctype, prefix } from './const';

function getEmptySvgDeclarationComputed() {
  var emptySvg = document.createElementNS(prefix.svg, 'svg');
  document.body.appendChild(emptySvg);
  emptySvg.style.all = 'initial';
  var emptySvgDeclarationComputed = getComputedStyle(emptySvg);
  document.body.removeChild(emptySvg);
  emptySvg = null;
  return emptySvgDeclarationComputed;
}

function getSource(svg) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$css = _ref.css,
      css = _ref$css === void 0 ? 'inline' : _ref$css;

  if (!(svg instanceof SVGElement)) {
    throw new Error('SVG element is required');
  }

  svg.setAttribute('version', '1.1'); // removing attributes so they aren't doubled up

  svg.removeAttribute('xmlns');
  svg.removeAttribute('xlink'); // These are needed for the svg

  if (!svg.hasAttributeNS(prefix.xmlns, 'xmlns')) {
    svg.setAttributeNS(prefix.xmlns, 'xmlns', prefix.svg);
  }

  if (!svg.hasAttributeNS(prefix.xmlns, 'xmlns:xlink')) {
    svg.setAttributeNS(prefix.xmlns, 'xmlns:xlink', prefix.xlink);
  }

  if (css === 'inline') {
    setInlineStyles(svg, getEmptySvgDeclarationComputed());
  } else if (css === 'internal') {
    setInternalStyles(svg);
  }

  var source = new XMLSerializer().serializeToString(svg);
  var rect = svg.getBoundingClientRect();
  var result = {
    top: rect.top,
    left: rect.left,
    width: svg.width.baseVal.value,
    height: svg.height.baseVal.value,
    "class": svg.getAttribute('class'),
    id: svg.getAttribute('id'),
    name: svg.getAttribute('name'),
    childElementCount: svg.childElementCount,
    source: doctype + source
  };
  return result;
}

function setInlineStyles(svg, emptySvgDeclarationComputed) {
  function explicitlySetStyle(element) {
    var cSSStyleDeclarationComputed = getComputedStyle(element);
    var key;
    var value;
    var computedStyleStr = '';

    for (var _i = 0, len = cSSStyleDeclarationComputed.length; _i < len; _i++) {
      key = cSSStyleDeclarationComputed[_i];
      value = cSSStyleDeclarationComputed.getPropertyValue(key);

      if (value !== emptySvgDeclarationComputed.getPropertyValue(key)) {
        computedStyleStr += "".concat(key, ":").concat(value, ";");
      }
    }

    element.setAttribute('style', computedStyleStr);
  }

  function traverse(obj) {
    var tree = [];
    tree.push(obj);
    visit(obj);

    function visit(node) {
      if (node && node.hasChildNodes()) {
        var child = node.firstChild;

        while (child) {
          if (child.nodeType === 1 && child.nodeName !== 'SCRIPT') {
            tree.push(child);
            visit(child);
          }

          child = child.nextSibling;
        }
      }
    }

    return tree;
  } // hardcode computed css styles inside svg


  var allElements = traverse(svg);
  var i = allElements.length;

  while (i--) {
    explicitlySetStyle(allElements[i]);
  }
}

function setInternalStyles(svg) {
  var style = document.createElement('style');
  style.innerHTML = Array.from(document.styleSheets).map(function (styleSheet) {
    return Array.from(styleSheet.cssRules).map(function (rule) {
      return rule.cssText;
    }).join(' ');
  }).join(' ');
  svg.prepend(style);
}

export default getSource;