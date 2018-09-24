webpackJsonp([53],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Textarea.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tinymce__ = __webpack_require__("tinymce");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tinymce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tinymce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tinymce_themes_modern_theme__ = __webpack_require__("./node_modules/tinymce/themes/modern/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tinymce_themes_modern_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tinymce_themes_modern_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tinymce_plugins_table_plugin__ = __webpack_require__("./node_modules/tinymce/plugins/table/plugin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tinymce_plugins_table_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_tinymce_plugins_table_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tinymce_plugins_charmap_plugin__ = __webpack_require__("./node_modules/tinymce/plugins/charmap/plugin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tinymce_plugins_charmap_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_tinymce_plugins_charmap_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_tinymce_plugins_link_plugin__ = __webpack_require__("./node_modules/tinymce/plugins/link/plugin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_tinymce_plugins_link_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_tinymce_plugins_link_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tinymce_plugins_lists_plugin__ = __webpack_require__("./node_modules/tinymce/plugins/lists/plugin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tinymce_plugins_lists_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_tinymce_plugins_lists_plugin__);
//
//
//
//
//
//
//
//
//
//
//
//

// Core



// Plugins





/* harmony default export */ __webpack_exports__["a"] = ({
	props: ['value', 'disabled', 'placeholder', 'name', 'height'],

	data: function data() {
		return {
			editor: null
		};
	},


	watch: {
		disabled: function disabled(value) {
			this.editor.getBody().setAttribute('contenteditable', !value);
		}
	},

	mounted: function mounted() {
		var _this = this;

		var options = {
			target: this.$el.children[0],
			skin_url: '/css/skins/lightgray',
			plugins: 'table charmap link lists',
			content_css: ['//fonts.googleapis.com/css?family=Lato:300,300i,400,400i'],
			link_title: false,
			charmap: [[643, 'esh'], [353, 's (hacek)'], [269, 'c (hacek)'], [952, 'theta'], [331, 'eng'], [638, 'alveolar tap'], [240, 'eth'], [660, 'glottal stop'], [8709, 'null'], [593, 'script a'], [230, 'ash'], [596, 'open o'], [603, 'epsilon'], [601, 'schwa'], [0x301, 'acute accent'], [0x300, 'grave accent'], [0x302, 'circumflex'], [0x306, 'breve'], [0x304, 'macron'], [0x303, 'tilde'], [720, 'IPA length symbol'], [183, 'Algonquianist length symbol']],
			toolbar: 'undo redo | bold italic underline | link | charmap | bullist numlist outdent indent | table | clearformatting',
			menubar: false,
			statusbar: false,
			setup: function setup(editor) {
				editor.on('change', function (e) {
					_this.updateValue(editor.getContent());
				});

				editor.on('input', function (e) {
					_this.updateValue(editor.getContent());
				});

				editor.on('click', function (e) {
					__WEBPACK_IMPORTED_MODULE_0_tinymce___default.a.remove(_this.$el.children[0]);
				});

				function clearFormatting() {
					var text = editor.getContent({ format: "raw" });

					text = text.replace(/(?:<|<\/)(?!p|\/p|ul|\/ul|li|\/li|ol|\/ol)(?:.|\n)*?>/gm, '');
					text = text.replace(/style=['"][^>]*['"]/gm, '');

					editor.setContent(text);
				}

				editor.addButton('clearformatting', {
					image: 'https://cdn4.iconfinder.com/data/icons/text-editor-3/100/Minio_Text_Editor_Bold-16-512.png',
					tooltip: "Clear Formatting",
					onclick: clearFormatting
				});
			}
		};

		if (this.height) {
			options.height = this.height;
		}

		__WEBPACK_IMPORTED_MODULE_0_tinymce___default.a.init(options).then(function (response) {
			// Save a reference to the editor for later
			_this.editor = response[0];
		});
	},


	methods: {
		updateValue: function updateValue(value) {
			this.$emit('input', value.trim());
		}
	}
});

/***/ }),

/***/ "./node_modules/tinymce/plugins/charmap/plugin.js":
/***/ (function(module, exports) {

(function () {
var charmap = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var fireInsertCustomChar = function (editor, chr) {
    return editor.fire('insertCustomChar', { chr: chr });
  };
  var $_1lh8ev9pjm0ofy5m = { fireInsertCustomChar: fireInsertCustomChar };

  var insertChar = function (editor, chr) {
    var evtChr = $_1lh8ev9pjm0ofy5m.fireInsertCustomChar(editor, chr).chr;
    editor.execCommand('mceInsertContent', false, evtChr);
  };
  var $_4kycsa9ojm0ofy5l = { insertChar: insertChar };

  var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var getCharMap = function (editor) {
    return editor.settings.charmap;
  };
  var getCharMapAppend = function (editor) {
    return editor.settings.charmap_append;
  };
  var $_aw1nk89sjm0ofy5t = {
    getCharMap: getCharMap,
    getCharMapAppend: getCharMapAppend
  };

  var isArray = global$1.isArray;
  var getDefaultCharMap = function () {
    return [
      [
        '160',
        'no-break space'
      ],
      [
        '173',
        'soft hyphen'
      ],
      [
        '34',
        'quotation mark'
      ],
      [
        '162',
        'cent sign'
      ],
      [
        '8364',
        'euro sign'
      ],
      [
        '163',
        'pound sign'
      ],
      [
        '165',
        'yen sign'
      ],
      [
        '169',
        'copyright sign'
      ],
      [
        '174',
        'registered sign'
      ],
      [
        '8482',
        'trade mark sign'
      ],
      [
        '8240',
        'per mille sign'
      ],
      [
        '181',
        'micro sign'
      ],
      [
        '183',
        'middle dot'
      ],
      [
        '8226',
        'bullet'
      ],
      [
        '8230',
        'three dot leader'
      ],
      [
        '8242',
        'minutes / feet'
      ],
      [
        '8243',
        'seconds / inches'
      ],
      [
        '167',
        'section sign'
      ],
      [
        '182',
        'paragraph sign'
      ],
      [
        '223',
        'sharp s / ess-zed'
      ],
      [
        '8249',
        'single left-pointing angle quotation mark'
      ],
      [
        '8250',
        'single right-pointing angle quotation mark'
      ],
      [
        '171',
        'left pointing guillemet'
      ],
      [
        '187',
        'right pointing guillemet'
      ],
      [
        '8216',
        'left single quotation mark'
      ],
      [
        '8217',
        'right single quotation mark'
      ],
      [
        '8220',
        'left double quotation mark'
      ],
      [
        '8221',
        'right double quotation mark'
      ],
      [
        '8218',
        'single low-9 quotation mark'
      ],
      [
        '8222',
        'double low-9 quotation mark'
      ],
      [
        '60',
        'less-than sign'
      ],
      [
        '62',
        'greater-than sign'
      ],
      [
        '8804',
        'less-than or equal to'
      ],
      [
        '8805',
        'greater-than or equal to'
      ],
      [
        '8211',
        'en dash'
      ],
      [
        '8212',
        'em dash'
      ],
      [
        '175',
        'macron'
      ],
      [
        '8254',
        'overline'
      ],
      [
        '164',
        'currency sign'
      ],
      [
        '166',
        'broken bar'
      ],
      [
        '168',
        'diaeresis'
      ],
      [
        '161',
        'inverted exclamation mark'
      ],
      [
        '191',
        'turned question mark'
      ],
      [
        '710',
        'circumflex accent'
      ],
      [
        '732',
        'small tilde'
      ],
      [
        '176',
        'degree sign'
      ],
      [
        '8722',
        'minus sign'
      ],
      [
        '177',
        'plus-minus sign'
      ],
      [
        '247',
        'division sign'
      ],
      [
        '8260',
        'fraction slash'
      ],
      [
        '215',
        'multiplication sign'
      ],
      [
        '185',
        'superscript one'
      ],
      [
        '178',
        'superscript two'
      ],
      [
        '179',
        'superscript three'
      ],
      [
        '188',
        'fraction one quarter'
      ],
      [
        '189',
        'fraction one half'
      ],
      [
        '190',
        'fraction three quarters'
      ],
      [
        '402',
        'function / florin'
      ],
      [
        '8747',
        'integral'
      ],
      [
        '8721',
        'n-ary sumation'
      ],
      [
        '8734',
        'infinity'
      ],
      [
        '8730',
        'square root'
      ],
      [
        '8764',
        'similar to'
      ],
      [
        '8773',
        'approximately equal to'
      ],
      [
        '8776',
        'almost equal to'
      ],
      [
        '8800',
        'not equal to'
      ],
      [
        '8801',
        'identical to'
      ],
      [
        '8712',
        'element of'
      ],
      [
        '8713',
        'not an element of'
      ],
      [
        '8715',
        'contains as member'
      ],
      [
        '8719',
        'n-ary product'
      ],
      [
        '8743',
        'logical and'
      ],
      [
        '8744',
        'logical or'
      ],
      [
        '172',
        'not sign'
      ],
      [
        '8745',
        'intersection'
      ],
      [
        '8746',
        'union'
      ],
      [
        '8706',
        'partial differential'
      ],
      [
        '8704',
        'for all'
      ],
      [
        '8707',
        'there exists'
      ],
      [
        '8709',
        'diameter'
      ],
      [
        '8711',
        'backward difference'
      ],
      [
        '8727',
        'asterisk operator'
      ],
      [
        '8733',
        'proportional to'
      ],
      [
        '8736',
        'angle'
      ],
      [
        '180',
        'acute accent'
      ],
      [
        '184',
        'cedilla'
      ],
      [
        '170',
        'feminine ordinal indicator'
      ],
      [
        '186',
        'masculine ordinal indicator'
      ],
      [
        '8224',
        'dagger'
      ],
      [
        '8225',
        'double dagger'
      ],
      [
        '192',
        'A - grave'
      ],
      [
        '193',
        'A - acute'
      ],
      [
        '194',
        'A - circumflex'
      ],
      [
        '195',
        'A - tilde'
      ],
      [
        '196',
        'A - diaeresis'
      ],
      [
        '197',
        'A - ring above'
      ],
      [
        '256',
        'A - macron'
      ],
      [
        '198',
        'ligature AE'
      ],
      [
        '199',
        'C - cedilla'
      ],
      [
        '200',
        'E - grave'
      ],
      [
        '201',
        'E - acute'
      ],
      [
        '202',
        'E - circumflex'
      ],
      [
        '203',
        'E - diaeresis'
      ],
      [
        '274',
        'E - macron'
      ],
      [
        '204',
        'I - grave'
      ],
      [
        '205',
        'I - acute'
      ],
      [
        '206',
        'I - circumflex'
      ],
      [
        '207',
        'I - diaeresis'
      ],
      [
        '298',
        'I - macron'
      ],
      [
        '208',
        'ETH'
      ],
      [
        '209',
        'N - tilde'
      ],
      [
        '210',
        'O - grave'
      ],
      [
        '211',
        'O - acute'
      ],
      [
        '212',
        'O - circumflex'
      ],
      [
        '213',
        'O - tilde'
      ],
      [
        '214',
        'O - diaeresis'
      ],
      [
        '216',
        'O - slash'
      ],
      [
        '332',
        'O - macron'
      ],
      [
        '338',
        'ligature OE'
      ],
      [
        '352',
        'S - caron'
      ],
      [
        '217',
        'U - grave'
      ],
      [
        '218',
        'U - acute'
      ],
      [
        '219',
        'U - circumflex'
      ],
      [
        '220',
        'U - diaeresis'
      ],
      [
        '362',
        'U - macron'
      ],
      [
        '221',
        'Y - acute'
      ],
      [
        '376',
        'Y - diaeresis'
      ],
      [
        '562',
        'Y - macron'
      ],
      [
        '222',
        'THORN'
      ],
      [
        '224',
        'a - grave'
      ],
      [
        '225',
        'a - acute'
      ],
      [
        '226',
        'a - circumflex'
      ],
      [
        '227',
        'a - tilde'
      ],
      [
        '228',
        'a - diaeresis'
      ],
      [
        '229',
        'a - ring above'
      ],
      [
        '257',
        'a - macron'
      ],
      [
        '230',
        'ligature ae'
      ],
      [
        '231',
        'c - cedilla'
      ],
      [
        '232',
        'e - grave'
      ],
      [
        '233',
        'e - acute'
      ],
      [
        '234',
        'e - circumflex'
      ],
      [
        '235',
        'e - diaeresis'
      ],
      [
        '275',
        'e - macron'
      ],
      [
        '236',
        'i - grave'
      ],
      [
        '237',
        'i - acute'
      ],
      [
        '238',
        'i - circumflex'
      ],
      [
        '239',
        'i - diaeresis'
      ],
      [
        '299',
        'i - macron'
      ],
      [
        '240',
        'eth'
      ],
      [
        '241',
        'n - tilde'
      ],
      [
        '242',
        'o - grave'
      ],
      [
        '243',
        'o - acute'
      ],
      [
        '244',
        'o - circumflex'
      ],
      [
        '245',
        'o - tilde'
      ],
      [
        '246',
        'o - diaeresis'
      ],
      [
        '248',
        'o slash'
      ],
      [
        '333',
        'o macron'
      ],
      [
        '339',
        'ligature oe'
      ],
      [
        '353',
        's - caron'
      ],
      [
        '249',
        'u - grave'
      ],
      [
        '250',
        'u - acute'
      ],
      [
        '251',
        'u - circumflex'
      ],
      [
        '252',
        'u - diaeresis'
      ],
      [
        '363',
        'u - macron'
      ],
      [
        '253',
        'y - acute'
      ],
      [
        '254',
        'thorn'
      ],
      [
        '255',
        'y - diaeresis'
      ],
      [
        '563',
        'y - macron'
      ],
      [
        '913',
        'Alpha'
      ],
      [
        '914',
        'Beta'
      ],
      [
        '915',
        'Gamma'
      ],
      [
        '916',
        'Delta'
      ],
      [
        '917',
        'Epsilon'
      ],
      [
        '918',
        'Zeta'
      ],
      [
        '919',
        'Eta'
      ],
      [
        '920',
        'Theta'
      ],
      [
        '921',
        'Iota'
      ],
      [
        '922',
        'Kappa'
      ],
      [
        '923',
        'Lambda'
      ],
      [
        '924',
        'Mu'
      ],
      [
        '925',
        'Nu'
      ],
      [
        '926',
        'Xi'
      ],
      [
        '927',
        'Omicron'
      ],
      [
        '928',
        'Pi'
      ],
      [
        '929',
        'Rho'
      ],
      [
        '931',
        'Sigma'
      ],
      [
        '932',
        'Tau'
      ],
      [
        '933',
        'Upsilon'
      ],
      [
        '934',
        'Phi'
      ],
      [
        '935',
        'Chi'
      ],
      [
        '936',
        'Psi'
      ],
      [
        '937',
        'Omega'
      ],
      [
        '945',
        'alpha'
      ],
      [
        '946',
        'beta'
      ],
      [
        '947',
        'gamma'
      ],
      [
        '948',
        'delta'
      ],
      [
        '949',
        'epsilon'
      ],
      [
        '950',
        'zeta'
      ],
      [
        '951',
        'eta'
      ],
      [
        '952',
        'theta'
      ],
      [
        '953',
        'iota'
      ],
      [
        '954',
        'kappa'
      ],
      [
        '955',
        'lambda'
      ],
      [
        '956',
        'mu'
      ],
      [
        '957',
        'nu'
      ],
      [
        '958',
        'xi'
      ],
      [
        '959',
        'omicron'
      ],
      [
        '960',
        'pi'
      ],
      [
        '961',
        'rho'
      ],
      [
        '962',
        'final sigma'
      ],
      [
        '963',
        'sigma'
      ],
      [
        '964',
        'tau'
      ],
      [
        '965',
        'upsilon'
      ],
      [
        '966',
        'phi'
      ],
      [
        '967',
        'chi'
      ],
      [
        '968',
        'psi'
      ],
      [
        '969',
        'omega'
      ],
      [
        '8501',
        'alef symbol'
      ],
      [
        '982',
        'pi symbol'
      ],
      [
        '8476',
        'real part symbol'
      ],
      [
        '978',
        'upsilon - hook symbol'
      ],
      [
        '8472',
        'Weierstrass p'
      ],
      [
        '8465',
        'imaginary part'
      ],
      [
        '8592',
        'leftwards arrow'
      ],
      [
        '8593',
        'upwards arrow'
      ],
      [
        '8594',
        'rightwards arrow'
      ],
      [
        '8595',
        'downwards arrow'
      ],
      [
        '8596',
        'left right arrow'
      ],
      [
        '8629',
        'carriage return'
      ],
      [
        '8656',
        'leftwards double arrow'
      ],
      [
        '8657',
        'upwards double arrow'
      ],
      [
        '8658',
        'rightwards double arrow'
      ],
      [
        '8659',
        'downwards double arrow'
      ],
      [
        '8660',
        'left right double arrow'
      ],
      [
        '8756',
        'therefore'
      ],
      [
        '8834',
        'subset of'
      ],
      [
        '8835',
        'superset of'
      ],
      [
        '8836',
        'not a subset of'
      ],
      [
        '8838',
        'subset of or equal to'
      ],
      [
        '8839',
        'superset of or equal to'
      ],
      [
        '8853',
        'circled plus'
      ],
      [
        '8855',
        'circled times'
      ],
      [
        '8869',
        'perpendicular'
      ],
      [
        '8901',
        'dot operator'
      ],
      [
        '8968',
        'left ceiling'
      ],
      [
        '8969',
        'right ceiling'
      ],
      [
        '8970',
        'left floor'
      ],
      [
        '8971',
        'right floor'
      ],
      [
        '9001',
        'left-pointing angle bracket'
      ],
      [
        '9002',
        'right-pointing angle bracket'
      ],
      [
        '9674',
        'lozenge'
      ],
      [
        '9824',
        'black spade suit'
      ],
      [
        '9827',
        'black club suit'
      ],
      [
        '9829',
        'black heart suit'
      ],
      [
        '9830',
        'black diamond suit'
      ],
      [
        '8194',
        'en space'
      ],
      [
        '8195',
        'em space'
      ],
      [
        '8201',
        'thin space'
      ],
      [
        '8204',
        'zero width non-joiner'
      ],
      [
        '8205',
        'zero width joiner'
      ],
      [
        '8206',
        'left-to-right mark'
      ],
      [
        '8207',
        'right-to-left mark'
      ]
    ];
  };
  var charmapFilter = function (charmap) {
    return global$1.grep(charmap, function (item) {
      return isArray(item) && item.length === 2;
    });
  };
  var getCharsFromSetting = function (settingValue) {
    if (isArray(settingValue)) {
      return [].concat(charmapFilter(settingValue));
    }
    if (typeof settingValue === 'function') {
      return settingValue();
    }
    return [];
  };
  var extendCharMap = function (editor, charmap) {
    var userCharMap = $_aw1nk89sjm0ofy5t.getCharMap(editor);
    if (userCharMap) {
      charmap = getCharsFromSetting(userCharMap);
    }
    var userCharMapAppend = $_aw1nk89sjm0ofy5t.getCharMapAppend(editor);
    if (userCharMapAppend) {
      return [].concat(charmap).concat(getCharsFromSetting(userCharMapAppend));
    }
    return charmap;
  };
  var getCharMap$1 = function (editor) {
    return extendCharMap(editor, getDefaultCharMap());
  };
  var $_chveh89qjm0ofy5o = { getCharMap: getCharMap$1 };

  var get = function (editor) {
    var getCharMap = function () {
      return $_chveh89qjm0ofy5o.getCharMap(editor);
    };
    var insertChar = function (chr) {
      $_4kycsa9ojm0ofy5l.insertChar(editor, chr);
    };
    return {
      getCharMap: getCharMap,
      insertChar: insertChar
    };
  };
  var $_11mull9njm0ofy5k = { get: get };

  var getHtml = function (charmap) {
    var gridHtml, x, y;
    var width = Math.min(charmap.length, 25);
    var height = Math.ceil(charmap.length / width);
    gridHtml = '<table role="presentation" cellspacing="0" class="mce-charmap"><tbody>';
    for (y = 0; y < height; y++) {
      gridHtml += '<tr>';
      for (x = 0; x < width; x++) {
        var index = y * width + x;
        if (index < charmap.length) {
          var chr = charmap[index];
          var charCode = parseInt(chr[0], 10);
          var chrText = chr ? String.fromCharCode(charCode) : '&nbsp;';
          gridHtml += '<td title="' + chr[1] + '">' + '<div tabindex="-1" title="' + chr[1] + '" role="button" data-chr="' + charCode + '">' + chrText + '</div>' + '</td>';
        } else {
          gridHtml += '<td />';
        }
      }
      gridHtml += '</tr>';
    }
    gridHtml += '</tbody></table>';
    return gridHtml;
  };
  var $_eyauk69vjm0ofy64 = { getHtml: getHtml };

  var getParentTd = function (elm) {
    while (elm) {
      if (elm.nodeName === 'TD') {
        return elm;
      }
      elm = elm.parentNode;
    }
  };
  var open = function (editor) {
    var win;
    var charMapPanel = {
      type: 'container',
      html: $_eyauk69vjm0ofy64.getHtml($_chveh89qjm0ofy5o.getCharMap(editor)),
      onclick: function (e) {
        var target = e.target;
        if (/^(TD|DIV)$/.test(target.nodeName)) {
          var charDiv = getParentTd(target).firstChild;
          if (charDiv && charDiv.hasAttribute('data-chr')) {
            var charCodeString = charDiv.getAttribute('data-chr');
            var charCode = parseInt(charCodeString, 10);
            if (!isNaN(charCode)) {
              $_4kycsa9ojm0ofy5l.insertChar(editor, String.fromCharCode(charCode));
            }
            if (!e.ctrlKey) {
              win.close();
            }
          }
        }
      },
      onmouseover: function (e) {
        var td = getParentTd(e.target);
        if (td && td.firstChild) {
          win.find('#preview').text(td.firstChild.firstChild.data);
          win.find('#previewTitle').text(td.title);
        } else {
          win.find('#preview').text(' ');
          win.find('#previewTitle').text(' ');
        }
      }
    };
    win = editor.windowManager.open({
      title: 'Special character',
      spacing: 10,
      padding: 10,
      items: [
        charMapPanel,
        {
          type: 'container',
          layout: 'flex',
          direction: 'column',
          align: 'center',
          spacing: 5,
          minWidth: 160,
          minHeight: 160,
          items: [
            {
              type: 'label',
              name: 'preview',
              text: ' ',
              style: 'font-size: 40px; text-align: center',
              border: 1,
              minWidth: 140,
              minHeight: 80
            },
            {
              type: 'spacer',
              minHeight: 20
            },
            {
              type: 'label',
              name: 'previewTitle',
              text: ' ',
              style: 'white-space: pre-wrap;',
              border: 1,
              minWidth: 140
            }
          ]
        }
      ],
      buttons: [{
          text: 'Close',
          onclick: function () {
            win.close();
          }
        }]
    });
  };
  var $_c6j7vw9ujm0ofy5v = { open: open };

  var register = function (editor) {
    editor.addCommand('mceShowCharmap', function () {
      $_c6j7vw9ujm0ofy5v.open(editor);
    });
  };
  var $_1bywb99tjm0ofy5u = { register: register };

  var register$1 = function (editor) {
    editor.addButton('charmap', {
      icon: 'charmap',
      tooltip: 'Special character',
      cmd: 'mceShowCharmap'
    });
    editor.addMenuItem('charmap', {
      icon: 'charmap',
      text: 'Special character',
      cmd: 'mceShowCharmap',
      context: 'insert'
    });
  };
  var $_39lae9wjm0ofy65 = { register: register$1 };

  global.add('charmap', function (editor) {
    $_1bywb99tjm0ofy5u.register(editor);
    $_39lae9wjm0ofy65.register(editor);
    return $_11mull9njm0ofy5k.get(editor);
  });
  function Plugin () {
  }

  return Plugin;

}());
})();


/***/ }),

/***/ "./node_modules/tinymce/plugins/link/plugin.js":
/***/ (function(module, exports) {

(function () {
var link = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var global$1 = tinymce.util.Tools.resolve('tinymce.util.VK');

  var assumeExternalTargets = function (editorSettings) {
    return typeof editorSettings.link_assume_external_targets === 'boolean' ? editorSettings.link_assume_external_targets : false;
  };
  var hasContextToolbar = function (editorSettings) {
    return typeof editorSettings.link_context_toolbar === 'boolean' ? editorSettings.link_context_toolbar : false;
  };
  var getLinkList = function (editorSettings) {
    return editorSettings.link_list;
  };
  var hasDefaultLinkTarget = function (editorSettings) {
    return typeof editorSettings.default_link_target === 'string';
  };
  var getDefaultLinkTarget = function (editorSettings) {
    return editorSettings.default_link_target;
  };
  var getTargetList = function (editorSettings) {
    return editorSettings.target_list;
  };
  var setTargetList = function (editor, list) {
    editor.settings.target_list = list;
  };
  var shouldShowTargetList = function (editorSettings) {
    return getTargetList(editorSettings) !== false;
  };
  var getRelList = function (editorSettings) {
    return editorSettings.rel_list;
  };
  var hasRelList = function (editorSettings) {
    return getRelList(editorSettings) !== undefined;
  };
  var getLinkClassList = function (editorSettings) {
    return editorSettings.link_class_list;
  };
  var hasLinkClassList = function (editorSettings) {
    return getLinkClassList(editorSettings) !== undefined;
  };
  var shouldShowLinkTitle = function (editorSettings) {
    return editorSettings.link_title !== false;
  };
  var allowUnsafeLinkTarget = function (editorSettings) {
    return typeof editorSettings.allow_unsafe_link_target === 'boolean' ? editorSettings.allow_unsafe_link_target : false;
  };
  var $_4b6xsbfujm0ofzch = {
    assumeExternalTargets: assumeExternalTargets,
    hasContextToolbar: hasContextToolbar,
    getLinkList: getLinkList,
    hasDefaultLinkTarget: hasDefaultLinkTarget,
    getDefaultLinkTarget: getDefaultLinkTarget,
    getTargetList: getTargetList,
    setTargetList: setTargetList,
    shouldShowTargetList: shouldShowTargetList,
    getRelList: getRelList,
    hasRelList: hasRelList,
    getLinkClassList: getLinkClassList,
    hasLinkClassList: hasLinkClassList,
    shouldShowLinkTitle: shouldShowLinkTitle,
    allowUnsafeLinkTarget: allowUnsafeLinkTarget
  };

  var global$2 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var global$3 = tinymce.util.Tools.resolve('tinymce.Env');

  var appendClickRemove = function (link, evt) {
    document.body.appendChild(link);
    link.dispatchEvent(evt);
    document.body.removeChild(link);
  };
  var open$$1 = function (url) {
    if (!global$3.ie || global$3.ie > 10) {
      var link = document.createElement('a');
      link.target = '_blank';
      link.href = url;
      link.rel = 'noreferrer noopener';
      var evt = document.createEvent('MouseEvents');
      evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      appendClickRemove(link, evt);
    } else {
      var win = window.open('', '_blank');
      if (win) {
        win.opener = null;
        var doc = win.document;
        doc.open();
        doc.write('<meta http-equiv="refresh" content="0; url=' + global$2.DOM.encode(url) + '">');
        doc.close();
      }
    }
  };
  var $_evd3tpfvjm0ofzck = { open: open$$1 };

  var global$4 = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var toggleTargetRules = function (rel, isUnsafe) {
    var rules = ['noopener'];
    var newRel = rel ? rel.split(/\s+/) : [];
    var toString = function (rel) {
      return global$4.trim(rel.sort().join(' '));
    };
    var addTargetRules = function (rel) {
      rel = removeTargetRules(rel);
      return rel.length ? rel.concat(rules) : rules;
    };
    var removeTargetRules = function (rel) {
      return rel.filter(function (val) {
        return global$4.inArray(rules, val) === -1;
      });
    };
    newRel = isUnsafe ? addTargetRules(newRel) : removeTargetRules(newRel);
    return newRel.length ? toString(newRel) : null;
  };
  var trimCaretContainers = function (text) {
    return text.replace(/\uFEFF/g, '');
  };
  var getAnchorElement = function (editor, selectedElm) {
    selectedElm = selectedElm || editor.selection.getNode();
    if (isImageFigure(selectedElm)) {
      return editor.dom.select('a[href]', selectedElm)[0];
    } else {
      return editor.dom.getParent(selectedElm, 'a[href]');
    }
  };
  var getAnchorText = function (selection, anchorElm) {
    var text = anchorElm ? anchorElm.innerText || anchorElm.textContent : selection.getContent({ format: 'text' });
    return trimCaretContainers(text);
  };
  var isLink = function (elm) {
    return elm && elm.nodeName === 'A' && elm.href;
  };
  var hasLinks = function (elements) {
    return global$4.grep(elements, isLink).length > 0;
  };
  var isOnlyTextSelected = function (html) {
    if (/</.test(html) && (!/^<a [^>]+>[^<]+<\/a>$/.test(html) || html.indexOf('href=') === -1)) {
      return false;
    }
    return true;
  };
  var isImageFigure = function (node) {
    return node && node.nodeName === 'FIGURE' && /\bimage\b/i.test(node.className);
  };
  var link = function (editor, attachState) {
    return function (data) {
      editor.undoManager.transact(function () {
        var selectedElm = editor.selection.getNode();
        var anchorElm = getAnchorElement(editor, selectedElm);
        var linkAttrs = {
          href: data.href,
          target: data.target ? data.target : null,
          rel: data.rel ? data.rel : null,
          class: data.class ? data.class : null,
          title: data.title ? data.title : null
        };
        if (!$_4b6xsbfujm0ofzch.hasRelList(editor.settings) && $_4b6xsbfujm0ofzch.allowUnsafeLinkTarget(editor.settings) === false) {
          linkAttrs.rel = toggleTargetRules(linkAttrs.rel, linkAttrs.target === '_blank');
        }
        if (data.href === attachState.href) {
          attachState.attach();
          attachState = {};
        }
        if (anchorElm) {
          editor.focus();
          if (data.hasOwnProperty('text')) {
            if ('innerText' in anchorElm) {
              anchorElm.innerText = data.text;
            } else {
              anchorElm.textContent = data.text;
            }
          }
          editor.dom.setAttribs(anchorElm, linkAttrs);
          editor.selection.select(anchorElm);
          editor.undoManager.add();
        } else {
          if (isImageFigure(selectedElm)) {
            linkImageFigure(editor, selectedElm, linkAttrs);
          } else if (data.hasOwnProperty('text')) {
            editor.insertContent(editor.dom.createHTML('a', linkAttrs, editor.dom.encode(data.text)));
          } else {
            editor.execCommand('mceInsertLink', false, linkAttrs);
          }
        }
      });
    };
  };
  var unlink = function (editor) {
    return function () {
      editor.undoManager.transact(function () {
        var node = editor.selection.getNode();
        if (isImageFigure(node)) {
          unlinkImageFigure(editor, node);
        } else {
          editor.execCommand('unlink');
        }
      });
    };
  };
  var unlinkImageFigure = function (editor, fig) {
    var a, img;
    img = editor.dom.select('img', fig)[0];
    if (img) {
      a = editor.dom.getParents(img, 'a[href]', fig)[0];
      if (a) {
        a.parentNode.insertBefore(img, a);
        editor.dom.remove(a);
      }
    }
  };
  var linkImageFigure = function (editor, fig, attrs) {
    var a, img;
    img = editor.dom.select('img', fig)[0];
    if (img) {
      a = editor.dom.create('a', attrs);
      img.parentNode.insertBefore(a, img);
      a.appendChild(img);
    }
  };
  var $_d522tkfzjm0ofzda = {
    link: link,
    unlink: unlink,
    isLink: isLink,
    hasLinks: hasLinks,
    isOnlyTextSelected: isOnlyTextSelected,
    getAnchorElement: getAnchorElement,
    getAnchorText: getAnchorText,
    toggleTargetRules: toggleTargetRules
  };

  var global$5 = tinymce.util.Tools.resolve('tinymce.util.Delay');

  var global$6 = tinymce.util.Tools.resolve('tinymce.util.XHR');

  var attachState = {};
  var createLinkList = function (editor, callback) {
    var linkList = $_4b6xsbfujm0ofzch.getLinkList(editor.settings);
    if (typeof linkList === 'string') {
      global$6.send({
        url: linkList,
        success: function (text) {
          callback(editor, JSON.parse(text));
        }
      });
    } else if (typeof linkList === 'function') {
      linkList(function (list) {
        callback(editor, list);
      });
    } else {
      callback(editor, linkList);
    }
  };
  var buildListItems = function (inputList, itemCallback, startItems) {
    var appendItems = function (values, output) {
      output = output || [];
      global$4.each(values, function (item) {
        var menuItem = { text: item.text || item.title };
        if (item.menu) {
          menuItem.menu = appendItems(item.menu);
        } else {
          menuItem.value = item.value;
          if (itemCallback) {
            itemCallback(menuItem);
          }
        }
        output.push(menuItem);
      });
      return output;
    };
    return appendItems(inputList, startItems || []);
  };
  var delayedConfirm = function (editor, message, callback) {
    var rng = editor.selection.getRng();
    global$5.setEditorTimeout(editor, function () {
      editor.windowManager.confirm(message, function (state) {
        editor.selection.setRng(rng);
        callback(state);
      });
    });
  };
  var showDialog = function (editor, linkList) {
    var data = {};
    var selection = editor.selection;
    var dom = editor.dom;
    var anchorElm, initialText;
    var win, onlyText, textListCtrl, linkListCtrl, relListCtrl, targetListCtrl, classListCtrl, linkTitleCtrl, value;
    var linkListChangeHandler = function (e) {
      var textCtrl = win.find('#text');
      if (!textCtrl.value() || e.lastControl && textCtrl.value() === e.lastControl.text()) {
        textCtrl.value(e.control.text());
      }
      win.find('#href').value(e.control.value());
    };
    var buildAnchorListControl = function (url) {
      var anchorList = [];
      global$4.each(editor.dom.select('a:not([href])'), function (anchor) {
        var id = anchor.name || anchor.id;
        if (id) {
          anchorList.push({
            text: id,
            value: '#' + id,
            selected: url.indexOf('#' + id) !== -1
          });
        }
      });
      if (anchorList.length) {
        anchorList.unshift({
          text: 'None',
          value: ''
        });
        return {
          name: 'anchor',
          type: 'listbox',
          label: 'Anchors',
          values: anchorList,
          onselect: linkListChangeHandler
        };
      }
    };
    var updateText = function () {
      if (!initialText && onlyText && !data.text) {
        this.parent().parent().find('#text')[0].value(this.value());
      }
    };
    var urlChange = function (e) {
      var meta = e.meta || {};
      if (linkListCtrl) {
        linkListCtrl.value(editor.convertURL(this.value(), 'href'));
      }
      global$4.each(e.meta, function (value, key) {
        var inp = win.find('#' + key);
        if (key === 'text') {
          if (initialText.length === 0) {
            inp.value(value);
            data.text = value;
          }
        } else {
          inp.value(value);
        }
      });
      if (meta.attach) {
        attachState = {
          href: this.value(),
          attach: meta.attach
        };
      }
      if (!meta.text) {
        updateText.call(this);
      }
    };
    var onBeforeCall = function (e) {
      e.meta = win.toJSON();
    };
    onlyText = $_d522tkfzjm0ofzda.isOnlyTextSelected(selection.getContent());
    anchorElm = $_d522tkfzjm0ofzda.getAnchorElement(editor);
    data.text = initialText = $_d522tkfzjm0ofzda.getAnchorText(editor.selection, anchorElm);
    data.href = anchorElm ? dom.getAttrib(anchorElm, 'href') : '';
    if (anchorElm) {
      data.target = dom.getAttrib(anchorElm, 'target');
    } else if ($_4b6xsbfujm0ofzch.hasDefaultLinkTarget(editor.settings)) {
      data.target = $_4b6xsbfujm0ofzch.getDefaultLinkTarget(editor.settings);
    }
    if (value = dom.getAttrib(anchorElm, 'rel')) {
      data.rel = value;
    }
    if (value = dom.getAttrib(anchorElm, 'class')) {
      data.class = value;
    }
    if (value = dom.getAttrib(anchorElm, 'title')) {
      data.title = value;
    }
    if (onlyText) {
      textListCtrl = {
        name: 'text',
        type: 'textbox',
        size: 40,
        label: 'Text to display',
        onchange: function () {
          data.text = this.value();
        }
      };
    }
    if (linkList) {
      linkListCtrl = {
        type: 'listbox',
        label: 'Link list',
        values: buildListItems(linkList, function (item) {
          item.value = editor.convertURL(item.value || item.url, 'href');
        }, [{
            text: 'None',
            value: ''
          }]),
        onselect: linkListChangeHandler,
        value: editor.convertURL(data.href, 'href'),
        onPostRender: function () {
          linkListCtrl = this;
        }
      };
    }
    if ($_4b6xsbfujm0ofzch.shouldShowTargetList(editor.settings)) {
      if ($_4b6xsbfujm0ofzch.getTargetList(editor.settings) === undefined) {
        $_4b6xsbfujm0ofzch.setTargetList(editor, [
          {
            text: 'None',
            value: ''
          },
          {
            text: 'New window',
            value: '_blank'
          }
        ]);
      }
      targetListCtrl = {
        name: 'target',
        type: 'listbox',
        label: 'Target',
        values: buildListItems($_4b6xsbfujm0ofzch.getTargetList(editor.settings))
      };
    }
    if ($_4b6xsbfujm0ofzch.hasRelList(editor.settings)) {
      relListCtrl = {
        name: 'rel',
        type: 'listbox',
        label: 'Rel',
        values: buildListItems($_4b6xsbfujm0ofzch.getRelList(editor.settings), function (item) {
          if ($_4b6xsbfujm0ofzch.allowUnsafeLinkTarget(editor.settings) === false) {
            item.value = $_d522tkfzjm0ofzda.toggleTargetRules(item.value, data.target === '_blank');
          }
        })
      };
    }
    if ($_4b6xsbfujm0ofzch.hasLinkClassList(editor.settings)) {
      classListCtrl = {
        name: 'class',
        type: 'listbox',
        label: 'Class',
        values: buildListItems($_4b6xsbfujm0ofzch.getLinkClassList(editor.settings), function (item) {
          if (item.value) {
            item.textStyle = function () {
              return editor.formatter.getCssText({
                inline: 'a',
                classes: [item.value]
              });
            };
          }
        })
      };
    }
    if ($_4b6xsbfujm0ofzch.shouldShowLinkTitle(editor.settings)) {
      linkTitleCtrl = {
        name: 'title',
        type: 'textbox',
        label: 'Title',
        value: data.title
      };
    }
    win = editor.windowManager.open({
      title: 'Insert link',
      data: data,
      body: [
        {
          name: 'href',
          type: 'filepicker',
          filetype: 'file',
          size: 40,
          autofocus: true,
          label: 'Url',
          onchange: urlChange,
          onkeyup: updateText,
          onpaste: updateText,
          onbeforecall: onBeforeCall
        },
        textListCtrl,
        linkTitleCtrl,
        buildAnchorListControl(data.href),
        linkListCtrl,
        relListCtrl,
        targetListCtrl,
        classListCtrl
      ],
      onSubmit: function (e) {
        var assumeExternalTargets = $_4b6xsbfujm0ofzch.assumeExternalTargets(editor.settings);
        var insertLink = $_d522tkfzjm0ofzda.link(editor, attachState);
        var removeLink = $_d522tkfzjm0ofzda.unlink(editor);
        var resultData = global$4.extend({}, data, e.data);
        var href = resultData.href;
        if (!href) {
          removeLink();
          return;
        }
        if (!onlyText || resultData.text === initialText) {
          delete resultData.text;
        }
        if (href.indexOf('@') > 0 && href.indexOf('//') === -1 && href.indexOf('mailto:') === -1) {
          delayedConfirm(editor, 'The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?', function (state) {
            if (state) {
              resultData.href = 'mailto:' + href;
            }
            insertLink(resultData);
          });
          return;
        }
        if (assumeExternalTargets === true && !/^\w+:/i.test(href) || assumeExternalTargets === false && /^\s*www[\.|\d\.]/i.test(href)) {
          delayedConfirm(editor, 'The URL you entered seems to be an external link. Do you want to add the required http:// prefix?', function (state) {
            if (state) {
              resultData.href = 'http://' + href;
            }
            insertLink(resultData);
          });
          return;
        }
        insertLink(resultData);
      }
    });
  };
  var open$1 = function (editor) {
    createLinkList(editor, showDialog);
  };
  var $_8kb7qsg1jm0ofzdg = { open: open$1 };

  var getLink = function (editor, elm) {
    return editor.dom.getParent(elm, 'a[href]');
  };
  var getSelectedLink = function (editor) {
    return getLink(editor, editor.selection.getStart());
  };
  var getHref = function (elm) {
    var href = elm.getAttribute('data-mce-href');
    return href ? href : elm.getAttribute('href');
  };
  var isContextMenuVisible = function (editor) {
    var contextmenu = editor.plugins.contextmenu;
    return contextmenu ? contextmenu.isContextMenuVisible() : false;
  };
  var hasOnlyAltModifier = function (e) {
    return e.altKey === true && e.shiftKey === false && e.ctrlKey === false && e.metaKey === false;
  };
  var gotoLink = function (editor, a) {
    if (a) {
      var href = getHref(a);
      if (/^#/.test(href)) {
        var targetEl = editor.$(href);
        if (targetEl.length) {
          editor.selection.scrollIntoView(targetEl[0], true);
        }
      } else {
        $_evd3tpfvjm0ofzck.open(a.href);
      }
    }
  };
  var openDialog = function (editor) {
    return function () {
      $_8kb7qsg1jm0ofzdg.open(editor);
    };
  };
  var gotoSelectedLink = function (editor) {
    return function () {
      gotoLink(editor, getSelectedLink(editor));
    };
  };
  var leftClickedOnAHref = function (editor) {
    return function (elm) {
      var sel, rng, node;
      if ($_4b6xsbfujm0ofzch.hasContextToolbar(editor.settings) && !isContextMenuVisible(editor) && $_d522tkfzjm0ofzda.isLink(elm)) {
        sel = editor.selection;
        rng = sel.getRng();
        node = rng.startContainer;
        if (node.nodeType === 3 && sel.isCollapsed() && rng.startOffset > 0 && rng.startOffset < node.data.length) {
          return true;
        }
      }
      return false;
    };
  };
  var setupGotoLinks = function (editor) {
    editor.on('click', function (e) {
      var link = getLink(editor, e.target);
      if (link && global$1.metaKeyPressed(e)) {
        e.preventDefault();
        gotoLink(editor, link);
      }
    });
    editor.on('keydown', function (e) {
      var link = getSelectedLink(editor);
      if (link && e.keyCode === 13 && hasOnlyAltModifier(e)) {
        e.preventDefault();
        gotoLink(editor, link);
      }
    });
  };
  var toggleActiveState = function (editor) {
    return function () {
      var self = this;
      editor.on('nodechange', function (e) {
        self.active(!editor.readonly && !!$_d522tkfzjm0ofzda.getAnchorElement(editor, e.element));
      });
    };
  };
  var toggleViewLinkState = function (editor) {
    return function () {
      var self = this;
      var toggleVisibility = function (e) {
        if ($_d522tkfzjm0ofzda.hasLinks(e.parents)) {
          self.show();
        } else {
          self.hide();
        }
      };
      if (!$_d522tkfzjm0ofzda.hasLinks(editor.dom.getParents(editor.selection.getStart()))) {
        self.hide();
      }
      editor.on('nodechange', toggleVisibility);
      self.on('remove', function () {
        editor.off('nodechange', toggleVisibility);
      });
    };
  };
  var $_c3czoyfsjm0ofzcd = {
    openDialog: openDialog,
    gotoSelectedLink: gotoSelectedLink,
    leftClickedOnAHref: leftClickedOnAHref,
    setupGotoLinks: setupGotoLinks,
    toggleActiveState: toggleActiveState,
    toggleViewLinkState: toggleViewLinkState
  };

  var register = function (editor) {
    editor.addCommand('mceLink', $_c3czoyfsjm0ofzcd.openDialog(editor));
  };
  var $_17rb7bfrjm0ofzcc = { register: register };

  var setup = function (editor) {
    editor.addShortcut('Meta+K', '', $_c3czoyfsjm0ofzcd.openDialog(editor));
  };
  var $_bygts2g4jm0ofzdn = { setup: setup };

  var setupButtons = function (editor) {
    editor.addButton('link', {
      active: false,
      icon: 'link',
      tooltip: 'Insert/edit link',
      onclick: $_c3czoyfsjm0ofzcd.openDialog(editor),
      onpostrender: $_c3czoyfsjm0ofzcd.toggleActiveState(editor)
    });
    editor.addButton('unlink', {
      active: false,
      icon: 'unlink',
      tooltip: 'Remove link',
      onclick: $_d522tkfzjm0ofzda.unlink(editor),
      onpostrender: $_c3czoyfsjm0ofzcd.toggleActiveState(editor)
    });
    if (editor.addContextToolbar) {
      editor.addButton('openlink', {
        icon: 'newtab',
        tooltip: 'Open link',
        onclick: $_c3czoyfsjm0ofzcd.gotoSelectedLink(editor)
      });
    }
  };
  var setupMenuItems = function (editor) {
    editor.addMenuItem('openlink', {
      text: 'Open link',
      icon: 'newtab',
      onclick: $_c3czoyfsjm0ofzcd.gotoSelectedLink(editor),
      onPostRender: $_c3czoyfsjm0ofzcd.toggleViewLinkState(editor),
      prependToContext: true
    });
    editor.addMenuItem('link', {
      icon: 'link',
      text: 'Link',
      shortcut: 'Meta+K',
      onclick: $_c3czoyfsjm0ofzcd.openDialog(editor),
      stateSelector: 'a[href]',
      context: 'insert',
      prependToContext: true
    });
    editor.addMenuItem('unlink', {
      icon: 'unlink',
      text: 'Remove link',
      onclick: $_d522tkfzjm0ofzda.unlink(editor),
      stateSelector: 'a[href]'
    });
  };
  var setupContextToolbars = function (editor) {
    if (editor.addContextToolbar) {
      editor.addContextToolbar($_c3czoyfsjm0ofzcd.leftClickedOnAHref(editor), 'openlink | link unlink');
    }
  };
  var $_5nmf4sg5jm0ofzdp = {
    setupButtons: setupButtons,
    setupMenuItems: setupMenuItems,
    setupContextToolbars: setupContextToolbars
  };

  global.add('link', function (editor) {
    $_5nmf4sg5jm0ofzdp.setupButtons(editor);
    $_5nmf4sg5jm0ofzdp.setupMenuItems(editor);
    $_5nmf4sg5jm0ofzdp.setupContextToolbars(editor);
    $_c3czoyfsjm0ofzcd.setupGotoLinks(editor);
    $_17rb7bfrjm0ofzcc.register(editor);
    $_bygts2g4jm0ofzdn.setup(editor);
  });
  function Plugin () {
  }

  return Plugin;

}());
})();


/***/ }),

/***/ "./node_modules/tinymce/plugins/lists/plugin.js":
/***/ (function(module, exports) {

(function () {
var lists = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var global$1 = tinymce.util.Tools.resolve('tinymce.dom.RangeUtils');

  var global$2 = tinymce.util.Tools.resolve('tinymce.dom.TreeWalker');

  var global$3 = tinymce.util.Tools.resolve('tinymce.util.VK');

  var global$4 = tinymce.util.Tools.resolve('tinymce.dom.BookmarkManager');

  var global$5 = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var global$6 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var isTextNode = function (node) {
    return node && node.nodeType === 3;
  };
  var isListNode = function (node) {
    return node && /^(OL|UL|DL)$/.test(node.nodeName);
  };
  var isListItemNode = function (node) {
    return node && /^(LI|DT|DD)$/.test(node.nodeName);
  };
  var isTableCellNode = function (node) {
    return node && /^(TH|TD)$/.test(node.nodeName);
  };
  var isBr = function (node) {
    return node && node.nodeName === 'BR';
  };
  var isFirstChild = function (node) {
    return node.parentNode.firstChild === node;
  };
  var isLastChild = function (node) {
    return node.parentNode.lastChild === node;
  };
  var isTextBlock = function (editor, node) {
    return node && !!editor.schema.getTextBlockElements()[node.nodeName];
  };
  var isBlock = function (node, blockElements) {
    return node && node.nodeName in blockElements;
  };
  var isBogusBr = function (dom, node) {
    if (!isBr(node)) {
      return false;
    }
    if (dom.isBlock(node.nextSibling) && !isBr(node.previousSibling)) {
      return true;
    }
    return false;
  };
  var isEmpty = function (dom, elm, keepBookmarks) {
    var empty = dom.isEmpty(elm);
    if (keepBookmarks && dom.select('span[data-mce-type=bookmark]', elm).length > 0) {
      return false;
    }
    return empty;
  };
  var isChildOfBody = function (dom, elm) {
    return dom.isChildOf(elm, dom.getRoot());
  };
  var $_74mztagkjm0ofzg7 = {
    isTextNode: isTextNode,
    isListNode: isListNode,
    isListItemNode: isListItemNode,
    isTableCellNode: isTableCellNode,
    isBr: isBr,
    isFirstChild: isFirstChild,
    isLastChild: isLastChild,
    isTextBlock: isTextBlock,
    isBlock: isBlock,
    isBogusBr: isBogusBr,
    isEmpty: isEmpty,
    isChildOfBody: isChildOfBody
  };

  var getNormalizedEndPoint = function (container, offset) {
    var node = global$1.getNode(container, offset);
    if ($_74mztagkjm0ofzg7.isListItemNode(container) && $_74mztagkjm0ofzg7.isTextNode(node)) {
      var textNodeOffset = offset >= container.childNodes.length ? node.data.length : 0;
      return {
        container: node,
        offset: textNodeOffset
      };
    }
    return {
      container: container,
      offset: offset
    };
  };
  var normalizeRange = function (rng) {
    var outRng = rng.cloneRange();
    var rangeStart = getNormalizedEndPoint(rng.startContainer, rng.startOffset);
    outRng.setStart(rangeStart.container, rangeStart.offset);
    var rangeEnd = getNormalizedEndPoint(rng.endContainer, rng.endOffset);
    outRng.setEnd(rangeEnd.container, rangeEnd.offset);
    return outRng;
  };
  var $_crui3egjjm0ofzg5 = {
    getNormalizedEndPoint: getNormalizedEndPoint,
    normalizeRange: normalizeRange
  };

  var DOM = global$6.DOM;
  var createBookmark = function (rng) {
    var bookmark = {};
    var setupEndPoint = function (start) {
      var offsetNode, container, offset;
      container = rng[start ? 'startContainer' : 'endContainer'];
      offset = rng[start ? 'startOffset' : 'endOffset'];
      if (container.nodeType === 1) {
        offsetNode = DOM.create('span', { 'data-mce-type': 'bookmark' });
        if (container.hasChildNodes()) {
          offset = Math.min(offset, container.childNodes.length - 1);
          if (start) {
            container.insertBefore(offsetNode, container.childNodes[offset]);
          } else {
            DOM.insertAfter(offsetNode, container.childNodes[offset]);
          }
        } else {
          container.appendChild(offsetNode);
        }
        container = offsetNode;
        offset = 0;
      }
      bookmark[start ? 'startContainer' : 'endContainer'] = container;
      bookmark[start ? 'startOffset' : 'endOffset'] = offset;
    };
    setupEndPoint(true);
    if (!rng.collapsed) {
      setupEndPoint();
    }
    return bookmark;
  };
  var resolveBookmark = function (bookmark) {
    function restoreEndPoint(start) {
      var container, offset, node;
      var nodeIndex = function (container) {
        var node = container.parentNode.firstChild, idx = 0;
        while (node) {
          if (node === container) {
            return idx;
          }
          if (node.nodeType !== 1 || node.getAttribute('data-mce-type') !== 'bookmark') {
            idx++;
          }
          node = node.nextSibling;
        }
        return -1;
      };
      container = node = bookmark[start ? 'startContainer' : 'endContainer'];
      offset = bookmark[start ? 'startOffset' : 'endOffset'];
      if (!container) {
        return;
      }
      if (container.nodeType === 1) {
        offset = nodeIndex(container);
        container = container.parentNode;
        DOM.remove(node);
        if (!container.hasChildNodes() && DOM.isBlock(container)) {
          container.appendChild(DOM.create('br'));
        }
      }
      bookmark[start ? 'startContainer' : 'endContainer'] = container;
      bookmark[start ? 'startOffset' : 'endOffset'] = offset;
    }
    restoreEndPoint(true);
    restoreEndPoint();
    var rng = DOM.createRng();
    rng.setStart(bookmark.startContainer, bookmark.startOffset);
    if (bookmark.endContainer) {
      rng.setEnd(bookmark.endContainer, bookmark.endOffset);
    }
    return $_crui3egjjm0ofzg5.normalizeRange(rng);
  };
  var $_68j8lagijm0ofzg2 = {
    createBookmark: createBookmark,
    resolveBookmark: resolveBookmark
  };

  var DOM$1 = global$6.DOM;
  var normalizeList = function (dom, ul) {
    var sibling;
    var parentNode = ul.parentNode;
    if (parentNode.nodeName === 'LI' && parentNode.firstChild === ul) {
      sibling = parentNode.previousSibling;
      if (sibling && sibling.nodeName === 'LI') {
        sibling.appendChild(ul);
        if ($_74mztagkjm0ofzg7.isEmpty(dom, parentNode)) {
          DOM$1.remove(parentNode);
        }
      } else {
        DOM$1.setStyle(parentNode, 'listStyleType', 'none');
      }
    }
    if ($_74mztagkjm0ofzg7.isListNode(parentNode)) {
      sibling = parentNode.previousSibling;
      if (sibling && sibling.nodeName === 'LI') {
        sibling.appendChild(ul);
      }
    }
  };
  var normalizeLists = function (dom, element) {
    global$5.each(global$5.grep(dom.select('ol,ul', element)), function (ul) {
      normalizeList(dom, ul);
    });
  };
  var $_er8krqgljm0ofzga = {
    normalizeList: normalizeList,
    normalizeLists: normalizeLists
  };

  var global$7 = tinymce.util.Tools.resolve('tinymce.dom.DomQuery');

  var getParentList = function (editor) {
    var selectionStart = editor.selection.getStart(true);
    return editor.dom.getParent(selectionStart, 'OL,UL,DL', getClosestListRootElm(editor, selectionStart));
  };
  var isParentListSelected = function (parentList, selectedBlocks) {
    return parentList && selectedBlocks.length === 1 && selectedBlocks[0] === parentList;
  };
  var findSubLists = function (parentList) {
    return global$5.grep(parentList.querySelectorAll('ol,ul,dl'), function (elm) {
      return $_74mztagkjm0ofzg7.isListNode(elm);
    });
  };
  var getSelectedSubLists = function (editor) {
    var parentList = getParentList(editor);
    var selectedBlocks = editor.selection.getSelectedBlocks();
    if (isParentListSelected(parentList, selectedBlocks)) {
      return findSubLists(parentList);
    } else {
      return global$5.grep(selectedBlocks, function (elm) {
        return $_74mztagkjm0ofzg7.isListNode(elm) && parentList !== elm;
      });
    }
  };
  var findParentListItemsNodes = function (editor, elms) {
    var listItemsElms = global$5.map(elms, function (elm) {
      var parentLi = editor.dom.getParent(elm, 'li,dd,dt', getClosestListRootElm(editor, elm));
      return parentLi ? parentLi : elm;
    });
    return global$7.unique(listItemsElms);
  };
  var getSelectedListItems = function (editor) {
    var selectedBlocks = editor.selection.getSelectedBlocks();
    return global$5.grep(findParentListItemsNodes(editor, selectedBlocks), function (block) {
      return $_74mztagkjm0ofzg7.isListItemNode(block);
    });
  };
  var getClosestListRootElm = function (editor, elm) {
    var parentTableCell = editor.dom.getParents(elm, 'TD,TH');
    var root = parentTableCell.length > 0 ? parentTableCell[0] : editor.getBody();
    return root;
  };
  var $_3e5hb9gmjm0ofzgc = {
    getParentList: getParentList,
    getSelectedSubLists: getSelectedSubLists,
    getSelectedListItems: getSelectedListItems,
    getClosestListRootElm: getClosestListRootElm
  };

  var global$8 = tinymce.util.Tools.resolve('tinymce.Env');

  var DOM$2 = global$6.DOM;
  var createNewTextBlock = function (editor, contentNode, blockName) {
    var node, textBlock;
    var fragment = DOM$2.createFragment();
    var hasContentNode;
    var blockElements = editor.schema.getBlockElements();
    if (editor.settings.forced_root_block) {
      blockName = blockName || editor.settings.forced_root_block;
    }
    if (blockName) {
      textBlock = DOM$2.create(blockName);
      if (textBlock.tagName === editor.settings.forced_root_block) {
        DOM$2.setAttribs(textBlock, editor.settings.forced_root_block_attrs);
      }
      if (!$_74mztagkjm0ofzg7.isBlock(contentNode.firstChild, blockElements)) {
        fragment.appendChild(textBlock);
      }
    }
    if (contentNode) {
      while (node = contentNode.firstChild) {
        var nodeName = node.nodeName;
        if (!hasContentNode && (nodeName !== 'SPAN' || node.getAttribute('data-mce-type') !== 'bookmark')) {
          hasContentNode = true;
        }
        if ($_74mztagkjm0ofzg7.isBlock(node, blockElements)) {
          fragment.appendChild(node);
          textBlock = null;
        } else {
          if (blockName) {
            if (!textBlock) {
              textBlock = DOM$2.create(blockName);
              fragment.appendChild(textBlock);
            }
            textBlock.appendChild(node);
          } else {
            fragment.appendChild(node);
          }
        }
      }
    }
    if (!editor.settings.forced_root_block) {
      fragment.appendChild(DOM$2.create('br'));
    } else {
      if (!hasContentNode && (!global$8.ie || global$8.ie > 10)) {
        textBlock.appendChild(DOM$2.create('br', { 'data-mce-bogus': '1' }));
      }
    }
    return fragment;
  };
  var $_gboej7gpjm0ofzgh = { createNewTextBlock: createNewTextBlock };

  var DOM$3 = global$6.DOM;
  var splitList = function (editor, ul, li, newBlock) {
    var tmpRng, fragment, bookmarks, node;
    var removeAndKeepBookmarks = function (targetNode) {
      global$5.each(bookmarks, function (node) {
        targetNode.parentNode.insertBefore(node, li.parentNode);
      });
      DOM$3.remove(targetNode);
    };
    bookmarks = DOM$3.select('span[data-mce-type="bookmark"]', ul);
    newBlock = newBlock || $_gboej7gpjm0ofzgh.createNewTextBlock(editor, li);
    tmpRng = DOM$3.createRng();
    tmpRng.setStartAfter(li);
    tmpRng.setEndAfter(ul);
    fragment = tmpRng.extractContents();
    for (node = fragment.firstChild; node; node = node.firstChild) {
      if (node.nodeName === 'LI' && editor.dom.isEmpty(node)) {
        DOM$3.remove(node);
        break;
      }
    }
    if (!editor.dom.isEmpty(fragment)) {
      DOM$3.insertAfter(fragment, ul);
    }
    DOM$3.insertAfter(newBlock, ul);
    if ($_74mztagkjm0ofzg7.isEmpty(editor.dom, li.parentNode)) {
      removeAndKeepBookmarks(li.parentNode);
    }
    DOM$3.remove(li);
    if ($_74mztagkjm0ofzg7.isEmpty(editor.dom, ul)) {
      DOM$3.remove(ul);
    }
  };
  var $_f3a77tgojm0ofzgf = { splitList: splitList };

  var DOM$4 = global$6.DOM;
  var removeEmptyLi = function (dom, li) {
    if ($_74mztagkjm0ofzg7.isEmpty(dom, li)) {
      DOM$4.remove(li);
    }
  };
  var outdent = function (editor, li) {
    var ul = li.parentNode;
    var ulParent, newBlock;
    if (ul) {
      ulParent = ul.parentNode;
    } else {
      removeEmptyLi(editor.dom, li);
      return true;
    }
    if (ul === editor.getBody()) {
      return true;
    }
    if (li.nodeName === 'DD') {
      DOM$4.rename(li, 'DT');
      return true;
    }
    if ($_74mztagkjm0ofzg7.isFirstChild(li) && $_74mztagkjm0ofzg7.isLastChild(li)) {
      if (ulParent.nodeName === 'LI') {
        DOM$4.insertAfter(li, ulParent);
        removeEmptyLi(editor.dom, ulParent);
        DOM$4.remove(ul);
      } else if ($_74mztagkjm0ofzg7.isListNode(ulParent)) {
        DOM$4.remove(ul, true);
      } else {
        ulParent.insertBefore($_gboej7gpjm0ofzgh.createNewTextBlock(editor, li), ul);
        DOM$4.remove(ul);
      }
      return true;
    } else if ($_74mztagkjm0ofzg7.isFirstChild(li)) {
      if (ulParent.nodeName === 'LI') {
        DOM$4.insertAfter(li, ulParent);
        li.appendChild(ul);
        removeEmptyLi(editor.dom, ulParent);
      } else if ($_74mztagkjm0ofzg7.isListNode(ulParent)) {
        ulParent.insertBefore(li, ul);
      } else {
        ulParent.insertBefore($_gboej7gpjm0ofzgh.createNewTextBlock(editor, li), ul);
        DOM$4.remove(li);
      }
      return true;
    } else if ($_74mztagkjm0ofzg7.isLastChild(li)) {
      if (ulParent.nodeName === 'LI') {
        DOM$4.insertAfter(li, ulParent);
      } else if ($_74mztagkjm0ofzg7.isListNode(ulParent)) {
        DOM$4.insertAfter(li, ul);
      } else {
        DOM$4.insertAfter($_gboej7gpjm0ofzgh.createNewTextBlock(editor, li), ul);
        DOM$4.remove(li);
      }
      return true;
    }
    if (ulParent.nodeName === 'LI') {
      ul = ulParent;
      newBlock = $_gboej7gpjm0ofzgh.createNewTextBlock(editor, li, 'LI');
    } else if ($_74mztagkjm0ofzg7.isListNode(ulParent)) {
      newBlock = $_gboej7gpjm0ofzgh.createNewTextBlock(editor, li, 'LI');
    } else {
      newBlock = $_gboej7gpjm0ofzgh.createNewTextBlock(editor, li);
    }
    $_f3a77tgojm0ofzgf.splitList(editor, ul, li, newBlock);
    $_er8krqgljm0ofzga.normalizeLists(editor.dom, ul.parentNode);
    return true;
  };
  var outdentSelection = function (editor) {
    var listElements = $_3e5hb9gmjm0ofzgc.getSelectedListItems(editor);
    if (listElements.length) {
      var bookmark = $_68j8lagijm0ofzg2.createBookmark(editor.selection.getRng());
      var i = void 0, y = void 0;
      var root = $_3e5hb9gmjm0ofzgc.getClosestListRootElm(editor, editor.selection.getStart(true));
      i = listElements.length;
      while (i--) {
        var node = listElements[i].parentNode;
        while (node && node !== root) {
          y = listElements.length;
          while (y--) {
            if (listElements[y] === node) {
              listElements.splice(i, 1);
              break;
            }
          }
          node = node.parentNode;
        }
      }
      for (i = 0; i < listElements.length; i++) {
        if (!outdent(editor, listElements[i]) && i === 0) {
          break;
        }
      }
      editor.selection.setRng($_68j8lagijm0ofzg2.resolveBookmark(bookmark));
      editor.nodeChanged();
      return true;
    }
  };
  var $_40lbtggjm0ofzfy = {
    outdent: outdent,
    outdentSelection: outdentSelection
  };

  var updateListStyle = function (dom, el, detail) {
    var type = detail['list-style-type'] ? detail['list-style-type'] : null;
    dom.setStyle(el, 'list-style-type', type);
  };
  var setAttribs = function (elm, attrs) {
    global$5.each(attrs, function (value, key) {
      elm.setAttribute(key, value);
    });
  };
  var updateListAttrs = function (dom, el, detail) {
    setAttribs(el, detail['list-attributes']);
    global$5.each(dom.select('li', el), function (li) {
      setAttribs(li, detail['list-item-attributes']);
    });
  };
  var updateListWithDetails = function (dom, el, detail) {
    updateListStyle(dom, el, detail);
    updateListAttrs(dom, el, detail);
  };
  var removeStyles = function (dom, element, styles) {
    global$5.each(styles, function (style) {
      var _a;
      return dom.setStyle(element, (_a = {}, _a[style] = '', _a));
    });
  };
  var getEndPointNode = function (editor, rng, start, root) {
    var container, offset;
    container = rng[start ? 'startContainer' : 'endContainer'];
    offset = rng[start ? 'startOffset' : 'endOffset'];
    if (container.nodeType === 1) {
      container = container.childNodes[Math.min(offset, container.childNodes.length - 1)] || container;
    }
    if (!start && $_74mztagkjm0ofzg7.isBr(container.nextSibling)) {
      container = container.nextSibling;
    }
    while (container.parentNode !== root) {
      if ($_74mztagkjm0ofzg7.isTextBlock(editor, container)) {
        return container;
      }
      if (/^(TD|TH)$/.test(container.parentNode.nodeName)) {
        return container;
      }
      container = container.parentNode;
    }
    return container;
  };
  var getSelectedTextBlocks = function (editor, rng, root) {
    var textBlocks = [], dom = editor.dom;
    var startNode = getEndPointNode(editor, rng, true, root);
    var endNode = getEndPointNode(editor, rng, false, root);
    var block;
    var siblings = [];
    for (var node = startNode; node; node = node.nextSibling) {
      siblings.push(node);
      if (node === endNode) {
        break;
      }
    }
    global$5.each(siblings, function (node) {
      if ($_74mztagkjm0ofzg7.isTextBlock(editor, node)) {
        textBlocks.push(node);
        block = null;
        return;
      }
      if (dom.isBlock(node) || $_74mztagkjm0ofzg7.isBr(node)) {
        if ($_74mztagkjm0ofzg7.isBr(node)) {
          dom.remove(node);
        }
        block = null;
        return;
      }
      var nextSibling = node.nextSibling;
      if (global$4.isBookmarkNode(node)) {
        if ($_74mztagkjm0ofzg7.isTextBlock(editor, nextSibling) || !nextSibling && node.parentNode === root) {
          block = null;
          return;
        }
      }
      if (!block) {
        block = dom.create('p');
        node.parentNode.insertBefore(block, node);
        textBlocks.push(block);
      }
      block.appendChild(node);
    });
    return textBlocks;
  };
  var hasCompatibleStyle = function (dom, sib, detail) {
    var sibStyle = dom.getStyle(sib, 'list-style-type');
    var detailStyle = detail ? detail['list-style-type'] : '';
    detailStyle = detailStyle === null ? '' : detailStyle;
    return sibStyle === detailStyle;
  };
  var applyList = function (editor, listName, detail) {
    if (detail === void 0) {
      detail = {};
    }
    var rng = editor.selection.getRng(true);
    var bookmark;
    var listItemName = 'LI';
    var root = $_3e5hb9gmjm0ofzgc.getClosestListRootElm(editor, editor.selection.getStart(true));
    var dom = editor.dom;
    if (dom.getContentEditable(editor.selection.getNode()) === 'false') {
      return;
    }
    listName = listName.toUpperCase();
    if (listName === 'DL') {
      listItemName = 'DT';
    }
    bookmark = $_68j8lagijm0ofzg2.createBookmark(rng);
    global$5.each(getSelectedTextBlocks(editor, rng, root), function (block) {
      var listBlock, sibling;
      sibling = block.previousSibling;
      if (sibling && $_74mztagkjm0ofzg7.isListNode(sibling) && sibling.nodeName === listName && hasCompatibleStyle(dom, sibling, detail)) {
        listBlock = sibling;
        block = dom.rename(block, listItemName);
        sibling.appendChild(block);
      } else {
        listBlock = dom.create(listName);
        block.parentNode.insertBefore(listBlock, block);
        listBlock.appendChild(block);
        block = dom.rename(block, listItemName);
      }
      removeStyles(dom, block, [
        'margin',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'margin-top',
        'padding',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'padding-top'
      ]);
      updateListWithDetails(dom, listBlock, detail);
      mergeWithAdjacentLists(editor.dom, listBlock);
    });
    editor.selection.setRng($_68j8lagijm0ofzg2.resolveBookmark(bookmark));
  };
  var removeList = function (editor) {
    var bookmark = $_68j8lagijm0ofzg2.createBookmark(editor.selection.getRng(true));
    var root = $_3e5hb9gmjm0ofzgc.getClosestListRootElm(editor, editor.selection.getStart(true));
    var listItems = $_3e5hb9gmjm0ofzgc.getSelectedListItems(editor);
    var emptyListItems = global$5.grep(listItems, function (li) {
      return editor.dom.isEmpty(li);
    });
    listItems = global$5.grep(listItems, function (li) {
      return !editor.dom.isEmpty(li);
    });
    global$5.each(emptyListItems, function (li) {
      if ($_74mztagkjm0ofzg7.isEmpty(editor.dom, li)) {
        $_40lbtggjm0ofzfy.outdent(editor, li);
        return;
      }
    });
    global$5.each(listItems, function (li) {
      var node, rootList;
      if (li.parentNode === editor.getBody()) {
        return;
      }
      for (node = li; node && node !== root; node = node.parentNode) {
        if ($_74mztagkjm0ofzg7.isListNode(node)) {
          rootList = node;
        }
      }
      $_f3a77tgojm0ofzgf.splitList(editor, rootList, li);
      $_er8krqgljm0ofzga.normalizeLists(editor.dom, rootList.parentNode);
    });
    editor.selection.setRng($_68j8lagijm0ofzg2.resolveBookmark(bookmark));
  };
  var isValidLists = function (list1, list2) {
    return list1 && list2 && $_74mztagkjm0ofzg7.isListNode(list1) && list1.nodeName === list2.nodeName;
  };
  var hasSameListStyle = function (dom, list1, list2) {
    var targetStyle = dom.getStyle(list1, 'list-style-type', true);
    var style = dom.getStyle(list2, 'list-style-type', true);
    return targetStyle === style;
  };
  var hasSameClasses = function (elm1, elm2) {
    return elm1.className === elm2.className;
  };
  var shouldMerge = function (dom, list1, list2) {
    return isValidLists(list1, list2) && hasSameListStyle(dom, list1, list2) && hasSameClasses(list1, list2);
  };
  var mergeWithAdjacentLists = function (dom, listBlock) {
    var sibling, node;
    sibling = listBlock.nextSibling;
    if (shouldMerge(dom, listBlock, sibling)) {
      while (node = sibling.firstChild) {
        listBlock.appendChild(node);
      }
      dom.remove(sibling);
    }
    sibling = listBlock.previousSibling;
    if (shouldMerge(dom, listBlock, sibling)) {
      while (node = sibling.lastChild) {
        listBlock.insertBefore(node, listBlock.firstChild);
      }
      dom.remove(sibling);
    }
  };
  var updateList = function (dom, list, listName, detail) {
    if (list.nodeName !== listName) {
      var newList = dom.rename(list, listName);
      updateListWithDetails(dom, newList, detail);
    } else {
      updateListWithDetails(dom, list, detail);
    }
  };
  var toggleMultipleLists = function (editor, parentList, lists, listName, detail) {
    if (parentList.nodeName === listName && !hasListStyleDetail(detail)) {
      removeList(editor);
    } else {
      var bookmark = $_68j8lagijm0ofzg2.createBookmark(editor.selection.getRng(true));
      global$5.each([parentList].concat(lists), function (elm) {
        updateList(editor.dom, elm, listName, detail);
      });
      editor.selection.setRng($_68j8lagijm0ofzg2.resolveBookmark(bookmark));
    }
  };
  var hasListStyleDetail = function (detail) {
    return 'list-style-type' in detail;
  };
  var toggleSingleList = function (editor, parentList, listName, detail) {
    if (parentList === editor.getBody()) {
      return;
    }
    if (parentList) {
      if (parentList.nodeName === listName && !hasListStyleDetail(detail)) {
        removeList(editor);
      } else {
        var bookmark = $_68j8lagijm0ofzg2.createBookmark(editor.selection.getRng(true));
        updateListWithDetails(editor.dom, parentList, detail);
        mergeWithAdjacentLists(editor.dom, editor.dom.rename(parentList, listName));
        editor.selection.setRng($_68j8lagijm0ofzg2.resolveBookmark(bookmark));
      }
    } else {
      applyList(editor, listName, detail);
    }
  };
  var toggleList = function (editor, listName, detail) {
    var parentList = $_3e5hb9gmjm0ofzgc.getParentList(editor);
    var selectedSubLists = $_3e5hb9gmjm0ofzgc.getSelectedSubLists(editor);
    detail = detail ? detail : {};
    if (parentList && selectedSubLists.length > 0) {
      toggleMultipleLists(editor, parentList, selectedSubLists, listName, detail);
    } else {
      toggleSingleList(editor, parentList, listName, detail);
    }
  };
  var $_9gjx41gdjm0ofzfr = {
    toggleList: toggleList,
    removeList: removeList,
    mergeWithAdjacentLists: mergeWithAdjacentLists
  };

  var findNextCaretContainer = function (editor, rng, isForward, root) {
    var node = rng.startContainer;
    var offset = rng.startOffset;
    var nonEmptyBlocks, walker;
    if (node.nodeType === 3 && (isForward ? offset < node.data.length : offset > 0)) {
      return node;
    }
    nonEmptyBlocks = editor.schema.getNonEmptyElements();
    if (node.nodeType === 1) {
      node = global$1.getNode(node, offset);
    }
    walker = new global$2(node, root);
    if (isForward) {
      if ($_74mztagkjm0ofzg7.isBogusBr(editor.dom, node)) {
        walker.next();
      }
    }
    while (node = walker[isForward ? 'next' : 'prev2']()) {
      if (node.nodeName === 'LI' && !node.hasChildNodes()) {
        return node;
      }
      if (nonEmptyBlocks[node.nodeName]) {
        return node;
      }
      if (node.nodeType === 3 && node.data.length > 0) {
        return node;
      }
    }
  };
  var hasOnlyOneBlockChild = function (dom, elm) {
    var childNodes = elm.childNodes;
    return childNodes.length === 1 && !$_74mztagkjm0ofzg7.isListNode(childNodes[0]) && dom.isBlock(childNodes[0]);
  };
  var unwrapSingleBlockChild = function (dom, elm) {
    if (hasOnlyOneBlockChild(dom, elm)) {
      dom.remove(elm.firstChild, true);
    }
  };
  var moveChildren = function (dom, fromElm, toElm) {
    var node, targetElm;
    targetElm = hasOnlyOneBlockChild(dom, toElm) ? toElm.firstChild : toElm;
    unwrapSingleBlockChild(dom, fromElm);
    if (!$_74mztagkjm0ofzg7.isEmpty(dom, fromElm, true)) {
      while (node = fromElm.firstChild) {
        targetElm.appendChild(node);
      }
    }
  };
  var mergeLiElements = function (dom, fromElm, toElm) {
    var node, listNode;
    var ul = fromElm.parentNode;
    if (!$_74mztagkjm0ofzg7.isChildOfBody(dom, fromElm) || !$_74mztagkjm0ofzg7.isChildOfBody(dom, toElm)) {
      return;
    }
    if ($_74mztagkjm0ofzg7.isListNode(toElm.lastChild)) {
      listNode = toElm.lastChild;
    }
    if (ul === toElm.lastChild) {
      if ($_74mztagkjm0ofzg7.isBr(ul.previousSibling)) {
        dom.remove(ul.previousSibling);
      }
    }
    node = toElm.lastChild;
    if (node && $_74mztagkjm0ofzg7.isBr(node) && fromElm.hasChildNodes()) {
      dom.remove(node);
    }
    if ($_74mztagkjm0ofzg7.isEmpty(dom, toElm, true)) {
      dom.$(toElm).empty();
    }
    moveChildren(dom, fromElm, toElm);
    if (listNode) {
      toElm.appendChild(listNode);
    }
    dom.remove(fromElm);
    if ($_74mztagkjm0ofzg7.isEmpty(dom, ul) && ul !== dom.getRoot()) {
      dom.remove(ul);
    }
  };
  var mergeIntoEmptyLi = function (editor, fromLi, toLi) {
    editor.dom.$(toLi).empty();
    mergeLiElements(editor.dom, fromLi, toLi);
    editor.selection.setCursorLocation(toLi);
  };
  var mergeForward = function (editor, rng, fromLi, toLi) {
    var dom = editor.dom;
    if (dom.isEmpty(toLi)) {
      mergeIntoEmptyLi(editor, fromLi, toLi);
    } else {
      var bookmark = $_68j8lagijm0ofzg2.createBookmark(rng);
      mergeLiElements(dom, fromLi, toLi);
      editor.selection.setRng($_68j8lagijm0ofzg2.resolveBookmark(bookmark));
    }
  };
  var mergeBackward = function (editor, rng, fromLi, toLi) {
    var bookmark = $_68j8lagijm0ofzg2.createBookmark(rng);
    mergeLiElements(editor.dom, fromLi, toLi);
    var resolvedBookmark = $_68j8lagijm0ofzg2.resolveBookmark(bookmark);
    editor.selection.setRng(resolvedBookmark);
  };
  var backspaceDeleteFromListToListCaret = function (editor, isForward) {
    var dom = editor.dom, selection = editor.selection;
    var selectionStartElm = selection.getStart();
    var root = $_3e5hb9gmjm0ofzgc.getClosestListRootElm(editor, selectionStartElm);
    var li = dom.getParent(selection.getStart(), 'LI', root);
    var ul, rng, otherLi;
    if (li) {
      ul = li.parentNode;
      if (ul === editor.getBody() && $_74mztagkjm0ofzg7.isEmpty(dom, ul)) {
        return true;
      }
      rng = $_crui3egjjm0ofzg5.normalizeRange(selection.getRng(true));
      otherLi = dom.getParent(findNextCaretContainer(editor, rng, isForward, root), 'LI', root);
      if (otherLi && otherLi !== li) {
        if (isForward) {
          mergeForward(editor, rng, otherLi, li);
        } else {
          mergeBackward(editor, rng, li, otherLi);
        }
        return true;
      } else if (!otherLi) {
        if (!isForward) {
          $_9gjx41gdjm0ofzfr.removeList(editor);
          return true;
        }
      }
    }
    return false;
  };
  var removeBlock = function (dom, block, root) {
    var parentBlock = dom.getParent(block.parentNode, dom.isBlock, root);
    dom.remove(block);
    if (parentBlock && dom.isEmpty(parentBlock)) {
      dom.remove(parentBlock);
    }
  };
  var backspaceDeleteIntoListCaret = function (editor, isForward) {
    var dom = editor.dom;
    var selectionStartElm = editor.selection.getStart();
    var root = $_3e5hb9gmjm0ofzgc.getClosestListRootElm(editor, selectionStartElm);
    var block = dom.getParent(selectionStartElm, dom.isBlock, root);
    if (block && dom.isEmpty(block)) {
      var rng = $_crui3egjjm0ofzg5.normalizeRange(editor.selection.getRng(true));
      var otherLi_1 = dom.getParent(findNextCaretContainer(editor, rng, isForward, root), 'LI', root);
      if (otherLi_1) {
        editor.undoManager.transact(function () {
          removeBlock(dom, block, root);
          $_9gjx41gdjm0ofzfr.mergeWithAdjacentLists(dom, otherLi_1.parentNode);
          editor.selection.select(otherLi_1, true);
          editor.selection.collapse(isForward);
        });
        return true;
      }
    }
    return false;
  };
  var backspaceDeleteCaret = function (editor, isForward) {
    return backspaceDeleteFromListToListCaret(editor, isForward) || backspaceDeleteIntoListCaret(editor, isForward);
  };
  var backspaceDeleteRange = function (editor) {
    var selectionStartElm = editor.selection.getStart();
    var root = $_3e5hb9gmjm0ofzgc.getClosestListRootElm(editor, selectionStartElm);
    var startListParent = editor.dom.getParent(selectionStartElm, 'LI,DT,DD', root);
    if (startListParent || $_3e5hb9gmjm0ofzgc.getSelectedListItems(editor).length > 0) {
      editor.undoManager.transact(function () {
        editor.execCommand('Delete');
        $_er8krqgljm0ofzga.normalizeLists(editor.dom, editor.getBody());
      });
      return true;
    }
    return false;
  };
  var backspaceDelete = function (editor, isForward) {
    return editor.selection.isCollapsed() ? backspaceDeleteCaret(editor, isForward) : backspaceDeleteRange(editor);
  };
  var setup = function (editor) {
    editor.on('keydown', function (e) {
      if (e.keyCode === global$3.BACKSPACE) {
        if (backspaceDelete(editor, false)) {
          e.preventDefault();
        }
      } else if (e.keyCode === global$3.DELETE) {
        if (backspaceDelete(editor, true)) {
          e.preventDefault();
        }
      }
    });
  };
  var $_b0poo3g9jm0ofzfi = {
    setup: setup,
    backspaceDelete: backspaceDelete
  };

  var get = function (editor) {
    return {
      backspaceDelete: function (isForward) {
        $_b0poo3g9jm0ofzfi.backspaceDelete(editor, isForward);
      }
    };
  };
  var $_c4ki86g8jm0ofzfg = { get: get };

  var DOM$5 = global$6.DOM;
  var mergeLists = function (from, to) {
    var node;
    if ($_74mztagkjm0ofzg7.isListNode(from)) {
      while (node = from.firstChild) {
        to.appendChild(node);
      }
      DOM$5.remove(from);
    }
  };
  var indent = function (li) {
    var sibling, newList, listStyle;
    if (li.nodeName === 'DT') {
      DOM$5.rename(li, 'DD');
      return true;
    }
    sibling = li.previousSibling;
    if (sibling && $_74mztagkjm0ofzg7.isListNode(sibling)) {
      sibling.appendChild(li);
      return true;
    }
    if (sibling && sibling.nodeName === 'LI' && $_74mztagkjm0ofzg7.isListNode(sibling.lastChild)) {
      sibling.lastChild.appendChild(li);
      mergeLists(li.lastChild, sibling.lastChild);
      return true;
    }
    sibling = li.nextSibling;
    if (sibling && $_74mztagkjm0ofzg7.isListNode(sibling)) {
      sibling.insertBefore(li, sibling.firstChild);
      return true;
    }
    sibling = li.previousSibling;
    if (sibling && sibling.nodeName === 'LI') {
      newList = DOM$5.create(li.parentNode.nodeName);
      listStyle = DOM$5.getStyle(li.parentNode, 'listStyleType');
      if (listStyle) {
        DOM$5.setStyle(newList, 'listStyleType', listStyle);
      }
      sibling.appendChild(newList);
      newList.appendChild(li);
      mergeLists(li.lastChild, newList);
      return true;
    }
    return false;
  };
  var indentSelection = function (editor) {
    var listElements = $_3e5hb9gmjm0ofzgc.getSelectedListItems(editor);
    if (listElements.length) {
      var bookmark = $_68j8lagijm0ofzg2.createBookmark(editor.selection.getRng(true));
      for (var i = 0; i < listElements.length; i++) {
        if (!indent(listElements[i]) && i === 0) {
          break;
        }
      }
      editor.selection.setRng($_68j8lagijm0ofzg2.resolveBookmark(bookmark));
      editor.nodeChanged();
      return true;
    }
  };
  var $_917p8bgsjm0ofzgo = { indentSelection: indentSelection };

  var queryListCommandState = function (editor, listName) {
    return function () {
      var parentList = editor.dom.getParent(editor.selection.getStart(), 'UL,OL,DL');
      return parentList && parentList.nodeName === listName;
    };
  };
  var register = function (editor) {
    editor.on('BeforeExecCommand', function (e) {
      var cmd = e.command.toLowerCase();
      var isHandled;
      if (cmd === 'indent') {
        if ($_917p8bgsjm0ofzgo.indentSelection(editor)) {
          isHandled = true;
        }
      } else if (cmd === 'outdent') {
        if ($_40lbtggjm0ofzfy.outdentSelection(editor)) {
          isHandled = true;
        }
      }
      if (isHandled) {
        editor.fire('ExecCommand', { command: e.command });
        e.preventDefault();
        return true;
      }
    });
    editor.addCommand('InsertUnorderedList', function (ui, detail) {
      $_9gjx41gdjm0ofzfr.toggleList(editor, 'UL', detail);
    });
    editor.addCommand('InsertOrderedList', function (ui, detail) {
      $_9gjx41gdjm0ofzfr.toggleList(editor, 'OL', detail);
    });
    editor.addCommand('InsertDefinitionList', function (ui, detail) {
      $_9gjx41gdjm0ofzfr.toggleList(editor, 'DL', detail);
    });
    editor.addQueryStateHandler('InsertUnorderedList', queryListCommandState(editor, 'UL'));
    editor.addQueryStateHandler('InsertOrderedList', queryListCommandState(editor, 'OL'));
    editor.addQueryStateHandler('InsertDefinitionList', queryListCommandState(editor, 'DL'));
  };
  var $_hekmbgrjm0ofzgm = { register: register };

  var shouldIndentOnTab = function (editor) {
    return editor.getParam('lists_indent_on_tab', true);
  };
  var $_2iimujgujm0ofzgs = { shouldIndentOnTab: shouldIndentOnTab };

  var setupTabKey = function (editor) {
    editor.on('keydown', function (e) {
      if (e.keyCode !== global$3.TAB || global$3.metaKeyPressed(e)) {
        return;
      }
      if (editor.dom.getParent(editor.selection.getStart(), 'LI,DT,DD')) {
        e.preventDefault();
        if (e.shiftKey) {
          $_40lbtggjm0ofzfy.outdentSelection(editor);
        } else {
          $_917p8bgsjm0ofzgo.indentSelection(editor);
        }
      }
    });
  };
  var setup$1 = function (editor) {
    if ($_2iimujgujm0ofzgs.shouldIndentOnTab(editor)) {
      setupTabKey(editor);
    }
    $_b0poo3g9jm0ofzfi.setup(editor);
  };
  var $_9so6nrgtjm0ofzgq = { setup: setup$1 };

  var findIndex = function (list, predicate) {
    for (var index = 0; index < list.length; index++) {
      var element = list[index];
      if (predicate(element)) {
        return index;
      }
    }
    return -1;
  };
  var listState = function (editor, listName) {
    return function (e) {
      var ctrl = e.control;
      editor.on('NodeChange', function (e) {
        var tableCellIndex = findIndex(e.parents, $_74mztagkjm0ofzg7.isTableCellNode);
        var parents = tableCellIndex !== -1 ? e.parents.slice(0, tableCellIndex) : e.parents;
        var lists = global$5.grep(parents, $_74mztagkjm0ofzg7.isListNode);
        ctrl.active(lists.length > 0 && lists[0].nodeName === listName);
      });
    };
  };
  var indentPostRender = function (editor) {
    return function (e) {
      var ctrl = e.control;
      editor.on('nodechange', function () {
        var listItemBlocks = $_3e5hb9gmjm0ofzgc.getSelectedListItems(editor);
        var disable = listItemBlocks.length > 0 && $_74mztagkjm0ofzg7.isFirstChild(listItemBlocks[0]);
        ctrl.disabled(disable);
      });
    };
  };
  var register$1 = function (editor) {
    var hasPlugin = function (editor, plugin) {
      var plugins = editor.settings.plugins ? editor.settings.plugins : '';
      return global$5.inArray(plugins.split(/[ ,]/), plugin) !== -1;
    };
    if (!hasPlugin(editor, 'advlist')) {
      editor.addButton('numlist', {
        active: false,
        title: 'Numbered list',
        cmd: 'InsertOrderedList',
        onPostRender: listState(editor, 'OL')
      });
      editor.addButton('bullist', {
        active: false,
        title: 'Bullet list',
        cmd: 'InsertUnorderedList',
        onPostRender: listState(editor, 'UL')
      });
    }
    editor.addButton('indent', {
      icon: 'indent',
      title: 'Increase indent',
      cmd: 'Indent',
      onPostRender: indentPostRender(editor)
    });
  };
  var $_cef9vxgvjm0ofzgt = { register: register$1 };

  global.add('lists', function (editor) {
    $_9so6nrgtjm0ofzgq.setup(editor);
    $_cef9vxgvjm0ofzgt.register(editor);
    $_hekmbgrjm0ofzgm.register(editor);
    return $_c4ki86g8jm0ofzfg.get(editor);
  });
  function Plugin () {
  }

  return Plugin;

}());
})();


/***/ }),

/***/ "./node_modules/tinymce/plugins/table/plugin.js":
/***/ (function(module, exports) {

(function () {
var table = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var noop = function () {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      x[_i] = arguments[_i];
    }
  };

  var compose = function (fa, fb) {
    return function () {
      var x = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
      }
      return fa(fb.apply(null, arguments));
    };
  };
  var constant = function (value) {
    return function () {
      return value;
    };
  };
  var identity = function (x) {
    return x;
  };

  var curry = function (f) {
    var x = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      x[_i - 1] = arguments[_i];
    }
    var args = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++)
      args[i - 1] = arguments[i];
    return function () {
      var x = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
      }
      var newArgs = new Array(arguments.length);
      for (var j = 0; j < newArgs.length; j++)
        newArgs[j] = arguments[j];
      var all = args.concat(newArgs);
      return f.apply(null, all);
    };
  };
  var not = function (f) {
    return function () {
      var x = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
      }
      return !f.apply(null, arguments);
    };
  };
  var die = function (msg) {
    return function () {
      throw new Error(msg);
    };
  };
  var apply = function (f) {
    return f();
  };

  var never = constant(false);
  var always = constant(true);

  var never$1 = never;
  var always$1 = always;
  var none = function () {
    return NONE;
  };
  var NONE = function () {
    var eq = function (o) {
      return o.isNone();
    };
    var call$$1 = function (thunk) {
      return thunk();
    };
    var id = function (n) {
      return n;
    };
    var noop$$1 = function () {
    };
    var nul = function () {
      return null;
    };
    var undef = function () {
      return undefined;
    };
    var me = {
      fold: function (n, s) {
        return n();
      },
      is: never$1,
      isSome: never$1,
      isNone: always$1,
      getOr: id,
      getOrThunk: call$$1,
      getOrDie: function (msg) {
        throw new Error(msg || 'error: getOrDie called on none.');
      },
      getOrNull: nul,
      getOrUndefined: undef,
      or: id,
      orThunk: call$$1,
      map: none,
      ap: none,
      each: noop$$1,
      bind: none,
      flatten: none,
      exists: never$1,
      forall: always$1,
      filter: none,
      equals: eq,
      equals_: eq,
      toArray: function () {
        return [];
      },
      toString: constant('none()')
    };
    if (Object.freeze)
      Object.freeze(me);
    return me;
  }();
  var some = function (a) {
    var constant_a = function () {
      return a;
    };
    var self = function () {
      return me;
    };
    var map = function (f) {
      return some(f(a));
    };
    var bind = function (f) {
      return f(a);
    };
    var me = {
      fold: function (n, s) {
        return s(a);
      },
      is: function (v) {
        return a === v;
      },
      isSome: always$1,
      isNone: never$1,
      getOr: constant_a,
      getOrThunk: constant_a,
      getOrDie: constant_a,
      getOrNull: constant_a,
      getOrUndefined: constant_a,
      or: self,
      orThunk: self,
      map: map,
      ap: function (optfab) {
        return optfab.fold(none, function (fab) {
          return some(fab(a));
        });
      },
      each: function (f) {
        f(a);
      },
      bind: bind,
      flatten: constant_a,
      exists: bind,
      forall: bind,
      filter: function (f) {
        return f(a) ? me : NONE;
      },
      equals: function (o) {
        return o.is(a);
      },
      equals_: function (o, elementEq) {
        return o.fold(never$1, function (b) {
          return elementEq(a, b);
        });
      },
      toArray: function () {
        return [a];
      },
      toString: function () {
        return 'some(' + a + ')';
      }
    };
    return me;
  };
  var from = function (value) {
    return value === null || value === undefined ? NONE : some(value);
  };
  var Option = {
    some: some,
    none: none,
    from: from
  };

  var typeOf = function (x) {
    if (x === null)
      return 'null';
    var t = typeof x;
    if (t === 'object' && Array.prototype.isPrototypeOf(x))
      return 'array';
    if (t === 'object' && String.prototype.isPrototypeOf(x))
      return 'string';
    return t;
  };
  var isType = function (type) {
    return function (value) {
      return typeOf(value) === type;
    };
  };
  var isString = isType('string');

  var isArray = isType('array');

  var isBoolean = isType('boolean');

  var isFunction = isType('function');
  var isNumber = isType('number');

  var rawIndexOf = function () {
    var pIndexOf = Array.prototype.indexOf;
    var fastIndex = function (xs, x) {
      return pIndexOf.call(xs, x);
    };
    var slowIndex = function (xs, x) {
      return slowIndexOf(xs, x);
    };
    return pIndexOf === undefined ? slowIndex : fastIndex;
  }();

  var contains = function (xs, x) {
    return rawIndexOf(xs, x) > -1;
  };
  var exists = function (xs, pred) {
    return findIndex(xs, pred).isSome();
  };


  var map = function (xs, f) {
    var len = xs.length;
    var r = new Array(len);
    for (var i = 0; i < len; i++) {
      var x = xs[i];
      r[i] = f(x, i, xs);
    }
    return r;
  };
  var each = function (xs, f) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      f(x, i, xs);
    }
  };
  var eachr = function (xs, f) {
    for (var i = xs.length - 1; i >= 0; i--) {
      var x = xs[i];
      f(x, i, xs);
    }
  };

  var filter = function (xs, pred) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        r.push(x);
      }
    }
    return r;
  };

  var foldr = function (xs, f, acc) {
    eachr(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var foldl = function (xs, f, acc) {
    each(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var find = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(x);
      }
    }
    return Option.none();
  };
  var findIndex = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(i);
      }
    }
    return Option.none();
  };
  var slowIndexOf = function (xs, x) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (xs[i] === x) {
        return i;
      }
    }
    return -1;
  };
  var push = Array.prototype.push;
  var flatten = function (xs) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (!Array.prototype.isPrototypeOf(xs[i]))
        throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
      push.apply(r, xs[i]);
    }
    return r;
  };
  var bind = function (xs, f) {
    var output = map(xs, f);
    return flatten(output);
  };
  var forall = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      var x = xs[i];
      if (pred(x, i, xs) !== true) {
        return false;
      }
    }
    return true;
  };

  var slice = Array.prototype.slice;
  var reverse = function (xs) {
    var r = slice.call(xs, 0);
    r.reverse();
    return r;
  };





  var last = function (xs) {
    return xs.length === 0 ? Option.none() : Option.some(xs[xs.length - 1]);
  };
  var from$1 = isFunction(Array.from) ? Array.from : function (x) {
    return slice.call(x);
  };

  var keys = Object.keys;
  var each$1 = function (obj, f) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      f(x, i, obj);
    }
  };
  var map$1 = function (obj, f) {
    return tupleMap(obj, function (x, i, obj) {
      return {
        k: i,
        v: f(x, i, obj)
      };
    });
  };
  var tupleMap = function (obj, f) {
    var r = {};
    each$1(obj, function (x, i) {
      var tuple = f(x, i, obj);
      r[tuple.k] = tuple.v;
    });
    return r;
  };

  var Immutable = function () {
    var fields = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      fields[_i] = arguments[_i];
    }
    return function () {
      var values = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }
      if (fields.length !== values.length) {
        throw new Error('Wrong number of arguments to struct. Expected "[' + fields.length + ']", got ' + values.length + ' arguments');
      }
      var struct = {};
      each(fields, function (name, i) {
        struct[name] = constant(values[i]);
      });
      return struct;
    };
  };

  var sort$1 = function (arr) {
    return arr.slice(0).sort();
  };
  var reqMessage = function (required, keys) {
    throw new Error('All required keys (' + sort$1(required).join(', ') + ') were not specified. Specified keys were: ' + sort$1(keys).join(', ') + '.');
  };
  var unsuppMessage = function (unsupported) {
    throw new Error('Unsupported keys for object: ' + sort$1(unsupported).join(', '));
  };
  var validateStrArr = function (label, array) {
    if (!isArray(array))
      throw new Error('The ' + label + ' fields must be an array. Was: ' + array + '.');
    each(array, function (a) {
      if (!isString(a))
        throw new Error('The value ' + a + ' in the ' + label + ' fields was not a string.');
    });
  };
  var invalidTypeMessage = function (incorrect, type) {
    throw new Error('All values need to be of type: ' + type + '. Keys (' + sort$1(incorrect).join(', ') + ') were not.');
  };
  var checkDupes = function (everything) {
    var sorted = sort$1(everything);
    var dupe = find(sorted, function (s, i) {
      return i < sorted.length - 1 && s === sorted[i + 1];
    });
    dupe.each(function (d) {
      throw new Error('The field: ' + d + ' occurs more than once in the combined fields: [' + sorted.join(', ') + '].');
    });
  };

  var MixedBag = function (required, optional) {
    var everything = required.concat(optional);
    if (everything.length === 0)
      throw new Error('You must specify at least one required or optional field.');
    validateStrArr('required', required);
    validateStrArr('optional', optional);
    checkDupes(everything);
    return function (obj) {
      var keys$$1 = keys(obj);
      var allReqd = forall(required, function (req) {
        return contains(keys$$1, req);
      });
      if (!allReqd)
        reqMessage(required, keys$$1);
      var unsupported = filter(keys$$1, function (key) {
        return !contains(everything, key);
      });
      if (unsupported.length > 0)
        unsuppMessage(unsupported);
      var r = {};
      each(required, function (req) {
        r[req] = constant(obj[req]);
      });
      each(optional, function (opt) {
        r[opt] = constant(Object.prototype.hasOwnProperty.call(obj, opt) ? Option.some(obj[opt]) : Option.none());
      });
      return r;
    };
  };

  var dimensions = Immutable('width', 'height');
  var grid = Immutable('rows', 'columns');
  var address = Immutable('row', 'column');
  var coords = Immutable('x', 'y');
  var detail = Immutable('element', 'rowspan', 'colspan');
  var detailnew = Immutable('element', 'rowspan', 'colspan', 'isNew');
  var extended = Immutable('element', 'rowspan', 'colspan', 'row', 'column');
  var rowdata = Immutable('element', 'cells', 'section');
  var elementnew = Immutable('element', 'isNew');
  var rowdatanew = Immutable('element', 'cells', 'section', 'isNew');
  var rowcells = Immutable('cells', 'section');
  var rowdetails = Immutable('details', 'section');
  var bounds = Immutable('startRow', 'startCol', 'finishRow', 'finishCol');
  var $_7gs7v1lbjm0og03x = {
    dimensions: dimensions,
    grid: grid,
    address: address,
    coords: coords,
    extended: extended,
    detail: detail,
    detailnew: detailnew,
    rowdata: rowdata,
    elementnew: elementnew,
    rowdatanew: rowdatanew,
    rowcells: rowcells,
    rowdetails: rowdetails,
    bounds: bounds
  };

  var fromHtml = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    if (!div.hasChildNodes() || div.childNodes.length > 1) {
      console.error('HTML does not have a single root node', html);
      throw 'HTML must have a single root node';
    }
    return fromDom(div.childNodes[0]);
  };
  var fromTag = function (tag, scope) {
    var doc = scope || document;
    var node = doc.createElement(tag);
    return fromDom(node);
  };
  var fromText = function (text, scope) {
    var doc = scope || document;
    var node = doc.createTextNode(text);
    return fromDom(node);
  };
  var fromDom = function (node) {
    if (node === null || node === undefined)
      throw new Error('Node cannot be null or undefined');
    return { dom: constant(node) };
  };
  var fromPoint = function (docElm, x, y) {
    var doc = docElm.dom();
    return Option.from(doc.elementFromPoint(x, y)).map(fromDom);
  };
  var Element$$1 = {
    fromHtml: fromHtml,
    fromTag: fromTag,
    fromText: fromText,
    fromDom: fromDom,
    fromPoint: fromPoint
  };

  var $_bj8ahglhjm0og05t = {
    ATTRIBUTE: Node.ATTRIBUTE_NODE,
    CDATA_SECTION: Node.CDATA_SECTION_NODE,
    COMMENT: Node.COMMENT_NODE,
    DOCUMENT: Node.DOCUMENT_NODE,
    DOCUMENT_TYPE: Node.DOCUMENT_TYPE_NODE,
    DOCUMENT_FRAGMENT: Node.DOCUMENT_FRAGMENT_NODE,
    ELEMENT: Node.ELEMENT_NODE,
    TEXT: Node.TEXT_NODE,
    PROCESSING_INSTRUCTION: Node.PROCESSING_INSTRUCTION_NODE,
    ENTITY_REFERENCE: Node.ENTITY_REFERENCE_NODE,
    ENTITY: Node.ENTITY_NODE,
    NOTATION: Node.NOTATION_NODE
  };

  var ELEMENT = $_bj8ahglhjm0og05t.ELEMENT;
  var DOCUMENT = $_bj8ahglhjm0og05t.DOCUMENT;
  var is = function (element, selector) {
    var elem = element.dom();
    if (elem.nodeType !== ELEMENT)
      return false;
    else if (elem.matches !== undefined)
      return elem.matches(selector);
    else if (elem.msMatchesSelector !== undefined)
      return elem.msMatchesSelector(selector);
    else if (elem.webkitMatchesSelector !== undefined)
      return elem.webkitMatchesSelector(selector);
    else if (elem.mozMatchesSelector !== undefined)
      return elem.mozMatchesSelector(selector);
    else
      throw new Error('Browser lacks native selectors');
  };
  var bypassSelector = function (dom) {
    return dom.nodeType !== ELEMENT && dom.nodeType !== DOCUMENT || dom.childElementCount === 0;
  };
  var all = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? [] : map(base.querySelectorAll(selector), Element$$1.fromDom);
  };
  var one = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? Option.none() : Option.from(base.querySelector(selector)).map(Element$$1.fromDom);
  };
  var $_5jb9xelejm0og053 = {
    all: all,
    is: is,
    one: one
  };

  var toArray = function (target, f) {
    var r = [];
    var recurse = function (e) {
      r.push(e);
      return f(e);
    };
    var cur = f(target);
    do {
      cur = cur.bind(recurse);
    } while (cur.isSome());
    return r;
  };
  var $_bxcmr9ljjm0og06a = { toArray: toArray };

  var Global = typeof window !== 'undefined' ? window : Function('return this;')();

  var path = function (parts, scope) {
    var o = scope !== undefined && scope !== null ? scope : Global;
    for (var i = 0; i < parts.length && o !== undefined && o !== null; ++i)
      o = o[parts[i]];
    return o;
  };
  var resolve = function (p, scope) {
    var parts = p.split('.');
    return path(parts, scope);
  };

  var unsafe = function (name, scope) {
    return resolve(name, scope);
  };
  var getOrDie = function (name, scope) {
    var actual = unsafe(name, scope);
    if (actual === undefined || actual === null)
      throw name + ' not available on this browser';
    return actual;
  };
  var $_g9o0f1lmjm0og06n = { getOrDie: getOrDie };

  var node = function () {
    var f = $_g9o0f1lmjm0og06n.getOrDie('Node');
    return f;
  };
  var compareDocumentPosition = function (a, b, match) {
    return (a.compareDocumentPosition(b) & match) !== 0;
  };
  var documentPositionPreceding = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_PRECEDING);
  };
  var documentPositionContainedBy = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_CONTAINED_BY);
  };
  var $_8dni5flljm0og06m = {
    documentPositionPreceding: documentPositionPreceding,
    documentPositionContainedBy: documentPositionContainedBy
  };

  var cached = function (f) {
    var called = false;
    var r;
    return function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (!called) {
        called = true;
        r = f.apply(null, args);
      }
      return r;
    };
  };

  var firstMatch = function (regexes, s) {
    for (var i = 0; i < regexes.length; i++) {
      var x = regexes[i];
      if (x.test(s))
        return x;
    }
    return undefined;
  };
  var find$2 = function (regexes, agent) {
    var r = firstMatch(regexes, agent);
    if (!r)
      return {
        major: 0,
        minor: 0
      };
    var group = function (i) {
      return Number(agent.replace(r, '$' + i));
    };
    return nu(group(1), group(2));
  };
  var detect = function (versionRegexes, agent) {
    var cleanedAgent = String(agent).toLowerCase();
    if (versionRegexes.length === 0)
      return unknown();
    return find$2(versionRegexes, cleanedAgent);
  };
  var unknown = function () {
    return nu(0, 0);
  };
  var nu = function (major, minor) {
    return {
      major: major,
      minor: minor
    };
  };
  var $_b33phvltjm0og078 = {
    nu: nu,
    detect: detect,
    unknown: unknown
  };

  var edge = 'Edge';
  var chrome = 'Chrome';
  var ie = 'IE';
  var opera = 'Opera';
  var firefox = 'Firefox';
  var safari = 'Safari';
  var isBrowser = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$1 = function () {
    return nu$1({
      current: undefined,
      version: $_b33phvltjm0og078.unknown()
    });
  };
  var nu$1 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isEdge: isBrowser(edge, current),
      isChrome: isBrowser(chrome, current),
      isIE: isBrowser(ie, current),
      isOpera: isBrowser(opera, current),
      isFirefox: isBrowser(firefox, current),
      isSafari: isBrowser(safari, current)
    };
  };
  var $_5tadpdlsjm0og074 = {
    unknown: unknown$1,
    nu: nu$1,
    edge: constant(edge),
    chrome: constant(chrome),
    ie: constant(ie),
    opera: constant(opera),
    firefox: constant(firefox),
    safari: constant(safari)
  };

  var windows = 'Windows';
  var ios = 'iOS';
  var android = 'Android';
  var linux = 'Linux';
  var osx = 'OSX';
  var solaris = 'Solaris';
  var freebsd = 'FreeBSD';
  var isOS = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$2 = function () {
    return nu$2({
      current: undefined,
      version: $_b33phvltjm0og078.unknown()
    });
  };
  var nu$2 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isWindows: isOS(windows, current),
      isiOS: isOS(ios, current),
      isAndroid: isOS(android, current),
      isOSX: isOS(osx, current),
      isLinux: isOS(linux, current),
      isSolaris: isOS(solaris, current),
      isFreeBSD: isOS(freebsd, current)
    };
  };
  var $_7gfdaolujm0og079 = {
    unknown: unknown$2,
    nu: nu$2,
    windows: constant(windows),
    ios: constant(ios),
    android: constant(android),
    linux: constant(linux),
    osx: constant(osx),
    solaris: constant(solaris),
    freebsd: constant(freebsd)
  };

  function DeviceType (os, browser, userAgent) {
    var isiPad = os.isiOS() && /ipad/i.test(userAgent) === true;
    var isiPhone = os.isiOS() && !isiPad;
    var isAndroid3 = os.isAndroid() && os.version.major === 3;
    var isAndroid4 = os.isAndroid() && os.version.major === 4;
    var isTablet = isiPad || isAndroid3 || isAndroid4 && /mobile/i.test(userAgent) === true;
    var isTouch = os.isiOS() || os.isAndroid();
    var isPhone = isTouch && !isTablet;
    var iOSwebview = browser.isSafari() && os.isiOS() && /safari/i.test(userAgent) === false;
    return {
      isiPad: constant(isiPad),
      isiPhone: constant(isiPhone),
      isTablet: constant(isTablet),
      isPhone: constant(isPhone),
      isTouch: constant(isTouch),
      isAndroid: os.isAndroid,
      isiOS: os.isiOS,
      isWebView: constant(iOSwebview)
    };
  }

  var detect$1 = function (candidates, userAgent) {
    var agent = String(userAgent).toLowerCase();
    return find(candidates, function (candidate) {
      return candidate.search(agent);
    });
  };
  var detectBrowser = function (browsers, userAgent) {
    return detect$1(browsers, userAgent).map(function (browser) {
      var version = $_b33phvltjm0og078.detect(browser.versionRegexes, userAgent);
      return {
        current: browser.name,
        version: version
      };
    });
  };
  var detectOs = function (oses, userAgent) {
    return detect$1(oses, userAgent).map(function (os) {
      var version = $_b33phvltjm0og078.detect(os.versionRegexes, userAgent);
      return {
        current: os.name,
        version: version
      };
    });
  };
  var $_6bb9bulwjm0og07g = {
    detectBrowser: detectBrowser,
    detectOs: detectOs
  };

  var checkRange = function (str, substr, start) {
    if (substr === '')
      return true;
    if (str.length < substr.length)
      return false;
    var x = str.substr(start, start + substr.length);
    return x === substr;
  };





  var contains$1 = function (str, substr) {
    return str.indexOf(substr) !== -1;
  };


  var endsWith = function (str, suffix) {
    return checkRange(str, suffix, str.length - suffix.length);
  };
  var trim = function (str) {
    return str.replace(/^\s+|\s+$/g, '');
  };

  var normalVersionRegex = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/;
  var checkContains = function (target) {
    return function (uastring) {
      return contains$1(uastring, target);
    };
  };
  var browsers = [
    {
      name: 'Edge',
      versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
      search: function (uastring) {
        var monstrosity = contains$1(uastring, 'edge/') && contains$1(uastring, 'chrome') && contains$1(uastring, 'safari') && contains$1(uastring, 'applewebkit');
        return monstrosity;
      }
    },
    {
      name: 'Chrome',
      versionRegexes: [
        /.*?chrome\/([0-9]+)\.([0-9]+).*/,
        normalVersionRegex
      ],
      search: function (uastring) {
        return contains$1(uastring, 'chrome') && !contains$1(uastring, 'chromeframe');
      }
    },
    {
      name: 'IE',
      versionRegexes: [
        /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
        /.*?rv:([0-9]+)\.([0-9]+).*/
      ],
      search: function (uastring) {
        return contains$1(uastring, 'msie') || contains$1(uastring, 'trident');
      }
    },
    {
      name: 'Opera',
      versionRegexes: [
        normalVersionRegex,
        /.*?opera\/([0-9]+)\.([0-9]+).*/
      ],
      search: checkContains('opera')
    },
    {
      name: 'Firefox',
      versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
      search: checkContains('firefox')
    },
    {
      name: 'Safari',
      versionRegexes: [
        normalVersionRegex,
        /.*?cpu os ([0-9]+)_([0-9]+).*/
      ],
      search: function (uastring) {
        return (contains$1(uastring, 'safari') || contains$1(uastring, 'mobile/')) && contains$1(uastring, 'applewebkit');
      }
    }
  ];
  var oses = [
    {
      name: 'Windows',
      search: checkContains('win'),
      versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'iOS',
      search: function (uastring) {
        return contains$1(uastring, 'iphone') || contains$1(uastring, 'ipad');
      },
      versionRegexes: [
        /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        /.*cpu os ([0-9]+)_([0-9]+).*/,
        /.*cpu iphone os ([0-9]+)_([0-9]+).*/
      ]
    },
    {
      name: 'Android',
      search: checkContains('android'),
      versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'OSX',
      search: checkContains('os x'),
      versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
    },
    {
      name: 'Linux',
      search: checkContains('linux'),
      versionRegexes: []
    },
    {
      name: 'Solaris',
      search: checkContains('sunos'),
      versionRegexes: []
    },
    {
      name: 'FreeBSD',
      search: checkContains('freebsd'),
      versionRegexes: []
    }
  ];
  var $_8pna8ylxjm0og07k = {
    browsers: constant(browsers),
    oses: constant(oses)
  };

  var detect$2 = function (userAgent) {
    var browsers = $_8pna8ylxjm0og07k.browsers();
    var oses = $_8pna8ylxjm0og07k.oses();
    var browser = $_6bb9bulwjm0og07g.detectBrowser(browsers, userAgent).fold($_5tadpdlsjm0og074.unknown, $_5tadpdlsjm0og074.nu);
    var os = $_6bb9bulwjm0og07g.detectOs(oses, userAgent).fold($_7gfdaolujm0og079.unknown, $_7gfdaolujm0og079.nu);
    var deviceType = DeviceType(os, browser, userAgent);
    return {
      browser: browser,
      os: os,
      deviceType: deviceType
    };
  };
  var $_5fzzs0lrjm0og073 = { detect: detect$2 };

  var detect$3 = cached(function () {
    var userAgent = navigator.userAgent;
    return $_5fzzs0lrjm0og073.detect(userAgent);
  });
  var $_44j6bplpjm0og06x = { detect: detect$3 };

  var eq = function (e1, e2) {
    return e1.dom() === e2.dom();
  };
  var isEqualNode = function (e1, e2) {
    return e1.dom().isEqualNode(e2.dom());
  };
  var member = function (element, elements) {
    return exists(elements, curry(eq, element));
  };
  var regularContains = function (e1, e2) {
    var d1 = e1.dom(), d2 = e2.dom();
    return d1 === d2 ? false : d1.contains(d2);
  };
  var ieContains = function (e1, e2) {
    return $_8dni5flljm0og06m.documentPositionContainedBy(e1.dom(), e2.dom());
  };
  var browser = $_44j6bplpjm0og06x.detect().browser;
  var contains$2 = browser.isIE() ? ieContains : regularContains;
  var $_dql4e0lkjm0og06c = {
    eq: eq,
    isEqualNode: isEqualNode,
    member: member,
    contains: contains$2,
    is: $_5jb9xelejm0og053.is
  };

  var owner = function (element) {
    return Element$$1.fromDom(element.dom().ownerDocument);
  };
  var documentElement = function (element) {
    return Element$$1.fromDom(element.dom().ownerDocument.documentElement);
  };
  var defaultView = function (element) {
    var el = element.dom();
    var defaultView = el.ownerDocument.defaultView;
    return Element$$1.fromDom(defaultView);
  };
  var parent = function (element) {
    var dom = element.dom();
    return Option.from(dom.parentNode).map(Element$$1.fromDom);
  };
  var findIndex$1 = function (element) {
    return parent(element).bind(function (p) {
      var kin = children(p);
      return findIndex(kin, function (elem) {
        return $_dql4e0lkjm0og06c.eq(element, elem);
      });
    });
  };
  var parents = function (element, isRoot) {
    var stop = isFunction(isRoot) ? isRoot : constant(false);
    var dom = element.dom();
    var ret = [];
    while (dom.parentNode !== null && dom.parentNode !== undefined) {
      var rawParent = dom.parentNode;
      var parent = Element$$1.fromDom(rawParent);
      ret.push(parent);
      if (stop(parent) === true)
        break;
      else
        dom = rawParent;
    }
    return ret;
  };
  var siblings = function (element) {
    var filterSelf = function (elements) {
      return filter(elements, function (x) {
        return !$_dql4e0lkjm0og06c.eq(element, x);
      });
    };
    return parent(element).map(children).map(filterSelf).getOr([]);
  };
  var offsetParent = function (element) {
    var dom = element.dom();
    return Option.from(dom.offsetParent).map(Element$$1.fromDom);
  };
  var prevSibling = function (element) {
    var dom = element.dom();
    return Option.from(dom.previousSibling).map(Element$$1.fromDom);
  };
  var nextSibling = function (element) {
    var dom = element.dom();
    return Option.from(dom.nextSibling).map(Element$$1.fromDom);
  };
  var prevSiblings = function (element) {
    return reverse($_bxcmr9ljjm0og06a.toArray(element, prevSibling));
  };
  var nextSiblings = function (element) {
    return $_bxcmr9ljjm0og06a.toArray(element, nextSibling);
  };
  var children = function (element) {
    var dom = element.dom();
    return map(dom.childNodes, Element$$1.fromDom);
  };
  var child = function (element, index) {
    var children = element.dom().childNodes;
    return Option.from(children[index]).map(Element$$1.fromDom);
  };
  var firstChild = function (element) {
    return child(element, 0);
  };
  var lastChild = function (element) {
    return child(element, element.dom().childNodes.length - 1);
  };
  var childNodesCount = function (element) {
    return element.dom().childNodes.length;
  };
  var hasChildNodes = function (element) {
    return element.dom().hasChildNodes();
  };
  var spot = Immutable('element', 'offset');
  var leaf = function (element, offset) {
    var cs = children(element);
    return cs.length > 0 && offset < cs.length ? spot(cs[offset], 0) : spot(element, offset);
  };
  var $_d421p9lijm0og05w = {
    owner: owner,
    defaultView: defaultView,
    documentElement: documentElement,
    parent: parent,
    findIndex: findIndex$1,
    parents: parents,
    siblings: siblings,
    prevSibling: prevSibling,
    offsetParent: offsetParent,
    prevSiblings: prevSiblings,
    nextSibling: nextSibling,
    nextSiblings: nextSiblings,
    children: children,
    child: child,
    firstChild: firstChild,
    lastChild: lastChild,
    childNodesCount: childNodesCount,
    hasChildNodes: hasChildNodes,
    leaf: leaf
  };

  var firstLayer = function (scope, selector) {
    return filterFirstLayer(scope, selector, constant(true));
  };
  var filterFirstLayer = function (scope, selector, predicate) {
    return bind($_d421p9lijm0og05w.children(scope), function (x) {
      return $_5jb9xelejm0og053.is(x, selector) ? predicate(x) ? [x] : [] : filterFirstLayer(x, selector, predicate);
    });
  };
  var $_85fuu2ldjm0og04p = {
    firstLayer: firstLayer,
    filterFirstLayer: filterFirstLayer
  };

  var name = function (element) {
    var r = element.dom().nodeName;
    return r.toLowerCase();
  };
  var type = function (element) {
    return element.dom().nodeType;
  };
  var value = function (element) {
    return element.dom().nodeValue;
  };
  var isType$1 = function (t) {
    return function (element) {
      return type(element) === t;
    };
  };
  var isComment = function (element) {
    return type(element) === $_bj8ahglhjm0og05t.COMMENT || name(element) === '#comment';
  };
  var isElement = isType$1($_bj8ahglhjm0og05t.ELEMENT);
  var isText = isType$1($_bj8ahglhjm0og05t.TEXT);
  var isDocument = isType$1($_bj8ahglhjm0og05t.DOCUMENT);
  var $_8kaujsm2jm0og085 = {
    name: name,
    type: type,
    value: value,
    isElement: isElement,
    isText: isText,
    isDocument: isDocument,
    isComment: isComment
  };

  var rawSet = function (dom, key, value) {
    if (isString(value) || isBoolean(value) || isNumber(value)) {
      dom.setAttribute(key, value + '');
    } else {
      console.error('Invalid call to Attr.set. Key ', key, ':: Value ', value, ':: Element ', dom);
      throw new Error('Attribute value was not simple');
    }
  };
  var set = function (element, key, value) {
    rawSet(element.dom(), key, value);
  };
  var setAll = function (element, attrs) {
    var dom = element.dom();
    each$1(attrs, function (v, k) {
      rawSet(dom, k, v);
    });
  };
  var get = function (element, key) {
    var v = element.dom().getAttribute(key);
    return v === null ? undefined : v;
  };
  var has = function (element, key) {
    var dom = element.dom();
    return dom && dom.hasAttribute ? dom.hasAttribute(key) : false;
  };
  var remove = function (element, key) {
    element.dom().removeAttribute(key);
  };
  var hasNone = function (element) {
    var attrs = element.dom().attributes;
    return attrs === undefined || attrs === null || attrs.length === 0;
  };
  var clone = function (element) {
    return foldl(element.dom().attributes, function (acc, attr) {
      acc[attr.name] = attr.value;
      return acc;
    }, {});
  };
  var transferOne = function (source, destination, attr) {
    if (has(source, attr) && !has(destination, attr))
      set(destination, attr, get(source, attr));
  };
  var transfer = function (source, destination, attrs) {
    if (!$_8kaujsm2jm0og085.isElement(source) || !$_8kaujsm2jm0og085.isElement(destination))
      return;
    each(attrs, function (attr) {
      transferOne(source, destination, attr);
    });
  };
  var $_6aylb4m1jm0og07w = {
    clone: clone,
    set: set,
    setAll: setAll,
    get: get,
    has: has,
    remove: remove,
    hasNone: hasNone,
    transfer: transfer
  };

  var inBody = function (element) {
    var dom = $_8kaujsm2jm0og085.isText(element) ? element.dom().parentNode : element.dom();
    return dom !== undefined && dom !== null && dom.ownerDocument.body.contains(dom);
  };
  var body = cached(function () {
    return getBody(Element$$1.fromDom(document));
  });
  var getBody = function (doc) {
    var body = doc.dom().body;
    if (body === null || body === undefined)
      throw 'Body is not available yet';
    return Element$$1.fromDom(body);
  };
  var $_mqd4xm5jm0og08c = {
    body: body,
    getBody: getBody,
    inBody: inBody
  };

  var all$1 = function (predicate) {
    return descendants($_mqd4xm5jm0og08c.body(), predicate);
  };
  var ancestors = function (scope, predicate, isRoot) {
    return filter($_d421p9lijm0og05w.parents(scope, isRoot), predicate);
  };
  var siblings$1 = function (scope, predicate) {
    return filter($_d421p9lijm0og05w.siblings(scope), predicate);
  };
  var children$1 = function (scope, predicate) {
    return filter($_d421p9lijm0og05w.children(scope), predicate);
  };
  var descendants = function (scope, predicate) {
    var result = [];
    each($_d421p9lijm0og05w.children(scope), function (x) {
      if (predicate(x)) {
        result = result.concat([x]);
      }
      result = result.concat(descendants(x, predicate));
    });
    return result;
  };
  var $_1ke0b4m4jm0og088 = {
    all: all$1,
    ancestors: ancestors,
    siblings: siblings$1,
    children: children$1,
    descendants: descendants
  };

  var all$2 = function (selector) {
    return $_5jb9xelejm0og053.all(selector);
  };
  var ancestors$1 = function (scope, selector, isRoot) {
    return $_1ke0b4m4jm0og088.ancestors(scope, function (e) {
      return $_5jb9xelejm0og053.is(e, selector);
    }, isRoot);
  };
  var siblings$2 = function (scope, selector) {
    return $_1ke0b4m4jm0og088.siblings(scope, function (e) {
      return $_5jb9xelejm0og053.is(e, selector);
    });
  };
  var children$2 = function (scope, selector) {
    return $_1ke0b4m4jm0og088.children(scope, function (e) {
      return $_5jb9xelejm0og053.is(e, selector);
    });
  };
  var descendants$1 = function (scope, selector) {
    return $_5jb9xelejm0og053.all(selector, scope);
  };
  var $_1wzcn0m3jm0og087 = {
    all: all$2,
    ancestors: ancestors$1,
    siblings: siblings$2,
    children: children$2,
    descendants: descendants$1
  };

  function ClosestOrAncestor (is, ancestor, scope, a, isRoot) {
    return is(scope, a) ? Option.some(scope) : isFunction(isRoot) && isRoot(scope) ? Option.none() : ancestor(scope, a, isRoot);
  }

  var first$1 = function (predicate) {
    return descendant($_mqd4xm5jm0og08c.body(), predicate);
  };
  var ancestor = function (scope, predicate, isRoot) {
    var element = scope.dom();
    var stop = isFunction(isRoot) ? isRoot : constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = Element$$1.fromDom(element);
      if (predicate(el))
        return Option.some(el);
      else if (stop(el))
        break;
    }
    return Option.none();
  };
  var closest = function (scope, predicate, isRoot) {
    var is = function (scope) {
      return predicate(scope);
    };
    return ClosestOrAncestor(is, ancestor, scope, predicate, isRoot);
  };
  var sibling = function (scope, predicate) {
    var element = scope.dom();
    if (!element.parentNode)
      return Option.none();
    return child$1(Element$$1.fromDom(element.parentNode), function (x) {
      return !$_dql4e0lkjm0og06c.eq(scope, x) && predicate(x);
    });
  };
  var child$1 = function (scope, predicate) {
    var result = find(scope.dom().childNodes, compose(predicate, Element$$1.fromDom));
    return result.map(Element$$1.fromDom);
  };
  var descendant = function (scope, predicate) {
    var descend = function (node) {
      for (var i = 0; i < node.childNodes.length; i++) {
        if (predicate(Element$$1.fromDom(node.childNodes[i])))
          return Option.some(Element$$1.fromDom(node.childNodes[i]));
        var res = descend(node.childNodes[i]);
        if (res.isSome())
          return res;
      }
      return Option.none();
    };
    return descend(scope.dom());
  };
  var $_ng4nfm7jm0og08i = {
    first: first$1,
    ancestor: ancestor,
    closest: closest,
    sibling: sibling,
    child: child$1,
    descendant: descendant
  };

  var first$2 = function (selector) {
    return $_5jb9xelejm0og053.one(selector);
  };
  var ancestor$1 = function (scope, selector, isRoot) {
    return $_ng4nfm7jm0og08i.ancestor(scope, function (e) {
      return $_5jb9xelejm0og053.is(e, selector);
    }, isRoot);
  };
  var sibling$1 = function (scope, selector) {
    return $_ng4nfm7jm0og08i.sibling(scope, function (e) {
      return $_5jb9xelejm0og053.is(e, selector);
    });
  };
  var child$2 = function (scope, selector) {
    return $_ng4nfm7jm0og08i.child(scope, function (e) {
      return $_5jb9xelejm0og053.is(e, selector);
    });
  };
  var descendant$1 = function (scope, selector) {
    return $_5jb9xelejm0og053.one(selector, scope);
  };
  var closest$1 = function (scope, selector, isRoot) {
    return ClosestOrAncestor($_5jb9xelejm0og053.is, ancestor$1, scope, selector, isRoot);
  };
  var $_nsz8xm6jm0og08h = {
    first: first$2,
    ancestor: ancestor$1,
    sibling: sibling$1,
    child: child$2,
    descendant: descendant$1,
    closest: closest$1
  };

  var lookup = function (tags, element, _isRoot) {
    var isRoot = _isRoot !== undefined ? _isRoot : constant(false);
    if (isRoot(element))
      return Option.none();
    if (contains(tags, $_8kaujsm2jm0og085.name(element)))
      return Option.some(element);
    var isRootOrUpperTable = function (element) {
      return $_5jb9xelejm0og053.is(element, 'table') || isRoot(element);
    };
    return $_nsz8xm6jm0og08h.ancestor(element, tags.join(','), isRootOrUpperTable);
  };
  var cell = function (element, isRoot) {
    return lookup([
      'td',
      'th'
    ], element, isRoot);
  };
  var cells = function (ancestor) {
    return $_85fuu2ldjm0og04p.firstLayer(ancestor, 'th,td');
  };
  var notCell = function (element, isRoot) {
    return lookup([
      'caption',
      'tr',
      'tbody',
      'tfoot',
      'thead'
    ], element, isRoot);
  };
  var neighbours = function (selector, element) {
    return $_d421p9lijm0og05w.parent(element).map(function (parent) {
      return $_1wzcn0m3jm0og087.children(parent, selector);
    });
  };
  var neighbourCells = curry(neighbours, 'th,td');
  var neighbourRows = curry(neighbours, 'tr');
  var firstCell = function (ancestor) {
    return $_nsz8xm6jm0og08h.descendant(ancestor, 'th,td');
  };
  var table = function (element, isRoot) {
    return $_nsz8xm6jm0og08h.closest(element, 'table', isRoot);
  };
  var row = function (element, isRoot) {
    return lookup(['tr'], element, isRoot);
  };
  var rows = function (ancestor) {
    return $_85fuu2ldjm0og04p.firstLayer(ancestor, 'tr');
  };
  var attr = function (element, property) {
    return parseInt($_6aylb4m1jm0og07w.get(element, property), 10);
  };
  var grid$1 = function (element, rowProp, colProp) {
    var rows = attr(element, rowProp);
    var cols = attr(element, colProp);
    return $_7gs7v1lbjm0og03x.grid(rows, cols);
  };
  var $_d02uidlcjm0og041 = {
    cell: cell,
    firstCell: firstCell,
    cells: cells,
    neighbourCells: neighbourCells,
    table: table,
    row: row,
    rows: rows,
    notCell: notCell,
    neighbourRows: neighbourRows,
    attr: attr,
    grid: grid$1
  };

  var fromTable = function (table) {
    var rows = $_d02uidlcjm0og041.rows(table);
    return map(rows, function (row) {
      var element = row;
      var parent = $_d421p9lijm0og05w.parent(element);
      var parentSection = parent.map(function (parent) {
        var parentName = $_8kaujsm2jm0og085.name(parent);
        return parentName === 'tfoot' || parentName === 'thead' || parentName === 'tbody' ? parentName : 'tbody';
      }).getOr('tbody');
      var cells = map($_d02uidlcjm0og041.cells(row), function (cell) {
        var rowspan = $_6aylb4m1jm0og07w.has(cell, 'rowspan') ? parseInt($_6aylb4m1jm0og07w.get(cell, 'rowspan'), 10) : 1;
        var colspan = $_6aylb4m1jm0og07w.has(cell, 'colspan') ? parseInt($_6aylb4m1jm0og07w.get(cell, 'colspan'), 10) : 1;
        return $_7gs7v1lbjm0og03x.detail(cell, rowspan, colspan);
      });
      return $_7gs7v1lbjm0og03x.rowdata(element, cells, parentSection);
    });
  };
  var fromPastedRows = function (rows, example) {
    return map(rows, function (row) {
      var cells = map($_d02uidlcjm0og041.cells(row), function (cell) {
        var rowspan = $_6aylb4m1jm0og07w.has(cell, 'rowspan') ? parseInt($_6aylb4m1jm0og07w.get(cell, 'rowspan'), 10) : 1;
        var colspan = $_6aylb4m1jm0og07w.has(cell, 'colspan') ? parseInt($_6aylb4m1jm0og07w.get(cell, 'colspan'), 10) : 1;
        return $_7gs7v1lbjm0og03x.detail(cell, rowspan, colspan);
      });
      return $_7gs7v1lbjm0og03x.rowdata(row, cells, example.section());
    });
  };
  var $_eocn1clajm0og03n = {
    fromTable: fromTable,
    fromPastedRows: fromPastedRows
  };

  var key = function (row, column) {
    return row + ',' + column;
  };
  var getAt = function (warehouse, row, column) {
    var raw = warehouse.access()[key(row, column)];
    return raw !== undefined ? Option.some(raw) : Option.none();
  };
  var findItem = function (warehouse, item, comparator) {
    var filtered = filterItems(warehouse, function (detail) {
      return comparator(item, detail.element());
    });
    return filtered.length > 0 ? Option.some(filtered[0]) : Option.none();
  };
  var filterItems = function (warehouse, predicate) {
    var all = bind(warehouse.all(), function (r) {
      return r.cells();
    });
    return filter(all, predicate);
  };
  var generate = function (list) {
    var access = {};
    var cells = [];
    var maxRows = list.length;
    var maxColumns = 0;
    each(list, function (details, r) {
      var currentRow = [];
      each(details.cells(), function (detail, c) {
        var start = 0;
        while (access[key(r, start)] !== undefined) {
          start++;
        }
        var current = $_7gs7v1lbjm0og03x.extended(detail.element(), detail.rowspan(), detail.colspan(), r, start);
        for (var i = 0; i < detail.colspan(); i++) {
          for (var j = 0; j < detail.rowspan(); j++) {
            var cr = r + j;
            var cc = start + i;
            var newpos = key(cr, cc);
            access[newpos] = current;
            maxColumns = Math.max(maxColumns, cc + 1);
          }
        }
        currentRow.push(current);
      });
      cells.push($_7gs7v1lbjm0og03x.rowdata(details.element(), currentRow, details.section()));
    });
    var grid = $_7gs7v1lbjm0og03x.grid(maxRows, maxColumns);
    return {
      grid: constant(grid),
      access: constant(access),
      all: constant(cells)
    };
  };
  var justCells = function (warehouse) {
    var rows = map(warehouse.all(), function (w) {
      return w.cells();
    });
    return flatten(rows);
  };
  var $_dhbleam9jm0og094 = {
    generate: generate,
    getAt: getAt,
    findItem: findItem,
    filterItems: filterItems,
    justCells: justCells
  };

  var isSupported = function (dom) {
    return dom.style !== undefined;
  };
  var $_djp4p1mbjm0og09r = { isSupported: isSupported };

  var internalSet = function (dom, property, value) {
    if (!isString(value)) {
      console.error('Invalid call to CSS.set. Property ', property, ':: Value ', value, ':: Element ', dom);
      throw new Error('CSS value must be a string: ' + value);
    }
    if ($_djp4p1mbjm0og09r.isSupported(dom))
      dom.style.setProperty(property, value);
  };
  var internalRemove = function (dom, property) {
    if ($_djp4p1mbjm0og09r.isSupported(dom))
      dom.style.removeProperty(property);
  };
  var set$1 = function (element, property, value) {
    var dom = element.dom();
    internalSet(dom, property, value);
  };
  var setAll$1 = function (element, css) {
    var dom = element.dom();
    each$1(css, function (v, k) {
      internalSet(dom, k, v);
    });
  };
  var setOptions = function (element, css) {
    var dom = element.dom();
    each$1(css, function (v, k) {
      v.fold(function () {
        internalRemove(dom, k);
      }, function (value) {
        internalSet(dom, k, value);
      });
    });
  };
  var get$1 = function (element, property) {
    var dom = element.dom();
    var styles = window.getComputedStyle(dom);
    var r = styles.getPropertyValue(property);
    var v = r === '' && !$_mqd4xm5jm0og08c.inBody(element) ? getUnsafeProperty(dom, property) : r;
    return v === null ? undefined : v;
  };
  var getUnsafeProperty = function (dom, property) {
    return $_djp4p1mbjm0og09r.isSupported(dom) ? dom.style.getPropertyValue(property) : '';
  };
  var getRaw = function (element, property) {
    var dom = element.dom();
    var raw = getUnsafeProperty(dom, property);
    return Option.from(raw).filter(function (r) {
      return r.length > 0;
    });
  };
  var getAllRaw = function (element) {
    var css = {};
    var dom = element.dom();
    if ($_djp4p1mbjm0og09r.isSupported(dom)) {
      for (var i = 0; i < dom.style.length; i++) {
        var ruleName = dom.style.item(i);
        css[ruleName] = dom.style[ruleName];
      }
    }
    return css;
  };
  var isValidValue = function (tag, property, value) {
    var element = Element$$1.fromTag(tag);
    set$1(element, property, value);
    var style = getRaw(element, property);
    return style.isSome();
  };
  var remove$1 = function (element, property) {
    var dom = element.dom();
    internalRemove(dom, property);
    if ($_6aylb4m1jm0og07w.has(element, 'style') && trim($_6aylb4m1jm0og07w.get(element, 'style')) === '') {
      $_6aylb4m1jm0og07w.remove(element, 'style');
    }
  };
  var preserve = function (element, f) {
    var oldStyles = $_6aylb4m1jm0og07w.get(element, 'style');
    var result = f(element);
    var restore = oldStyles === undefined ? $_6aylb4m1jm0og07w.remove : $_6aylb4m1jm0og07w.set;
    restore(element, 'style', oldStyles);
    return result;
  };
  var copy = function (source, target) {
    var sourceDom = source.dom();
    var targetDom = target.dom();
    if ($_djp4p1mbjm0og09r.isSupported(sourceDom) && $_djp4p1mbjm0og09r.isSupported(targetDom)) {
      targetDom.style.cssText = sourceDom.style.cssText;
    }
  };
  var reflow = function (e) {
    return e.dom().offsetWidth;
  };
  var transferOne$1 = function (source, destination, style) {
    getRaw(source, style).each(function (value) {
      if (getRaw(destination, style).isNone())
        set$1(destination, style, value);
    });
  };
  var transfer$1 = function (source, destination, styles) {
    if (!$_8kaujsm2jm0og085.isElement(source) || !$_8kaujsm2jm0og085.isElement(destination))
      return;
    each(styles, function (style) {
      transferOne$1(source, destination, style);
    });
  };
  var $_ekl9pwmajm0og09e = {
    copy: copy,
    set: set$1,
    preserve: preserve,
    setAll: setAll$1,
    setOptions: setOptions,
    remove: remove$1,
    get: get$1,
    getRaw: getRaw,
    getAllRaw: getAllRaw,
    isValidValue: isValidValue,
    reflow: reflow,
    transfer: transfer$1
  };

  var before = function (marker, element) {
    var parent = $_d421p9lijm0og05w.parent(marker);
    parent.each(function (v) {
      v.dom().insertBefore(element.dom(), marker.dom());
    });
  };
  var after = function (marker, element) {
    var sibling = $_d421p9lijm0og05w.nextSibling(marker);
    sibling.fold(function () {
      var parent = $_d421p9lijm0og05w.parent(marker);
      parent.each(function (v) {
        append(v, element);
      });
    }, function (v) {
      before(v, element);
    });
  };
  var prepend = function (parent, element) {
    var firstChild = $_d421p9lijm0og05w.firstChild(parent);
    firstChild.fold(function () {
      append(parent, element);
    }, function (v) {
      parent.dom().insertBefore(element.dom(), v.dom());
    });
  };
  var append = function (parent, element) {
    parent.dom().appendChild(element.dom());
  };
  var appendAt = function (parent, element, index) {
    $_d421p9lijm0og05w.child(parent, index).fold(function () {
      append(parent, element);
    }, function (v) {
      before(v, element);
    });
  };
  var wrap = function (element, wrapper) {
    before(element, wrapper);
    append(wrapper, element);
  };
  var $_5w7xramcjm0og09t = {
    before: before,
    after: after,
    prepend: prepend,
    append: append,
    appendAt: appendAt,
    wrap: wrap
  };

  var before$1 = function (marker, elements) {
    each(elements, function (x) {
      $_5w7xramcjm0og09t.before(marker, x);
    });
  };
  var after$1 = function (marker, elements) {
    each(elements, function (x, i) {
      var e = i === 0 ? marker : elements[i - 1];
      $_5w7xramcjm0og09t.after(e, x);
    });
  };
  var prepend$1 = function (parent, elements) {
    each(elements.slice().reverse(), function (x) {
      $_5w7xramcjm0og09t.prepend(parent, x);
    });
  };
  var append$1 = function (parent, elements) {
    each(elements, function (x) {
      $_5w7xramcjm0og09t.append(parent, x);
    });
  };
  var $_e8rgatmejm0og09y = {
    before: before$1,
    after: after$1,
    prepend: prepend$1,
    append: append$1
  };

  var empty = function (element) {
    element.dom().textContent = '';
    each($_d421p9lijm0og05w.children(element), function (rogue) {
      remove$2(rogue);
    });
  };
  var remove$2 = function (element) {
    var dom = element.dom();
    if (dom.parentNode !== null)
      dom.parentNode.removeChild(dom);
  };
  var unwrap = function (wrapper) {
    var children = $_d421p9lijm0og05w.children(wrapper);
    if (children.length > 0)
      $_e8rgatmejm0og09y.before(wrapper, children);
    remove$2(wrapper);
  };
  var $_7uuw85mdjm0og09v = {
    empty: empty,
    remove: remove$2,
    unwrap: unwrap
  };

  var stats = Immutable('minRow', 'minCol', 'maxRow', 'maxCol');
  var findSelectedStats = function (house, isSelected) {
    var totalColumns = house.grid().columns();
    var totalRows = house.grid().rows();
    var minRow = totalRows;
    var minCol = totalColumns;
    var maxRow = 0;
    var maxCol = 0;
    each$1(house.access(), function (detail) {
      if (isSelected(detail)) {
        var startRow = detail.row();
        var endRow = startRow + detail.rowspan() - 1;
        var startCol = detail.column();
        var endCol = startCol + detail.colspan() - 1;
        if (startRow < minRow)
          minRow = startRow;
        else if (endRow > maxRow)
          maxRow = endRow;
        if (startCol < minCol)
          minCol = startCol;
        else if (endCol > maxCol)
          maxCol = endCol;
      }
    });
    return stats(minRow, minCol, maxRow, maxCol);
  };
  var makeCell = function (list, seenSelected, rowIndex) {
    var row = list[rowIndex].element();
    var td = Element$$1.fromTag('td');
    $_5w7xramcjm0og09t.append(td, Element$$1.fromTag('br'));
    var f = seenSelected ? $_5w7xramcjm0og09t.append : $_5w7xramcjm0og09t.prepend;
    f(row, td);
  };
  var fillInGaps = function (list, house, stats, isSelected) {
    var totalColumns = house.grid().columns();
    var totalRows = house.grid().rows();
    for (var i = 0; i < totalRows; i++) {
      var seenSelected = false;
      for (var j = 0; j < totalColumns; j++) {
        if (!(i < stats.minRow() || i > stats.maxRow() || j < stats.minCol() || j > stats.maxCol())) {
          var needCell = $_dhbleam9jm0og094.getAt(house, i, j).filter(isSelected).isNone();
          if (needCell)
            makeCell(list, seenSelected, i);
          else
            seenSelected = true;
        }
      }
    }
  };
  var clean = function (table, stats) {
    var emptyRows = filter($_85fuu2ldjm0og04p.firstLayer(table, 'tr'), function (row) {
      return row.dom().childElementCount === 0;
    });
    each(emptyRows, $_7uuw85mdjm0og09v.remove);
    if (stats.minCol() === stats.maxCol() || stats.minRow() === stats.maxRow()) {
      each($_85fuu2ldjm0og04p.firstLayer(table, 'th,td'), function (cell) {
        $_6aylb4m1jm0og07w.remove(cell, 'rowspan');
        $_6aylb4m1jm0og07w.remove(cell, 'colspan');
      });
    }
    $_6aylb4m1jm0og07w.remove(table, 'width');
    $_6aylb4m1jm0og07w.remove(table, 'height');
    $_ekl9pwmajm0og09e.remove(table, 'width');
    $_ekl9pwmajm0og09e.remove(table, 'height');
  };
  var extract = function (table, selectedSelector) {
    var isSelected = function (detail) {
      return $_5jb9xelejm0og053.is(detail.element(), selectedSelector);
    };
    var list = $_eocn1clajm0og03n.fromTable(table);
    var house = $_dhbleam9jm0og094.generate(list);
    var stats = findSelectedStats(house, isSelected);
    var selector = 'th:not(' + selectedSelector + ')' + ',td:not(' + selectedSelector + ')';
    var unselectedCells = $_85fuu2ldjm0og04p.filterFirstLayer(table, 'th,td', function (cell) {
      return $_5jb9xelejm0og053.is(cell, selector);
    });
    each(unselectedCells, $_7uuw85mdjm0og09v.remove);
    fillInGaps(list, house, stats, isSelected);
    clean(table, stats);
    return table;
  };
  var $_6weswtl4jm0og02m = { extract: extract };

  var clone$1 = function (original, deep) {
    return Element$$1.fromDom(original.dom().cloneNode(deep));
  };
  var shallow = function (original) {
    return clone$1(original, false);
  };
  var deep = function (original) {
    return clone$1(original, true);
  };
  var shallowAs = function (original, tag) {
    var nu = Element$$1.fromTag(tag);
    var attributes = $_6aylb4m1jm0og07w.clone(original);
    $_6aylb4m1jm0og07w.setAll(nu, attributes);
    return nu;
  };
  var copy$1 = function (original, tag) {
    var nu = shallowAs(original, tag);
    var cloneChildren = $_d421p9lijm0og05w.children(deep(original));
    $_e8rgatmejm0og09y.append(nu, cloneChildren);
    return nu;
  };
  var mutate = function (original, tag) {
    var nu = shallowAs(original, tag);
    $_5w7xramcjm0og09t.before(original, nu);
    var children = $_d421p9lijm0og05w.children(original);
    $_e8rgatmejm0og09y.append(nu, children);
    $_7uuw85mdjm0og09v.remove(original);
    return nu;
  };
  var $_cbo10gmgjm0og0ay = {
    shallow: shallow,
    shallowAs: shallowAs,
    deep: deep,
    copy: copy$1,
    mutate: mutate
  };

  function NodeValue (is, name) {
    var get = function (element) {
      if (!is(element))
        throw new Error('Can only get ' + name + ' value of a ' + name + ' node');
      return getOption(element).getOr('');
    };
    var getOptionIE10 = function (element) {
      try {
        return getOptionSafe(element);
      } catch (e) {
        return Option.none();
      }
    };
    var getOptionSafe = function (element) {
      return is(element) ? Option.from(element.dom().nodeValue) : Option.none();
    };
    var browser = $_44j6bplpjm0og06x.detect().browser;
    var getOption = browser.isIE() && browser.version.major === 10 ? getOptionIE10 : getOptionSafe;
    var set = function (element, value) {
      if (!is(element))
        throw new Error('Can only set raw ' + name + ' value of a ' + name + ' node');
      element.dom().nodeValue = value;
    };
    return {
      get: get,
      getOption: getOption,
      set: set
    };
  }

  var api = NodeValue($_8kaujsm2jm0og085.isText, 'text');
  var get$2 = function (element) {
    return api.get(element);
  };
  var getOption = function (element) {
    return api.getOption(element);
  };
  var set$2 = function (element, value) {
    api.set(element, value);
  };
  var $_al1a6umjjm0og0b8 = {
    get: get$2,
    getOption: getOption,
    set: set$2
  };

  var getEnd = function (element) {
    return $_8kaujsm2jm0og085.name(element) === 'img' ? 1 : $_al1a6umjjm0og0b8.getOption(element).fold(function () {
      return $_d421p9lijm0og05w.children(element).length;
    }, function (v) {
      return v.length;
    });
  };
  var isEnd = function (element, offset) {
    return getEnd(element) === offset;
  };
  var isStart = function (element, offset) {
    return offset === 0;
  };
  var NBSP = '\xA0';
  var isTextNodeWithCursorPosition = function (el) {
    return $_al1a6umjjm0og0b8.getOption(el).filter(function (text) {
      return text.trim().length !== 0 || text.indexOf(NBSP) > -1;
    }).isSome();
  };
  var elementsWithCursorPosition = [
    'img',
    'br'
  ];
  var isCursorPosition = function (elem) {
    var hasCursorPosition = isTextNodeWithCursorPosition(elem);
    return hasCursorPosition || contains(elementsWithCursorPosition, $_8kaujsm2jm0og085.name(elem));
  };
  var $_epg8i0mijm0og0b5 = {
    getEnd: getEnd,
    isEnd: isEnd,
    isStart: isStart,
    isCursorPosition: isCursorPosition
  };

  var first$3 = function (element) {
    return $_ng4nfm7jm0og08i.descendant(element, $_epg8i0mijm0og0b5.isCursorPosition);
  };
  var last$2 = function (element) {
    return descendantRtl(element, $_epg8i0mijm0og0b5.isCursorPosition);
  };
  var descendantRtl = function (scope, predicate) {
    var descend = function (element) {
      var children = $_d421p9lijm0og05w.children(element);
      for (var i = children.length - 1; i >= 0; i--) {
        var child = children[i];
        if (predicate(child))
          return Option.some(child);
        var res = descend(child);
        if (res.isSome())
          return res;
      }
      return Option.none();
    };
    return descend(scope);
  };
  var $_e2itwymhjm0og0b1 = {
    first: first$3,
    last: last$2
  };

  var cell$1 = function () {
    var td = Element$$1.fromTag('td');
    $_5w7xramcjm0og09t.append(td, Element$$1.fromTag('br'));
    return td;
  };
  var replace = function (cell, tag, attrs) {
    var replica = $_cbo10gmgjm0og0ay.copy(cell, tag);
    each$1(attrs, function (v, k) {
      if (v === null)
        $_6aylb4m1jm0og07w.remove(replica, k);
      else
        $_6aylb4m1jm0og07w.set(replica, k, v);
    });
    return replica;
  };
  var pasteReplace = function (cellContent) {
    return cellContent;
  };
  var newRow = function (doc) {
    return function () {
      return Element$$1.fromTag('tr', doc.dom());
    };
  };
  var cloneFormats = function (oldCell, newCell, formats) {
    var first = $_e2itwymhjm0og0b1.first(oldCell);
    return first.map(function (firstText) {
      var formatSelector = formats.join(',');
      var parents = $_1wzcn0m3jm0og087.ancestors(firstText, formatSelector, function (element) {
        return $_dql4e0lkjm0og06c.eq(element, oldCell);
      });
      return foldr(parents, function (last$$1, parent) {
        var clonedFormat = $_cbo10gmgjm0og0ay.shallow(parent);
        $_6aylb4m1jm0og07w.remove(clonedFormat, 'contenteditable');
        $_5w7xramcjm0og09t.append(last$$1, clonedFormat);
        return clonedFormat;
      }, newCell);
    }).getOr(newCell);
  };
  var cellOperations = function (mutate, doc, formatsToClone) {
    var newCell = function (prev) {
      var doc = $_d421p9lijm0og05w.owner(prev.element());
      var td = Element$$1.fromTag($_8kaujsm2jm0og085.name(prev.element()), doc.dom());
      var formats = formatsToClone.getOr([
        'strong',
        'em',
        'b',
        'i',
        'span',
        'font',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'div'
      ]);
      var lastNode = formats.length > 0 ? cloneFormats(prev.element(), td, formats) : td;
      $_5w7xramcjm0og09t.append(lastNode, Element$$1.fromTag('br'));
      $_ekl9pwmajm0og09e.copy(prev.element(), td);
      $_ekl9pwmajm0og09e.remove(td, 'height');
      if (prev.colspan() !== 1)
        $_ekl9pwmajm0og09e.remove(prev.element(), 'width');
      mutate(prev.element(), td);
      return td;
    };
    return {
      row: newRow(doc),
      cell: newCell,
      replace: replace,
      gap: cell$1
    };
  };
  var paste = function (doc) {
    return {
      row: newRow(doc),
      cell: cell$1,
      replace: pasteReplace,
      gap: cell$1
    };
  };
  var $_1h0ajrmfjm0og0a3 = {
    cellOperations: cellOperations,
    paste: paste
  };

  var fromHtml$1 = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    return $_d421p9lijm0og05w.children(Element$$1.fromDom(div));
  };
  var fromTags = function (tags, scope) {
    return map(tags, function (x) {
      return Element$$1.fromTag(x, scope);
    });
  };
  var fromText$1 = function (texts, scope) {
    return map(texts, function (x) {
      return Element$$1.fromText(x, scope);
    });
  };
  var fromDom$1 = function (nodes) {
    return map(nodes, Element$$1.fromDom);
  };
  var $_yhkg3mljm0og0bf = {
    fromHtml: fromHtml$1,
    fromTags: fromTags,
    fromText: fromText$1,
    fromDom: fromDom$1
  };

  var TagBoundaries = [
    'body',
    'p',
    'div',
    'article',
    'aside',
    'figcaption',
    'figure',
    'footer',
    'header',
    'nav',
    'section',
    'ol',
    'ul',
    'li',
    'table',
    'thead',
    'tbody',
    'tfoot',
    'caption',
    'tr',
    'td',
    'th',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'blockquote',
    'pre',
    'address'
  ];

  function DomUniverse () {
    var clone = function (element) {
      return Element$$1.fromDom(element.dom().cloneNode(false));
    };
    var isBoundary = function (element) {
      if (!$_8kaujsm2jm0og085.isElement(element))
        return false;
      if ($_8kaujsm2jm0og085.name(element) === 'body')
        return true;
      return contains(TagBoundaries, $_8kaujsm2jm0og085.name(element));
    };
    var isEmptyTag = function (element) {
      if (!$_8kaujsm2jm0og085.isElement(element))
        return false;
      return contains([
        'br',
        'img',
        'hr',
        'input'
      ], $_8kaujsm2jm0og085.name(element));
    };
    var comparePosition = function (element, other) {
      return element.dom().compareDocumentPosition(other.dom());
    };
    var copyAttributesTo = function (source, destination) {
      var as = $_6aylb4m1jm0og07w.clone(source);
      $_6aylb4m1jm0og07w.setAll(destination, as);
    };
    return {
      up: constant({
        selector: $_nsz8xm6jm0og08h.ancestor,
        closest: $_nsz8xm6jm0og08h.closest,
        predicate: $_ng4nfm7jm0og08i.ancestor,
        all: $_d421p9lijm0og05w.parents
      }),
      down: constant({
        selector: $_1wzcn0m3jm0og087.descendants,
        predicate: $_1ke0b4m4jm0og088.descendants
      }),
      styles: constant({
        get: $_ekl9pwmajm0og09e.get,
        getRaw: $_ekl9pwmajm0og09e.getRaw,
        set: $_ekl9pwmajm0og09e.set,
        remove: $_ekl9pwmajm0og09e.remove
      }),
      attrs: constant({
        get: $_6aylb4m1jm0og07w.get,
        set: $_6aylb4m1jm0og07w.set,
        remove: $_6aylb4m1jm0og07w.remove,
        copyTo: copyAttributesTo
      }),
      insert: constant({
        before: $_5w7xramcjm0og09t.before,
        after: $_5w7xramcjm0og09t.after,
        afterAll: $_e8rgatmejm0og09y.after,
        append: $_5w7xramcjm0og09t.append,
        appendAll: $_e8rgatmejm0og09y.append,
        prepend: $_5w7xramcjm0og09t.prepend,
        wrap: $_5w7xramcjm0og09t.wrap
      }),
      remove: constant({
        unwrap: $_7uuw85mdjm0og09v.unwrap,
        remove: $_7uuw85mdjm0og09v.remove
      }),
      create: constant({
        nu: Element$$1.fromTag,
        clone: clone,
        text: Element$$1.fromText
      }),
      query: constant({
        comparePosition: comparePosition,
        prevSibling: $_d421p9lijm0og05w.prevSibling,
        nextSibling: $_d421p9lijm0og05w.nextSibling
      }),
      property: constant({
        children: $_d421p9lijm0og05w.children,
        name: $_8kaujsm2jm0og085.name,
        parent: $_d421p9lijm0og05w.parent,
        isText: $_8kaujsm2jm0og085.isText,
        isComment: $_8kaujsm2jm0og085.isComment,
        isElement: $_8kaujsm2jm0og085.isElement,
        getText: $_al1a6umjjm0og0b8.get,
        setText: $_al1a6umjjm0og0b8.set,
        isBoundary: isBoundary,
        isEmptyTag: isEmptyTag
      }),
      eq: $_dql4e0lkjm0og06c.eq,
      is: $_dql4e0lkjm0og06c.is
    };
  }

  var leftRight = Immutable('left', 'right');
  var bisect = function (universe, parent, child) {
    var children = universe.property().children(parent);
    var index = findIndex(children, curry(universe.eq, child));
    return index.map(function (ind) {
      return {
        before: constant(children.slice(0, ind)),
        after: constant(children.slice(ind + 1))
      };
    });
  };
  var breakToRight = function (universe, parent, child) {
    return bisect(universe, parent, child).map(function (parts) {
      var second = universe.create().clone(parent);
      universe.insert().appendAll(second, parts.after());
      universe.insert().after(parent, second);
      return leftRight(parent, second);
    });
  };
  var breakToLeft = function (universe, parent, child) {
    return bisect(universe, parent, child).map(function (parts) {
      var prior = universe.create().clone(parent);
      universe.insert().appendAll(prior, parts.before().concat([child]));
      universe.insert().appendAll(parent, parts.after());
      universe.insert().before(parent, prior);
      return leftRight(prior, parent);
    });
  };
  var breakPath = function (universe, item, isTop, breaker) {
    var result = Immutable('first', 'second', 'splits');
    var next = function (child, group, splits) {
      var fallback = result(child, Option.none(), splits);
      if (isTop(child))
        return result(child, group, splits);
      else {
        return universe.property().parent(child).bind(function (parent) {
          return breaker(universe, parent, child).map(function (breakage) {
            var extra = [{
                first: breakage.left,
                second: breakage.right
              }];
            var nextChild = isTop(parent) ? parent : breakage.left();
            return next(nextChild, Option.some(breakage.right()), splits.concat(extra));
          }).getOr(fallback);
        });
      }
    };
    return next(item, Option.none(), []);
  };
  var $_4d00spmujm0og0ed = {
    breakToLeft: breakToLeft,
    breakToRight: breakToRight,
    breakPath: breakPath
  };

  var all$3 = function (universe, look, elements, f) {
    var head$$1 = elements[0];
    var tail = elements.slice(1);
    return f(universe, look, head$$1, tail);
  };
  var oneAll = function (universe, look, elements) {
    return elements.length > 0 ? all$3(universe, look, elements, unsafeOne) : Option.none();
  };
  var unsafeOne = function (universe, look, head$$1, tail) {
    var start = look(universe, head$$1);
    return foldr(tail, function (b, a) {
      var current = look(universe, a);
      return commonElement(universe, b, current);
    }, start);
  };
  var commonElement = function (universe, start, end) {
    return start.bind(function (s) {
      return end.filter(curry(universe.eq, s));
    });
  };
  var $_55t5uumvjm0og0er = { oneAll: oneAll };

  var eq$1 = function (universe, item) {
    return curry(universe.eq, item);
  };
  var unsafeSubset = function (universe, common, ps1, ps2) {
    var children = universe.property().children(common);
    if (universe.eq(common, ps1[0]))
      return Option.some([ps1[0]]);
    if (universe.eq(common, ps2[0]))
      return Option.some([ps2[0]]);
    var finder = function (ps) {
      var topDown = reverse(ps);
      var index = findIndex(topDown, eq$1(universe, common)).getOr(-1);
      var item = index < topDown.length - 1 ? topDown[index + 1] : topDown[index];
      return findIndex(children, eq$1(universe, item));
    };
    var startIndex = finder(ps1);
    var endIndex = finder(ps2);
    return startIndex.bind(function (sIndex) {
      return endIndex.map(function (eIndex) {
        var first = Math.min(sIndex, eIndex);
        var last$$1 = Math.max(sIndex, eIndex);
        return children.slice(first, last$$1 + 1);
      });
    });
  };
  var ancestors$2 = function (universe, start, end, _isRoot) {
    var isRoot = _isRoot !== undefined ? _isRoot : constant(false);
    var ps1 = [start].concat(universe.up().all(start));
    var ps2 = [end].concat(universe.up().all(end));
    var prune = function (path) {
      var index = findIndex(path, isRoot);
      return index.fold(function () {
        return path;
      }, function (ind) {
        return path.slice(0, ind + 1);
      });
    };
    var pruned1 = prune(ps1);
    var pruned2 = prune(ps2);
    var shared = find(pruned1, function (x) {
      return exists(pruned2, eq$1(universe, x));
    });
    return {
      firstpath: constant(pruned1),
      secondpath: constant(pruned2),
      shared: constant(shared)
    };
  };
  var subset = function (universe, start, end) {
    var ancs = ancestors$2(universe, start, end);
    return ancs.shared().bind(function (shared) {
      return unsafeSubset(universe, shared, ancs.firstpath(), ancs.secondpath());
    });
  };
  var $_eob1vmmwjm0og0ez = {
    subset: subset,
    ancestors: ancestors$2
  };

  var sharedOne = function (universe, look, elements) {
    return $_55t5uumvjm0og0er.oneAll(universe, look, elements);
  };
  var subset$1 = function (universe, start, finish) {
    return $_eob1vmmwjm0og0ez.subset(universe, start, finish);
  };
  var ancestors$3 = function (universe, start, finish, _isRoot) {
    return $_eob1vmmwjm0og0ez.ancestors(universe, start, finish, _isRoot);
  };
  var breakToLeft$1 = function (universe, parent, child) {
    return $_4d00spmujm0og0ed.breakToLeft(universe, parent, child);
  };
  var breakToRight$1 = function (universe, parent, child) {
    return $_4d00spmujm0og0ed.breakToRight(universe, parent, child);
  };
  var breakPath$1 = function (universe, child, isTop, breaker) {
    return $_4d00spmujm0og0ed.breakPath(universe, child, isTop, breaker);
  };
  var $_2hb3vomtjm0og0ea = {
    sharedOne: sharedOne,
    subset: subset$1,
    ancestors: ancestors$3,
    breakToLeft: breakToLeft$1,
    breakToRight: breakToRight$1,
    breakPath: breakPath$1
  };

  var universe = DomUniverse();
  var sharedOne$1 = function (look, elements) {
    return $_2hb3vomtjm0og0ea.sharedOne(universe, function (universe, element) {
      return look(element);
    }, elements);
  };
  var subset$2 = function (start, finish) {
    return $_2hb3vomtjm0og0ea.subset(universe, start, finish);
  };
  var ancestors$4 = function (start, finish, _isRoot) {
    return $_2hb3vomtjm0og0ea.ancestors(universe, start, finish, _isRoot);
  };
  var breakToLeft$2 = function (parent, child) {
    return $_2hb3vomtjm0og0ea.breakToLeft(universe, parent, child);
  };
  var breakToRight$2 = function (parent, child) {
    return $_2hb3vomtjm0og0ea.breakToRight(universe, parent, child);
  };
  var breakPath$2 = function (child, isTop, breaker) {
    return $_2hb3vomtjm0og0ea.breakPath(universe, child, isTop, function (u, p, c) {
      return breaker(p, c);
    });
  };
  var $_geta6vmqjm0og0d4 = {
    sharedOne: sharedOne$1,
    subset: subset$2,
    ancestors: ancestors$4,
    breakToLeft: breakToLeft$2,
    breakToRight: breakToRight$2,
    breakPath: breakPath$2
  };

  var inSelection = function (bounds, detail) {
    var leftEdge = detail.column();
    var rightEdge = detail.column() + detail.colspan() - 1;
    var topEdge = detail.row();
    var bottomEdge = detail.row() + detail.rowspan() - 1;
    return leftEdge <= bounds.finishCol() && rightEdge >= bounds.startCol() && (topEdge <= bounds.finishRow() && bottomEdge >= bounds.startRow());
  };
  var isWithin = function (bounds, detail) {
    return detail.column() >= bounds.startCol() && detail.column() + detail.colspan() - 1 <= bounds.finishCol() && detail.row() >= bounds.startRow() && detail.row() + detail.rowspan() - 1 <= bounds.finishRow();
  };
  var isRectangular = function (warehouse, bounds) {
    var isRect = true;
    var detailIsWithin = curry(isWithin, bounds);
    for (var i = bounds.startRow(); i <= bounds.finishRow(); i++) {
      for (var j = bounds.startCol(); j <= bounds.finishCol(); j++) {
        isRect = isRect && $_dhbleam9jm0og094.getAt(warehouse, i, j).exists(detailIsWithin);
      }
    }
    return isRect ? Option.some(bounds) : Option.none();
  };
  var $_f0uumamzjm0og0fj = {
    inSelection: inSelection,
    isWithin: isWithin,
    isRectangular: isRectangular
  };

  var getBounds = function (detailA, detailB) {
    return $_7gs7v1lbjm0og03x.bounds(Math.min(detailA.row(), detailB.row()), Math.min(detailA.column(), detailB.column()), Math.max(detailA.row() + detailA.rowspan() - 1, detailB.row() + detailB.rowspan() - 1), Math.max(detailA.column() + detailA.colspan() - 1, detailB.column() + detailB.colspan() - 1));
  };
  var getAnyBox = function (warehouse, startCell, finishCell) {
    var startCoords = $_dhbleam9jm0og094.findItem(warehouse, startCell, $_dql4e0lkjm0og06c.eq);
    var finishCoords = $_dhbleam9jm0og094.findItem(warehouse, finishCell, $_dql4e0lkjm0og06c.eq);
    return startCoords.bind(function (sc) {
      return finishCoords.map(function (fc) {
        return getBounds(sc, fc);
      });
    });
  };
  var getBox = function (warehouse, startCell, finishCell) {
    return getAnyBox(warehouse, startCell, finishCell).bind(function (bounds) {
      return $_f0uumamzjm0og0fj.isRectangular(warehouse, bounds);
    });
  };
  var $_8a5yern0jm0og0fp = {
    getAnyBox: getAnyBox,
    getBox: getBox
  };

  var moveBy = function (warehouse, cell, row, column) {
    return $_dhbleam9jm0og094.findItem(warehouse, cell, $_dql4e0lkjm0og06c.eq).bind(function (detail) {
      var startRow = row > 0 ? detail.row() + detail.rowspan() - 1 : detail.row();
      var startCol = column > 0 ? detail.column() + detail.colspan() - 1 : detail.column();
      var dest = $_dhbleam9jm0og094.getAt(warehouse, startRow + row, startCol + column);
      return dest.map(function (d) {
        return d.element();
      });
    });
  };
  var intercepts = function (warehouse, start, finish) {
    return $_8a5yern0jm0og0fp.getAnyBox(warehouse, start, finish).map(function (bounds) {
      var inside = $_dhbleam9jm0og094.filterItems(warehouse, curry($_f0uumamzjm0og0fj.inSelection, bounds));
      return map(inside, function (detail) {
        return detail.element();
      });
    });
  };
  var parentCell = function (warehouse, innerCell) {
    var isContainedBy = function (c1, c2) {
      return $_dql4e0lkjm0og06c.contains(c2, c1);
    };
    return $_dhbleam9jm0og094.findItem(warehouse, innerCell, isContainedBy).bind(function (detail) {
      return detail.element();
    });
  };
  var $_fvogismyjm0og0fb = {
    moveBy: moveBy,
    intercepts: intercepts,
    parentCell: parentCell
  };

  var moveBy$1 = function (cell, deltaRow, deltaColumn) {
    return $_d02uidlcjm0og041.table(cell).bind(function (table) {
      var warehouse = getWarehouse(table);
      return $_fvogismyjm0og0fb.moveBy(warehouse, cell, deltaRow, deltaColumn);
    });
  };
  var intercepts$1 = function (table, first, last) {
    var warehouse = getWarehouse(table);
    return $_fvogismyjm0og0fb.intercepts(warehouse, first, last);
  };
  var nestedIntercepts = function (table, first, firstTable, last, lastTable) {
    var warehouse = getWarehouse(table);
    var startCell = $_dql4e0lkjm0og06c.eq(table, firstTable) ? first : $_fvogismyjm0og0fb.parentCell(warehouse, first);
    var lastCell = $_dql4e0lkjm0og06c.eq(table, lastTable) ? last : $_fvogismyjm0og0fb.parentCell(warehouse, last);
    return $_fvogismyjm0og0fb.intercepts(warehouse, startCell, lastCell);
  };
  var getBox$1 = function (table, first, last) {
    var warehouse = getWarehouse(table);
    return $_8a5yern0jm0og0fp.getBox(warehouse, first, last);
  };
  var getWarehouse = function (table) {
    var list = $_eocn1clajm0og03n.fromTable(table);
    return $_dhbleam9jm0og094.generate(list);
  };
  var $_9u2e4cmxjm0og0f7 = {
    moveBy: moveBy$1,
    intercepts: intercepts$1,
    nestedIntercepts: nestedIntercepts,
    getBox: getBox$1
  };

  var lookupTable = function (container, isRoot) {
    return $_nsz8xm6jm0og08h.ancestor(container, 'table');
  };
  var identified = MixedBag([
    'boxes',
    'start',
    'finish'
  ], []);
  var identify = function (start, finish, isRoot) {
    var getIsRoot = function (rootTable) {
      return function (element) {
        return isRoot(element) || $_dql4e0lkjm0og06c.eq(element, rootTable);
      };
    };
    if ($_dql4e0lkjm0og06c.eq(start, finish)) {
      return Option.some(identified({
        boxes: Option.some([start]),
        start: start,
        finish: finish
      }));
    } else {
      return lookupTable(start, isRoot).bind(function (startTable) {
        return lookupTable(finish, isRoot).bind(function (finishTable) {
          if ($_dql4e0lkjm0og06c.eq(startTable, finishTable)) {
            return Option.some(identified({
              boxes: $_9u2e4cmxjm0og0f7.intercepts(startTable, start, finish),
              start: start,
              finish: finish
            }));
          } else if ($_dql4e0lkjm0og06c.contains(startTable, finishTable)) {
            var ancestorCells = $_1wzcn0m3jm0og087.ancestors(finish, 'td,th', getIsRoot(startTable));
            var finishCell = ancestorCells.length > 0 ? ancestorCells[ancestorCells.length - 1] : finish;
            return Option.some(identified({
              boxes: $_9u2e4cmxjm0og0f7.nestedIntercepts(startTable, start, startTable, finish, finishTable),
              start: start,
              finish: finishCell
            }));
          } else if ($_dql4e0lkjm0og06c.contains(finishTable, startTable)) {
            var ancestorCells = $_1wzcn0m3jm0og087.ancestors(start, 'td,th', getIsRoot(finishTable));
            var startCell = ancestorCells.length > 0 ? ancestorCells[ancestorCells.length - 1] : start;
            return Option.some(identified({
              boxes: $_9u2e4cmxjm0og0f7.nestedIntercepts(finishTable, start, startTable, finish, finishTable),
              start: start,
              finish: startCell
            }));
          } else {
            return $_geta6vmqjm0og0d4.ancestors(start, finish).shared().bind(function (lca) {
              return $_nsz8xm6jm0og08h.closest(lca, 'table', isRoot).bind(function (lcaTable) {
                var finishAncestorCells = $_1wzcn0m3jm0og087.ancestors(finish, 'td,th', getIsRoot(lcaTable));
                var finishCell = finishAncestorCells.length > 0 ? finishAncestorCells[finishAncestorCells.length - 1] : finish;
                var startAncestorCells = $_1wzcn0m3jm0og087.ancestors(start, 'td,th', getIsRoot(lcaTable));
                var startCell = startAncestorCells.length > 0 ? startAncestorCells[startAncestorCells.length - 1] : start;
                return Option.some(identified({
                  boxes: $_9u2e4cmxjm0og0f7.nestedIntercepts(lcaTable, start, startTable, finish, finishTable),
                  start: startCell,
                  finish: finishCell
                }));
              });
            });
          }
        });
      });
    }
  };
  var retrieve = function (container, selector) {
    var sels = $_1wzcn0m3jm0og087.descendants(container, selector);
    return sels.length > 0 ? Option.some(sels) : Option.none();
  };
  var getLast = function (boxes, lastSelectedSelector) {
    return find(boxes, function (box) {
      return $_5jb9xelejm0og053.is(box, lastSelectedSelector);
    });
  };
  var getEdges = function (container, firstSelectedSelector, lastSelectedSelector) {
    return $_nsz8xm6jm0og08h.descendant(container, firstSelectedSelector).bind(function (first) {
      return $_nsz8xm6jm0og08h.descendant(container, lastSelectedSelector).bind(function (last$$1) {
        return $_geta6vmqjm0og0d4.sharedOne(lookupTable, [
          first,
          last$$1
        ]).map(function (tbl) {
          return {
            first: constant(first),
            last: constant(last$$1),
            table: constant(tbl)
          };
        });
      });
    });
  };
  var expandTo = function (finish, firstSelectedSelector) {
    return $_nsz8xm6jm0og08h.ancestor(finish, 'table').bind(function (table) {
      return $_nsz8xm6jm0og08h.descendant(table, firstSelectedSelector).bind(function (start) {
        return identify(start, finish).bind(function (identified) {
          return identified.boxes().map(function (boxes) {
            return {
              boxes: constant(boxes),
              start: constant(identified.start()),
              finish: constant(identified.finish())
            };
          });
        });
      });
    });
  };
  var shiftSelection = function (boxes, deltaRow, deltaColumn, firstSelectedSelector, lastSelectedSelector) {
    return getLast(boxes, lastSelectedSelector).bind(function (last$$1) {
      return $_9u2e4cmxjm0og0f7.moveBy(last$$1, deltaRow, deltaColumn).bind(function (finish) {
        return expandTo(finish, firstSelectedSelector);
      });
    });
  };
  var $_do61shmpjm0og0cb = {
    identify: identify,
    retrieve: retrieve,
    shiftSelection: shiftSelection,
    getEdges: getEdges
  };

  var retrieve$1 = function (container, selector) {
    return $_do61shmpjm0og0cb.retrieve(container, selector);
  };
  var retrieveBox = function (container, firstSelectedSelector, lastSelectedSelector) {
    return $_do61shmpjm0og0cb.getEdges(container, firstSelectedSelector, lastSelectedSelector).bind(function (edges) {
      var isRoot = function (ancestor) {
        return $_dql4e0lkjm0og06c.eq(container, ancestor);
      };
      var firstAncestor = $_nsz8xm6jm0og08h.ancestor(edges.first(), 'thead,tfoot,tbody,table', isRoot);
      var lastAncestor = $_nsz8xm6jm0og08h.ancestor(edges.last(), 'thead,tfoot,tbody,table', isRoot);
      return firstAncestor.bind(function (fA) {
        return lastAncestor.bind(function (lA) {
          return $_dql4e0lkjm0og06c.eq(fA, lA) ? $_9u2e4cmxjm0og0f7.getBox(edges.table(), edges.first(), edges.last()) : Option.none();
        });
      });
    });
  };
  var $_chpjd2mojm0og0c1 = {
    retrieve: retrieve$1,
    retrieveBox: retrieveBox
  };

  var selected = 'data-mce-selected';
  var selectedSelector = 'td[' + selected + '],th[' + selected + ']';
  var attributeSelector = '[' + selected + ']';
  var firstSelected = 'data-mce-first-selected';
  var firstSelectedSelector = 'td[' + firstSelected + '],th[' + firstSelected + ']';
  var lastSelected = 'data-mce-last-selected';
  var lastSelectedSelector = 'td[' + lastSelected + '],th[' + lastSelected + ']';
  var $_a7l0t4n1jm0og0fu = {
    selected: constant(selected),
    selectedSelector: constant(selectedSelector),
    attributeSelector: constant(attributeSelector),
    firstSelected: constant(firstSelected),
    firstSelectedSelector: constant(firstSelectedSelector),
    lastSelected: constant(lastSelected),
    lastSelectedSelector: constant(lastSelectedSelector)
  };

  var generate$1 = function (cases) {
    if (!isArray(cases)) {
      throw new Error('cases must be an array');
    }
    if (cases.length === 0) {
      throw new Error('there must be at least one case');
    }
    var constructors = [];
    var adt = {};
    each(cases, function (acase, count) {
      var keys$$1 = keys(acase);
      if (keys$$1.length !== 1) {
        throw new Error('one and only one name per case');
      }
      var key = keys$$1[0];
      var value = acase[key];
      if (adt[key] !== undefined) {
        throw new Error('duplicate key detected:' + key);
      } else if (key === 'cata') {
        throw new Error('cannot have a case named cata (sorry)');
      } else if (!isArray(value)) {
        throw new Error('case arguments must be an array');
      }
      constructors.push(key);
      adt[key] = function () {
        var argLength = arguments.length;
        if (argLength !== value.length) {
          throw new Error('Wrong number of arguments to case ' + key + '. Expected ' + value.length + ' (' + value + '), got ' + argLength);
        }
        var args = new Array(argLength);
        for (var i = 0; i < args.length; i++)
          args[i] = arguments[i];
        var match = function (branches) {
          var branchKeys = keys(branches);
          if (constructors.length !== branchKeys.length) {
            throw new Error('Wrong number of arguments to match. Expected: ' + constructors.join(',') + '\nActual: ' + branchKeys.join(','));
          }
          var allReqd = forall(constructors, function (reqKey) {
            return contains(branchKeys, reqKey);
          });
          if (!allReqd)
            throw new Error('Not all branches were specified when using match. Specified: ' + branchKeys.join(', ') + '\nRequired: ' + constructors.join(', '));
          return branches[key].apply(null, args);
        };
        return {
          fold: function () {
            if (arguments.length !== cases.length) {
              throw new Error('Wrong number of arguments to fold. Expected ' + cases.length + ', got ' + arguments.length);
            }
            var target = arguments[count];
            return target.apply(null, args);
          },
          match: match,
          log: function (label) {
            console.log(label, {
              constructors: constructors,
              constructor: key,
              params: args
            });
          }
        };
      };
    });
    return adt;
  };
  var Adt = { generate: generate$1 };

  var type$1 = Adt.generate([
    { none: [] },
    { multiple: ['elements'] },
    { single: ['selection'] }
  ]);
  var cata = function (subject, onNone, onMultiple, onSingle) {
    return subject.fold(onNone, onMultiple, onSingle);
  };
  var $_ej5305n2jm0og0fx = {
    cata: cata,
    none: type$1.none,
    multiple: type$1.multiple,
    single: type$1.single
  };

  var selection = function (cell, selections) {
    return $_ej5305n2jm0og0fx.cata(selections.get(), constant([]), identity, constant([cell]));
  };
  var unmergable = function (cell, selections) {
    var hasSpan = function (elem) {
      return $_6aylb4m1jm0og07w.has(elem, 'rowspan') && parseInt($_6aylb4m1jm0og07w.get(elem, 'rowspan'), 10) > 1 || $_6aylb4m1jm0og07w.has(elem, 'colspan') && parseInt($_6aylb4m1jm0og07w.get(elem, 'colspan'), 10) > 1;
    };
    var candidates = selection(cell, selections);
    return candidates.length > 0 && forall(candidates, hasSpan) ? Option.some(candidates) : Option.none();
  };
  var mergable = function (table, selections) {
    return $_ej5305n2jm0og0fx.cata(selections.get(), Option.none, function (cells, _env) {
      if (cells.length === 0) {
        return Option.none();
      }
      return $_chpjd2mojm0og0c1.retrieveBox(table, $_a7l0t4n1jm0og0fu.firstSelectedSelector(), $_a7l0t4n1jm0og0fu.lastSelectedSelector()).bind(function (bounds) {
        return cells.length > 1 ? Option.some({
          bounds: constant(bounds),
          cells: constant(cells)
        }) : Option.none();
      });
    }, Option.none);
  };
  var $_7fmwc2mnjm0og0br = {
    mergable: mergable,
    unmergable: unmergable,
    selection: selection
  };

  var noMenu = function (cell) {
    return {
      element: constant(cell),
      mergable: Option.none,
      unmergable: Option.none,
      selection: constant([cell])
    };
  };
  var forMenu = function (selections, table, cell) {
    return {
      element: constant(cell),
      mergable: constant($_7fmwc2mnjm0og0br.mergable(table, selections)),
      unmergable: constant($_7fmwc2mnjm0og0br.unmergable(cell, selections)),
      selection: constant($_7fmwc2mnjm0og0br.selection(cell, selections))
    };
  };
  var notCell$1 = function (element) {
    return noMenu(element);
  };
  var paste$1 = Immutable('element', 'clipboard', 'generators');
  var pasteRows = function (selections, table, cell, clipboard, generators) {
    return {
      element: constant(cell),
      mergable: Option.none,
      unmergable: Option.none,
      selection: constant($_7fmwc2mnjm0og0br.selection(cell, selections)),
      clipboard: constant(clipboard),
      generators: constant(generators)
    };
  };
  var $_geipzymmjm0og0bk = {
    noMenu: noMenu,
    forMenu: forMenu,
    notCell: notCell$1,
    paste: paste$1,
    pasteRows: pasteRows
  };

  var extractSelected = function (cells) {
    return $_d02uidlcjm0og041.table(cells[0]).map($_cbo10gmgjm0og0ay.deep).map(function (replica) {
      return [$_6weswtl4jm0og02m.extract(replica, $_a7l0t4n1jm0og0fu.attributeSelector())];
    });
  };
  var serializeElement = function (editor, elm) {
    return editor.selection.serializer.serialize(elm.dom(), {});
  };
  var registerEvents = function (editor, selections, actions, cellSelection) {
    editor.on('BeforeGetContent', function (e) {
      var multiCellContext = function (cells) {
        e.preventDefault();
        extractSelected(cells).each(function (elements) {
          e.content = map(elements, function (elm) {
            return serializeElement(editor, elm);
          }).join('');
        });
      };
      if (e.selection === true) {
        $_ej5305n2jm0og0fx.cata(selections.get(), noop, multiCellContext, noop);
      }
    });
    editor.on('BeforeSetContent', function (e) {
      if (e.selection === true && e.paste === true) {
        var cellOpt = Option.from(editor.dom.getParent(editor.selection.getStart(), 'th,td'));
        cellOpt.each(function (domCell) {
          var cell = Element$$1.fromDom(domCell);
          var table = $_d02uidlcjm0og041.table(cell);
          table.bind(function (table) {
            var elements = filter($_yhkg3mljm0og0bf.fromHtml(e.content), function (content) {
              return $_8kaujsm2jm0og085.name(content) !== 'meta';
            });
            if (elements.length === 1 && $_8kaujsm2jm0og085.name(elements[0]) === 'table') {
              e.preventDefault();
              var doc = Element$$1.fromDom(editor.getDoc());
              var generators = $_1h0ajrmfjm0og0a3.paste(doc);
              var targets = $_geipzymmjm0og0bk.paste(cell, elements[0], generators);
              actions.pasteCells(table, targets).each(function (rng) {
                editor.selection.setRng(rng);
                editor.focus();
                cellSelection.clear(table);
              });
            }
          });
        });
      }
    });
  };
  var $_2o9k0zkzjm0og01l = { registerEvents: registerEvents };

  function Dimension (name, getOffset) {
    var set = function (element, h) {
      if (!isNumber(h) && !h.match(/^[0-9]+$/))
        throw name + '.set accepts only positive integer values. Value was ' + h;
      var dom = element.dom();
      if ($_djp4p1mbjm0og09r.isSupported(dom))
        dom.style[name] = h + 'px';
    };
    var get = function (element) {
      var r = getOffset(element);
      if (r <= 0 || r === null) {
        var css = $_ekl9pwmajm0og09e.get(element, name);
        return parseFloat(css) || 0;
      }
      return r;
    };
    var getOuter = get;
    var aggregate = function (element, properties) {
      return foldl(properties, function (acc, property) {
        var val = $_ekl9pwmajm0og09e.get(element, property);
        var value = val === undefined ? 0 : parseInt(val, 10);
        return isNaN(value) ? acc : acc + value;
      }, 0);
    };
    var max = function (element, value, properties) {
      var cumulativeInclusions = aggregate(element, properties);
      var absoluteMax = value > cumulativeInclusions ? value - cumulativeInclusions : 0;
      return absoluteMax;
    };
    return {
      set: set,
      get: get,
      getOuter: getOuter,
      aggregate: aggregate,
      max: max
    };
  }

  var api$1 = Dimension('height', function (element) {
    var dom = element.dom();
    return $_mqd4xm5jm0og08c.inBody(element) ? dom.getBoundingClientRect().height : dom.offsetHeight;
  });
  var set$3 = function (element, h) {
    api$1.set(element, h);
  };
  var get$3 = function (element) {
    return api$1.get(element);
  };
  var getOuter = function (element) {
    return api$1.getOuter(element);
  };
  var setMax = function (element, value) {
    var inclusions = [
      'margin-top',
      'border-top-width',
      'padding-top',
      'padding-bottom',
      'border-bottom-width',
      'margin-bottom'
    ];
    var absMax = api$1.max(element, value, inclusions);
    $_ekl9pwmajm0og09e.set(element, 'max-height', absMax + 'px');
  };
  var $_6t966tn8jm0og0hl = {
    set: set$3,
    get: get$3,
    getOuter: getOuter,
    setMax: setMax
  };

  var api$2 = Dimension('width', function (element) {
    return element.dom().offsetWidth;
  });
  var set$4 = function (element, h) {
    api$2.set(element, h);
  };
  var get$4 = function (element) {
    return api$2.get(element);
  };
  var getOuter$1 = function (element) {
    return api$2.getOuter(element);
  };
  var setMax$1 = function (element, value) {
    var inclusions = [
      'margin-left',
      'border-left-width',
      'padding-left',
      'padding-right',
      'border-right-width',
      'margin-right'
    ];
    var absMax = api$2.max(element, value, inclusions);
    $_ekl9pwmajm0og09e.set(element, 'max-width', absMax + 'px');
  };
  var $_1qjqlnajm0og0ht = {
    set: set$4,
    get: get$4,
    getOuter: getOuter$1,
    setMax: setMax$1
  };

  var platform = $_44j6bplpjm0og06x.detect();
  var needManualCalc = function () {
    return platform.browser.isIE() || platform.browser.isEdge();
  };
  var toNumber = function (px, fallback) {
    var num = parseFloat(px);
    return isNaN(num) ? fallback : num;
  };
  var getProp = function (elm, name, fallback) {
    return toNumber($_ekl9pwmajm0og09e.get(elm, name), fallback);
  };
  var getCalculatedHeight = function (cell) {
    var paddingTop = getProp(cell, 'padding-top', 0);
    var paddingBottom = getProp(cell, 'padding-bottom', 0);
    var borderTop = getProp(cell, 'border-top-width', 0);
    var borderBottom = getProp(cell, 'border-bottom-width', 0);
    var height = cell.dom().getBoundingClientRect().height;
    var boxSizing = $_ekl9pwmajm0og09e.get(cell, 'box-sizing');
    var borders = borderTop + borderBottom;
    return boxSizing === 'border-box' ? height : height - paddingTop - paddingBottom - borders;
  };
  var getWidth = function (cell) {
    return getProp(cell, 'width', $_1qjqlnajm0og0ht.get(cell));
  };
  var getHeight = function (cell) {
    return needManualCalc() ? getCalculatedHeight(cell) : getProp(cell, 'height', $_6t966tn8jm0og0hl.get(cell));
  };
  var $_45mgeln7jm0og0hc = {
    getWidth: getWidth,
    getHeight: getHeight
  };

  var genericSizeRegex = /(\d+(\.\d+)?)(\w|%)*/;
  var percentageBasedSizeRegex = /(\d+(\.\d+)?)%/;
  var pixelBasedSizeRegex = /(\d+(\.\d+)?)px|em/;
  var setPixelWidth = function (cell, amount) {
    $_ekl9pwmajm0og09e.set(cell, 'width', amount + 'px');
  };
  var setPercentageWidth = function (cell, amount) {
    $_ekl9pwmajm0og09e.set(cell, 'width', amount + '%');
  };
  var setHeight = function (cell, amount) {
    $_ekl9pwmajm0og09e.set(cell, 'height', amount + 'px');
  };
  var getHeightValue = function (cell) {
    return $_ekl9pwmajm0og09e.getRaw(cell, 'height').getOrThunk(function () {
      return $_45mgeln7jm0og0hc.getHeight(cell) + 'px';
    });
  };
  var convert = function (cell, number, getter, setter) {
    var newSize = $_d02uidlcjm0og041.table(cell).map(function (table) {
      var total = getter(table);
      return Math.floor(number / 100 * total);
    }).getOr(number);
    setter(cell, newSize);
    return newSize;
  };
  var normalizePixelSize = function (value, cell, getter, setter) {
    var number = parseInt(value, 10);
    return endsWith(value, '%') && $_8kaujsm2jm0og085.name(cell) !== 'table' ? convert(cell, number, getter, setter) : number;
  };
  var getTotalHeight = function (cell) {
    var value = getHeightValue(cell);
    if (!value)
      return $_6t966tn8jm0og0hl.get(cell);
    return normalizePixelSize(value, cell, $_6t966tn8jm0og0hl.get, setHeight);
  };
  var get$5 = function (cell, type, f) {
    var v = f(cell);
    var span = getSpan(cell, type);
    return v / span;
  };
  var getSpan = function (cell, type) {
    return $_6aylb4m1jm0og07w.has(cell, type) ? parseInt($_6aylb4m1jm0og07w.get(cell, type), 10) : 1;
  };
  var getRawWidth = function (element) {
    var cssWidth = $_ekl9pwmajm0og09e.getRaw(element, 'width');
    return cssWidth.fold(function () {
      return Option.from($_6aylb4m1jm0og07w.get(element, 'width'));
    }, function (width) {
      return Option.some(width);
    });
  };
  var normalizePercentageWidth = function (cellWidth, tableSize) {
    return cellWidth / tableSize.pixelWidth() * 100;
  };
  var choosePercentageSize = function (element, width, tableSize) {
    if (percentageBasedSizeRegex.test(width)) {
      var percentMatch = percentageBasedSizeRegex.exec(width);
      return parseFloat(percentMatch[1]);
    } else {
      var intWidth = $_1qjqlnajm0og0ht.get(element);
      return normalizePercentageWidth(intWidth, tableSize);
    }
  };
  var getPercentageWidth = function (cell, tableSize) {
    var width = getRawWidth(cell);
    return width.fold(function () {
      var intWidth = $_1qjqlnajm0og0ht.get(cell);
      return normalizePercentageWidth(intWidth, tableSize);
    }, function (width) {
      return choosePercentageSize(cell, width, tableSize);
    });
  };
  var normalizePixelWidth = function (cellWidth, tableSize) {
    return cellWidth / 100 * tableSize.pixelWidth();
  };
  var choosePixelSize = function (element, width, tableSize) {
    if (pixelBasedSizeRegex.test(width)) {
      var pixelMatch = pixelBasedSizeRegex.exec(width);
      return parseInt(pixelMatch[1], 10);
    } else if (percentageBasedSizeRegex.test(width)) {
      var percentMatch = percentageBasedSizeRegex.exec(width);
      var floatWidth = parseFloat(percentMatch[1]);
      return normalizePixelWidth(floatWidth, tableSize);
    } else {
      return $_1qjqlnajm0og0ht.get(element);
    }
  };
  var getPixelWidth = function (cell, tableSize) {
    var width = getRawWidth(cell);
    return width.fold(function () {
      return $_1qjqlnajm0og0ht.get(cell);
    }, function (width) {
      return choosePixelSize(cell, width, tableSize);
    });
  };
  var getHeight$1 = function (cell) {
    return get$5(cell, 'rowspan', getTotalHeight);
  };
  var getGenericWidth = function (cell) {
    var width = getRawWidth(cell);
    return width.bind(function (width) {
      if (genericSizeRegex.test(width)) {
        var match = genericSizeRegex.exec(width);
        return Option.some({
          width: constant(match[1]),
          unit: constant(match[3])
        });
      } else {
        return Option.none();
      }
    });
  };
  var setGenericWidth = function (cell, amount, unit) {
    $_ekl9pwmajm0og09e.set(cell, 'width', amount + unit);
  };
  var $_fd3c0xn6jm0og0gr = {
    percentageBasedSizeRegex: constant(percentageBasedSizeRegex),
    pixelBasedSizeRegex: constant(pixelBasedSizeRegex),
    setPixelWidth: setPixelWidth,
    setPercentageWidth: setPercentageWidth,
    setHeight: setHeight,
    getPixelWidth: getPixelWidth,
    getPercentageWidth: getPercentageWidth,
    getGenericWidth: getGenericWidth,
    setGenericWidth: setGenericWidth,
    getHeight: getHeight$1,
    getRawWidth: getRawWidth
  };

  var halve = function (main, other) {
    var width = $_fd3c0xn6jm0og0gr.getGenericWidth(main);
    width.each(function (width) {
      var newWidth = width.width() / 2;
      $_fd3c0xn6jm0og0gr.setGenericWidth(main, newWidth, width.unit());
      $_fd3c0xn6jm0og0gr.setGenericWidth(other, newWidth, width.unit());
    });
  };
  var $_dz07myn5jm0og0go = { halve: halve };

  var attached = function (element, scope) {
    var doc = scope || Element$$1.fromDom(document.documentElement);
    return $_ng4nfm7jm0og08i.ancestor(element, curry($_dql4e0lkjm0og06c.eq, doc)).isSome();
  };
  var windowOf = function (element) {
    var dom = element.dom();
    if (dom === dom.window && element instanceof Window)
      return element;
    return $_8kaujsm2jm0og085.isDocument(element) ? dom.defaultView || dom.parentWindow : null;
  };
  var $_e9xwzenfjm0og0ih = {
    attached: attached,
    windowOf: windowOf
  };

  var r = function (left, top) {
    var translate = function (x, y) {
      return r(left + x, top + y);
    };
    return {
      left: constant(left),
      top: constant(top),
      translate: translate
    };
  };
  var Position = r;

  var boxPosition = function (dom) {
    var box = dom.getBoundingClientRect();
    return Position(box.left, box.top);
  };
  var firstDefinedOrZero = function (a, b) {
    return a !== undefined ? a : b !== undefined ? b : 0;
  };
  var absolute = function (element) {
    var doc = element.dom().ownerDocument;
    var body = doc.body;
    var win = $_e9xwzenfjm0og0ih.windowOf(Element$$1.fromDom(doc));
    var html = doc.documentElement;
    var scrollTop = firstDefinedOrZero(win.pageYOffset, html.scrollTop);
    var scrollLeft = firstDefinedOrZero(win.pageXOffset, html.scrollLeft);
    var clientTop = firstDefinedOrZero(html.clientTop, body.clientTop);
    var clientLeft = firstDefinedOrZero(html.clientLeft, body.clientLeft);
    return viewport(element).translate(scrollLeft - clientLeft, scrollTop - clientTop);
  };
  var relative = function (element) {
    var dom = element.dom();
    return Position(dom.offsetLeft, dom.offsetTop);
  };
  var viewport = function (element) {
    var dom = element.dom();
    var doc = dom.ownerDocument;
    var body = doc.body;
    var html = Element$$1.fromDom(doc.documentElement);
    if (body === dom)
      return Position(body.offsetLeft, body.offsetTop);
    if (!$_e9xwzenfjm0og0ih.attached(element, html))
      return Position(0, 0);
    return boxPosition(dom);
  };
  var $_3jf8s8nejm0og0ib = {
    absolute: absolute,
    relative: relative,
    viewport: viewport
  };

  var rowInfo = Immutable('row', 'y');
  var colInfo = Immutable('col', 'x');
  var rtlEdge = function (cell) {
    var pos = $_3jf8s8nejm0og0ib.absolute(cell);
    return pos.left() + $_1qjqlnajm0og0ht.getOuter(cell);
  };
  var ltrEdge = function (cell) {
    return $_3jf8s8nejm0og0ib.absolute(cell).left();
  };
  var getLeftEdge = function (index, cell) {
    return colInfo(index, ltrEdge(cell));
  };
  var getRightEdge = function (index, cell) {
    return colInfo(index, rtlEdge(cell));
  };
  var getTop = function (cell) {
    return $_3jf8s8nejm0og0ib.absolute(cell).top();
  };
  var getTopEdge = function (index, cell) {
    return rowInfo(index, getTop(cell));
  };
  var getBottomEdge = function (index, cell) {
    return rowInfo(index, getTop(cell) + $_6t966tn8jm0og0hl.getOuter(cell));
  };
  var findPositions = function (getInnerEdge, getOuterEdge, array) {
    if (array.length === 0)
      return [];
    var lines = map(array.slice(1), function (cellOption, index) {
      return cellOption.map(function (cell) {
        return getInnerEdge(index, cell);
      });
    });
    var lastLine = array[array.length - 1].map(function (cell) {
      return getOuterEdge(array.length - 1, cell);
    });
    return lines.concat([lastLine]);
  };
  var negate = function (step, _table) {
    return -step;
  };
  var height = {
    delta: identity,
    positions: curry(findPositions, getTopEdge, getBottomEdge),
    edge: getTop
  };
  var ltr = {
    delta: identity,
    edge: ltrEdge,
    positions: curry(findPositions, getLeftEdge, getRightEdge)
  };
  var rtl = {
    delta: negate,
    edge: rtlEdge,
    positions: curry(findPositions, getRightEdge, getLeftEdge)
  };
  var $_5xlpjvndjm0og0hx = {
    height: height,
    rtl: rtl,
    ltr: ltr
  };

  var $_bnkia1ncjm0og0hw = {
    ltr: $_5xlpjvndjm0og0hx.ltr,
    rtl: $_5xlpjvndjm0og0hx.rtl
  };

  function TableDirection (directionAt) {
    var auto = function (table) {
      return directionAt(table).isRtl() ? $_bnkia1ncjm0og0hw.rtl : $_bnkia1ncjm0og0hw.ltr;
    };
    var delta = function (amount, table) {
      return auto(table).delta(amount, table);
    };
    var positions = function (cols, table) {
      return auto(table).positions(cols, table);
    };
    var edge = function (cell) {
      return auto(cell).edge(cell);
    };
    return {
      delta: delta,
      edge: edge,
      positions: positions
    };
  }

  var getGridSize = function (table) {
    var input = $_eocn1clajm0og03n.fromTable(table);
    var warehouse = $_dhbleam9jm0og094.generate(input);
    return warehouse.grid();
  };
  var $_gcbkkqnhjm0og0ip = { getGridSize: getGridSize };

  var Cell = function (initial) {
    var value = initial;
    var get = function () {
      return value;
    };
    var set = function (v) {
      value = v;
    };
    var clone = function () {
      return Cell(get());
    };
    return {
      get: get,
      set: set,
      clone: clone
    };
  };

  var base = function (handleUnsupported, required) {
    return baseWith(handleUnsupported, required, {
      validate: isFunction,
      label: 'function'
    });
  };
  var baseWith = function (handleUnsupported, required, pred) {
    if (required.length === 0)
      throw new Error('You must specify at least one required field.');
    validateStrArr('required', required);
    checkDupes(required);
    return function (obj) {
      var keys$$1 = keys(obj);
      var allReqd = forall(required, function (req) {
        return contains(keys$$1, req);
      });
      if (!allReqd)
        reqMessage(required, keys$$1);
      handleUnsupported(required, keys$$1);
      var invalidKeys = filter(required, function (key) {
        return !pred.validate(obj[key], key);
      });
      if (invalidKeys.length > 0)
        invalidTypeMessage(invalidKeys, pred.label);
      return obj;
    };
  };
  var handleExact = function (required, keys$$1) {
    var unsupported = filter(keys$$1, function (key) {
      return !contains(required, key);
    });
    if (unsupported.length > 0)
      unsuppMessage(unsupported);
  };
  var exactly = function (required) {
    return base(handleExact, required);
  };

  var elementToData = function (element) {
    var colspan = $_6aylb4m1jm0og07w.has(element, 'colspan') ? parseInt($_6aylb4m1jm0og07w.get(element, 'colspan'), 10) : 1;
    var rowspan = $_6aylb4m1jm0og07w.has(element, 'rowspan') ? parseInt($_6aylb4m1jm0og07w.get(element, 'rowspan'), 10) : 1;
    return {
      element: constant(element),
      colspan: constant(colspan),
      rowspan: constant(rowspan)
    };
  };
  var modification = function (generators, _toData) {
    contract(generators);
    var position = Cell(Option.none());
    var toData = _toData !== undefined ? _toData : elementToData;
    var nu = function (data) {
      return generators.cell(data);
    };
    var nuFrom = function (element) {
      var data = toData(element);
      return nu(data);
    };
    var add = function (element) {
      var replacement = nuFrom(element);
      if (position.get().isNone())
        position.set(Option.some(replacement));
      recent = Option.some({
        item: element,
        replacement: replacement
      });
      return replacement;
    };
    var recent = Option.none();
    var getOrInit = function (element, comparator) {
      return recent.fold(function () {
        return add(element);
      }, function (p) {
        return comparator(element, p.item) ? p.replacement : add(element);
      });
    };
    return {
      getOrInit: getOrInit,
      cursor: position.get
    };
  };
  var transform = function (scope, tag) {
    return function (generators) {
      var position = Cell(Option.none());
      contract(generators);
      var list = [];
      var find$$1 = function (element, comparator) {
        return find(list, function (x) {
          return comparator(x.item, element);
        });
      };
      var makeNew = function (element) {
        var cell = generators.replace(element, tag, { scope: scope });
        list.push({
          item: element,
          sub: cell
        });
        if (position.get().isNone())
          position.set(Option.some(cell));
        return cell;
      };
      var replaceOrInit = function (element, comparator) {
        return find$$1(element, comparator).fold(function () {
          return makeNew(element);
        }, function (p) {
          return comparator(element, p.item) ? p.sub : makeNew(element);
        });
      };
      return {
        replaceOrInit: replaceOrInit,
        cursor: position.get
      };
    };
  };
  var merging = function (generators) {
    contract(generators);
    var position = Cell(Option.none());
    var combine = function (cell) {
      if (position.get().isNone())
        position.set(Option.some(cell));
      return function () {
        var raw = generators.cell({
          element: constant(cell),
          colspan: constant(1),
          rowspan: constant(1)
        });
        $_ekl9pwmajm0og09e.remove(raw, 'width');
        $_ekl9pwmajm0og09e.remove(cell, 'width');
        return raw;
      };
    };
    return {
      combine: combine,
      cursor: position.get
    };
  };
  var contract = exactly([
    'cell',
    'row',
    'replace',
    'gap'
  ]);
  var $_4mup2lnjjm0og0j9 = {
    modification: modification,
    transform: transform,
    merging: merging
  };

  var blockList = [
    'body',
    'p',
    'div',
    'article',
    'aside',
    'figcaption',
    'figure',
    'footer',
    'header',
    'nav',
    'section',
    'ol',
    'ul',
    'table',
    'thead',
    'tfoot',
    'tbody',
    'caption',
    'tr',
    'td',
    'th',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'blockquote',
    'pre',
    'address'
  ];
  var isList = function (universe, item) {
    var tagName = universe.property().name(item);
    return contains([
      'ol',
      'ul'
    ], tagName);
  };
  var isBlock = function (universe, item) {
    var tagName = universe.property().name(item);
    return contains(blockList, tagName);
  };
  var isFormatting = function (universe, item) {
    var tagName = universe.property().name(item);
    return contains([
      'address',
      'pre',
      'p',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6'
    ], tagName);
  };
  var isHeading = function (universe, item) {
    var tagName = universe.property().name(item);
    return contains([
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6'
    ], tagName);
  };
  var isContainer = function (universe, item) {
    return contains([
      'div',
      'li',
      'td',
      'th',
      'blockquote',
      'body',
      'caption'
    ], universe.property().name(item));
  };
  var isEmptyTag = function (universe, item) {
    return contains([
      'br',
      'img',
      'hr',
      'input'
    ], universe.property().name(item));
  };
  var isFrame = function (universe, item) {
    return universe.property().name(item) === 'iframe';
  };
  var isInline = function (universe, item) {
    return !(isBlock(universe, item) || isEmptyTag(universe, item)) && universe.property().name(item) !== 'li';
  };
  var $_3ch8zqnojm0og0ks = {
    isBlock: isBlock,
    isList: isList,
    isFormatting: isFormatting,
    isHeading: isHeading,
    isContainer: isContainer,
    isEmptyTag: isEmptyTag,
    isFrame: isFrame,
    isInline: isInline
  };

  var universe$1 = DomUniverse();
  var isBlock$1 = function (element) {
    return $_3ch8zqnojm0og0ks.isBlock(universe$1, element);
  };
  var isList$1 = function (element) {
    return $_3ch8zqnojm0og0ks.isList(universe$1, element);
  };
  var isFormatting$1 = function (element) {
    return $_3ch8zqnojm0og0ks.isFormatting(universe$1, element);
  };
  var isHeading$1 = function (element) {
    return $_3ch8zqnojm0og0ks.isHeading(universe$1, element);
  };
  var isContainer$1 = function (element) {
    return $_3ch8zqnojm0og0ks.isContainer(universe$1, element);
  };
  var isEmptyTag$1 = function (element) {
    return $_3ch8zqnojm0og0ks.isEmptyTag(universe$1, element);
  };
  var isFrame$1 = function (element) {
    return $_3ch8zqnojm0og0ks.isFrame(universe$1, element);
  };
  var isInline$1 = function (element) {
    return $_3ch8zqnojm0og0ks.isInline(universe$1, element);
  };
  var $_4r81u4nnjm0og0kn = {
    isBlock: isBlock$1,
    isList: isList$1,
    isFormatting: isFormatting$1,
    isHeading: isHeading$1,
    isContainer: isContainer$1,
    isEmptyTag: isEmptyTag$1,
    isFrame: isFrame$1,
    isInline: isInline$1
  };

  var merge = function (cells) {
    var isBr = function (el) {
      return $_8kaujsm2jm0og085.name(el) === 'br';
    };
    var advancedBr = function (children) {
      return forall(children, function (c) {
        return isBr(c) || $_8kaujsm2jm0og085.isText(c) && $_al1a6umjjm0og0b8.get(c).trim().length === 0;
      });
    };
    var isListItem = function (el) {
      return $_8kaujsm2jm0og085.name(el) === 'li' || $_ng4nfm7jm0og08i.ancestor(el, $_4r81u4nnjm0og0kn.isList).isSome();
    };
    var siblingIsBlock = function (el) {
      return $_d421p9lijm0og05w.nextSibling(el).map(function (rightSibling) {
        if ($_4r81u4nnjm0og0kn.isBlock(rightSibling))
          return true;
        if ($_4r81u4nnjm0og0kn.isEmptyTag(rightSibling)) {
          return $_8kaujsm2jm0og085.name(rightSibling) === 'img' ? false : true;
        }
      }).getOr(false);
    };
    var markCell = function (cell) {
      return $_e2itwymhjm0og0b1.last(cell).bind(function (rightEdge) {
        var rightSiblingIsBlock = siblingIsBlock(rightEdge);
        return $_d421p9lijm0og05w.parent(rightEdge).map(function (parent) {
          return rightSiblingIsBlock === true || isListItem(parent) || isBr(rightEdge) || $_4r81u4nnjm0og0kn.isBlock(parent) && !$_dql4e0lkjm0og06c.eq(cell, parent) ? [] : [Element$$1.fromTag('br')];
        });
      }).getOr([]);
    };
    var markContent = function () {
      var content = bind(cells, function (cell) {
        var children = $_d421p9lijm0og05w.children(cell);
        return advancedBr(children) ? [] : children.concat(markCell(cell));
      });
      return content.length === 0 ? [Element$$1.fromTag('br')] : content;
    };
    var contents = markContent();
    $_7uuw85mdjm0og09v.empty(cells[0]);
    $_e8rgatmejm0og09y.append(cells[0], contents);
  };
  var $_5xro1snmjm0og0ju = { merge: merge };

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var shallow$1 = function (old, nu) {
    return nu;
  };
  var baseMerge = function (merger) {
    return function () {
      var objects = new Array(arguments.length);
      for (var i = 0; i < objects.length; i++)
        objects[i] = arguments[i];
      if (objects.length === 0)
        throw new Error('Can\'t merge zero objects');
      var ret = {};
      for (var j = 0; j < objects.length; j++) {
        var curObject = objects[j];
        for (var key in curObject)
          if (hasOwnProperty.call(curObject, key)) {
            ret[key] = merger(ret[key], curObject[key]);
          }
      }
      return ret;
    };
  };

  var merge$1 = baseMerge(shallow$1);

  var cat = function (arr) {
    var r = [];
    var push = function (x) {
      r.push(x);
    };
    for (var i = 0; i < arr.length; i++) {
      arr[i].each(push);
    }
    return r;
  };
  var findMap = function (arr, f) {
    for (var i = 0; i < arr.length; i++) {
      var r = f(arr[i], i);
      if (r.isSome()) {
        return r;
      }
    }
    return Option.none();
  };

  var addCell = function (gridRow, index, cell) {
    var cells = gridRow.cells();
    var before = cells.slice(0, index);
    var after = cells.slice(index);
    var newCells = before.concat([cell]).concat(after);
    return setCells(gridRow, newCells);
  };
  var mutateCell = function (gridRow, index, cell) {
    var cells = gridRow.cells();
    cells[index] = cell;
  };
  var setCells = function (gridRow, cells) {
    return $_7gs7v1lbjm0og03x.rowcells(cells, gridRow.section());
  };
  var mapCells = function (gridRow, f) {
    var cells = gridRow.cells();
    var r = map(cells, f);
    return $_7gs7v1lbjm0og03x.rowcells(r, gridRow.section());
  };
  var getCell = function (gridRow, index) {
    return gridRow.cells()[index];
  };
  var getCellElement = function (gridRow, index) {
    return getCell(gridRow, index).element();
  };
  var cellLength = function (gridRow) {
    return gridRow.cells().length;
  };
  var $_b6dmienujm0og0lu = {
    addCell: addCell,
    setCells: setCells,
    mutateCell: mutateCell,
    getCell: getCell,
    getCellElement: getCellElement,
    mapCells: mapCells,
    cellLength: cellLength
  };

  var getColumn = function (grid, index) {
    return map(grid, function (row) {
      return $_b6dmienujm0og0lu.getCell(row, index);
    });
  };
  var getRow = function (grid, index) {
    return grid[index];
  };
  var findDiff = function (xs, comp) {
    if (xs.length === 0)
      return 0;
    var first = xs[0];
    var index = findIndex(xs, function (x) {
      return !comp(first.element(), x.element());
    });
    return index.fold(function () {
      return xs.length;
    }, function (ind) {
      return ind;
    });
  };
  var subgrid = function (grid, row, column, comparator) {
    var restOfRow = getRow(grid, row).cells().slice(column);
    var endColIndex = findDiff(restOfRow, comparator);
    var restOfColumn = getColumn(grid, column).slice(row);
    var endRowIndex = findDiff(restOfColumn, comparator);
    return {
      colspan: constant(endColIndex),
      rowspan: constant(endRowIndex)
    };
  };
  var $_a4i5rintjm0og0lo = { subgrid: subgrid };

  var toDetails = function (grid, comparator) {
    var seen = map(grid, function (row, ri) {
      return map(row.cells(), function (col, ci) {
        return false;
      });
    });
    var updateSeen = function (ri, ci, rowspan, colspan) {
      for (var r = ri; r < ri + rowspan; r++) {
        for (var c = ci; c < ci + colspan; c++) {
          seen[r][c] = true;
        }
      }
    };
    return map(grid, function (row, ri) {
      var details = bind(row.cells(), function (cell, ci) {
        if (seen[ri][ci] === false) {
          var result = $_a4i5rintjm0og0lo.subgrid(grid, ri, ci, comparator);
          updateSeen(ri, ci, result.rowspan(), result.colspan());
          return [$_7gs7v1lbjm0og03x.detailnew(cell.element(), result.rowspan(), result.colspan(), cell.isNew())];
        } else {
          return [];
        }
      });
      return $_7gs7v1lbjm0og03x.rowdetails(details, row.section());
    });
  };
  var toGrid = function (warehouse, generators, isNew) {
    var grid = [];
    for (var i = 0; i < warehouse.grid().rows(); i++) {
      var rowCells = [];
      for (var j = 0; j < warehouse.grid().columns(); j++) {
        var element = $_dhbleam9jm0og094.getAt(warehouse, i, j).map(function (item) {
          return $_7gs7v1lbjm0og03x.elementnew(item.element(), isNew);
        }).getOrThunk(function () {
          return $_7gs7v1lbjm0og03x.elementnew(generators.gap(), true);
        });
        rowCells.push(element);
      }
      var row = $_7gs7v1lbjm0og03x.rowcells(rowCells, warehouse.all()[i].section());
      grid.push(row);
    }
    return grid;
  };
  var $_d60w9mnsjm0og0lk = {
    toDetails: toDetails,
    toGrid: toGrid
  };

  var setIfNot = function (element, property, value, ignore) {
    if (value === ignore)
      $_6aylb4m1jm0og07w.remove(element, property);
    else
      $_6aylb4m1jm0og07w.set(element, property, value);
  };
  var render = function (table, grid) {
    var newRows = [];
    var newCells = [];
    var renderSection = function (gridSection, sectionName) {
      var section = $_nsz8xm6jm0og08h.child(table, sectionName).getOrThunk(function () {
        var tb = Element$$1.fromTag(sectionName, $_d421p9lijm0og05w.owner(table).dom());
        $_5w7xramcjm0og09t.append(table, tb);
        return tb;
      });
      $_7uuw85mdjm0og09v.empty(section);
      var rows = map(gridSection, function (row) {
        if (row.isNew()) {
          newRows.push(row.element());
        }
        var tr = row.element();
        $_7uuw85mdjm0og09v.empty(tr);
        each(row.cells(), function (cell) {
          if (cell.isNew()) {
            newCells.push(cell.element());
          }
          setIfNot(cell.element(), 'colspan', cell.colspan(), 1);
          setIfNot(cell.element(), 'rowspan', cell.rowspan(), 1);
          $_5w7xramcjm0og09t.append(tr, cell.element());
        });
        return tr;
      });
      $_e8rgatmejm0og09y.append(section, rows);
    };
    var removeSection = function (sectionName) {
      $_nsz8xm6jm0og08h.child(table, sectionName).each($_7uuw85mdjm0og09v.remove);
    };
    var renderOrRemoveSection = function (gridSection, sectionName) {
      if (gridSection.length > 0) {
        renderSection(gridSection, sectionName);
      } else {
        removeSection(sectionName);
      }
    };
    var headSection = [];
    var bodySection = [];
    var footSection = [];
    each(grid, function (row) {
      switch (row.section()) {
      case 'thead':
        headSection.push(row);
        break;
      case 'tbody':
        bodySection.push(row);
        break;
      case 'tfoot':
        footSection.push(row);
        break;
      }
    });
    renderOrRemoveSection(headSection, 'thead');
    renderOrRemoveSection(bodySection, 'tbody');
    renderOrRemoveSection(footSection, 'tfoot');
    return {
      newRows: constant(newRows),
      newCells: constant(newCells)
    };
  };
  var copy$2 = function (grid) {
    var rows = map(grid, function (row) {
      var tr = $_cbo10gmgjm0og0ay.shallow(row.element());
      each(row.cells(), function (cell) {
        var clonedCell = $_cbo10gmgjm0og0ay.deep(cell.element());
        setIfNot(clonedCell, 'colspan', cell.colspan(), 1);
        setIfNot(clonedCell, 'rowspan', cell.rowspan(), 1);
        $_5w7xramcjm0og09t.append(tr, clonedCell);
      });
      return tr;
    });
    return rows;
  };
  var $_6zct8gnvjm0og0ly = {
    render: render,
    copy: copy$2
  };

  var repeat = function (repititions, f) {
    var r = [];
    for (var i = 0; i < repititions; i++) {
      r.push(f(i));
    }
    return r;
  };
  var range$1 = function (start, end) {
    var r = [];
    for (var i = start; i < end; i++) {
      r.push(i);
    }
    return r;
  };
  var unique = function (xs, comparator) {
    var result = [];
    each(xs, function (x, i) {
      if (i < xs.length - 1 && !comparator(x, xs[i + 1])) {
        result.push(x);
      } else if (i === xs.length - 1) {
        result.push(x);
      }
    });
    return result;
  };
  var deduce = function (xs, index) {
    if (index < 0 || index >= xs.length - 1)
      return Option.none();
    var current = xs[index].fold(function () {
      var rest = reverse(xs.slice(0, index));
      return findMap(rest, function (a, i) {
        return a.map(function (aa) {
          return {
            value: aa,
            delta: i + 1
          };
        });
      });
    }, function (c) {
      return Option.some({
        value: c,
        delta: 0
      });
    });
    var next = xs[index + 1].fold(function () {
      var rest = xs.slice(index + 1);
      return findMap(rest, function (a, i) {
        return a.map(function (aa) {
          return {
            value: aa,
            delta: i + 1
          };
        });
      });
    }, function (n) {
      return Option.some({
        value: n,
        delta: 1
      });
    });
    return current.bind(function (c) {
      return next.map(function (n) {
        var extras = n.delta + c.delta;
        return Math.abs(n.value - c.value) / extras;
      });
    });
  };
  var $_b4vlzenyjm0og0nl = {
    repeat: repeat,
    range: range$1,
    unique: unique,
    deduce: deduce
  };

  var columns = function (warehouse) {
    var grid = warehouse.grid();
    var cols = $_b4vlzenyjm0og0nl.range(0, grid.columns());
    var rows = $_b4vlzenyjm0og0nl.range(0, grid.rows());
    return map(cols, function (col) {
      var getBlock = function () {
        return bind(rows, function (r) {
          return $_dhbleam9jm0og094.getAt(warehouse, r, col).filter(function (detail) {
            return detail.column() === col;
          }).fold(constant([]), function (detail) {
            return [detail];
          });
        });
      };
      var isSingle = function (detail) {
        return detail.colspan() === 1;
      };
      var getFallback = function () {
        return $_dhbleam9jm0og094.getAt(warehouse, 0, col);
      };
      return decide(getBlock, isSingle, getFallback);
    });
  };
  var decide = function (getBlock, isSingle, getFallback) {
    var inBlock = getBlock();
    var singleInBlock = find(inBlock, isSingle);
    var detailOption = singleInBlock.orThunk(function () {
      return Option.from(inBlock[0]).orThunk(getFallback);
    });
    return detailOption.map(function (detail) {
      return detail.element();
    });
  };
  var rows$1 = function (warehouse) {
    var grid = warehouse.grid();
    var rows = $_b4vlzenyjm0og0nl.range(0, grid.rows());
    var cols = $_b4vlzenyjm0og0nl.range(0, grid.columns());
    return map(rows, function (row) {
      var getBlock = function () {
        return bind(cols, function (c) {
          return $_dhbleam9jm0og094.getAt(warehouse, row, c).filter(function (detail) {
            return detail.row() === row;
          }).fold(constant([]), function (detail) {
            return [detail];
          });
        });
      };
      var isSingle = function (detail) {
        return detail.rowspan() === 1;
      };
      var getFallback = function () {
        return $_dhbleam9jm0og094.getAt(warehouse, row, 0);
      };
      return decide(getBlock, isSingle, getFallback);
    });
  };
  var $_d8z45hnxjm0og0nc = {
    columns: columns,
    rows: rows$1
  };

  var col = function (column, x, y, w, h) {
    var blocker = Element$$1.fromTag('div');
    $_ekl9pwmajm0og09e.setAll(blocker, {
      position: 'absolute',
      left: x - w / 2 + 'px',
      top: y + 'px',
      height: h + 'px',
      width: w + 'px'
    });
    $_6aylb4m1jm0og07w.setAll(blocker, {
      'data-column': column,
      'role': 'presentation'
    });
    return blocker;
  };
  var row$1 = function (row, x, y, w, h) {
    var blocker = Element$$1.fromTag('div');
    $_ekl9pwmajm0og09e.setAll(blocker, {
      position: 'absolute',
      left: x + 'px',
      top: y - h / 2 + 'px',
      height: h + 'px',
      width: w + 'px'
    });
    $_6aylb4m1jm0og07w.setAll(blocker, {
      'data-row': row,
      'role': 'presentation'
    });
    return blocker;
  };
  var $_9za5cenzjm0og0nu = {
    col: col,
    row: row$1
  };

  var css = function (namespace) {
    var dashNamespace = namespace.replace(/\./g, '-');
    var resolve = function (str) {
      return dashNamespace + '-' + str;
    };
    return { resolve: resolve };
  };

  var styles = css('ephox-snooker');
  var $_4ae5x3o0jm0og0o7 = { resolve: styles.resolve };

  function Toggler (turnOff, turnOn, initial) {
    var active = initial || false;
    var on = function () {
      turnOn();
      active = true;
    };
    var off = function () {
      turnOff();
      active = false;
    };
    var toggle = function () {
      var f = active ? off : on;
      f();
    };
    var isOn = function () {
      return active;
    };
    return {
      on: on,
      off: off,
      toggle: toggle,
      isOn: isOn
    };
  }

  var read = function (element, attr) {
    var value = $_6aylb4m1jm0og07w.get(element, attr);
    return value === undefined || value === '' ? [] : value.split(' ');
  };
  var add = function (element, attr, id) {
    var old = read(element, attr);
    var nu = old.concat([id]);
    $_6aylb4m1jm0og07w.set(element, attr, nu.join(' '));
    return true;
  };
  var remove$3 = function (element, attr, id) {
    var nu = filter(read(element, attr), function (v) {
      return v !== id;
    });
    if (nu.length > 0)
      $_6aylb4m1jm0og07w.set(element, attr, nu.join(' '));
    else
      $_6aylb4m1jm0og07w.remove(element, attr);
    return false;
  };
  var $_b1bo4oo5jm0og0oj = {
    read: read,
    add: add,
    remove: remove$3
  };

  var supports = function (element) {
    return element.dom().classList !== undefined;
  };
  var get$6 = function (element) {
    return $_b1bo4oo5jm0og0oj.read(element, 'class');
  };
  var add$1 = function (element, clazz) {
    return $_b1bo4oo5jm0og0oj.add(element, 'class', clazz);
  };
  var remove$4 = function (element, clazz) {
    return $_b1bo4oo5jm0og0oj.remove(element, 'class', clazz);
  };
  var toggle = function (element, clazz) {
    if (contains(get$6(element), clazz)) {
      return remove$4(element, clazz);
    } else {
      return add$1(element, clazz);
    }
  };
  var $_geduh5o4jm0og0og = {
    get: get$6,
    add: add$1,
    remove: remove$4,
    toggle: toggle,
    supports: supports
  };

  var add$2 = function (element, clazz) {
    if ($_geduh5o4jm0og0og.supports(element))
      element.dom().classList.add(clazz);
    else
      $_geduh5o4jm0og0og.add(element, clazz);
  };
  var cleanClass = function (element) {
    var classList = $_geduh5o4jm0og0og.supports(element) ? element.dom().classList : $_geduh5o4jm0og0og.get(element);
    if (classList.length === 0) {
      $_6aylb4m1jm0og07w.remove(element, 'class');
    }
  };
  var remove$5 = function (element, clazz) {
    if ($_geduh5o4jm0og0og.supports(element)) {
      var classList = element.dom().classList;
      classList.remove(clazz);
    } else
      $_geduh5o4jm0og0og.remove(element, clazz);
    cleanClass(element);
  };
  var toggle$1 = function (element, clazz) {
    return $_geduh5o4jm0og0og.supports(element) ? element.dom().classList.toggle(clazz) : $_geduh5o4jm0og0og.toggle(element, clazz);
  };
  var toggler = function (element, clazz) {
    var hasClasslist = $_geduh5o4jm0og0og.supports(element);
    var classList = element.dom().classList;
    var off = function () {
      if (hasClasslist)
        classList.remove(clazz);
      else
        $_geduh5o4jm0og0og.remove(element, clazz);
    };
    var on = function () {
      if (hasClasslist)
        classList.add(clazz);
      else
        $_geduh5o4jm0og0og.add(element, clazz);
    };
    return Toggler(off, on, has$1(element, clazz));
  };
  var has$1 = function (element, clazz) {
    return $_geduh5o4jm0og0og.supports(element) && element.dom().classList.contains(clazz);
  };
  var $_dypcv1o2jm0og0od = {
    add: add$2,
    remove: remove$5,
    toggle: toggle$1,
    toggler: toggler,
    has: has$1
  };

  var resizeBar = $_4ae5x3o0jm0og0o7.resolve('resizer-bar');
  var resizeRowBar = $_4ae5x3o0jm0og0o7.resolve('resizer-rows');
  var resizeColBar = $_4ae5x3o0jm0og0o7.resolve('resizer-cols');
  var BAR_THICKNESS = 7;
  var clear = function (wire) {
    var previous = $_1wzcn0m3jm0og087.descendants(wire.parent(), '.' + resizeBar);
    each(previous, $_7uuw85mdjm0og09v.remove);
  };
  var drawBar = function (wire, positions, create) {
    var origin = wire.origin();
    each(positions, function (cpOption, i) {
      cpOption.each(function (cp) {
        var bar = create(origin, cp);
        $_dypcv1o2jm0og0od.add(bar, resizeBar);
        $_5w7xramcjm0og09t.append(wire.parent(), bar);
      });
    });
  };
  var refreshCol = function (wire, colPositions, position, tableHeight) {
    drawBar(wire, colPositions, function (origin, cp) {
      var colBar = $_9za5cenzjm0og0nu.col(cp.col(), cp.x() - origin.left(), position.top() - origin.top(), BAR_THICKNESS, tableHeight);
      $_dypcv1o2jm0og0od.add(colBar, resizeColBar);
      return colBar;
    });
  };
  var refreshRow = function (wire, rowPositions, position, tableWidth) {
    drawBar(wire, rowPositions, function (origin, cp) {
      var rowBar = $_9za5cenzjm0og0nu.row(cp.row(), position.left() - origin.left(), cp.y() - origin.top(), tableWidth, BAR_THICKNESS);
      $_dypcv1o2jm0og0od.add(rowBar, resizeRowBar);
      return rowBar;
    });
  };
  var refreshGrid = function (wire, table, rows, cols, hdirection, vdirection) {
    var position = $_3jf8s8nejm0og0ib.absolute(table);
    var rowPositions = rows.length > 0 ? hdirection.positions(rows, table) : [];
    refreshRow(wire, rowPositions, position, $_1qjqlnajm0og0ht.getOuter(table));
    var colPositions = cols.length > 0 ? vdirection.positions(cols, table) : [];
    refreshCol(wire, colPositions, position, $_6t966tn8jm0og0hl.getOuter(table));
  };
  var refresh = function (wire, table, hdirection, vdirection) {
    clear(wire);
    var list = $_eocn1clajm0og03n.fromTable(table);
    var warehouse = $_dhbleam9jm0og094.generate(list);
    var rows = $_d8z45hnxjm0og0nc.rows(warehouse);
    var cols = $_d8z45hnxjm0og0nc.columns(warehouse);
    refreshGrid(wire, table, rows, cols, hdirection, vdirection);
  };
  var each$2 = function (wire, f) {
    var bars = $_1wzcn0m3jm0og087.descendants(wire.parent(), '.' + resizeBar);
    each(bars, f);
  };
  var hide = function (wire) {
    each$2(wire, function (bar) {
      $_ekl9pwmajm0og09e.set(bar, 'display', 'none');
    });
  };
  var show = function (wire) {
    each$2(wire, function (bar) {
      $_ekl9pwmajm0og09e.set(bar, 'display', 'block');
    });
  };
  var isRowBar = function (element) {
    return $_dypcv1o2jm0og0od.has(element, resizeRowBar);
  };
  var isColBar = function (element) {
    return $_dypcv1o2jm0og0od.has(element, resizeColBar);
  };
  var $_5ux1manwjm0og0mr = {
    refresh: refresh,
    hide: hide,
    show: show,
    destroy: clear,
    isRowBar: isRowBar,
    isColBar: isColBar
  };

  var fromWarehouse = function (warehouse, generators) {
    return $_d60w9mnsjm0og0lk.toGrid(warehouse, generators, false);
  };
  var deriveRows = function (rendered, generators) {
    var findRow = function (details) {
      var rowOfCells = findMap(details, function (detail) {
        return $_d421p9lijm0og05w.parent(detail.element()).map(function (row) {
          var isNew = $_d421p9lijm0og05w.parent(row).isNone();
          return $_7gs7v1lbjm0og03x.elementnew(row, isNew);
        });
      });
      return rowOfCells.getOrThunk(function () {
        return $_7gs7v1lbjm0og03x.elementnew(generators.row(), true);
      });
    };
    return map(rendered, function (details) {
      var row = findRow(details.details());
      return $_7gs7v1lbjm0og03x.rowdatanew(row.element(), details.details(), details.section(), row.isNew());
    });
  };
  var toDetailList = function (grid, generators) {
    var rendered = $_d60w9mnsjm0og0lk.toDetails(grid, $_dql4e0lkjm0og06c.eq);
    return deriveRows(rendered, generators);
  };
  var findInWarehouse = function (warehouse, element) {
    var all = flatten(map(warehouse.all(), function (r) {
      return r.cells();
    }));
    return find(all, function (e) {
      return $_dql4e0lkjm0og06c.eq(element, e.element());
    });
  };
  var run = function (operation, extract, adjustment, postAction, genWrappers) {
    return function (wire, table, target, generators, direction) {
      var input = $_eocn1clajm0og03n.fromTable(table);
      var warehouse = $_dhbleam9jm0og094.generate(input);
      var output = extract(warehouse, target).map(function (info) {
        var model = fromWarehouse(warehouse, generators);
        var result = operation(model, info, $_dql4e0lkjm0og06c.eq, genWrappers(generators));
        var grid = toDetailList(result.grid(), generators);
        return {
          grid: constant(grid),
          cursor: result.cursor
        };
      });
      return output.fold(function () {
        return Option.none();
      }, function (out) {
        var newElements = $_6zct8gnvjm0og0ly.render(table, out.grid());
        adjustment(table, out.grid(), direction);
        postAction(table);
        $_5ux1manwjm0og0mr.refresh(wire, table, $_5xlpjvndjm0og0hx.height, direction);
        return Option.some({
          cursor: out.cursor,
          newRows: newElements.newRows,
          newCells: newElements.newCells
        });
      });
    };
  };
  var onCell = function (warehouse, target) {
    return $_d02uidlcjm0og041.cell(target.element()).bind(function (cell) {
      return findInWarehouse(warehouse, cell);
    });
  };
  var onPaste = function (warehouse, target) {
    return $_d02uidlcjm0og041.cell(target.element()).bind(function (cell) {
      return findInWarehouse(warehouse, cell).map(function (details) {
        return merge$1(details, {
          generators: target.generators,
          clipboard: target.clipboard
        });
      });
    });
  };
  var onPasteRows = function (warehouse, target) {
    var details = map(target.selection(), function (cell) {
      return $_d02uidlcjm0og041.cell(cell).bind(function (lc) {
        return findInWarehouse(warehouse, lc);
      });
    });
    var cells = cat(details);
    return cells.length > 0 ? Option.some(merge$1({ cells: cells }, {
      generators: target.generators,
      clipboard: target.clipboard
    })) : Option.none();
  };
  var onMergable = function (warehouse, target) {
    return target.mergable();
  };
  var onUnmergable = function (warehouse, target) {
    return target.unmergable();
  };
  var onCells = function (warehouse, target) {
    var details = map(target.selection(), function (cell) {
      return $_d02uidlcjm0og041.cell(cell).bind(function (lc) {
        return findInWarehouse(warehouse, lc);
      });
    });
    var cells = cat(details);
    return cells.length > 0 ? Option.some(cells) : Option.none();
  };
  var $_b2k0ugnpjm0og0ky = {
    run: run,
    toDetailList: toDetailList,
    onCell: onCell,
    onCells: onCells,
    onPaste: onPaste,
    onPasteRows: onPasteRows,
    onMergable: onMergable,
    onUnmergable: onUnmergable
  };

  var value$1 = function (o) {
    var is = function (v) {
      return o === v;
    };
    var or = function (opt) {
      return value$1(o);
    };
    var orThunk = function (f) {
      return value$1(o);
    };
    var map = function (f) {
      return value$1(f(o));
    };
    var each = function (f) {
      f(o);
    };
    var bind = function (f) {
      return f(o);
    };
    var fold = function (_, onValue) {
      return onValue(o);
    };
    var exists = function (f) {
      return f(o);
    };
    var forall = function (f) {
      return f(o);
    };
    var toOption = function () {
      return Option.some(o);
    };
    return {
      is: is,
      isValue: always,
      isError: never,
      getOr: constant(o),
      getOrThunk: constant(o),
      getOrDie: constant(o),
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: each,
      bind: bind,
      exists: exists,
      forall: forall,
      toOption: toOption
    };
  };
  var error = function (message) {
    var getOrThunk = function (f) {
      return f();
    };
    var getOrDie = function () {
      return die(String(message))();
    };
    var or = function (opt) {
      return opt;
    };
    var orThunk = function (f) {
      return f();
    };
    var map = function (f) {
      return error(message);
    };
    var bind = function (f) {
      return error(message);
    };
    var fold = function (onError, _) {
      return onError(message);
    };
    return {
      is: never,
      isValue: never,
      isError: always,
      getOr: identity,
      getOrThunk: getOrThunk,
      getOrDie: getOrDie,
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: noop,
      bind: bind,
      exists: never,
      forall: always,
      toOption: Option.none
    };
  };
  var Result = {
    value: value$1,
    error: error
  };

  var measure = function (startAddress, gridA, gridB) {
    if (startAddress.row() >= gridA.length || startAddress.column() > $_b6dmienujm0og0lu.cellLength(gridA[0]))
      return Result.error('invalid start address out of table bounds, row: ' + startAddress.row() + ', column: ' + startAddress.column());
    var rowRemainder = gridA.slice(startAddress.row());
    var colRemainder = rowRemainder[0].cells().slice(startAddress.column());
    var colRequired = $_b6dmienujm0og0lu.cellLength(gridB[0]);
    var rowRequired = gridB.length;
    return Result.value({
      rowDelta: constant(rowRemainder.length - rowRequired),
      colDelta: constant(colRemainder.length - colRequired)
    });
  };
  var measureWidth = function (gridA, gridB) {
    var colLengthA = $_b6dmienujm0og0lu.cellLength(gridA[0]);
    var colLengthB = $_b6dmienujm0og0lu.cellLength(gridB[0]);
    return {
      rowDelta: constant(0),
      colDelta: constant(colLengthA - colLengthB)
    };
  };
  var fill = function (cells, generator) {
    return map(cells, function () {
      return $_7gs7v1lbjm0og03x.elementnew(generator.cell(), true);
    });
  };
  var rowFill = function (grid, amount, generator) {
    return grid.concat($_b4vlzenyjm0og0nl.repeat(amount, function (_row) {
      return $_b6dmienujm0og0lu.setCells(grid[grid.length - 1], fill(grid[grid.length - 1].cells(), generator));
    }));
  };
  var colFill = function (grid, amount, generator) {
    return map(grid, function (row) {
      return $_b6dmienujm0og0lu.setCells(row, row.cells().concat(fill($_b4vlzenyjm0og0nl.range(0, amount), generator)));
    });
  };
  var tailor = function (gridA, delta, generator) {
    var fillCols = delta.colDelta() < 0 ? colFill : identity;
    var fillRows = delta.rowDelta() < 0 ? rowFill : identity;
    var modifiedCols = fillCols(gridA, Math.abs(delta.colDelta()), generator);
    var tailoredGrid = fillRows(modifiedCols, Math.abs(delta.rowDelta()), generator);
    return tailoredGrid;
  };
  var $_cqvf9zo7jm0og0ot = {
    measure: measure,
    measureWidth: measureWidth,
    tailor: tailor
  };

  var merge$2 = function (grid, bounds, comparator, substitution) {
    if (grid.length === 0)
      return grid;
    for (var i = bounds.startRow(); i <= bounds.finishRow(); i++) {
      for (var j = bounds.startCol(); j <= bounds.finishCol(); j++) {
        $_b6dmienujm0og0lu.mutateCell(grid[i], j, $_7gs7v1lbjm0og03x.elementnew(substitution(), false));
      }
    }
    return grid;
  };
  var unmerge = function (grid, target, comparator, substitution) {
    var first = true;
    for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < $_b6dmienujm0og0lu.cellLength(grid[0]); j++) {
        var current = $_b6dmienujm0og0lu.getCellElement(grid[i], j);
        var isToReplace = comparator(current, target);
        if (isToReplace === true && first === false) {
          $_b6dmienujm0og0lu.mutateCell(grid[i], j, $_7gs7v1lbjm0og03x.elementnew(substitution(), true));
        } else if (isToReplace === true) {
          first = false;
        }
      }
    }
    return grid;
  };
  var uniqueCells = function (row, comparator) {
    return foldl(row, function (rest, cell) {
      return exists(rest, function (currentCell) {
        return comparator(currentCell.element(), cell.element());
      }) ? rest : rest.concat([cell]);
    }, []);
  };
  var splitRows = function (grid, index, comparator, substitution) {
    if (index > 0 && index < grid.length) {
      var rowPrevCells = grid[index - 1].cells();
      var cells = uniqueCells(rowPrevCells, comparator);
      each(cells, function (cell) {
        var replacement = Option.none();
        for (var i = index; i < grid.length; i++) {
          for (var j = 0; j < $_b6dmienujm0og0lu.cellLength(grid[0]); j++) {
            var current = grid[i].cells()[j];
            var isToReplace = comparator(current.element(), cell.element());
            if (isToReplace) {
              if (replacement.isNone()) {
                replacement = Option.some(substitution());
              }
              replacement.each(function (sub) {
                $_b6dmienujm0og0lu.mutateCell(grid[i], j, $_7gs7v1lbjm0og03x.elementnew(sub, true));
              });
            }
          }
        }
      });
    }
    return grid;
  };
  var $_cn0y6zo9jm0og0p4 = {
    merge: merge$2,
    unmerge: unmerge,
    splitRows: splitRows
  };

  var isSpanning = function (grid, row, col, comparator) {
    var candidate = $_b6dmienujm0og0lu.getCell(grid[row], col);
    var matching = curry(comparator, candidate.element());
    var currentRow = grid[row];
    return grid.length > 1 && $_b6dmienujm0og0lu.cellLength(currentRow) > 1 && (col > 0 && matching($_b6dmienujm0og0lu.getCellElement(currentRow, col - 1)) || col < currentRow.length - 1 && matching($_b6dmienujm0og0lu.getCellElement(currentRow, col + 1)) || row > 0 && matching($_b6dmienujm0og0lu.getCellElement(grid[row - 1], col)) || row < grid.length - 1 && matching($_b6dmienujm0og0lu.getCellElement(grid[row + 1], col)));
  };
  var mergeTables = function (startAddress, gridA, gridB, generator, comparator) {
    var startRow = startAddress.row();
    var startCol = startAddress.column();
    var mergeHeight = gridB.length;
    var mergeWidth = $_b6dmienujm0og0lu.cellLength(gridB[0]);
    var endRow = startRow + mergeHeight;
    var endCol = startCol + mergeWidth;
    for (var r = startRow; r < endRow; r++) {
      for (var c = startCol; c < endCol; c++) {
        if (isSpanning(gridA, r, c, comparator)) {
          $_cn0y6zo9jm0og0p4.unmerge(gridA, $_b6dmienujm0og0lu.getCellElement(gridA[r], c), comparator, generator.cell);
        }
        var newCell = $_b6dmienujm0og0lu.getCellElement(gridB[r - startRow], c - startCol);
        var replacement = generator.replace(newCell);
        $_b6dmienujm0og0lu.mutateCell(gridA[r], c, $_7gs7v1lbjm0og03x.elementnew(replacement, true));
      }
    }
    return gridA;
  };
  var merge$3 = function (startAddress, gridA, gridB, generator, comparator) {
    var result = $_cqvf9zo7jm0og0ot.measure(startAddress, gridA, gridB);
    return result.map(function (delta) {
      var fittedGrid = $_cqvf9zo7jm0og0ot.tailor(gridA, delta, generator);
      return mergeTables(startAddress, fittedGrid, gridB, generator, comparator);
    });
  };
  var insert = function (index, gridA, gridB, generator, comparator) {
    $_cn0y6zo9jm0og0p4.splitRows(gridA, index, comparator, generator.cell);
    var delta = $_cqvf9zo7jm0og0ot.measureWidth(gridB, gridA);
    var fittedNewGrid = $_cqvf9zo7jm0og0ot.tailor(gridB, delta, generator);
    var secondDelta = $_cqvf9zo7jm0og0ot.measureWidth(gridA, fittedNewGrid);
    var fittedOldGrid = $_cqvf9zo7jm0og0ot.tailor(gridA, secondDelta, generator);
    return fittedOldGrid.slice(0, index).concat(fittedNewGrid).concat(fittedOldGrid.slice(index, fittedOldGrid.length));
  };
  var $_b6forqo6jm0og0oo = {
    merge: merge$3,
    insert: insert
  };

  var insertRowAt = function (grid, index, example, comparator, substitution) {
    var before = grid.slice(0, index);
    var after = grid.slice(index);
    var between = $_b6dmienujm0og0lu.mapCells(grid[example], function (ex, c) {
      var withinSpan = index > 0 && index < grid.length && comparator($_b6dmienujm0og0lu.getCellElement(grid[index - 1], c), $_b6dmienujm0og0lu.getCellElement(grid[index], c));
      var ret = withinSpan ? $_b6dmienujm0og0lu.getCell(grid[index], c) : $_7gs7v1lbjm0og03x.elementnew(substitution(ex.element(), comparator), true);
      return ret;
    });
    return before.concat([between]).concat(after);
  };
  var insertColumnAt = function (grid, index, example, comparator, substitution) {
    return map(grid, function (row) {
      var withinSpan = index > 0 && index < $_b6dmienujm0og0lu.cellLength(row) && comparator($_b6dmienujm0og0lu.getCellElement(row, index - 1), $_b6dmienujm0og0lu.getCellElement(row, index));
      var sub = withinSpan ? $_b6dmienujm0og0lu.getCell(row, index) : $_7gs7v1lbjm0og03x.elementnew(substitution($_b6dmienujm0og0lu.getCellElement(row, example), comparator), true);
      return $_b6dmienujm0og0lu.addCell(row, index, sub);
    });
  };
  var splitCellIntoColumns = function (grid, exampleRow, exampleCol, comparator, substitution) {
    var index = exampleCol + 1;
    return map(grid, function (row, i) {
      var isTargetCell = i === exampleRow;
      var sub = isTargetCell ? $_7gs7v1lbjm0og03x.elementnew(substitution($_b6dmienujm0og0lu.getCellElement(row, exampleCol), comparator), true) : $_b6dmienujm0og0lu.getCell(row, exampleCol);
      return $_b6dmienujm0og0lu.addCell(row, index, sub);
    });
  };
  var splitCellIntoRows = function (grid, exampleRow, exampleCol, comparator, substitution) {
    var index = exampleRow + 1;
    var before = grid.slice(0, index);
    var after = grid.slice(index);
    var between = $_b6dmienujm0og0lu.mapCells(grid[exampleRow], function (ex, i) {
      var isTargetCell = i === exampleCol;
      return isTargetCell ? $_7gs7v1lbjm0og03x.elementnew(substitution(ex.element(), comparator), true) : ex;
    });
    return before.concat([between]).concat(after);
  };
  var deleteColumnsAt = function (grid, start, finish) {
    var rows = map(grid, function (row) {
      var cells = row.cells().slice(0, start).concat(row.cells().slice(finish + 1));
      return $_7gs7v1lbjm0og03x.rowcells(cells, row.section());
    });
    return filter(rows, function (row) {
      return row.cells().length > 0;
    });
  };
  var deleteRowsAt = function (grid, start, finish) {
    return grid.slice(0, start).concat(grid.slice(finish + 1));
  };
  var $_d54xbmoajm0og0pc = {
    insertRowAt: insertRowAt,
    insertColumnAt: insertColumnAt,
    splitCellIntoColumns: splitCellIntoColumns,
    splitCellIntoRows: splitCellIntoRows,
    deleteRowsAt: deleteRowsAt,
    deleteColumnsAt: deleteColumnsAt
  };

  var replaceIn = function (grid, targets, comparator, substitution) {
    var isTarget = function (cell) {
      return exists(targets, function (target) {
        return comparator(cell.element(), target.element());
      });
    };
    return map(grid, function (row) {
      return $_b6dmienujm0og0lu.mapCells(row, function (cell) {
        return isTarget(cell) ? $_7gs7v1lbjm0og03x.elementnew(substitution(cell.element(), comparator), true) : cell;
      });
    });
  };
  var notStartRow = function (grid, rowIndex, colIndex, comparator) {
    return $_b6dmienujm0og0lu.getCellElement(grid[rowIndex], colIndex) !== undefined && (rowIndex > 0 && comparator($_b6dmienujm0og0lu.getCellElement(grid[rowIndex - 1], colIndex), $_b6dmienujm0og0lu.getCellElement(grid[rowIndex], colIndex)));
  };
  var notStartColumn = function (row, index, comparator) {
    return index > 0 && comparator($_b6dmienujm0og0lu.getCellElement(row, index - 1), $_b6dmienujm0og0lu.getCellElement(row, index));
  };
  var replaceColumn = function (grid, index, comparator, substitution) {
    var targets = bind(grid, function (row, i) {
      var alreadyAdded = notStartRow(grid, i, index, comparator) || notStartColumn(row, index, comparator);
      return alreadyAdded ? [] : [$_b6dmienujm0og0lu.getCell(row, index)];
    });
    return replaceIn(grid, targets, comparator, substitution);
  };
  var replaceRow = function (grid, index, comparator, substitution) {
    var targetRow = grid[index];
    var targets = bind(targetRow.cells(), function (item, i) {
      var alreadyAdded = notStartRow(grid, index, i, comparator) || notStartColumn(targetRow, i, comparator);
      return alreadyAdded ? [] : [item];
    });
    return replaceIn(grid, targets, comparator, substitution);
  };
  var $_buogtyobjm0og0ph = {
    replaceColumn: replaceColumn,
    replaceRow: replaceRow
  };

  var none$1 = function () {
    return folder(function (n, o, l, m, r) {
      return n();
    });
  };
  var only = function (index) {
    return folder(function (n, o, l, m, r) {
      return o(index);
    });
  };
  var left = function (index, next) {
    return folder(function (n, o, l, m, r) {
      return l(index, next);
    });
  };
  var middle = function (prev, index, next) {
    return folder(function (n, o, l, m, r) {
      return m(prev, index, next);
    });
  };
  var right = function (prev, index) {
    return folder(function (n, o, l, m, r) {
      return r(prev, index);
    });
  };
  var folder = function (fold) {
    return { fold: fold };
  };
  var $_72ugojoejm0og0pw = {
    none: none$1,
    only: only,
    left: left,
    middle: middle,
    right: right
  };

  var neighbours$1 = function (input, index) {
    if (input.length === 0)
      return $_72ugojoejm0og0pw.none();
    if (input.length === 1)
      return $_72ugojoejm0og0pw.only(0);
    if (index === 0)
      return $_72ugojoejm0og0pw.left(0, 1);
    if (index === input.length - 1)
      return $_72ugojoejm0og0pw.right(index - 1, index);
    if (index > 0 && index < input.length - 1)
      return $_72ugojoejm0og0pw.middle(index - 1, index, index + 1);
    return $_72ugojoejm0og0pw.none();
  };
  var determine = function (input, column, step, tableSize) {
    var result = input.slice(0);
    var context = neighbours$1(input, column);
    var zero = function (array) {
      return map(array, constant(0));
    };
    var onNone = constant(zero(result));
    var onOnly = function (index) {
      return tableSize.singleColumnWidth(result[index], step);
    };
    var onChange = function (index, next) {
      if (step >= 0) {
        var newNext = Math.max(tableSize.minCellWidth(), result[next] - step);
        return zero(result.slice(0, index)).concat([
          step,
          newNext - result[next]
        ]).concat(zero(result.slice(next + 1)));
      } else {
        var newThis = Math.max(tableSize.minCellWidth(), result[index] + step);
        var diffx = result[index] - newThis;
        return zero(result.slice(0, index)).concat([
          newThis - result[index],
          diffx
        ]).concat(zero(result.slice(next + 1)));
      }
    };
    var onLeft = onChange;
    var onMiddle = function (prev, index, next) {
      return onChange(index, next);
    };
    var onRight = function (prev, index) {
      if (step >= 0) {
        return zero(result.slice(0, index)).concat([step]);
      } else {
        var size = Math.max(tableSize.minCellWidth(), result[index] + step);
        return zero(result.slice(0, index)).concat([size - result[index]]);
      }
    };
    return context.fold(onNone, onOnly, onLeft, onMiddle, onRight);
  };
  var $_eg293hodjm0og0pq = { determine: determine };

  var getSpan$1 = function (cell, type) {
    return $_6aylb4m1jm0og07w.has(cell, type) && parseInt($_6aylb4m1jm0og07w.get(cell, type), 10) > 1;
  };
  var hasColspan = function (cell) {
    return getSpan$1(cell, 'colspan');
  };
  var hasRowspan = function (cell) {
    return getSpan$1(cell, 'rowspan');
  };
  var getInt = function (element, property) {
    return parseInt($_ekl9pwmajm0og09e.get(element, property), 10);
  };
  var $_2nsktbogjm0og0qc = {
    hasColspan: hasColspan,
    hasRowspan: hasRowspan,
    minWidth: constant(10),
    minHeight: constant(10),
    getInt: getInt
  };

  var getRaw$1 = function (cell, property, getter) {
    return $_ekl9pwmajm0og09e.getRaw(cell, property).fold(function () {
      return getter(cell) + 'px';
    }, function (raw) {
      return raw;
    });
  };
  var getRawW = function (cell) {
    return getRaw$1(cell, 'width', $_fd3c0xn6jm0og0gr.getPixelWidth);
  };
  var getRawH = function (cell) {
    return getRaw$1(cell, 'height', $_fd3c0xn6jm0og0gr.getHeight);
  };
  var getWidthFrom = function (warehouse, direction, getWidth, fallback, tableSize) {
    var columns = $_d8z45hnxjm0og0nc.columns(warehouse);
    var backups = map(columns, function (cellOption) {
      return cellOption.map(direction.edge);
    });
    return map(columns, function (cellOption, c) {
      var columnCell = cellOption.filter(not($_2nsktbogjm0og0qc.hasColspan));
      return columnCell.fold(function () {
        var deduced = $_b4vlzenyjm0og0nl.deduce(backups, c);
        return fallback(deduced);
      }, function (cell) {
        return getWidth(cell, tableSize);
      });
    });
  };
  var getDeduced = function (deduced) {
    return deduced.map(function (d) {
      return d + 'px';
    }).getOr('');
  };
  var getRawWidths = function (warehouse, direction) {
    return getWidthFrom(warehouse, direction, getRawW, getDeduced);
  };
  var getPercentageWidths = function (warehouse, direction, tableSize) {
    return getWidthFrom(warehouse, direction, $_fd3c0xn6jm0og0gr.getPercentageWidth, function (deduced) {
      return deduced.fold(function () {
        return tableSize.minCellWidth();
      }, function (cellWidth) {
        return cellWidth / tableSize.pixelWidth() * 100;
      });
    }, tableSize);
  };
  var getPixelWidths = function (warehouse, direction, tableSize) {
    return getWidthFrom(warehouse, direction, $_fd3c0xn6jm0og0gr.getPixelWidth, function (deduced) {
      return deduced.getOrThunk(tableSize.minCellWidth);
    }, tableSize);
  };
  var getHeightFrom = function (warehouse, direction, getHeight, fallback) {
    var rows = $_d8z45hnxjm0og0nc.rows(warehouse);
    var backups = map(rows, function (cellOption) {
      return cellOption.map(direction.edge);
    });
    return map(rows, function (cellOption, c) {
      var rowCell = cellOption.filter(not($_2nsktbogjm0og0qc.hasRowspan));
      return rowCell.fold(function () {
        var deduced = $_b4vlzenyjm0og0nl.deduce(backups, c);
        return fallback(deduced);
      }, function (cell) {
        return getHeight(cell);
      });
    });
  };
  var getPixelHeights = function (warehouse, direction) {
    return getHeightFrom(warehouse, direction, $_fd3c0xn6jm0og0gr.getHeight, function (deduced) {
      return deduced.getOrThunk($_2nsktbogjm0og0qc.minHeight);
    });
  };
  var getRawHeights = function (warehouse, direction) {
    return getHeightFrom(warehouse, direction, getRawH, getDeduced);
  };
  var $_7clz0yofjm0og0q4 = {
    getRawWidths: getRawWidths,
    getPixelWidths: getPixelWidths,
    getPercentageWidths: getPercentageWidths,
    getPixelHeights: getPixelHeights,
    getRawHeights: getRawHeights
  };

  var total = function (start, end, measures) {
    var r = 0;
    for (var i = start; i < end; i++) {
      r += measures[i] !== undefined ? measures[i] : 0;
    }
    return r;
  };
  var recalculateWidth = function (warehouse, widths) {
    var all = $_dhbleam9jm0og094.justCells(warehouse);
    return map(all, function (cell) {
      var width = total(cell.column(), cell.column() + cell.colspan(), widths);
      return {
        element: cell.element,
        width: constant(width),
        colspan: cell.colspan
      };
    });
  };
  var recalculateHeight = function (warehouse, heights) {
    var all = $_dhbleam9jm0og094.justCells(warehouse);
    return map(all, function (cell) {
      var height = total(cell.row(), cell.row() + cell.rowspan(), heights);
      return {
        element: cell.element,
        height: constant(height),
        rowspan: cell.rowspan
      };
    });
  };
  var matchRowHeight = function (warehouse, heights) {
    return map(warehouse.all(), function (row, i) {
      return {
        element: row.element,
        height: constant(heights[i])
      };
    });
  };
  var $_b0cupwohjm0og0qk = {
    recalculateWidth: recalculateWidth,
    recalculateHeight: recalculateHeight,
    matchRowHeight: matchRowHeight
  };

  var percentageSize = function (width, element) {
    var floatWidth = parseFloat(width);
    var pixelWidth = $_1qjqlnajm0og0ht.get(element);
    var getCellDelta = function (delta) {
      return delta / pixelWidth * 100;
    };
    var singleColumnWidth = function (width, _delta) {
      return [100 - width];
    };
    var minCellWidth = function () {
      return $_2nsktbogjm0og0qc.minWidth() / pixelWidth * 100;
    };
    var setTableWidth = function (table, _newWidths, delta) {
      var total = floatWidth + delta;
      $_fd3c0xn6jm0og0gr.setPercentageWidth(table, total);
    };
    return {
      width: constant(floatWidth),
      pixelWidth: constant(pixelWidth),
      getWidths: $_7clz0yofjm0og0q4.getPercentageWidths,
      getCellDelta: getCellDelta,
      singleColumnWidth: singleColumnWidth,
      minCellWidth: minCellWidth,
      setElementWidth: $_fd3c0xn6jm0og0gr.setPercentageWidth,
      setTableWidth: setTableWidth
    };
  };
  var pixelSize = function (width) {
    var intWidth = parseInt(width, 10);
    var getCellDelta = identity;
    var singleColumnWidth = function (width, delta) {
      var newNext = Math.max($_2nsktbogjm0og0qc.minWidth(), width + delta);
      return [newNext - width];
    };
    var setTableWidth = function (table, newWidths, _delta) {
      var total = foldr(newWidths, function (b, a) {
        return b + a;
      }, 0);
      $_fd3c0xn6jm0og0gr.setPixelWidth(table, total);
    };
    return {
      width: constant(intWidth),
      pixelWidth: constant(intWidth),
      getWidths: $_7clz0yofjm0og0q4.getPixelWidths,
      getCellDelta: getCellDelta,
      singleColumnWidth: singleColumnWidth,
      minCellWidth: $_2nsktbogjm0og0qc.minWidth,
      setElementWidth: $_fd3c0xn6jm0og0gr.setPixelWidth,
      setTableWidth: setTableWidth
    };
  };
  var chooseSize = function (element, width) {
    if ($_fd3c0xn6jm0og0gr.percentageBasedSizeRegex().test(width)) {
      var percentMatch = $_fd3c0xn6jm0og0gr.percentageBasedSizeRegex().exec(width);
      return percentageSize(percentMatch[1], element);
    } else if ($_fd3c0xn6jm0og0gr.pixelBasedSizeRegex().test(width)) {
      var pixelMatch = $_fd3c0xn6jm0og0gr.pixelBasedSizeRegex().exec(width);
      return pixelSize(pixelMatch[1]);
    } else {
      var fallbackWidth = $_1qjqlnajm0og0ht.get(element);
      return pixelSize(fallbackWidth);
    }
  };
  var getTableSize = function (element) {
    var width = $_fd3c0xn6jm0og0gr.getRawWidth(element);
    return width.fold(function () {
      var fallbackWidth = $_1qjqlnajm0og0ht.get(element);
      return pixelSize(fallbackWidth);
    }, function (width) {
      return chooseSize(element, width);
    });
  };
  var $_6haggdoijm0og0qr = { getTableSize: getTableSize };

  var getWarehouse$1 = function (list) {
    return $_dhbleam9jm0og094.generate(list);
  };
  var sumUp = function (newSize) {
    return foldr(newSize, function (b, a) {
      return b + a;
    }, 0);
  };
  var getTableWarehouse = function (table) {
    var list = $_eocn1clajm0og03n.fromTable(table);
    return getWarehouse$1(list);
  };
  var adjustWidth = function (table, delta, index, direction) {
    var tableSize = $_6haggdoijm0og0qr.getTableSize(table);
    var step = tableSize.getCellDelta(delta);
    var warehouse = getTableWarehouse(table);
    var widths = tableSize.getWidths(warehouse, direction, tableSize);
    var deltas = $_eg293hodjm0og0pq.determine(widths, index, step, tableSize);
    var newWidths = map(deltas, function (dx, i) {
      return dx + widths[i];
    });
    var newSizes = $_b0cupwohjm0og0qk.recalculateWidth(warehouse, newWidths);
    each(newSizes, function (cell) {
      tableSize.setElementWidth(cell.element(), cell.width());
    });
    if (index === warehouse.grid().columns() - 1) {
      tableSize.setTableWidth(table, newWidths, step);
    }
  };
  var adjustHeight = function (table, delta, index, direction) {
    var warehouse = getTableWarehouse(table);
    var heights = $_7clz0yofjm0og0q4.getPixelHeights(warehouse, direction);
    var newHeights = map(heights, function (dy, i) {
      return index === i ? Math.max(delta + dy, $_2nsktbogjm0og0qc.minHeight()) : dy;
    });
    var newCellSizes = $_b0cupwohjm0og0qk.recalculateHeight(warehouse, newHeights);
    var newRowSizes = $_b0cupwohjm0og0qk.matchRowHeight(warehouse, newHeights);
    each(newRowSizes, function (row) {
      $_fd3c0xn6jm0og0gr.setHeight(row.element(), row.height());
    });
    each(newCellSizes, function (cell) {
      $_fd3c0xn6jm0og0gr.setHeight(cell.element(), cell.height());
    });
    var total = sumUp(newHeights);
    $_fd3c0xn6jm0og0gr.setHeight(table, total);
  };
  var adjustWidthTo = function (table, list, direction) {
    var tableSize = $_6haggdoijm0og0qr.getTableSize(table);
    var warehouse = getWarehouse$1(list);
    var widths = tableSize.getWidths(warehouse, direction, tableSize);
    var newSizes = $_b0cupwohjm0og0qk.recalculateWidth(warehouse, widths);
    each(newSizes, function (cell) {
      tableSize.setElementWidth(cell.element(), cell.width());
    });
    var total = foldr(widths, function (b, a) {
      return a + b;
    }, 0);
    if (newSizes.length > 0) {
      tableSize.setElementWidth(table, total);
    }
  };
  var $_cwe8heocjm0og0pl = {
    adjustWidth: adjustWidth,
    adjustHeight: adjustHeight,
    adjustWidthTo: adjustWidthTo
  };

  var prune = function (table) {
    var cells = $_d02uidlcjm0og041.cells(table);
    if (cells.length === 0)
      $_7uuw85mdjm0og09v.remove(table);
  };
  var outcome = Immutable('grid', 'cursor');
  var elementFromGrid = function (grid, row, column) {
    return findIn(grid, row, column).orThunk(function () {
      return findIn(grid, 0, 0);
    });
  };
  var findIn = function (grid, row, column) {
    return Option.from(grid[row]).bind(function (r) {
      return Option.from(r.cells()[column]).bind(function (c) {
        return Option.from(c.element());
      });
    });
  };
  var bundle = function (grid, row, column) {
    return outcome(grid, findIn(grid, row, column));
  };
  var uniqueRows = function (details) {
    return foldl(details, function (rest, detail) {
      return exists(rest, function (currentDetail) {
        return currentDetail.row() === detail.row();
      }) ? rest : rest.concat([detail]);
    }, []).sort(function (detailA, detailB) {
      return detailA.row() - detailB.row();
    });
  };
  var uniqueColumns = function (details) {
    return foldl(details, function (rest, detail) {
      return exists(rest, function (currentDetail) {
        return currentDetail.column() === detail.column();
      }) ? rest : rest.concat([detail]);
    }, []).sort(function (detailA, detailB) {
      return detailA.column() - detailB.column();
    });
  };
  var insertRowBefore = function (grid, detail, comparator, genWrappers) {
    var example = detail.row();
    var targetIndex = detail.row();
    var newGrid = $_d54xbmoajm0og0pc.insertRowAt(grid, targetIndex, example, comparator, genWrappers.getOrInit);
    return bundle(newGrid, targetIndex, detail.column());
  };
  var insertRowsBefore = function (grid, details, comparator, genWrappers) {
    var example = details[0].row();
    var targetIndex = details[0].row();
    var rows = uniqueRows(details);
    var newGrid = foldl(rows, function (newGrid, _row) {
      return $_d54xbmoajm0og0pc.insertRowAt(newGrid, targetIndex, example, comparator, genWrappers.getOrInit);
    }, grid);
    return bundle(newGrid, targetIndex, details[0].column());
  };
  var insertRowAfter = function (grid, detail, comparator, genWrappers) {
    var example = detail.row();
    var targetIndex = detail.row() + detail.rowspan();
    var newGrid = $_d54xbmoajm0og0pc.insertRowAt(grid, targetIndex, example, comparator, genWrappers.getOrInit);
    return bundle(newGrid, targetIndex, detail.column());
  };
  var insertRowsAfter = function (grid, details, comparator, genWrappers) {
    var rows = uniqueRows(details);
    var example = rows[rows.length - 1].row();
    var targetIndex = rows[rows.length - 1].row() + rows[rows.length - 1].rowspan();
    var newGrid = foldl(rows, function (newGrid, _row) {
      return $_d54xbmoajm0og0pc.insertRowAt(newGrid, targetIndex, example, comparator, genWrappers.getOrInit);
    }, grid);
    return bundle(newGrid, targetIndex, details[0].column());
  };
  var insertColumnBefore = function (grid, detail, comparator, genWrappers) {
    var example = detail.column();
    var targetIndex = detail.column();
    var newGrid = $_d54xbmoajm0og0pc.insertColumnAt(grid, targetIndex, example, comparator, genWrappers.getOrInit);
    return bundle(newGrid, detail.row(), targetIndex);
  };
  var insertColumnsBefore = function (grid, details, comparator, genWrappers) {
    var columns = uniqueColumns(details);
    var example = columns[0].column();
    var targetIndex = columns[0].column();
    var newGrid = foldl(columns, function (newGrid, _row) {
      return $_d54xbmoajm0og0pc.insertColumnAt(newGrid, targetIndex, example, comparator, genWrappers.getOrInit);
    }, grid);
    return bundle(newGrid, details[0].row(), targetIndex);
  };
  var insertColumnAfter = function (grid, detail, comparator, genWrappers) {
    var example = detail.column();
    var targetIndex = detail.column() + detail.colspan();
    var newGrid = $_d54xbmoajm0og0pc.insertColumnAt(grid, targetIndex, example, comparator, genWrappers.getOrInit);
    return bundle(newGrid, detail.row(), targetIndex);
  };
  var insertColumnsAfter = function (grid, details, comparator, genWrappers) {
    var example = details[details.length - 1].column();
    var targetIndex = details[details.length - 1].column() + details[details.length - 1].colspan();
    var columns = uniqueColumns(details);
    var newGrid = foldl(columns, function (newGrid, _row) {
      return $_d54xbmoajm0og0pc.insertColumnAt(newGrid, targetIndex, example, comparator, genWrappers.getOrInit);
    }, grid);
    return bundle(newGrid, details[0].row(), targetIndex);
  };
  var makeRowHeader = function (grid, detail, comparator, genWrappers) {
    var newGrid = $_buogtyobjm0og0ph.replaceRow(grid, detail.row(), comparator, genWrappers.replaceOrInit);
    return bundle(newGrid, detail.row(), detail.column());
  };
  var makeColumnHeader = function (grid, detail, comparator, genWrappers) {
    var newGrid = $_buogtyobjm0og0ph.replaceColumn(grid, detail.column(), comparator, genWrappers.replaceOrInit);
    return bundle(newGrid, detail.row(), detail.column());
  };
  var unmakeRowHeader = function (grid, detail, comparator, genWrappers) {
    var newGrid = $_buogtyobjm0og0ph.replaceRow(grid, detail.row(), comparator, genWrappers.replaceOrInit);
    return bundle(newGrid, detail.row(), detail.column());
  };
  var unmakeColumnHeader = function (grid, detail, comparator, genWrappers) {
    var newGrid = $_buogtyobjm0og0ph.replaceColumn(grid, detail.column(), comparator, genWrappers.replaceOrInit);
    return bundle(newGrid, detail.row(), detail.column());
  };
  var splitCellIntoColumns$1 = function (grid, detail, comparator, genWrappers) {
    var newGrid = $_d54xbmoajm0og0pc.splitCellIntoColumns(grid, detail.row(), detail.column(), comparator, genWrappers.getOrInit);
    return bundle(newGrid, detail.row(), detail.column());
  };
  var splitCellIntoRows$1 = function (grid, detail, comparator, genWrappers) {
    var newGrid = $_d54xbmoajm0og0pc.splitCellIntoRows(grid, detail.row(), detail.column(), comparator, genWrappers.getOrInit);
    return bundle(newGrid, detail.row(), detail.column());
  };
  var eraseColumns = function (grid, details, comparator, _genWrappers) {
    var columns = uniqueColumns(details);
    var newGrid = $_d54xbmoajm0og0pc.deleteColumnsAt(grid, columns[0].column(), columns[columns.length - 1].column());
    var cursor = elementFromGrid(newGrid, details[0].row(), details[0].column());
    return outcome(newGrid, cursor);
  };
  var eraseRows = function (grid, details, comparator, _genWrappers) {
    var rows = uniqueRows(details);
    var newGrid = $_d54xbmoajm0og0pc.deleteRowsAt(grid, rows[0].row(), rows[rows.length - 1].row());
    var cursor = elementFromGrid(newGrid, details[0].row(), details[0].column());
    return outcome(newGrid, cursor);
  };
  var mergeCells = function (grid, mergable, comparator, _genWrappers) {
    var cells = mergable.cells();
    $_5xro1snmjm0og0ju.merge(cells);
    var newGrid = $_cn0y6zo9jm0og0p4.merge(grid, mergable.bounds(), comparator, constant(cells[0]));
    return outcome(newGrid, Option.from(cells[0]));
  };
  var unmergeCells = function (grid, unmergable, comparator, genWrappers) {
    var newGrid = foldr(unmergable, function (b, cell) {
      return $_cn0y6zo9jm0og0p4.unmerge(b, cell, comparator, genWrappers.combine(cell));
    }, grid);
    return outcome(newGrid, Option.from(unmergable[0]));
  };
  var pasteCells = function (grid, pasteDetails, comparator, genWrappers) {
    var gridify = function (table, generators) {
      var list = $_eocn1clajm0og03n.fromTable(table);
      var wh = $_dhbleam9jm0og094.generate(list);
      return $_d60w9mnsjm0og0lk.toGrid(wh, generators, true);
    };
    var gridB = gridify(pasteDetails.clipboard(), pasteDetails.generators());
    var startAddress = $_7gs7v1lbjm0og03x.address(pasteDetails.row(), pasteDetails.column());
    var mergedGrid = $_b6forqo6jm0og0oo.merge(startAddress, grid, gridB, pasteDetails.generators(), comparator);
    return mergedGrid.fold(function () {
      return outcome(grid, Option.some(pasteDetails.element()));
    }, function (nuGrid) {
      var cursor = elementFromGrid(nuGrid, pasteDetails.row(), pasteDetails.column());
      return outcome(nuGrid, cursor);
    });
  };
  var gridifyRows = function (rows, generators, example) {
    var pasteDetails = $_eocn1clajm0og03n.fromPastedRows(rows, example);
    var wh = $_dhbleam9jm0og094.generate(pasteDetails);
    return $_d60w9mnsjm0og0lk.toGrid(wh, generators, true);
  };
  var pasteRowsBefore = function (grid, pasteDetails, comparator, genWrappers) {
    var example = grid[pasteDetails.cells[0].row()];
    var index = pasteDetails.cells[0].row();
    var gridB = gridifyRows(pasteDetails.clipboard(), pasteDetails.generators(), example);
    var mergedGrid = $_b6forqo6jm0og0oo.insert(index, grid, gridB, pasteDetails.generators(), comparator);
    var cursor = elementFromGrid(mergedGrid, pasteDetails.cells[0].row(), pasteDetails.cells[0].column());
    return outcome(mergedGrid, cursor);
  };
  var pasteRowsAfter = function (grid, pasteDetails, comparator, genWrappers) {
    var example = grid[pasteDetails.cells[0].row()];
    var index = pasteDetails.cells[pasteDetails.cells.length - 1].row() + pasteDetails.cells[pasteDetails.cells.length - 1].rowspan();
    var gridB = gridifyRows(pasteDetails.clipboard(), pasteDetails.generators(), example);
    var mergedGrid = $_b6forqo6jm0og0oo.insert(index, grid, gridB, pasteDetails.generators(), comparator);
    var cursor = elementFromGrid(mergedGrid, pasteDetails.cells[0].row(), pasteDetails.cells[0].column());
    return outcome(mergedGrid, cursor);
  };
  var resize = $_cwe8heocjm0og0pl.adjustWidthTo;
  var $_1wyq9dnijm0og0is = {
    insertRowBefore: $_b2k0ugnpjm0og0ky.run(insertRowBefore, $_b2k0ugnpjm0og0ky.onCell, noop, noop, $_4mup2lnjjm0og0j9.modification),
    insertRowsBefore: $_b2k0ugnpjm0og0ky.run(insertRowsBefore, $_b2k0ugnpjm0og0ky.onCells, noop, noop, $_4mup2lnjjm0og0j9.modification),
    insertRowAfter: $_b2k0ugnpjm0og0ky.run(insertRowAfter, $_b2k0ugnpjm0og0ky.onCell, noop, noop, $_4mup2lnjjm0og0j9.modification),
    insertRowsAfter: $_b2k0ugnpjm0og0ky.run(insertRowsAfter, $_b2k0ugnpjm0og0ky.onCells, noop, noop, $_4mup2lnjjm0og0j9.modification),
    insertColumnBefore: $_b2k0ugnpjm0og0ky.run(insertColumnBefore, $_b2k0ugnpjm0og0ky.onCell, resize, noop, $_4mup2lnjjm0og0j9.modification),
    insertColumnsBefore: $_b2k0ugnpjm0og0ky.run(insertColumnsBefore, $_b2k0ugnpjm0og0ky.onCells, resize, noop, $_4mup2lnjjm0og0j9.modification),
    insertColumnAfter: $_b2k0ugnpjm0og0ky.run(insertColumnAfter, $_b2k0ugnpjm0og0ky.onCell, resize, noop, $_4mup2lnjjm0og0j9.modification),
    insertColumnsAfter: $_b2k0ugnpjm0og0ky.run(insertColumnsAfter, $_b2k0ugnpjm0og0ky.onCells, resize, noop, $_4mup2lnjjm0og0j9.modification),
    splitCellIntoColumns: $_b2k0ugnpjm0og0ky.run(splitCellIntoColumns$1, $_b2k0ugnpjm0og0ky.onCell, resize, noop, $_4mup2lnjjm0og0j9.modification),
    splitCellIntoRows: $_b2k0ugnpjm0og0ky.run(splitCellIntoRows$1, $_b2k0ugnpjm0og0ky.onCell, noop, noop, $_4mup2lnjjm0og0j9.modification),
    eraseColumns: $_b2k0ugnpjm0og0ky.run(eraseColumns, $_b2k0ugnpjm0og0ky.onCells, resize, prune, $_4mup2lnjjm0og0j9.modification),
    eraseRows: $_b2k0ugnpjm0og0ky.run(eraseRows, $_b2k0ugnpjm0og0ky.onCells, noop, prune, $_4mup2lnjjm0og0j9.modification),
    makeColumnHeader: $_b2k0ugnpjm0og0ky.run(makeColumnHeader, $_b2k0ugnpjm0og0ky.onCell, noop, noop, $_4mup2lnjjm0og0j9.transform('row', 'th')),
    unmakeColumnHeader: $_b2k0ugnpjm0og0ky.run(unmakeColumnHeader, $_b2k0ugnpjm0og0ky.onCell, noop, noop, $_4mup2lnjjm0og0j9.transform(null, 'td')),
    makeRowHeader: $_b2k0ugnpjm0og0ky.run(makeRowHeader, $_b2k0ugnpjm0og0ky.onCell, noop, noop, $_4mup2lnjjm0og0j9.transform('col', 'th')),
    unmakeRowHeader: $_b2k0ugnpjm0og0ky.run(unmakeRowHeader, $_b2k0ugnpjm0og0ky.onCell, noop, noop, $_4mup2lnjjm0og0j9.transform(null, 'td')),
    mergeCells: $_b2k0ugnpjm0og0ky.run(mergeCells, $_b2k0ugnpjm0og0ky.onMergable, noop, noop, $_4mup2lnjjm0og0j9.merging),
    unmergeCells: $_b2k0ugnpjm0og0ky.run(unmergeCells, $_b2k0ugnpjm0og0ky.onUnmergable, resize, noop, $_4mup2lnjjm0og0j9.merging),
    pasteCells: $_b2k0ugnpjm0og0ky.run(pasteCells, $_b2k0ugnpjm0og0ky.onPaste, resize, noop, $_4mup2lnjjm0og0j9.modification),
    pasteRowsBefore: $_b2k0ugnpjm0og0ky.run(pasteRowsBefore, $_b2k0ugnpjm0og0ky.onPasteRows, noop, noop, $_4mup2lnjjm0og0j9.modification),
    pasteRowsAfter: $_b2k0ugnpjm0og0ky.run(pasteRowsAfter, $_b2k0ugnpjm0og0ky.onPasteRows, noop, noop, $_4mup2lnjjm0og0j9.modification)
  };

  var getBody$1 = function (editor) {
    return Element$$1.fromDom(editor.getBody());
  };
  var getPixelWidth$1 = function (elm) {
    return elm.getBoundingClientRect().width;
  };
  var getPixelHeight = function (elm) {
    return elm.getBoundingClientRect().height;
  };
  var getIsRoot = function (editor) {
    return function (element) {
      return $_dql4e0lkjm0og06c.eq(element, getBody$1(editor));
    };
  };
  var removePxSuffix = function (size) {
    return size ? size.replace(/px$/, '') : '';
  };
  var addSizeSuffix = function (size) {
    if (/^[0-9]+$/.test(size)) {
      size += 'px';
    }
    return size;
  };
  var removeDataStyle = function (table) {
    var dataStyleCells = $_1wzcn0m3jm0og087.descendants(table, 'td[data-mce-style],th[data-mce-style]');
    $_6aylb4m1jm0og07w.remove(table, 'data-mce-style');
    each(dataStyleCells, function (cell) {
      $_6aylb4m1jm0og07w.remove(cell, 'data-mce-style');
    });
  };

  var onDirection = function (isLtr, isRtl) {
    return function (element) {
      return getDirection(element) === 'rtl' ? isRtl : isLtr;
    };
  };
  var getDirection = function (element) {
    return $_ekl9pwmajm0og09e.get(element, 'direction') === 'rtl' ? 'rtl' : 'ltr';
  };
  var $_cz026koljm0og0re = {
    onDirection: onDirection,
    getDirection: getDirection
  };

  var ltr$1 = { isRtl: constant(false) };
  var rtl$1 = { isRtl: constant(true) };
  var directionAt = function (element) {
    var dir = $_cz026koljm0og0re.getDirection(element);
    return dir === 'rtl' ? rtl$1 : ltr$1;
  };
  var $_8ooslcokjm0og0ra = { directionAt: directionAt };

  var defaultTableToolbar = [
    'tableprops',
    'tabledelete',
    '|',
    'tableinsertrowbefore',
    'tableinsertrowafter',
    'tabledeleterow',
    '|',
    'tableinsertcolbefore',
    'tableinsertcolafter',
    'tabledeletecol'
  ];
  var defaultStyles = {
    'border-collapse': 'collapse',
    'width': '100%'
  };
  var defaultAttributes = { border: '1' };
  var getDefaultAttributes = function (editor) {
    return editor.getParam('table_default_attributes', defaultAttributes, 'object');
  };
  var getDefaultStyles = function (editor) {
    return editor.getParam('table_default_styles', defaultStyles, 'object');
  };
  var hasTableResizeBars = function (editor) {
    return editor.getParam('table_resize_bars', true, 'boolean');
  };
  var hasTabNavigation = function (editor) {
    return editor.getParam('table_tab_navigation', true, 'boolean');
  };
  var hasAdvancedCellTab = function (editor) {
    return editor.getParam('table_cell_advtab', true, 'boolean');
  };
  var hasAdvancedRowTab = function (editor) {
    return editor.getParam('table_row_advtab', true, 'boolean');
  };
  var hasAdvancedTableTab = function (editor) {
    return editor.getParam('table_advtab', true, 'boolean');
  };
  var hasAppearanceOptions = function (editor) {
    return editor.getParam('table_appearance_options', true, 'boolean');
  };
  var hasTableGrid = function (editor) {
    return editor.getParam('table_grid', true, 'boolean');
  };
  var shouldStyleWithCss = function (editor) {
    return editor.getParam('table_style_by_css', false, 'boolean');
  };
  var getCellClassList = function (editor) {
    return editor.getParam('table_cell_class_list', [], 'array');
  };
  var getRowClassList = function (editor) {
    return editor.getParam('table_row_class_list', [], 'array');
  };
  var getTableClassList = function (editor) {
    return editor.getParam('table_class_list', [], 'array');
  };
  var getColorPickerCallback = function (editor) {
    return editor.getParam('color_picker_callback');
  };
  var isPixelsForced = function (editor) {
    return editor.getParam('table_responsive_width') === false;
  };
  var getCloneElements = function (editor) {
    var cloneElements = editor.getParam('table_clone_elements');
    if (isString(cloneElements)) {
      return Option.some(cloneElements.split(/[ ,]/));
    } else if (Array.isArray(cloneElements)) {
      return Option.some(cloneElements);
    } else {
      return Option.none();
    }
  };
  var hasObjectResizing = function (editor) {
    var objectResizing = editor.getParam('object_resizing', true);
    return objectResizing === 'table' || objectResizing;
  };
  var getToolbar = function (editor) {
    var toolbar = editor.getParam('table_toolbar', defaultTableToolbar);
    if (toolbar === '' || toolbar === false) {
      return [];
    } else if (isString(toolbar)) {
      return toolbar.split(/[ ,]/);
    } else if (isArray(toolbar)) {
      return toolbar;
    } else {
      return [];
    }
  };

  var fireNewRow = function (editor, row) {
    return editor.fire('newrow', { node: row });
  };
  var fireNewCell = function (editor, cell) {
    return editor.fire('newcell', { node: cell });
  };
  var fireObjectResizeStart = function (editor, target, width, height) {
    editor.fire('ObjectResizeStart', {
      target: target,
      width: width,
      height: height
    });
  };
  var fireObjectResized = function (editor, target, width, height) {
    editor.fire('ObjectResized', {
      target: target,
      width: width,
      height: height
    });
  };

  var TableActions = function (editor, lazyWire) {
    var isTableBody = function (editor) {
      return $_8kaujsm2jm0og085.name(getBody$1(editor)) === 'table';
    };
    var lastRowGuard = function (table) {
      var size = $_gcbkkqnhjm0og0ip.getGridSize(table);
      return isTableBody(editor) === false || size.rows() > 1;
    };
    var lastColumnGuard = function (table) {
      var size = $_gcbkkqnhjm0og0ip.getGridSize(table);
      return isTableBody(editor) === false || size.columns() > 1;
    };
    var cloneFormats = getCloneElements(editor);
    var execute = function (operation, guard, mutate, lazyWire) {
      return function (table, target) {
        removeDataStyle(table);
        var wire = lazyWire();
        var doc = Element$$1.fromDom(editor.getDoc());
        var direction = TableDirection($_8ooslcokjm0og0ra.directionAt);
        var generators = $_1h0ajrmfjm0og0a3.cellOperations(mutate, doc, cloneFormats);
        return guard(table) ? operation(wire, table, target, generators, direction).bind(function (result) {
          each(result.newRows(), function (row) {
            fireNewRow(editor, row.dom());
          });
          each(result.newCells(), function (cell) {
            fireNewCell(editor, cell.dom());
          });
          return result.cursor().map(function (cell) {
            var rng = editor.dom.createRng();
            rng.setStart(cell.dom(), 0);
            rng.setEnd(cell.dom(), 0);
            return rng;
          });
        }) : Option.none();
      };
    };
    var deleteRow = execute($_1wyq9dnijm0og0is.eraseRows, lastRowGuard, noop, lazyWire);
    var deleteColumn = execute($_1wyq9dnijm0og0is.eraseColumns, lastColumnGuard, noop, lazyWire);
    var insertRowsBefore = execute($_1wyq9dnijm0og0is.insertRowsBefore, always, noop, lazyWire);
    var insertRowsAfter = execute($_1wyq9dnijm0og0is.insertRowsAfter, always, noop, lazyWire);
    var insertColumnsBefore = execute($_1wyq9dnijm0og0is.insertColumnsBefore, always, $_dz07myn5jm0og0go.halve, lazyWire);
    var insertColumnsAfter = execute($_1wyq9dnijm0og0is.insertColumnsAfter, always, $_dz07myn5jm0og0go.halve, lazyWire);
    var mergeCells = execute($_1wyq9dnijm0og0is.mergeCells, always, noop, lazyWire);
    var unmergeCells = execute($_1wyq9dnijm0og0is.unmergeCells, always, noop, lazyWire);
    var pasteRowsBefore = execute($_1wyq9dnijm0og0is.pasteRowsBefore, always, noop, lazyWire);
    var pasteRowsAfter = execute($_1wyq9dnijm0og0is.pasteRowsAfter, always, noop, lazyWire);
    var pasteCells = execute($_1wyq9dnijm0og0is.pasteCells, always, noop, lazyWire);
    return {
      deleteRow: deleteRow,
      deleteColumn: deleteColumn,
      insertRowsBefore: insertRowsBefore,
      insertRowsAfter: insertRowsAfter,
      insertColumnsBefore: insertColumnsBefore,
      insertColumnsAfter: insertColumnsAfter,
      mergeCells: mergeCells,
      unmergeCells: unmergeCells,
      pasteRowsBefore: pasteRowsBefore,
      pasteRowsAfter: pasteRowsAfter,
      pasteCells: pasteCells
    };
  };

  var copyRows = function (table, target, generators) {
    var list = $_eocn1clajm0og03n.fromTable(table);
    var house = $_dhbleam9jm0og094.generate(list);
    var details = $_b2k0ugnpjm0og0ky.onCells(house, target);
    return details.map(function (selectedCells) {
      var grid = $_d60w9mnsjm0og0lk.toGrid(house, generators, false);
      var slicedGrid = grid.slice(selectedCells[0].row(), selectedCells[selectedCells.length - 1].row() + selectedCells[selectedCells.length - 1].rowspan());
      var slicedDetails = $_b2k0ugnpjm0og0ky.toDetailList(slicedGrid, generators);
      return $_6zct8gnvjm0og0ly.copy(slicedDetails);
    });
  };
  var $_7kzo43opjm0og0sb = { copyRows: copyRows };

  var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var getTDTHOverallStyle = function (dom, elm, name) {
    var cells = dom.select('td,th', elm);
    var firstChildStyle;
    var checkChildren = function (firstChildStyle, elms) {
      for (var i = 0; i < elms.length; i++) {
        var currentStyle = dom.getStyle(elms[i], name);
        if (typeof firstChildStyle === 'undefined') {
          firstChildStyle = currentStyle;
        }
        if (firstChildStyle !== currentStyle) {
          return '';
        }
      }
      return firstChildStyle;
    };
    firstChildStyle = checkChildren(firstChildStyle, cells);
    return firstChildStyle;
  };
  var applyAlign = function (editor, elm, name) {
    if (name) {
      editor.formatter.apply('align' + name, {}, elm);
    }
  };
  var applyVAlign = function (editor, elm, name) {
    if (name) {
      editor.formatter.apply('valign' + name, {}, elm);
    }
  };
  var unApplyAlign = function (editor, elm) {
    global$1.each('left center right'.split(' '), function (name) {
      editor.formatter.remove('align' + name, {}, elm);
    });
  };
  var unApplyVAlign = function (editor, elm) {
    global$1.each('top middle bottom'.split(' '), function (name) {
      editor.formatter.remove('valign' + name, {}, elm);
    });
  };
  var $_2tjk8hosjm0og0sm = {
    applyAlign: applyAlign,
    applyVAlign: applyVAlign,
    unApplyAlign: unApplyAlign,
    unApplyVAlign: unApplyVAlign,
    getTDTHOverallStyle: getTDTHOverallStyle
  };

  var buildListItems = function (inputList, itemCallback, startItems) {
    var appendItems = function (values, output) {
      output = output || [];
      global$1.each(values, function (item) {
        var menuItem = { text: item.text || item.title };
        if (item.menu) {
          menuItem.menu = appendItems(item.menu);
        } else {
          menuItem.value = item.value;
          if (itemCallback) {
            itemCallback(menuItem);
          }
        }
        output.push(menuItem);
      });
      return output;
    };
    return appendItems(inputList, startItems || []);
  };
  function styleFieldHasFocus(e) {
    return e.control.rootControl.find('#style')[0].getEl().isEqualNode(document.activeElement);
  }
  var syncAdvancedStyleFields = function (editor, evt) {
    if (styleFieldHasFocus(evt)) {
      updateAdvancedFields(editor, evt);
    } else {
      updateStyleField(editor, evt);
    }
  };
  var updateStyleField = function (editor, evt) {
    var dom = editor.dom;
    var rootControl = evt.control.rootControl;
    var data = rootControl.toJSON();
    var css = dom.parseStyle(data.style);
    css['border-style'] = data.borderStyle;
    css['border-color'] = data.borderColor;
    css['background-color'] = data.backgroundColor;
    css.width = data.width ? addSizeSuffix(data.width) : '';
    css.height = data.height ? addSizeSuffix(data.height) : '';
    rootControl.find('#style').value(dom.serializeStyle(dom.parseStyle(dom.serializeStyle(css))));
  };
  var updateAdvancedFields = function (editor, evt) {
    var dom = editor.dom;
    var rootControl = evt.control.rootControl;
    var data = rootControl.toJSON();
    var css = dom.parseStyle(data.style);
    rootControl.find('#borderStyle').value(css['border-style'] || '');
    rootControl.find('#borderColor').value(css['border-color'] || '');
    rootControl.find('#backgroundColor').value(css['background-color'] || '');
    rootControl.find('#width').value(css.width || '');
    rootControl.find('#height').value(css.height || '');
  };
  var extractAdvancedStyles = function (dom, elm) {
    var css = dom.parseStyle(dom.getAttrib(elm, 'style'));
    var data = {};
    if (css['border-style']) {
      data.borderStyle = css['border-style'];
    }
    if (css['border-color']) {
      data.borderColor = css['border-color'];
    }
    if (css['background-color']) {
      data.backgroundColor = css['background-color'];
    }
    data.style = dom.serializeStyle(css);
    return data;
  };
  var createStyleForm = function (editor) {
    var createColorPickAction = function () {
      var colorPickerCallback = getColorPickerCallback(editor);
      if (colorPickerCallback) {
        return function (evt) {
          return colorPickerCallback.call(editor, function (value) {
            evt.control.value(value).fire('change');
          }, evt.control.value());
        };
      }
    };
    return {
      title: 'Advanced',
      type: 'form',
      defaults: { onchange: curry(updateStyleField, editor) },
      items: [
        {
          label: 'Style',
          name: 'style',
          type: 'textbox',
          onchange: curry(updateAdvancedFields, editor)
        },
        {
          type: 'form',
          padding: 0,
          formItemDefaults: {
            layout: 'grid',
            alignH: [
              'start',
              'right'
            ]
          },
          defaults: { size: 7 },
          items: [
            {
              label: 'Border style',
              type: 'listbox',
              name: 'borderStyle',
              width: 90,
              onselect: curry(updateStyleField, editor),
              values: [
                {
                  text: 'Select...',
                  value: ''
                },
                {
                  text: 'Solid',
                  value: 'solid'
                },
                {
                  text: 'Dotted',
                  value: 'dotted'
                },
                {
                  text: 'Dashed',
                  value: 'dashed'
                },
                {
                  text: 'Double',
                  value: 'double'
                },
                {
                  text: 'Groove',
                  value: 'groove'
                },
                {
                  text: 'Ridge',
                  value: 'ridge'
                },
                {
                  text: 'Inset',
                  value: 'inset'
                },
                {
                  text: 'Outset',
                  value: 'outset'
                },
                {
                  text: 'None',
                  value: 'none'
                },
                {
                  text: 'Hidden',
                  value: 'hidden'
                }
              ]
            },
            {
              label: 'Border color',
              type: 'colorbox',
              name: 'borderColor',
              onaction: createColorPickAction()
            },
            {
              label: 'Background color',
              type: 'colorbox',
              name: 'backgroundColor',
              onaction: createColorPickAction()
            }
          ]
        }
      ]
    };
  };
  var $_5a9hleotjm0og0sp = {
    createStyleForm: createStyleForm,
    buildListItems: buildListItems,
    updateStyleField: updateStyleField,
    extractAdvancedStyles: extractAdvancedStyles,
    updateAdvancedFields: updateAdvancedFields,
    syncAdvancedStyleFields: syncAdvancedStyleFields
  };

  var updateStyles = function (elm, cssText) {
    delete elm.dataset.mceStyle;
    elm.style.cssText += ';' + cssText;
  };
  var extractDataFromElement = function (editor, elm) {
    var dom = editor.dom;
    var data = {
      width: dom.getStyle(elm, 'width') || dom.getAttrib(elm, 'width'),
      height: dom.getStyle(elm, 'height') || dom.getAttrib(elm, 'height'),
      scope: dom.getAttrib(elm, 'scope'),
      class: dom.getAttrib(elm, 'class'),
      type: elm.nodeName.toLowerCase(),
      style: '',
      align: '',
      valign: ''
    };
    global$1.each('left center right'.split(' '), function (name) {
      if (editor.formatter.matchNode(elm, 'align' + name)) {
        data.align = name;
      }
    });
    global$1.each('top middle bottom'.split(' '), function (name) {
      if (editor.formatter.matchNode(elm, 'valign' + name)) {
        data.valign = name;
      }
    });
    if (hasAdvancedCellTab(editor)) {
      global$1.extend(data, $_5a9hleotjm0og0sp.extractAdvancedStyles(dom, elm));
    }
    return data;
  };
  var onSubmitCellForm = function (editor, cells, evt) {
    var dom = editor.dom;
    var data;
    function setAttrib(elm, name, value) {
      if (cells.length === 1 || value) {
        dom.setAttrib(elm, name, value);
      }
    }
    function setStyle(elm, name, value) {
      if (cells.length === 1 || value) {
        dom.setStyle(elm, name, value);
      }
    }
    if (hasAdvancedCellTab(editor)) {
      $_5a9hleotjm0og0sp.syncAdvancedStyleFields(editor, evt);
    }
    data = evt.control.rootControl.toJSON();
    editor.undoManager.transact(function () {
      global$1.each(cells, function (cellElm) {
        setAttrib(cellElm, 'scope', data.scope);
        if (cells.length === 1) {
          setAttrib(cellElm, 'style', data.style);
        } else {
          updateStyles(cellElm, data.style);
        }
        setAttrib(cellElm, 'class', data.class);
        setStyle(cellElm, 'width', addSizeSuffix(data.width));
        setStyle(cellElm, 'height', addSizeSuffix(data.height));
        if (data.type && cellElm.nodeName.toLowerCase() !== data.type) {
          cellElm = dom.rename(cellElm, data.type);
        }
        if (cells.length === 1) {
          $_2tjk8hosjm0og0sm.unApplyAlign(editor, cellElm);
          $_2tjk8hosjm0og0sm.unApplyVAlign(editor, cellElm);
        }
        if (data.align) {
          $_2tjk8hosjm0og0sm.applyAlign(editor, cellElm, data.align);
        }
        if (data.valign) {
          $_2tjk8hosjm0og0sm.applyVAlign(editor, cellElm, data.valign);
        }
      });
      editor.focus();
    });
  };
  var open = function (editor) {
    var cellElm, data, classListCtrl, cells = [];
    cells = editor.dom.select('td[data-mce-selected],th[data-mce-selected]');
    cellElm = editor.dom.getParent(editor.selection.getStart(), 'td,th');
    if (!cells.length && cellElm) {
      cells.push(cellElm);
    }
    cellElm = cellElm || cells[0];
    if (!cellElm) {
      return;
    }
    if (cells.length > 1) {
      data = {
        width: '',
        height: '',
        scope: '',
        class: '',
        align: '',
        valign: '',
        style: '',
        type: cellElm.nodeName.toLowerCase()
      };
    } else {
      data = extractDataFromElement(editor, cellElm);
    }
    if (getCellClassList(editor).length > 0) {
      classListCtrl = {
        name: 'class',
        type: 'listbox',
        label: 'Class',
        values: $_5a9hleotjm0og0sp.buildListItems(getCellClassList(editor), function (item) {
          if (item.value) {
            item.textStyle = function () {
              return editor.formatter.getCssText({
                block: 'td',
                classes: [item.value]
              });
            };
          }
        })
      };
    }
    var generalCellForm = {
      type: 'form',
      layout: 'flex',
      direction: 'column',
      labelGapCalc: 'children',
      padding: 0,
      items: [
        {
          type: 'form',
          layout: 'grid',
          columns: 2,
          labelGapCalc: false,
          padding: 0,
          defaults: {
            type: 'textbox',
            maxWidth: 50
          },
          items: [
            {
              label: 'Width',
              name: 'width',
              onchange: curry($_5a9hleotjm0og0sp.updateStyleField, editor)
            },
            {
              label: 'Height',
              name: 'height',
              onchange: curry($_5a9hleotjm0og0sp.updateStyleField, editor)
            },
            {
              label: 'Cell type',
              name: 'type',
              type: 'listbox',
              text: 'None',
              minWidth: 90,
              maxWidth: null,
              values: [
                {
                  text: 'Cell',
                  value: 'td'
                },
                {
                  text: 'Header cell',
                  value: 'th'
                }
              ]
            },
            {
              label: 'Scope',
              name: 'scope',
              type: 'listbox',
              text: 'None',
              minWidth: 90,
              maxWidth: null,
              values: [
                {
                  text: 'None',
                  value: ''
                },
                {
                  text: 'Row',
                  value: 'row'
                },
                {
                  text: 'Column',
                  value: 'col'
                },
                {
                  text: 'Row group',
                  value: 'rowgroup'
                },
                {
                  text: 'Column group',
                  value: 'colgroup'
                }
              ]
            },
            {
              label: 'H Align',
              name: 'align',
              type: 'listbox',
              text: 'None',
              minWidth: 90,
              maxWidth: null,
              values: [
                {
                  text: 'None',
                  value: ''
                },
                {
                  text: 'Left',
                  value: 'left'
                },
                {
                  text: 'Center',
                  value: 'center'
                },
                {
                  text: 'Right',
                  value: 'right'
                }
              ]
            },
            {
              label: 'V Align',
              name: 'valign',
              type: 'listbox',
              text: 'None',
              minWidth: 90,
              maxWidth: null,
              values: [
                {
                  text: 'None',
                  value: ''
                },
                {
                  text: 'Top',
                  value: 'top'
                },
                {
                  text: 'Middle',
                  value: 'middle'
                },
                {
                  text: 'Bottom',
                  value: 'bottom'
                }
              ]
            }
          ]
        },
        classListCtrl
      ]
    };
    if (hasAdvancedCellTab(editor)) {
      editor.windowManager.open({
        title: 'Cell properties',
        bodyType: 'tabpanel',
        data: data,
        body: [
          {
            title: 'General',
            type: 'form',
            items: generalCellForm
          },
          $_5a9hleotjm0og0sp.createStyleForm(editor)
        ],
        onsubmit: curry(onSubmitCellForm, editor, cells)
      });
    } else {
      editor.windowManager.open({
        title: 'Cell properties',
        data: data,
        body: generalCellForm,
        onsubmit: curry(onSubmitCellForm, editor, cells)
      });
    }
  };
  var $_2jbnrjorjm0og0sf = { open: open };

  var extractDataFromElement$1 = function (editor, elm) {
    var dom = editor.dom;
    var data = {
      height: dom.getStyle(elm, 'height') || dom.getAttrib(elm, 'height'),
      scope: dom.getAttrib(elm, 'scope'),
      class: dom.getAttrib(elm, 'class'),
      align: '',
      style: '',
      type: elm.parentNode.nodeName.toLowerCase()
    };
    global$1.each('left center right'.split(' '), function (name) {
      if (editor.formatter.matchNode(elm, 'align' + name)) {
        data.align = name;
      }
    });
    if (hasAdvancedRowTab(editor)) {
      global$1.extend(data, $_5a9hleotjm0og0sp.extractAdvancedStyles(dom, elm));
    }
    return data;
  };
  var switchRowType = function (dom, rowElm, toType) {
    var tableElm = dom.getParent(rowElm, 'table');
    var oldParentElm = rowElm.parentNode;
    var parentElm = dom.select(toType, tableElm)[0];
    if (!parentElm) {
      parentElm = dom.create(toType);
      if (tableElm.firstChild) {
        if (tableElm.firstChild.nodeName === 'CAPTION') {
          dom.insertAfter(parentElm, tableElm.firstChild);
        } else {
          tableElm.insertBefore(parentElm, tableElm.firstChild);
        }
      } else {
        tableElm.appendChild(parentElm);
      }
    }
    parentElm.appendChild(rowElm);
    if (!oldParentElm.hasChildNodes()) {
      dom.remove(oldParentElm);
    }
  };
  function onSubmitRowForm(editor, rows, oldData, evt) {
    var dom = editor.dom;
    function setAttrib(elm, name, value) {
      if (rows.length === 1 || value) {
        dom.setAttrib(elm, name, value);
      }
    }
    function setStyle(elm, name, value) {
      if (rows.length === 1 || value) {
        dom.setStyle(elm, name, value);
      }
    }
    if (hasAdvancedRowTab(editor)) {
      $_5a9hleotjm0og0sp.syncAdvancedStyleFields(editor, evt);
    }
    var data = evt.control.rootControl.toJSON();
    editor.undoManager.transact(function () {
      global$1.each(rows, function (rowElm) {
        setAttrib(rowElm, 'scope', data.scope);
        setAttrib(rowElm, 'style', data.style);
        setAttrib(rowElm, 'class', data.class);
        setStyle(rowElm, 'height', addSizeSuffix(data.height));
        if (data.type !== rowElm.parentNode.nodeName.toLowerCase()) {
          switchRowType(editor.dom, rowElm, data.type);
        }
        if (data.align !== oldData.align) {
          $_2tjk8hosjm0og0sm.unApplyAlign(editor, rowElm);
          $_2tjk8hosjm0og0sm.applyAlign(editor, rowElm, data.align);
        }
      });
      editor.focus();
    });
  }
  var open$1 = function (editor) {
    var dom = editor.dom;
    var tableElm, cellElm, rowElm, classListCtrl, data;
    var rows = [];
    var generalRowForm;
    tableElm = dom.getParent(editor.selection.getStart(), 'table');
    cellElm = dom.getParent(editor.selection.getStart(), 'td,th');
    global$1.each(tableElm.rows, function (row) {
      global$1.each(row.cells, function (cell) {
        if (dom.getAttrib(cell, 'data-mce-selected') || cell === cellElm) {
          rows.push(row);
          return false;
        }
      });
    });
    rowElm = rows[0];
    if (!rowElm) {
      return;
    }
    if (rows.length > 1) {
      data = {
        height: '',
        scope: '',
        style: '',
        class: '',
        align: '',
        type: rowElm.parentNode.nodeName.toLowerCase()
      };
    } else {
      data = extractDataFromElement$1(editor, rowElm);
    }
    if (getRowClassList(editor).length > 0) {
      classListCtrl = {
        name: 'class',
        type: 'listbox',
        label: 'Class',
        values: $_5a9hleotjm0og0sp.buildListItems(getRowClassList(editor), function (item) {
          if (item.value) {
            item.textStyle = function () {
              return editor.formatter.getCssText({
                block: 'tr',
                classes: [item.value]
              });
            };
          }
        })
      };
    }
    generalRowForm = {
      type: 'form',
      columns: 2,
      padding: 0,
      defaults: { type: 'textbox' },
      items: [
        {
          type: 'listbox',
          name: 'type',
          label: 'Row type',
          text: 'Header',
          maxWidth: null,
          values: [
            {
              text: 'Header',
              value: 'thead'
            },
            {
              text: 'Body',
              value: 'tbody'
            },
            {
              text: 'Footer',
              value: 'tfoot'
            }
          ]
        },
        {
          type: 'listbox',
          name: 'align',
          label: 'Alignment',
          text: 'None',
          maxWidth: null,
          values: [
            {
              text: 'None',
              value: ''
            },
            {
              text: 'Left',
              value: 'left'
            },
            {
              text: 'Center',
              value: 'center'
            },
            {
              text: 'Right',
              value: 'right'
            }
          ]
        },
        {
          label: 'Height',
          name: 'height'
        },
        classListCtrl
      ]
    };
    if (hasAdvancedRowTab(editor)) {
      editor.windowManager.open({
        title: 'Row properties',
        data: data,
        bodyType: 'tabpanel',
        body: [
          {
            title: 'General',
            type: 'form',
            items: generalRowForm
          },
          $_5a9hleotjm0og0sp.createStyleForm(editor)
        ],
        onsubmit: curry(onSubmitRowForm, editor, rows, data)
      });
    } else {
      editor.windowManager.open({
        title: 'Row properties',
        data: data,
        body: generalRowForm,
        onsubmit: curry(onSubmitRowForm, editor, rows, data)
      });
    }
  };
  var $_35cn7zoujm0og0sx = { open: open$1 };

  var global$2 = tinymce.util.Tools.resolve('tinymce.Env');

  var DefaultRenderOptions = {
    styles: {
      'border-collapse': 'collapse',
      width: '100%'
    },
    attributes: { border: '1' },
    percentages: true
  };
  var makeTable = function () {
    return Element$$1.fromTag('table');
  };
  var tableBody = function () {
    return Element$$1.fromTag('tbody');
  };
  var tableRow = function () {
    return Element$$1.fromTag('tr');
  };
  var tableHeaderCell = function () {
    return Element$$1.fromTag('th');
  };
  var tableCell = function () {
    return Element$$1.fromTag('td');
  };
  var render$1 = function (rows, columns, rowHeaders, columnHeaders, renderOpts) {
    if (renderOpts === void 0) {
      renderOpts = DefaultRenderOptions;
    }
    var table = makeTable();
    $_ekl9pwmajm0og09e.setAll(table, renderOpts.styles);
    $_6aylb4m1jm0og07w.setAll(table, renderOpts.attributes);
    var tbody = tableBody();
    $_5w7xramcjm0og09t.append(table, tbody);
    var trs = [];
    for (var i = 0; i < rows; i++) {
      var tr = tableRow();
      for (var j = 0; j < columns; j++) {
        var td = i < rowHeaders || j < columnHeaders ? tableHeaderCell() : tableCell();
        if (j < columnHeaders) {
          $_6aylb4m1jm0og07w.set(td, 'scope', 'row');
        }
        if (i < rowHeaders) {
          $_6aylb4m1jm0og07w.set(td, 'scope', 'col');
        }
        $_5w7xramcjm0og09t.append(td, Element$$1.fromTag('br'));
        if (renderOpts.percentages) {
          $_ekl9pwmajm0og09e.set(td, 'width', 100 / columns + '%');
        }
        $_5w7xramcjm0og09t.append(tr, td);
      }
      trs.push(tr);
    }
    $_e8rgatmejm0og09y.append(tbody, trs);
    return table;
  };

  var get$7 = function (element) {
    return element.dom().innerHTML;
  };
  var set$5 = function (element, content) {
    var owner = $_d421p9lijm0og05w.owner(element);
    var docDom = owner.dom();
    var fragment = Element$$1.fromDom(docDom.createDocumentFragment());
    var contentElements = $_yhkg3mljm0og0bf.fromHtml(content, docDom);
    $_e8rgatmejm0og09y.append(fragment, contentElements);
    $_7uuw85mdjm0og09v.empty(element);
    $_5w7xramcjm0og09t.append(element, fragment);
  };
  var getOuter$2 = function (element) {
    var container = Element$$1.fromTag('div');
    var clone = Element$$1.fromDom(element.dom().cloneNode(true));
    $_5w7xramcjm0og09t.append(container, clone);
    return get$7(container);
  };
  var $_m9i68p0jm0og0uf = {
    get: get$7,
    set: set$5,
    getOuter: getOuter$2
  };

  var placeCaretInCell = function (editor, cell) {
    editor.selection.select(cell.dom(), true);
    editor.selection.collapse(true);
  };
  var selectFirstCellInTable = function (editor, tableElm) {
    $_nsz8xm6jm0og08h.descendant(tableElm, 'td,th').each(curry(placeCaretInCell, editor));
  };
  var fireEvents = function (editor, table) {
    each($_1wzcn0m3jm0og087.descendants(table, 'tr'), function (row) {
      fireNewRow(editor, row.dom());
      each($_1wzcn0m3jm0og087.descendants(row, 'th,td'), function (cell) {
        fireNewCell(editor, cell.dom());
      });
    });
  };
  var isPercentage = function (width) {
    return isString(width) && width.indexOf('%') !== -1;
  };
  var insert$1 = function (editor, columns, rows) {
    var defaultStyles = getDefaultStyles(editor);
    var options = {
      styles: defaultStyles,
      attributes: getDefaultAttributes(editor),
      percentages: isPercentage(defaultStyles.width) && !isPixelsForced(editor)
    };
    var table = render$1(rows, columns, 0, 0, options);
    $_6aylb4m1jm0og07w.set(table, 'data-mce-id', '__mce');
    var html = $_m9i68p0jm0og0uf.getOuter(table);
    editor.insertContent(html);
    return $_nsz8xm6jm0og08h.descendant(getBody$1(editor), 'table[data-mce-id="__mce"]').map(function (table) {
      if (isPixelsForced(editor)) {
        $_ekl9pwmajm0og09e.set(table, 'width', $_ekl9pwmajm0og09e.get(table, 'width'));
      }
      $_6aylb4m1jm0og07w.remove(table, 'data-mce-id');
      fireEvents(editor, table);
      selectFirstCellInTable(editor, table);
      return table.dom();
    }).getOr(null);
  };
  var $_3hzk92oxjm0og0te = { insert: insert$1 };

  function styleTDTH(dom, elm, name, value) {
    if (elm.tagName === 'TD' || elm.tagName === 'TH') {
      dom.setStyle(elm, name, value);
    } else {
      if (elm.children) {
        for (var i = 0; i < elm.children.length; i++) {
          styleTDTH(dom, elm.children[i], name, value);
        }
      }
    }
  }
  var extractDataFromElement$2 = function (editor, tableElm) {
    var dom = editor.dom;
    var data = {
      width: dom.getStyle(tableElm, 'width') || dom.getAttrib(tableElm, 'width'),
      height: dom.getStyle(tableElm, 'height') || dom.getAttrib(tableElm, 'height'),
      cellspacing: dom.getStyle(tableElm, 'border-spacing') || dom.getAttrib(tableElm, 'cellspacing'),
      cellpadding: dom.getAttrib(tableElm, 'data-mce-cell-padding') || dom.getAttrib(tableElm, 'cellpadding') || $_2tjk8hosjm0og0sm.getTDTHOverallStyle(editor.dom, tableElm, 'padding'),
      border: dom.getAttrib(tableElm, 'data-mce-border') || dom.getAttrib(tableElm, 'border') || $_2tjk8hosjm0og0sm.getTDTHOverallStyle(editor.dom, tableElm, 'border'),
      borderColor: dom.getAttrib(tableElm, 'data-mce-border-color'),
      caption: !!dom.select('caption', tableElm)[0],
      class: dom.getAttrib(tableElm, 'class')
    };
    global$1.each('left center right'.split(' '), function (name) {
      if (editor.formatter.matchNode(tableElm, 'align' + name)) {
        data.align = name;
      }
    });
    if (hasAdvancedTableTab(editor)) {
      global$1.extend(data, $_5a9hleotjm0og0sp.extractAdvancedStyles(dom, tableElm));
    }
    return data;
  };
  var applyDataToElement = function (editor, tableElm, data) {
    var dom = editor.dom;
    var attrs = {};
    var styles = {};
    attrs.class = data.class;
    styles.height = addSizeSuffix(data.height);
    if (dom.getAttrib(tableElm, 'width') && !shouldStyleWithCss(editor)) {
      attrs.width = removePxSuffix(data.width);
    } else {
      styles.width = addSizeSuffix(data.width);
    }
    if (shouldStyleWithCss(editor)) {
      styles['border-width'] = addSizeSuffix(data.border);
      styles['border-spacing'] = addSizeSuffix(data.cellspacing);
      global$1.extend(attrs, {
        'data-mce-border-color': data.borderColor,
        'data-mce-cell-padding': data.cellpadding,
        'data-mce-border': data.border
      });
    } else {
      global$1.extend(attrs, {
        border: data.border,
        cellpadding: data.cellpadding,
        cellspacing: data.cellspacing
      });
    }
    if (shouldStyleWithCss(editor)) {
      if (tableElm.children) {
        for (var i = 0; i < tableElm.children.length; i++) {
          styleTDTH(dom, tableElm.children[i], {
            'border-width': addSizeSuffix(data.border),
            'border-color': data.borderColor,
            'padding': addSizeSuffix(data.cellpadding)
          });
        }
      }
    }
    if (data.style) {
      global$1.extend(styles, dom.parseStyle(data.style));
    } else {
      styles = global$1.extend({}, dom.parseStyle(dom.getAttrib(tableElm, 'style')), styles);
    }
    attrs.style = dom.serializeStyle(styles);
    dom.setAttribs(tableElm, attrs);
  };
  var onSubmitTableForm = function (editor, tableElm, evt) {
    var dom = editor.dom;
    var captionElm;
    var data;
    if (hasAdvancedTableTab(editor)) {
      $_5a9hleotjm0og0sp.syncAdvancedStyleFields(editor, evt);
    }
    data = evt.control.rootControl.toJSON();
    if (data.class === false) {
      delete data.class;
    }
    editor.undoManager.transact(function () {
      if (!tableElm) {
        tableElm = $_3hzk92oxjm0og0te.insert(editor, data.cols || 1, data.rows || 1);
      }
      applyDataToElement(editor, tableElm, data);
      captionElm = dom.select('caption', tableElm)[0];
      if (captionElm && !data.caption) {
        dom.remove(captionElm);
      }
      if (!captionElm && data.caption) {
        captionElm = dom.create('caption');
        captionElm.innerHTML = !global$2.ie ? '<br data-mce-bogus="1"/>' : '\xA0';
        tableElm.insertBefore(captionElm, tableElm.firstChild);
      }
      $_2tjk8hosjm0og0sm.unApplyAlign(editor, tableElm);
      if (data.align) {
        $_2tjk8hosjm0og0sm.applyAlign(editor, tableElm, data.align);
      }
      editor.focus();
      editor.addVisual();
    });
  };
  var open$2 = function (editor, isProps) {
    var dom = editor.dom;
    var tableElm, colsCtrl, rowsCtrl, classListCtrl, data = {}, generalTableForm;
    if (isProps === true) {
      tableElm = dom.getParent(editor.selection.getStart(), 'table');
      if (tableElm) {
        data = extractDataFromElement$2(editor, tableElm);
      }
    } else {
      colsCtrl = {
        label: 'Cols',
        name: 'cols'
      };
      rowsCtrl = {
        label: 'Rows',
        name: 'rows'
      };
    }
    if (getTableClassList(editor).length > 0) {
      if (data.class) {
        data.class = data.class.replace(/\s*mce\-item\-table\s*/g, '');
      }
      classListCtrl = {
        name: 'class',
        type: 'listbox',
        label: 'Class',
        values: $_5a9hleotjm0og0sp.buildListItems(getTableClassList(editor), function (item) {
          if (item.value) {
            item.textStyle = function () {
              return editor.formatter.getCssText({
                block: 'table',
                classes: [item.value]
              });
            };
          }
        })
      };
    }
    generalTableForm = {
      type: 'form',
      layout: 'flex',
      direction: 'column',
      labelGapCalc: 'children',
      padding: 0,
      items: [
        {
          type: 'form',
          labelGapCalc: false,
          padding: 0,
          layout: 'grid',
          columns: 2,
          defaults: {
            type: 'textbox',
            maxWidth: 50
          },
          items: hasAppearanceOptions(editor) ? [
            colsCtrl,
            rowsCtrl,
            {
              label: 'Width',
              name: 'width',
              onchange: curry($_5a9hleotjm0og0sp.updateStyleField, editor)
            },
            {
              label: 'Height',
              name: 'height',
              onchange: curry($_5a9hleotjm0og0sp.updateStyleField, editor)
            },
            {
              label: 'Cell spacing',
              name: 'cellspacing'
            },
            {
              label: 'Cell padding',
              name: 'cellpadding'
            },
            {
              label: 'Border',
              name: 'border'
            },
            {
              label: 'Caption',
              name: 'caption',
              type: 'checkbox'
            }
          ] : [
            colsCtrl,
            rowsCtrl,
            {
              label: 'Width',
              name: 'width',
              onchange: curry($_5a9hleotjm0og0sp.updateStyleField, editor)
            },
            {
              label: 'Height',
              name: 'height',
              onchange: curry($_5a9hleotjm0og0sp.updateStyleField, editor)
            }
          ]
        },
        {
          label: 'Alignment',
          name: 'align',
          type: 'listbox',
          text: 'None',
          values: [
            {
              text: 'None',
              value: ''
            },
            {
              text: 'Left',
              value: 'left'
            },
            {
              text: 'Center',
              value: 'center'
            },
            {
              text: 'Right',
              value: 'right'
            }
          ]
        },
        classListCtrl
      ]
    };
    if (hasAdvancedTableTab(editor)) {
      editor.windowManager.open({
        title: 'Table properties',
        data: data,
        bodyType: 'tabpanel',
        body: [
          {
            title: 'General',
            type: 'form',
            items: generalTableForm
          },
          $_5a9hleotjm0og0sp.createStyleForm(editor)
        ],
        onsubmit: curry(onSubmitTableForm, editor, tableElm)
      });
    } else {
      editor.windowManager.open({
        title: 'Table properties',
        data: data,
        body: generalTableForm,
        onsubmit: curry(onSubmitTableForm, editor, tableElm)
      });
    }
  };
  var $_fc21o0ovjm0og0t4 = { open: open$2 };

  var each$3 = global$1.each;
  var registerCommands = function (editor, actions, cellSelection, selections, clipboardRows) {
    var isRoot = getIsRoot(editor);
    var eraseTable = function () {
      var cell = Element$$1.fromDom(editor.dom.getParent(editor.selection.getStart(), 'th,td'));
      var table = $_d02uidlcjm0og041.table(cell, isRoot);
      table.filter(not(isRoot)).each(function (table) {
        var cursor = Element$$1.fromText('');
        $_5w7xramcjm0og09t.after(table, cursor);
        $_7uuw85mdjm0og09v.remove(table);
        var rng = editor.dom.createRng();
        rng.setStart(cursor.dom(), 0);
        rng.setEnd(cursor.dom(), 0);
        editor.selection.setRng(rng);
      });
    };
    var getSelectionStartCell = function () {
      return Element$$1.fromDom(editor.dom.getParent(editor.selection.getStart(), 'th,td'));
    };
    var getTableFromCell = function (cell) {
      return $_d02uidlcjm0og041.table(cell, isRoot);
    };
    var getSize = function (table) {
      return {
        width: getPixelWidth$1(table.dom()),
        height: getPixelWidth$1(table.dom())
      };
    };
    var resizeChange = function (editor, oldSize, table) {
      var newSize = getSize(table);
      if (oldSize.width !== newSize.width || oldSize.height !== newSize.height) {
        fireObjectResizeStart(editor, table.dom(), oldSize.width, oldSize.height);
        fireObjectResized(editor, table.dom(), newSize.width, newSize.height);
      }
    };
    var actOnSelection = function (execute) {
      var cell = getSelectionStartCell();
      var table = getTableFromCell(cell);
      table.each(function (table) {
        var targets = $_geipzymmjm0og0bk.forMenu(selections, table, cell);
        var beforeSize = getSize(table);
        execute(table, targets).each(function (rng) {
          resizeChange(editor, beforeSize, table);
          editor.selection.setRng(rng);
          editor.focus();
          cellSelection.clear(table);
          removeDataStyle(table);
        });
      });
    };
    var copyRowSelection = function (execute) {
      var cell = getSelectionStartCell();
      var table = getTableFromCell(cell);
      return table.bind(function (table) {
        var doc = Element$$1.fromDom(editor.getDoc());
        var targets = $_geipzymmjm0og0bk.forMenu(selections, table, cell);
        var generators = $_1h0ajrmfjm0og0a3.cellOperations(noop, doc, Option.none());
        return $_7kzo43opjm0og0sb.copyRows(table, targets, generators);
      });
    };
    var pasteOnSelection = function (execute) {
      clipboardRows.get().each(function (rows) {
        var clonedRows = map(rows, function (row) {
          return $_cbo10gmgjm0og0ay.deep(row);
        });
        var cell = getSelectionStartCell();
        var table = getTableFromCell(cell);
        table.bind(function (table) {
          var doc = Element$$1.fromDom(editor.getDoc());
          var generators = $_1h0ajrmfjm0og0a3.paste(doc);
          var targets = $_geipzymmjm0og0bk.pasteRows(selections, table, cell, clonedRows, generators);
          execute(table, targets).each(function (rng) {
            editor.selection.setRng(rng);
            editor.focus();
            cellSelection.clear(table);
          });
        });
      });
    };
    each$3({
      mceTableSplitCells: function () {
        actOnSelection(actions.unmergeCells);
      },
      mceTableMergeCells: function () {
        actOnSelection(actions.mergeCells);
      },
      mceTableInsertRowBefore: function () {
        actOnSelection(actions.insertRowsBefore);
      },
      mceTableInsertRowAfter: function () {
        actOnSelection(actions.insertRowsAfter);
      },
      mceTableInsertColBefore: function () {
        actOnSelection(actions.insertColumnsBefore);
      },
      mceTableInsertColAfter: function () {
        actOnSelection(actions.insertColumnsAfter);
      },
      mceTableDeleteCol: function () {
        actOnSelection(actions.deleteColumn);
      },
      mceTableDeleteRow: function () {
        actOnSelection(actions.deleteRow);
      },
      mceTableCutRow: function (grid) {
        clipboardRows.set(copyRowSelection());
        actOnSelection(actions.deleteRow);
      },
      mceTableCopyRow: function (grid) {
        clipboardRows.set(copyRowSelection());
      },
      mceTablePasteRowBefore: function (grid) {
        pasteOnSelection(actions.pasteRowsBefore);
      },
      mceTablePasteRowAfter: function (grid) {
        pasteOnSelection(actions.pasteRowsAfter);
      },
      mceTableDelete: eraseTable
    }, function (func, name) {
      editor.addCommand(name, func);
    });
    each$3({
      mceInsertTable: curry($_fc21o0ovjm0og0t4.open, editor),
      mceTableProps: curry($_fc21o0ovjm0og0t4.open, editor, true),
      mceTableRowProps: curry($_35cn7zoujm0og0sx.open, editor),
      mceTableCellProps: curry($_2jbnrjorjm0og0sf.open, editor)
    }, function (func, name) {
      editor.addCommand(name, function (ui, val) {
        func(val);
      });
    });
  };
  var $_f1b6u0oojm0og0rn = { registerCommands: registerCommands };

  var only$1 = function (element) {
    var parent = Option.from(element.dom().documentElement).map(Element$$1.fromDom).getOr(element);
    return {
      parent: constant(parent),
      view: constant(element),
      origin: constant(Position(0, 0))
    };
  };
  var detached = function (editable, chrome) {
    var origin = curry($_3jf8s8nejm0og0ib.absolute, chrome);
    return {
      parent: constant(chrome),
      view: constant(editable),
      origin: origin
    };
  };
  var body$1 = function (editable, chrome) {
    return {
      parent: constant(chrome),
      view: constant(editable),
      origin: constant(Position(0, 0))
    };
  };
  var $_89tx7rp2jm0og0uu = {
    only: only$1,
    detached: detached,
    body: body$1
  };

  function Event (fields) {
    var struct = Immutable.apply(null, fields);
    var handlers = [];
    var bind$$1 = function (handler) {
      if (handler === undefined) {
        throw 'Event bind error: undefined handler';
      }
      handlers.push(handler);
    };
    var unbind = function (handler) {
      handlers = filter(handlers, function (h) {
        return h !== handler;
      });
    };
    var trigger = function () {
      var event = struct.apply(null, arguments);
      each(handlers, function (handler) {
        handler(event);
      });
    };
    return {
      bind: bind$$1,
      unbind: unbind,
      trigger: trigger
    };
  }

  var create = function (typeDefs) {
    var registry = map$1(typeDefs, function (event) {
      return {
        bind: event.bind,
        unbind: event.unbind
      };
    });
    var trigger = map$1(typeDefs, function (event) {
      return event.trigger;
    });
    return {
      registry: registry,
      trigger: trigger
    };
  };
  var $_41b46wp5jm0og0vh = { create: create };

  var mode = exactly([
    'compare',
    'extract',
    'mutate',
    'sink'
  ]);
  var sink = exactly([
    'element',
    'start',
    'stop',
    'destroy'
  ]);
  var api$3 = exactly([
    'forceDrop',
    'drop',
    'move',
    'delayDrop'
  ]);
  var $_3wgu15p9jm0og0wx = {
    mode: mode,
    sink: sink,
    api: api$3
  };

  var styles$1 = css('ephox-dragster');
  var $_frzjxkpbjm0og0xd = { resolve: styles$1.resolve };

  function Blocker (options) {
    var settings = merge$1({ 'layerClass': $_frzjxkpbjm0og0xd.resolve('blocker') }, options);
    var div = Element$$1.fromTag('div');
    $_6aylb4m1jm0og07w.set(div, 'role', 'presentation');
    $_ekl9pwmajm0og09e.setAll(div, {
      position: 'fixed',
      left: '0px',
      top: '0px',
      width: '100%',
      height: '100%'
    });
    $_dypcv1o2jm0og0od.add(div, $_frzjxkpbjm0og0xd.resolve('blocker'));
    $_dypcv1o2jm0og0od.add(div, settings.layerClass);
    var element = function () {
      return div;
    };
    var destroy = function () {
      $_7uuw85mdjm0og09v.remove(div);
    };
    return {
      element: element,
      destroy: destroy
    };
  }

  var mkEvent = function (target, x, y, stop, prevent, kill, raw) {
    return {
      'target': constant(target),
      'x': constant(x),
      'y': constant(y),
      'stop': stop,
      'prevent': prevent,
      'kill': kill,
      'raw': constant(raw)
    };
  };
  var handle = function (filter, handler) {
    return function (rawEvent) {
      if (!filter(rawEvent))
        return;
      var target = Element$$1.fromDom(rawEvent.target);
      var stop = function () {
        rawEvent.stopPropagation();
      };
      var prevent = function () {
        rawEvent.preventDefault();
      };
      var kill = compose(prevent, stop);
      var evt = mkEvent(target, rawEvent.clientX, rawEvent.clientY, stop, prevent, kill, rawEvent);
      handler(evt);
    };
  };
  var binder = function (element, event, filter, handler, useCapture) {
    var wrapped = handle(filter, handler);
    element.dom().addEventListener(event, wrapped, useCapture);
    return { unbind: curry(unbind, element, event, wrapped, useCapture) };
  };
  var bind$1 = function (element, event, filter, handler) {
    return binder(element, event, filter, handler, false);
  };
  var capture = function (element, event, filter, handler) {
    return binder(element, event, filter, handler, true);
  };
  var unbind = function (element, event, handler, useCapture) {
    element.dom().removeEventListener(event, handler, useCapture);
  };
  var $_5j09p3pdjm0og0xn = {
    bind: bind$1,
    capture: capture
  };

  var filter$1 = constant(true);
  var bind$2 = function (element, event, handler) {
    return $_5j09p3pdjm0og0xn.bind(element, event, filter$1, handler);
  };
  var capture$1 = function (element, event, handler) {
    return $_5j09p3pdjm0og0xn.capture(element, event, filter$1, handler);
  };
  var $_3ifvwepcjm0og0xg = {
    bind: bind$2,
    capture: capture$1
  };

  var compare = function (old, nu) {
    return Position(nu.left() - old.left(), nu.top() - old.top());
  };
  var extract$1 = function (event) {
    return Option.some(Position(event.x(), event.y()));
  };
  var mutate$1 = function (mutation, info) {
    mutation.mutate(info.left(), info.top());
  };
  var sink$1 = function (dragApi, settings) {
    var blocker = Blocker(settings);
    var mdown = $_3ifvwepcjm0og0xg.bind(blocker.element(), 'mousedown', dragApi.forceDrop);
    var mup = $_3ifvwepcjm0og0xg.bind(blocker.element(), 'mouseup', dragApi.drop);
    var mmove = $_3ifvwepcjm0og0xg.bind(blocker.element(), 'mousemove', dragApi.move);
    var mout = $_3ifvwepcjm0og0xg.bind(blocker.element(), 'mouseout', dragApi.delayDrop);
    var destroy = function () {
      blocker.destroy();
      mup.unbind();
      mmove.unbind();
      mout.unbind();
      mdown.unbind();
    };
    var start = function (parent) {
      $_5w7xramcjm0og09t.append(parent, blocker.element());
    };
    var stop = function () {
      $_7uuw85mdjm0og09v.remove(blocker.element());
    };
    return $_3wgu15p9jm0og0wx.sink({
      element: blocker.element,
      start: start,
      stop: stop,
      destroy: destroy
    });
  };
  var MouseDrag = $_3wgu15p9jm0og0wx.mode({
    compare: compare,
    extract: extract$1,
    sink: sink$1,
    mutate: mutate$1
  });

  function InDrag () {
    var previous = Option.none();
    var reset = function () {
      previous = Option.none();
    };
    var update = function (mode, nu) {
      var result = previous.map(function (old) {
        return mode.compare(old, nu);
      });
      previous = Option.some(nu);
      return result;
    };
    var onEvent = function (event, mode) {
      var dataOption = mode.extract(event);
      dataOption.each(function (data) {
        var offset = update(mode, data);
        offset.each(function (d) {
          events.trigger.move(d);
        });
      });
    };
    var events = $_41b46wp5jm0og0vh.create({ move: Event(['info']) });
    return {
      onEvent: onEvent,
      reset: reset,
      events: events.registry
    };
  }

  function NoDrag (anchor) {
    var onEvent = function (event, mode) {
    };
    return {
      onEvent: onEvent,
      reset: noop
    };
  }

  function Movement () {
    var noDragState = NoDrag();
    var inDragState = InDrag();
    var dragState = noDragState;
    var on = function () {
      dragState.reset();
      dragState = inDragState;
    };
    var off = function () {
      dragState.reset();
      dragState = noDragState;
    };
    var onEvent = function (event, mode) {
      dragState.onEvent(event, mode);
    };
    var isOn = function () {
      return dragState === inDragState;
    };
    return {
      on: on,
      off: off,
      isOn: isOn,
      onEvent: onEvent,
      events: inDragState.events
    };
  }

  var last$3 = function (fn, rate) {
    var timer = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };
    var throttle = function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (timer !== null)
        clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(null, args);
        timer = null;
      }, rate);
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };

  var setup = function (mutation, mode, settings) {
    var active = false;
    var events = $_41b46wp5jm0og0vh.create({
      start: Event([]),
      stop: Event([])
    });
    var movement = Movement();
    var drop = function () {
      sink.stop();
      if (movement.isOn()) {
        movement.off();
        events.trigger.stop();
      }
    };
    var throttledDrop = last$3(drop, 200);
    var go = function (parent) {
      sink.start(parent);
      movement.on();
      events.trigger.start();
    };
    var mousemove = function (event, ui) {
      throttledDrop.cancel();
      movement.onEvent(event, mode);
    };
    movement.events.move.bind(function (event) {
      mode.mutate(mutation, event.info());
    });
    var on = function () {
      active = true;
    };
    var off = function () {
      active = false;
    };
    var runIfActive = function (f) {
      return function () {
        var args = Array.prototype.slice.call(arguments, 0);
        if (active) {
          return f.apply(null, args);
        }
      };
    };
    var sink = mode.sink($_3wgu15p9jm0og0wx.api({
      forceDrop: drop,
      drop: runIfActive(drop),
      move: runIfActive(mousemove),
      delayDrop: runIfActive(throttledDrop.throttle)
    }), settings);
    var destroy = function () {
      sink.destroy();
    };
    return {
      element: sink.element,
      go: go,
      on: on,
      off: off,
      destroy: destroy,
      events: events.registry
    };
  };
  var $_cynq2xpejm0og0xs = { setup: setup };

  var transform$1 = function (mutation, options) {
    var settings = options !== undefined ? options : {};
    var mode = settings.mode !== undefined ? settings.mode : MouseDrag;
    return $_cynq2xpejm0og0xs.setup(mutation, mode, options);
  };
  var $_6taalwp7jm0og0wl = { transform: transform$1 };

  function Mutation () {
    var events = $_41b46wp5jm0og0vh.create({
      'drag': Event([
        'xDelta',
        'yDelta'
      ])
    });
    var mutate = function (x, y) {
      events.trigger.drag(x, y);
    };
    return {
      mutate: mutate,
      events: events.registry
    };
  }

  function BarMutation () {
    var events = $_41b46wp5jm0og0vh.create({
      drag: Event([
        'xDelta',
        'yDelta',
        'target'
      ])
    });
    var target = Option.none();
    var delegate = Mutation();
    delegate.events.drag.bind(function (event) {
      target.each(function (t) {
        events.trigger.drag(event.xDelta(), event.yDelta(), t);
      });
    });
    var assign = function (t) {
      target = Option.some(t);
    };
    var get = function () {
      return target;
    };
    return {
      assign: assign,
      get: get,
      mutate: delegate.mutate,
      events: events.registry
    };
  }

  var any = function (selector) {
    return $_nsz8xm6jm0og08h.first(selector).isSome();
  };
  var ancestor$2 = function (scope, selector, isRoot) {
    return $_nsz8xm6jm0og08h.ancestor(scope, selector, isRoot).isSome();
  };
  var sibling$2 = function (scope, selector) {
    return $_nsz8xm6jm0og08h.sibling(scope, selector).isSome();
  };
  var child$3 = function (scope, selector) {
    return $_nsz8xm6jm0og08h.child(scope, selector).isSome();
  };
  var descendant$2 = function (scope, selector) {
    return $_nsz8xm6jm0og08h.descendant(scope, selector).isSome();
  };
  var closest$2 = function (scope, selector, isRoot) {
    return $_nsz8xm6jm0og08h.closest(scope, selector, isRoot).isSome();
  };
  var $_53wpo1pljm0og0yt = {
    any: any,
    ancestor: ancestor$2,
    sibling: sibling$2,
    child: child$3,
    descendant: descendant$2,
    closest: closest$2
  };

  var resizeBarDragging = $_4ae5x3o0jm0og0o7.resolve('resizer-bar-dragging');
  function BarManager (wire, direction, hdirection) {
    var mutation = BarMutation();
    var resizing = $_6taalwp7jm0og0wl.transform(mutation, {});
    var hoverTable = Option.none();
    var getResizer = function (element, type) {
      return Option.from($_6aylb4m1jm0og07w.get(element, type));
    };
    mutation.events.drag.bind(function (event) {
      getResizer(event.target(), 'data-row').each(function (_dataRow) {
        var currentRow = $_2nsktbogjm0og0qc.getInt(event.target(), 'top');
        $_ekl9pwmajm0og09e.set(event.target(), 'top', currentRow + event.yDelta() + 'px');
      });
      getResizer(event.target(), 'data-column').each(function (_dataCol) {
        var currentCol = $_2nsktbogjm0og0qc.getInt(event.target(), 'left');
        $_ekl9pwmajm0og09e.set(event.target(), 'left', currentCol + event.xDelta() + 'px');
      });
    });
    var getDelta = function (target, direction) {
      var newX = $_2nsktbogjm0og0qc.getInt(target, direction);
      var oldX = parseInt($_6aylb4m1jm0og07w.get(target, 'data-initial-' + direction), 10);
      return newX - oldX;
    };
    resizing.events.stop.bind(function () {
      mutation.get().each(function (target) {
        hoverTable.each(function (table) {
          getResizer(target, 'data-row').each(function (row) {
            var delta = getDelta(target, 'top');
            $_6aylb4m1jm0og07w.remove(target, 'data-initial-top');
            events.trigger.adjustHeight(table, delta, parseInt(row, 10));
          });
          getResizer(target, 'data-column').each(function (column) {
            var delta = getDelta(target, 'left');
            $_6aylb4m1jm0og07w.remove(target, 'data-initial-left');
            events.trigger.adjustWidth(table, delta, parseInt(column, 10));
          });
          $_5ux1manwjm0og0mr.refresh(wire, table, hdirection, direction);
        });
      });
    });
    var handler = function (target, direction) {
      events.trigger.startAdjust();
      mutation.assign(target);
      $_6aylb4m1jm0og07w.set(target, 'data-initial-' + direction, parseInt($_ekl9pwmajm0og09e.get(target, direction), 10));
      $_dypcv1o2jm0og0od.add(target, resizeBarDragging);
      $_ekl9pwmajm0og09e.set(target, 'opacity', '0.2');
      resizing.go(wire.parent());
    };
    var mousedown = $_3ifvwepcjm0og0xg.bind(wire.parent(), 'mousedown', function (event) {
      if ($_5ux1manwjm0og0mr.isRowBar(event.target()))
        handler(event.target(), 'top');
      if ($_5ux1manwjm0og0mr.isColBar(event.target()))
        handler(event.target(), 'left');
    });
    var isRoot = function (e) {
      return $_dql4e0lkjm0og06c.eq(e, wire.view());
    };
    var mouseover = $_3ifvwepcjm0og0xg.bind(wire.view(), 'mouseover', function (event) {
      if ($_8kaujsm2jm0og085.name(event.target()) === 'table' || $_53wpo1pljm0og0yt.closest(event.target(), 'table', isRoot)) {
        hoverTable = $_8kaujsm2jm0og085.name(event.target()) === 'table' ? Option.some(event.target()) : $_nsz8xm6jm0og08h.ancestor(event.target(), 'table', isRoot);
        hoverTable.each(function (ht) {
          $_5ux1manwjm0og0mr.refresh(wire, ht, hdirection, direction);
        });
      } else if ($_mqd4xm5jm0og08c.inBody(event.target())) {
        $_5ux1manwjm0og0mr.destroy(wire);
      }
    });
    var destroy = function () {
      mousedown.unbind();
      mouseover.unbind();
      resizing.destroy();
      $_5ux1manwjm0og0mr.destroy(wire);
    };
    var refresh = function (tbl) {
      $_5ux1manwjm0og0mr.refresh(wire, tbl, hdirection, direction);
    };
    var events = $_41b46wp5jm0og0vh.create({
      adjustHeight: Event([
        'table',
        'delta',
        'row'
      ]),
      adjustWidth: Event([
        'table',
        'delta',
        'column'
      ]),
      startAdjust: Event([])
    });
    return {
      destroy: destroy,
      refresh: refresh,
      on: resizing.on,
      off: resizing.off,
      hideBars: curry($_5ux1manwjm0og0mr.hide, wire),
      showBars: curry($_5ux1manwjm0og0mr.show, wire),
      events: events.registry
    };
  }

  function TableResize (wire, vdirection) {
    var hdirection = $_5xlpjvndjm0og0hx.height;
    var manager = BarManager(wire, vdirection, hdirection);
    var events = $_41b46wp5jm0og0vh.create({
      beforeResize: Event(['table']),
      afterResize: Event(['table']),
      startDrag: Event([])
    });
    manager.events.adjustHeight.bind(function (event) {
      events.trigger.beforeResize(event.table());
      var delta = hdirection.delta(event.delta(), event.table());
      $_cwe8heocjm0og0pl.adjustHeight(event.table(), delta, event.row(), hdirection);
      events.trigger.afterResize(event.table());
    });
    manager.events.startAdjust.bind(function (event) {
      events.trigger.startDrag();
    });
    manager.events.adjustWidth.bind(function (event) {
      events.trigger.beforeResize(event.table());
      var delta = vdirection.delta(event.delta(), event.table());
      $_cwe8heocjm0og0pl.adjustWidth(event.table(), delta, event.column(), vdirection);
      events.trigger.afterResize(event.table());
    });
    return {
      on: manager.on,
      off: manager.off,
      hideBars: manager.hideBars,
      showBars: manager.showBars,
      destroy: manager.destroy,
      events: events.registry
    };
  }

  var createContainer = function () {
    var container = Element$$1.fromTag('div');
    $_ekl9pwmajm0og09e.setAll(container, {
      position: 'static',
      height: '0',
      width: '0',
      padding: '0',
      margin: '0',
      border: '0'
    });
    $_5w7xramcjm0og09t.append($_mqd4xm5jm0og08c.body(), container);
    return container;
  };
  var get$8 = function (editor, container) {
    return editor.inline ? $_89tx7rp2jm0og0uu.body(getBody$1(editor), createContainer()) : $_89tx7rp2jm0og0uu.only(Element$$1.fromDom(editor.getDoc()));
  };
  var remove$6 = function (editor, wire) {
    if (editor.inline) {
      $_7uuw85mdjm0og09v.remove(wire.parent());
    }
  };
  var $_60i3j3pmjm0og0yv = {
    get: get$8,
    remove: remove$6
  };

  var ResizeHandler = function (editor) {
    var selectionRng = Option.none();
    var resize = Option.none();
    var wire = Option.none();
    var percentageBasedSizeRegex = /(\d+(\.\d+)?)%/;
    var startW, startRawW;
    var isTable = function (elm) {
      return elm.nodeName === 'TABLE';
    };
    var getRawWidth = function (elm) {
      return editor.dom.getStyle(elm, 'width') || editor.dom.getAttrib(elm, 'width');
    };
    var lazyResize = function () {
      return resize;
    };
    var lazyWire = function () {
      return wire.getOr($_89tx7rp2jm0og0uu.only(Element$$1.fromDom(editor.getBody())));
    };
    var destroy = function () {
      resize.each(function (sz) {
        sz.destroy();
      });
      wire.each(function (w) {
        $_60i3j3pmjm0og0yv.remove(editor, w);
      });
    };
    editor.on('init', function () {
      var direction = TableDirection($_8ooslcokjm0og0ra.directionAt);
      var rawWire = $_60i3j3pmjm0og0yv.get(editor);
      wire = Option.some(rawWire);
      if (hasObjectResizing(editor) && hasTableResizeBars(editor)) {
        var sz = TableResize(rawWire, direction);
        sz.on();
        sz.events.startDrag.bind(function (event) {
          selectionRng = Option.some(editor.selection.getRng());
        });
        sz.events.beforeResize.bind(function (event) {
          var rawTable = event.table().dom();
          fireObjectResizeStart(editor, rawTable, getPixelWidth$1(rawTable), getPixelHeight(rawTable));
        });
        sz.events.afterResize.bind(function (event) {
          var table = event.table();
          var rawTable = table.dom();
          removeDataStyle(table);
          selectionRng.each(function (rng) {
            editor.selection.setRng(rng);
            editor.focus();
          });
          fireObjectResized(editor, rawTable, getPixelWidth$1(rawTable), getPixelHeight(rawTable));
          editor.undoManager.add();
        });
        resize = Option.some(sz);
      }
    });
    editor.on('ObjectResizeStart', function (e) {
      var targetElm = e.target;
      if (isTable(targetElm)) {
        startW = e.width;
        startRawW = getRawWidth(targetElm);
      }
    });
    editor.on('ObjectResized', function (e) {
      var targetElm = e.target;
      if (isTable(targetElm)) {
        var table = targetElm;
        if (percentageBasedSizeRegex.test(startRawW)) {
          var percentW = parseFloat(percentageBasedSizeRegex.exec(startRawW)[1]);
          var targetPercentW = e.width * percentW / startW;
          editor.dom.setStyle(table, 'width', targetPercentW + '%');
        } else {
          var newCellSizes_1 = [];
          global$1.each(table.rows, function (row) {
            global$1.each(row.cells, function (cell) {
              var width = editor.dom.getStyle(cell, 'width', true);
              newCellSizes_1.push({
                cell: cell,
                width: width
              });
            });
          });
          global$1.each(newCellSizes_1, function (newCellSize) {
            editor.dom.setStyle(newCellSize.cell, 'width', newCellSize.width);
            editor.dom.setAttrib(newCellSize.cell, 'width', null);
          });
        }
      }
    });
    return {
      lazyResize: lazyResize,
      lazyWire: lazyWire,
      destroy: destroy
    };
  };

  var none$2 = function (current) {
    return folder$1(function (n, f, m, l) {
      return n(current);
    });
  };
  var first$5 = function (current) {
    return folder$1(function (n, f, m, l) {
      return f(current);
    });
  };
  var middle$1 = function (current, target) {
    return folder$1(function (n, f, m, l) {
      return m(current, target);
    });
  };
  var last$4 = function (current) {
    return folder$1(function (n, f, m, l) {
      return l(current);
    });
  };
  var folder$1 = function (fold) {
    return { fold: fold };
  };
  var $_45y10zppjm0og102 = {
    none: none$2,
    first: first$5,
    middle: middle$1,
    last: last$4
  };

  var detect$4 = function (current, isRoot) {
    return $_d02uidlcjm0og041.table(current, isRoot).bind(function (table) {
      var all = $_d02uidlcjm0og041.cells(table);
      var index = findIndex(all, function (x) {
        return $_dql4e0lkjm0og06c.eq(current, x);
      });
      return index.map(function (ind) {
        return {
          index: constant(ind),
          all: constant(all)
        };
      });
    });
  };
  var next = function (current, isRoot) {
    var detection = detect$4(current, isRoot);
    return detection.fold(function () {
      return $_45y10zppjm0og102.none(current);
    }, function (info) {
      return info.index() + 1 < info.all().length ? $_45y10zppjm0og102.middle(current, info.all()[info.index() + 1]) : $_45y10zppjm0og102.last(current);
    });
  };
  var prev = function (current, isRoot) {
    var detection = detect$4(current, isRoot);
    return detection.fold(function () {
      return $_45y10zppjm0og102.none();
    }, function (info) {
      return info.index() - 1 >= 0 ? $_45y10zppjm0og102.middle(current, info.all()[info.index() - 1]) : $_45y10zppjm0og102.first(current);
    });
  };
  var $_jsn5bpojm0og0zu = {
    next: next,
    prev: prev
  };

  var adt = Adt.generate([
    { 'before': ['element'] },
    {
      'on': [
        'element',
        'offset'
      ]
    },
    { after: ['element'] }
  ]);
  var cata$1 = function (subject, onBefore, onOn, onAfter) {
    return subject.fold(onBefore, onOn, onAfter);
  };
  var getStart = function (situ) {
    return situ.fold(identity, identity, identity);
  };
  var $_8tjygmprjm0og109 = {
    before: adt.before,
    on: adt.on,
    after: adt.after,
    cata: cata$1,
    getStart: getStart
  };

  var type$2 = Adt.generate([
    { domRange: ['rng'] },
    {
      relative: [
        'startSitu',
        'finishSitu'
      ]
    },
    {
      exact: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    }
  ]);
  var range$2 = Immutable('start', 'soffset', 'finish', 'foffset');
  var exactFromRange = function (simRange) {
    return type$2.exact(simRange.start(), simRange.soffset(), simRange.finish(), simRange.foffset());
  };
  var getStart$1 = function (selection) {
    return selection.match({
      domRange: function (rng) {
        return Element$$1.fromDom(rng.startContainer);
      },
      relative: function (startSitu, finishSitu) {
        return $_8tjygmprjm0og109.getStart(startSitu);
      },
      exact: function (start, soffset, finish, foffset) {
        return start;
      }
    });
  };
  var getWin = function (selection) {
    var start = getStart$1(selection);
    return $_d421p9lijm0og05w.defaultView(start);
  };
  var $_d2ie3spqjm0og104 = {
    domRange: type$2.domRange,
    relative: type$2.relative,
    exact: type$2.exact,
    exactFromRange: exactFromRange,
    range: range$2,
    getWin: getWin
  };

  var makeRange = function (start, soffset, finish, foffset) {
    var doc = $_d421p9lijm0og05w.owner(start);
    var rng = doc.dom().createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var commonAncestorContainer = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    return Element$$1.fromDom(r.commonAncestorContainer);
  };
  var after$2 = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    var same = $_dql4e0lkjm0og06c.eq(start, finish) && soffset === foffset;
    return r.collapsed && !same;
  };
  var $_17hc63ptjm0og10m = {
    after: after$2,
    commonAncestorContainer: commonAncestorContainer
  };

  var fromElements = function (elements, scope) {
    var doc = scope || document;
    var fragment = doc.createDocumentFragment();
    each(elements, function (element) {
      fragment.appendChild(element.dom());
    });
    return Element$$1.fromDom(fragment);
  };
  var $_9loclvpujm0og10n = { fromElements: fromElements };

  var selectNodeContents = function (win, element) {
    var rng = win.document.createRange();
    selectNodeContentsUsing(rng, element);
    return rng;
  };
  var selectNodeContentsUsing = function (rng, element) {
    rng.selectNodeContents(element.dom());
  };
  var isWithin$1 = function (outerRange, innerRange) {
    return innerRange.compareBoundaryPoints(outerRange.END_TO_START, outerRange) < 1 && innerRange.compareBoundaryPoints(outerRange.START_TO_END, outerRange) > -1;
  };
  var create$1 = function (win) {
    return win.document.createRange();
  };
  var setStart = function (rng, situ) {
    situ.fold(function (e) {
      rng.setStartBefore(e.dom());
    }, function (e, o) {
      rng.setStart(e.dom(), o);
    }, function (e) {
      rng.setStartAfter(e.dom());
    });
  };
  var setFinish = function (rng, situ) {
    situ.fold(function (e) {
      rng.setEndBefore(e.dom());
    }, function (e, o) {
      rng.setEnd(e.dom(), o);
    }, function (e) {
      rng.setEndAfter(e.dom());
    });
  };
  var replaceWith = function (rng, fragment) {
    deleteContents(rng);
    rng.insertNode(fragment.dom());
  };
  var relativeToNative = function (win, startSitu, finishSitu) {
    var range = win.document.createRange();
    setStart(range, startSitu);
    setFinish(range, finishSitu);
    return range;
  };
  var exactToNative = function (win, start, soffset, finish, foffset) {
    var rng = win.document.createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var deleteContents = function (rng) {
    rng.deleteContents();
  };
  var cloneFragment = function (rng) {
    var fragment = rng.cloneContents();
    return Element$$1.fromDom(fragment);
  };
  var toRect = function (rect) {
    return {
      left: constant(rect.left),
      top: constant(rect.top),
      right: constant(rect.right),
      bottom: constant(rect.bottom),
      width: constant(rect.width),
      height: constant(rect.height)
    };
  };
  var getFirstRect = function (rng) {
    var rects = rng.getClientRects();
    var rect = rects.length > 0 ? rects[0] : rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
  };
  var getBounds$1 = function (rng) {
    var rect = rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
  };
  var toString = function (rng) {
    return rng.toString();
  };
  var $_f2cyuwpvjm0og10s = {
    create: create$1,
    replaceWith: replaceWith,
    selectNodeContents: selectNodeContents,
    selectNodeContentsUsing: selectNodeContentsUsing,
    relativeToNative: relativeToNative,
    exactToNative: exactToNative,
    deleteContents: deleteContents,
    cloneFragment: cloneFragment,
    getFirstRect: getFirstRect,
    getBounds: getBounds$1,
    isWithin: isWithin$1,
    toString: toString
  };

  var adt$1 = Adt.generate([
    {
      ltr: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    },
    {
      rtl: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    }
  ]);
  var fromRange = function (win, type, range) {
    return type(Element$$1.fromDom(range.startContainer), range.startOffset, Element$$1.fromDom(range.endContainer), range.endOffset);
  };
  var getRanges = function (win, selection) {
    return selection.match({
      domRange: function (rng) {
        return {
          ltr: constant(rng),
          rtl: Option.none
        };
      },
      relative: function (startSitu, finishSitu) {
        return {
          ltr: cached(function () {
            return $_f2cyuwpvjm0og10s.relativeToNative(win, startSitu, finishSitu);
          }),
          rtl: cached(function () {
            return Option.some($_f2cyuwpvjm0og10s.relativeToNative(win, finishSitu, startSitu));
          })
        };
      },
      exact: function (start, soffset, finish, foffset) {
        return {
          ltr: cached(function () {
            return $_f2cyuwpvjm0og10s.exactToNative(win, start, soffset, finish, foffset);
          }),
          rtl: cached(function () {
            return Option.some($_f2cyuwpvjm0og10s.exactToNative(win, finish, foffset, start, soffset));
          })
        };
      }
    });
  };
  var doDiagnose = function (win, ranges) {
    var rng = ranges.ltr();
    if (rng.collapsed) {
      var reversed = ranges.rtl().filter(function (rev) {
        return rev.collapsed === false;
      });
      return reversed.map(function (rev) {
        return adt$1.rtl(Element$$1.fromDom(rev.endContainer), rev.endOffset, Element$$1.fromDom(rev.startContainer), rev.startOffset);
      }).getOrThunk(function () {
        return fromRange(win, adt$1.ltr, rng);
      });
    } else {
      return fromRange(win, adt$1.ltr, rng);
    }
  };
  var diagnose = function (win, selection) {
    var ranges = getRanges(win, selection);
    return doDiagnose(win, ranges);
  };
  var asLtrRange = function (win, selection) {
    var diagnosis = diagnose(win, selection);
    return diagnosis.match({
      ltr: function (start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(start.dom(), soffset);
        rng.setEnd(finish.dom(), foffset);
        return rng;
      },
      rtl: function (start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(finish.dom(), foffset);
        rng.setEnd(start.dom(), soffset);
        return rng;
      }
    });
  };
  var $_2e2kvppwjm0og10z = {
    ltr: adt$1.ltr,
    rtl: adt$1.rtl,
    diagnose: diagnose,
    asLtrRange: asLtrRange
  };

  var searchForPoint = function (rectForOffset, x, y, maxX, length) {
    if (length === 0)
      return 0;
    else if (x === maxX)
      return length - 1;
    var xDelta = maxX;
    for (var i = 1; i < length; i++) {
      var rect = rectForOffset(i);
      var curDeltaX = Math.abs(x - rect.left);
      if (y <= rect.bottom) {
        if (y < rect.top || curDeltaX > xDelta) {
          return i - 1;
        } else {
          xDelta = curDeltaX;
        }
      }
    }
    return 0;
  };
  var inRect = function (rect, x, y) {
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  };
  var $_bmb51gpzjm0og11p = {
    inRect: inRect,
    searchForPoint: searchForPoint
  };

  var locateOffset = function (doc, textnode, x, y, rect) {
    var rangeForOffset = function (offset) {
      var r = doc.dom().createRange();
      r.setStart(textnode.dom(), offset);
      r.collapse(true);
      return r;
    };
    var rectForOffset = function (offset) {
      var r = rangeForOffset(offset);
      return r.getBoundingClientRect();
    };
    var length = $_al1a6umjjm0og0b8.get(textnode).length;
    var offset = $_bmb51gpzjm0og11p.searchForPoint(rectForOffset, x, y, rect.right, length);
    return rangeForOffset(offset);
  };
  var locate = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rects = r.getClientRects();
    var foundRect = findMap(rects, function (rect) {
      return $_bmb51gpzjm0og11p.inRect(rect, x, y) ? Option.some(rect) : Option.none();
    });
    return foundRect.map(function (rect) {
      return locateOffset(doc, node, x, y, rect);
    });
  };
  var $_371m41q0jm0og11r = { locate: locate };

  var searchInChildren = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    var nodes = $_d421p9lijm0og05w.children(node);
    return findMap(nodes, function (n) {
      r.selectNode(n.dom());
      return $_bmb51gpzjm0og11p.inRect(r.getBoundingClientRect(), x, y) ? locateNode(doc, n, x, y) : Option.none();
    });
  };
  var locateNode = function (doc, node, x, y) {
    var locator = $_8kaujsm2jm0og085.isText(node) ? $_371m41q0jm0og11r.locate : searchInChildren;
    return locator(doc, node, x, y);
  };
  var locate$1 = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return locateNode(doc, node, boundedX, boundedY);
  };
  var $_610rspyjm0og11j = { locate: locate$1 };

  var COLLAPSE_TO_LEFT = true;
  var COLLAPSE_TO_RIGHT = false;
  var getCollapseDirection = function (rect, x) {
    return x - rect.left < rect.right - x ? COLLAPSE_TO_LEFT : COLLAPSE_TO_RIGHT;
  };
  var createCollapsedNode = function (doc, target, collapseDirection) {
    var r = doc.dom().createRange();
    r.selectNode(target.dom());
    r.collapse(collapseDirection);
    return r;
  };
  var locateInElement = function (doc, node, x) {
    var cursorRange = doc.dom().createRange();
    cursorRange.selectNode(node.dom());
    var rect = cursorRange.getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    var f = collapseDirection === COLLAPSE_TO_LEFT ? $_e2itwymhjm0og0b1.first : $_e2itwymhjm0og0b1.last;
    return f(node).map(function (target) {
      return createCollapsedNode(doc, target, collapseDirection);
    });
  };
  var locateInEmpty = function (doc, node, x) {
    var rect = node.dom().getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    return Option.some(createCollapsedNode(doc, node, collapseDirection));
  };
  var search = function (doc, node, x) {
    var f = $_d421p9lijm0og05w.children(node).length === 0 ? locateInEmpty : locateInElement;
    return f(doc, node, x);
  };
  var $_65oghyq1jm0og11x = { search: search };

  var caretPositionFromPoint = function (doc, x, y) {
    return Option.from(doc.dom().caretPositionFromPoint(x, y)).bind(function (pos) {
      if (pos.offsetNode === null)
        return Option.none();
      var r = doc.dom().createRange();
      r.setStart(pos.offsetNode, pos.offset);
      r.collapse();
      return Option.some(r);
    });
  };
  var caretRangeFromPoint = function (doc, x, y) {
    return Option.from(doc.dom().caretRangeFromPoint(x, y));
  };
  var searchTextNodes = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return $_610rspyjm0og11j.locate(doc, node, boundedX, boundedY);
  };
  var searchFromPoint = function (doc, x, y) {
    return Element$$1.fromPoint(doc, x, y).bind(function (elem) {
      var fallback = function () {
        return $_65oghyq1jm0og11x.search(doc, elem, x);
      };
      return $_d421p9lijm0og05w.children(elem).length === 0 ? fallback() : searchTextNodes(doc, elem, x, y).orThunk(fallback);
    });
  };
  var availableSearch = document.caretPositionFromPoint ? caretPositionFromPoint : document.caretRangeFromPoint ? caretRangeFromPoint : searchFromPoint;
  var fromPoint$1 = function (win, x, y) {
    var doc = Element$$1.fromDom(win.document);
    return availableSearch(doc, x, y).map(function (rng) {
      return $_d2ie3spqjm0og104.range(Element$$1.fromDom(rng.startContainer), rng.startOffset, Element$$1.fromDom(rng.endContainer), rng.endOffset);
    });
  };
  var $_93cxf2pxjm0og11a = { fromPoint: fromPoint$1 };

  var withinContainer = function (win, ancestor, outerRange, selector) {
    var innerRange = $_f2cyuwpvjm0og10s.create(win);
    var self = $_5jb9xelejm0og053.is(ancestor, selector) ? [ancestor] : [];
    var elements = self.concat($_1wzcn0m3jm0og087.descendants(ancestor, selector));
    return filter(elements, function (elem) {
      $_f2cyuwpvjm0og10s.selectNodeContentsUsing(innerRange, elem);
      return $_f2cyuwpvjm0og10s.isWithin(outerRange, innerRange);
    });
  };
  var find$3 = function (win, selection, selector) {
    var outerRange = $_2e2kvppwjm0og10z.asLtrRange(win, selection);
    var ancestor = Element$$1.fromDom(outerRange.commonAncestorContainer);
    return $_8kaujsm2jm0og085.isElement(ancestor) ? withinContainer(win, ancestor, outerRange, selector) : [];
  };
  var $_drxs1jq2jm0og123 = { find: find$3 };

  var beforeSpecial = function (element, offset) {
    var name = $_8kaujsm2jm0og085.name(element);
    if ('input' === name)
      return $_8tjygmprjm0og109.after(element);
    else if (!contains([
        'br',
        'img'
      ], name))
      return $_8tjygmprjm0og109.on(element, offset);
    else
      return offset === 0 ? $_8tjygmprjm0og109.before(element) : $_8tjygmprjm0og109.after(element);
  };
  var preprocessRelative = function (startSitu, finishSitu) {
    var start = startSitu.fold($_8tjygmprjm0og109.before, beforeSpecial, $_8tjygmprjm0og109.after);
    var finish = finishSitu.fold($_8tjygmprjm0og109.before, beforeSpecial, $_8tjygmprjm0og109.after);
    return $_d2ie3spqjm0og104.relative(start, finish);
  };
  var preprocessExact = function (start, soffset, finish, foffset) {
    var startSitu = beforeSpecial(start, soffset);
    var finishSitu = beforeSpecial(finish, foffset);
    return $_d2ie3spqjm0og104.relative(startSitu, finishSitu);
  };
  var preprocess = function (selection) {
    return selection.match({
      domRange: function (rng) {
        var start = Element$$1.fromDom(rng.startContainer);
        var finish = Element$$1.fromDom(rng.endContainer);
        return preprocessExact(start, rng.startOffset, finish, rng.endOffset);
      },
      relative: preprocessRelative,
      exact: preprocessExact
    });
  };
  var $_ewu7f6q3jm0og128 = {
    beforeSpecial: beforeSpecial,
    preprocess: preprocess,
    preprocessRelative: preprocessRelative,
    preprocessExact: preprocessExact
  };

  var doSetNativeRange = function (win, rng) {
    Option.from(win.getSelection()).each(function (selection) {
      selection.removeAllRanges();
      selection.addRange(rng);
    });
  };
  var doSetRange = function (win, start, soffset, finish, foffset) {
    var rng = $_f2cyuwpvjm0og10s.exactToNative(win, start, soffset, finish, foffset);
    doSetNativeRange(win, rng);
  };
  var findWithin = function (win, selection, selector) {
    return $_drxs1jq2jm0og123.find(win, selection, selector);
  };
  var setLegacyRtlRange = function (win, selection, start, soffset, finish, foffset) {
    selection.collapse(start.dom(), soffset);
    selection.extend(finish.dom(), foffset);
  };
  var setRangeFromRelative = function (win, relative) {
    return $_2e2kvppwjm0og10z.diagnose(win, relative).match({
      ltr: function (start, soffset, finish, foffset) {
        doSetRange(win, start, soffset, finish, foffset);
      },
      rtl: function (start, soffset, finish, foffset) {
        var selection = win.getSelection();
        if (selection.setBaseAndExtent) {
          selection.setBaseAndExtent(start.dom(), soffset, finish.dom(), foffset);
        } else if (selection.extend) {
          try {
            setLegacyRtlRange(win, selection, start, soffset, finish, foffset);
          } catch (e) {
            doSetRange(win, finish, foffset, start, soffset);
          }
        } else {
          doSetRange(win, finish, foffset, start, soffset);
        }
      }
    });
  };
  var setExact = function (win, start, soffset, finish, foffset) {
    var relative = $_ewu7f6q3jm0og128.preprocessExact(start, soffset, finish, foffset);
    setRangeFromRelative(win, relative);
  };
  var setRelative = function (win, startSitu, finishSitu) {
    var relative = $_ewu7f6q3jm0og128.preprocessRelative(startSitu, finishSitu);
    setRangeFromRelative(win, relative);
  };
  var toNative = function (selection) {
    var win = $_d2ie3spqjm0og104.getWin(selection).dom();
    var getDomRange = function (start, soffset, finish, foffset) {
      return $_f2cyuwpvjm0og10s.exactToNative(win, start, soffset, finish, foffset);
    };
    var filtered = $_ewu7f6q3jm0og128.preprocess(selection);
    return $_2e2kvppwjm0og10z.diagnose(win, filtered).match({
      ltr: getDomRange,
      rtl: getDomRange
    });
  };
  var readRange = function (selection) {
    if (selection.rangeCount > 0) {
      var firstRng = selection.getRangeAt(0);
      var lastRng = selection.getRangeAt(selection.rangeCount - 1);
      return Option.some($_d2ie3spqjm0og104.range(Element$$1.fromDom(firstRng.startContainer), firstRng.startOffset, Element$$1.fromDom(lastRng.endContainer), lastRng.endOffset));
    } else {
      return Option.none();
    }
  };
  var doGetExact = function (selection) {
    var anchorNode = Element$$1.fromDom(selection.anchorNode);
    var focusNode = Element$$1.fromDom(selection.focusNode);
    return $_17hc63ptjm0og10m.after(anchorNode, selection.anchorOffset, focusNode, selection.focusOffset) ? Option.some($_d2ie3spqjm0og104.range(Element$$1.fromDom(selection.anchorNode), selection.anchorOffset, Element$$1.fromDom(selection.focusNode), selection.focusOffset)) : readRange(selection);
  };
  var setToElement = function (win, element) {
    var rng = $_f2cyuwpvjm0og10s.selectNodeContents(win, element);
    doSetNativeRange(win, rng);
  };
  var forElement = function (win, element) {
    var rng = $_f2cyuwpvjm0og10s.selectNodeContents(win, element);
    return $_d2ie3spqjm0og104.range(Element$$1.fromDom(rng.startContainer), rng.startOffset, Element$$1.fromDom(rng.endContainer), rng.endOffset);
  };
  var getExact = function (win) {
    return Option.from(win.getSelection()).filter(function (sel) {
      return sel.rangeCount > 0;
    }).bind(doGetExact);
  };
  var get$9 = function (win) {
    return getExact(win).map(function (range) {
      return $_d2ie3spqjm0og104.exact(range.start(), range.soffset(), range.finish(), range.foffset());
    });
  };
  var getFirstRect$1 = function (win, selection) {
    var rng = $_2e2kvppwjm0og10z.asLtrRange(win, selection);
    return $_f2cyuwpvjm0og10s.getFirstRect(rng);
  };
  var getBounds$2 = function (win, selection) {
    var rng = $_2e2kvppwjm0og10z.asLtrRange(win, selection);
    return $_f2cyuwpvjm0og10s.getBounds(rng);
  };
  var getAtPoint = function (win, x, y) {
    return $_93cxf2pxjm0og11a.fromPoint(win, x, y);
  };
  var getAsString = function (win, selection) {
    var rng = $_2e2kvppwjm0og10z.asLtrRange(win, selection);
    return $_f2cyuwpvjm0og10s.toString(rng);
  };
  var clear$1 = function (win) {
    var selection = win.getSelection();
    selection.removeAllRanges();
  };
  var clone$2 = function (win, selection) {
    var rng = $_2e2kvppwjm0og10z.asLtrRange(win, selection);
    return $_f2cyuwpvjm0og10s.cloneFragment(rng);
  };
  var replace$1 = function (win, selection, elements) {
    var rng = $_2e2kvppwjm0og10z.asLtrRange(win, selection);
    var fragment = $_9loclvpujm0og10n.fromElements(elements, win.document);
    $_f2cyuwpvjm0og10s.replaceWith(rng, fragment);
  };
  var deleteAt = function (win, selection) {
    var rng = $_2e2kvppwjm0og10z.asLtrRange(win, selection);
    $_f2cyuwpvjm0og10s.deleteContents(rng);
  };
  var isCollapsed = function (start, soffset, finish, foffset) {
    return $_dql4e0lkjm0og06c.eq(start, finish) && soffset === foffset;
  };
  var $_cn1zfjpsjm0og10g = {
    setExact: setExact,
    getExact: getExact,
    get: get$9,
    setRelative: setRelative,
    toNative: toNative,
    setToElement: setToElement,
    clear: clear$1,
    clone: clone$2,
    replace: replace$1,
    deleteAt: deleteAt,
    forElement: forElement,
    getFirstRect: getFirstRect$1,
    getBounds: getBounds$2,
    getAtPoint: getAtPoint,
    findWithin: findWithin,
    getAsString: getAsString,
    isCollapsed: isCollapsed
  };

  var global$3 = tinymce.util.Tools.resolve('tinymce.util.VK');

  var forward = function (editor, isRoot, cell, lazyWire) {
    return go(editor, isRoot, $_jsn5bpojm0og0zu.next(cell), lazyWire);
  };
  var backward = function (editor, isRoot, cell, lazyWire) {
    return go(editor, isRoot, $_jsn5bpojm0og0zu.prev(cell), lazyWire);
  };
  var getCellFirstCursorPosition = function (editor, cell) {
    var selection = $_d2ie3spqjm0og104.exact(cell, 0, cell, 0);
    return $_cn1zfjpsjm0og10g.toNative(selection);
  };
  var getNewRowCursorPosition = function (editor, table) {
    var rows = $_1wzcn0m3jm0og087.descendants(table, 'tr');
    return last(rows).bind(function (last$$1) {
      return $_nsz8xm6jm0og08h.descendant(last$$1, 'td,th').map(function (first) {
        return getCellFirstCursorPosition(editor, first);
      });
    });
  };
  var go = function (editor, isRoot, cell, actions, lazyWire) {
    return cell.fold(Option.none, Option.none, function (current, next) {
      return $_e2itwymhjm0og0b1.first(next).map(function (cell) {
        return getCellFirstCursorPosition(editor, cell);
      });
    }, function (current) {
      return $_d02uidlcjm0og041.table(current, isRoot).bind(function (table) {
        var targets = $_geipzymmjm0og0bk.noMenu(current);
        editor.undoManager.transact(function () {
          actions.insertRowsAfter(table, targets);
        });
        return getNewRowCursorPosition(editor, table);
      });
    });
  };
  var rootElements = [
    'table',
    'li',
    'dl'
  ];
  var handle$1 = function (event, editor, actions, lazyWire) {
    if (event.keyCode === global$3.TAB) {
      var body_1 = getBody$1(editor);
      var isRoot_1 = function (element) {
        var name = $_8kaujsm2jm0og085.name(element);
        return $_dql4e0lkjm0og06c.eq(element, body_1) || contains(rootElements, name);
      };
      var rng = editor.selection.getRng();
      if (rng.collapsed) {
        var start = Element$$1.fromDom(rng.startContainer);
        $_d02uidlcjm0og041.cell(start, isRoot_1).each(function (cell) {
          event.preventDefault();
          var navigation = event.shiftKey ? backward : forward;
          var rng = navigation(editor, isRoot_1, cell, actions, lazyWire);
          rng.each(function (range$$1) {
            editor.selection.setRng(range$$1);
          });
        });
      }
    }
  };
  var $_ff8putpnjm0og0z7 = { handle: handle$1 };

  var response = Immutable('selection', 'kill');
  var $_dq3okrq7jm0og13j = { response: response };

  var isKey = function (key) {
    return function (keycode) {
      return keycode === key;
    };
  };
  var isUp = isKey(38);
  var isDown = isKey(40);
  var isNavigation = function (keycode) {
    return keycode >= 37 && keycode <= 40;
  };
  var $_eqj511q8jm0og13m = {
    ltr: {
      isBackward: isKey(37),
      isForward: isKey(39)
    },
    rtl: {
      isBackward: isKey(39),
      isForward: isKey(37)
    },
    isUp: isUp,
    isDown: isDown,
    isNavigation: isNavigation
  };

  var convertToRange = function (win, selection) {
    var rng = $_2e2kvppwjm0og10z.asLtrRange(win, selection);
    return {
      start: constant(Element$$1.fromDom(rng.startContainer)),
      soffset: constant(rng.startOffset),
      finish: constant(Element$$1.fromDom(rng.endContainer)),
      foffset: constant(rng.endOffset)
    };
  };
  var makeSitus = function (start, soffset, finish, foffset) {
    return {
      start: constant($_8tjygmprjm0og109.on(start, soffset)),
      finish: constant($_8tjygmprjm0og109.on(finish, foffset))
    };
  };
  var $_8e5xz4qajm0og144 = {
    convertToRange: convertToRange,
    makeSitus: makeSitus
  };

  var isSafari = $_44j6bplpjm0og06x.detect().browser.isSafari();
  var get$10 = function (_doc) {
    var doc = _doc !== undefined ? _doc.dom() : document;
    var x = doc.body.scrollLeft || doc.documentElement.scrollLeft;
    var y = doc.body.scrollTop || doc.documentElement.scrollTop;
    return Position(x, y);
  };
  var to = function (x, y, _doc) {
    var doc = _doc !== undefined ? _doc.dom() : document;
    var win = doc.defaultView;
    win.scrollTo(x, y);
  };
  var by = function (x, y, _doc) {
    var doc = _doc !== undefined ? _doc.dom() : document;
    var win = doc.defaultView;
    win.scrollBy(x, y);
  };
  var setToElement$1 = function (win, element) {
    var pos = $_3jf8s8nejm0og0ib.absolute(element);
    var doc = Element$$1.fromDom(win.document);
    to(pos.left(), pos.top(), doc);
  };
  var preserve$1 = function (doc, f) {
    var before = get$10(doc);
    f();
    var after = get$10(doc);
    if (before.top() !== after.top() || before.left() !== after.left()) {
      to(before.left(), before.top(), doc);
    }
  };
  var capture$2 = function (doc) {
    var previous = Option.none();
    var save = function () {
      previous = Option.some(get$10(doc));
    };
    var restore = function () {
      previous.each(function (p) {
        to(p.left(), p.top(), doc);
      });
    };
    save();
    return {
      save: save,
      restore: restore
    };
  };
  var intoView = function (element, alignToTop) {
    if (isSafari && isFunction(element.dom().scrollIntoViewIfNeeded)) {
      element.dom().scrollIntoViewIfNeeded(false);
    } else {
      element.dom().scrollIntoView(alignToTop);
    }
  };
  var intoViewIfNeeded = function (element, container) {
    var containerBox = container.dom().getBoundingClientRect();
    var elementBox = element.dom().getBoundingClientRect();
    if (elementBox.top < containerBox.top) {
      intoView(element, true);
    } else if (elementBox.bottom > containerBox.bottom) {
      intoView(element, false);
    }
  };
  var scrollBarWidth = function () {
    var scrollDiv = Element$$1.fromHtml('<div style="width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;"></div>');
    $_5w7xramcjm0og09t.after($_mqd4xm5jm0og08c.body(), scrollDiv);
    var w = scrollDiv.dom().offsetWidth - scrollDiv.dom().clientWidth;
    $_7uuw85mdjm0og09v.remove(scrollDiv);
    return w;
  };
  var $_90yomuqbjm0og14f = {
    get: get$10,
    to: to,
    by: by,
    preserve: preserve$1,
    capture: capture$2,
    intoView: intoView,
    intoViewIfNeeded: intoViewIfNeeded,
    setToElement: setToElement$1,
    scrollBarWidth: scrollBarWidth
  };

  function WindowBridge (win) {
    var elementFromPoint = function (x, y) {
      return Element$$1.fromPoint(Element$$1.fromDom(win.document), x, y);
    };
    var getRect = function (element) {
      return element.dom().getBoundingClientRect();
    };
    var getRangedRect = function (start, soffset, finish, foffset) {
      var sel = $_d2ie3spqjm0og104.exact(start, soffset, finish, foffset);
      return $_cn1zfjpsjm0og10g.getFirstRect(win, sel).map(function (structRect) {
        return map$1(structRect, apply);
      });
    };
    var getSelection = function () {
      return $_cn1zfjpsjm0og10g.get(win).map(function (exactAdt) {
        return $_8e5xz4qajm0og144.convertToRange(win, exactAdt);
      });
    };
    var fromSitus = function (situs) {
      var relative = $_d2ie3spqjm0og104.relative(situs.start(), situs.finish());
      return $_8e5xz4qajm0og144.convertToRange(win, relative);
    };
    var situsFromPoint = function (x, y) {
      return $_cn1zfjpsjm0og10g.getAtPoint(win, x, y).map(function (exact) {
        return {
          start: constant($_8tjygmprjm0og109.on(exact.start(), exact.soffset())),
          finish: constant($_8tjygmprjm0og109.on(exact.finish(), exact.foffset()))
        };
      });
    };
    var clearSelection = function () {
      $_cn1zfjpsjm0og10g.clear(win);
    };
    var selectContents = function (element) {
      $_cn1zfjpsjm0og10g.setToElement(win, element);
    };
    var setSelection = function (sel) {
      $_cn1zfjpsjm0og10g.setExact(win, sel.start(), sel.soffset(), sel.finish(), sel.foffset());
    };
    var setRelativeSelection = function (start, finish) {
      $_cn1zfjpsjm0og10g.setRelative(win, start, finish);
    };
    var getInnerHeight = function () {
      return win.innerHeight;
    };
    var getScrollY = function () {
      var pos = $_90yomuqbjm0og14f.get(Element$$1.fromDom(win.document));
      return pos.top();
    };
    var scrollBy = function (x, y) {
      $_90yomuqbjm0og14f.by(x, y, Element$$1.fromDom(win.document));
    };
    return {
      elementFromPoint: elementFromPoint,
      getRect: getRect,
      getRangedRect: getRangedRect,
      getSelection: getSelection,
      fromSitus: fromSitus,
      situsFromPoint: situsFromPoint,
      clearSelection: clearSelection,
      setSelection: setSelection,
      setRelativeSelection: setRelativeSelection,
      selectContents: selectContents,
      getInnerHeight: getInnerHeight,
      getScrollY: getScrollY,
      scrollBy: scrollBy
    };
  }

  var sync = function (container, isRoot, start, soffset, finish, foffset, selectRange) {
    if (!($_dql4e0lkjm0og06c.eq(start, finish) && soffset === foffset)) {
      return $_nsz8xm6jm0og08h.closest(start, 'td,th', isRoot).bind(function (s) {
        return $_nsz8xm6jm0og08h.closest(finish, 'td,th', isRoot).bind(function (f) {
          return detect$5(container, isRoot, s, f, selectRange);
        });
      });
    } else {
      return Option.none();
    }
  };
  var detect$5 = function (container, isRoot, start, finish, selectRange) {
    if (!$_dql4e0lkjm0og06c.eq(start, finish)) {
      return $_do61shmpjm0og0cb.identify(start, finish, isRoot).bind(function (cellSel) {
        var boxes = cellSel.boxes().getOr([]);
        if (boxes.length > 0) {
          selectRange(container, boxes, cellSel.start(), cellSel.finish());
          return Option.some($_dq3okrq7jm0og13j.response(Option.some($_8e5xz4qajm0og144.makeSitus(start, 0, start, $_epg8i0mijm0og0b5.getEnd(start))), true));
        } else {
          return Option.none();
        }
      });
    } else {
      return Option.none();
    }
  };
  var update = function (rows, columns, container, selected, annotations) {
    var updateSelection = function (newSels) {
      annotations.clear(container);
      annotations.selectRange(container, newSels.boxes(), newSels.start(), newSels.finish());
      return newSels.boxes();
    };
    return $_do61shmpjm0og0cb.shiftSelection(selected, rows, columns, annotations.firstSelectedSelector(), annotations.lastSelectedSelector()).map(updateSelection);
  };
  var $_fyw9y1qcjm0og14q = {
    sync: sync,
    detect: detect$5,
    update: update
  };

  var nu$3 = MixedBag([
    'left',
    'top',
    'right',
    'bottom'
  ], []);
  var moveDown = function (caret, amount) {
    return nu$3({
      left: caret.left(),
      top: caret.top() + amount,
      right: caret.right(),
      bottom: caret.bottom() + amount
    });
  };
  var moveUp = function (caret, amount) {
    return nu$3({
      left: caret.left(),
      top: caret.top() - amount,
      right: caret.right(),
      bottom: caret.bottom() - amount
    });
  };
  var moveBottomTo = function (caret, bottom) {
    var height = caret.bottom() - caret.top();
    return nu$3({
      left: caret.left(),
      top: bottom - height,
      right: caret.right(),
      bottom: bottom
    });
  };
  var moveTopTo = function (caret, top) {
    var height = caret.bottom() - caret.top();
    return nu$3({
      left: caret.left(),
      top: top,
      right: caret.right(),
      bottom: top + height
    });
  };
  var translate = function (caret, xDelta, yDelta) {
    return nu$3({
      left: caret.left() + xDelta,
      top: caret.top() + yDelta,
      right: caret.right() + xDelta,
      bottom: caret.bottom() + yDelta
    });
  };
  var getTop$1 = function (caret) {
    return caret.top();
  };
  var getBottom = function (caret) {
    return caret.bottom();
  };
  var toString$1 = function (caret) {
    return '(' + caret.left() + ', ' + caret.top() + ') -> (' + caret.right() + ', ' + caret.bottom() + ')';
  };
  var $_s5928qfjm0og166 = {
    nu: nu$3,
    moveUp: moveUp,
    moveDown: moveDown,
    moveBottomTo: moveBottomTo,
    moveTopTo: moveTopTo,
    getTop: getTop$1,
    getBottom: getBottom,
    translate: translate,
    toString: toString$1
  };

  var getPartialBox = function (bridge, element, offset) {
    if (offset >= 0 && offset < $_epg8i0mijm0og0b5.getEnd(element))
      return bridge.getRangedRect(element, offset, element, offset + 1);
    else if (offset > 0)
      return bridge.getRangedRect(element, offset - 1, element, offset);
    return Option.none();
  };
  var toCaret = function (rect) {
    return $_s5928qfjm0og166.nu({
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom
    });
  };
  var getElemBox = function (bridge, element) {
    return Option.some(bridge.getRect(element));
  };
  var getBoxAt = function (bridge, element, offset) {
    if ($_8kaujsm2jm0og085.isElement(element))
      return getElemBox(bridge, element).map(toCaret);
    else if ($_8kaujsm2jm0og085.isText(element))
      return getPartialBox(bridge, element, offset).map(toCaret);
    else
      return Option.none();
  };
  var getEntireBox = function (bridge, element) {
    if ($_8kaujsm2jm0og085.isElement(element))
      return getElemBox(bridge, element).map(toCaret);
    else if ($_8kaujsm2jm0og085.isText(element))
      return bridge.getRangedRect(element, 0, element, $_epg8i0mijm0og0b5.getEnd(element)).map(toCaret);
    else
      return Option.none();
  };
  var $_5lbraoqgjm0og16b = {
    getBoxAt: getBoxAt,
    getEntireBox: getEntireBox
  };

  var traverse = Immutable('item', 'mode');
  var backtrack = function (universe, item, direction, _transition) {
    var transition = _transition !== undefined ? _transition : sidestep;
    return universe.property().parent(item).map(function (p) {
      return traverse(p, transition);
    });
  };
  var sidestep = function (universe, item, direction, _transition) {
    var transition = _transition !== undefined ? _transition : advance;
    return direction.sibling(universe, item).map(function (p) {
      return traverse(p, transition);
    });
  };
  var advance = function (universe, item, direction, _transition) {
    var transition = _transition !== undefined ? _transition : advance;
    var children = universe.property().children(item);
    var result = direction.first(children);
    return result.map(function (r) {
      return traverse(r, transition);
    });
  };
  var successors = [
    {
      current: backtrack,
      next: sidestep,
      fallback: Option.none()
    },
    {
      current: sidestep,
      next: advance,
      fallback: Option.some(backtrack)
    },
    {
      current: advance,
      next: advance,
      fallback: Option.some(sidestep)
    }
  ];
  var go$1 = function (universe, item, mode, direction, rules) {
    var rules = rules !== undefined ? rules : successors;
    var ruleOpt = find(rules, function (succ) {
      return succ.current === mode;
    });
    return ruleOpt.bind(function (rule) {
      return rule.current(universe, item, direction, rule.next).orThunk(function () {
        return rule.fallback.bind(function (fb) {
          return go$1(universe, item, fb, direction);
        });
      });
    });
  };
  var $_eoz0fbqljm0og17j = {
    backtrack: backtrack,
    sidestep: sidestep,
    advance: advance,
    go: go$1
  };

  var left$1 = function () {
    var sibling = function (universe, item) {
      return universe.query().prevSibling(item);
    };
    var first = function (children) {
      return children.length > 0 ? Option.some(children[children.length - 1]) : Option.none();
    };
    return {
      sibling: sibling,
      first: first
    };
  };
  var right$1 = function () {
    var sibling = function (universe, item) {
      return universe.query().nextSibling(item);
    };
    var first = function (children) {
      return children.length > 0 ? Option.some(children[0]) : Option.none();
    };
    return {
      sibling: sibling,
      first: first
    };
  };
  var $_dnbkluqmjm0og17s = {
    left: left$1,
    right: right$1
  };

  var hone = function (universe, item, predicate, mode, direction, isRoot) {
    var next = $_eoz0fbqljm0og17j.go(universe, item, mode, direction);
    return next.bind(function (n) {
      if (isRoot(n.item()))
        return Option.none();
      else
        return predicate(n.item()) ? Option.some(n.item()) : hone(universe, n.item(), predicate, n.mode(), direction, isRoot);
    });
  };
  var left$2 = function (universe, item, predicate, isRoot) {
    return hone(universe, item, predicate, $_eoz0fbqljm0og17j.sidestep, $_dnbkluqmjm0og17s.left(), isRoot);
  };
  var right$2 = function (universe, item, predicate, isRoot) {
    return hone(universe, item, predicate, $_eoz0fbqljm0og17j.sidestep, $_dnbkluqmjm0og17s.right(), isRoot);
  };
  var $_3zz12tqkjm0og17f = {
    left: left$2,
    right: right$2
  };

  var isLeaf = function (universe, element) {
    return universe.property().children(element).length === 0;
  };
  var before$2 = function (universe, item, isRoot) {
    return seekLeft(universe, item, curry(isLeaf, universe), isRoot);
  };
  var after$3 = function (universe, item, isRoot) {
    return seekRight(universe, item, curry(isLeaf, universe), isRoot);
  };
  var seekLeft = function (universe, item, predicate, isRoot) {
    return $_3zz12tqkjm0og17f.left(universe, item, predicate, isRoot);
  };
  var seekRight = function (universe, item, predicate, isRoot) {
    return $_3zz12tqkjm0og17f.right(universe, item, predicate, isRoot);
  };
  var walkers = function () {
    return {
      left: $_dnbkluqmjm0og17s.left,
      right: $_dnbkluqmjm0og17s.right
    };
  };
  var walk = function (universe, item, mode, direction, _rules) {
    return $_eoz0fbqljm0og17j.go(universe, item, mode, direction, _rules);
  };
  var $_dfqv0rqjjm0og17c = {
    before: before$2,
    after: after$3,
    seekLeft: seekLeft,
    seekRight: seekRight,
    walkers: walkers,
    walk: walk,
    backtrack: $_eoz0fbqljm0og17j.backtrack,
    sidestep: $_eoz0fbqljm0og17j.sidestep,
    advance: $_eoz0fbqljm0og17j.advance
  };

  var universe$2 = DomUniverse();
  var gather = function (element, prune, transform) {
    return $_dfqv0rqjjm0og17c.gather(universe$2, element, prune, transform);
  };
  var before$3 = function (element, isRoot) {
    return $_dfqv0rqjjm0og17c.before(universe$2, element, isRoot);
  };
  var after$4 = function (element, isRoot) {
    return $_dfqv0rqjjm0og17c.after(universe$2, element, isRoot);
  };
  var seekLeft$1 = function (element, predicate, isRoot) {
    return $_dfqv0rqjjm0og17c.seekLeft(universe$2, element, predicate, isRoot);
  };
  var seekRight$1 = function (element, predicate, isRoot) {
    return $_dfqv0rqjjm0og17c.seekRight(universe$2, element, predicate, isRoot);
  };
  var walkers$1 = function () {
    return $_dfqv0rqjjm0og17c.walkers();
  };
  var walk$1 = function (item, mode, direction, _rules) {
    return $_dfqv0rqjjm0og17c.walk(universe$2, item, mode, direction, _rules);
  };
  var $_f0w7owqijm0og174 = {
    gather: gather,
    before: before$3,
    after: after$4,
    seekLeft: seekLeft$1,
    seekRight: seekRight$1,
    walkers: walkers$1,
    walk: walk$1
  };

  var JUMP_SIZE = 5;
  var NUM_RETRIES = 100;
  var adt$2 = Adt.generate([
    { 'none': [] },
    { 'retry': ['caret'] }
  ]);
  var isOutside = function (caret, box) {
    return caret.left() < box.left() || Math.abs(box.right() - caret.left()) < 1 || caret.left() > box.right();
  };
  var inOutsideBlock = function (bridge, element, caret) {
    return $_ng4nfm7jm0og08i.closest(element, $_4r81u4nnjm0og0kn.isBlock).fold(constant(false), function (cell) {
      return $_5lbraoqgjm0og16b.getEntireBox(bridge, cell).exists(function (box) {
        return isOutside(caret, box);
      });
    });
  };
  var adjustDown = function (bridge, element, guessBox, original, caret) {
    var lowerCaret = $_s5928qfjm0og166.moveDown(caret, JUMP_SIZE);
    if (Math.abs(guessBox.bottom() - original.bottom()) < 1)
      return adt$2.retry(lowerCaret);
    else if (guessBox.top() > caret.bottom())
      return adt$2.retry(lowerCaret);
    else if (guessBox.top() === caret.bottom())
      return adt$2.retry($_s5928qfjm0og166.moveDown(caret, 1));
    else
      return inOutsideBlock(bridge, element, caret) ? adt$2.retry($_s5928qfjm0og166.translate(lowerCaret, JUMP_SIZE, 0)) : adt$2.none();
  };
  var adjustUp = function (bridge, element, guessBox, original, caret) {
    var higherCaret = $_s5928qfjm0og166.moveUp(caret, JUMP_SIZE);
    if (Math.abs(guessBox.top() - original.top()) < 1)
      return adt$2.retry(higherCaret);
    else if (guessBox.bottom() < caret.top())
      return adt$2.retry(higherCaret);
    else if (guessBox.bottom() === caret.top())
      return adt$2.retry($_s5928qfjm0og166.moveUp(caret, 1));
    else
      return inOutsideBlock(bridge, element, caret) ? adt$2.retry($_s5928qfjm0og166.translate(higherCaret, JUMP_SIZE, 0)) : adt$2.none();
  };
  var upMovement = {
    point: $_s5928qfjm0og166.getTop,
    adjuster: adjustUp,
    move: $_s5928qfjm0og166.moveUp,
    gather: $_f0w7owqijm0og174.before
  };
  var downMovement = {
    point: $_s5928qfjm0og166.getBottom,
    adjuster: adjustDown,
    move: $_s5928qfjm0og166.moveDown,
    gather: $_f0w7owqijm0og174.after
  };
  var isAtTable = function (bridge, x, y) {
    return bridge.elementFromPoint(x, y).filter(function (elm) {
      return $_8kaujsm2jm0og085.name(elm) === 'table';
    }).isSome();
  };
  var adjustForTable = function (bridge, movement, original, caret, numRetries) {
    return adjustTil(bridge, movement, original, movement.move(caret, JUMP_SIZE), numRetries);
  };
  var adjustTil = function (bridge, movement, original, caret, numRetries) {
    if (numRetries === 0)
      return Option.some(caret);
    if (isAtTable(bridge, caret.left(), movement.point(caret)))
      return adjustForTable(bridge, movement, original, caret, numRetries - 1);
    return bridge.situsFromPoint(caret.left(), movement.point(caret)).bind(function (guess) {
      return guess.start().fold(Option.none, function (element, offset) {
        return $_5lbraoqgjm0og16b.getEntireBox(bridge, element, offset).bind(function (guessBox) {
          return movement.adjuster(bridge, element, guessBox, original, caret).fold(Option.none, function (newCaret) {
            return adjustTil(bridge, movement, original, newCaret, numRetries - 1);
          });
        }).orThunk(function () {
          return Option.some(caret);
        });
      }, Option.none);
    });
  };
  var ieTryDown = function (bridge, caret) {
    return bridge.situsFromPoint(caret.left(), caret.bottom() + JUMP_SIZE);
  };
  var ieTryUp = function (bridge, caret) {
    return bridge.situsFromPoint(caret.left(), caret.top() - JUMP_SIZE);
  };
  var checkScroll = function (movement, adjusted, bridge) {
    if (movement.point(adjusted) > bridge.getInnerHeight())
      return Option.some(movement.point(adjusted) - bridge.getInnerHeight());
    else if (movement.point(adjusted) < 0)
      return Option.some(-movement.point(adjusted));
    else
      return Option.none();
  };
  var retry = function (movement, bridge, caret) {
    var moved = movement.move(caret, JUMP_SIZE);
    var adjusted = adjustTil(bridge, movement, caret, moved, NUM_RETRIES).getOr(moved);
    return checkScroll(movement, adjusted, bridge).fold(function () {
      return bridge.situsFromPoint(adjusted.left(), movement.point(adjusted));
    }, function (delta) {
      bridge.scrollBy(0, delta);
      return bridge.situsFromPoint(adjusted.left(), movement.point(adjusted) - delta);
    });
  };
  var $_m18e2qhjm0og16k = {
    tryUp: curry(retry, upMovement),
    tryDown: curry(retry, downMovement),
    ieTryUp: ieTryUp,
    ieTryDown: ieTryDown,
    getJumpSize: constant(JUMP_SIZE)
  };

  var adt$3 = Adt.generate([
    { 'none': ['message'] },
    { 'success': [] },
    { 'failedUp': ['cell'] },
    { 'failedDown': ['cell'] }
  ]);
  var isOverlapping = function (bridge, before, after) {
    var beforeBounds = bridge.getRect(before);
    var afterBounds = bridge.getRect(after);
    return afterBounds.right > beforeBounds.left && afterBounds.left < beforeBounds.right;
  };
  var verify = function (bridge, before, beforeOffset, after, afterOffset, failure, isRoot) {
    return $_nsz8xm6jm0og08h.closest(after, 'td,th', isRoot).bind(function (afterCell) {
      return $_nsz8xm6jm0og08h.closest(before, 'td,th', isRoot).map(function (beforeCell) {
        if (!$_dql4e0lkjm0og06c.eq(afterCell, beforeCell)) {
          return $_geta6vmqjm0og0d4.sharedOne(isRow, [
            afterCell,
            beforeCell
          ]).fold(function () {
            return isOverlapping(bridge, beforeCell, afterCell) ? adt$3.success() : failure(beforeCell);
          }, function (sharedRow) {
            return failure(beforeCell);
          });
        } else {
          return $_dql4e0lkjm0og06c.eq(after, afterCell) && $_epg8i0mijm0og0b5.getEnd(afterCell) === afterOffset ? failure(beforeCell) : adt$3.none('in same cell');
        }
      });
    }).getOr(adt$3.none('default'));
  };
  var isRow = function (elem) {
    return $_nsz8xm6jm0og08h.closest(elem, 'tr');
  };
  var cata$2 = function (subject, onNone, onSuccess, onFailedUp, onFailedDown) {
    return subject.fold(onNone, onSuccess, onFailedUp, onFailedDown);
  };
  var $_ejyobqnjm0og17w = {
    verify: verify,
    cata: cata$2,
    adt: adt$3
  };

  var point = Immutable('element', 'offset');
  var delta = Immutable('element', 'deltaOffset');
  var range$3 = Immutable('element', 'start', 'finish');
  var points = Immutable('begin', 'end');
  var text = Immutable('element', 'text');
  var $_432p9yqpjm0og18r = {
    point: point,
    delta: delta,
    range: range$3,
    points: points,
    text: text
  };

  var inAncestor = Immutable('ancestor', 'descendants', 'element', 'index');
  var inParent = Immutable('parent', 'children', 'element', 'index');
  var childOf = function (element, ancestor) {
    return $_ng4nfm7jm0og08i.closest(element, function (elem) {
      return $_d421p9lijm0og05w.parent(elem).exists(function (parent) {
        return $_dql4e0lkjm0og06c.eq(parent, ancestor);
      });
    });
  };
  var indexInParent = function (element) {
    return $_d421p9lijm0og05w.parent(element).bind(function (parent) {
      var children = $_d421p9lijm0og05w.children(parent);
      return indexOf$1(children, element).map(function (index) {
        return inParent(parent, children, element, index);
      });
    });
  };
  var indexOf$1 = function (elements, element) {
    return findIndex(elements, curry($_dql4e0lkjm0og06c.eq, element));
  };
  var selectorsInParent = function (element, selector) {
    return $_d421p9lijm0og05w.parent(element).bind(function (parent) {
      var children = $_1wzcn0m3jm0og087.children(parent, selector);
      return indexOf$1(children, element).map(function (index) {
        return inParent(parent, children, element, index);
      });
    });
  };
  var descendantsInAncestor = function (element, ancestorSelector, descendantSelector) {
    return $_nsz8xm6jm0og08h.closest(element, ancestorSelector).bind(function (ancestor) {
      var descendants = $_1wzcn0m3jm0og087.descendants(ancestor, descendantSelector);
      return indexOf$1(descendants, element).map(function (index) {
        return inAncestor(ancestor, descendants, element, index);
      });
    });
  };
  var $_gdi2p0qqjm0og18v = {
    childOf: childOf,
    indexOf: indexOf$1,
    indexInParent: indexInParent,
    selectorsInParent: selectorsInParent,
    descendantsInAncestor: descendantsInAncestor
  };

  var isBr = function (elem) {
    return $_8kaujsm2jm0og085.name(elem) === 'br';
  };
  var gatherer = function (cand, gather, isRoot) {
    return gather(cand, isRoot).bind(function (target) {
      return $_8kaujsm2jm0og085.isText(target) && $_al1a6umjjm0og0b8.get(target).trim().length === 0 ? gatherer(target, gather, isRoot) : Option.some(target);
    });
  };
  var handleBr = function (isRoot, element, direction) {
    return direction.traverse(element).orThunk(function () {
      return gatherer(element, direction.gather, isRoot);
    }).map(direction.relative);
  };
  var findBr = function (element, offset) {
    return $_d421p9lijm0og05w.child(element, offset).filter(isBr).orThunk(function () {
      return $_d421p9lijm0og05w.child(element, offset - 1).filter(isBr);
    });
  };
  var handleParent = function (isRoot, element, offset, direction) {
    return findBr(element, offset).bind(function (br) {
      return direction.traverse(br).fold(function () {
        return gatherer(br, direction.gather, isRoot).map(direction.relative);
      }, function (adjacent) {
        return $_gdi2p0qqjm0og18v.indexInParent(adjacent).map(function (info) {
          return $_8tjygmprjm0og109.on(info.parent(), info.index());
        });
      });
    });
  };
  var tryBr = function (isRoot, element, offset, direction) {
    var target = isBr(element) ? handleBr(isRoot, element, direction) : handleParent(isRoot, element, offset, direction);
    return target.map(function (tgt) {
      return {
        start: constant(tgt),
        finish: constant(tgt)
      };
    });
  };
  var process = function (analysis) {
    return $_ejyobqnjm0og17w.cata(analysis, function (message) {
      return Option.none();
    }, function () {
      return Option.none();
    }, function (cell) {
      return Option.some($_432p9yqpjm0og18r.point(cell, 0));
    }, function (cell) {
      return Option.some($_432p9yqpjm0og18r.point(cell, $_epg8i0mijm0og0b5.getEnd(cell)));
    });
  };
  var $_2flbm6qojm0og188 = {
    tryBr: tryBr,
    process: process
  };

  var MAX_RETRIES = 20;
  var platform$1 = $_44j6bplpjm0og06x.detect();
  var findSpot = function (bridge, isRoot, direction) {
    return bridge.getSelection().bind(function (sel) {
      return $_2flbm6qojm0og188.tryBr(isRoot, sel.finish(), sel.foffset(), direction).fold(function () {
        return Option.some($_432p9yqpjm0og18r.point(sel.finish(), sel.foffset()));
      }, function (brNeighbour) {
        var range = bridge.fromSitus(brNeighbour);
        var analysis = $_ejyobqnjm0og17w.verify(bridge, sel.finish(), sel.foffset(), range.finish(), range.foffset(), direction.failure, isRoot);
        return $_2flbm6qojm0og188.process(analysis);
      });
    });
  };
  var scan = function (bridge, isRoot, element, offset, direction, numRetries) {
    if (numRetries === 0)
      return Option.none();
    return tryCursor(bridge, isRoot, element, offset, direction).bind(function (situs) {
      var range = bridge.fromSitus(situs);
      var analysis = $_ejyobqnjm0og17w.verify(bridge, element, offset, range.finish(), range.foffset(), direction.failure, isRoot);
      return $_ejyobqnjm0og17w.cata(analysis, function () {
        return Option.none();
      }, function () {
        return Option.some(situs);
      }, function (cell) {
        if ($_dql4e0lkjm0og06c.eq(element, cell) && offset === 0)
          return tryAgain(bridge, element, offset, $_s5928qfjm0og166.moveUp, direction);
        else
          return scan(bridge, isRoot, cell, 0, direction, numRetries - 1);
      }, function (cell) {
        if ($_dql4e0lkjm0og06c.eq(element, cell) && offset === $_epg8i0mijm0og0b5.getEnd(cell))
          return tryAgain(bridge, element, offset, $_s5928qfjm0og166.moveDown, direction);
        else
          return scan(bridge, isRoot, cell, $_epg8i0mijm0og0b5.getEnd(cell), direction, numRetries - 1);
      });
    });
  };
  var tryAgain = function (bridge, element, offset, move, direction) {
    return $_5lbraoqgjm0og16b.getBoxAt(bridge, element, offset).bind(function (box) {
      return tryAt(bridge, direction, move(box, $_m18e2qhjm0og16k.getJumpSize()));
    });
  };
  var tryAt = function (bridge, direction, box) {
    if (platform$1.browser.isChrome() || platform$1.browser.isSafari() || platform$1.browser.isFirefox() || platform$1.browser.isEdge())
      return direction.otherRetry(bridge, box);
    else if (platform$1.browser.isIE())
      return direction.ieRetry(bridge, box);
    else
      return Option.none();
  };
  var tryCursor = function (bridge, isRoot, element, offset, direction) {
    return $_5lbraoqgjm0og16b.getBoxAt(bridge, element, offset).bind(function (box) {
      return tryAt(bridge, direction, box);
    });
  };
  var handle$2 = function (bridge, isRoot, direction) {
    return findSpot(bridge, isRoot, direction).bind(function (spot) {
      return scan(bridge, isRoot, spot.element(), spot.offset(), direction, MAX_RETRIES).map(bridge.fromSitus);
    });
  };
  var $_fnfapdqejm0og15u = { handle: handle$2 };

  var any$1 = function (predicate) {
    return $_ng4nfm7jm0og08i.first(predicate).isSome();
  };
  var ancestor$3 = function (scope, predicate, isRoot) {
    return $_ng4nfm7jm0og08i.ancestor(scope, predicate, isRoot).isSome();
  };
  var closest$3 = function (scope, predicate, isRoot) {
    return $_ng4nfm7jm0og08i.closest(scope, predicate, isRoot).isSome();
  };
  var sibling$3 = function (scope, predicate) {
    return $_ng4nfm7jm0og08i.sibling(scope, predicate).isSome();
  };
  var child$4 = function (scope, predicate) {
    return $_ng4nfm7jm0og08i.child(scope, predicate).isSome();
  };
  var descendant$3 = function (scope, predicate) {
    return $_ng4nfm7jm0og08i.descendant(scope, predicate).isSome();
  };
  var $_f8sk2rqrjm0og198 = {
    any: any$1,
    ancestor: ancestor$3,
    closest: closest$3,
    sibling: sibling$3,
    child: child$4,
    descendant: descendant$3
  };

  var detection = $_44j6bplpjm0og06x.detect();
  var inSameTable = function (elem, table) {
    return $_f8sk2rqrjm0og198.ancestor(elem, function (e) {
      return $_d421p9lijm0og05w.parent(e).exists(function (p) {
        return $_dql4e0lkjm0og06c.eq(p, table);
      });
    });
  };

  var simulate = function (bridge, isRoot, direction, initial, anchor) {
    return $_nsz8xm6jm0og08h.closest(initial, 'td,th', isRoot).bind(function (start) {
      return $_nsz8xm6jm0og08h.closest(start, 'table', isRoot).bind(function (table) {
        if (!inSameTable(anchor, table))
          return Option.none();
        return $_fnfapdqejm0og15u.handle(bridge, isRoot, direction).bind(function (range) {
          return $_nsz8xm6jm0og08h.closest(range.finish(), 'td,th', isRoot).map(function (finish) {
            return {
              start: constant(start),
              finish: constant(finish),
              range: constant(range)
            };
          });
        });
      });
    });
  };
  var navigate = function (bridge, isRoot, direction, initial, anchor, precheck) {
    if (detection.browser.isIE()) {
      return Option.none();
    } else {
      return precheck(initial, isRoot).orThunk(function () {
        return simulate(bridge, isRoot, direction, initial, anchor).map(function (info) {
          var range = info.range();
          return $_dq3okrq7jm0og13j.response(Option.some($_8e5xz4qajm0og144.makeSitus(range.start(), range.soffset(), range.finish(), range.foffset())), true);
        });
      });
    }
  };
  var firstUpCheck = function (initial, isRoot) {
    return $_nsz8xm6jm0og08h.closest(initial, 'tr', isRoot).bind(function (startRow) {
      return $_nsz8xm6jm0og08h.closest(startRow, 'table', isRoot).bind(function (table) {
        var rows = $_1wzcn0m3jm0og087.descendants(table, 'tr');
        if ($_dql4e0lkjm0og06c.eq(startRow, rows[0])) {
          return $_f0w7owqijm0og174.seekLeft(table, function (element) {
            return $_e2itwymhjm0og0b1.last(element).isSome();
          }, isRoot).map(function (last) {
            var lastOffset = $_epg8i0mijm0og0b5.getEnd(last);
            return $_dq3okrq7jm0og13j.response(Option.some($_8e5xz4qajm0og144.makeSitus(last, lastOffset, last, lastOffset)), true);
          });
        } else {
          return Option.none();
        }
      });
    });
  };
  var lastDownCheck = function (initial, isRoot) {
    return $_nsz8xm6jm0og08h.closest(initial, 'tr', isRoot).bind(function (startRow) {
      return $_nsz8xm6jm0og08h.closest(startRow, 'table', isRoot).bind(function (table) {
        var rows = $_1wzcn0m3jm0og087.descendants(table, 'tr');
        if ($_dql4e0lkjm0og06c.eq(startRow, rows[rows.length - 1])) {
          return $_f0w7owqijm0og174.seekRight(table, function (element) {
            return $_e2itwymhjm0og0b1.first(element).isSome();
          }, isRoot).map(function (first) {
            return $_dq3okrq7jm0og13j.response(Option.some($_8e5xz4qajm0og144.makeSitus(first, 0, first, 0)), true);
          });
        } else {
          return Option.none();
        }
      });
    });
  };
  var select = function (bridge, container, isRoot, direction, initial, anchor, selectRange) {
    return simulate(bridge, isRoot, direction, initial, anchor).bind(function (info) {
      return $_fyw9y1qcjm0og14q.detect(container, isRoot, info.start(), info.finish(), selectRange);
    });
  };
  var $_2us7jwqdjm0og150 = {
    navigate: navigate,
    select: select,
    firstUpCheck: firstUpCheck,
    lastDownCheck: lastDownCheck
  };

  var findCell = function (target, isRoot) {
    return $_nsz8xm6jm0og08h.closest(target, 'td,th', isRoot);
  };
  function MouseSelection (bridge, container, isRoot, annotations) {
    var cursor = Option.none();
    var clearState = function () {
      cursor = Option.none();
    };
    var mousedown = function (event) {
      annotations.clear(container);
      cursor = findCell(event.target(), isRoot);
    };
    var mouseover = function (event) {
      cursor.each(function (start) {
        annotations.clear(container);
        findCell(event.target(), isRoot).each(function (finish) {
          $_do61shmpjm0og0cb.identify(start, finish, isRoot).each(function (cellSel) {
            var boxes = cellSel.boxes().getOr([]);
            if (boxes.length > 1 || boxes.length === 1 && !$_dql4e0lkjm0og06c.eq(start, finish)) {
              annotations.selectRange(container, boxes, cellSel.start(), cellSel.finish());
              bridge.selectContents(finish);
            }
          });
        });
      });
    };
    var mouseup = function () {
      cursor.each(clearState);
    };
    return {
      mousedown: mousedown,
      mouseover: mouseover,
      mouseup: mouseup
    };
  }

  var $_25hjq3qtjm0og19i = {
    down: {
      traverse: $_d421p9lijm0og05w.nextSibling,
      gather: $_f0w7owqijm0og174.after,
      relative: $_8tjygmprjm0og109.before,
      otherRetry: $_m18e2qhjm0og16k.tryDown,
      ieRetry: $_m18e2qhjm0og16k.ieTryDown,
      failure: $_ejyobqnjm0og17w.adt.failedDown
    },
    up: {
      traverse: $_d421p9lijm0og05w.prevSibling,
      gather: $_f0w7owqijm0og174.before,
      relative: $_8tjygmprjm0og109.before,
      otherRetry: $_m18e2qhjm0og16k.tryUp,
      ieRetry: $_m18e2qhjm0og16k.ieTryUp,
      failure: $_ejyobqnjm0og17w.adt.failedUp
    }
  };

  var rc = Immutable('rows', 'cols');
  var mouse = function (win, container, isRoot, annotations) {
    var bridge = WindowBridge(win);
    var handlers = MouseSelection(bridge, container, isRoot, annotations);
    return {
      mousedown: handlers.mousedown,
      mouseover: handlers.mouseover,
      mouseup: handlers.mouseup
    };
  };
  var keyboard = function (win, container, isRoot, annotations) {
    var bridge = WindowBridge(win);
    var clearToNavigate = function () {
      annotations.clear(container);
      return Option.none();
    };
    var keydown = function (event, start, soffset, finish, foffset, direction) {
      var keycode = event.raw().which;
      var shiftKey = event.raw().shiftKey === true;
      var handler = $_do61shmpjm0og0cb.retrieve(container, annotations.selectedSelector()).fold(function () {
        if ($_eqj511q8jm0og13m.isDown(keycode) && shiftKey) {
          return curry($_2us7jwqdjm0og150.select, bridge, container, isRoot, $_25hjq3qtjm0og19i.down, finish, start, annotations.selectRange);
        } else if ($_eqj511q8jm0og13m.isUp(keycode) && shiftKey) {
          return curry($_2us7jwqdjm0og150.select, bridge, container, isRoot, $_25hjq3qtjm0og19i.up, finish, start, annotations.selectRange);
        } else if ($_eqj511q8jm0og13m.isDown(keycode)) {
          return curry($_2us7jwqdjm0og150.navigate, bridge, isRoot, $_25hjq3qtjm0og19i.down, finish, start, $_2us7jwqdjm0og150.lastDownCheck);
        } else if ($_eqj511q8jm0og13m.isUp(keycode)) {
          return curry($_2us7jwqdjm0og150.navigate, bridge, isRoot, $_25hjq3qtjm0og19i.up, finish, start, $_2us7jwqdjm0og150.firstUpCheck);
        } else {
          return Option.none;
        }
      }, function (selected) {
        var update = function (attempts) {
          return function () {
            var navigation = findMap(attempts, function (delta) {
              return $_fyw9y1qcjm0og14q.update(delta.rows(), delta.cols(), container, selected, annotations);
            });
            return navigation.fold(function () {
              return $_do61shmpjm0og0cb.getEdges(container, annotations.firstSelectedSelector(), annotations.lastSelectedSelector()).map(function (edges) {
                var relative = $_eqj511q8jm0og13m.isDown(keycode) || direction.isForward(keycode) ? $_8tjygmprjm0og109.after : $_8tjygmprjm0og109.before;
                bridge.setRelativeSelection($_8tjygmprjm0og109.on(edges.first(), 0), relative(edges.table()));
                annotations.clear(container);
                return $_dq3okrq7jm0og13j.response(Option.none(), true);
              });
            }, function (_) {
              return Option.some($_dq3okrq7jm0og13j.response(Option.none(), true));
            });
          };
        };
        if ($_eqj511q8jm0og13m.isDown(keycode) && shiftKey)
          return update([rc(+1, 0)]);
        else if ($_eqj511q8jm0og13m.isUp(keycode) && shiftKey)
          return update([rc(-1, 0)]);
        else if (direction.isBackward(keycode) && shiftKey)
          return update([
            rc(0, -1),
            rc(-1, 0)
          ]);
        else if (direction.isForward(keycode) && shiftKey)
          return update([
            rc(0, +1),
            rc(+1, 0)
          ]);
        else if ($_eqj511q8jm0og13m.isNavigation(keycode) && shiftKey === false)
          return clearToNavigate;
        else
          return Option.none;
      });
      return handler();
    };
    var keyup = function (event, start, soffset, finish, foffset) {
      return $_do61shmpjm0og0cb.retrieve(container, annotations.selectedSelector()).fold(function () {
        var keycode = event.raw().which;
        var shiftKey = event.raw().shiftKey === true;
        if (shiftKey === false)
          return Option.none();
        if ($_eqj511q8jm0og13m.isNavigation(keycode))
          return $_fyw9y1qcjm0og14q.sync(container, isRoot, start, soffset, finish, foffset, annotations.selectRange);
        else
          return Option.none();
      }, Option.none);
    };
    return {
      keydown: keydown,
      keyup: keyup
    };
  };
  var $_ej5kskq6jm0og131 = {
    mouse: mouse,
    keyboard: keyboard
  };

  var add$3 = function (element, classes) {
    each(classes, function (x) {
      $_dypcv1o2jm0og0od.add(element, x);
    });
  };
  var remove$7 = function (element, classes) {
    each(classes, function (x) {
      $_dypcv1o2jm0og0od.remove(element, x);
    });
  };
  var toggle$2 = function (element, classes) {
    each(classes, function (x) {
      $_dypcv1o2jm0og0od.toggle(element, x);
    });
  };
  var hasAll = function (element, classes) {
    return forall(classes, function (clazz) {
      return $_dypcv1o2jm0og0od.has(element, clazz);
    });
  };
  var hasAny = function (element, classes) {
    return exists(classes, function (clazz) {
      return $_dypcv1o2jm0og0od.has(element, clazz);
    });
  };
  var getNative = function (element) {
    var classList = element.dom().classList;
    var r = new Array(classList.length);
    for (var i = 0; i < classList.length; i++) {
      r[i] = classList.item(i);
    }
    return r;
  };
  var get$11 = function (element) {
    return $_geduh5o4jm0og0og.supports(element) ? getNative(element) : $_geduh5o4jm0og0og.get(element);
  };
  var $_ah8ef7qwjm0og1a3 = {
    add: add$3,
    remove: remove$7,
    toggle: toggle$2,
    hasAll: hasAll,
    hasAny: hasAny,
    get: get$11
  };

  var addClass = function (clazz) {
    return function (element) {
      $_dypcv1o2jm0og0od.add(element, clazz);
    };
  };
  var removeClass = function (clazz) {
    return function (element) {
      $_dypcv1o2jm0og0od.remove(element, clazz);
    };
  };
  var removeClasses = function (classes) {
    return function (element) {
      $_ah8ef7qwjm0og1a3.remove(element, classes);
    };
  };
  var hasClass = function (clazz) {
    return function (element) {
      return $_dypcv1o2jm0og0od.has(element, clazz);
    };
  };
  var $_25zs4qqvjm0og1a2 = {
    addClass: addClass,
    removeClass: removeClass,
    removeClasses: removeClasses,
    hasClass: hasClass
  };

  var byClass = function (ephemera) {
    var addSelectionClass = $_25zs4qqvjm0og1a2.addClass(ephemera.selected());
    var removeSelectionClasses = $_25zs4qqvjm0og1a2.removeClasses([
      ephemera.selected(),
      ephemera.lastSelected(),
      ephemera.firstSelected()
    ]);
    var clear = function (container) {
      var sels = $_1wzcn0m3jm0og087.descendants(container, ephemera.selectedSelector());
      each(sels, removeSelectionClasses);
    };
    var selectRange = function (container, cells, start, finish) {
      clear(container);
      each(cells, addSelectionClass);
      $_dypcv1o2jm0og0od.add(start, ephemera.firstSelected());
      $_dypcv1o2jm0og0od.add(finish, ephemera.lastSelected());
    };
    return {
      clear: clear,
      selectRange: selectRange,
      selectedSelector: ephemera.selectedSelector,
      firstSelectedSelector: ephemera.firstSelectedSelector,
      lastSelectedSelector: ephemera.lastSelectedSelector
    };
  };
  var byAttr = function (ephemera) {
    var removeSelectionAttributes = function (element) {
      $_6aylb4m1jm0og07w.remove(element, ephemera.selected());
      $_6aylb4m1jm0og07w.remove(element, ephemera.firstSelected());
      $_6aylb4m1jm0og07w.remove(element, ephemera.lastSelected());
    };
    var addSelectionAttribute = function (element) {
      $_6aylb4m1jm0og07w.set(element, ephemera.selected(), '1');
    };
    var clear = function (container) {
      var sels = $_1wzcn0m3jm0og087.descendants(container, ephemera.selectedSelector());
      each(sels, removeSelectionAttributes);
    };
    var selectRange = function (container, cells, start, finish) {
      clear(container);
      each(cells, addSelectionAttribute);
      $_6aylb4m1jm0og07w.set(start, ephemera.firstSelected(), '1');
      $_6aylb4m1jm0og07w.set(finish, ephemera.lastSelected(), '1');
    };
    return {
      clear: clear,
      selectRange: selectRange,
      selectedSelector: ephemera.selectedSelector,
      firstSelectedSelector: ephemera.firstSelectedSelector,
      lastSelectedSelector: ephemera.lastSelectedSelector
    };
  };
  var $_2b2ra5qujm0og19q = {
    byClass: byClass,
    byAttr: byAttr
  };

  var hasInternalTarget = function (e) {
    return $_dypcv1o2jm0og0od.has(Element$$1.fromDom(e.target), 'ephox-snooker-resizer-bar') === false;
  };
  function CellSelection$1 (editor, lazyResize) {
    var handlerStruct = MixedBag([
      'mousedown',
      'mouseover',
      'mouseup',
      'keyup',
      'keydown'
    ], []);
    var handlers = Option.none();
    var annotations = $_2b2ra5qujm0og19q.byAttr($_a7l0t4n1jm0og0fu);
    editor.on('init', function (e) {
      var win = editor.getWin();
      var body = getBody$1(editor);
      var isRoot = getIsRoot(editor);
      var syncSelection = function () {
        var sel = editor.selection;
        var start = Element$$1.fromDom(sel.getStart());
        var end = Element$$1.fromDom(sel.getEnd());
        var shared = $_geta6vmqjm0og0d4.sharedOne($_d02uidlcjm0og041.table, [
          start,
          end
        ]);
        shared.fold(function () {
          annotations.clear(body);
        }, noop);
      };
      var mouseHandlers = $_ej5kskq6jm0og131.mouse(win, body, isRoot, annotations);
      var keyHandlers = $_ej5kskq6jm0og131.keyboard(win, body, isRoot, annotations);
      var hasShiftKey = function (event) {
        return event.raw().shiftKey === true;
      };
      var handleResponse = function (event, response) {
        if (!hasShiftKey(event)) {
          return;
        }
        if (response.kill()) {
          event.kill();
        }
        response.selection().each(function (ns) {
          var relative = $_d2ie3spqjm0og104.relative(ns.start(), ns.finish());
          var rng = $_2e2kvppwjm0og10z.asLtrRange(win, relative);
          editor.selection.setRng(rng);
        });
      };
      var keyup = function (event) {
        var wrappedEvent = wrapEvent(event);
        if (wrappedEvent.raw().shiftKey && $_eqj511q8jm0og13m.isNavigation(wrappedEvent.raw().which)) {
          var rng = editor.selection.getRng();
          var start = Element$$1.fromDom(rng.startContainer);
          var end = Element$$1.fromDom(rng.endContainer);
          keyHandlers.keyup(wrappedEvent, start, rng.startOffset, end, rng.endOffset).each(function (response) {
            handleResponse(wrappedEvent, response);
          });
        }
      };
      var keydown = function (event) {
        var wrappedEvent = wrapEvent(event);
        lazyResize().each(function (resize) {
          resize.hideBars();
        });
        var rng = editor.selection.getRng();
        var startContainer = Element$$1.fromDom(editor.selection.getStart());
        var start = Element$$1.fromDom(rng.startContainer);
        var end = Element$$1.fromDom(rng.endContainer);
        var direction = $_8ooslcokjm0og0ra.directionAt(startContainer).isRtl() ? $_eqj511q8jm0og13m.rtl : $_eqj511q8jm0og13m.ltr;
        keyHandlers.keydown(wrappedEvent, start, rng.startOffset, end, rng.endOffset, direction).each(function (response) {
          handleResponse(wrappedEvent, response);
        });
        lazyResize().each(function (resize) {
          resize.showBars();
        });
      };
      var isMouseEvent = function (event) {
        return event.hasOwnProperty('x') && event.hasOwnProperty('y');
      };
      var wrapEvent = function (event) {
        var target = Element$$1.fromDom(event.target);
        var stop = function () {
          event.stopPropagation();
        };
        var prevent = function () {
          event.preventDefault();
        };
        var kill = compose(prevent, stop);
        return {
          target: constant(target),
          x: constant(isMouseEvent(event) ? event.x : null),
          y: constant(isMouseEvent(event) ? event.y : null),
          stop: stop,
          prevent: prevent,
          kill: kill,
          raw: constant(event)
        };
      };
      var isLeftMouse = function (raw) {
        return raw.button === 0;
      };
      var isLeftButtonPressed = function (raw) {
        if (raw.buttons === undefined) {
          return true;
        }
        return (raw.buttons & 1) !== 0;
      };
      var mouseDown = function (e) {
        if (isLeftMouse(e) && hasInternalTarget(e)) {
          mouseHandlers.mousedown(wrapEvent(e));
        }
      };
      var mouseOver = function (e) {
        if (isLeftButtonPressed(e) && hasInternalTarget(e)) {
          mouseHandlers.mouseover(wrapEvent(e));
        }
      };
      var mouseUp = function (e) {
        if (isLeftMouse(e) && hasInternalTarget(e)) {
          mouseHandlers.mouseup(wrapEvent(e));
        }
      };
      editor.on('mousedown', mouseDown);
      editor.on('mouseover', mouseOver);
      editor.on('mouseup', mouseUp);
      editor.on('keyup', keyup);
      editor.on('keydown', keydown);
      editor.on('nodechange', syncSelection);
      handlers = Option.some(handlerStruct({
        mousedown: mouseDown,
        mouseover: mouseOver,
        mouseup: mouseUp,
        keyup: keyup,
        keydown: keydown
      }));
    });
    var destroy = function () {
      handlers.each(function (handlers) {
      });
    };
    return {
      clear: annotations.clear,
      destroy: destroy
    };
  }

  var Selections = function (editor) {
    var get = function () {
      var body = getBody$1(editor);
      return $_chpjd2mojm0og0c1.retrieve(body, $_a7l0t4n1jm0og0fu.selectedSelector()).fold(function () {
        if (editor.selection.getStart() === undefined) {
          return $_ej5305n2jm0og0fx.none();
        } else {
          return $_ej5305n2jm0og0fx.single(editor.selection);
        }
      }, function (cells) {
        return $_ej5305n2jm0og0fx.multiple(cells);
      });
    };
    return { get: get };
  };

  var each$4 = global$1.each;
  var addButtons = function (editor) {
    var menuItems = [];
    each$4('inserttable tableprops deletetable | cell row column'.split(' '), function (name) {
      if (name === '|') {
        menuItems.push({ text: '-' });
      } else {
        menuItems.push(editor.menuItems[name]);
      }
    });
    editor.addButton('table', {
      type: 'menubutton',
      title: 'Table',
      menu: menuItems
    });
    function cmd(command) {
      return function () {
        editor.execCommand(command);
      };
    }
    editor.addButton('tableprops', {
      title: 'Table properties',
      onclick: cmd('mceTableProps'),
      icon: 'table'
    });
    editor.addButton('tabledelete', {
      title: 'Delete table',
      onclick: cmd('mceTableDelete')
    });
    editor.addButton('tablecellprops', {
      title: 'Cell properties',
      onclick: cmd('mceTableCellProps')
    });
    editor.addButton('tablemergecells', {
      title: 'Merge cells',
      onclick: cmd('mceTableMergeCells')
    });
    editor.addButton('tablesplitcells', {
      title: 'Split cell',
      onclick: cmd('mceTableSplitCells')
    });
    editor.addButton('tableinsertrowbefore', {
      title: 'Insert row before',
      onclick: cmd('mceTableInsertRowBefore')
    });
    editor.addButton('tableinsertrowafter', {
      title: 'Insert row after',
      onclick: cmd('mceTableInsertRowAfter')
    });
    editor.addButton('tabledeleterow', {
      title: 'Delete row',
      onclick: cmd('mceTableDeleteRow')
    });
    editor.addButton('tablerowprops', {
      title: 'Row properties',
      onclick: cmd('mceTableRowProps')
    });
    editor.addButton('tablecutrow', {
      title: 'Cut row',
      onclick: cmd('mceTableCutRow')
    });
    editor.addButton('tablecopyrow', {
      title: 'Copy row',
      onclick: cmd('mceTableCopyRow')
    });
    editor.addButton('tablepasterowbefore', {
      title: 'Paste row before',
      onclick: cmd('mceTablePasteRowBefore')
    });
    editor.addButton('tablepasterowafter', {
      title: 'Paste row after',
      onclick: cmd('mceTablePasteRowAfter')
    });
    editor.addButton('tableinsertcolbefore', {
      title: 'Insert column before',
      onclick: cmd('mceTableInsertColBefore')
    });
    editor.addButton('tableinsertcolafter', {
      title: 'Insert column after',
      onclick: cmd('mceTableInsertColAfter')
    });
    editor.addButton('tabledeletecol', {
      title: 'Delete column',
      onclick: cmd('mceTableDeleteCol')
    });
  };
  var addToolbars = function (editor) {
    var isTable = function (table) {
      var selectorMatched = editor.dom.is(table, 'table') && editor.getBody().contains(table);
      return selectorMatched;
    };
    var toolbar = getToolbar(editor);
    if (toolbar.length > 0) {
      editor.addContextToolbar(isTable, toolbar.join(' '));
    }
  };
  var $_84ymagqyjm0og1ab = {
    addButtons: addButtons,
    addToolbars: addToolbars
  };

  var addMenuItems = function (editor, selections) {
    var targets = Option.none();
    var tableCtrls = [];
    var cellCtrls = [];
    var mergeCtrls = [];
    var unmergeCtrls = [];
    var noTargetDisable = function (ctrl) {
      ctrl.disabled(true);
    };
    var ctrlEnable = function (ctrl) {
      ctrl.disabled(false);
    };
    var pushTable = function () {
      var self = this;
      tableCtrls.push(self);
      targets.fold(function () {
        noTargetDisable(self);
      }, function (targets) {
        ctrlEnable(self);
      });
    };
    var pushCell = function () {
      var self = this;
      cellCtrls.push(self);
      targets.fold(function () {
        noTargetDisable(self);
      }, function (targets) {
        ctrlEnable(self);
      });
    };
    var pushMerge = function () {
      var self = this;
      mergeCtrls.push(self);
      targets.fold(function () {
        noTargetDisable(self);
      }, function (targets) {
        self.disabled(targets.mergable().isNone());
      });
    };
    var pushUnmerge = function () {
      var self = this;
      unmergeCtrls.push(self);
      targets.fold(function () {
        noTargetDisable(self);
      }, function (targets) {
        self.disabled(targets.unmergable().isNone());
      });
    };
    var setDisabledCtrls = function () {
      targets.fold(function () {
        each(tableCtrls, noTargetDisable);
        each(cellCtrls, noTargetDisable);
        each(mergeCtrls, noTargetDisable);
        each(unmergeCtrls, noTargetDisable);
      }, function (targets) {
        each(tableCtrls, ctrlEnable);
        each(cellCtrls, ctrlEnable);
        each(mergeCtrls, function (mergeCtrl) {
          mergeCtrl.disabled(targets.mergable().isNone());
        });
        each(unmergeCtrls, function (unmergeCtrl) {
          unmergeCtrl.disabled(targets.unmergable().isNone());
        });
      });
    };
    editor.on('init', function () {
      editor.on('nodechange', function (e) {
        var cellOpt = Option.from(editor.dom.getParent(editor.selection.getStart(), 'th,td'));
        targets = cellOpt.bind(function (cellDom) {
          var cell = Element$$1.fromDom(cellDom);
          var table = $_d02uidlcjm0og041.table(cell);
          return table.map(function (table) {
            return $_geipzymmjm0og0bk.forMenu(selections, table, cell);
          });
        });
        setDisabledCtrls();
      });
    });
    var generateTableGrid = function () {
      var html = '';
      html = '<table role="grid" class="mce-grid mce-grid-border" aria-readonly="true">';
      for (var y = 0; y < 10; y++) {
        html += '<tr>';
        for (var x = 0; x < 10; x++) {
          html += '<td role="gridcell" tabindex="-1"><a id="mcegrid' + (y * 10 + x) + '" href="#" ' + 'data-mce-x="' + x + '" data-mce-y="' + y + '"></a></td>';
        }
        html += '</tr>';
      }
      html += '</table>';
      html += '<div class="mce-text-center" role="presentation">1 x 1</div>';
      return html;
    };
    var selectGrid = function (editor, tx, ty, control) {
      var table = control.getEl().getElementsByTagName('table')[0];
      var x, y, focusCell, cell, active;
      var rtl = control.isRtl() || control.parent().rel === 'tl-tr';
      table.nextSibling.innerHTML = tx + 1 + ' x ' + (ty + 1);
      if (rtl) {
        tx = 9 - tx;
      }
      for (y = 0; y < 10; y++) {
        for (x = 0; x < 10; x++) {
          cell = table.rows[y].childNodes[x].firstChild;
          active = (rtl ? x >= tx : x <= tx) && y <= ty;
          editor.dom.toggleClass(cell, 'mce-active', active);
          if (active) {
            focusCell = cell;
          }
        }
      }
      return focusCell.parentNode;
    };
    var insertTable = hasTableGrid(editor) === false ? {
      text: 'Table',
      icon: 'table',
      context: 'table',
      onclick: cmd('mceInsertTable')
    } : {
      text: 'Table',
      icon: 'table',
      context: 'table',
      ariaHideMenu: true,
      onclick: function (e) {
        if (e.aria) {
          this.parent().hideAll();
          e.stopImmediatePropagation();
          editor.execCommand('mceInsertTable');
        }
      },
      onshow: function () {
        selectGrid(editor, 0, 0, this.menu.items()[0]);
      },
      onhide: function () {
        var elements = this.menu.items()[0].getEl().getElementsByTagName('a');
        editor.dom.removeClass(elements, 'mce-active');
        editor.dom.addClass(elements[0], 'mce-active');
      },
      menu: [{
          type: 'container',
          html: generateTableGrid(),
          onPostRender: function () {
            this.lastX = this.lastY = 0;
          },
          onmousemove: function (e) {
            var target = e.target;
            var x, y;
            if (target.tagName.toUpperCase() === 'A') {
              x = parseInt(target.getAttribute('data-mce-x'), 10);
              y = parseInt(target.getAttribute('data-mce-y'), 10);
              if (this.isRtl() || this.parent().rel === 'tl-tr') {
                x = 9 - x;
              }
              if (x !== this.lastX || y !== this.lastY) {
                selectGrid(editor, x, y, e.control);
                this.lastX = x;
                this.lastY = y;
              }
            }
          },
          onclick: function (e) {
            var self = this;
            if (e.target.tagName.toUpperCase() === 'A') {
              e.preventDefault();
              e.stopPropagation();
              self.parent().cancel();
              editor.undoManager.transact(function () {
                $_3hzk92oxjm0og0te.insert(editor, self.lastX + 1, self.lastY + 1);
              });
              editor.addVisual();
            }
          }
        }]
    };
    function cmd(command) {
      return function () {
        editor.execCommand(command);
      };
    }
    var tableProperties = {
      text: 'Table properties',
      context: 'table',
      onPostRender: pushTable,
      onclick: cmd('mceTableProps')
    };
    var deleteTable = {
      text: 'Delete table',
      context: 'table',
      onPostRender: pushTable,
      cmd: 'mceTableDelete'
    };
    var row = {
      text: 'Row',
      context: 'table',
      menu: [
        {
          text: 'Insert row before',
          onclick: cmd('mceTableInsertRowBefore'),
          onPostRender: pushCell
        },
        {
          text: 'Insert row after',
          onclick: cmd('mceTableInsertRowAfter'),
          onPostRender: pushCell
        },
        {
          text: 'Delete row',
          onclick: cmd('mceTableDeleteRow'),
          onPostRender: pushCell
        },
        {
          text: 'Row properties',
          onclick: cmd('mceTableRowProps'),
          onPostRender: pushCell
        },
        { text: '-' },
        {
          text: 'Cut row',
          onclick: cmd('mceTableCutRow'),
          onPostRender: pushCell
        },
        {
          text: 'Copy row',
          onclick: cmd('mceTableCopyRow'),
          onPostRender: pushCell
        },
        {
          text: 'Paste row before',
          onclick: cmd('mceTablePasteRowBefore'),
          onPostRender: pushCell
        },
        {
          text: 'Paste row after',
          onclick: cmd('mceTablePasteRowAfter'),
          onPostRender: pushCell
        }
      ]
    };
    var column = {
      text: 'Column',
      context: 'table',
      menu: [
        {
          text: 'Insert column before',
          onclick: cmd('mceTableInsertColBefore'),
          onPostRender: pushCell
        },
        {
          text: 'Insert column after',
          onclick: cmd('mceTableInsertColAfter'),
          onPostRender: pushCell
        },
        {
          text: 'Delete column',
          onclick: cmd('mceTableDeleteCol'),
          onPostRender: pushCell
        }
      ]
    };
    var cell = {
      separator: 'before',
      text: 'Cell',
      context: 'table',
      menu: [
        {
          text: 'Cell properties',
          onclick: cmd('mceTableCellProps'),
          onPostRender: pushCell
        },
        {
          text: 'Merge cells',
          onclick: cmd('mceTableMergeCells'),
          onPostRender: pushMerge
        },
        {
          text: 'Split cell',
          onclick: cmd('mceTableSplitCells'),
          onPostRender: pushUnmerge
        }
      ]
    };
    editor.addMenuItem('inserttable', insertTable);
    editor.addMenuItem('tableprops', tableProperties);
    editor.addMenuItem('deletetable', deleteTable);
    editor.addMenuItem('row', row);
    editor.addMenuItem('column', column);
    editor.addMenuItem('cell', cell);
  };
  var $_9og048qzjm0og1af = { addMenuItems: addMenuItems };

  var getClipboardRows = function (clipboardRows) {
    return clipboardRows.get().fold(function () {
      return;
    }, function (rows) {
      return map(rows, function (row) {
        return row.dom();
      });
    });
  };
  var setClipboardRows = function (rows, clipboardRows) {
    var sugarRows = map(rows, Element$$1.fromDom);
    clipboardRows.set(Option.from(sugarRows));
  };
  var getApi = function (editor, clipboardRows) {
    return {
      insertTable: function (columns, rows) {
        return $_3hzk92oxjm0og0te.insert(editor, columns, rows);
      },
      setClipboardRows: function (rows) {
        return setClipboardRows(rows, clipboardRows);
      },
      getClipboardRows: function () {
        return getClipboardRows(clipboardRows);
      }
    };
  };

  function Plugin(editor) {
    var resizeHandler = ResizeHandler(editor);
    var cellSelection = CellSelection$1(editor, resizeHandler.lazyResize);
    var actions = TableActions(editor, resizeHandler.lazyWire);
    var selections = Selections(editor);
    var clipboardRows = Cell(Option.none());
    $_f1b6u0oojm0og0rn.registerCommands(editor, actions, cellSelection, selections, clipboardRows);
    $_2o9k0zkzjm0og01l.registerEvents(editor, selections, actions, cellSelection);
    $_9og048qzjm0og1af.addMenuItems(editor, selections);
    $_84ymagqyjm0og1ab.addButtons(editor);
    $_84ymagqyjm0og1ab.addToolbars(editor);
    editor.on('PreInit', function () {
      editor.serializer.addTempAttr($_a7l0t4n1jm0og0fu.firstSelected());
      editor.serializer.addTempAttr($_a7l0t4n1jm0og0fu.lastSelected());
    });
    if (hasTabNavigation(editor)) {
      editor.on('keydown', function (e) {
        $_ff8putpnjm0og0z7.handle(e, editor, actions, resizeHandler.lazyWire);
      });
    }
    editor.on('remove', function () {
      resizeHandler.destroy();
      cellSelection.destroy();
    });
    return getApi(editor, clipboardRows);
  }
  global.add('table', Plugin);
  function Plugin$1 () {
  }

  return Plugin$1;

}());
})();


/***/ }),

/***/ "./node_modules/tinymce/themes/modern/theme.js":
/***/ (function(module, exports) {

(function () {
var modern = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.ThemeManager');

  var global$1 = tinymce.util.Tools.resolve('tinymce.EditorManager');

  var global$2 = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var isBrandingEnabled = function (editor) {
    return editor.getParam('branding', true, 'boolean');
  };
  var hasMenubar = function (editor) {
    return getMenubar(editor) !== false;
  };
  var getMenubar = function (editor) {
    return editor.getParam('menubar');
  };
  var hasStatusbar = function (editor) {
    return editor.getParam('statusbar', true, 'boolean');
  };
  var getToolbarSize = function (editor) {
    return editor.getParam('toolbar_items_size');
  };
  var isReadOnly = function (editor) {
    return editor.getParam('readonly', false, 'boolean');
  };
  var getFixedToolbarContainer = function (editor) {
    return editor.getParam('fixed_toolbar_container');
  };
  var getInlineToolbarPositionHandler = function (editor) {
    return editor.getParam('inline_toolbar_position_handler');
  };
  var getMenu = function (editor) {
    return editor.getParam('menu');
  };
  var getRemovedMenuItems = function (editor) {
    return editor.getParam('removed_menuitems', '');
  };
  var getMinWidth = function (editor) {
    return editor.getParam('min_width', 100, 'number');
  };
  var getMinHeight = function (editor) {
    return editor.getParam('min_height', 100, 'number');
  };
  var getMaxWidth = function (editor) {
    return editor.getParam('max_width', 65535, 'number');
  };
  var getMaxHeight = function (editor) {
    return editor.getParam('max_height', 65535, 'number');
  };
  var isSkinDisabled = function (editor) {
    return editor.settings.skin === false;
  };
  var isInline = function (editor) {
    return editor.getParam('inline', false, 'boolean');
  };
  var getResize = function (editor) {
    var resize = editor.getParam('resize', 'vertical');
    if (resize === false) {
      return 'none';
    } else if (resize === 'both') {
      return 'both';
    } else {
      return 'vertical';
    }
  };
  var getSkinUrl = function (editor) {
    var settings = editor.settings;
    var skin = settings.skin;
    var skinUrl = settings.skin_url;
    if (skin !== false) {
      var skinName = skin ? skin : 'lightgray';
      if (skinUrl) {
        skinUrl = editor.documentBaseURI.toAbsolute(skinUrl);
      } else {
        skinUrl = global$1.baseURL + '/skins/' + skinName;
      }
    }
    return skinUrl;
  };
  var getIndexedToolbars = function (settings, defaultToolbar) {
    var toolbars = [];
    for (var i = 1; i < 10; i++) {
      var toolbar = settings['toolbar' + i];
      if (!toolbar) {
        break;
      }
      toolbars.push(toolbar);
    }
    var mainToolbar = settings.toolbar ? [settings.toolbar] : [defaultToolbar];
    return toolbars.length > 0 ? toolbars : mainToolbar;
  };
  var getToolbars = function (editor) {
    var toolbar = editor.getParam('toolbar');
    var defaultToolbar = 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image';
    if (toolbar === false) {
      return [];
    } else if (global$2.isArray(toolbar)) {
      return global$2.grep(toolbar, function (toolbar) {
        return toolbar.length > 0;
      });
    } else {
      return getIndexedToolbars(editor.settings, defaultToolbar);
    }
  };

  var global$3 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var global$4 = tinymce.util.Tools.resolve('tinymce.ui.Factory');

  var global$5 = tinymce.util.Tools.resolve('tinymce.util.I18n');

  var fireSkinLoaded = function (editor) {
    return editor.fire('SkinLoaded');
  };
  var fireResizeEditor = function (editor) {
    return editor.fire('ResizeEditor');
  };
  var fireBeforeRenderUI = function (editor) {
    return editor.fire('BeforeRenderUI');
  };
  var $_7kj1vbu0jm0og2ef = {
    fireSkinLoaded: fireSkinLoaded,
    fireResizeEditor: fireResizeEditor,
    fireBeforeRenderUI: fireBeforeRenderUI
  };

  var focus = function (panel, type) {
    return function () {
      var item = panel.find(type)[0];
      if (item) {
        item.focus(true);
      }
    };
  };
  var addKeys = function (editor, panel) {
    editor.shortcuts.add('Alt+F9', '', focus(panel, 'menubar'));
    editor.shortcuts.add('Alt+F10,F10', '', focus(panel, 'toolbar'));
    editor.shortcuts.add('Alt+F11', '', focus(panel, 'elementpath'));
    panel.on('cancel', function () {
      editor.focus();
    });
  };
  var $_a85u03u1jm0og2eg = { addKeys: addKeys };

  var global$6 = tinymce.util.Tools.resolve('tinymce.geom.Rect');

  var global$7 = tinymce.util.Tools.resolve('tinymce.util.Delay');

  var noop = function () {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      x[_i] = arguments[_i];
    }
  };

  var compose = function (fa, fb) {
    return function () {
      var x = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
      }
      return fa(fb.apply(null, arguments));
    };
  };
  var constant = function (value) {
    return function () {
      return value;
    };
  };


  var curry = function (f) {
    var x = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      x[_i - 1] = arguments[_i];
    }
    var args = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++)
      args[i - 1] = arguments[i];
    return function () {
      var x = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
      }
      var newArgs = new Array(arguments.length);
      for (var j = 0; j < newArgs.length; j++)
        newArgs[j] = arguments[j];
      var all = args.concat(newArgs);
      return f.apply(null, all);
    };
  };




  var never = constant(false);
  var always = constant(true);

  var never$1 = never;
  var always$1 = always;
  var none = function () {
    return NONE;
  };
  var NONE = function () {
    var eq = function (o) {
      return o.isNone();
    };
    var call$$1 = function (thunk) {
      return thunk();
    };
    var id = function (n) {
      return n;
    };
    var noop$$1 = function () {
    };
    var nul = function () {
      return null;
    };
    var undef = function () {
      return undefined;
    };
    var me = {
      fold: function (n, s) {
        return n();
      },
      is: never$1,
      isSome: never$1,
      isNone: always$1,
      getOr: id,
      getOrThunk: call$$1,
      getOrDie: function (msg) {
        throw new Error(msg || 'error: getOrDie called on none.');
      },
      getOrNull: nul,
      getOrUndefined: undef,
      or: id,
      orThunk: call$$1,
      map: none,
      ap: none,
      each: noop$$1,
      bind: none,
      flatten: none,
      exists: never$1,
      forall: always$1,
      filter: none,
      equals: eq,
      equals_: eq,
      toArray: function () {
        return [];
      },
      toString: constant('none()')
    };
    if (Object.freeze)
      Object.freeze(me);
    return me;
  }();
  var some = function (a) {
    var constant_a = function () {
      return a;
    };
    var self = function () {
      return me;
    };
    var map = function (f) {
      return some(f(a));
    };
    var bind = function (f) {
      return f(a);
    };
    var me = {
      fold: function (n, s) {
        return s(a);
      },
      is: function (v) {
        return a === v;
      },
      isSome: always$1,
      isNone: never$1,
      getOr: constant_a,
      getOrThunk: constant_a,
      getOrDie: constant_a,
      getOrNull: constant_a,
      getOrUndefined: constant_a,
      or: self,
      orThunk: self,
      map: map,
      ap: function (optfab) {
        return optfab.fold(none, function (fab) {
          return some(fab(a));
        });
      },
      each: function (f) {
        f(a);
      },
      bind: bind,
      flatten: constant_a,
      exists: bind,
      forall: bind,
      filter: function (f) {
        return f(a) ? me : NONE;
      },
      equals: function (o) {
        return o.is(a);
      },
      equals_: function (o, elementEq) {
        return o.fold(never$1, function (b) {
          return elementEq(a, b);
        });
      },
      toArray: function () {
        return [a];
      },
      toString: function () {
        return 'some(' + a + ')';
      }
    };
    return me;
  };
  var from = function (value) {
    return value === null || value === undefined ? NONE : some(value);
  };
  var Option = {
    some: some,
    none: none,
    from: from
  };

  var getUiContainerDelta = function (ctrl) {
    var uiContainer = getUiContainer(ctrl);
    if (uiContainer && global$3.DOM.getStyle(uiContainer, 'position', true) !== 'static') {
      var containerPos = global$3.DOM.getPos(uiContainer);
      var dx = uiContainer.scrollLeft - containerPos.x;
      var dy = uiContainer.scrollTop - containerPos.y;
      return Option.some({
        x: dx,
        y: dy
      });
    } else {
      return Option.none();
    }
  };
  var setUiContainer = function (editor, ctrl) {
    var uiContainer = global$3.DOM.select(editor.settings.ui_container)[0];
    ctrl.getRoot().uiContainer = uiContainer;
  };
  var getUiContainer = function (ctrl) {
    return ctrl ? ctrl.getRoot().uiContainer : null;
  };
  var inheritUiContainer = function (fromCtrl, toCtrl) {
    return toCtrl.uiContainer = getUiContainer(fromCtrl);
  };
  var $_agmmwau5jm0og2eq = {
    getUiContainerDelta: getUiContainerDelta,
    setUiContainer: setUiContainer,
    getUiContainer: getUiContainer,
    inheritUiContainer: inheritUiContainer
  };

  var createToolbar = function (editor, items, size) {
    var toolbarItems = [];
    var buttonGroup;
    if (!items) {
      return;
    }
    global$2.each(items.split(/[ ,]/), function (item) {
      var itemName;
      var bindSelectorChanged = function () {
        var selection = editor.selection;
        if (item.settings.stateSelector) {
          selection.selectorChanged(item.settings.stateSelector, function (state) {
            item.active(state);
          }, true);
        }
        if (item.settings.disabledStateSelector) {
          selection.selectorChanged(item.settings.disabledStateSelector, function (state) {
            item.disabled(state);
          });
        }
      };
      if (item === '|') {
        buttonGroup = null;
      } else {
        if (!buttonGroup) {
          buttonGroup = {
            type: 'buttongroup',
            items: []
          };
          toolbarItems.push(buttonGroup);
        }
        if (editor.buttons[item]) {
          itemName = item;
          item = editor.buttons[itemName];
          if (typeof item === 'function') {
            item = item();
          }
          item.type = item.type || 'button';
          item.size = size;
          item = global$4.create(item);
          buttonGroup.items.push(item);
          if (editor.initialized) {
            bindSelectorChanged();
          } else {
            editor.on('init', bindSelectorChanged);
          }
        }
      }
    });
    return {
      type: 'toolbar',
      layout: 'flow',
      items: toolbarItems
    };
  };
  var createToolbars = function (editor, size) {
    var toolbars = [];
    var addToolbar = function (items) {
      if (items) {
        toolbars.push(createToolbar(editor, items, size));
      }
    };
    global$2.each(getToolbars(editor), function (toolbar) {
      addToolbar(toolbar);
    });
    if (toolbars.length) {
      return {
        type: 'panel',
        layout: 'stack',
        classes: 'toolbar-grp',
        ariaRoot: true,
        ariaRemember: true,
        items: toolbars
      };
    }
  };
  var $_8166kdu8jm0og2ez = {
    createToolbar: createToolbar,
    createToolbars: createToolbars
  };

  var DOM = global$3.DOM;
  var toClientRect = function (geomRect) {
    return {
      left: geomRect.x,
      top: geomRect.y,
      width: geomRect.w,
      height: geomRect.h,
      right: geomRect.x + geomRect.w,
      bottom: geomRect.y + geomRect.h
    };
  };
  var hideAllFloatingPanels = function (editor) {
    global$2.each(editor.contextToolbars, function (toolbar) {
      if (toolbar.panel) {
        toolbar.panel.hide();
      }
    });
  };
  var movePanelTo = function (panel, pos) {
    panel.moveTo(pos.left, pos.top);
  };
  var togglePositionClass = function (panel, relPos, predicate) {
    relPos = relPos ? relPos.substr(0, 2) : '';
    global$2.each({
      t: 'down',
      b: 'up'
    }, function (cls, pos) {
      panel.classes.toggle('arrow-' + cls, predicate(pos, relPos.substr(0, 1)));
    });
    global$2.each({
      l: 'left',
      r: 'right'
    }, function (cls, pos) {
      panel.classes.toggle('arrow-' + cls, predicate(pos, relPos.substr(1, 1)));
    });
  };
  var userConstrain = function (handler, x, y, elementRect, contentAreaRect, panelRect) {
    panelRect = toClientRect({
      x: x,
      y: y,
      w: panelRect.w,
      h: panelRect.h
    });
    if (handler) {
      panelRect = handler({
        elementRect: toClientRect(elementRect),
        contentAreaRect: toClientRect(contentAreaRect),
        panelRect: panelRect
      });
    }
    return panelRect;
  };
  var addContextualToolbars = function (editor) {
    var scrollContainer;
    var getContextToolbars = function () {
      return editor.contextToolbars || [];
    };
    var getElementRect = function (elm) {
      var pos, targetRect, root;
      pos = DOM.getPos(editor.getContentAreaContainer());
      targetRect = editor.dom.getRect(elm);
      root = editor.dom.getRoot();
      if (root.nodeName === 'BODY') {
        targetRect.x -= root.ownerDocument.documentElement.scrollLeft || root.scrollLeft;
        targetRect.y -= root.ownerDocument.documentElement.scrollTop || root.scrollTop;
      }
      targetRect.x += pos.x;
      targetRect.y += pos.y;
      return targetRect;
    };
    var reposition = function (match, shouldShow) {
      var relPos, panelRect, elementRect, contentAreaRect, panel, relRect, testPositions, smallElementWidthThreshold;
      var handler = getInlineToolbarPositionHandler(editor);
      if (editor.removed) {
        return;
      }
      if (!match || !match.toolbar.panel) {
        hideAllFloatingPanels(editor);
        return;
      }
      testPositions = [
        'bc-tc',
        'tc-bc',
        'tl-bl',
        'bl-tl',
        'tr-br',
        'br-tr'
      ];
      panel = match.toolbar.panel;
      if (shouldShow) {
        panel.show();
      }
      elementRect = getElementRect(match.element);
      panelRect = DOM.getRect(panel.getEl());
      contentAreaRect = DOM.getRect(editor.getContentAreaContainer() || editor.getBody());
      var delta = $_agmmwau5jm0og2eq.getUiContainerDelta(panel).getOr({
        x: 0,
        y: 0
      });
      elementRect.x += delta.x;
      elementRect.y += delta.y;
      panelRect.x += delta.x;
      panelRect.y += delta.y;
      contentAreaRect.x += delta.x;
      contentAreaRect.y += delta.y;
      smallElementWidthThreshold = 25;
      if (DOM.getStyle(match.element, 'display', true) !== 'inline') {
        var clientRect = match.element.getBoundingClientRect();
        elementRect.w = clientRect.width;
        elementRect.h = clientRect.height;
      }
      if (!editor.inline) {
        contentAreaRect.w = editor.getDoc().documentElement.offsetWidth;
      }
      if (editor.selection.controlSelection.isResizable(match.element) && elementRect.w < smallElementWidthThreshold) {
        elementRect = global$6.inflate(elementRect, 0, 8);
      }
      relPos = global$6.findBestRelativePosition(panelRect, elementRect, contentAreaRect, testPositions);
      elementRect = global$6.clamp(elementRect, contentAreaRect);
      if (relPos) {
        relRect = global$6.relativePosition(panelRect, elementRect, relPos);
        movePanelTo(panel, userConstrain(handler, relRect.x, relRect.y, elementRect, contentAreaRect, panelRect));
      } else {
        contentAreaRect.h += panelRect.h;
        elementRect = global$6.intersect(contentAreaRect, elementRect);
        if (elementRect) {
          relPos = global$6.findBestRelativePosition(panelRect, elementRect, contentAreaRect, [
            'bc-tc',
            'bl-tl',
            'br-tr'
          ]);
          if (relPos) {
            relRect = global$6.relativePosition(panelRect, elementRect, relPos);
            movePanelTo(panel, userConstrain(handler, relRect.x, relRect.y, elementRect, contentAreaRect, panelRect));
          } else {
            movePanelTo(panel, userConstrain(handler, elementRect.x, elementRect.y, elementRect, contentAreaRect, panelRect));
          }
        } else {
          panel.hide();
        }
      }
      togglePositionClass(panel, relPos, function (pos1, pos2) {
        return pos1 === pos2;
      });
    };
    var repositionHandler = function (show) {
      return function () {
        var execute = function () {
          if (editor.selection) {
            reposition(findFrontMostMatch(editor.selection.getNode()), show);
          }
        };
        global$7.requestAnimationFrame(execute);
      };
    };
    var bindScrollEvent = function (panel) {
      if (!scrollContainer) {
        var reposition_1 = repositionHandler(true);
        var uiContainer_1 = $_agmmwau5jm0og2eq.getUiContainer(panel);
        scrollContainer = editor.selection.getScrollContainer() || editor.getWin();
        DOM.bind(scrollContainer, 'scroll', reposition_1);
        DOM.bind(uiContainer_1, 'scroll', reposition_1);
        editor.on('remove', function () {
          DOM.unbind(scrollContainer, 'scroll', reposition_1);
          DOM.unbind(uiContainer_1, 'scroll', reposition_1);
        });
      }
    };
    var showContextToolbar = function (match) {
      var panel;
      if (match.toolbar.panel) {
        match.toolbar.panel.show();
        reposition(match);
        return;
      }
      panel = global$4.create({
        type: 'floatpanel',
        role: 'dialog',
        classes: 'tinymce tinymce-inline arrow',
        ariaLabel: 'Inline toolbar',
        layout: 'flex',
        direction: 'column',
        align: 'stretch',
        autohide: false,
        autofix: true,
        fixed: true,
        border: 1,
        items: $_8166kdu8jm0og2ez.createToolbar(editor, match.toolbar.items),
        oncancel: function () {
          editor.focus();
        }
      });
      $_agmmwau5jm0og2eq.setUiContainer(editor, panel);
      bindScrollEvent(panel);
      match.toolbar.panel = panel;
      panel.renderTo().reflow();
      reposition(match);
    };
    var hideAllContextToolbars = function () {
      global$2.each(getContextToolbars(), function (toolbar) {
        if (toolbar.panel) {
          toolbar.panel.hide();
        }
      });
    };
    var findFrontMostMatch = function (targetElm) {
      var i, y, parentsAndSelf;
      var toolbars = getContextToolbars();
      parentsAndSelf = editor.$(targetElm).parents().add(targetElm);
      for (i = parentsAndSelf.length - 1; i >= 0; i--) {
        for (y = toolbars.length - 1; y >= 0; y--) {
          if (toolbars[y].predicate(parentsAndSelf[i])) {
            return {
              toolbar: toolbars[y],
              element: parentsAndSelf[i]
            };
          }
        }
      }
      return null;
    };
    editor.on('click keyup setContent ObjectResized', function (e) {
      if (e.type === 'setcontent' && !e.selection) {
        return;
      }
      global$7.setEditorTimeout(editor, function () {
        var match;
        match = findFrontMostMatch(editor.selection.getNode());
        if (match) {
          hideAllContextToolbars();
          showContextToolbar(match);
        } else {
          hideAllContextToolbars();
        }
      });
    });
    editor.on('blur hide contextmenu', hideAllContextToolbars);
    editor.on('ObjectResizeStart', function () {
      var match = findFrontMostMatch(editor.selection.getNode());
      if (match && match.toolbar.panel) {
        match.toolbar.panel.hide();
      }
    });
    editor.on('ResizeEditor ResizeWindow', repositionHandler(true));
    editor.on('nodeChange', repositionHandler(false));
    editor.on('remove', function () {
      global$2.each(getContextToolbars(), function (toolbar) {
        if (toolbar.panel) {
          toolbar.panel.remove();
        }
      });
      editor.contextToolbars = {};
    });
    editor.shortcuts.add('ctrl+shift+e > ctrl+shift+p', '', function () {
      var match = findFrontMostMatch(editor.selection.getNode());
      if (match && match.toolbar.panel) {
        match.toolbar.panel.items()[0].focus();
      }
    });
  };
  var $_2j0tl1u2jm0og2ei = { addContextualToolbars: addContextualToolbars };

  var typeOf = function (x) {
    if (x === null)
      return 'null';
    var t = typeof x;
    if (t === 'object' && Array.prototype.isPrototypeOf(x))
      return 'array';
    if (t === 'object' && String.prototype.isPrototypeOf(x))
      return 'string';
    return t;
  };
  var isType = function (type) {
    return function (value) {
      return typeOf(value) === type;
    };
  };






  var isFunction = isType('function');
  var isNumber = isType('number');

  var rawIndexOf = function () {
    var pIndexOf = Array.prototype.indexOf;
    var fastIndex = function (xs, x) {
      return pIndexOf.call(xs, x);
    };
    var slowIndex = function (xs, x) {
      return slowIndexOf(xs, x);
    };
    return pIndexOf === undefined ? slowIndex : fastIndex;
  }();
  var indexOf = function (xs, x) {
    var r = rawIndexOf(xs, x);
    return r === -1 ? Option.none() : Option.some(r);
  };

  var exists = function (xs, pred) {
    return findIndex(xs, pred).isSome();
  };


  var map = function (xs, f) {
    var len = xs.length;
    var r = new Array(len);
    for (var i = 0; i < len; i++) {
      var x = xs[i];
      r[i] = f(x, i, xs);
    }
    return r;
  };
  var each = function (xs, f) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      f(x, i, xs);
    }
  };


  var filter = function (xs, pred) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        r.push(x);
      }
    }
    return r;
  };


  var foldl = function (xs, f, acc) {
    each(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var find = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(x);
      }
    }
    return Option.none();
  };
  var findIndex = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(i);
      }
    }
    return Option.none();
  };
  var slowIndexOf = function (xs, x) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (xs[i] === x) {
        return i;
      }
    }
    return -1;
  };
  var push = Array.prototype.push;
  var flatten = function (xs) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (!Array.prototype.isPrototypeOf(xs[i]))
        throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
      push.apply(r, xs[i]);
    }
    return r;
  };



  var slice = Array.prototype.slice;
  var reverse = function (xs) {
    var r = slice.call(xs, 0);
    r.reverse();
    return r;
  };






  var from$1 = isFunction(Array.from) ? Array.from : function (x) {
    return slice.call(x);
  };

  var defaultMenus = {
    file: {
      title: 'File',
      items: 'newdocument restoredraft | preview | print'
    },
    edit: {
      title: 'Edit',
      items: 'undo redo | cut copy paste pastetext | selectall'
    },
    view: {
      title: 'View',
      items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen'
    },
    insert: {
      title: 'Insert',
      items: 'image link media template codesample inserttable | charmap hr | pagebreak nonbreaking anchor toc | insertdatetime'
    },
    format: {
      title: 'Format',
      items: 'bold italic underline strikethrough superscript subscript codeformat | blockformats align | removeformat'
    },
    tools: {
      title: 'Tools',
      items: 'spellchecker spellcheckerlanguage | a11ycheck code'
    },
    table: { title: 'Table' },
    help: { title: 'Help' }
  };
  var delimiterMenuNamePair = function () {
    return {
      name: '|',
      item: { text: '|' }
    };
  };
  var createMenuNameItemPair = function (name, item) {
    var menuItem = item ? {
      name: name,
      item: item
    } : null;
    return name === '|' ? delimiterMenuNamePair() : menuItem;
  };
  var hasItemName = function (namedMenuItems, name) {
    return findIndex(namedMenuItems, function (namedMenuItem) {
      return namedMenuItem.name === name;
    }).isSome();
  };
  var isSeparator = function (namedMenuItem) {
    return namedMenuItem && namedMenuItem.item.text === '|';
  };
  var cleanupMenu = function (namedMenuItems, removedMenuItems) {
    var menuItemsPass1 = filter(namedMenuItems, function (namedMenuItem) {
      return removedMenuItems.hasOwnProperty(namedMenuItem.name) === false;
    });
    var menuItemsPass2 = filter(menuItemsPass1, function (namedMenuItem, i, namedMenuItems) {
      return !isSeparator(namedMenuItem) || !isSeparator(namedMenuItems[i - 1]);
    });
    return filter(menuItemsPass2, function (namedMenuItem, i, namedMenuItems) {
      return !isSeparator(namedMenuItem) || i > 0 && i < namedMenuItems.length - 1;
    });
  };
  var createMenu = function (editorMenuItems, menus, removedMenuItems, context) {
    var menuButton, menu, namedMenuItems, isUserDefined;
    if (menus) {
      menu = menus[context];
      isUserDefined = true;
    } else {
      menu = defaultMenus[context];
    }
    if (menu) {
      menuButton = { text: menu.title };
      namedMenuItems = [];
      global$2.each((menu.items || '').split(/[ ,]/), function (name) {
        var namedMenuItem = createMenuNameItemPair(name, editorMenuItems[name]);
        if (namedMenuItem) {
          namedMenuItems.push(namedMenuItem);
        }
      });
      if (!isUserDefined) {
        global$2.each(editorMenuItems, function (item, name) {
          if (item.context === context && !hasItemName(namedMenuItems, name)) {
            if (item.separator === 'before') {
              namedMenuItems.push(delimiterMenuNamePair());
            }
            if (item.prependToContext) {
              namedMenuItems.unshift(createMenuNameItemPair(name, item));
            } else {
              namedMenuItems.push(createMenuNameItemPair(name, item));
            }
            if (item.separator === 'after') {
              namedMenuItems.push(delimiterMenuNamePair());
            }
          }
        });
      }
      menuButton.menu = map(cleanupMenu(namedMenuItems, removedMenuItems), function (menuItem) {
        return menuItem.item;
      });
      if (!menuButton.menu.length) {
        return null;
      }
    }
    return menuButton;
  };
  var getDefaultMenubar = function (editor) {
    var name;
    var defaultMenuBar = [];
    var menu = getMenu(editor);
    if (menu) {
      for (name in menu) {
        defaultMenuBar.push(name);
      }
    } else {
      for (name in defaultMenus) {
        defaultMenuBar.push(name);
      }
    }
    return defaultMenuBar;
  };
  var createMenuButtons = function (editor) {
    var menuButtons = [];
    var defaultMenuBar = getDefaultMenubar(editor);
    var removedMenuItems = global$2.makeMap(getRemovedMenuItems(editor).split(/[ ,]/));
    var menubar = getMenubar(editor);
    var enabledMenuNames = typeof menubar === 'string' ? menubar.split(/[ ,]/) : defaultMenuBar;
    for (var i = 0; i < enabledMenuNames.length; i++) {
      var menuItems = enabledMenuNames[i];
      var menu = createMenu(editor.menuItems, getMenu(editor), removedMenuItems, menuItems);
      if (menu) {
        menuButtons.push(menu);
      }
    }
    return menuButtons;
  };
  var $_crbkwku9jm0og2f2 = { createMenuButtons: createMenuButtons };

  var DOM$1 = global$3.DOM;
  var getSize = function (elm) {
    return {
      width: elm.clientWidth,
      height: elm.clientHeight
    };
  };
  var resizeTo = function (editor, width, height) {
    var containerElm, iframeElm, containerSize, iframeSize;
    containerElm = editor.getContainer();
    iframeElm = editor.getContentAreaContainer().firstChild;
    containerSize = getSize(containerElm);
    iframeSize = getSize(iframeElm);
    if (width !== null) {
      width = Math.max(getMinWidth(editor), width);
      width = Math.min(getMaxWidth(editor), width);
      DOM$1.setStyle(containerElm, 'width', width + (containerSize.width - iframeSize.width));
      DOM$1.setStyle(iframeElm, 'width', width);
    }
    height = Math.max(getMinHeight(editor), height);
    height = Math.min(getMaxHeight(editor), height);
    DOM$1.setStyle(iframeElm, 'height', height);
    $_7kj1vbu0jm0og2ef.fireResizeEditor(editor);
  };
  var resizeBy = function (editor, dw, dh) {
    var elm = editor.getContentAreaContainer();
    resizeTo(editor, elm.clientWidth + dw, elm.clientHeight + dh);
  };
  var $_398jz4ucjm0og2fe = {
    resizeTo: resizeTo,
    resizeBy: resizeBy
  };

  var global$8 = tinymce.util.Tools.resolve('tinymce.Env');

  var api = function (elm) {
    return {
      element: function () {
        return elm;
      }
    };
  };
  var trigger = function (sidebar, panel, callbackName) {
    var callback = sidebar.settings[callbackName];
    if (callback) {
      callback(api(panel.getEl('body')));
    }
  };
  var hidePanels = function (name, container, sidebars) {
    global$2.each(sidebars, function (sidebar) {
      var panel = container.items().filter('#' + sidebar.name)[0];
      if (panel && panel.visible() && sidebar.name !== name) {
        trigger(sidebar, panel, 'onhide');
        panel.visible(false);
      }
    });
  };
  var deactivateButtons = function (toolbar) {
    toolbar.items().each(function (ctrl) {
      ctrl.active(false);
    });
  };
  var findSidebar = function (sidebars, name) {
    return global$2.grep(sidebars, function (sidebar) {
      return sidebar.name === name;
    })[0];
  };
  var showPanel = function (editor, name, sidebars) {
    return function (e) {
      var btnCtrl = e.control;
      var container = btnCtrl.parents().filter('panel')[0];
      var panel = container.find('#' + name)[0];
      var sidebar = findSidebar(sidebars, name);
      hidePanels(name, container, sidebars);
      deactivateButtons(btnCtrl.parent());
      if (panel && panel.visible()) {
        trigger(sidebar, panel, 'onhide');
        panel.hide();
        btnCtrl.active(false);
      } else {
        if (panel) {
          panel.show();
          trigger(sidebar, panel, 'onshow');
        } else {
          panel = global$4.create({
            type: 'container',
            name: name,
            layout: 'stack',
            classes: 'sidebar-panel',
            html: ''
          });
          container.prepend(panel);
          trigger(sidebar, panel, 'onrender');
          trigger(sidebar, panel, 'onshow');
        }
        btnCtrl.active(true);
      }
      $_7kj1vbu0jm0og2ef.fireResizeEditor(editor);
    };
  };
  var isModernBrowser = function () {
    return !global$8.ie || global$8.ie >= 11;
  };
  var hasSidebar = function (editor) {
    return isModernBrowser() && editor.sidebars ? editor.sidebars.length > 0 : false;
  };
  var createSidebar = function (editor) {
    var buttons = global$2.map(editor.sidebars, function (sidebar) {
      var settings = sidebar.settings;
      return {
        type: 'button',
        icon: settings.icon,
        image: settings.image,
        tooltip: settings.tooltip,
        onclick: showPanel(editor, sidebar.name, editor.sidebars)
      };
    });
    return {
      type: 'panel',
      name: 'sidebar',
      layout: 'stack',
      classes: 'sidebar',
      items: [{
          type: 'toolbar',
          layout: 'stack',
          classes: 'sidebar-toolbar',
          items: buttons
        }]
    };
  };
  var $_f4muanudjm0og2fg = {
    hasSidebar: hasSidebar,
    createSidebar: createSidebar
  };

  var fireSkinLoaded$1 = function (editor) {
    var done = function () {
      editor._skinLoaded = true;
      $_7kj1vbu0jm0og2ef.fireSkinLoaded(editor);
    };
    return function () {
      if (editor.initialized) {
        done();
      } else {
        editor.on('init', done);
      }
    };
  };
  var $_8khbnjufjm0og2fj = { fireSkinLoaded: fireSkinLoaded$1 };

  var DOM$2 = global$3.DOM;
  var switchMode = function (panel) {
    return function (e) {
      panel.find('*').disabled(e.mode === 'readonly');
    };
  };
  var editArea = function (border) {
    return {
      type: 'panel',
      name: 'iframe',
      layout: 'stack',
      classes: 'edit-area',
      border: border,
      html: ''
    };
  };
  var editAreaContainer = function (editor) {
    return {
      type: 'panel',
      layout: 'stack',
      classes: 'edit-aria-container',
      border: '1 0 0 0',
      items: [
        editArea('0'),
        $_f4muanudjm0og2fg.createSidebar(editor)
      ]
    };
  };
  var render = function (editor, theme, args) {
    var panel, resizeHandleCtrl, startSize;
    if (isSkinDisabled(editor) === false && args.skinUiCss) {
      DOM$2.styleSheetLoader.load(args.skinUiCss, $_8khbnjufjm0og2fj.fireSkinLoaded(editor));
    } else {
      $_8khbnjufjm0og2fj.fireSkinLoaded(editor)();
    }
    panel = theme.panel = global$4.create({
      type: 'panel',
      role: 'application',
      classes: 'tinymce',
      style: 'visibility: hidden',
      layout: 'stack',
      border: 1,
      items: [
        {
          type: 'container',
          classes: 'top-part',
          items: [
            hasMenubar(editor) === false ? null : {
              type: 'menubar',
              border: '0 0 1 0',
              items: $_crbkwku9jm0og2f2.createMenuButtons(editor)
            },
            $_8166kdu8jm0og2ez.createToolbars(editor, getToolbarSize(editor))
          ]
        },
        $_f4muanudjm0og2fg.hasSidebar(editor) ? editAreaContainer(editor) : editArea('1 0 0 0')
      ]
    });
    $_agmmwau5jm0og2eq.setUiContainer(editor, panel);
    if (getResize(editor) !== 'none') {
      resizeHandleCtrl = {
        type: 'resizehandle',
        direction: getResize(editor),
        onResizeStart: function () {
          var elm = editor.getContentAreaContainer().firstChild;
          startSize = {
            width: elm.clientWidth,
            height: elm.clientHeight
          };
        },
        onResize: function (e) {
          if (getResize(editor) === 'both') {
            $_398jz4ucjm0og2fe.resizeTo(editor, startSize.width + e.deltaX, startSize.height + e.deltaY);
          } else {
            $_398jz4ucjm0og2fe.resizeTo(editor, null, startSize.height + e.deltaY);
          }
        }
      };
    }
    if (hasStatusbar(editor)) {
      var linkHtml = '<a href="https://www.tinymce.com/?utm_campaign=editor_referral&amp;utm_medium=poweredby&amp;utm_source=tinymce" rel="noopener" target="_blank" role="presentation" tabindex="-1">tinymce</a>';
      var html = global$5.translate([
        'Powered by {0}',
        linkHtml
      ]);
      var brandingLabel = isBrandingEnabled(editor) ? {
        type: 'label',
        classes: 'branding',
        html: ' ' + html
      } : null;
      panel.add({
        type: 'panel',
        name: 'statusbar',
        classes: 'statusbar',
        layout: 'flow',
        border: '1 0 0 0',
        ariaRoot: true,
        items: [
          {
            type: 'elementpath',
            editor: editor
          },
          resizeHandleCtrl,
          brandingLabel
        ]
      });
    }
    $_7kj1vbu0jm0og2ef.fireBeforeRenderUI(editor);
    editor.on('SwitchMode', switchMode(panel));
    panel.renderBefore(args.targetNode).reflow();
    if (isReadOnly(editor)) {
      editor.setMode('readonly');
    }
    if (args.width) {
      DOM$2.setStyle(panel.getEl(), 'width', args.width);
    }
    editor.on('remove', function () {
      panel.remove();
      panel = null;
    });
    $_a85u03u1jm0og2eg.addKeys(editor, panel);
    $_2j0tl1u2jm0og2ei.addContextualToolbars(editor);
    return {
      iframeContainer: panel.find('#iframe')[0].getEl(),
      editorContainer: panel.getEl()
    };
  };
  var $_assqictwjm0og2ea = { render: render };

  var global$9 = tinymce.util.Tools.resolve('tinymce.dom.DomQuery');

  var count = 0;
  var funcs = {
    id: function () {
      return 'mceu_' + count++;
    },
    create: function (name$$1, attrs, children) {
      var elm = document.createElement(name$$1);
      global$3.DOM.setAttribs(elm, attrs);
      if (typeof children === 'string') {
        elm.innerHTML = children;
      } else {
        global$2.each(children, function (child) {
          if (child.nodeType) {
            elm.appendChild(child);
          }
        });
      }
      return elm;
    },
    createFragment: function (html) {
      return global$3.DOM.createFragment(html);
    },
    getWindowSize: function () {
      return global$3.DOM.getViewPort();
    },
    getSize: function (elm) {
      var width, height;
      if (elm.getBoundingClientRect) {
        var rect = elm.getBoundingClientRect();
        width = Math.max(rect.width || rect.right - rect.left, elm.offsetWidth);
        height = Math.max(rect.height || rect.bottom - rect.bottom, elm.offsetHeight);
      } else {
        width = elm.offsetWidth;
        height = elm.offsetHeight;
      }
      return {
        width: width,
        height: height
      };
    },
    getPos: function (elm, root) {
      return global$3.DOM.getPos(elm, root || funcs.getContainer());
    },
    getContainer: function () {
      return global$8.container ? global$8.container : document.body;
    },
    getViewPort: function (win) {
      return global$3.DOM.getViewPort(win);
    },
    get: function (id) {
      return document.getElementById(id);
    },
    addClass: function (elm, cls) {
      return global$3.DOM.addClass(elm, cls);
    },
    removeClass: function (elm, cls) {
      return global$3.DOM.removeClass(elm, cls);
    },
    hasClass: function (elm, cls) {
      return global$3.DOM.hasClass(elm, cls);
    },
    toggleClass: function (elm, cls, state) {
      return global$3.DOM.toggleClass(elm, cls, state);
    },
    css: function (elm, name$$1, value) {
      return global$3.DOM.setStyle(elm, name$$1, value);
    },
    getRuntimeStyle: function (elm, name$$1) {
      return global$3.DOM.getStyle(elm, name$$1, true);
    },
    on: function (target, name$$1, callback, scope) {
      return global$3.DOM.bind(target, name$$1, callback, scope);
    },
    off: function (target, name$$1, callback) {
      return global$3.DOM.unbind(target, name$$1, callback);
    },
    fire: function (target, name$$1, args) {
      return global$3.DOM.fire(target, name$$1, args);
    },
    innerHtml: function (elm, html) {
      global$3.DOM.setHTML(elm, html);
    }
  };

  var isStatic = function (elm) {
    return funcs.getRuntimeStyle(elm, 'position') === 'static';
  };
  var isFixed = function (ctrl) {
    return ctrl.state.get('fixed');
  };
  function calculateRelativePosition(ctrl, targetElm, rel) {
    var ctrlElm, pos, x, y, selfW, selfH, targetW, targetH, viewport, size;
    viewport = getWindowViewPort();
    pos = funcs.getPos(targetElm, $_agmmwau5jm0og2eq.getUiContainer(ctrl));
    x = pos.x;
    y = pos.y;
    if (isFixed(ctrl) && isStatic(document.body)) {
      x -= viewport.x;
      y -= viewport.y;
    }
    ctrlElm = ctrl.getEl();
    size = funcs.getSize(ctrlElm);
    selfW = size.width;
    selfH = size.height;
    size = funcs.getSize(targetElm);
    targetW = size.width;
    targetH = size.height;
    rel = (rel || '').split('');
    if (rel[0] === 'b') {
      y += targetH;
    }
    if (rel[1] === 'r') {
      x += targetW;
    }
    if (rel[0] === 'c') {
      y += Math.round(targetH / 2);
    }
    if (rel[1] === 'c') {
      x += Math.round(targetW / 2);
    }
    if (rel[3] === 'b') {
      y -= selfH;
    }
    if (rel[4] === 'r') {
      x -= selfW;
    }
    if (rel[3] === 'c') {
      y -= Math.round(selfH / 2);
    }
    if (rel[4] === 'c') {
      x -= Math.round(selfW / 2);
    }
    return {
      x: x,
      y: y,
      w: selfW,
      h: selfH
    };
  }
  var getUiContainerViewPort = function (customUiContainer) {
    return {
      x: 0,
      y: 0,
      w: customUiContainer.scrollWidth - 1,
      h: customUiContainer.scrollHeight - 1
    };
  };
  var getWindowViewPort = function () {
    var win = window;
    var x = Math.max(win.pageXOffset, document.body.scrollLeft, document.documentElement.scrollLeft);
    var y = Math.max(win.pageYOffset, document.body.scrollTop, document.documentElement.scrollTop);
    var w = win.innerWidth || document.documentElement.clientWidth;
    var h = win.innerHeight || document.documentElement.clientHeight;
    return {
      x: x,
      y: y,
      w: x + w,
      h: y + h
    };
  };
  var getViewPortRect = function (ctrl) {
    var customUiContainer = $_agmmwau5jm0og2eq.getUiContainer(ctrl);
    return customUiContainer && !isFixed(ctrl) ? getUiContainerViewPort(customUiContainer) : getWindowViewPort();
  };
  var $_43ajw6uljm0og2gm = {
    testMoveRel: function (elm, rels) {
      var viewPortRect = getViewPortRect(this);
      for (var i = 0; i < rels.length; i++) {
        var pos = calculateRelativePosition(this, elm, rels[i]);
        if (isFixed(this)) {
          if (pos.x > 0 && pos.x + pos.w < viewPortRect.w && pos.y > 0 && pos.y + pos.h < viewPortRect.h) {
            return rels[i];
          }
        } else {
          if (pos.x > viewPortRect.x && pos.x + pos.w < viewPortRect.w && pos.y > viewPortRect.y && pos.y + pos.h < viewPortRect.h) {
            return rels[i];
          }
        }
      }
      return rels[0];
    },
    moveRel: function (elm, rel) {
      if (typeof rel !== 'string') {
        rel = this.testMoveRel(elm, rel);
      }
      var pos = calculateRelativePosition(this, elm, rel);
      return this.moveTo(pos.x, pos.y);
    },
    moveBy: function (dx, dy) {
      var self$$1 = this, rect = self$$1.layoutRect();
      self$$1.moveTo(rect.x + dx, rect.y + dy);
      return self$$1;
    },
    moveTo: function (x, y) {
      var self$$1 = this;
      function constrain(value, max, size) {
        if (value < 0) {
          return 0;
        }
        if (value + size > max) {
          value = max - size;
          return value < 0 ? 0 : value;
        }
        return value;
      }
      if (self$$1.settings.constrainToViewport) {
        var viewPortRect = getViewPortRect(this);
        var layoutRect = self$$1.layoutRect();
        x = constrain(x, viewPortRect.w, layoutRect.w);
        y = constrain(y, viewPortRect.h, layoutRect.h);
      }
      var uiContainer = $_agmmwau5jm0og2eq.getUiContainer(self$$1);
      if (uiContainer && isStatic(uiContainer) && !isFixed(self$$1)) {
        x -= uiContainer.scrollLeft;
        y -= uiContainer.scrollTop;
      }
      if (uiContainer) {
        x += 1;
        y += 1;
      }
      if (self$$1.state.get('rendered')) {
        self$$1.layoutRect({
          x: x,
          y: y
        }).repaint();
      } else {
        self$$1.settings.x = x;
        self$$1.settings.y = y;
      }
      self$$1.fire('move', {
        x: x,
        y: y
      });
      return self$$1;
    }
  };

  var global$10 = tinymce.util.Tools.resolve('tinymce.util.Class');

  var global$11 = tinymce.util.Tools.resolve('tinymce.util.EventDispatcher');

  var $_d8f8oturjm0og2hu = {
    parseBox: function (value) {
      var len;
      var radix = 10;
      if (!value) {
        return;
      }
      if (typeof value === 'number') {
        value = value || 0;
        return {
          top: value,
          left: value,
          bottom: value,
          right: value
        };
      }
      value = value.split(' ');
      len = value.length;
      if (len === 1) {
        value[1] = value[2] = value[3] = value[0];
      } else if (len === 2) {
        value[2] = value[0];
        value[3] = value[1];
      } else if (len === 3) {
        value[3] = value[1];
      }
      return {
        top: parseInt(value[0], radix) || 0,
        right: parseInt(value[1], radix) || 0,
        bottom: parseInt(value[2], radix) || 0,
        left: parseInt(value[3], radix) || 0
      };
    },
    measureBox: function (elm, prefix) {
      function getStyle(name) {
        var defaultView = elm.ownerDocument.defaultView;
        if (defaultView) {
          var computedStyle = defaultView.getComputedStyle(elm, null);
          if (computedStyle) {
            name = name.replace(/[A-Z]/g, function (a) {
              return '-' + a;
            });
            return computedStyle.getPropertyValue(name);
          } else {
            return null;
          }
        }
        return elm.currentStyle[name];
      }
      function getSide(name) {
        var val = parseFloat(getStyle(name));
        return isNaN(val) ? 0 : val;
      }
      return {
        top: getSide(prefix + 'TopWidth'),
        right: getSide(prefix + 'RightWidth'),
        bottom: getSide(prefix + 'BottomWidth'),
        left: getSide(prefix + 'LeftWidth')
      };
    }
  };

  function noop$1() {
  }
  function ClassList(onchange) {
    this.cls = [];
    this.cls._map = {};
    this.onchange = onchange || noop$1;
    this.prefix = '';
  }
  global$2.extend(ClassList.prototype, {
    add: function (cls) {
      if (cls && !this.contains(cls)) {
        this.cls._map[cls] = true;
        this.cls.push(cls);
        this._change();
      }
      return this;
    },
    remove: function (cls) {
      if (this.contains(cls)) {
        var i = void 0;
        for (i = 0; i < this.cls.length; i++) {
          if (this.cls[i] === cls) {
            break;
          }
        }
        this.cls.splice(i, 1);
        delete this.cls._map[cls];
        this._change();
      }
      return this;
    },
    toggle: function (cls, state) {
      var curState = this.contains(cls);
      if (curState !== state) {
        if (curState) {
          this.remove(cls);
        } else {
          this.add(cls);
        }
        this._change();
      }
      return this;
    },
    contains: function (cls) {
      return !!this.cls._map[cls];
    },
    _change: function () {
      delete this.clsValue;
      this.onchange.call(this);
    }
  });
  ClassList.prototype.toString = function () {
    var value;
    if (this.clsValue) {
      return this.clsValue;
    }
    value = '';
    for (var i = 0; i < this.cls.length; i++) {
      if (i > 0) {
        value += ' ';
      }
      value += this.prefix + this.cls[i];
    }
    return value;
  };

  function unique(array) {
    var uniqueItems = [];
    var i = array.length, item;
    while (i--) {
      item = array[i];
      if (!item.__checked) {
        uniqueItems.push(item);
        item.__checked = 1;
      }
    }
    i = uniqueItems.length;
    while (i--) {
      delete uniqueItems[i].__checked;
    }
    return uniqueItems;
  }
  var expression = /^([\w\\*]+)?(?:#([\w\-\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i;
  var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
  var whiteSpace = /^\s*|\s*$/g;
  var Collection;
  var Selector = global$10.extend({
    init: function (selector) {
      var match = this.match;
      function compileNameFilter(name) {
        if (name) {
          name = name.toLowerCase();
          return function (item) {
            return name === '*' || item.type === name;
          };
        }
      }
      function compileIdFilter(id) {
        if (id) {
          return function (item) {
            return item._name === id;
          };
        }
      }
      function compileClassesFilter(classes) {
        if (classes) {
          classes = classes.split('.');
          return function (item) {
            var i = classes.length;
            while (i--) {
              if (!item.classes.contains(classes[i])) {
                return false;
              }
            }
            return true;
          };
        }
      }
      function compileAttrFilter(name, cmp, check) {
        if (name) {
          return function (item) {
            var value = item[name] ? item[name]() : '';
            return !cmp ? !!check : cmp === '=' ? value === check : cmp === '*=' ? value.indexOf(check) >= 0 : cmp === '~=' ? (' ' + value + ' ').indexOf(' ' + check + ' ') >= 0 : cmp === '!=' ? value !== check : cmp === '^=' ? value.indexOf(check) === 0 : cmp === '$=' ? value.substr(value.length - check.length) === check : false;
          };
        }
      }
      function compilePsuedoFilter(name) {
        var notSelectors;
        if (name) {
          name = /(?:not\((.+)\))|(.+)/i.exec(name);
          if (!name[1]) {
            name = name[2];
            return function (item, index, length) {
              return name === 'first' ? index === 0 : name === 'last' ? index === length - 1 : name === 'even' ? index % 2 === 0 : name === 'odd' ? index % 2 === 1 : item[name] ? item[name]() : false;
            };
          }
          notSelectors = parseChunks(name[1], []);
          return function (item) {
            return !match(item, notSelectors);
          };
        }
      }
      function compile(selector, filters, direct) {
        var parts;
        function add(filter) {
          if (filter) {
            filters.push(filter);
          }
        }
        parts = expression.exec(selector.replace(whiteSpace, ''));
        add(compileNameFilter(parts[1]));
        add(compileIdFilter(parts[2]));
        add(compileClassesFilter(parts[3]));
        add(compileAttrFilter(parts[4], parts[5], parts[6]));
        add(compilePsuedoFilter(parts[7]));
        filters.pseudo = !!parts[7];
        filters.direct = direct;
        return filters;
      }
      function parseChunks(selector, selectors) {
        var parts = [];
        var extra, matches, i;
        do {
          chunker.exec('');
          matches = chunker.exec(selector);
          if (matches) {
            selector = matches[3];
            parts.push(matches[1]);
            if (matches[2]) {
              extra = matches[3];
              break;
            }
          }
        } while (matches);
        if (extra) {
          parseChunks(extra, selectors);
        }
        selector = [];
        for (i = 0; i < parts.length; i++) {
          if (parts[i] !== '>') {
            selector.push(compile(parts[i], [], parts[i - 1] === '>'));
          }
        }
        selectors.push(selector);
        return selectors;
      }
      this._selectors = parseChunks(selector, []);
    },
    match: function (control, selectors) {
      var i, l, si, sl, selector, fi, fl, filters, index, length, siblings, count, item;
      selectors = selectors || this._selectors;
      for (i = 0, l = selectors.length; i < l; i++) {
        selector = selectors[i];
        sl = selector.length;
        item = control;
        count = 0;
        for (si = sl - 1; si >= 0; si--) {
          filters = selector[si];
          while (item) {
            if (filters.pseudo) {
              siblings = item.parent().items();
              index = length = siblings.length;
              while (index--) {
                if (siblings[index] === item) {
                  break;
                }
              }
            }
            for (fi = 0, fl = filters.length; fi < fl; fi++) {
              if (!filters[fi](item, index, length)) {
                fi = fl + 1;
                break;
              }
            }
            if (fi === fl) {
              count++;
              break;
            } else {
              if (si === sl - 1) {
                break;
              }
            }
            item = item.parent();
          }
        }
        if (count === sl) {
          return true;
        }
      }
      return false;
    },
    find: function (container) {
      var matches = [], i, l;
      var selectors = this._selectors;
      function collect(items, selector, index) {
        var i, l, fi, fl, item;
        var filters = selector[index];
        for (i = 0, l = items.length; i < l; i++) {
          item = items[i];
          for (fi = 0, fl = filters.length; fi < fl; fi++) {
            if (!filters[fi](item, i, l)) {
              fi = fl + 1;
              break;
            }
          }
          if (fi === fl) {
            if (index === selector.length - 1) {
              matches.push(item);
            } else {
              if (item.items) {
                collect(item.items(), selector, index + 1);
              }
            }
          } else if (filters.direct) {
            return;
          }
          if (item.items) {
            collect(item.items(), selector, index);
          }
        }
      }
      if (container.items) {
        for (i = 0, l = selectors.length; i < l; i++) {
          collect(container.items(), selectors[i], 0);
        }
        if (l > 1) {
          matches = unique(matches);
        }
      }
      if (!Collection) {
        Collection = Selector.Collection;
      }
      return new Collection(matches);
    }
  });

  var Collection$1;
  var proto;
  var push$1 = Array.prototype.push;
  var slice$1 = Array.prototype.slice;
  proto = {
    length: 0,
    init: function (items) {
      if (items) {
        this.add(items);
      }
    },
    add: function (items) {
      var self = this;
      if (!global$2.isArray(items)) {
        if (items instanceof Collection$1) {
          self.add(items.toArray());
        } else {
          push$1.call(self, items);
        }
      } else {
        push$1.apply(self, items);
      }
      return self;
    },
    set: function (items) {
      var self = this;
      var len = self.length;
      var i;
      self.length = 0;
      self.add(items);
      for (i = self.length; i < len; i++) {
        delete self[i];
      }
      return self;
    },
    filter: function (selector) {
      var self = this;
      var i, l;
      var matches = [];
      var item, match;
      if (typeof selector === 'string') {
        selector = new Selector(selector);
        match = function (item) {
          return selector.match(item);
        };
      } else {
        match = selector;
      }
      for (i = 0, l = self.length; i < l; i++) {
        item = self[i];
        if (match(item)) {
          matches.push(item);
        }
      }
      return new Collection$1(matches);
    },
    slice: function () {
      return new Collection$1(slice$1.apply(this, arguments));
    },
    eq: function (index) {
      return index === -1 ? this.slice(index) : this.slice(index, +index + 1);
    },
    each: function (callback) {
      global$2.each(this, callback);
      return this;
    },
    toArray: function () {
      return global$2.toArray(this);
    },
    indexOf: function (ctrl) {
      var self = this;
      var i = self.length;
      while (i--) {
        if (self[i] === ctrl) {
          break;
        }
      }
      return i;
    },
    reverse: function () {
      return new Collection$1(global$2.toArray(this).reverse());
    },
    hasClass: function (cls) {
      return this[0] ? this[0].classes.contains(cls) : false;
    },
    prop: function (name, value) {
      var self = this;
      var item;
      if (value !== undefined) {
        self.each(function (item) {
          if (item[name]) {
            item[name](value);
          }
        });
        return self;
      }
      item = self[0];
      if (item && item[name]) {
        return item[name]();
      }
    },
    exec: function (name) {
      var self = this, args = global$2.toArray(arguments).slice(1);
      self.each(function (item) {
        if (item[name]) {
          item[name].apply(item, args);
        }
      });
      return self;
    },
    remove: function () {
      var i = this.length;
      while (i--) {
        this[i].remove();
      }
      return this;
    },
    addClass: function (cls) {
      return this.each(function (item) {
        item.classes.add(cls);
      });
    },
    removeClass: function (cls) {
      return this.each(function (item) {
        item.classes.remove(cls);
      });
    }
  };
  global$2.each('fire on off show hide append prepend before after reflow'.split(' '), function (name) {
    proto[name] = function () {
      var args = global$2.toArray(arguments);
      this.each(function (ctrl) {
        if (name in ctrl) {
          ctrl[name].apply(ctrl, args);
        }
      });
      return this;
    };
  });
  global$2.each('text name disabled active selected checked visible parent value data'.split(' '), function (name) {
    proto[name] = function (value) {
      return this.prop(name, value);
    };
  });
  Collection$1 = global$10.extend(proto);
  Selector.Collection = Collection$1;
  var Collection$2 = Collection$1;

  var Binding = function (settings) {
    this.create = settings.create;
  };
  Binding.create = function (model, name) {
    return new Binding({
      create: function (otherModel, otherName) {
        var bindings;
        var fromSelfToOther = function (e) {
          otherModel.set(otherName, e.value);
        };
        var fromOtherToSelf = function (e) {
          model.set(name, e.value);
        };
        otherModel.on('change:' + otherName, fromOtherToSelf);
        model.on('change:' + name, fromSelfToOther);
        bindings = otherModel._bindings;
        if (!bindings) {
          bindings = otherModel._bindings = [];
          otherModel.on('destroy', function () {
            var i = bindings.length;
            while (i--) {
              bindings[i]();
            }
          });
        }
        bindings.push(function () {
          model.off('change:' + name, fromSelfToOther);
        });
        return model.get(name);
      }
    });
  };

  var global$12 = tinymce.util.Tools.resolve('tinymce.util.Observable');

  function isNode(node) {
    return node.nodeType > 0;
  }
  function isEqual(a, b) {
    var k, checked;
    if (a === b) {
      return true;
    }
    if (a === null || b === null) {
      return a === b;
    }
    if (typeof a !== 'object' || typeof b !== 'object') {
      return a === b;
    }
    if (global$2.isArray(b)) {
      if (a.length !== b.length) {
        return false;
      }
      k = a.length;
      while (k--) {
        if (!isEqual(a[k], b[k])) {
          return false;
        }
      }
    }
    if (isNode(a) || isNode(b)) {
      return a === b;
    }
    checked = {};
    for (k in b) {
      if (!isEqual(a[k], b[k])) {
        return false;
      }
      checked[k] = true;
    }
    for (k in a) {
      if (!checked[k] && !isEqual(a[k], b[k])) {
        return false;
      }
    }
    return true;
  }
  var ObservableObject = global$10.extend({
    Mixins: [global$12],
    init: function (data) {
      var name, value;
      data = data || {};
      for (name in data) {
        value = data[name];
        if (value instanceof Binding) {
          data[name] = value.create(this, name);
        }
      }
      this.data = data;
    },
    set: function (name, value) {
      var key, args;
      var oldValue = this.data[name];
      if (value instanceof Binding) {
        value = value.create(this, name);
      }
      if (typeof name === 'object') {
        for (key in name) {
          this.set(key, name[key]);
        }
        return this;
      }
      if (!isEqual(oldValue, value)) {
        this.data[name] = value;
        args = {
          target: this,
          name: name,
          value: value,
          oldValue: oldValue
        };
        this.fire('change:' + name, args);
        this.fire('change', args);
      }
      return this;
    },
    get: function (name) {
      return this.data[name];
    },
    has: function (name) {
      return name in this.data;
    },
    bind: function (name) {
      return Binding.create(this, name);
    },
    destroy: function () {
      this.fire('destroy');
    }
  });

  var dirtyCtrls = {};
  var animationFrameRequested;
  var $_ck0dfmuyjm0og2id = {
    add: function (ctrl) {
      var parent$$1 = ctrl.parent();
      if (parent$$1) {
        if (!parent$$1._layout || parent$$1._layout.isNative()) {
          return;
        }
        if (!dirtyCtrls[parent$$1._id]) {
          dirtyCtrls[parent$$1._id] = parent$$1;
        }
        if (!animationFrameRequested) {
          animationFrameRequested = true;
          global$7.requestAnimationFrame(function () {
            var id, ctrl;
            animationFrameRequested = false;
            for (id in dirtyCtrls) {
              ctrl = dirtyCtrls[id];
              if (ctrl.state.get('rendered')) {
                ctrl.reflow();
              }
            }
            dirtyCtrls = {};
          }, document.body);
        }
      }
    },
    remove: function (ctrl) {
      if (dirtyCtrls[ctrl._id]) {
        delete dirtyCtrls[ctrl._id];
      }
    }
  };

  var hasMouseWheelEventSupport = 'onmousewheel' in document;
  var hasWheelEventSupport = false;
  var classPrefix = 'mce-';
  var Control;
  var idCounter = 0;
  var proto$1 = {
    Statics: { classPrefix: classPrefix },
    isRtl: function () {
      return Control.rtl;
    },
    classPrefix: classPrefix,
    init: function (settings) {
      var self$$1 = this;
      var classes, defaultClasses;
      function applyClasses(classes) {
        var i;
        classes = classes.split(' ');
        for (i = 0; i < classes.length; i++) {
          self$$1.classes.add(classes[i]);
        }
      }
      self$$1.settings = settings = global$2.extend({}, self$$1.Defaults, settings);
      self$$1._id = settings.id || 'mceu_' + idCounter++;
      self$$1._aria = { role: settings.role };
      self$$1._elmCache = {};
      self$$1.$ = global$9;
      self$$1.state = new ObservableObject({
        visible: true,
        active: false,
        disabled: false,
        value: ''
      });
      self$$1.data = new ObservableObject(settings.data);
      self$$1.classes = new ClassList(function () {
        if (self$$1.state.get('rendered')) {
          self$$1.getEl().className = this.toString();
        }
      });
      self$$1.classes.prefix = self$$1.classPrefix;
      classes = settings.classes;
      if (classes) {
        if (self$$1.Defaults) {
          defaultClasses = self$$1.Defaults.classes;
          if (defaultClasses && classes !== defaultClasses) {
            applyClasses(defaultClasses);
          }
        }
        applyClasses(classes);
      }
      global$2.each('title text name visible disabled active value'.split(' '), function (name$$1) {
        if (name$$1 in settings) {
          self$$1[name$$1](settings[name$$1]);
        }
      });
      self$$1.on('click', function () {
        if (self$$1.disabled()) {
          return false;
        }
      });
      self$$1.settings = settings;
      self$$1.borderBox = $_d8f8oturjm0og2hu.parseBox(settings.border);
      self$$1.paddingBox = $_d8f8oturjm0og2hu.parseBox(settings.padding);
      self$$1.marginBox = $_d8f8oturjm0og2hu.parseBox(settings.margin);
      if (settings.hidden) {
        self$$1.hide();
      }
    },
    Properties: 'parent,name',
    getContainerElm: function () {
      var uiContainer = $_agmmwau5jm0og2eq.getUiContainer(this);
      return uiContainer ? uiContainer : funcs.getContainer();
    },
    getParentCtrl: function (elm) {
      var ctrl;
      var lookup = this.getRoot().controlIdLookup;
      while (elm && lookup) {
        ctrl = lookup[elm.id];
        if (ctrl) {
          break;
        }
        elm = elm.parentNode;
      }
      return ctrl;
    },
    initLayoutRect: function () {
      var self$$1 = this;
      var settings = self$$1.settings;
      var borderBox, layoutRect;
      var elm = self$$1.getEl();
      var width, height, minWidth, minHeight, autoResize;
      var startMinWidth, startMinHeight, initialSize;
      borderBox = self$$1.borderBox = self$$1.borderBox || $_d8f8oturjm0og2hu.measureBox(elm, 'border');
      self$$1.paddingBox = self$$1.paddingBox || $_d8f8oturjm0og2hu.measureBox(elm, 'padding');
      self$$1.marginBox = self$$1.marginBox || $_d8f8oturjm0og2hu.measureBox(elm, 'margin');
      initialSize = funcs.getSize(elm);
      startMinWidth = settings.minWidth;
      startMinHeight = settings.minHeight;
      minWidth = startMinWidth || initialSize.width;
      minHeight = startMinHeight || initialSize.height;
      width = settings.width;
      height = settings.height;
      autoResize = settings.autoResize;
      autoResize = typeof autoResize !== 'undefined' ? autoResize : !width && !height;
      width = width || minWidth;
      height = height || minHeight;
      var deltaW = borderBox.left + borderBox.right;
      var deltaH = borderBox.top + borderBox.bottom;
      var maxW = settings.maxWidth || 65535;
      var maxH = settings.maxHeight || 65535;
      self$$1._layoutRect = layoutRect = {
        x: settings.x || 0,
        y: settings.y || 0,
        w: width,
        h: height,
        deltaW: deltaW,
        deltaH: deltaH,
        contentW: width - deltaW,
        contentH: height - deltaH,
        innerW: width - deltaW,
        innerH: height - deltaH,
        startMinWidth: startMinWidth || 0,
        startMinHeight: startMinHeight || 0,
        minW: Math.min(minWidth, maxW),
        minH: Math.min(minHeight, maxH),
        maxW: maxW,
        maxH: maxH,
        autoResize: autoResize,
        scrollW: 0
      };
      self$$1._lastLayoutRect = {};
      return layoutRect;
    },
    layoutRect: function (newRect) {
      var self$$1 = this;
      var curRect = self$$1._layoutRect, lastLayoutRect, size, deltaWidth, deltaHeight, repaintControls;
      if (!curRect) {
        curRect = self$$1.initLayoutRect();
      }
      if (newRect) {
        deltaWidth = curRect.deltaW;
        deltaHeight = curRect.deltaH;
        if (newRect.x !== undefined) {
          curRect.x = newRect.x;
        }
        if (newRect.y !== undefined) {
          curRect.y = newRect.y;
        }
        if (newRect.minW !== undefined) {
          curRect.minW = newRect.minW;
        }
        if (newRect.minH !== undefined) {
          curRect.minH = newRect.minH;
        }
        size = newRect.w;
        if (size !== undefined) {
          size = size < curRect.minW ? curRect.minW : size;
          size = size > curRect.maxW ? curRect.maxW : size;
          curRect.w = size;
          curRect.innerW = size - deltaWidth;
        }
        size = newRect.h;
        if (size !== undefined) {
          size = size < curRect.minH ? curRect.minH : size;
          size = size > curRect.maxH ? curRect.maxH : size;
          curRect.h = size;
          curRect.innerH = size - deltaHeight;
        }
        size = newRect.innerW;
        if (size !== undefined) {
          size = size < curRect.minW - deltaWidth ? curRect.minW - deltaWidth : size;
          size = size > curRect.maxW - deltaWidth ? curRect.maxW - deltaWidth : size;
          curRect.innerW = size;
          curRect.w = size + deltaWidth;
        }
        size = newRect.innerH;
        if (size !== undefined) {
          size = size < curRect.minH - deltaHeight ? curRect.minH - deltaHeight : size;
          size = size > curRect.maxH - deltaHeight ? curRect.maxH - deltaHeight : size;
          curRect.innerH = size;
          curRect.h = size + deltaHeight;
        }
        if (newRect.contentW !== undefined) {
          curRect.contentW = newRect.contentW;
        }
        if (newRect.contentH !== undefined) {
          curRect.contentH = newRect.contentH;
        }
        lastLayoutRect = self$$1._lastLayoutRect;
        if (lastLayoutRect.x !== curRect.x || lastLayoutRect.y !== curRect.y || lastLayoutRect.w !== curRect.w || lastLayoutRect.h !== curRect.h) {
          repaintControls = Control.repaintControls;
          if (repaintControls) {
            if (repaintControls.map && !repaintControls.map[self$$1._id]) {
              repaintControls.push(self$$1);
              repaintControls.map[self$$1._id] = true;
            }
          }
          lastLayoutRect.x = curRect.x;
          lastLayoutRect.y = curRect.y;
          lastLayoutRect.w = curRect.w;
          lastLayoutRect.h = curRect.h;
        }
        return self$$1;
      }
      return curRect;
    },
    repaint: function () {
      var self$$1 = this;
      var style, bodyStyle, bodyElm, rect, borderBox;
      var borderW, borderH, lastRepaintRect, round, value;
      round = !document.createRange ? Math.round : function (value) {
        return value;
      };
      style = self$$1.getEl().style;
      rect = self$$1._layoutRect;
      lastRepaintRect = self$$1._lastRepaintRect || {};
      borderBox = self$$1.borderBox;
      borderW = borderBox.left + borderBox.right;
      borderH = borderBox.top + borderBox.bottom;
      if (rect.x !== lastRepaintRect.x) {
        style.left = round(rect.x) + 'px';
        lastRepaintRect.x = rect.x;
      }
      if (rect.y !== lastRepaintRect.y) {
        style.top = round(rect.y) + 'px';
        lastRepaintRect.y = rect.y;
      }
      if (rect.w !== lastRepaintRect.w) {
        value = round(rect.w - borderW);
        style.width = (value >= 0 ? value : 0) + 'px';
        lastRepaintRect.w = rect.w;
      }
      if (rect.h !== lastRepaintRect.h) {
        value = round(rect.h - borderH);
        style.height = (value >= 0 ? value : 0) + 'px';
        lastRepaintRect.h = rect.h;
      }
      if (self$$1._hasBody && rect.innerW !== lastRepaintRect.innerW) {
        value = round(rect.innerW);
        bodyElm = self$$1.getEl('body');
        if (bodyElm) {
          bodyStyle = bodyElm.style;
          bodyStyle.width = (value >= 0 ? value : 0) + 'px';
        }
        lastRepaintRect.innerW = rect.innerW;
      }
      if (self$$1._hasBody && rect.innerH !== lastRepaintRect.innerH) {
        value = round(rect.innerH);
        bodyElm = bodyElm || self$$1.getEl('body');
        if (bodyElm) {
          bodyStyle = bodyStyle || bodyElm.style;
          bodyStyle.height = (value >= 0 ? value : 0) + 'px';
        }
        lastRepaintRect.innerH = rect.innerH;
      }
      self$$1._lastRepaintRect = lastRepaintRect;
      self$$1.fire('repaint', {}, false);
    },
    updateLayoutRect: function () {
      var self$$1 = this;
      self$$1.parent()._lastRect = null;
      funcs.css(self$$1.getEl(), {
        width: '',
        height: ''
      });
      self$$1._layoutRect = self$$1._lastRepaintRect = self$$1._lastLayoutRect = null;
      self$$1.initLayoutRect();
    },
    on: function (name$$1, callback) {
      var self$$1 = this;
      function resolveCallbackName(name$$1) {
        var callback, scope;
        if (typeof name$$1 !== 'string') {
          return name$$1;
        }
        return function (e) {
          if (!callback) {
            self$$1.parentsAndSelf().each(function (ctrl) {
              var callbacks = ctrl.settings.callbacks;
              if (callbacks && (callback = callbacks[name$$1])) {
                scope = ctrl;
                return false;
              }
            });
          }
          if (!callback) {
            e.action = name$$1;
            this.fire('execute', e);
            return;
          }
          return callback.call(scope, e);
        };
      }
      getEventDispatcher(self$$1).on(name$$1, resolveCallbackName(callback));
      return self$$1;
    },
    off: function (name$$1, callback) {
      getEventDispatcher(this).off(name$$1, callback);
      return this;
    },
    fire: function (name$$1, args, bubble) {
      var self$$1 = this;
      args = args || {};
      if (!args.control) {
        args.control = self$$1;
      }
      args = getEventDispatcher(self$$1).fire(name$$1, args);
      if (bubble !== false && self$$1.parent) {
        var parent$$1 = self$$1.parent();
        while (parent$$1 && !args.isPropagationStopped()) {
          parent$$1.fire(name$$1, args, false);
          parent$$1 = parent$$1.parent();
        }
      }
      return args;
    },
    hasEventListeners: function (name$$1) {
      return getEventDispatcher(this).has(name$$1);
    },
    parents: function (selector) {
      var self$$1 = this;
      var ctrl, parents = new Collection$2();
      for (ctrl = self$$1.parent(); ctrl; ctrl = ctrl.parent()) {
        parents.add(ctrl);
      }
      if (selector) {
        parents = parents.filter(selector);
      }
      return parents;
    },
    parentsAndSelf: function (selector) {
      return new Collection$2(this).add(this.parents(selector));
    },
    next: function () {
      var parentControls = this.parent().items();
      return parentControls[parentControls.indexOf(this) + 1];
    },
    prev: function () {
      var parentControls = this.parent().items();
      return parentControls[parentControls.indexOf(this) - 1];
    },
    innerHtml: function (html) {
      this.$el.html(html);
      return this;
    },
    getEl: function (suffix) {
      var id = suffix ? this._id + '-' + suffix : this._id;
      if (!this._elmCache[id]) {
        this._elmCache[id] = global$9('#' + id)[0];
      }
      return this._elmCache[id];
    },
    show: function () {
      return this.visible(true);
    },
    hide: function () {
      return this.visible(false);
    },
    focus: function () {
      try {
        this.getEl().focus();
      } catch (ex) {
      }
      return this;
    },
    blur: function () {
      this.getEl().blur();
      return this;
    },
    aria: function (name$$1, value) {
      var self$$1 = this, elm = self$$1.getEl(self$$1.ariaTarget);
      if (typeof value === 'undefined') {
        return self$$1._aria[name$$1];
      }
      self$$1._aria[name$$1] = value;
      if (self$$1.state.get('rendered')) {
        elm.setAttribute(name$$1 === 'role' ? name$$1 : 'aria-' + name$$1, value);
      }
      return self$$1;
    },
    encode: function (text, translate) {
      if (translate !== false) {
        text = this.translate(text);
      }
      return (text || '').replace(/[&<>"]/g, function (match) {
        return '&#' + match.charCodeAt(0) + ';';
      });
    },
    translate: function (text) {
      return Control.translate ? Control.translate(text) : text;
    },
    before: function (items) {
      var self$$1 = this, parent$$1 = self$$1.parent();
      if (parent$$1) {
        parent$$1.insert(items, parent$$1.items().indexOf(self$$1), true);
      }
      return self$$1;
    },
    after: function (items) {
      var self$$1 = this, parent$$1 = self$$1.parent();
      if (parent$$1) {
        parent$$1.insert(items, parent$$1.items().indexOf(self$$1));
      }
      return self$$1;
    },
    remove: function () {
      var self$$1 = this;
      var elm = self$$1.getEl();
      var parent$$1 = self$$1.parent();
      var newItems, i;
      if (self$$1.items) {
        var controls = self$$1.items().toArray();
        i = controls.length;
        while (i--) {
          controls[i].remove();
        }
      }
      if (parent$$1 && parent$$1.items) {
        newItems = [];
        parent$$1.items().each(function (item) {
          if (item !== self$$1) {
            newItems.push(item);
          }
        });
        parent$$1.items().set(newItems);
        parent$$1._lastRect = null;
      }
      if (self$$1._eventsRoot && self$$1._eventsRoot === self$$1) {
        global$9(elm).off();
      }
      var lookup = self$$1.getRoot().controlIdLookup;
      if (lookup) {
        delete lookup[self$$1._id];
      }
      if (elm && elm.parentNode) {
        elm.parentNode.removeChild(elm);
      }
      self$$1.state.set('rendered', false);
      self$$1.state.destroy();
      self$$1.fire('remove');
      return self$$1;
    },
    renderBefore: function (elm) {
      global$9(elm).before(this.renderHtml());
      this.postRender();
      return this;
    },
    renderTo: function (elm) {
      global$9(elm || this.getContainerElm()).append(this.renderHtml());
      this.postRender();
      return this;
    },
    preRender: function () {
    },
    render: function () {
    },
    renderHtml: function () {
      return '<div id="' + this._id + '" class="' + this.classes + '"></div>';
    },
    postRender: function () {
      var self$$1 = this;
      var settings = self$$1.settings;
      var elm, box, parent$$1, name$$1, parentEventsRoot;
      self$$1.$el = global$9(self$$1.getEl());
      self$$1.state.set('rendered', true);
      for (name$$1 in settings) {
        if (name$$1.indexOf('on') === 0) {
          self$$1.on(name$$1.substr(2), settings[name$$1]);
        }
      }
      if (self$$1._eventsRoot) {
        for (parent$$1 = self$$1.parent(); !parentEventsRoot && parent$$1; parent$$1 = parent$$1.parent()) {
          parentEventsRoot = parent$$1._eventsRoot;
        }
        if (parentEventsRoot) {
          for (name$$1 in parentEventsRoot._nativeEvents) {
            self$$1._nativeEvents[name$$1] = true;
          }
        }
      }
      bindPendingEvents(self$$1);
      if (settings.style) {
        elm = self$$1.getEl();
        if (elm) {
          elm.setAttribute('style', settings.style);
          elm.style.cssText = settings.style;
        }
      }
      if (self$$1.settings.border) {
        box = self$$1.borderBox;
        self$$1.$el.css({
          'border-top-width': box.top,
          'border-right-width': box.right,
          'border-bottom-width': box.bottom,
          'border-left-width': box.left
        });
      }
      var root = self$$1.getRoot();
      if (!root.controlIdLookup) {
        root.controlIdLookup = {};
      }
      root.controlIdLookup[self$$1._id] = self$$1;
      for (var key in self$$1._aria) {
        self$$1.aria(key, self$$1._aria[key]);
      }
      if (self$$1.state.get('visible') === false) {
        self$$1.getEl().style.display = 'none';
      }
      self$$1.bindStates();
      self$$1.state.on('change:visible', function (e) {
        var state = e.value;
        var parentCtrl;
        if (self$$1.state.get('rendered')) {
          self$$1.getEl().style.display = state === false ? 'none' : '';
          self$$1.getEl().getBoundingClientRect();
        }
        parentCtrl = self$$1.parent();
        if (parentCtrl) {
          parentCtrl._lastRect = null;
        }
        self$$1.fire(state ? 'show' : 'hide');
        $_ck0dfmuyjm0og2id.add(self$$1);
      });
      self$$1.fire('postrender', {}, false);
    },
    bindStates: function () {
    },
    scrollIntoView: function (align) {
      function getOffset(elm, rootElm) {
        var x, y, parent$$1 = elm;
        x = y = 0;
        while (parent$$1 && parent$$1 !== rootElm && parent$$1.nodeType) {
          x += parent$$1.offsetLeft || 0;
          y += parent$$1.offsetTop || 0;
          parent$$1 = parent$$1.offsetParent;
        }
        return {
          x: x,
          y: y
        };
      }
      var elm = this.getEl(), parentElm = elm.parentNode;
      var x, y, width, height, parentWidth, parentHeight;
      var pos = getOffset(elm, parentElm);
      x = pos.x;
      y = pos.y;
      width = elm.offsetWidth;
      height = elm.offsetHeight;
      parentWidth = parentElm.clientWidth;
      parentHeight = parentElm.clientHeight;
      if (align === 'end') {
        x -= parentWidth - width;
        y -= parentHeight - height;
      } else if (align === 'center') {
        x -= parentWidth / 2 - width / 2;
        y -= parentHeight / 2 - height / 2;
      }
      parentElm.scrollLeft = x;
      parentElm.scrollTop = y;
      return this;
    },
    getRoot: function () {
      var ctrl = this, rootControl;
      var parents = [];
      while (ctrl) {
        if (ctrl.rootControl) {
          rootControl = ctrl.rootControl;
          break;
        }
        parents.push(ctrl);
        rootControl = ctrl;
        ctrl = ctrl.parent();
      }
      if (!rootControl) {
        rootControl = this;
      }
      var i = parents.length;
      while (i--) {
        parents[i].rootControl = rootControl;
      }
      return rootControl;
    },
    reflow: function () {
      $_ck0dfmuyjm0og2id.remove(this);
      var parent$$1 = this.parent();
      if (parent$$1 && parent$$1._layout && !parent$$1._layout.isNative()) {
        parent$$1.reflow();
      }
      return this;
    }
  };
  global$2.each('text title visible disabled active value'.split(' '), function (name$$1) {
    proto$1[name$$1] = function (value) {
      if (arguments.length === 0) {
        return this.state.get(name$$1);
      }
      if (typeof value !== 'undefined') {
        this.state.set(name$$1, value);
      }
      return this;
    };
  });
  Control = global$10.extend(proto$1);
  function getEventDispatcher(obj) {
    if (!obj._eventDispatcher) {
      obj._eventDispatcher = new global$11({
        scope: obj,
        toggleEvent: function (name$$1, state) {
          if (state && global$11.isNative(name$$1)) {
            if (!obj._nativeEvents) {
              obj._nativeEvents = {};
            }
            obj._nativeEvents[name$$1] = true;
            if (obj.state.get('rendered')) {
              bindPendingEvents(obj);
            }
          }
        }
      });
    }
    return obj._eventDispatcher;
  }
  function bindPendingEvents(eventCtrl) {
    var i, l, parents, eventRootCtrl, nativeEvents, name$$1;
    function delegate(e) {
      var control = eventCtrl.getParentCtrl(e.target);
      if (control) {
        control.fire(e.type, e);
      }
    }
    function mouseLeaveHandler() {
      var ctrl = eventRootCtrl._lastHoverCtrl;
      if (ctrl) {
        ctrl.fire('mouseleave', { target: ctrl.getEl() });
        ctrl.parents().each(function (ctrl) {
          ctrl.fire('mouseleave', { target: ctrl.getEl() });
        });
        eventRootCtrl._lastHoverCtrl = null;
      }
    }
    function mouseEnterHandler(e) {
      var ctrl = eventCtrl.getParentCtrl(e.target), lastCtrl = eventRootCtrl._lastHoverCtrl, idx = 0, i, parents, lastParents;
      if (ctrl !== lastCtrl) {
        eventRootCtrl._lastHoverCtrl = ctrl;
        parents = ctrl.parents().toArray().reverse();
        parents.push(ctrl);
        if (lastCtrl) {
          lastParents = lastCtrl.parents().toArray().reverse();
          lastParents.push(lastCtrl);
          for (idx = 0; idx < lastParents.length; idx++) {
            if (parents[idx] !== lastParents[idx]) {
              break;
            }
          }
          for (i = lastParents.length - 1; i >= idx; i--) {
            lastCtrl = lastParents[i];
            lastCtrl.fire('mouseleave', { target: lastCtrl.getEl() });
          }
        }
        for (i = idx; i < parents.length; i++) {
          ctrl = parents[i];
          ctrl.fire('mouseenter', { target: ctrl.getEl() });
        }
      }
    }
    function fixWheelEvent(e) {
      e.preventDefault();
      if (e.type === 'mousewheel') {
        e.deltaY = -1 / 40 * e.wheelDelta;
        if (e.wheelDeltaX) {
          e.deltaX = -1 / 40 * e.wheelDeltaX;
        }
      } else {
        e.deltaX = 0;
        e.deltaY = e.detail;
      }
      e = eventCtrl.fire('wheel', e);
    }
    nativeEvents = eventCtrl._nativeEvents;
    if (nativeEvents) {
      parents = eventCtrl.parents().toArray();
      parents.unshift(eventCtrl);
      for (i = 0, l = parents.length; !eventRootCtrl && i < l; i++) {
        eventRootCtrl = parents[i]._eventsRoot;
      }
      if (!eventRootCtrl) {
        eventRootCtrl = parents[parents.length - 1] || eventCtrl;
      }
      eventCtrl._eventsRoot = eventRootCtrl;
      for (l = i, i = 0; i < l; i++) {
        parents[i]._eventsRoot = eventRootCtrl;
      }
      var eventRootDelegates = eventRootCtrl._delegates;
      if (!eventRootDelegates) {
        eventRootDelegates = eventRootCtrl._delegates = {};
      }
      for (name$$1 in nativeEvents) {
        if (!nativeEvents) {
          return false;
        }
        if (name$$1 === 'wheel' && !hasWheelEventSupport) {
          if (hasMouseWheelEventSupport) {
            global$9(eventCtrl.getEl()).on('mousewheel', fixWheelEvent);
          } else {
            global$9(eventCtrl.getEl()).on('DOMMouseScroll', fixWheelEvent);
          }
          continue;
        }
        if (name$$1 === 'mouseenter' || name$$1 === 'mouseleave') {
          if (!eventRootCtrl._hasMouseEnter) {
            global$9(eventRootCtrl.getEl()).on('mouseleave', mouseLeaveHandler).on('mouseover', mouseEnterHandler);
            eventRootCtrl._hasMouseEnter = 1;
          }
        } else if (!eventRootDelegates[name$$1]) {
          global$9(eventRootCtrl.getEl()).on(name$$1, delegate);
          eventRootDelegates[name$$1] = true;
        }
        nativeEvents[name$$1] = false;
      }
    }
  }
  var Control$1 = Control;

  var hasTabstopData = function (elm) {
    return elm.getAttribute('data-mce-tabstop') ? true : false;
  };
  function KeyboardNavigation (settings) {
    var root = settings.root;
    var focusedElement, focusedControl;
    function isElement(node) {
      return node && node.nodeType === 1;
    }
    try {
      focusedElement = document.activeElement;
    } catch (ex) {
      focusedElement = document.body;
    }
    focusedControl = root.getParentCtrl(focusedElement);
    function getRole(elm) {
      elm = elm || focusedElement;
      if (isElement(elm)) {
        return elm.getAttribute('role');
      }
      return null;
    }
    function getParentRole(elm) {
      var role, parent$$1 = elm || focusedElement;
      while (parent$$1 = parent$$1.parentNode) {
        if (role = getRole(parent$$1)) {
          return role;
        }
      }
    }
    function getAriaProp(name$$1) {
      var elm = focusedElement;
      if (isElement(elm)) {
        return elm.getAttribute('aria-' + name$$1);
      }
    }
    function isTextInputElement(elm) {
      var tagName = elm.tagName.toUpperCase();
      return tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT';
    }
    function canFocus(elm) {
      if (isTextInputElement(elm) && !elm.hidden) {
        return true;
      }
      if (hasTabstopData(elm)) {
        return true;
      }
      if (/^(button|menuitem|checkbox|tab|menuitemcheckbox|option|gridcell|slider)$/.test(getRole(elm))) {
        return true;
      }
      return false;
    }
    function getFocusElements(elm) {
      var elements = [];
      function collect(elm) {
        if (elm.nodeType !== 1 || elm.style.display === 'none' || elm.disabled) {
          return;
        }
        if (canFocus(elm)) {
          elements.push(elm);
        }
        for (var i = 0; i < elm.childNodes.length; i++) {
          collect(elm.childNodes[i]);
        }
      }
      collect(elm || root.getEl());
      return elements;
    }
    function getNavigationRoot(targetControl) {
      var navigationRoot, controls;
      targetControl = targetControl || focusedControl;
      controls = targetControl.parents().toArray();
      controls.unshift(targetControl);
      for (var i = 0; i < controls.length; i++) {
        navigationRoot = controls[i];
        if (navigationRoot.settings.ariaRoot) {
          break;
        }
      }
      return navigationRoot;
    }
    function focusFirst(targetControl) {
      var navigationRoot = getNavigationRoot(targetControl);
      var focusElements = getFocusElements(navigationRoot.getEl());
      if (navigationRoot.settings.ariaRemember && 'lastAriaIndex' in navigationRoot) {
        moveFocusToIndex(navigationRoot.lastAriaIndex, focusElements);
      } else {
        moveFocusToIndex(0, focusElements);
      }
    }
    function moveFocusToIndex(idx, elements) {
      if (idx < 0) {
        idx = elements.length - 1;
      } else if (idx >= elements.length) {
        idx = 0;
      }
      if (elements[idx]) {
        elements[idx].focus();
      }
      return idx;
    }
    function moveFocus(dir, elements) {
      var idx = -1;
      var navigationRoot = getNavigationRoot();
      elements = elements || getFocusElements(navigationRoot.getEl());
      for (var i = 0; i < elements.length; i++) {
        if (elements[i] === focusedElement) {
          idx = i;
        }
      }
      idx += dir;
      navigationRoot.lastAriaIndex = moveFocusToIndex(idx, elements);
    }
    function left() {
      var parentRole = getParentRole();
      if (parentRole === 'tablist') {
        moveFocus(-1, getFocusElements(focusedElement.parentNode));
      } else if (focusedControl.parent().submenu) {
        cancel();
      } else {
        moveFocus(-1);
      }
    }
    function right() {
      var role = getRole(), parentRole = getParentRole();
      if (parentRole === 'tablist') {
        moveFocus(1, getFocusElements(focusedElement.parentNode));
      } else if (role === 'menuitem' && parentRole === 'menu' && getAriaProp('haspopup')) {
        enter();
      } else {
        moveFocus(1);
      }
    }
    function up() {
      moveFocus(-1);
    }
    function down() {
      var role = getRole(), parentRole = getParentRole();
      if (role === 'menuitem' && parentRole === 'menubar') {
        enter();
      } else if (role === 'button' && getAriaProp('haspopup')) {
        enter({ key: 'down' });
      } else {
        moveFocus(1);
      }
    }
    function tab(e) {
      var parentRole = getParentRole();
      if (parentRole === 'tablist') {
        var elm = getFocusElements(focusedControl.getEl('body'))[0];
        if (elm) {
          elm.focus();
        }
      } else {
        moveFocus(e.shiftKey ? -1 : 1);
      }
    }
    function cancel() {
      focusedControl.fire('cancel');
    }
    function enter(aria) {
      aria = aria || {};
      focusedControl.fire('click', {
        target: focusedElement,
        aria: aria
      });
    }
    root.on('keydown', function (e) {
      function handleNonTabOrEscEvent(e, handler) {
        if (isTextInputElement(focusedElement) || hasTabstopData(focusedElement)) {
          return;
        }
        if (getRole(focusedElement) === 'slider') {
          return;
        }
        if (handler(e) !== false) {
          e.preventDefault();
        }
      }
      if (e.isDefaultPrevented()) {
        return;
      }
      switch (e.keyCode) {
      case 37:
        handleNonTabOrEscEvent(e, left);
        break;
      case 39:
        handleNonTabOrEscEvent(e, right);
        break;
      case 38:
        handleNonTabOrEscEvent(e, up);
        break;
      case 40:
        handleNonTabOrEscEvent(e, down);
        break;
      case 27:
        cancel();
        break;
      case 14:
      case 13:
      case 32:
        handleNonTabOrEscEvent(e, enter);
        break;
      case 9:
        tab(e);
        e.preventDefault();
        break;
      }
    });
    root.on('focusin', function (e) {
      focusedElement = e.target;
      focusedControl = e.control;
    });
    return { focusFirst: focusFirst };
  }

  var selectorCache = {};
  var Container = Control$1.extend({
    init: function (settings) {
      var self = this;
      self._super(settings);
      settings = self.settings;
      if (settings.fixed) {
        self.state.set('fixed', true);
      }
      self._items = new Collection$2();
      if (self.isRtl()) {
        self.classes.add('rtl');
      }
      self.bodyClasses = new ClassList(function () {
        if (self.state.get('rendered')) {
          self.getEl('body').className = this.toString();
        }
      });
      self.bodyClasses.prefix = self.classPrefix;
      self.classes.add('container');
      self.bodyClasses.add('container-body');
      if (settings.containerCls) {
        self.classes.add(settings.containerCls);
      }
      self._layout = global$4.create((settings.layout || '') + 'layout');
      if (self.settings.items) {
        self.add(self.settings.items);
      } else {
        self.add(self.render());
      }
      self._hasBody = true;
    },
    items: function () {
      return this._items;
    },
    find: function (selector) {
      selector = selectorCache[selector] = selectorCache[selector] || new Selector(selector);
      return selector.find(this);
    },
    add: function (items) {
      var self = this;
      self.items().add(self.create(items)).parent(self);
      return self;
    },
    focus: function (keyboard) {
      var self = this;
      var focusCtrl, keyboardNav, items;
      if (keyboard) {
        keyboardNav = self.keyboardNav || self.parents().eq(-1)[0].keyboardNav;
        if (keyboardNav) {
          keyboardNav.focusFirst(self);
          return;
        }
      }
      items = self.find('*');
      if (self.statusbar) {
        items.add(self.statusbar.items());
      }
      items.each(function (ctrl) {
        if (ctrl.settings.autofocus) {
          focusCtrl = null;
          return false;
        }
        if (ctrl.canFocus) {
          focusCtrl = focusCtrl || ctrl;
        }
      });
      if (focusCtrl) {
        focusCtrl.focus();
      }
      return self;
    },
    replace: function (oldItem, newItem) {
      var ctrlElm;
      var items = this.items();
      var i = items.length;
      while (i--) {
        if (items[i] === oldItem) {
          items[i] = newItem;
          break;
        }
      }
      if (i >= 0) {
        ctrlElm = newItem.getEl();
        if (ctrlElm) {
          ctrlElm.parentNode.removeChild(ctrlElm);
        }
        ctrlElm = oldItem.getEl();
        if (ctrlElm) {
          ctrlElm.parentNode.removeChild(ctrlElm);
        }
      }
      newItem.parent(this);
    },
    create: function (items) {
      var self = this;
      var settings;
      var ctrlItems = [];
      if (!global$2.isArray(items)) {
        items = [items];
      }
      global$2.each(items, function (item) {
        if (item) {
          if (!(item instanceof Control$1)) {
            if (typeof item === 'string') {
              item = { type: item };
            }
            settings = global$2.extend({}, self.settings.defaults, item);
            item.type = settings.type = settings.type || item.type || self.settings.defaultType || (settings.defaults ? settings.defaults.type : null);
            item = global$4.create(settings);
          }
          ctrlItems.push(item);
        }
      });
      return ctrlItems;
    },
    renderNew: function () {
      var self = this;
      self.items().each(function (ctrl, index) {
        var containerElm;
        ctrl.parent(self);
        if (!ctrl.state.get('rendered')) {
          containerElm = self.getEl('body');
          if (containerElm.hasChildNodes() && index <= containerElm.childNodes.length - 1) {
            global$9(containerElm.childNodes[index]).before(ctrl.renderHtml());
          } else {
            global$9(containerElm).append(ctrl.renderHtml());
          }
          ctrl.postRender();
          $_ck0dfmuyjm0og2id.add(ctrl);
        }
      });
      self._layout.applyClasses(self.items().filter(':visible'));
      self._lastRect = null;
      return self;
    },
    append: function (items) {
      return this.add(items).renderNew();
    },
    prepend: function (items) {
      var self = this;
      self.items().set(self.create(items).concat(self.items().toArray()));
      return self.renderNew();
    },
    insert: function (items, index, before) {
      var self = this;
      var curItems, beforeItems, afterItems;
      items = self.create(items);
      curItems = self.items();
      if (!before && index < curItems.length - 1) {
        index += 1;
      }
      if (index >= 0 && index < curItems.length) {
        beforeItems = curItems.slice(0, index).toArray();
        afterItems = curItems.slice(index).toArray();
        curItems.set(beforeItems.concat(items, afterItems));
      }
      return self.renderNew();
    },
    fromJSON: function (data) {
      var self = this;
      for (var name in data) {
        self.find('#' + name).value(data[name]);
      }
      return self;
    },
    toJSON: function () {
      var self = this, data = {};
      self.find('*').each(function (ctrl) {
        var name = ctrl.name(), value = ctrl.value();
        if (name && typeof value !== 'undefined') {
          data[name] = value;
        }
      });
      return data;
    },
    renderHtml: function () {
      var self = this, layout = self._layout, role = this.settings.role;
      self.preRender();
      layout.preRender(self);
      return '<div id="' + self._id + '" class="' + self.classes + '"' + (role ? ' role="' + this.settings.role + '"' : '') + '>' + '<div id="' + self._id + '-body" class="' + self.bodyClasses + '">' + (self.settings.html || '') + layout.renderHtml(self) + '</div>' + '</div>';
    },
    postRender: function () {
      var self = this;
      var box;
      self.items().exec('postRender');
      self._super();
      self._layout.postRender(self);
      self.state.set('rendered', true);
      if (self.settings.style) {
        self.$el.css(self.settings.style);
      }
      if (self.settings.border) {
        box = self.borderBox;
        self.$el.css({
          'border-top-width': box.top,
          'border-right-width': box.right,
          'border-bottom-width': box.bottom,
          'border-left-width': box.left
        });
      }
      if (!self.parent()) {
        self.keyboardNav = KeyboardNavigation({ root: self });
      }
      return self;
    },
    initLayoutRect: function () {
      var self = this, layoutRect = self._super();
      self._layout.recalc(self);
      return layoutRect;
    },
    recalc: function () {
      var self = this;
      var rect = self._layoutRect;
      var lastRect = self._lastRect;
      if (!lastRect || lastRect.w !== rect.w || lastRect.h !== rect.h) {
        self._layout.recalc(self);
        rect = self.layoutRect();
        self._lastRect = {
          x: rect.x,
          y: rect.y,
          w: rect.w,
          h: rect.h
        };
        return true;
      }
    },
    reflow: function () {
      var i;
      $_ck0dfmuyjm0og2id.remove(this);
      if (this.visible()) {
        Control$1.repaintControls = [];
        Control$1.repaintControls.map = {};
        this.recalc();
        i = Control$1.repaintControls.length;
        while (i--) {
          Control$1.repaintControls[i].repaint();
        }
        if (this.settings.layout !== 'flow' && this.settings.layout !== 'stack') {
          this.repaint();
        }
        Control$1.repaintControls = [];
      }
      return this;
    }
  });

  function getDocumentSize(doc) {
    var documentElement, body, scrollWidth, clientWidth;
    var offsetWidth, scrollHeight, clientHeight, offsetHeight;
    var max = Math.max;
    documentElement = doc.documentElement;
    body = doc.body;
    scrollWidth = max(documentElement.scrollWidth, body.scrollWidth);
    clientWidth = max(documentElement.clientWidth, body.clientWidth);
    offsetWidth = max(documentElement.offsetWidth, body.offsetWidth);
    scrollHeight = max(documentElement.scrollHeight, body.scrollHeight);
    clientHeight = max(documentElement.clientHeight, body.clientHeight);
    offsetHeight = max(documentElement.offsetHeight, body.offsetHeight);
    return {
      width: scrollWidth < offsetWidth ? clientWidth : scrollWidth,
      height: scrollHeight < offsetHeight ? clientHeight : scrollHeight
    };
  }
  function updateWithTouchData(e) {
    var keys, i;
    if (e.changedTouches) {
      keys = 'screenX screenY pageX pageY clientX clientY'.split(' ');
      for (i = 0; i < keys.length; i++) {
        e[keys[i]] = e.changedTouches[0][keys[i]];
      }
    }
  }
  function DragHelper (id, settings) {
    var $eventOverlay;
    var doc = settings.document || document;
    var downButton;
    var start, stop$$1, drag, startX, startY;
    settings = settings || {};
    var handleElement = doc.getElementById(settings.handle || id);
    start = function (e) {
      var docSize = getDocumentSize(doc);
      var handleElm, cursor;
      updateWithTouchData(e);
      e.preventDefault();
      downButton = e.button;
      handleElm = handleElement;
      startX = e.screenX;
      startY = e.screenY;
      if (window.getComputedStyle) {
        cursor = window.getComputedStyle(handleElm, null).getPropertyValue('cursor');
      } else {
        cursor = handleElm.runtimeStyle.cursor;
      }
      $eventOverlay = global$9('<div></div>').css({
        position: 'absolute',
        top: 0,
        left: 0,
        width: docSize.width,
        height: docSize.height,
        zIndex: 2147483647,
        opacity: 0.0001,
        cursor: cursor
      }).appendTo(doc.body);
      global$9(doc).on('mousemove touchmove', drag).on('mouseup touchend', stop$$1);
      settings.start(e);
    };
    drag = function (e) {
      updateWithTouchData(e);
      if (e.button !== downButton) {
        return stop$$1(e);
      }
      e.deltaX = e.screenX - startX;
      e.deltaY = e.screenY - startY;
      e.preventDefault();
      settings.drag(e);
    };
    stop$$1 = function (e) {
      updateWithTouchData(e);
      global$9(doc).off('mousemove touchmove', drag).off('mouseup touchend', stop$$1);
      $eventOverlay.remove();
      if (settings.stop) {
        settings.stop(e);
      }
    };
    this.destroy = function () {
      global$9(handleElement).off();
    };
    global$9(handleElement).on('mousedown touchstart', start);
  }

  var $_du6ee9v0jm0og2il = {
    init: function () {
      var self = this;
      self.on('repaint', self.renderScroll);
    },
    renderScroll: function () {
      var self = this, margin = 2;
      function repaintScroll() {
        var hasScrollH, hasScrollV, bodyElm;
        function repaintAxis(axisName, posName, sizeName, contentSizeName, hasScroll, ax) {
          var containerElm, scrollBarElm, scrollThumbElm;
          var containerSize, scrollSize, ratio, rect;
          var posNameLower, sizeNameLower;
          scrollBarElm = self.getEl('scroll' + axisName);
          if (scrollBarElm) {
            posNameLower = posName.toLowerCase();
            sizeNameLower = sizeName.toLowerCase();
            global$9(self.getEl('absend')).css(posNameLower, self.layoutRect()[contentSizeName] - 1);
            if (!hasScroll) {
              global$9(scrollBarElm).css('display', 'none');
              return;
            }
            global$9(scrollBarElm).css('display', 'block');
            containerElm = self.getEl('body');
            scrollThumbElm = self.getEl('scroll' + axisName + 't');
            containerSize = containerElm['client' + sizeName] - margin * 2;
            containerSize -= hasScrollH && hasScrollV ? scrollBarElm['client' + ax] : 0;
            scrollSize = containerElm['scroll' + sizeName];
            ratio = containerSize / scrollSize;
            rect = {};
            rect[posNameLower] = containerElm['offset' + posName] + margin;
            rect[sizeNameLower] = containerSize;
            global$9(scrollBarElm).css(rect);
            rect = {};
            rect[posNameLower] = containerElm['scroll' + posName] * ratio;
            rect[sizeNameLower] = containerSize * ratio;
            global$9(scrollThumbElm).css(rect);
          }
        }
        bodyElm = self.getEl('body');
        hasScrollH = bodyElm.scrollWidth > bodyElm.clientWidth;
        hasScrollV = bodyElm.scrollHeight > bodyElm.clientHeight;
        repaintAxis('h', 'Left', 'Width', 'contentW', hasScrollH, 'Height');
        repaintAxis('v', 'Top', 'Height', 'contentH', hasScrollV, 'Width');
      }
      function addScroll() {
        function addScrollAxis(axisName, posName, sizeName, deltaPosName, ax) {
          var scrollStart;
          var axisId = self._id + '-scroll' + axisName, prefix = self.classPrefix;
          global$9(self.getEl()).append('<div id="' + axisId + '" class="' + prefix + 'scrollbar ' + prefix + 'scrollbar-' + axisName + '">' + '<div id="' + axisId + 't" class="' + prefix + 'scrollbar-thumb"></div>' + '</div>');
          self.draghelper = new DragHelper(axisId + 't', {
            start: function () {
              scrollStart = self.getEl('body')['scroll' + posName];
              global$9('#' + axisId).addClass(prefix + 'active');
            },
            drag: function (e) {
              var ratio, hasScrollH, hasScrollV, containerSize;
              var layoutRect = self.layoutRect();
              hasScrollH = layoutRect.contentW > layoutRect.innerW;
              hasScrollV = layoutRect.contentH > layoutRect.innerH;
              containerSize = self.getEl('body')['client' + sizeName] - margin * 2;
              containerSize -= hasScrollH && hasScrollV ? self.getEl('scroll' + axisName)['client' + ax] : 0;
              ratio = containerSize / self.getEl('body')['scroll' + sizeName];
              self.getEl('body')['scroll' + posName] = scrollStart + e['delta' + deltaPosName] / ratio;
            },
            stop: function () {
              global$9('#' + axisId).removeClass(prefix + 'active');
            }
          });
        }
        self.classes.add('scroll');
        addScrollAxis('v', 'Top', 'Height', 'Y', 'Width');
        addScrollAxis('h', 'Left', 'Width', 'X', 'Height');
      }
      if (self.settings.autoScroll) {
        if (!self._hasScroll) {
          self._hasScroll = true;
          addScroll();
          self.on('wheel', function (e) {
            var bodyEl = self.getEl('body');
            bodyEl.scrollLeft += (e.deltaX || 0) * 10;
            bodyEl.scrollTop += e.deltaY * 10;
            repaintScroll();
          });
          global$9(self.getEl('body')).on('scroll', repaintScroll);
        }
        repaintScroll();
      }
    }
  };

  var Panel = Container.extend({
    Defaults: {
      layout: 'fit',
      containerCls: 'panel'
    },
    Mixins: [$_du6ee9v0jm0og2il],
    renderHtml: function () {
      var self = this;
      var layout = self._layout;
      var innerHtml = self.settings.html;
      self.preRender();
      layout.preRender(self);
      if (typeof innerHtml === 'undefined') {
        innerHtml = '<div id="' + self._id + '-body" class="' + self.bodyClasses + '">' + layout.renderHtml(self) + '</div>';
      } else {
        if (typeof innerHtml === 'function') {
          innerHtml = innerHtml.call(self);
        }
        self._hasBody = false;
      }
      return '<div id="' + self._id + '" class="' + self.classes + '" hidefocus="1" tabindex="-1" role="group">' + (self._preBodyHtml || '') + innerHtml + '</div>';
    }
  });

  var $_atx9o6v2jm0og2is = {
    resizeToContent: function () {
      this._layoutRect.autoResize = true;
      this._lastRect = null;
      this.reflow();
    },
    resizeTo: function (w, h) {
      if (w <= 1 || h <= 1) {
        var rect = funcs.getWindowSize();
        w = w <= 1 ? w * rect.w : w;
        h = h <= 1 ? h * rect.h : h;
      }
      this._layoutRect.autoResize = false;
      return this.layoutRect({
        minW: w,
        minH: h,
        w: w,
        h: h
      }).reflow();
    },
    resizeBy: function (dw, dh) {
      var self = this, rect = self.layoutRect();
      return self.resizeTo(rect.w + dw, rect.h + dh);
    }
  };

  var documentClickHandler;
  var documentScrollHandler;
  var windowResizeHandler;
  var visiblePanels = [];
  var zOrder = [];
  var hasModal;
  function isChildOf(ctrl, parent$$1) {
    while (ctrl) {
      if (ctrl === parent$$1) {
        return true;
      }
      ctrl = ctrl.parent();
    }
  }
  function skipOrHidePanels(e) {
    var i = visiblePanels.length;
    while (i--) {
      var panel = visiblePanels[i], clickCtrl = panel.getParentCtrl(e.target);
      if (panel.settings.autohide) {
        if (clickCtrl) {
          if (isChildOf(clickCtrl, panel) || panel.parent() === clickCtrl) {
            continue;
          }
        }
        e = panel.fire('autohide', { target: e.target });
        if (!e.isDefaultPrevented()) {
          panel.hide();
        }
      }
    }
  }
  function bindDocumentClickHandler() {
    if (!documentClickHandler) {
      documentClickHandler = function (e) {
        if (e.button === 2) {
          return;
        }
        skipOrHidePanels(e);
      };
      global$9(document).on('click touchstart', documentClickHandler);
    }
  }
  function bindDocumentScrollHandler() {
    if (!documentScrollHandler) {
      documentScrollHandler = function () {
        var i;
        i = visiblePanels.length;
        while (i--) {
          repositionPanel(visiblePanels[i]);
        }
      };
      global$9(window).on('scroll', documentScrollHandler);
    }
  }
  function bindWindowResizeHandler() {
    if (!windowResizeHandler) {
      var docElm_1 = document.documentElement;
      var clientWidth_1 = docElm_1.clientWidth, clientHeight_1 = docElm_1.clientHeight;
      windowResizeHandler = function () {
        if (!document.all || clientWidth_1 !== docElm_1.clientWidth || clientHeight_1 !== docElm_1.clientHeight) {
          clientWidth_1 = docElm_1.clientWidth;
          clientHeight_1 = docElm_1.clientHeight;
          FloatPanel.hideAll();
        }
      };
      global$9(window).on('resize', windowResizeHandler);
    }
  }
  function repositionPanel(panel) {
    var scrollY$$1 = funcs.getViewPort().y;
    function toggleFixedChildPanels(fixed, deltaY) {
      var parent$$1;
      for (var i = 0; i < visiblePanels.length; i++) {
        if (visiblePanels[i] !== panel) {
          parent$$1 = visiblePanels[i].parent();
          while (parent$$1 && (parent$$1 = parent$$1.parent())) {
            if (parent$$1 === panel) {
              visiblePanels[i].fixed(fixed).moveBy(0, deltaY).repaint();
            }
          }
        }
      }
    }
    if (panel.settings.autofix) {
      if (!panel.state.get('fixed')) {
        panel._autoFixY = panel.layoutRect().y;
        if (panel._autoFixY < scrollY$$1) {
          panel.fixed(true).layoutRect({ y: 0 }).repaint();
          toggleFixedChildPanels(true, scrollY$$1 - panel._autoFixY);
        }
      } else {
        if (panel._autoFixY > scrollY$$1) {
          panel.fixed(false).layoutRect({ y: panel._autoFixY }).repaint();
          toggleFixedChildPanels(false, panel._autoFixY - scrollY$$1);
        }
      }
    }
  }
  function addRemove(add, ctrl) {
    var i, zIndex = FloatPanel.zIndex || 65535, topModal;
    if (add) {
      zOrder.push(ctrl);
    } else {
      i = zOrder.length;
      while (i--) {
        if (zOrder[i] === ctrl) {
          zOrder.splice(i, 1);
        }
      }
    }
    if (zOrder.length) {
      for (i = 0; i < zOrder.length; i++) {
        if (zOrder[i].modal) {
          zIndex++;
          topModal = zOrder[i];
        }
        zOrder[i].getEl().style.zIndex = zIndex;
        zOrder[i].zIndex = zIndex;
        zIndex++;
      }
    }
    var modalBlockEl = global$9('#' + ctrl.classPrefix + 'modal-block', ctrl.getContainerElm())[0];
    if (topModal) {
      global$9(modalBlockEl).css('z-index', topModal.zIndex - 1);
    } else if (modalBlockEl) {
      modalBlockEl.parentNode.removeChild(modalBlockEl);
      hasModal = false;
    }
    FloatPanel.currentZIndex = zIndex;
  }
  var FloatPanel = Panel.extend({
    Mixins: [
      $_43ajw6uljm0og2gm,
      $_atx9o6v2jm0og2is
    ],
    init: function (settings) {
      var self$$1 = this;
      self$$1._super(settings);
      self$$1._eventsRoot = self$$1;
      self$$1.classes.add('floatpanel');
      if (settings.autohide) {
        bindDocumentClickHandler();
        bindWindowResizeHandler();
        visiblePanels.push(self$$1);
      }
      if (settings.autofix) {
        bindDocumentScrollHandler();
        self$$1.on('move', function () {
          repositionPanel(this);
        });
      }
      self$$1.on('postrender show', function (e) {
        if (e.control === self$$1) {
          var $modalBlockEl_1;
          var prefix_1 = self$$1.classPrefix;
          if (self$$1.modal && !hasModal) {
            $modalBlockEl_1 = global$9('#' + prefix_1 + 'modal-block', self$$1.getContainerElm());
            if (!$modalBlockEl_1[0]) {
              $modalBlockEl_1 = global$9('<div id="' + prefix_1 + 'modal-block" class="' + prefix_1 + 'reset ' + prefix_1 + 'fade"></div>').appendTo(self$$1.getContainerElm());
            }
            global$7.setTimeout(function () {
              $modalBlockEl_1.addClass(prefix_1 + 'in');
              global$9(self$$1.getEl()).addClass(prefix_1 + 'in');
            });
            hasModal = true;
          }
          addRemove(true, self$$1);
        }
      });
      self$$1.on('show', function () {
        self$$1.parents().each(function (ctrl) {
          if (ctrl.state.get('fixed')) {
            self$$1.fixed(true);
            return false;
          }
        });
      });
      if (settings.popover) {
        self$$1._preBodyHtml = '<div class="' + self$$1.classPrefix + 'arrow"></div>';
        self$$1.classes.add('popover').add('bottom').add(self$$1.isRtl() ? 'end' : 'start');
      }
      self$$1.aria('label', settings.ariaLabel);
      self$$1.aria('labelledby', self$$1._id);
      self$$1.aria('describedby', self$$1.describedBy || self$$1._id + '-none');
    },
    fixed: function (state) {
      var self$$1 = this;
      if (self$$1.state.get('fixed') !== state) {
        if (self$$1.state.get('rendered')) {
          var viewport = funcs.getViewPort();
          if (state) {
            self$$1.layoutRect().y -= viewport.y;
          } else {
            self$$1.layoutRect().y += viewport.y;
          }
        }
        self$$1.classes.toggle('fixed', state);
        self$$1.state.set('fixed', state);
      }
      return self$$1;
    },
    show: function () {
      var self$$1 = this;
      var i;
      var state = self$$1._super();
      i = visiblePanels.length;
      while (i--) {
        if (visiblePanels[i] === self$$1) {
          break;
        }
      }
      if (i === -1) {
        visiblePanels.push(self$$1);
      }
      return state;
    },
    hide: function () {
      removeVisiblePanel(this);
      addRemove(false, this);
      return this._super();
    },
    hideAll: function () {
      FloatPanel.hideAll();
    },
    close: function () {
      var self$$1 = this;
      if (!self$$1.fire('close').isDefaultPrevented()) {
        self$$1.remove();
        addRemove(false, self$$1);
      }
      return self$$1;
    },
    remove: function () {
      removeVisiblePanel(this);
      this._super();
    },
    postRender: function () {
      var self$$1 = this;
      if (self$$1.settings.bodyRole) {
        this.getEl('body').setAttribute('role', self$$1.settings.bodyRole);
      }
      return self$$1._super();
    }
  });
  FloatPanel.hideAll = function () {
    var i = visiblePanels.length;
    while (i--) {
      var panel = visiblePanels[i];
      if (panel && panel.settings.autohide) {
        panel.hide();
        visiblePanels.splice(i, 1);
      }
    }
  };
  function removeVisiblePanel(panel) {
    var i;
    i = visiblePanels.length;
    while (i--) {
      if (visiblePanels[i] === panel) {
        visiblePanels.splice(i, 1);
      }
    }
    i = zOrder.length;
    while (i--) {
      if (zOrder[i] === panel) {
        zOrder.splice(i, 1);
      }
    }
  }

  var isFixed$1 = function (inlineToolbarContainer, editor) {
    return !!(inlineToolbarContainer && !editor.settings.ui_container);
  };
  var render$1 = function (editor, theme, args) {
    var panel, inlineToolbarContainer;
    var DOM = global$3.DOM;
    var fixedToolbarContainer = getFixedToolbarContainer(editor);
    if (fixedToolbarContainer) {
      inlineToolbarContainer = DOM.select(fixedToolbarContainer)[0];
    }
    var reposition = function () {
      if (panel && panel.moveRel && panel.visible() && !panel._fixed) {
        var scrollContainer = editor.selection.getScrollContainer(), body = editor.getBody();
        var deltaX = 0, deltaY = 0;
        if (scrollContainer) {
          var bodyPos = DOM.getPos(body), scrollContainerPos = DOM.getPos(scrollContainer);
          deltaX = Math.max(0, scrollContainerPos.x - bodyPos.x);
          deltaY = Math.max(0, scrollContainerPos.y - bodyPos.y);
        }
        panel.fixed(false).moveRel(body, editor.rtl ? [
          'tr-br',
          'br-tr'
        ] : [
          'tl-bl',
          'bl-tl',
          'tr-br'
        ]).moveBy(deltaX, deltaY);
      }
    };
    var show = function () {
      if (panel) {
        panel.show();
        reposition();
        DOM.addClass(editor.getBody(), 'mce-edit-focus');
      }
    };
    var hide = function () {
      if (panel) {
        panel.hide();
        FloatPanel.hideAll();
        DOM.removeClass(editor.getBody(), 'mce-edit-focus');
      }
    };
    var render = function () {
      if (panel) {
        if (!panel.visible()) {
          show();
        }
        return;
      }
      panel = theme.panel = global$4.create({
        type: inlineToolbarContainer ? 'panel' : 'floatpanel',
        role: 'application',
        classes: 'tinymce tinymce-inline',
        layout: 'flex',
        direction: 'column',
        align: 'stretch',
        autohide: false,
        autofix: isFixed$1(inlineToolbarContainer, editor),
        fixed: isFixed$1(inlineToolbarContainer, editor),
        border: 1,
        items: [
          hasMenubar(editor) === false ? null : {
            type: 'menubar',
            border: '0 0 1 0',
            items: $_crbkwku9jm0og2f2.createMenuButtons(editor)
          },
          $_8166kdu8jm0og2ez.createToolbars(editor, getToolbarSize(editor))
        ]
      });
      $_agmmwau5jm0og2eq.setUiContainer(editor, panel);
      $_7kj1vbu0jm0og2ef.fireBeforeRenderUI(editor);
      if (inlineToolbarContainer) {
        panel.renderTo(inlineToolbarContainer).reflow();
      } else {
        panel.renderTo().reflow();
      }
      $_a85u03u1jm0og2eg.addKeys(editor, panel);
      show();
      $_2j0tl1u2jm0og2ei.addContextualToolbars(editor);
      editor.on('nodeChange', reposition);
      editor.on('ResizeWindow', reposition);
      editor.on('activate', show);
      editor.on('deactivate', hide);
      editor.nodeChanged();
    };
    editor.settings.content_editable = true;
    editor.on('focus', function () {
      if (isSkinDisabled(editor) === false && args.skinUiCss) {
        DOM.styleSheetLoader.load(args.skinUiCss, render, render);
      } else {
        render();
      }
    });
    editor.on('blur hide', hide);
    editor.on('remove', function () {
      if (panel) {
        panel.remove();
        panel = null;
      }
    });
    if (isSkinDisabled(editor) === false && args.skinUiCss) {
      DOM.styleSheetLoader.load(args.skinUiCss, $_8khbnjufjm0og2fj.fireSkinLoaded(editor));
    } else {
      $_8khbnjufjm0og2fj.fireSkinLoaded(editor)();
    }
    return {};
  };
  var $_565f4hugjm0og2fl = { render: render$1 };

  function Throbber (elm, inline) {
    var self = this;
    var state;
    var classPrefix = Control$1.classPrefix;
    var timer;
    self.show = function (time, callback) {
      function render() {
        if (state) {
          global$9(elm).append('<div class="' + classPrefix + 'throbber' + (inline ? ' ' + classPrefix + 'throbber-inline' : '') + '"></div>');
          if (callback) {
            callback();
          }
        }
      }
      self.hide();
      state = true;
      if (time) {
        timer = global$7.setTimeout(render, time);
      } else {
        render();
      }
      return self;
    };
    self.hide = function () {
      var child = elm.lastChild;
      global$7.clearTimeout(timer);
      if (child && child.className.indexOf('throbber') !== -1) {
        child.parentNode.removeChild(child);
      }
      state = false;
      return self;
    };
  }

  var setup = function (editor, theme) {
    var throbber;
    editor.on('ProgressState', function (e) {
      throbber = throbber || new Throbber(theme.panel.getEl('body'));
      if (e.state) {
        throbber.show(e.time);
      } else {
        throbber.hide();
      }
    });
  };
  var $_eg5ysjv3jm0og2it = { setup: setup };

  var renderUI = function (editor, theme, args) {
    var skinUrl = getSkinUrl(editor);
    if (skinUrl) {
      args.skinUiCss = skinUrl + '/skin.min.css';
      editor.contentCSS.push(skinUrl + '/content' + (editor.inline ? '.inline' : '') + '.min.css');
    }
    $_eg5ysjv3jm0og2it.setup(editor, theme);
    return isInline(editor) ? $_565f4hugjm0og2fl.render(editor, theme, args) : $_assqictwjm0og2ea.render(editor, theme, args);
  };
  var $_7m9kbstsjm0og2dx = { renderUI: renderUI };

  var Tooltip = Control$1.extend({
    Mixins: [$_43ajw6uljm0og2gm],
    Defaults: { classes: 'widget tooltip tooltip-n' },
    renderHtml: function () {
      var self = this, prefix = self.classPrefix;
      return '<div id="' + self._id + '" class="' + self.classes + '" role="presentation">' + '<div class="' + prefix + 'tooltip-arrow"></div>' + '<div class="' + prefix + 'tooltip-inner">' + self.encode(self.state.get('text')) + '</div>' + '</div>';
    },
    bindStates: function () {
      var self = this;
      self.state.on('change:text', function (e) {
        self.getEl().lastChild.innerHTML = self.encode(e.value);
      });
      return self._super();
    },
    repaint: function () {
      var self = this;
      var style, rect;
      style = self.getEl().style;
      rect = self._layoutRect;
      style.left = rect.x + 'px';
      style.top = rect.y + 'px';
      style.zIndex = 65535 + 65535;
    }
  });

  var Widget = Control$1.extend({
    init: function (settings) {
      var self = this;
      self._super(settings);
      settings = self.settings;
      self.canFocus = true;
      if (settings.tooltip && Widget.tooltips !== false) {
        self.on('mouseenter', function (e) {
          var tooltip = self.tooltip().moveTo(-65535);
          if (e.control === self) {
            var rel = tooltip.text(settings.tooltip).show().testMoveRel(self.getEl(), [
              'bc-tc',
              'bc-tl',
              'bc-tr'
            ]);
            tooltip.classes.toggle('tooltip-n', rel === 'bc-tc');
            tooltip.classes.toggle('tooltip-nw', rel === 'bc-tl');
            tooltip.classes.toggle('tooltip-ne', rel === 'bc-tr');
            tooltip.moveRel(self.getEl(), rel);
          } else {
            tooltip.hide();
          }
        });
        self.on('mouseleave mousedown click', function () {
          self.tooltip().remove();
          self._tooltip = null;
        });
      }
      self.aria('label', settings.ariaLabel || settings.tooltip);
    },
    tooltip: function () {
      if (!this._tooltip) {
        this._tooltip = new Tooltip({ type: 'tooltip' });
        $_agmmwau5jm0og2eq.inheritUiContainer(this, this._tooltip);
        this._tooltip.renderTo();
      }
      return this._tooltip;
    },
    postRender: function () {
      var self = this, settings = self.settings;
      self._super();
      if (!self.parent() && (settings.width || settings.height)) {
        self.initLayoutRect();
        self.repaint();
      }
      if (settings.autofocus) {
        self.focus();
      }
    },
    bindStates: function () {
      var self = this;
      function disable(state) {
        self.aria('disabled', state);
        self.classes.toggle('disabled', state);
      }
      function active(state) {
        self.aria('pressed', state);
        self.classes.toggle('active', state);
      }
      self.state.on('change:disabled', function (e) {
        disable(e.value);
      });
      self.state.on('change:active', function (e) {
        active(e.value);
      });
      if (self.state.get('disabled')) {
        disable(true);
      }
      if (self.state.get('active')) {
        active(true);
      }
      return self._super();
    },
    remove: function () {
      this._super();
      if (this._tooltip) {
        this._tooltip.remove();
        this._tooltip = null;
      }
    }
  });

  var Progress = Widget.extend({
    Defaults: { value: 0 },
    init: function (settings) {
      var self = this;
      self._super(settings);
      self.classes.add('progress');
      if (!self.settings.filter) {
        self.settings.filter = function (value) {
          return Math.round(value);
        };
      }
    },
    renderHtml: function () {
      var self = this, id = self._id, prefix = this.classPrefix;
      return '<div id="' + id + '" class="' + self.classes + '">' + '<div class="' + prefix + 'bar-container">' + '<div class="' + prefix + 'bar"></div>' + '</div>' + '<div class="' + prefix + 'text">0%</div>' + '</div>';
    },
    postRender: function () {
      var self = this;
      self._super();
      self.value(self.settings.value);
      return self;
    },
    bindStates: function () {
      var self = this;
      function setValue(value) {
        value = self.settings.filter(value);
        self.getEl().lastChild.innerHTML = value + '%';
        self.getEl().firstChild.firstChild.style.width = value + '%';
      }
      self.state.on('change:value', function (e) {
        setValue(e.value);
      });
      setValue(self.state.get('value'));
      return self._super();
    }
  });

  var updateLiveRegion = function (ctx, text) {
    ctx.getEl().lastChild.textContent = text + (ctx.progressBar ? ' ' + ctx.progressBar.value() + '%' : '');
  };
  var Notification = Control$1.extend({
    Mixins: [$_43ajw6uljm0og2gm],
    Defaults: { classes: 'widget notification' },
    init: function (settings) {
      var self = this;
      self._super(settings);
      self.maxWidth = settings.maxWidth;
      if (settings.text) {
        self.text(settings.text);
      }
      if (settings.icon) {
        self.icon = settings.icon;
      }
      if (settings.color) {
        self.color = settings.color;
      }
      if (settings.type) {
        self.classes.add('notification-' + settings.type);
      }
      if (settings.timeout && (settings.timeout < 0 || settings.timeout > 0) && !settings.closeButton) {
        self.closeButton = false;
      } else {
        self.classes.add('has-close');
        self.closeButton = true;
      }
      if (settings.progressBar) {
        self.progressBar = new Progress();
      }
      self.on('click', function (e) {
        if (e.target.className.indexOf(self.classPrefix + 'close') !== -1) {
          self.close();
        }
      });
    },
    renderHtml: function () {
      var self = this;
      var prefix = self.classPrefix;
      var icon = '', closeButton = '', progressBar = '', notificationStyle = '';
      if (self.icon) {
        icon = '<i class="' + prefix + 'ico' + ' ' + prefix + 'i-' + self.icon + '"></i>';
      }
      notificationStyle = ' style="max-width: ' + self.maxWidth + 'px;' + (self.color ? 'background-color: ' + self.color + ';"' : '"');
      if (self.closeButton) {
        closeButton = '<button type="button" class="' + prefix + 'close" aria-hidden="true">\xD7</button>';
      }
      if (self.progressBar) {
        progressBar = self.progressBar.renderHtml();
      }
      return '<div id="' + self._id + '" class="' + self.classes + '"' + notificationStyle + ' role="presentation">' + icon + '<div class="' + prefix + 'notification-inner">' + self.state.get('text') + '</div>' + progressBar + closeButton + '<div style="clip: rect(1px, 1px, 1px, 1px);height: 1px;overflow: hidden;position: absolute;width: 1px;"' + ' aria-live="assertive" aria-relevant="additions" aria-atomic="true"></div>' + '</div>';
    },
    postRender: function () {
      var self = this;
      global$7.setTimeout(function () {
        self.$el.addClass(self.classPrefix + 'in');
        updateLiveRegion(self, self.state.get('text'));
      }, 100);
      return self._super();
    },
    bindStates: function () {
      var self = this;
      self.state.on('change:text', function (e) {
        self.getEl().firstChild.innerHTML = e.value;
        updateLiveRegion(self, e.value);
      });
      if (self.progressBar) {
        self.progressBar.bindStates();
        self.progressBar.state.on('change:value', function (e) {
          updateLiveRegion(self, self.state.get('text'));
        });
      }
      return self._super();
    },
    close: function () {
      var self = this;
      if (!self.fire('close').isDefaultPrevented()) {
        self.remove();
      }
      return self;
    },
    repaint: function () {
      var self = this;
      var style, rect;
      style = self.getEl().style;
      rect = self._layoutRect;
      style.left = rect.x + 'px';
      style.top = rect.y + 'px';
      style.zIndex = 65535 - 1;
    }
  });

  function NotificationManagerImpl (editor) {
    var getEditorContainer = function (editor) {
      return editor.inline ? editor.getElement() : editor.getContentAreaContainer();
    };
    var getContainerWidth = function () {
      var container = getEditorContainer(editor);
      return funcs.getSize(container).width;
    };
    var prePositionNotifications = function (notifications) {
      each(notifications, function (notification) {
        notification.moveTo(0, 0);
      });
    };
    var positionNotifications = function (notifications) {
      if (notifications.length > 0) {
        var firstItem = notifications.slice(0, 1)[0];
        var container = getEditorContainer(editor);
        firstItem.moveRel(container, 'tc-tc');
        each(notifications, function (notification, index) {
          if (index > 0) {
            notification.moveRel(notifications[index - 1].getEl(), 'bc-tc');
          }
        });
      }
    };
    var reposition = function (notifications) {
      prePositionNotifications(notifications);
      positionNotifications(notifications);
    };
    var open = function (args, closeCallback) {
      var extendedArgs = global$2.extend(args, { maxWidth: getContainerWidth() });
      var notif = new Notification(extendedArgs);
      notif.args = extendedArgs;
      if (extendedArgs.timeout > 0) {
        notif.timer = setTimeout(function () {
          notif.close();
          closeCallback();
        }, extendedArgs.timeout);
      }
      notif.on('close', function () {
        closeCallback();
      });
      notif.renderTo();
      return notif;
    };
    var close = function (notification) {
      notification.close();
    };
    var getArgs = function (notification) {
      return notification.args;
    };
    return {
      open: open,
      close: close,
      reposition: reposition,
      getArgs: getArgs
    };
  }

  var windows = [];
  var oldMetaValue = '';
  function toggleFullScreenState(state) {
    var noScaleMetaValue = 'width=device-width,initial-scale=1.0,user-scalable=0,minimum-scale=1.0,maximum-scale=1.0';
    var viewport = global$9('meta[name=viewport]')[0], contentValue;
    if (global$8.overrideViewPort === false) {
      return;
    }
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      document.getElementsByTagName('head')[0].appendChild(viewport);
    }
    contentValue = viewport.getAttribute('content');
    if (contentValue && typeof oldMetaValue !== 'undefined') {
      oldMetaValue = contentValue;
    }
    viewport.setAttribute('content', state ? noScaleMetaValue : oldMetaValue);
  }
  function toggleBodyFullScreenClasses(classPrefix, state) {
    if (checkFullscreenWindows() && state === false) {
      global$9([
        document.documentElement,
        document.body
      ]).removeClass(classPrefix + 'fullscreen');
    }
  }
  function checkFullscreenWindows() {
    for (var i = 0; i < windows.length; i++) {
      if (windows[i]._fullscreen) {
        return true;
      }
    }
    return false;
  }
  function handleWindowResize() {
    if (!global$8.desktop) {
      var lastSize_1 = {
        w: window.innerWidth,
        h: window.innerHeight
      };
      global$7.setInterval(function () {
        var w = window.innerWidth, h = window.innerHeight;
        if (lastSize_1.w !== w || lastSize_1.h !== h) {
          lastSize_1 = {
            w: w,
            h: h
          };
          global$9(window).trigger('resize');
        }
      }, 100);
    }
    function reposition() {
      var i;
      var rect = funcs.getWindowSize();
      var layoutRect;
      for (i = 0; i < windows.length; i++) {
        layoutRect = windows[i].layoutRect();
        windows[i].moveTo(windows[i].settings.x || Math.max(0, rect.w / 2 - layoutRect.w / 2), windows[i].settings.y || Math.max(0, rect.h / 2 - layoutRect.h / 2));
      }
    }
    global$9(window).on('resize', reposition);
  }
  var Window$$1 = FloatPanel.extend({
    modal: true,
    Defaults: {
      border: 1,
      layout: 'flex',
      containerCls: 'panel',
      role: 'dialog',
      callbacks: {
        submit: function () {
          this.fire('submit', { data: this.toJSON() });
        },
        close: function () {
          this.close();
        }
      }
    },
    init: function (settings) {
      var self$$1 = this;
      self$$1._super(settings);
      if (self$$1.isRtl()) {
        self$$1.classes.add('rtl');
      }
      self$$1.classes.add('window');
      self$$1.bodyClasses.add('window-body');
      self$$1.state.set('fixed', true);
      if (settings.buttons) {
        self$$1.statusbar = new Panel({
          layout: 'flex',
          border: '1 0 0 0',
          spacing: 3,
          padding: 10,
          align: 'center',
          pack: self$$1.isRtl() ? 'start' : 'end',
          defaults: { type: 'button' },
          items: settings.buttons
        });
        self$$1.statusbar.classes.add('foot');
        self$$1.statusbar.parent(self$$1);
      }
      self$$1.on('click', function (e) {
        var closeClass = self$$1.classPrefix + 'close';
        if (funcs.hasClass(e.target, closeClass) || funcs.hasClass(e.target.parentNode, closeClass)) {
          self$$1.close();
        }
      });
      self$$1.on('cancel', function () {
        self$$1.close();
      });
      self$$1.on('move', function (e) {
        if (e.control === self$$1) {
          FloatPanel.hideAll();
        }
      });
      self$$1.aria('describedby', self$$1.describedBy || self$$1._id + '-none');
      self$$1.aria('label', settings.title);
      self$$1._fullscreen = false;
    },
    recalc: function () {
      var self$$1 = this;
      var statusbar$$1 = self$$1.statusbar;
      var layoutRect, width, x, needsRecalc;
      if (self$$1._fullscreen) {
        self$$1.layoutRect(funcs.getWindowSize());
        self$$1.layoutRect().contentH = self$$1.layoutRect().innerH;
      }
      self$$1._super();
      layoutRect = self$$1.layoutRect();
      if (self$$1.settings.title && !self$$1._fullscreen) {
        width = layoutRect.headerW;
        if (width > layoutRect.w) {
          x = layoutRect.x - Math.max(0, width / 2);
          self$$1.layoutRect({
            w: width,
            x: x
          });
          needsRecalc = true;
        }
      }
      if (statusbar$$1) {
        statusbar$$1.layoutRect({ w: self$$1.layoutRect().innerW }).recalc();
        width = statusbar$$1.layoutRect().minW + layoutRect.deltaW;
        if (width > layoutRect.w) {
          x = layoutRect.x - Math.max(0, width - layoutRect.w);
          self$$1.layoutRect({
            w: width,
            x: x
          });
          needsRecalc = true;
        }
      }
      if (needsRecalc) {
        self$$1.recalc();
      }
    },
    initLayoutRect: function () {
      var self$$1 = this;
      var layoutRect = self$$1._super();
      var deltaH = 0, headEl;
      if (self$$1.settings.title && !self$$1._fullscreen) {
        headEl = self$$1.getEl('head');
        var size = funcs.getSize(headEl);
        layoutRect.headerW = size.width;
        layoutRect.headerH = size.height;
        deltaH += layoutRect.headerH;
      }
      if (self$$1.statusbar) {
        deltaH += self$$1.statusbar.layoutRect().h;
      }
      layoutRect.deltaH += deltaH;
      layoutRect.minH += deltaH;
      layoutRect.h += deltaH;
      var rect = funcs.getWindowSize();
      layoutRect.x = self$$1.settings.x || Math.max(0, rect.w / 2 - layoutRect.w / 2);
      layoutRect.y = self$$1.settings.y || Math.max(0, rect.h / 2 - layoutRect.h / 2);
      return layoutRect;
    },
    renderHtml: function () {
      var self$$1 = this, layout = self$$1._layout, id = self$$1._id, prefix = self$$1.classPrefix;
      var settings = self$$1.settings;
      var headerHtml = '', footerHtml = '', html = settings.html;
      self$$1.preRender();
      layout.preRender(self$$1);
      if (settings.title) {
        headerHtml = '<div id="' + id + '-head" class="' + prefix + 'window-head">' + '<div id="' + id + '-title" class="' + prefix + 'title">' + self$$1.encode(settings.title) + '</div>' + '<div id="' + id + '-dragh" class="' + prefix + 'dragh"></div>' + '<button type="button" class="' + prefix + 'close" aria-hidden="true">' + '<i class="mce-ico mce-i-remove"></i>' + '</button>' + '</div>';
      }
      if (settings.url) {
        html = '<iframe src="' + settings.url + '" tabindex="-1"></iframe>';
      }
      if (typeof html === 'undefined') {
        html = layout.renderHtml(self$$1);
      }
      if (self$$1.statusbar) {
        footerHtml = self$$1.statusbar.renderHtml();
      }
      return '<div id="' + id + '" class="' + self$$1.classes + '" hidefocus="1">' + '<div class="' + self$$1.classPrefix + 'reset" role="application">' + headerHtml + '<div id="' + id + '-body" class="' + self$$1.bodyClasses + '">' + html + '</div>' + footerHtml + '</div>' + '</div>';
    },
    fullscreen: function (state) {
      var self$$1 = this;
      var documentElement = document.documentElement;
      var slowRendering;
      var prefix = self$$1.classPrefix;
      var layoutRect;
      if (state !== self$$1._fullscreen) {
        global$9(window).on('resize', function () {
          var time;
          if (self$$1._fullscreen) {
            if (!slowRendering) {
              time = new Date().getTime();
              var rect = funcs.getWindowSize();
              self$$1.moveTo(0, 0).resizeTo(rect.w, rect.h);
              if (new Date().getTime() - time > 50) {
                slowRendering = true;
              }
            } else {
              if (!self$$1._timer) {
                self$$1._timer = global$7.setTimeout(function () {
                  var rect = funcs.getWindowSize();
                  self$$1.moveTo(0, 0).resizeTo(rect.w, rect.h);
                  self$$1._timer = 0;
                }, 50);
              }
            }
          }
        });
        layoutRect = self$$1.layoutRect();
        self$$1._fullscreen = state;
        if (!state) {
          self$$1.borderBox = $_d8f8oturjm0og2hu.parseBox(self$$1.settings.border);
          self$$1.getEl('head').style.display = '';
          layoutRect.deltaH += layoutRect.headerH;
          global$9([
            documentElement,
            document.body
          ]).removeClass(prefix + 'fullscreen');
          self$$1.classes.remove('fullscreen');
          self$$1.moveTo(self$$1._initial.x, self$$1._initial.y).resizeTo(self$$1._initial.w, self$$1._initial.h);
        } else {
          self$$1._initial = {
            x: layoutRect.x,
            y: layoutRect.y,
            w: layoutRect.w,
            h: layoutRect.h
          };
          self$$1.borderBox = $_d8f8oturjm0og2hu.parseBox('0');
          self$$1.getEl('head').style.display = 'none';
          layoutRect.deltaH -= layoutRect.headerH + 2;
          global$9([
            documentElement,
            document.body
          ]).addClass(prefix + 'fullscreen');
          self$$1.classes.add('fullscreen');
          var rect = funcs.getWindowSize();
          self$$1.moveTo(0, 0).resizeTo(rect.w, rect.h);
        }
      }
      return self$$1.reflow();
    },
    postRender: function () {
      var self$$1 = this;
      var startPos;
      setTimeout(function () {
        self$$1.classes.add('in');
        self$$1.fire('open');
      }, 0);
      self$$1._super();
      if (self$$1.statusbar) {
        self$$1.statusbar.postRender();
      }
      self$$1.focus();
      this.dragHelper = new DragHelper(self$$1._id + '-dragh', {
        start: function () {
          startPos = {
            x: self$$1.layoutRect().x,
            y: self$$1.layoutRect().y
          };
        },
        drag: function (e) {
          self$$1.moveTo(startPos.x + e.deltaX, startPos.y + e.deltaY);
        }
      });
      self$$1.on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
          self$$1.close();
        }
      });
      windows.push(self$$1);
      toggleFullScreenState(true);
    },
    submit: function () {
      return this.fire('submit', { data: this.toJSON() });
    },
    remove: function () {
      var self$$1 = this;
      var i;
      self$$1.dragHelper.destroy();
      self$$1._super();
      if (self$$1.statusbar) {
        this.statusbar.remove();
      }
      toggleBodyFullScreenClasses(self$$1.classPrefix, false);
      i = windows.length;
      while (i--) {
        if (windows[i] === self$$1) {
          windows.splice(i, 1);
        }
      }
      toggleFullScreenState(windows.length > 0);
    },
    getContentWindow: function () {
      var ifr = this.getEl().getElementsByTagName('iframe')[0];
      return ifr ? ifr.contentWindow : null;
    }
  });
  handleWindowResize();

  var MessageBox = Window$$1.extend({
    init: function (settings) {
      settings = {
        border: 1,
        padding: 20,
        layout: 'flex',
        pack: 'center',
        align: 'center',
        containerCls: 'panel',
        autoScroll: true,
        buttons: {
          type: 'button',
          text: 'Ok',
          action: 'ok'
        },
        items: {
          type: 'label',
          multiline: true,
          maxWidth: 500,
          maxHeight: 200
        }
      };
      this._super(settings);
    },
    Statics: {
      OK: 1,
      OK_CANCEL: 2,
      YES_NO: 3,
      YES_NO_CANCEL: 4,
      msgBox: function (settings) {
        var buttons;
        var callback = settings.callback || function () {
        };
        function createButton(text, status$$1, primary) {
          return {
            type: 'button',
            text: text,
            subtype: primary ? 'primary' : '',
            onClick: function (e) {
              e.control.parents()[1].close();
              callback(status$$1);
            }
          };
        }
        switch (settings.buttons) {
        case MessageBox.OK_CANCEL:
          buttons = [
            createButton('Ok', true, true),
            createButton('Cancel', false)
          ];
          break;
        case MessageBox.YES_NO:
        case MessageBox.YES_NO_CANCEL:
          buttons = [
            createButton('Yes', 1, true),
            createButton('No', 0)
          ];
          if (settings.buttons === MessageBox.YES_NO_CANCEL) {
            buttons.push(createButton('Cancel', -1));
          }
          break;
        default:
          buttons = [createButton('Ok', true, true)];
          break;
        }
        return new Window$$1({
          padding: 20,
          x: settings.x,
          y: settings.y,
          minWidth: 300,
          minHeight: 100,
          layout: 'flex',
          pack: 'center',
          align: 'center',
          buttons: buttons,
          title: settings.title,
          role: 'alertdialog',
          items: {
            type: 'label',
            multiline: true,
            maxWidth: 500,
            maxHeight: 200,
            text: settings.text
          },
          onPostRender: function () {
            this.aria('describedby', this.items()[0]._id);
          },
          onClose: settings.onClose,
          onCancel: function () {
            callback(false);
          }
        }).renderTo(document.body).reflow();
      },
      alert: function (settings, callback) {
        if (typeof settings === 'string') {
          settings = { text: settings };
        }
        settings.callback = callback;
        return MessageBox.msgBox(settings);
      },
      confirm: function (settings, callback) {
        if (typeof settings === 'string') {
          settings = { text: settings };
        }
        settings.callback = callback;
        settings.buttons = MessageBox.OK_CANCEL;
        return MessageBox.msgBox(settings);
      }
    }
  });

  function WindowManagerImpl (editor) {
    var open$$1 = function (args, params, closeCallback) {
      var win;
      args.title = args.title || ' ';
      args.url = args.url || args.file;
      if (args.url) {
        args.width = parseInt(args.width || 320, 10);
        args.height = parseInt(args.height || 240, 10);
      }
      if (args.body) {
        args.items = {
          defaults: args.defaults,
          type: args.bodyType || 'form',
          items: args.body,
          data: args.data,
          callbacks: args.commands
        };
      }
      if (!args.url && !args.buttons) {
        args.buttons = [
          {
            text: 'Ok',
            subtype: 'primary',
            onclick: function () {
              win.find('form')[0].submit();
            }
          },
          {
            text: 'Cancel',
            onclick: function () {
              win.close();
            }
          }
        ];
      }
      win = new Window$$1(args);
      win.on('close', function () {
        closeCallback(win);
      });
      if (args.data) {
        win.on('postRender', function () {
          this.find('*').each(function (ctrl) {
            var name$$1 = ctrl.name();
            if (name$$1 in args.data) {
              ctrl.value(args.data[name$$1]);
            }
          });
        });
      }
      win.features = args || {};
      win.params = params || {};
      win = win.renderTo(document.body).reflow();
      return win;
    };
    var alert$$1 = function (message, choiceCallback, closeCallback) {
      var win;
      win = MessageBox.alert(message, function () {
        choiceCallback();
      });
      win.on('close', function () {
        closeCallback(win);
      });
      return win;
    };
    var confirm$$1 = function (message, choiceCallback, closeCallback) {
      var win;
      win = MessageBox.confirm(message, function (state) {
        choiceCallback(state);
      });
      win.on('close', function () {
        closeCallback(win);
      });
      return win;
    };
    var close$$1 = function (window$$1) {
      window$$1.close();
    };
    var getParams = function (window$$1) {
      return window$$1.params;
    };
    var setParams = function (window$$1, params) {
      window$$1.params = params;
    };
    return {
      open: open$$1,
      alert: alert$$1,
      confirm: confirm$$1,
      close: close$$1,
      getParams: getParams,
      setParams: setParams
    };
  }

  var get = function (editor) {
    var renderUI = function (args) {
      return $_7m9kbstsjm0og2dx.renderUI(editor, this, args);
    };
    var resizeTo = function (w, h) {
      return $_398jz4ucjm0og2fe.resizeTo(editor, w, h);
    };
    var resizeBy = function (dw, dh) {
      return $_398jz4ucjm0og2fe.resizeBy(editor, dw, dh);
    };
    var getNotificationManagerImpl = function () {
      return NotificationManagerImpl(editor);
    };
    var getWindowManagerImpl = function () {
      return WindowManagerImpl(editor);
    };
    return {
      renderUI: renderUI,
      resizeTo: resizeTo,
      resizeBy: resizeBy,
      getNotificationManagerImpl: getNotificationManagerImpl,
      getWindowManagerImpl: getWindowManagerImpl
    };
  };
  var $_ept3vutrjm0og2dw = { get: get };

  var Layout = global$10.extend({
    Defaults: {
      firstControlClass: 'first',
      lastControlClass: 'last'
    },
    init: function (settings) {
      this.settings = global$2.extend({}, this.Defaults, settings);
    },
    preRender: function (container) {
      container.bodyClasses.add(this.settings.containerClass);
    },
    applyClasses: function (items) {
      var self = this;
      var settings = self.settings;
      var firstClass, lastClass, firstItem, lastItem;
      firstClass = settings.firstControlClass;
      lastClass = settings.lastControlClass;
      items.each(function (item) {
        item.classes.remove(firstClass).remove(lastClass).add(settings.controlClass);
        if (item.visible()) {
          if (!firstItem) {
            firstItem = item;
          }
          lastItem = item;
        }
      });
      if (firstItem) {
        firstItem.classes.add(firstClass);
      }
      if (lastItem) {
        lastItem.classes.add(lastClass);
      }
    },
    renderHtml: function (container) {
      var self = this;
      var html = '';
      self.applyClasses(container.items());
      container.items().each(function (item) {
        html += item.renderHtml();
      });
      return html;
    },
    recalc: function () {
    },
    postRender: function () {
    },
    isNative: function () {
      return false;
    }
  });

  var AbsoluteLayout = Layout.extend({
    Defaults: {
      containerClass: 'abs-layout',
      controlClass: 'abs-layout-item'
    },
    recalc: function (container) {
      container.items().filter(':visible').each(function (ctrl) {
        var settings = ctrl.settings;
        ctrl.layoutRect({
          x: settings.x,
          y: settings.y,
          w: settings.w,
          h: settings.h
        });
        if (ctrl.recalc) {
          ctrl.recalc();
        }
      });
    },
    renderHtml: function (container) {
      return '<div id="' + container._id + '-absend" class="' + container.classPrefix + 'abs-end"></div>' + this._super(container);
    }
  });

  var Button = Widget.extend({
    Defaults: {
      classes: 'widget btn',
      role: 'button'
    },
    init: function (settings) {
      var self$$1 = this;
      var size;
      self$$1._super(settings);
      settings = self$$1.settings;
      size = self$$1.settings.size;
      self$$1.on('click mousedown', function (e) {
        e.preventDefault();
      });
      self$$1.on('touchstart', function (e) {
        self$$1.fire('click', e);
        e.preventDefault();
      });
      if (settings.subtype) {
        self$$1.classes.add(settings.subtype);
      }
      if (size) {
        self$$1.classes.add('btn-' + size);
      }
      if (settings.icon) {
        self$$1.icon(settings.icon);
      }
    },
    icon: function (icon) {
      if (!arguments.length) {
        return this.state.get('icon');
      }
      this.state.set('icon', icon);
      return this;
    },
    repaint: function () {
      var btnElm = this.getEl().firstChild;
      var btnStyle;
      if (btnElm) {
        btnStyle = btnElm.style;
        btnStyle.width = btnStyle.height = '100%';
      }
      this._super();
    },
    renderHtml: function () {
      var self$$1 = this, id = self$$1._id, prefix = self$$1.classPrefix;
      var icon = self$$1.state.get('icon'), image;
      var text = self$$1.state.get('text');
      var textHtml = '';
      var ariaPressed;
      var settings = self$$1.settings;
      image = settings.image;
      if (image) {
        icon = 'none';
        if (typeof image !== 'string') {
          image = window.getSelection ? image[0] : image[1];
        }
        image = ' style="background-image: url(\'' + image + '\')"';
      } else {
        image = '';
      }
      if (text) {
        self$$1.classes.add('btn-has-text');
        textHtml = '<span class="' + prefix + 'txt">' + self$$1.encode(text) + '</span>';
      }
      icon = icon ? prefix + 'ico ' + prefix + 'i-' + icon : '';
      ariaPressed = typeof settings.active === 'boolean' ? ' aria-pressed="' + settings.active + '"' : '';
      return '<div id="' + id + '" class="' + self$$1.classes + '" tabindex="-1"' + ariaPressed + '>' + '<button id="' + id + '-button" role="presentation" type="button" tabindex="-1">' + (icon ? '<i class="' + icon + '"' + image + '></i>' : '') + textHtml + '</button>' + '</div>';
    },
    bindStates: function () {
      var self$$1 = this, $ = self$$1.$, textCls = self$$1.classPrefix + 'txt';
      function setButtonText(text) {
        var $span = $('span.' + textCls, self$$1.getEl());
        if (text) {
          if (!$span[0]) {
            $('button:first', self$$1.getEl()).append('<span class="' + textCls + '"></span>');
            $span = $('span.' + textCls, self$$1.getEl());
          }
          $span.html(self$$1.encode(text));
        } else {
          $span.remove();
        }
        self$$1.classes.toggle('btn-has-text', !!text);
      }
      self$$1.state.on('change:text', function (e) {
        setButtonText(e.value);
      });
      self$$1.state.on('change:icon', function (e) {
        var icon = e.value;
        var prefix = self$$1.classPrefix;
        self$$1.settings.icon = icon;
        icon = icon ? prefix + 'ico ' + prefix + 'i-' + self$$1.settings.icon : '';
        var btnElm = self$$1.getEl().firstChild;
        var iconElm = btnElm.getElementsByTagName('i')[0];
        if (icon) {
          if (!iconElm || iconElm !== btnElm.firstChild) {
            iconElm = document.createElement('i');
            btnElm.insertBefore(iconElm, btnElm.firstChild);
          }
          iconElm.className = icon;
        } else if (iconElm) {
          btnElm.removeChild(iconElm);
        }
        setButtonText(self$$1.state.get('text'));
      });
      return self$$1._super();
    }
  });

  var BrowseButton = Button.extend({
    init: function (settings) {
      var self = this;
      settings = global$2.extend({
        text: 'Browse...',
        multiple: false,
        accept: null
      }, settings);
      self._super(settings);
      self.classes.add('browsebutton');
      if (settings.multiple) {
        self.classes.add('multiple');
      }
    },
    postRender: function () {
      var self = this;
      var input = funcs.create('input', {
        type: 'file',
        id: self._id + '-browse',
        accept: self.settings.accept
      });
      self._super();
      global$9(input).on('change', function (e) {
        var files = e.target.files;
        self.value = function () {
          if (!files.length) {
            return null;
          } else if (self.settings.multiple) {
            return files;
          } else {
            return files[0];
          }
        };
        e.preventDefault();
        if (files.length) {
          self.fire('change', e);
        }
      });
      global$9(input).on('click', function (e) {
        e.stopPropagation();
      });
      global$9(self.getEl('button')).on('click', function (e) {
        e.stopPropagation();
        input.click();
      });
      self.getEl().appendChild(input);
    },
    remove: function () {
      global$9(this.getEl('button')).off();
      global$9(this.getEl('input')).off();
      this._super();
    }
  });

  var ButtonGroup = Container.extend({
    Defaults: {
      defaultType: 'button',
      role: 'group'
    },
    renderHtml: function () {
      var self = this, layout = self._layout;
      self.classes.add('btn-group');
      self.preRender();
      layout.preRender(self);
      return '<div id="' + self._id + '" class="' + self.classes + '">' + '<div id="' + self._id + '-body">' + (self.settings.html || '') + layout.renderHtml(self) + '</div>' + '</div>';
    }
  });

  var Checkbox = Widget.extend({
    Defaults: {
      classes: 'checkbox',
      role: 'checkbox',
      checked: false
    },
    init: function (settings) {
      var self$$1 = this;
      self$$1._super(settings);
      self$$1.on('click mousedown', function (e) {
        e.preventDefault();
      });
      self$$1.on('click', function (e) {
        e.preventDefault();
        if (!self$$1.disabled()) {
          self$$1.checked(!self$$1.checked());
        }
      });
      self$$1.checked(self$$1.settings.checked);
    },
    checked: function (state) {
      if (!arguments.length) {
        return this.state.get('checked');
      }
      this.state.set('checked', state);
      return this;
    },
    value: function (state) {
      if (!arguments.length) {
        return this.checked();
      }
      return this.checked(state);
    },
    renderHtml: function () {
      var self$$1 = this, id = self$$1._id, prefix = self$$1.classPrefix;
      return '<div id="' + id + '" class="' + self$$1.classes + '" unselectable="on" aria-labelledby="' + id + '-al" tabindex="-1">' + '<i class="' + prefix + 'ico ' + prefix + 'i-checkbox"></i>' + '<span id="' + id + '-al" class="' + prefix + 'label">' + self$$1.encode(self$$1.state.get('text')) + '</span>' + '</div>';
    },
    bindStates: function () {
      var self$$1 = this;
      function checked(state) {
        self$$1.classes.toggle('checked', state);
        self$$1.aria('checked', state);
      }
      self$$1.state.on('change:text', function (e) {
        self$$1.getEl('al').firstChild.data = self$$1.translate(e.value);
      });
      self$$1.state.on('change:checked change:value', function (e) {
        self$$1.fire('change');
        checked(e.value);
      });
      self$$1.state.on('change:icon', function (e) {
        var icon = e.value;
        var prefix = self$$1.classPrefix;
        if (typeof icon === 'undefined') {
          return self$$1.settings.icon;
        }
        self$$1.settings.icon = icon;
        icon = icon ? prefix + 'ico ' + prefix + 'i-' + self$$1.settings.icon : '';
        var btnElm = self$$1.getEl().firstChild;
        var iconElm = btnElm.getElementsByTagName('i')[0];
        if (icon) {
          if (!iconElm || iconElm !== btnElm.firstChild) {
            iconElm = document.createElement('i');
            btnElm.insertBefore(iconElm, btnElm.firstChild);
          }
          iconElm.className = icon;
        } else if (iconElm) {
          btnElm.removeChild(iconElm);
        }
      });
      if (self$$1.state.get('checked')) {
        checked(true);
      }
      return self$$1._super();
    }
  });

  var global$13 = tinymce.util.Tools.resolve('tinymce.util.VK');

  var ComboBox = Widget.extend({
    init: function (settings) {
      var self$$1 = this;
      self$$1._super(settings);
      settings = self$$1.settings;
      self$$1.classes.add('combobox');
      self$$1.subinput = true;
      self$$1.ariaTarget = 'inp';
      settings.menu = settings.menu || settings.values;
      if (settings.menu) {
        settings.icon = 'caret';
      }
      self$$1.on('click', function (e) {
        var elm = e.target;
        var root = self$$1.getEl();
        if (!global$9.contains(root, elm) && elm !== root) {
          return;
        }
        while (elm && elm !== root) {
          if (elm.id && elm.id.indexOf('-open') !== -1) {
            self$$1.fire('action');
            if (settings.menu) {
              self$$1.showMenu();
              if (e.aria) {
                self$$1.menu.items()[0].focus();
              }
            }
          }
          elm = elm.parentNode;
        }
      });
      self$$1.on('keydown', function (e) {
        var rootControl;
        if (e.keyCode === 13 && e.target.nodeName === 'INPUT') {
          e.preventDefault();
          self$$1.parents().reverse().each(function (ctrl) {
            if (ctrl.toJSON) {
              rootControl = ctrl;
              return false;
            }
          });
          self$$1.fire('submit', { data: rootControl.toJSON() });
        }
      });
      self$$1.on('keyup', function (e) {
        if (e.target.nodeName === 'INPUT') {
          var oldValue = self$$1.state.get('value');
          var newValue = e.target.value;
          if (newValue !== oldValue) {
            self$$1.state.set('value', newValue);
            self$$1.fire('autocomplete', e);
          }
        }
      });
      self$$1.on('mouseover', function (e) {
        var tooltip = self$$1.tooltip().moveTo(-65535);
        if (self$$1.statusLevel() && e.target.className.indexOf(self$$1.classPrefix + 'status') !== -1) {
          var statusMessage = self$$1.statusMessage() || 'Ok';
          var rel = tooltip.text(statusMessage).show().testMoveRel(e.target, [
            'bc-tc',
            'bc-tl',
            'bc-tr'
          ]);
          tooltip.classes.toggle('tooltip-n', rel === 'bc-tc');
          tooltip.classes.toggle('tooltip-nw', rel === 'bc-tl');
          tooltip.classes.toggle('tooltip-ne', rel === 'bc-tr');
          tooltip.moveRel(e.target, rel);
        }
      });
    },
    statusLevel: function (value) {
      if (arguments.length > 0) {
        this.state.set('statusLevel', value);
      }
      return this.state.get('statusLevel');
    },
    statusMessage: function (value) {
      if (arguments.length > 0) {
        this.state.set('statusMessage', value);
      }
      return this.state.get('statusMessage');
    },
    showMenu: function () {
      var self$$1 = this;
      var settings = self$$1.settings;
      var menu;
      if (!self$$1.menu) {
        menu = settings.menu || [];
        if (menu.length) {
          menu = {
            type: 'menu',
            items: menu
          };
        } else {
          menu.type = menu.type || 'menu';
        }
        self$$1.menu = global$4.create(menu).parent(self$$1).renderTo(self$$1.getContainerElm());
        self$$1.fire('createmenu');
        self$$1.menu.reflow();
        self$$1.menu.on('cancel', function (e) {
          if (e.control === self$$1.menu) {
            self$$1.focus();
          }
        });
        self$$1.menu.on('show hide', function (e) {
          e.control.items().each(function (ctrl) {
            ctrl.active(ctrl.value() === self$$1.value());
          });
        }).fire('show');
        self$$1.menu.on('select', function (e) {
          self$$1.value(e.control.value());
        });
        self$$1.on('focusin', function (e) {
          if (e.target.tagName.toUpperCase() === 'INPUT') {
            self$$1.menu.hide();
          }
        });
        self$$1.aria('expanded', true);
      }
      self$$1.menu.show();
      self$$1.menu.layoutRect({ w: self$$1.layoutRect().w });
      self$$1.menu.moveRel(self$$1.getEl(), self$$1.isRtl() ? [
        'br-tr',
        'tr-br'
      ] : [
        'bl-tl',
        'tl-bl'
      ]);
    },
    focus: function () {
      this.getEl('inp').focus();
    },
    repaint: function () {
      var self$$1 = this, elm = self$$1.getEl(), openElm = self$$1.getEl('open'), rect = self$$1.layoutRect();
      var width, lineHeight, innerPadding = 0;
      var inputElm = elm.firstChild;
      if (self$$1.statusLevel() && self$$1.statusLevel() !== 'none') {
        innerPadding = parseInt(funcs.getRuntimeStyle(inputElm, 'padding-right'), 10) - parseInt(funcs.getRuntimeStyle(inputElm, 'padding-left'), 10);
      }
      if (openElm) {
        width = rect.w - funcs.getSize(openElm).width - 10;
      } else {
        width = rect.w - 10;
      }
      var doc = document;
      if (doc.all && (!doc.documentMode || doc.documentMode <= 8)) {
        lineHeight = self$$1.layoutRect().h - 2 + 'px';
      }
      global$9(inputElm).css({
        width: width - innerPadding,
        lineHeight: lineHeight
      });
      self$$1._super();
      return self$$1;
    },
    postRender: function () {
      var self$$1 = this;
      global$9(this.getEl('inp')).on('change', function (e) {
        self$$1.state.set('value', e.target.value);
        self$$1.fire('change', e);
      });
      return self$$1._super();
    },
    renderHtml: function () {
      var self$$1 = this, id = self$$1._id, settings = self$$1.settings, prefix = self$$1.classPrefix;
      var value = self$$1.state.get('value') || '';
      var icon, text, openBtnHtml = '', extraAttrs = '', statusHtml = '';
      if ('spellcheck' in settings) {
        extraAttrs += ' spellcheck="' + settings.spellcheck + '"';
      }
      if (settings.maxLength) {
        extraAttrs += ' maxlength="' + settings.maxLength + '"';
      }
      if (settings.size) {
        extraAttrs += ' size="' + settings.size + '"';
      }
      if (settings.subtype) {
        extraAttrs += ' type="' + settings.subtype + '"';
      }
      statusHtml = '<i id="' + id + '-status" class="mce-status mce-ico" style="display: none"></i>';
      if (self$$1.disabled()) {
        extraAttrs += ' disabled="disabled"';
      }
      icon = settings.icon;
      if (icon && icon !== 'caret') {
        icon = prefix + 'ico ' + prefix + 'i-' + settings.icon;
      }
      text = self$$1.state.get('text');
      if (icon || text) {
        openBtnHtml = '<div id="' + id + '-open" class="' + prefix + 'btn ' + prefix + 'open" tabIndex="-1" role="button">' + '<button id="' + id + '-action" type="button" hidefocus="1" tabindex="-1">' + (icon !== 'caret' ? '<i class="' + icon + '"></i>' : '<i class="' + prefix + 'caret"></i>') + (text ? (icon ? ' ' : '') + text : '') + '</button>' + '</div>';
        self$$1.classes.add('has-open');
      }
      return '<div id="' + id + '" class="' + self$$1.classes + '">' + '<input id="' + id + '-inp" class="' + prefix + 'textbox" value="' + self$$1.encode(value, false) + '" hidefocus="1"' + extraAttrs + ' placeholder="' + self$$1.encode(settings.placeholder) + '" />' + statusHtml + openBtnHtml + '</div>';
    },
    value: function (value) {
      if (arguments.length) {
        this.state.set('value', value);
        return this;
      }
      if (this.state.get('rendered')) {
        this.state.set('value', this.getEl('inp').value);
      }
      return this.state.get('value');
    },
    showAutoComplete: function (items, term) {
      var self$$1 = this;
      if (items.length === 0) {
        self$$1.hideMenu();
        return;
      }
      var insert = function (value, title) {
        return function () {
          self$$1.fire('selectitem', {
            title: title,
            value: value
          });
        };
      };
      if (self$$1.menu) {
        self$$1.menu.items().remove();
      } else {
        self$$1.menu = global$4.create({
          type: 'menu',
          classes: 'combobox-menu',
          layout: 'flow'
        }).parent(self$$1).renderTo();
      }
      global$2.each(items, function (item) {
        self$$1.menu.add({
          text: item.title,
          url: item.previewUrl,
          match: term,
          classes: 'menu-item-ellipsis',
          onclick: insert(item.value, item.title)
        });
      });
      self$$1.menu.renderNew();
      self$$1.hideMenu();
      self$$1.menu.on('cancel', function (e) {
        if (e.control.parent() === self$$1.menu) {
          e.stopPropagation();
          self$$1.focus();
          self$$1.hideMenu();
        }
      });
      self$$1.menu.on('select', function () {
        self$$1.focus();
      });
      var maxW = self$$1.layoutRect().w;
      self$$1.menu.layoutRect({
        w: maxW,
        minW: 0,
        maxW: maxW
      });
      self$$1.menu.repaint();
      self$$1.menu.reflow();
      self$$1.menu.show();
      self$$1.menu.moveRel(self$$1.getEl(), self$$1.isRtl() ? [
        'br-tr',
        'tr-br'
      ] : [
        'bl-tl',
        'tl-bl'
      ]);
    },
    hideMenu: function () {
      if (this.menu) {
        this.menu.hide();
      }
    },
    bindStates: function () {
      var self$$1 = this;
      self$$1.state.on('change:value', function (e) {
        if (self$$1.getEl('inp').value !== e.value) {
          self$$1.getEl('inp').value = e.value;
        }
      });
      self$$1.state.on('change:disabled', function (e) {
        self$$1.getEl('inp').disabled = e.value;
      });
      self$$1.state.on('change:statusLevel', function (e) {
        var statusIconElm = self$$1.getEl('status');
        var prefix = self$$1.classPrefix, value = e.value;
        funcs.css(statusIconElm, 'display', value === 'none' ? 'none' : '');
        funcs.toggleClass(statusIconElm, prefix + 'i-checkmark', value === 'ok');
        funcs.toggleClass(statusIconElm, prefix + 'i-warning', value === 'warn');
        funcs.toggleClass(statusIconElm, prefix + 'i-error', value === 'error');
        self$$1.classes.toggle('has-status', value !== 'none');
        self$$1.repaint();
      });
      funcs.on(self$$1.getEl('status'), 'mouseleave', function () {
        self$$1.tooltip().hide();
      });
      self$$1.on('cancel', function (e) {
        if (self$$1.menu && self$$1.menu.visible()) {
          e.stopPropagation();
          self$$1.hideMenu();
        }
      });
      var focusIdx = function (idx, menu) {
        if (menu && menu.items().length > 0) {
          menu.items().eq(idx)[0].focus();
        }
      };
      self$$1.on('keydown', function (e) {
        var keyCode = e.keyCode;
        if (e.target.nodeName === 'INPUT') {
          if (keyCode === global$13.DOWN) {
            e.preventDefault();
            self$$1.fire('autocomplete');
            focusIdx(0, self$$1.menu);
          } else if (keyCode === global$13.UP) {
            e.preventDefault();
            focusIdx(-1, self$$1.menu);
          }
        }
      });
      return self$$1._super();
    },
    remove: function () {
      global$9(this.getEl('inp')).off();
      if (this.menu) {
        this.menu.remove();
      }
      this._super();
    }
  });

  var ColorBox = ComboBox.extend({
    init: function (settings) {
      var self = this;
      settings.spellcheck = false;
      if (settings.onaction) {
        settings.icon = 'none';
      }
      self._super(settings);
      self.classes.add('colorbox');
      self.on('change keyup postrender', function () {
        self.repaintColor(self.value());
      });
    },
    repaintColor: function (value) {
      var openElm = this.getEl('open');
      var elm = openElm ? openElm.getElementsByTagName('i')[0] : null;
      if (elm) {
        try {
          elm.style.background = value;
        } catch (ex) {
        }
      }
    },
    bindStates: function () {
      var self = this;
      self.state.on('change:value', function (e) {
        if (self.state.get('rendered')) {
          self.repaintColor(e.value);
        }
      });
      return self._super();
    }
  });

  var PanelButton = Button.extend({
    showPanel: function () {
      var self = this, settings = self.settings;
      self.classes.add('opened');
      if (!self.panel) {
        var panelSettings = settings.panel;
        if (panelSettings.type) {
          panelSettings = {
            layout: 'grid',
            items: panelSettings
          };
        }
        panelSettings.role = panelSettings.role || 'dialog';
        panelSettings.popover = true;
        panelSettings.autohide = true;
        panelSettings.ariaRoot = true;
        self.panel = new FloatPanel(panelSettings).on('hide', function () {
          self.classes.remove('opened');
        }).on('cancel', function (e) {
          e.stopPropagation();
          self.focus();
          self.hidePanel();
        }).parent(self).renderTo(self.getContainerElm());
        self.panel.fire('show');
        self.panel.reflow();
      } else {
        self.panel.show();
      }
      var rtlRels = [
        'bc-tc',
        'bc-tl',
        'bc-tr'
      ];
      var ltrRels = [
        'bc-tc',
        'bc-tr',
        'bc-tl',
        'tc-bc',
        'tc-br',
        'tc-bl'
      ];
      var rel = self.panel.testMoveRel(self.getEl(), settings.popoverAlign || (self.isRtl() ? rtlRels : ltrRels));
      self.panel.classes.toggle('start', rel.substr(-1) === 'l');
      self.panel.classes.toggle('end', rel.substr(-1) === 'r');
      var isTop = rel.substr(0, 1) === 't';
      self.panel.classes.toggle('bottom', !isTop);
      self.panel.classes.toggle('top', isTop);
      self.panel.moveRel(self.getEl(), rel);
    },
    hidePanel: function () {
      var self = this;
      if (self.panel) {
        self.panel.hide();
      }
    },
    postRender: function () {
      var self = this;
      self.aria('haspopup', true);
      self.on('click', function (e) {
        if (e.control === self) {
          if (self.panel && self.panel.visible()) {
            self.hidePanel();
          } else {
            self.showPanel();
            self.panel.focus(!!e.aria);
          }
        }
      });
      return self._super();
    },
    remove: function () {
      if (this.panel) {
        this.panel.remove();
        this.panel = null;
      }
      return this._super();
    }
  });

  var DOM$3 = global$3.DOM;
  var ColorButton = PanelButton.extend({
    init: function (settings) {
      this._super(settings);
      this.classes.add('splitbtn');
      this.classes.add('colorbutton');
    },
    color: function (color) {
      if (color) {
        this._color = color;
        this.getEl('preview').style.backgroundColor = color;
        return this;
      }
      return this._color;
    },
    resetColor: function () {
      this._color = null;
      this.getEl('preview').style.backgroundColor = null;
      return this;
    },
    renderHtml: function () {
      var self = this, id = self._id, prefix = self.classPrefix, text = self.state.get('text');
      var icon = self.settings.icon ? prefix + 'ico ' + prefix + 'i-' + self.settings.icon : '';
      var image = self.settings.image ? ' style="background-image: url(\'' + self.settings.image + '\')"' : '';
      var textHtml = '';
      if (text) {
        self.classes.add('btn-has-text');
        textHtml = '<span class="' + prefix + 'txt">' + self.encode(text) + '</span>';
      }
      return '<div id="' + id + '" class="' + self.classes + '" role="button" tabindex="-1" aria-haspopup="true">' + '<button role="presentation" hidefocus="1" type="button" tabindex="-1">' + (icon ? '<i class="' + icon + '"' + image + '></i>' : '') + '<span id="' + id + '-preview" class="' + prefix + 'preview"></span>' + textHtml + '</button>' + '<button type="button" class="' + prefix + 'open" hidefocus="1" tabindex="-1">' + ' <i class="' + prefix + 'caret"></i>' + '</button>' + '</div>';
    },
    postRender: function () {
      var self = this, onClickHandler = self.settings.onclick;
      self.on('click', function (e) {
        if (e.aria && e.aria.key === 'down') {
          return;
        }
        if (e.control === self && !DOM$3.getParent(e.target, '.' + self.classPrefix + 'open')) {
          e.stopImmediatePropagation();
          onClickHandler.call(self, e);
        }
      });
      delete self.settings.onclick;
      return self._super();
    }
  });

  var global$14 = tinymce.util.Tools.resolve('tinymce.util.Color');

  var ColorPicker = Widget.extend({
    Defaults: { classes: 'widget colorpicker' },
    init: function (settings) {
      this._super(settings);
    },
    postRender: function () {
      var self = this;
      var color = self.color();
      var hsv, hueRootElm, huePointElm, svRootElm, svPointElm;
      hueRootElm = self.getEl('h');
      huePointElm = self.getEl('hp');
      svRootElm = self.getEl('sv');
      svPointElm = self.getEl('svp');
      function getPos(elm, event) {
        var pos = funcs.getPos(elm);
        var x, y;
        x = event.pageX - pos.x;
        y = event.pageY - pos.y;
        x = Math.max(0, Math.min(x / elm.clientWidth, 1));
        y = Math.max(0, Math.min(y / elm.clientHeight, 1));
        return {
          x: x,
          y: y
        };
      }
      function updateColor(hsv, hueUpdate) {
        var hue = (360 - hsv.h) / 360;
        funcs.css(huePointElm, { top: hue * 100 + '%' });
        if (!hueUpdate) {
          funcs.css(svPointElm, {
            left: hsv.s + '%',
            top: 100 - hsv.v + '%'
          });
        }
        svRootElm.style.background = global$14({
          s: 100,
          v: 100,
          h: hsv.h
        }).toHex();
        self.color().parse({
          s: hsv.s,
          v: hsv.v,
          h: hsv.h
        });
      }
      function updateSaturationAndValue(e) {
        var pos;
        pos = getPos(svRootElm, e);
        hsv.s = pos.x * 100;
        hsv.v = (1 - pos.y) * 100;
        updateColor(hsv);
        self.fire('change');
      }
      function updateHue(e) {
        var pos;
        pos = getPos(hueRootElm, e);
        hsv = color.toHsv();
        hsv.h = (1 - pos.y) * 360;
        updateColor(hsv, true);
        self.fire('change');
      }
      self._repaint = function () {
        hsv = color.toHsv();
        updateColor(hsv);
      };
      self._super();
      self._svdraghelper = new DragHelper(self._id + '-sv', {
        start: updateSaturationAndValue,
        drag: updateSaturationAndValue
      });
      self._hdraghelper = new DragHelper(self._id + '-h', {
        start: updateHue,
        drag: updateHue
      });
      self._repaint();
    },
    rgb: function () {
      return this.color().toRgb();
    },
    value: function (value) {
      var self = this;
      if (arguments.length) {
        self.color().parse(value);
        if (self._rendered) {
          self._repaint();
        }
      } else {
        return self.color().toHex();
      }
    },
    color: function () {
      if (!this._color) {
        this._color = global$14();
      }
      return this._color;
    },
    renderHtml: function () {
      var self = this;
      var id = self._id;
      var prefix = self.classPrefix;
      var hueHtml;
      var stops = '#ff0000,#ff0080,#ff00ff,#8000ff,#0000ff,#0080ff,#00ffff,#00ff80,#00ff00,#80ff00,#ffff00,#ff8000,#ff0000';
      function getOldIeFallbackHtml() {
        var i, l, html = '', gradientPrefix, stopsList;
        gradientPrefix = 'filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=';
        stopsList = stops.split(',');
        for (i = 0, l = stopsList.length - 1; i < l; i++) {
          html += '<div class="' + prefix + 'colorpicker-h-chunk" style="' + 'height:' + 100 / l + '%;' + gradientPrefix + stopsList[i] + ',endColorstr=' + stopsList[i + 1] + ');' + '-ms-' + gradientPrefix + stopsList[i] + ',endColorstr=' + stopsList[i + 1] + ')' + '"></div>';
        }
        return html;
      }
      var gradientCssText = 'background: -ms-linear-gradient(top,' + stops + ');' + 'background: linear-gradient(to bottom,' + stops + ');';
      hueHtml = '<div id="' + id + '-h" class="' + prefix + 'colorpicker-h" style="' + gradientCssText + '">' + getOldIeFallbackHtml() + '<div id="' + id + '-hp" class="' + prefix + 'colorpicker-h-marker"></div>' + '</div>';
      return '<div id="' + id + '" class="' + self.classes + '">' + '<div id="' + id + '-sv" class="' + prefix + 'colorpicker-sv">' + '<div class="' + prefix + 'colorpicker-overlay1">' + '<div class="' + prefix + 'colorpicker-overlay2">' + '<div id="' + id + '-svp" class="' + prefix + 'colorpicker-selector1">' + '<div class="' + prefix + 'colorpicker-selector2"></div>' + '</div>' + '</div>' + '</div>' + '</div>' + hueHtml + '</div>';
    }
  });

  var DropZone = Widget.extend({
    init: function (settings) {
      var self = this;
      settings = global$2.extend({
        height: 100,
        text: 'Drop an image here',
        multiple: false,
        accept: null
      }, settings);
      self._super(settings);
      self.classes.add('dropzone');
      if (settings.multiple) {
        self.classes.add('multiple');
      }
    },
    renderHtml: function () {
      var self = this;
      var attrs, elm;
      var cfg = self.settings;
      attrs = {
        id: self._id,
        hidefocus: '1'
      };
      elm = funcs.create('div', attrs, '<span>' + this.translate(cfg.text) + '</span>');
      if (cfg.height) {
        funcs.css(elm, 'height', cfg.height + 'px');
      }
      if (cfg.width) {
        funcs.css(elm, 'width', cfg.width + 'px');
      }
      elm.className = self.classes;
      return elm.outerHTML;
    },
    postRender: function () {
      var self = this;
      var toggleDragClass = function (e) {
        e.preventDefault();
        self.classes.toggle('dragenter');
        self.getEl().className = self.classes;
      };
      var filter = function (files) {
        var accept = self.settings.accept;
        if (typeof accept !== 'string') {
          return files;
        }
        var re = new RegExp('(' + accept.split(/\s*,\s*/).join('|') + ')$', 'i');
        return global$2.grep(files, function (file) {
          return re.test(file.name);
        });
      };
      self._super();
      self.$el.on('dragover', function (e) {
        e.preventDefault();
      });
      self.$el.on('dragenter', toggleDragClass);
      self.$el.on('dragleave', toggleDragClass);
      self.$el.on('drop', function (e) {
        e.preventDefault();
        if (self.state.get('disabled')) {
          return;
        }
        var files = filter(e.dataTransfer.files);
        self.value = function () {
          if (!files.length) {
            return null;
          } else if (self.settings.multiple) {
            return files;
          } else {
            return files[0];
          }
        };
        if (files.length) {
          self.fire('change', e);
        }
      });
    },
    remove: function () {
      this.$el.off();
      this._super();
    }
  });

  var Path = Widget.extend({
    init: function (settings) {
      var self = this;
      if (!settings.delimiter) {
        settings.delimiter = '\xBB';
      }
      self._super(settings);
      self.classes.add('path');
      self.canFocus = true;
      self.on('click', function (e) {
        var index;
        var target = e.target;
        if (index = target.getAttribute('data-index')) {
          self.fire('select', {
            value: self.row()[index],
            index: index
          });
        }
      });
      self.row(self.settings.row);
    },
    focus: function () {
      var self = this;
      self.getEl().firstChild.focus();
      return self;
    },
    row: function (row) {
      if (!arguments.length) {
        return this.state.get('row');
      }
      this.state.set('row', row);
      return this;
    },
    renderHtml: function () {
      var self = this;
      return '<div id="' + self._id + '" class="' + self.classes + '">' + self._getDataPathHtml(self.state.get('row')) + '</div>';
    },
    bindStates: function () {
      var self = this;
      self.state.on('change:row', function (e) {
        self.innerHtml(self._getDataPathHtml(e.value));
      });
      return self._super();
    },
    _getDataPathHtml: function (data) {
      var self = this;
      var parts = data || [];
      var i, l, html = '';
      var prefix = self.classPrefix;
      for (i = 0, l = parts.length; i < l; i++) {
        html += (i > 0 ? '<div class="' + prefix + 'divider" aria-hidden="true"> ' + self.settings.delimiter + ' </div>' : '') + '<div role="button" class="' + prefix + 'path-item' + (i === l - 1 ? ' ' + prefix + 'last' : '') + '" data-index="' + i + '" tabindex="-1" id="' + self._id + '-' + i + '" aria-level="' + (i + 1) + '">' + parts[i].name + '</div>';
      }
      if (!html) {
        html = '<div class="' + prefix + 'path-item">\xA0</div>';
      }
      return html;
    }
  });

  var ElementPath = Path.extend({
    postRender: function () {
      var self = this, editor = self.settings.editor;
      function isHidden(elm) {
        if (elm.nodeType === 1) {
          if (elm.nodeName === 'BR' || !!elm.getAttribute('data-mce-bogus')) {
            return true;
          }
          if (elm.getAttribute('data-mce-type') === 'bookmark') {
            return true;
          }
        }
        return false;
      }
      if (editor.settings.elementpath !== false) {
        self.on('select', function (e) {
          editor.focus();
          editor.selection.select(this.row()[e.index].element);
          editor.nodeChanged();
        });
        editor.on('nodeChange', function (e) {
          var outParents = [];
          var parents = e.parents;
          var i = parents.length;
          while (i--) {
            if (parents[i].nodeType === 1 && !isHidden(parents[i])) {
              var args = editor.fire('ResolveName', {
                name: parents[i].nodeName.toLowerCase(),
                target: parents[i]
              });
              if (!args.isDefaultPrevented()) {
                outParents.push({
                  name: args.name,
                  element: parents[i]
                });
              }
              if (args.isPropagationStopped()) {
                break;
              }
            }
          }
          self.row(outParents);
        });
      }
      return self._super();
    }
  });

  var FormItem = Container.extend({
    Defaults: {
      layout: 'flex',
      align: 'center',
      defaults: { flex: 1 }
    },
    renderHtml: function () {
      var self = this, layout = self._layout, prefix = self.classPrefix;
      self.classes.add('formitem');
      layout.preRender(self);
      return '<div id="' + self._id + '" class="' + self.classes + '" hidefocus="1" tabindex="-1">' + (self.settings.title ? '<div id="' + self._id + '-title" class="' + prefix + 'title">' + self.settings.title + '</div>' : '') + '<div id="' + self._id + '-body" class="' + self.bodyClasses + '">' + (self.settings.html || '') + layout.renderHtml(self) + '</div>' + '</div>';
    }
  });

  var Form = Container.extend({
    Defaults: {
      containerCls: 'form',
      layout: 'flex',
      direction: 'column',
      align: 'stretch',
      flex: 1,
      padding: 15,
      labelGap: 30,
      spacing: 10,
      callbacks: {
        submit: function () {
          this.submit();
        }
      }
    },
    preRender: function () {
      var self = this, items = self.items();
      if (!self.settings.formItemDefaults) {
        self.settings.formItemDefaults = {
          layout: 'flex',
          autoResize: 'overflow',
          defaults: { flex: 1 }
        };
      }
      items.each(function (ctrl) {
        var formItem;
        var label = ctrl.settings.label;
        if (label) {
          formItem = new FormItem(global$2.extend({
            items: {
              type: 'label',
              id: ctrl._id + '-l',
              text: label,
              flex: 0,
              forId: ctrl._id,
              disabled: ctrl.disabled()
            }
          }, self.settings.formItemDefaults));
          formItem.type = 'formitem';
          ctrl.aria('labelledby', ctrl._id + '-l');
          if (typeof ctrl.settings.flex === 'undefined') {
            ctrl.settings.flex = 1;
          }
          self.replace(ctrl, formItem);
          formItem.add(ctrl);
        }
      });
    },
    submit: function () {
      return this.fire('submit', { data: this.toJSON() });
    },
    postRender: function () {
      var self = this;
      self._super();
      self.fromJSON(self.settings.data);
    },
    bindStates: function () {
      var self = this;
      self._super();
      function recalcLabels() {
        var maxLabelWidth = 0;
        var labels = [];
        var i, labelGap, items;
        if (self.settings.labelGapCalc === false) {
          return;
        }
        if (self.settings.labelGapCalc === 'children') {
          items = self.find('formitem');
        } else {
          items = self.items();
        }
        items.filter('formitem').each(function (item) {
          var labelCtrl = item.items()[0], labelWidth = labelCtrl.getEl().clientWidth;
          maxLabelWidth = labelWidth > maxLabelWidth ? labelWidth : maxLabelWidth;
          labels.push(labelCtrl);
        });
        labelGap = self.settings.labelGap || 0;
        i = labels.length;
        while (i--) {
          labels[i].settings.minWidth = maxLabelWidth + labelGap;
        }
      }
      self.on('show', recalcLabels);
      recalcLabels();
    }
  });

  var FieldSet = Form.extend({
    Defaults: {
      containerCls: 'fieldset',
      layout: 'flex',
      direction: 'column',
      align: 'stretch',
      flex: 1,
      padding: '25 15 5 15',
      labelGap: 30,
      spacing: 10,
      border: 1
    },
    renderHtml: function () {
      var self = this, layout = self._layout, prefix = self.classPrefix;
      self.preRender();
      layout.preRender(self);
      return '<fieldset id="' + self._id + '" class="' + self.classes + '" hidefocus="1" tabindex="-1">' + (self.settings.title ? '<legend id="' + self._id + '-title" class="' + prefix + 'fieldset-title">' + self.settings.title + '</legend>' : '') + '<div id="' + self._id + '-body" class="' + self.bodyClasses + '">' + (self.settings.html || '') + layout.renderHtml(self) + '</div>' + '</fieldset>';
    }
  });

  var unique$1 = 0;
  var generate = function (prefix) {
    var date = new Date();
    var time = date.getTime();
    var random = Math.floor(Math.random() * 1000000000);
    unique$1++;
    return prefix + '_' + random + unique$1 + String(time);
  };

  var fromHtml = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    if (!div.hasChildNodes() || div.childNodes.length > 1) {
      console.error('HTML does not have a single root node', html);
      throw 'HTML must have a single root node';
    }
    return fromDom(div.childNodes[0]);
  };
  var fromTag = function (tag, scope) {
    var doc = scope || document;
    var node = doc.createElement(tag);
    return fromDom(node);
  };
  var fromText = function (text, scope) {
    var doc = scope || document;
    var node = doc.createTextNode(text);
    return fromDom(node);
  };
  var fromDom = function (node) {
    if (node === null || node === undefined)
      throw new Error('Node cannot be null or undefined');
    return { dom: constant(node) };
  };
  var fromPoint = function (docElm, x, y) {
    var doc = docElm.dom();
    return Option.from(doc.elementFromPoint(x, y)).map(fromDom);
  };
  var Element$$1 = {
    fromHtml: fromHtml,
    fromTag: fromTag,
    fromText: fromText,
    fromDom: fromDom,
    fromPoint: fromPoint
  };

  var cached = function (f) {
    var called = false;
    var r;
    return function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (!called) {
        called = true;
        r = f.apply(null, args);
      }
      return r;
    };
  };

  var $_3feiczw6jm0og2sd = {
    ATTRIBUTE: Node.ATTRIBUTE_NODE,
    CDATA_SECTION: Node.CDATA_SECTION_NODE,
    COMMENT: Node.COMMENT_NODE,
    DOCUMENT: Node.DOCUMENT_NODE,
    DOCUMENT_TYPE: Node.DOCUMENT_TYPE_NODE,
    DOCUMENT_FRAGMENT: Node.DOCUMENT_FRAGMENT_NODE,
    ELEMENT: Node.ELEMENT_NODE,
    TEXT: Node.TEXT_NODE,
    PROCESSING_INSTRUCTION: Node.PROCESSING_INSTRUCTION_NODE,
    ENTITY_REFERENCE: Node.ENTITY_REFERENCE_NODE,
    ENTITY: Node.ENTITY_NODE,
    NOTATION: Node.NOTATION_NODE
  };

  var name = function (element) {
    var r = element.dom().nodeName;
    return r.toLowerCase();
  };
  var type = function (element) {
    return element.dom().nodeType;
  };
  var value = function (element) {
    return element.dom().nodeValue;
  };
  var isType$1 = function (t) {
    return function (element) {
      return type(element) === t;
    };
  };
  var isComment = function (element) {
    return type(element) === $_3feiczw6jm0og2sd.COMMENT || name(element) === '#comment';
  };
  var isElement = isType$1($_3feiczw6jm0og2sd.ELEMENT);
  var isText = isType$1($_3feiczw6jm0og2sd.TEXT);
  var isDocument = isType$1($_3feiczw6jm0og2sd.DOCUMENT);
  var $_2mnwqkw5jm0og2sc = {
    name: name,
    type: type,
    value: value,
    isElement: isElement,
    isText: isText,
    isDocument: isDocument,
    isComment: isComment
  };

  var inBody = function (element) {
    var dom = $_2mnwqkw5jm0og2sc.isText(element) ? element.dom().parentNode : element.dom();
    return dom !== undefined && dom !== null && dom.ownerDocument.body.contains(dom);
  };
  var body = cached(function () {
    return getBody(Element$$1.fromDom(document));
  });
  var getBody = function (doc) {
    var body = doc.dom().body;
    if (body === null || body === undefined)
      throw 'Body is not available yet';
    return Element$$1.fromDom(body);
  };
  var $_87yw2aw3jm0og2s8 = {
    body: body,
    getBody: getBody,
    inBody: inBody
  };

  var Immutable = function () {
    var fields = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      fields[_i] = arguments[_i];
    }
    return function () {
      var values = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }
      if (fields.length !== values.length) {
        throw new Error('Wrong number of arguments to struct. Expected "[' + fields.length + ']", got ' + values.length + ' arguments');
      }
      var struct = {};
      each(fields, function (name, i) {
        struct[name] = constant(values[i]);
      });
      return struct;
    };
  };

  var toArray = function (target, f) {
    var r = [];
    var recurse = function (e) {
      r.push(e);
      return f(e);
    };
    var cur = f(target);
    do {
      cur = cur.bind(recurse);
    } while (cur.isSome());
    return r;
  };
  var $_44sih4wdjm0og2tb = { toArray: toArray };

  var Global = typeof window !== 'undefined' ? window : Function('return this;')();

  var path = function (parts, scope) {
    var o = scope !== undefined && scope !== null ? scope : Global;
    for (var i = 0; i < parts.length && o !== undefined && o !== null; ++i)
      o = o[parts[i]];
    return o;
  };
  var resolve = function (p, scope) {
    var parts = p.split('.');
    return path(parts, scope);
  };

  var unsafe = function (name, scope) {
    return resolve(name, scope);
  };
  var getOrDie = function (name, scope) {
    var actual = unsafe(name, scope);
    if (actual === undefined || actual === null)
      throw name + ' not available on this browser';
    return actual;
  };
  var $_gbx6s3wgjm0og2to = { getOrDie: getOrDie };

  var node = function () {
    var f = $_gbx6s3wgjm0og2to.getOrDie('Node');
    return f;
  };
  var compareDocumentPosition = function (a, b, match) {
    return (a.compareDocumentPosition(b) & match) !== 0;
  };
  var documentPositionPreceding = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_PRECEDING);
  };
  var documentPositionContainedBy = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_CONTAINED_BY);
  };
  var $_9zpzcfwfjm0og2tn = {
    documentPositionPreceding: documentPositionPreceding,
    documentPositionContainedBy: documentPositionContainedBy
  };

  var firstMatch = function (regexes, s) {
    for (var i = 0; i < regexes.length; i++) {
      var x = regexes[i];
      if (x.test(s))
        return x;
    }
    return undefined;
  };
  var find$2 = function (regexes, agent) {
    var r = firstMatch(regexes, agent);
    if (!r)
      return {
        major: 0,
        minor: 0
      };
    var group = function (i) {
      return Number(agent.replace(r, '$' + i));
    };
    return nu(group(1), group(2));
  };
  var detect = function (versionRegexes, agent) {
    var cleanedAgent = String(agent).toLowerCase();
    if (versionRegexes.length === 0)
      return unknown();
    return find$2(versionRegexes, cleanedAgent);
  };
  var unknown = function () {
    return nu(0, 0);
  };
  var nu = function (major, minor) {
    return {
      major: major,
      minor: minor
    };
  };
  var $_a2y6fiwmjm0og2u3 = {
    nu: nu,
    detect: detect,
    unknown: unknown
  };

  var edge = 'Edge';
  var chrome = 'Chrome';
  var ie = 'IE';
  var opera = 'Opera';
  var firefox = 'Firefox';
  var safari = 'Safari';
  var isBrowser = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$1 = function () {
    return nu$1({
      current: undefined,
      version: $_a2y6fiwmjm0og2u3.unknown()
    });
  };
  var nu$1 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isEdge: isBrowser(edge, current),
      isChrome: isBrowser(chrome, current),
      isIE: isBrowser(ie, current),
      isOpera: isBrowser(opera, current),
      isFirefox: isBrowser(firefox, current),
      isSafari: isBrowser(safari, current)
    };
  };
  var $_5v14wcwljm0og2tz = {
    unknown: unknown$1,
    nu: nu$1,
    edge: constant(edge),
    chrome: constant(chrome),
    ie: constant(ie),
    opera: constant(opera),
    firefox: constant(firefox),
    safari: constant(safari)
  };

  var windows$1 = 'Windows';
  var ios = 'iOS';
  var android = 'Android';
  var linux = 'Linux';
  var osx = 'OSX';
  var solaris = 'Solaris';
  var freebsd = 'FreeBSD';
  var isOS = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$2 = function () {
    return nu$2({
      current: undefined,
      version: $_a2y6fiwmjm0og2u3.unknown()
    });
  };
  var nu$2 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isWindows: isOS(windows$1, current),
      isiOS: isOS(ios, current),
      isAndroid: isOS(android, current),
      isOSX: isOS(osx, current),
      isLinux: isOS(linux, current),
      isSolaris: isOS(solaris, current),
      isFreeBSD: isOS(freebsd, current)
    };
  };
  var $_42y08vwnjm0og2u4 = {
    unknown: unknown$2,
    nu: nu$2,
    windows: constant(windows$1),
    ios: constant(ios),
    android: constant(android),
    linux: constant(linux),
    osx: constant(osx),
    solaris: constant(solaris),
    freebsd: constant(freebsd)
  };

  function DeviceType (os, browser, userAgent) {
    var isiPad = os.isiOS() && /ipad/i.test(userAgent) === true;
    var isiPhone = os.isiOS() && !isiPad;
    var isAndroid3 = os.isAndroid() && os.version.major === 3;
    var isAndroid4 = os.isAndroid() && os.version.major === 4;
    var isTablet = isiPad || isAndroid3 || isAndroid4 && /mobile/i.test(userAgent) === true;
    var isTouch = os.isiOS() || os.isAndroid();
    var isPhone = isTouch && !isTablet;
    var iOSwebview = browser.isSafari() && os.isiOS() && /safari/i.test(userAgent) === false;
    return {
      isiPad: constant(isiPad),
      isiPhone: constant(isiPhone),
      isTablet: constant(isTablet),
      isPhone: constant(isPhone),
      isTouch: constant(isTouch),
      isAndroid: os.isAndroid,
      isiOS: os.isiOS,
      isWebView: constant(iOSwebview)
    };
  }

  var detect$1 = function (candidates, userAgent) {
    var agent = String(userAgent).toLowerCase();
    return find(candidates, function (candidate) {
      return candidate.search(agent);
    });
  };
  var detectBrowser = function (browsers, userAgent) {
    return detect$1(browsers, userAgent).map(function (browser) {
      var version = $_a2y6fiwmjm0og2u3.detect(browser.versionRegexes, userAgent);
      return {
        current: browser.name,
        version: version
      };
    });
  };
  var detectOs = function (oses, userAgent) {
    return detect$1(oses, userAgent).map(function (os) {
      var version = $_a2y6fiwmjm0og2u3.detect(os.versionRegexes, userAgent);
      return {
        current: os.name,
        version: version
      };
    });
  };
  var $_59xhprwpjm0og2ub = {
    detectBrowser: detectBrowser,
    detectOs: detectOs
  };

  var contains$1 = function (str, substr) {
    return str.indexOf(substr) !== -1;
  };

  var normalVersionRegex = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/;
  var checkContains = function (target) {
    return function (uastring) {
      return contains$1(uastring, target);
    };
  };
  var browsers = [
    {
      name: 'Edge',
      versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
      search: function (uastring) {
        var monstrosity = contains$1(uastring, 'edge/') && contains$1(uastring, 'chrome') && contains$1(uastring, 'safari') && contains$1(uastring, 'applewebkit');
        return monstrosity;
      }
    },
    {
      name: 'Chrome',
      versionRegexes: [
        /.*?chrome\/([0-9]+)\.([0-9]+).*/,
        normalVersionRegex
      ],
      search: function (uastring) {
        return contains$1(uastring, 'chrome') && !contains$1(uastring, 'chromeframe');
      }
    },
    {
      name: 'IE',
      versionRegexes: [
        /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
        /.*?rv:([0-9]+)\.([0-9]+).*/
      ],
      search: function (uastring) {
        return contains$1(uastring, 'msie') || contains$1(uastring, 'trident');
      }
    },
    {
      name: 'Opera',
      versionRegexes: [
        normalVersionRegex,
        /.*?opera\/([0-9]+)\.([0-9]+).*/
      ],
      search: checkContains('opera')
    },
    {
      name: 'Firefox',
      versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
      search: checkContains('firefox')
    },
    {
      name: 'Safari',
      versionRegexes: [
        normalVersionRegex,
        /.*?cpu os ([0-9]+)_([0-9]+).*/
      ],
      search: function (uastring) {
        return (contains$1(uastring, 'safari') || contains$1(uastring, 'mobile/')) && contains$1(uastring, 'applewebkit');
      }
    }
  ];
  var oses = [
    {
      name: 'Windows',
      search: checkContains('win'),
      versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'iOS',
      search: function (uastring) {
        return contains$1(uastring, 'iphone') || contains$1(uastring, 'ipad');
      },
      versionRegexes: [
        /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        /.*cpu os ([0-9]+)_([0-9]+).*/,
        /.*cpu iphone os ([0-9]+)_([0-9]+).*/
      ]
    },
    {
      name: 'Android',
      search: checkContains('android'),
      versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'OSX',
      search: checkContains('os x'),
      versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
    },
    {
      name: 'Linux',
      search: checkContains('linux'),
      versionRegexes: []
    },
    {
      name: 'Solaris',
      search: checkContains('sunos'),
      versionRegexes: []
    },
    {
      name: 'FreeBSD',
      search: checkContains('freebsd'),
      versionRegexes: []
    }
  ];
  var $_did3bwwqjm0og2uf = {
    browsers: constant(browsers),
    oses: constant(oses)
  };

  var detect$2 = function (userAgent) {
    var browsers = $_did3bwwqjm0og2uf.browsers();
    var oses = $_did3bwwqjm0og2uf.oses();
    var browser = $_59xhprwpjm0og2ub.detectBrowser(browsers, userAgent).fold($_5v14wcwljm0og2tz.unknown, $_5v14wcwljm0og2tz.nu);
    var os = $_59xhprwpjm0og2ub.detectOs(oses, userAgent).fold($_42y08vwnjm0og2u4.unknown, $_42y08vwnjm0og2u4.nu);
    var deviceType = DeviceType(os, browser, userAgent);
    return {
      browser: browser,
      os: os,
      deviceType: deviceType
    };
  };
  var $_5iuj81wkjm0og2ty = { detect: detect$2 };

  var detect$3 = cached(function () {
    var userAgent = navigator.userAgent;
    return $_5iuj81wkjm0og2ty.detect(userAgent);
  });
  var $_83xh60wjjm0og2tt = { detect: detect$3 };

  var ELEMENT = $_3feiczw6jm0og2sd.ELEMENT;
  var DOCUMENT = $_3feiczw6jm0og2sd.DOCUMENT;
  var is = function (element, selector) {
    var elem = element.dom();
    if (elem.nodeType !== ELEMENT)
      return false;
    else if (elem.matches !== undefined)
      return elem.matches(selector);
    else if (elem.msMatchesSelector !== undefined)
      return elem.msMatchesSelector(selector);
    else if (elem.webkitMatchesSelector !== undefined)
      return elem.webkitMatchesSelector(selector);
    else if (elem.mozMatchesSelector !== undefined)
      return elem.mozMatchesSelector(selector);
    else
      throw new Error('Browser lacks native selectors');
  };
  var bypassSelector = function (dom) {
    return dom.nodeType !== ELEMENT && dom.nodeType !== DOCUMENT || dom.childElementCount === 0;
  };
  var all = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? [] : map(base.querySelectorAll(selector), Element$$1.fromDom);
  };
  var one = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? Option.none() : Option.from(base.querySelector(selector)).map(Element$$1.fromDom);
  };
  var $_3z5hfxwujm0og2up = {
    all: all,
    is: is,
    one: one
  };

  var eq = function (e1, e2) {
    return e1.dom() === e2.dom();
  };
  var isEqualNode = function (e1, e2) {
    return e1.dom().isEqualNode(e2.dom());
  };
  var member = function (element, elements) {
    return exists(elements, curry(eq, element));
  };
  var regularContains = function (e1, e2) {
    var d1 = e1.dom(), d2 = e2.dom();
    return d1 === d2 ? false : d1.contains(d2);
  };
  var ieContains = function (e1, e2) {
    return $_9zpzcfwfjm0og2tn.documentPositionContainedBy(e1.dom(), e2.dom());
  };
  var browser = $_83xh60wjjm0og2tt.detect().browser;
  var contains$2 = browser.isIE() ? ieContains : regularContains;
  var $_g0j18kwejm0og2td = {
    eq: eq,
    isEqualNode: isEqualNode,
    member: member,
    contains: contains$2,
    is: $_3z5hfxwujm0og2up.is
  };

  var owner = function (element) {
    return Element$$1.fromDom(element.dom().ownerDocument);
  };
  var documentElement = function (element) {
    return Element$$1.fromDom(element.dom().ownerDocument.documentElement);
  };
  var defaultView = function (element) {
    var el = element.dom();
    var defaultView = el.ownerDocument.defaultView;
    return Element$$1.fromDom(defaultView);
  };
  var parent = function (element) {
    var dom = element.dom();
    return Option.from(dom.parentNode).map(Element$$1.fromDom);
  };
  var findIndex$1 = function (element) {
    return parent(element).bind(function (p) {
      var kin = children(p);
      return findIndex(kin, function (elem) {
        return $_g0j18kwejm0og2td.eq(element, elem);
      });
    });
  };
  var parents = function (element, isRoot) {
    var stop = isFunction(isRoot) ? isRoot : constant(false);
    var dom = element.dom();
    var ret = [];
    while (dom.parentNode !== null && dom.parentNode !== undefined) {
      var rawParent = dom.parentNode;
      var parent = Element$$1.fromDom(rawParent);
      ret.push(parent);
      if (stop(parent) === true)
        break;
      else
        dom = rawParent;
    }
    return ret;
  };
  var siblings = function (element) {
    var filterSelf = function (elements) {
      return filter(elements, function (x) {
        return !$_g0j18kwejm0og2td.eq(element, x);
      });
    };
    return parent(element).map(children).map(filterSelf).getOr([]);
  };
  var offsetParent = function (element) {
    var dom = element.dom();
    return Option.from(dom.offsetParent).map(Element$$1.fromDom);
  };
  var prevSibling = function (element) {
    var dom = element.dom();
    return Option.from(dom.previousSibling).map(Element$$1.fromDom);
  };
  var nextSibling = function (element) {
    var dom = element.dom();
    return Option.from(dom.nextSibling).map(Element$$1.fromDom);
  };
  var prevSiblings = function (element) {
    return reverse($_44sih4wdjm0og2tb.toArray(element, prevSibling));
  };
  var nextSiblings = function (element) {
    return $_44sih4wdjm0og2tb.toArray(element, nextSibling);
  };
  var children = function (element) {
    var dom = element.dom();
    return map(dom.childNodes, Element$$1.fromDom);
  };
  var child = function (element, index) {
    var children = element.dom().childNodes;
    return Option.from(children[index]).map(Element$$1.fromDom);
  };
  var firstChild = function (element) {
    return child(element, 0);
  };
  var lastChild = function (element) {
    return child(element, element.dom().childNodes.length - 1);
  };
  var childNodesCount = function (element) {
    return element.dom().childNodes.length;
  };
  var hasChildNodes = function (element) {
    return element.dom().hasChildNodes();
  };
  var spot = Immutable('element', 'offset');
  var leaf = function (element, offset) {
    var cs = children(element);
    return cs.length > 0 && offset < cs.length ? spot(cs[offset], 0) : spot(element, offset);
  };
  var $_cgfqt3w7jm0og2sg = {
    owner: owner,
    defaultView: defaultView,
    documentElement: documentElement,
    parent: parent,
    findIndex: findIndex$1,
    parents: parents,
    siblings: siblings,
    prevSibling: prevSibling,
    offsetParent: offsetParent,
    prevSiblings: prevSiblings,
    nextSibling: nextSibling,
    nextSiblings: nextSiblings,
    children: children,
    child: child,
    firstChild: firstChild,
    lastChild: lastChild,
    childNodesCount: childNodesCount,
    hasChildNodes: hasChildNodes,
    leaf: leaf
  };

  var all$1 = function (predicate) {
    return descendants($_87yw2aw3jm0og2s8.body(), predicate);
  };
  var ancestors = function (scope, predicate, isRoot) {
    return filter($_cgfqt3w7jm0og2sg.parents(scope, isRoot), predicate);
  };
  var siblings$1 = function (scope, predicate) {
    return filter($_cgfqt3w7jm0og2sg.siblings(scope), predicate);
  };
  var children$1 = function (scope, predicate) {
    return filter($_cgfqt3w7jm0og2sg.children(scope), predicate);
  };
  var descendants = function (scope, predicate) {
    var result = [];
    each($_cgfqt3w7jm0og2sg.children(scope), function (x) {
      if (predicate(x)) {
        result = result.concat([x]);
      }
      result = result.concat(descendants(x, predicate));
    });
    return result;
  };
  var $_65o996w2jm0og2s4 = {
    all: all$1,
    ancestors: ancestors,
    siblings: siblings$1,
    children: children$1,
    descendants: descendants
  };

  var all$2 = function (selector) {
    return $_3z5hfxwujm0og2up.all(selector);
  };
  var ancestors$1 = function (scope, selector, isRoot) {
    return $_65o996w2jm0og2s4.ancestors(scope, function (e) {
      return $_3z5hfxwujm0og2up.is(e, selector);
    }, isRoot);
  };
  var siblings$2 = function (scope, selector) {
    return $_65o996w2jm0og2s4.siblings(scope, function (e) {
      return $_3z5hfxwujm0og2up.is(e, selector);
    });
  };
  var children$2 = function (scope, selector) {
    return $_65o996w2jm0og2s4.children(scope, function (e) {
      return $_3z5hfxwujm0og2up.is(e, selector);
    });
  };
  var descendants$1 = function (scope, selector) {
    return $_3z5hfxwujm0og2up.all(selector, scope);
  };
  var $_3dpnyww1jm0og2s3 = {
    all: all$2,
    ancestors: ancestors$1,
    siblings: siblings$2,
    children: children$2,
    descendants: descendants$1
  };

  var trim$1 = global$2.trim;
  var hasContentEditableState = function (value) {
    return function (node) {
      if (node && node.nodeType === 1) {
        if (node.contentEditable === value) {
          return true;
        }
        if (node.getAttribute('data-mce-contenteditable') === value) {
          return true;
        }
      }
      return false;
    };
  };
  var isContentEditableTrue = hasContentEditableState('true');
  var isContentEditableFalse = hasContentEditableState('false');
  var create = function (type, title, url, level, attach) {
    return {
      type: type,
      title: title,
      url: url,
      level: level,
      attach: attach
    };
  };
  var isChildOfContentEditableTrue = function (node) {
    while (node = node.parentNode) {
      var value = node.contentEditable;
      if (value && value !== 'inherit') {
        return isContentEditableTrue(node);
      }
    }
    return false;
  };
  var select = function (selector, root) {
    return map($_3dpnyww1jm0og2s3.descendants(Element$$1.fromDom(root), selector), function (element) {
      return element.dom();
    });
  };
  var getElementText = function (elm) {
    return elm.innerText || elm.textContent;
  };
  var getOrGenerateId = function (elm) {
    return elm.id ? elm.id : generate('h');
  };
  var isAnchor = function (elm) {
    return elm && elm.nodeName === 'A' && (elm.id || elm.name);
  };
  var isValidAnchor = function (elm) {
    return isAnchor(elm) && isEditable(elm);
  };
  var isHeader = function (elm) {
    return elm && /^(H[1-6])$/.test(elm.nodeName);
  };
  var isEditable = function (elm) {
    return isChildOfContentEditableTrue(elm) && !isContentEditableFalse(elm);
  };
  var isValidHeader = function (elm) {
    return isHeader(elm) && isEditable(elm);
  };
  var getLevel = function (elm) {
    return isHeader(elm) ? parseInt(elm.nodeName.substr(1), 10) : 0;
  };
  var headerTarget = function (elm) {
    var headerId = getOrGenerateId(elm);
    var attach = function () {
      elm.id = headerId;
    };
    return create('header', getElementText(elm), '#' + headerId, getLevel(elm), attach);
  };
  var anchorTarget = function (elm) {
    var anchorId = elm.id || elm.name;
    var anchorText = getElementText(elm);
    return create('anchor', anchorText ? anchorText : '#' + anchorId, '#' + anchorId, 0, noop);
  };
  var getHeaderTargets = function (elms) {
    return map(filter(elms, isValidHeader), headerTarget);
  };
  var getAnchorTargets = function (elms) {
    return map(filter(elms, isValidAnchor), anchorTarget);
  };
  var getTargetElements = function (elm) {
    var elms = select('h1,h2,h3,h4,h5,h6,a:not([href])', elm);
    return elms;
  };
  var hasTitle = function (target) {
    return trim$1(target.title).length > 0;
  };
  var find$3 = function (elm) {
    var elms = getTargetElements(elm);
    return filter(getHeaderTargets(elms).concat(getAnchorTargets(elms)), hasTitle);
  };
  var $_bf6nh2vyjm0og2rh = { find: find$3 };

  var getActiveEditor = function () {
    return window.tinymce ? window.tinymce.activeEditor : global$1.activeEditor;
  };
  var history = {};
  var HISTORY_LENGTH = 5;
  var clearHistory = function () {
    history = {};
  };
  var toMenuItem = function (target) {
    return {
      title: target.title,
      value: {
        title: { raw: target.title },
        url: target.url,
        attach: target.attach
      }
    };
  };
  var toMenuItems = function (targets) {
    return global$2.map(targets, toMenuItem);
  };
  var staticMenuItem = function (title, url) {
    return {
      title: title,
      value: {
        title: title,
        url: url,
        attach: noop
      }
    };
  };
  var isUniqueUrl = function (url, targets) {
    var foundTarget = exists(targets, function (target) {
      return target.url === url;
    });
    return !foundTarget;
  };
  var getSetting = function (editorSettings, name, defaultValue) {
    var value = name in editorSettings ? editorSettings[name] : defaultValue;
    return value === false ? null : value;
  };
  var createMenuItems = function (term, targets, fileType, editorSettings) {
    var separator = { title: '-' };
    var fromHistoryMenuItems = function (history) {
      var historyItems = history.hasOwnProperty(fileType) ? history[fileType] : [];
      var uniqueHistory = filter(historyItems, function (url) {
        return isUniqueUrl(url, targets);
      });
      return global$2.map(uniqueHistory, function (url) {
        return {
          title: url,
          value: {
            title: url,
            url: url,
            attach: noop
          }
        };
      });
    };
    var fromMenuItems = function (type) {
      var filteredTargets = filter(targets, function (target) {
        return target.type === type;
      });
      return toMenuItems(filteredTargets);
    };
    var anchorMenuItems = function () {
      var anchorMenuItems = fromMenuItems('anchor');
      var topAnchor = getSetting(editorSettings, 'anchor_top', '#top');
      var bottomAchor = getSetting(editorSettings, 'anchor_bottom', '#bottom');
      if (topAnchor !== null) {
        anchorMenuItems.unshift(staticMenuItem('<top>', topAnchor));
      }
      if (bottomAchor !== null) {
        anchorMenuItems.push(staticMenuItem('<bottom>', bottomAchor));
      }
      return anchorMenuItems;
    };
    var join = function (items) {
      return foldl(items, function (a, b) {
        var bothEmpty = a.length === 0 || b.length === 0;
        return bothEmpty ? a.concat(b) : a.concat(separator, b);
      }, []);
    };
    if (editorSettings.typeahead_urls === false) {
      return [];
    }
    return fileType === 'file' ? join([
      filterByQuery(term, fromHistoryMenuItems(history)),
      filterByQuery(term, fromMenuItems('header')),
      filterByQuery(term, anchorMenuItems())
    ]) : filterByQuery(term, fromHistoryMenuItems(history));
  };
  var addToHistory = function (url, fileType) {
    var items = history[fileType];
    if (!/^https?/.test(url)) {
      return;
    }
    if (items) {
      if (indexOf(items, url).isNone()) {
        history[fileType] = items.slice(0, HISTORY_LENGTH).concat(url);
      }
    } else {
      history[fileType] = [url];
    }
  };
  var filterByQuery = function (term, menuItems) {
    var lowerCaseTerm = term.toLowerCase();
    var result = global$2.grep(menuItems, function (item) {
      return item.title.toLowerCase().indexOf(lowerCaseTerm) !== -1;
    });
    return result.length === 1 && result[0].title === term ? [] : result;
  };
  var getTitle = function (linkDetails) {
    var title = linkDetails.title;
    return title.raw ? title.raw : title;
  };
  var setupAutoCompleteHandler = function (ctrl, editorSettings, bodyElm, fileType) {
    var autocomplete = function (term) {
      var linkTargets = $_bf6nh2vyjm0og2rh.find(bodyElm);
      var menuItems = createMenuItems(term, linkTargets, fileType, editorSettings);
      ctrl.showAutoComplete(menuItems, term);
    };
    ctrl.on('autocomplete', function () {
      autocomplete(ctrl.value());
    });
    ctrl.on('selectitem', function (e) {
      var linkDetails = e.value;
      ctrl.value(linkDetails.url);
      var title = getTitle(linkDetails);
      if (fileType === 'image') {
        ctrl.fire('change', {
          meta: {
            alt: title,
            attach: linkDetails.attach
          }
        });
      } else {
        ctrl.fire('change', {
          meta: {
            text: title,
            attach: linkDetails.attach
          }
        });
      }
      ctrl.focus();
    });
    ctrl.on('click', function (e) {
      if (ctrl.value().length === 0 && e.target.nodeName === 'INPUT') {
        autocomplete('');
      }
    });
    ctrl.on('PostRender', function () {
      ctrl.getRoot().on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
          addToHistory(ctrl.value(), fileType);
        }
      });
    });
  };
  var statusToUiState = function (result) {
    var status = result.status, message = result.message;
    if (status === 'valid') {
      return {
        status: 'ok',
        message: message
      };
    } else if (status === 'unknown') {
      return {
        status: 'warn',
        message: message
      };
    } else if (status === 'invalid') {
      return {
        status: 'warn',
        message: message
      };
    } else {
      return {
        status: 'none',
        message: ''
      };
    }
  };
  var setupLinkValidatorHandler = function (ctrl, editorSettings, fileType) {
    var validatorHandler = editorSettings.filepicker_validator_handler;
    if (validatorHandler) {
      var validateUrl_1 = function (url) {
        if (url.length === 0) {
          ctrl.statusLevel('none');
          return;
        }
        validatorHandler({
          url: url,
          type: fileType
        }, function (result) {
          var uiState = statusToUiState(result);
          ctrl.statusMessage(uiState.message);
          ctrl.statusLevel(uiState.status);
        });
      };
      ctrl.state.on('change:value', function (e) {
        validateUrl_1(e.value);
      });
    }
  };
  var FilePicker = ComboBox.extend({
    Statics: { clearHistory: clearHistory },
    init: function (settings) {
      var self = this, editor = getActiveEditor(), editorSettings = editor.settings;
      var actionCallback, fileBrowserCallback, fileBrowserCallbackTypes;
      var fileType = settings.filetype;
      settings.spellcheck = false;
      fileBrowserCallbackTypes = editorSettings.file_picker_types || editorSettings.file_browser_callback_types;
      if (fileBrowserCallbackTypes) {
        fileBrowserCallbackTypes = global$2.makeMap(fileBrowserCallbackTypes, /[, ]/);
      }
      if (!fileBrowserCallbackTypes || fileBrowserCallbackTypes[fileType]) {
        fileBrowserCallback = editorSettings.file_picker_callback;
        if (fileBrowserCallback && (!fileBrowserCallbackTypes || fileBrowserCallbackTypes[fileType])) {
          actionCallback = function () {
            var meta = self.fire('beforecall').meta;
            meta = global$2.extend({ filetype: fileType }, meta);
            fileBrowserCallback.call(editor, function (value, meta) {
              self.value(value).fire('change', { meta: meta });
            }, self.value(), meta);
          };
        } else {
          fileBrowserCallback = editorSettings.file_browser_callback;
          if (fileBrowserCallback && (!fileBrowserCallbackTypes || fileBrowserCallbackTypes[fileType])) {
            actionCallback = function () {
              fileBrowserCallback(self.getEl('inp').id, self.value(), fileType, window);
            };
          }
        }
      }
      if (actionCallback) {
        settings.icon = 'browse';
        settings.onaction = actionCallback;
      }
      self._super(settings);
      self.classes.add('filepicker');
      setupAutoCompleteHandler(self, editorSettings, editor.getBody(), fileType);
      setupLinkValidatorHandler(self, editorSettings, fileType);
    }
  });

  var FitLayout = AbsoluteLayout.extend({
    recalc: function (container) {
      var contLayoutRect = container.layoutRect(), paddingBox = container.paddingBox;
      container.items().filter(':visible').each(function (ctrl) {
        ctrl.layoutRect({
          x: paddingBox.left,
          y: paddingBox.top,
          w: contLayoutRect.innerW - paddingBox.right - paddingBox.left,
          h: contLayoutRect.innerH - paddingBox.top - paddingBox.bottom
        });
        if (ctrl.recalc) {
          ctrl.recalc();
        }
      });
    }
  });

  var FlexLayout = AbsoluteLayout.extend({
    recalc: function (container) {
      var i, l, items, contLayoutRect, contPaddingBox, contSettings, align, pack, spacing, totalFlex, availableSpace, direction;
      var ctrl, ctrlLayoutRect, ctrlSettings, flex;
      var maxSizeItems = [];
      var size, maxSize, ratio, rect, pos, maxAlignEndPos;
      var sizeName, minSizeName, posName, maxSizeName, beforeName, innerSizeName, deltaSizeName, contentSizeName;
      var alignAxisName, alignInnerSizeName, alignSizeName, alignMinSizeName, alignBeforeName, alignAfterName;
      var alignDeltaSizeName, alignContentSizeName;
      var max = Math.max, min = Math.min;
      items = container.items().filter(':visible');
      contLayoutRect = container.layoutRect();
      contPaddingBox = container.paddingBox;
      contSettings = container.settings;
      direction = container.isRtl() ? contSettings.direction || 'row-reversed' : contSettings.direction;
      align = contSettings.align;
      pack = container.isRtl() ? contSettings.pack || 'end' : contSettings.pack;
      spacing = contSettings.spacing || 0;
      if (direction === 'row-reversed' || direction === 'column-reverse') {
        items = items.set(items.toArray().reverse());
        direction = direction.split('-')[0];
      }
      if (direction === 'column') {
        posName = 'y';
        sizeName = 'h';
        minSizeName = 'minH';
        maxSizeName = 'maxH';
        innerSizeName = 'innerH';
        beforeName = 'top';
        deltaSizeName = 'deltaH';
        contentSizeName = 'contentH';
        alignBeforeName = 'left';
        alignSizeName = 'w';
        alignAxisName = 'x';
        alignInnerSizeName = 'innerW';
        alignMinSizeName = 'minW';
        alignAfterName = 'right';
        alignDeltaSizeName = 'deltaW';
        alignContentSizeName = 'contentW';
      } else {
        posName = 'x';
        sizeName = 'w';
        minSizeName = 'minW';
        maxSizeName = 'maxW';
        innerSizeName = 'innerW';
        beforeName = 'left';
        deltaSizeName = 'deltaW';
        contentSizeName = 'contentW';
        alignBeforeName = 'top';
        alignSizeName = 'h';
        alignAxisName = 'y';
        alignInnerSizeName = 'innerH';
        alignMinSizeName = 'minH';
        alignAfterName = 'bottom';
        alignDeltaSizeName = 'deltaH';
        alignContentSizeName = 'contentH';
      }
      availableSpace = contLayoutRect[innerSizeName] - contPaddingBox[beforeName] - contPaddingBox[beforeName];
      maxAlignEndPos = totalFlex = 0;
      for (i = 0, l = items.length; i < l; i++) {
        ctrl = items[i];
        ctrlLayoutRect = ctrl.layoutRect();
        ctrlSettings = ctrl.settings;
        flex = ctrlSettings.flex;
        availableSpace -= i < l - 1 ? spacing : 0;
        if (flex > 0) {
          totalFlex += flex;
          if (ctrlLayoutRect[maxSizeName]) {
            maxSizeItems.push(ctrl);
          }
          ctrlLayoutRect.flex = flex;
        }
        availableSpace -= ctrlLayoutRect[minSizeName];
        size = contPaddingBox[alignBeforeName] + ctrlLayoutRect[alignMinSizeName] + contPaddingBox[alignAfterName];
        if (size > maxAlignEndPos) {
          maxAlignEndPos = size;
        }
      }
      rect = {};
      if (availableSpace < 0) {
        rect[minSizeName] = contLayoutRect[minSizeName] - availableSpace + contLayoutRect[deltaSizeName];
      } else {
        rect[minSizeName] = contLayoutRect[innerSizeName] - availableSpace + contLayoutRect[deltaSizeName];
      }
      rect[alignMinSizeName] = maxAlignEndPos + contLayoutRect[alignDeltaSizeName];
      rect[contentSizeName] = contLayoutRect[innerSizeName] - availableSpace;
      rect[alignContentSizeName] = maxAlignEndPos;
      rect.minW = min(rect.minW, contLayoutRect.maxW);
      rect.minH = min(rect.minH, contLayoutRect.maxH);
      rect.minW = max(rect.minW, contLayoutRect.startMinWidth);
      rect.minH = max(rect.minH, contLayoutRect.startMinHeight);
      if (contLayoutRect.autoResize && (rect.minW !== contLayoutRect.minW || rect.minH !== contLayoutRect.minH)) {
        rect.w = rect.minW;
        rect.h = rect.minH;
        container.layoutRect(rect);
        this.recalc(container);
        if (container._lastRect === null) {
          var parentCtrl = container.parent();
          if (parentCtrl) {
            parentCtrl._lastRect = null;
            parentCtrl.recalc();
          }
        }
        return;
      }
      ratio = availableSpace / totalFlex;
      for (i = 0, l = maxSizeItems.length; i < l; i++) {
        ctrl = maxSizeItems[i];
        ctrlLayoutRect = ctrl.layoutRect();
        maxSize = ctrlLayoutRect[maxSizeName];
        size = ctrlLayoutRect[minSizeName] + ctrlLayoutRect.flex * ratio;
        if (size > maxSize) {
          availableSpace -= ctrlLayoutRect[maxSizeName] - ctrlLayoutRect[minSizeName];
          totalFlex -= ctrlLayoutRect.flex;
          ctrlLayoutRect.flex = 0;
          ctrlLayoutRect.maxFlexSize = maxSize;
        } else {
          ctrlLayoutRect.maxFlexSize = 0;
        }
      }
      ratio = availableSpace / totalFlex;
      pos = contPaddingBox[beforeName];
      rect = {};
      if (totalFlex === 0) {
        if (pack === 'end') {
          pos = availableSpace + contPaddingBox[beforeName];
        } else if (pack === 'center') {
          pos = Math.round(contLayoutRect[innerSizeName] / 2 - (contLayoutRect[innerSizeName] - availableSpace) / 2) + contPaddingBox[beforeName];
          if (pos < 0) {
            pos = contPaddingBox[beforeName];
          }
        } else if (pack === 'justify') {
          pos = contPaddingBox[beforeName];
          spacing = Math.floor(availableSpace / (items.length - 1));
        }
      }
      rect[alignAxisName] = contPaddingBox[alignBeforeName];
      for (i = 0, l = items.length; i < l; i++) {
        ctrl = items[i];
        ctrlLayoutRect = ctrl.layoutRect();
        size = ctrlLayoutRect.maxFlexSize || ctrlLayoutRect[minSizeName];
        if (align === 'center') {
          rect[alignAxisName] = Math.round(contLayoutRect[alignInnerSizeName] / 2 - ctrlLayoutRect[alignSizeName] / 2);
        } else if (align === 'stretch') {
          rect[alignSizeName] = max(ctrlLayoutRect[alignMinSizeName] || 0, contLayoutRect[alignInnerSizeName] - contPaddingBox[alignBeforeName] - contPaddingBox[alignAfterName]);
          rect[alignAxisName] = contPaddingBox[alignBeforeName];
        } else if (align === 'end') {
          rect[alignAxisName] = contLayoutRect[alignInnerSizeName] - ctrlLayoutRect[alignSizeName] - contPaddingBox.top;
        }
        if (ctrlLayoutRect.flex > 0) {
          size += ctrlLayoutRect.flex * ratio;
        }
        rect[sizeName] = size;
        rect[posName] = pos;
        ctrl.layoutRect(rect);
        if (ctrl.recalc) {
          ctrl.recalc();
        }
        pos += size + spacing;
      }
    }
  });

  var FlowLayout = Layout.extend({
    Defaults: {
      containerClass: 'flow-layout',
      controlClass: 'flow-layout-item',
      endClass: 'break'
    },
    recalc: function (container) {
      container.items().filter(':visible').each(function (ctrl) {
        if (ctrl.recalc) {
          ctrl.recalc();
        }
      });
    },
    isNative: function () {
      return true;
    }
  });

  function ClosestOrAncestor (is, ancestor, scope, a, isRoot) {
    return is(scope, a) ? Option.some(scope) : isFunction(isRoot) && isRoot(scope) ? Option.none() : ancestor(scope, a, isRoot);
  }

  var first$1 = function (predicate) {
    return descendant($_87yw2aw3jm0og2s8.body(), predicate);
  };
  var ancestor = function (scope, predicate, isRoot) {
    var element = scope.dom();
    var stop = isFunction(isRoot) ? isRoot : constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = Element$$1.fromDom(element);
      if (predicate(el))
        return Option.some(el);
      else if (stop(el))
        break;
    }
    return Option.none();
  };
  var closest = function (scope, predicate, isRoot) {
    var is = function (scope) {
      return predicate(scope);
    };
    return ClosestOrAncestor(is, ancestor, scope, predicate, isRoot);
  };
  var sibling = function (scope, predicate) {
    var element = scope.dom();
    if (!element.parentNode)
      return Option.none();
    return child$1(Element$$1.fromDom(element.parentNode), function (x) {
      return !$_g0j18kwejm0og2td.eq(scope, x) && predicate(x);
    });
  };
  var child$1 = function (scope, predicate) {
    var result = find(scope.dom().childNodes, compose(predicate, Element$$1.fromDom));
    return result.map(Element$$1.fromDom);
  };
  var descendant = function (scope, predicate) {
    var descend = function (node) {
      for (var i = 0; i < node.childNodes.length; i++) {
        if (predicate(Element$$1.fromDom(node.childNodes[i])))
          return Option.some(Element$$1.fromDom(node.childNodes[i]));
        var res = descend(node.childNodes[i]);
        if (res.isSome())
          return res;
      }
      return Option.none();
    };
    return descend(scope.dom());
  };
  var $_dp8noox0jm0og2vi = {
    first: first$1,
    ancestor: ancestor,
    closest: closest,
    sibling: sibling,
    child: child$1,
    descendant: descendant
  };

  var first$2 = function (selector) {
    return $_3z5hfxwujm0og2up.one(selector);
  };
  var ancestor$1 = function (scope, selector, isRoot) {
    return $_dp8noox0jm0og2vi.ancestor(scope, function (e) {
      return $_3z5hfxwujm0og2up.is(e, selector);
    }, isRoot);
  };
  var sibling$1 = function (scope, selector) {
    return $_dp8noox0jm0og2vi.sibling(scope, function (e) {
      return $_3z5hfxwujm0og2up.is(e, selector);
    });
  };
  var child$2 = function (scope, selector) {
    return $_dp8noox0jm0og2vi.child(scope, function (e) {
      return $_3z5hfxwujm0og2up.is(e, selector);
    });
  };
  var descendant$1 = function (scope, selector) {
    return $_3z5hfxwujm0og2up.one(selector, scope);
  };
  var closest$1 = function (scope, selector, isRoot) {
    return ClosestOrAncestor($_3z5hfxwujm0og2up.is, ancestor$1, scope, selector, isRoot);
  };
  var $_9wl0uewzjm0og2vg = {
    first: first$2,
    ancestor: ancestor$1,
    sibling: sibling$1,
    child: child$2,
    descendant: descendant$1,
    closest: closest$1
  };

  var toggleFormat = function (editor, fmt) {
    return function () {
      editor.execCommand('mceToggleFormat', false, fmt);
    };
  };
  var addFormatChangedListener = function (editor, name, changed) {
    var handler = function (state) {
      changed(state, name);
    };
    if (editor.formatter) {
      editor.formatter.formatChanged(name, handler);
    } else {
      editor.on('init', function () {
        editor.formatter.formatChanged(name, handler);
      });
    }
  };
  var postRenderFormatToggle = function (editor, name) {
    return function (e) {
      addFormatChangedListener(editor, name, function (state) {
        e.control.active(state);
      });
    };
  };

  var register = function (editor) {
    var alignFormats = [
      'alignleft',
      'aligncenter',
      'alignright',
      'alignjustify'
    ];
    var defaultAlign = 'alignleft';
    var alignMenuItems = [
      {
        text: 'Left',
        icon: 'alignleft',
        onclick: toggleFormat(editor, 'alignleft')
      },
      {
        text: 'Center',
        icon: 'aligncenter',
        onclick: toggleFormat(editor, 'aligncenter')
      },
      {
        text: 'Right',
        icon: 'alignright',
        onclick: toggleFormat(editor, 'alignright')
      },
      {
        text: 'Justify',
        icon: 'alignjustify',
        onclick: toggleFormat(editor, 'alignjustify')
      }
    ];
    editor.addMenuItem('align', {
      text: 'Align',
      menu: alignMenuItems
    });
    editor.addButton('align', {
      type: 'menubutton',
      icon: defaultAlign,
      menu: alignMenuItems,
      onShowMenu: function (e) {
        var menu = e.control.menu;
        global$2.each(alignFormats, function (formatName, idx) {
          menu.items().eq(idx).each(function (item) {
            return item.active(editor.formatter.match(formatName));
          });
        });
      },
      onPostRender: function (e) {
        var ctrl = e.control;
        global$2.each(alignFormats, function (formatName, idx) {
          addFormatChangedListener(editor, formatName, function (state) {
            ctrl.icon(defaultAlign);
            if (state) {
              ctrl.icon(formatName);
            }
          });
        });
      }
    });
    global$2.each({
      alignleft: [
        'Align left',
        'JustifyLeft'
      ],
      aligncenter: [
        'Align center',
        'JustifyCenter'
      ],
      alignright: [
        'Align right',
        'JustifyRight'
      ],
      alignjustify: [
        'Justify',
        'JustifyFull'
      ],
      alignnone: [
        'No alignment',
        'JustifyNone'
      ]
    }, function (item, name) {
      editor.addButton(name, {
        active: false,
        tooltip: item[0],
        cmd: item[1],
        onPostRender: postRenderFormatToggle(editor, name)
      });
    });
  };
  var $_cz11r7x2jm0og2vx = { register: register };

  var getFirstFont = function (fontFamily) {
    return fontFamily ? fontFamily.split(',')[0] : '';
  };
  var findMatchingValue = function (items, fontFamily) {
    var font = fontFamily ? fontFamily.toLowerCase() : '';
    var value;
    global$2.each(items, function (item) {
      if (item.value.toLowerCase() === font) {
        value = item.value;
      }
    });
    global$2.each(items, function (item) {
      if (!value && getFirstFont(item.value).toLowerCase() === getFirstFont(font).toLowerCase()) {
        value = item.value;
      }
    });
    return value;
  };
  var createFontNameListBoxChangeHandler = function (editor, items) {
    return function () {
      var self = this;
      self.state.set('value', null);
      editor.on('init nodeChange', function (e) {
        var fontFamily = editor.queryCommandValue('FontName');
        var match = findMatchingValue(items, fontFamily);
        self.value(match ? match : null);
        if (!match && fontFamily) {
          self.text(getFirstFont(fontFamily));
        }
      });
    };
  };
  var createFormats = function (formats) {
    formats = formats.replace(/;$/, '').split(';');
    var i = formats.length;
    while (i--) {
      formats[i] = formats[i].split('=');
    }
    return formats;
  };
  var getFontItems = function (editor) {
    var defaultFontsFormats = 'Andale Mono=andale mono,monospace;' + 'Arial=arial,helvetica,sans-serif;' + 'Arial Black=arial black,sans-serif;' + 'Book Antiqua=book antiqua,palatino,serif;' + 'Comic Sans MS=comic sans ms,sans-serif;' + 'Courier New=courier new,courier,monospace;' + 'Georgia=georgia,palatino,serif;' + 'Helvetica=helvetica,arial,sans-serif;' + 'Impact=impact,sans-serif;' + 'Symbol=symbol;' + 'Tahoma=tahoma,arial,helvetica,sans-serif;' + 'Terminal=terminal,monaco,monospace;' + 'Times New Roman=times new roman,times,serif;' + 'Trebuchet MS=trebuchet ms,geneva,sans-serif;' + 'Verdana=verdana,geneva,sans-serif;' + 'Webdings=webdings;' + 'Wingdings=wingdings,zapf dingbats';
    var fonts = createFormats(editor.settings.font_formats || defaultFontsFormats);
    return global$2.map(fonts, function (font) {
      return {
        text: { raw: font[0] },
        value: font[1],
        textStyle: font[1].indexOf('dings') === -1 ? 'font-family:' + font[1] : ''
      };
    });
  };
  var registerButtons = function (editor) {
    editor.addButton('fontselect', function () {
      var items = getFontItems(editor);
      return {
        type: 'listbox',
        text: 'Font Family',
        tooltip: 'Font Family',
        values: items,
        fixedWidth: true,
        onPostRender: createFontNameListBoxChangeHandler(editor, items),
        onselect: function (e) {
          if (e.control.settings.value) {
            editor.execCommand('FontName', false, e.control.settings.value);
          }
        }
      };
    });
  };
  var register$1 = function (editor) {
    registerButtons(editor);
  };
  var $_plw6ux4jm0og2w0 = { register: register$1 };

  var round = function (number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  };
  var toPt = function (fontSize, precision) {
    if (/[0-9.]+px$/.test(fontSize)) {
      return round(parseInt(fontSize, 10) * 72 / 96, precision || 0) + 'pt';
    }
    return fontSize;
  };
  var findMatchingValue$1 = function (items, pt, px) {
    var value;
    global$2.each(items, function (item) {
      if (item.value === px) {
        value = px;
      } else if (item.value === pt) {
        value = pt;
      }
    });
    return value;
  };
  var createFontSizeListBoxChangeHandler = function (editor, items) {
    return function () {
      var self = this;
      editor.on('init nodeChange', function (e) {
        var px, pt, precision, match;
        px = editor.queryCommandValue('FontSize');
        if (px) {
          for (precision = 3; !match && precision >= 0; precision--) {
            pt = toPt(px, precision);
            match = findMatchingValue$1(items, pt, px);
          }
        }
        self.value(match ? match : null);
        if (!match) {
          self.text(pt);
        }
      });
    };
  };
  var getFontSizeItems = function (editor) {
    var defaultFontsizeFormats = '8pt 10pt 12pt 14pt 18pt 24pt 36pt';
    var fontsizeFormats = editor.settings.fontsize_formats || defaultFontsizeFormats;
    return global$2.map(fontsizeFormats.split(' '), function (item) {
      var text = item, value = item;
      var values = item.split('=');
      if (values.length > 1) {
        text = values[0];
        value = values[1];
      }
      return {
        text: text,
        value: value
      };
    });
  };
  var registerButtons$1 = function (editor) {
    editor.addButton('fontsizeselect', function () {
      var items = getFontSizeItems(editor);
      return {
        type: 'listbox',
        text: 'Font Sizes',
        tooltip: 'Font Sizes',
        values: items,
        fixedWidth: true,
        onPostRender: createFontSizeListBoxChangeHandler(editor, items),
        onclick: function (e) {
          if (e.control.settings.value) {
            editor.execCommand('FontSize', false, e.control.settings.value);
          }
        }
      };
    });
  };
  var register$2 = function (editor) {
    registerButtons$1(editor);
  };
  var $_caa7jcx5jm0og2w3 = { register: register$2 };

  var hideMenuObjects = function (editor, menu) {
    var count = menu.length;
    global$2.each(menu, function (item) {
      if (item.menu) {
        item.hidden = hideMenuObjects(editor, item.menu) === 0;
      }
      var formatName = item.format;
      if (formatName) {
        item.hidden = !editor.formatter.canApply(formatName);
      }
      if (item.hidden) {
        count--;
      }
    });
    return count;
  };
  var hideFormatMenuItems = function (editor, menu) {
    var count = menu.items().length;
    menu.items().each(function (item) {
      if (item.menu) {
        item.visible(hideFormatMenuItems(editor, item.menu) > 0);
      }
      if (!item.menu && item.settings.menu) {
        item.visible(hideMenuObjects(editor, item.settings.menu) > 0);
      }
      var formatName = item.settings.format;
      if (formatName) {
        item.visible(editor.formatter.canApply(formatName));
      }
      if (!item.visible()) {
        count--;
      }
    });
    return count;
  };
  var createFormatMenu = function (editor) {
    var count = 0;
    var newFormats = [];
    var defaultStyleFormats = [
      {
        title: 'Headings',
        items: [
          {
            title: 'Heading 1',
            format: 'h1'
          },
          {
            title: 'Heading 2',
            format: 'h2'
          },
          {
            title: 'Heading 3',
            format: 'h3'
          },
          {
            title: 'Heading 4',
            format: 'h4'
          },
          {
            title: 'Heading 5',
            format: 'h5'
          },
          {
            title: 'Heading 6',
            format: 'h6'
          }
        ]
      },
      {
        title: 'Inline',
        items: [
          {
            title: 'Bold',
            icon: 'bold',
            format: 'bold'
          },
          {
            title: 'Italic',
            icon: 'italic',
            format: 'italic'
          },
          {
            title: 'Underline',
            icon: 'underline',
            format: 'underline'
          },
          {
            title: 'Strikethrough',
            icon: 'strikethrough',
            format: 'strikethrough'
          },
          {
            title: 'Superscript',
            icon: 'superscript',
            format: 'superscript'
          },
          {
            title: 'Subscript',
            icon: 'subscript',
            format: 'subscript'
          },
          {
            title: 'Code',
            icon: 'code',
            format: 'code'
          }
        ]
      },
      {
        title: 'Blocks',
        items: [
          {
            title: 'Paragraph',
            format: 'p'
          },
          {
            title: 'Blockquote',
            format: 'blockquote'
          },
          {
            title: 'Div',
            format: 'div'
          },
          {
            title: 'Pre',
            format: 'pre'
          }
        ]
      },
      {
        title: 'Alignment',
        items: [
          {
            title: 'Left',
            icon: 'alignleft',
            format: 'alignleft'
          },
          {
            title: 'Center',
            icon: 'aligncenter',
            format: 'aligncenter'
          },
          {
            title: 'Right',
            icon: 'alignright',
            format: 'alignright'
          },
          {
            title: 'Justify',
            icon: 'alignjustify',
            format: 'alignjustify'
          }
        ]
      }
    ];
    var createMenu = function (formats) {
      var menu = [];
      if (!formats) {
        return;
      }
      global$2.each(formats, function (format) {
        var menuItem = {
          text: format.title,
          icon: format.icon
        };
        if (format.items) {
          menuItem.menu = createMenu(format.items);
        } else {
          var formatName = format.format || 'custom' + count++;
          if (!format.format) {
            format.name = formatName;
            newFormats.push(format);
          }
          menuItem.format = formatName;
          menuItem.cmd = format.cmd;
        }
        menu.push(menuItem);
      });
      return menu;
    };
    var createStylesMenu = function () {
      var menu;
      if (editor.settings.style_formats_merge) {
        if (editor.settings.style_formats) {
          menu = createMenu(defaultStyleFormats.concat(editor.settings.style_formats));
        } else {
          menu = createMenu(defaultStyleFormats);
        }
      } else {
        menu = createMenu(editor.settings.style_formats || defaultStyleFormats);
      }
      return menu;
    };
    editor.on('init', function () {
      global$2.each(newFormats, function (format) {
        editor.formatter.register(format.name, format);
      });
    });
    return {
      type: 'menu',
      items: createStylesMenu(),
      onPostRender: function (e) {
        editor.fire('renderFormatsMenu', { control: e.control });
      },
      itemDefaults: {
        preview: true,
        textStyle: function () {
          if (this.settings.format) {
            return editor.formatter.getCssText(this.settings.format);
          }
        },
        onPostRender: function () {
          var self = this;
          self.parent().on('show', function () {
            var formatName, command;
            formatName = self.settings.format;
            if (formatName) {
              self.disabled(!editor.formatter.canApply(formatName));
              self.active(editor.formatter.match(formatName));
            }
            command = self.settings.cmd;
            if (command) {
              self.active(editor.queryCommandState(command));
            }
          });
        },
        onclick: function () {
          if (this.settings.format) {
            toggleFormat(editor, this.settings.format)();
          }
          if (this.settings.cmd) {
            editor.execCommand(this.settings.cmd);
          }
        }
      }
    };
  };
  var registerMenuItems = function (editor, formatMenu) {
    editor.addMenuItem('formats', {
      text: 'Formats',
      menu: formatMenu
    });
  };
  var registerButtons$2 = function (editor, formatMenu) {
    editor.addButton('styleselect', {
      type: 'menubutton',
      text: 'Formats',
      menu: formatMenu,
      onShowMenu: function () {
        if (editor.settings.style_formats_autohide) {
          hideFormatMenuItems(editor, this.menu);
        }
      }
    });
  };
  var register$3 = function (editor) {
    var formatMenu = createFormatMenu(editor);
    registerMenuItems(editor, formatMenu);
    registerButtons$2(editor, formatMenu);
  };
  var $_eobpydx6jm0og2w6 = { register: register$3 };

  var defaultBlocks = 'Paragraph=p;' + 'Heading 1=h1;' + 'Heading 2=h2;' + 'Heading 3=h3;' + 'Heading 4=h4;' + 'Heading 5=h5;' + 'Heading 6=h6;' + 'Preformatted=pre';
  var createFormats$1 = function (formats) {
    formats = formats.replace(/;$/, '').split(';');
    var i = formats.length;
    while (i--) {
      formats[i] = formats[i].split('=');
    }
    return formats;
  };
  var createListBoxChangeHandler = function (editor, items, formatName) {
    return function () {
      var self = this;
      editor.on('nodeChange', function (e) {
        var formatter = editor.formatter;
        var value = null;
        global$2.each(e.parents, function (node) {
          global$2.each(items, function (item) {
            if (formatName) {
              if (formatter.matchNode(node, formatName, { value: item.value })) {
                value = item.value;
              }
            } else {
              if (formatter.matchNode(node, item.value)) {
                value = item.value;
              }
            }
            if (value) {
              return false;
            }
          });
          if (value) {
            return false;
          }
        });
        self.value(value);
      });
    };
  };
  var lazyFormatSelectBoxItems = function (editor, blocks) {
    return function () {
      var items = [];
      global$2.each(blocks, function (block) {
        items.push({
          text: block[0],
          value: block[1],
          textStyle: function () {
            return editor.formatter.getCssText(block[1]);
          }
        });
      });
      return {
        type: 'listbox',
        text: blocks[0][0],
        values: items,
        fixedWidth: true,
        onselect: function (e) {
          if (e.control) {
            var fmt = e.control.value();
            toggleFormat(editor, fmt)();
          }
        },
        onPostRender: createListBoxChangeHandler(editor, items)
      };
    };
  };
  var buildMenuItems = function (editor, blocks) {
    return global$2.map(blocks, function (block) {
      return {
        text: block[0],
        onclick: toggleFormat(editor, block[1]),
        textStyle: function () {
          return editor.formatter.getCssText(block[1]);
        }
      };
    });
  };
  var register$4 = function (editor) {
    var blocks = createFormats$1(editor.settings.block_formats || defaultBlocks);
    editor.addMenuItem('blockformats', {
      text: 'Blocks',
      menu: buildMenuItems(editor, blocks)
    });
    editor.addButton('formatselect', lazyFormatSelectBoxItems(editor, blocks));
  };
  var $_9c3k3xx7jm0og2wa = { register: register$4 };

  var createCustomMenuItems = function (editor, names) {
    var items, nameList;
    if (typeof names === 'string') {
      nameList = names.split(' ');
    } else if (global$2.isArray(names)) {
      return flatten(global$2.map(names, function (names) {
        return createCustomMenuItems(editor, names);
      }));
    }
    items = global$2.grep(nameList, function (name) {
      return name === '|' || name in editor.menuItems;
    });
    return global$2.map(items, function (name) {
      return name === '|' ? { text: '-' } : editor.menuItems[name];
    });
  };
  var isSeparator$1 = function (menuItem) {
    return menuItem && menuItem.text === '-';
  };
  var trimMenuItems = function (menuItems) {
    var menuItems2 = filter(menuItems, function (menuItem, i, menuItems) {
      return !isSeparator$1(menuItem) || !isSeparator$1(menuItems[i - 1]);
    });
    return filter(menuItems2, function (menuItem, i, menuItems) {
      return !isSeparator$1(menuItem) || i > 0 && i < menuItems.length - 1;
    });
  };
  var createContextMenuItems = function (editor, context) {
    var outputMenuItems = [{ text: '-' }];
    var menuItems = global$2.grep(editor.menuItems, function (menuItem) {
      return menuItem.context === context;
    });
    global$2.each(menuItems, function (menuItem) {
      if (menuItem.separator === 'before') {
        outputMenuItems.push({ text: '|' });
      }
      if (menuItem.prependToContext) {
        outputMenuItems.unshift(menuItem);
      } else {
        outputMenuItems.push(menuItem);
      }
      if (menuItem.separator === 'after') {
        outputMenuItems.push({ text: '|' });
      }
    });
    return outputMenuItems;
  };
  var createInsertMenu = function (editor) {
    var insertButtonItems = editor.settings.insert_button_items;
    if (insertButtonItems) {
      return trimMenuItems(createCustomMenuItems(editor, insertButtonItems));
    } else {
      return trimMenuItems(createContextMenuItems(editor, 'insert'));
    }
  };
  var registerButtons$3 = function (editor) {
    editor.addButton('insert', {
      type: 'menubutton',
      icon: 'insert',
      menu: [],
      oncreatemenu: function () {
        this.menu.add(createInsertMenu(editor));
        this.menu.renderNew();
      }
    });
  };
  var register$5 = function (editor) {
    registerButtons$3(editor);
  };
  var $_1pk2lix8jm0og2wd = { register: register$5 };

  var registerFormatButtons = function (editor) {
    global$2.each({
      bold: 'Bold',
      italic: 'Italic',
      underline: 'Underline',
      strikethrough: 'Strikethrough',
      subscript: 'Subscript',
      superscript: 'Superscript'
    }, function (text, name) {
      editor.addButton(name, {
        active: false,
        tooltip: text,
        onPostRender: postRenderFormatToggle(editor, name),
        onclick: toggleFormat(editor, name)
      });
    });
  };
  var registerCommandButtons = function (editor) {
    global$2.each({
      outdent: [
        'Decrease indent',
        'Outdent'
      ],
      indent: [
        'Increase indent',
        'Indent'
      ],
      cut: [
        'Cut',
        'Cut'
      ],
      copy: [
        'Copy',
        'Copy'
      ],
      paste: [
        'Paste',
        'Paste'
      ],
      help: [
        'Help',
        'mceHelp'
      ],
      selectall: [
        'Select all',
        'SelectAll'
      ],
      visualaid: [
        'Visual aids',
        'mceToggleVisualAid'
      ],
      newdocument: [
        'New document',
        'mceNewDocument'
      ],
      removeformat: [
        'Clear formatting',
        'RemoveFormat'
      ],
      remove: [
        'Remove',
        'Delete'
      ]
    }, function (item, name) {
      editor.addButton(name, {
        tooltip: item[0],
        cmd: item[1]
      });
    });
  };
  var registerCommandToggleButtons = function (editor) {
    global$2.each({
      blockquote: [
        'Blockquote',
        'mceBlockQuote'
      ],
      subscript: [
        'Subscript',
        'Subscript'
      ],
      superscript: [
        'Superscript',
        'Superscript'
      ]
    }, function (item, name) {
      editor.addButton(name, {
        active: false,
        tooltip: item[0],
        cmd: item[1],
        onPostRender: postRenderFormatToggle(editor, name)
      });
    });
  };
  var registerButtons$4 = function (editor) {
    registerFormatButtons(editor);
    registerCommandButtons(editor);
    registerCommandToggleButtons(editor);
  };
  var registerMenuItems$1 = function (editor) {
    global$2.each({
      bold: [
        'Bold',
        'Bold',
        'Meta+B'
      ],
      italic: [
        'Italic',
        'Italic',
        'Meta+I'
      ],
      underline: [
        'Underline',
        'Underline',
        'Meta+U'
      ],
      strikethrough: [
        'Strikethrough',
        'Strikethrough'
      ],
      subscript: [
        'Subscript',
        'Subscript'
      ],
      superscript: [
        'Superscript',
        'Superscript'
      ],
      removeformat: [
        'Clear formatting',
        'RemoveFormat'
      ],
      newdocument: [
        'New document',
        'mceNewDocument'
      ],
      cut: [
        'Cut',
        'Cut',
        'Meta+X'
      ],
      copy: [
        'Copy',
        'Copy',
        'Meta+C'
      ],
      paste: [
        'Paste',
        'Paste',
        'Meta+V'
      ],
      selectall: [
        'Select all',
        'SelectAll',
        'Meta+A'
      ]
    }, function (item, name) {
      editor.addMenuItem(name, {
        text: item[0],
        icon: name,
        shortcut: item[2],
        cmd: item[1]
      });
    });
    editor.addMenuItem('codeformat', {
      text: 'Code',
      icon: 'code',
      onclick: toggleFormat(editor, 'code')
    });
  };
  var register$6 = function (editor) {
    registerButtons$4(editor);
    registerMenuItems$1(editor);
  };
  var $_vkymwx9jm0og2wh = { register: register$6 };

  var toggleUndoRedoState = function (editor, type) {
    return function () {
      var self = this;
      var checkState = function () {
        var typeFn = type === 'redo' ? 'hasRedo' : 'hasUndo';
        return editor.undoManager ? editor.undoManager[typeFn]() : false;
      };
      self.disabled(!checkState());
      editor.on('Undo Redo AddUndo TypingUndo ClearUndos SwitchMode', function () {
        self.disabled(editor.readonly || !checkState());
      });
    };
  };
  var registerMenuItems$2 = function (editor) {
    editor.addMenuItem('undo', {
      text: 'Undo',
      icon: 'undo',
      shortcut: 'Meta+Z',
      onPostRender: toggleUndoRedoState(editor, 'undo'),
      cmd: 'undo'
    });
    editor.addMenuItem('redo', {
      text: 'Redo',
      icon: 'redo',
      shortcut: 'Meta+Y',
      onPostRender: toggleUndoRedoState(editor, 'redo'),
      cmd: 'redo'
    });
  };
  var registerButtons$5 = function (editor) {
    editor.addButton('undo', {
      tooltip: 'Undo',
      onPostRender: toggleUndoRedoState(editor, 'undo'),
      cmd: 'undo'
    });
    editor.addButton('redo', {
      tooltip: 'Redo',
      onPostRender: toggleUndoRedoState(editor, 'redo'),
      cmd: 'redo'
    });
  };
  var register$7 = function (editor) {
    registerMenuItems$2(editor);
    registerButtons$5(editor);
  };
  var $_84fyqpxajm0og2wj = { register: register$7 };

  var toggleVisualAidState = function (editor) {
    return function () {
      var self = this;
      editor.on('VisualAid', function (e) {
        self.active(e.hasVisual);
      });
      self.active(editor.hasVisual);
    };
  };
  var registerMenuItems$3 = function (editor) {
    editor.addMenuItem('visualaid', {
      text: 'Visual aids',
      selectable: true,
      onPostRender: toggleVisualAidState(editor),
      cmd: 'mceToggleVisualAid'
    });
  };
  var register$8 = function (editor) {
    registerMenuItems$3(editor);
  };
  var $_er469cxbjm0og2wl = { register: register$8 };

  var setupEnvironment = function () {
    Widget.tooltips = !global$8.iOS;
    Control$1.translate = function (text) {
      return global$1.translate(text);
    };
  };
  var setupUiContainer = function (editor) {
    if (editor.settings.ui_container) {
      global$8.container = $_9wl0uewzjm0og2vg.descendant(Element$$1.fromDom(document.body), editor.settings.ui_container).fold(constant(null), function (elm) {
        return elm.dom();
      });
    }
  };
  var setupRtlMode = function (editor) {
    if (editor.rtl) {
      Control$1.rtl = true;
    }
  };
  var setupHideFloatPanels = function (editor) {
    editor.on('mousedown', function () {
      FloatPanel.hideAll();
    });
  };
  var setup$1 = function (editor) {
    setupRtlMode(editor);
    setupHideFloatPanels(editor);
    setupUiContainer(editor);
    setupEnvironment();
    $_9c3k3xx7jm0og2wa.register(editor);
    $_cz11r7x2jm0og2vx.register(editor);
    $_vkymwx9jm0og2wh.register(editor);
    $_84fyqpxajm0og2wj.register(editor);
    $_caa7jcx5jm0og2w3.register(editor);
    $_plw6ux4jm0og2w0.register(editor);
    $_eobpydx6jm0og2w6.register(editor);
    $_er469cxbjm0og2wl.register(editor);
    $_1pk2lix8jm0og2wd.register(editor);
  };
  var $_6j9wxhwyjm0og2v4 = { setup: setup$1 };

  var GridLayout = AbsoluteLayout.extend({
    recalc: function (container) {
      var settings, rows, cols, items, contLayoutRect, width, height, rect, ctrlLayoutRect, ctrl, x, y, posX, posY, ctrlSettings, contPaddingBox, align, spacingH, spacingV, alignH, alignV, maxX, maxY;
      var colWidths = [];
      var rowHeights = [];
      var ctrlMinWidth, ctrlMinHeight, availableWidth, availableHeight, reverseRows, idx;
      settings = container.settings;
      items = container.items().filter(':visible');
      contLayoutRect = container.layoutRect();
      cols = settings.columns || Math.ceil(Math.sqrt(items.length));
      rows = Math.ceil(items.length / cols);
      spacingH = settings.spacingH || settings.spacing || 0;
      spacingV = settings.spacingV || settings.spacing || 0;
      alignH = settings.alignH || settings.align;
      alignV = settings.alignV || settings.align;
      contPaddingBox = container.paddingBox;
      reverseRows = 'reverseRows' in settings ? settings.reverseRows : container.isRtl();
      if (alignH && typeof alignH === 'string') {
        alignH = [alignH];
      }
      if (alignV && typeof alignV === 'string') {
        alignV = [alignV];
      }
      for (x = 0; x < cols; x++) {
        colWidths.push(0);
      }
      for (y = 0; y < rows; y++) {
        rowHeights.push(0);
      }
      for (y = 0; y < rows; y++) {
        for (x = 0; x < cols; x++) {
          ctrl = items[y * cols + x];
          if (!ctrl) {
            break;
          }
          ctrlLayoutRect = ctrl.layoutRect();
          ctrlMinWidth = ctrlLayoutRect.minW;
          ctrlMinHeight = ctrlLayoutRect.minH;
          colWidths[x] = ctrlMinWidth > colWidths[x] ? ctrlMinWidth : colWidths[x];
          rowHeights[y] = ctrlMinHeight > rowHeights[y] ? ctrlMinHeight : rowHeights[y];
        }
      }
      availableWidth = contLayoutRect.innerW - contPaddingBox.left - contPaddingBox.right;
      for (maxX = 0, x = 0; x < cols; x++) {
        maxX += colWidths[x] + (x > 0 ? spacingH : 0);
        availableWidth -= (x > 0 ? spacingH : 0) + colWidths[x];
      }
      availableHeight = contLayoutRect.innerH - contPaddingBox.top - contPaddingBox.bottom;
      for (maxY = 0, y = 0; y < rows; y++) {
        maxY += rowHeights[y] + (y > 0 ? spacingV : 0);
        availableHeight -= (y > 0 ? spacingV : 0) + rowHeights[y];
      }
      maxX += contPaddingBox.left + contPaddingBox.right;
      maxY += contPaddingBox.top + contPaddingBox.bottom;
      rect = {};
      rect.minW = maxX + (contLayoutRect.w - contLayoutRect.innerW);
      rect.minH = maxY + (contLayoutRect.h - contLayoutRect.innerH);
      rect.contentW = rect.minW - contLayoutRect.deltaW;
      rect.contentH = rect.minH - contLayoutRect.deltaH;
      rect.minW = Math.min(rect.minW, contLayoutRect.maxW);
      rect.minH = Math.min(rect.minH, contLayoutRect.maxH);
      rect.minW = Math.max(rect.minW, contLayoutRect.startMinWidth);
      rect.minH = Math.max(rect.minH, contLayoutRect.startMinHeight);
      if (contLayoutRect.autoResize && (rect.minW !== contLayoutRect.minW || rect.minH !== contLayoutRect.minH)) {
        rect.w = rect.minW;
        rect.h = rect.minH;
        container.layoutRect(rect);
        this.recalc(container);
        if (container._lastRect === null) {
          var parentCtrl = container.parent();
          if (parentCtrl) {
            parentCtrl._lastRect = null;
            parentCtrl.recalc();
          }
        }
        return;
      }
      if (contLayoutRect.autoResize) {
        rect = container.layoutRect(rect);
        rect.contentW = rect.minW - contLayoutRect.deltaW;
        rect.contentH = rect.minH - contLayoutRect.deltaH;
      }
      var flexV;
      if (settings.packV === 'start') {
        flexV = 0;
      } else {
        flexV = availableHeight > 0 ? Math.floor(availableHeight / rows) : 0;
      }
      var totalFlex = 0;
      var flexWidths = settings.flexWidths;
      if (flexWidths) {
        for (x = 0; x < flexWidths.length; x++) {
          totalFlex += flexWidths[x];
        }
      } else {
        totalFlex = cols;
      }
      var ratio = availableWidth / totalFlex;
      for (x = 0; x < cols; x++) {
        colWidths[x] += flexWidths ? flexWidths[x] * ratio : ratio;
      }
      posY = contPaddingBox.top;
      for (y = 0; y < rows; y++) {
        posX = contPaddingBox.left;
        height = rowHeights[y] + flexV;
        for (x = 0; x < cols; x++) {
          if (reverseRows) {
            idx = y * cols + cols - 1 - x;
          } else {
            idx = y * cols + x;
          }
          ctrl = items[idx];
          if (!ctrl) {
            break;
          }
          ctrlSettings = ctrl.settings;
          ctrlLayoutRect = ctrl.layoutRect();
          width = Math.max(colWidths[x], ctrlLayoutRect.startMinWidth);
          ctrlLayoutRect.x = posX;
          ctrlLayoutRect.y = posY;
          align = ctrlSettings.alignH || (alignH ? alignH[x] || alignH[0] : null);
          if (align === 'center') {
            ctrlLayoutRect.x = posX + width / 2 - ctrlLayoutRect.w / 2;
          } else if (align === 'right') {
            ctrlLayoutRect.x = posX + width - ctrlLayoutRect.w;
          } else if (align === 'stretch') {
            ctrlLayoutRect.w = width;
          }
          align = ctrlSettings.alignV || (alignV ? alignV[x] || alignV[0] : null);
          if (align === 'center') {
            ctrlLayoutRect.y = posY + height / 2 - ctrlLayoutRect.h / 2;
          } else if (align === 'bottom') {
            ctrlLayoutRect.y = posY + height - ctrlLayoutRect.h;
          } else if (align === 'stretch') {
            ctrlLayoutRect.h = height;
          }
          ctrl.layoutRect(ctrlLayoutRect);
          posX += width + spacingH;
          if (ctrl.recalc) {
            ctrl.recalc();
          }
        }
        posY += height + spacingV;
      }
    }
  });

  var Iframe$1 = Widget.extend({
    renderHtml: function () {
      var self = this;
      self.classes.add('iframe');
      self.canFocus = false;
      return '<iframe id="' + self._id + '" class="' + self.classes + '" tabindex="-1" src="' + (self.settings.url || 'javascript:\'\'') + '" frameborder="0"></iframe>';
    },
    src: function (src) {
      this.getEl().src = src;
    },
    html: function (html, callback) {
      var self = this, body = this.getEl().contentWindow.document.body;
      if (!body) {
        global$7.setTimeout(function () {
          self.html(html);
        });
      } else {
        body.innerHTML = html;
        if (callback) {
          callback();
        }
      }
      return this;
    }
  });

  var InfoBox = Widget.extend({
    init: function (settings) {
      var self = this;
      self._super(settings);
      self.classes.add('widget').add('infobox');
      self.canFocus = false;
    },
    severity: function (level) {
      this.classes.remove('error');
      this.classes.remove('warning');
      this.classes.remove('success');
      this.classes.add(level);
    },
    help: function (state) {
      this.state.set('help', state);
    },
    renderHtml: function () {
      var self = this, prefix = self.classPrefix;
      return '<div id="' + self._id + '" class="' + self.classes + '">' + '<div id="' + self._id + '-body">' + self.encode(self.state.get('text')) + '<button role="button" tabindex="-1">' + '<i class="' + prefix + 'ico ' + prefix + 'i-help"></i>' + '</button>' + '</div>' + '</div>';
    },
    bindStates: function () {
      var self = this;
      self.state.on('change:text', function (e) {
        self.getEl('body').firstChild.data = self.encode(e.value);
        if (self.state.get('rendered')) {
          self.updateLayoutRect();
        }
      });
      self.state.on('change:help', function (e) {
        self.classes.toggle('has-help', e.value);
        if (self.state.get('rendered')) {
          self.updateLayoutRect();
        }
      });
      return self._super();
    }
  });

  var Label = Widget.extend({
    init: function (settings) {
      var self = this;
      self._super(settings);
      self.classes.add('widget').add('label');
      self.canFocus = false;
      if (settings.multiline) {
        self.classes.add('autoscroll');
      }
      if (settings.strong) {
        self.classes.add('strong');
      }
    },
    initLayoutRect: function () {
      var self = this, layoutRect = self._super();
      if (self.settings.multiline) {
        var size = funcs.getSize(self.getEl());
        if (size.width > layoutRect.maxW) {
          layoutRect.minW = layoutRect.maxW;
          self.classes.add('multiline');
        }
        self.getEl().style.width = layoutRect.minW + 'px';
        layoutRect.startMinH = layoutRect.h = layoutRect.minH = Math.min(layoutRect.maxH, funcs.getSize(self.getEl()).height);
      }
      return layoutRect;
    },
    repaint: function () {
      var self = this;
      if (!self.settings.multiline) {
        self.getEl().style.lineHeight = self.layoutRect().h + 'px';
      }
      return self._super();
    },
    severity: function (level) {
      this.classes.remove('error');
      this.classes.remove('warning');
      this.classes.remove('success');
      this.classes.add(level);
    },
    renderHtml: function () {
      var self = this;
      var targetCtrl, forName, forId = self.settings.forId;
      var text = self.settings.html ? self.settings.html : self.encode(self.state.get('text'));
      if (!forId && (forName = self.settings.forName)) {
        targetCtrl = self.getRoot().find('#' + forName)[0];
        if (targetCtrl) {
          forId = targetCtrl._id;
        }
      }
      if (forId) {
        return '<label id="' + self._id + '" class="' + self.classes + '"' + (forId ? ' for="' + forId + '"' : '') + '>' + text + '</label>';
      }
      return '<span id="' + self._id + '" class="' + self.classes + '">' + text + '</span>';
    },
    bindStates: function () {
      var self = this;
      self.state.on('change:text', function (e) {
        self.innerHtml(self.encode(e.value));
        if (self.state.get('rendered')) {
          self.updateLayoutRect();
        }
      });
      return self._super();
    }
  });

  var Toolbar$1 = Container.extend({
    Defaults: {
      role: 'toolbar',
      layout: 'flow'
    },
    init: function (settings) {
      var self = this;
      self._super(settings);
      self.classes.add('toolbar');
    },
    postRender: function () {
      var self = this;
      self.items().each(function (ctrl) {
        ctrl.classes.add('toolbar-item');
      });
      return self._super();
    }
  });

  var MenuBar = Toolbar$1.extend({
    Defaults: {
      role: 'menubar',
      containerCls: 'menubar',
      ariaRoot: true,
      defaults: { type: 'menubutton' }
    }
  });

  function isChildOf$1(node, parent$$1) {
    while (node) {
      if (parent$$1 === node) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }
  var MenuButton = Button.extend({
    init: function (settings) {
      var self$$1 = this;
      self$$1._renderOpen = true;
      self$$1._super(settings);
      settings = self$$1.settings;
      self$$1.classes.add('menubtn');
      if (settings.fixedWidth) {
        self$$1.classes.add('fixed-width');
      }
      self$$1.aria('haspopup', true);
      self$$1.state.set('menu', settings.menu || self$$1.render());
    },
    showMenu: function (toggle) {
      var self$$1 = this;
      var menu;
      if (self$$1.menu && self$$1.menu.visible() && toggle !== false) {
        return self$$1.hideMenu();
      }
      if (!self$$1.menu) {
        menu = self$$1.state.get('menu') || [];
        self$$1.classes.add('opened');
        if (menu.length) {
          menu = {
            type: 'menu',
            animate: true,
            items: menu
          };
        } else {
          menu.type = menu.type || 'menu';
          menu.animate = true;
        }
        if (!menu.renderTo) {
          self$$1.menu = global$4.create(menu).parent(self$$1).renderTo();
        } else {
          self$$1.menu = menu.parent(self$$1).show().renderTo();
        }
        self$$1.fire('createmenu');
        self$$1.menu.reflow();
        self$$1.menu.on('cancel', function (e) {
          if (e.control.parent() === self$$1.menu) {
            e.stopPropagation();
            self$$1.focus();
            self$$1.hideMenu();
          }
        });
        self$$1.menu.on('select', function () {
          self$$1.focus();
        });
        self$$1.menu.on('show hide', function (e) {
          if (e.control === self$$1.menu) {
            self$$1.activeMenu(e.type === 'show');
            self$$1.classes.toggle('opened', e.type === 'show');
          }
          self$$1.aria('expanded', e.type === 'show');
        }).fire('show');
      }
      self$$1.menu.show();
      self$$1.menu.layoutRect({ w: self$$1.layoutRect().w });
      self$$1.menu.repaint();
      self$$1.menu.moveRel(self$$1.getEl(), self$$1.isRtl() ? [
        'br-tr',
        'tr-br'
      ] : [
        'bl-tl',
        'tl-bl'
      ]);
      self$$1.fire('showmenu');
    },
    hideMenu: function () {
      var self$$1 = this;
      if (self$$1.menu) {
        self$$1.menu.items().each(function (item) {
          if (item.hideMenu) {
            item.hideMenu();
          }
        });
        self$$1.menu.hide();
      }
    },
    activeMenu: function (state) {
      this.classes.toggle('active', state);
    },
    renderHtml: function () {
      var self$$1 = this, id = self$$1._id, prefix = self$$1.classPrefix;
      var icon = self$$1.settings.icon, image;
      var text = self$$1.state.get('text');
      var textHtml = '';
      image = self$$1.settings.image;
      if (image) {
        icon = 'none';
        if (typeof image !== 'string') {
          image = window.getSelection ? image[0] : image[1];
        }
        image = ' style="background-image: url(\'' + image + '\')"';
      } else {
        image = '';
      }
      if (text) {
        self$$1.classes.add('btn-has-text');
        textHtml = '<span class="' + prefix + 'txt">' + self$$1.encode(text) + '</span>';
      }
      icon = self$$1.settings.icon ? prefix + 'ico ' + prefix + 'i-' + icon : '';
      self$$1.aria('role', self$$1.parent() instanceof MenuBar ? 'menuitem' : 'button');
      return '<div id="' + id + '" class="' + self$$1.classes + '" tabindex="-1" aria-labelledby="' + id + '">' + '<button id="' + id + '-open" role="presentation" type="button" tabindex="-1">' + (icon ? '<i class="' + icon + '"' + image + '></i>' : '') + textHtml + ' <i class="' + prefix + 'caret"></i>' + '</button>' + '</div>';
    },
    postRender: function () {
      var self$$1 = this;
      self$$1.on('click', function (e) {
        if (e.control === self$$1 && isChildOf$1(e.target, self$$1.getEl())) {
          self$$1.focus();
          self$$1.showMenu(!e.aria);
          if (e.aria) {
            self$$1.menu.items().filter(':visible')[0].focus();
          }
        }
      });
      self$$1.on('mouseenter', function (e) {
        var overCtrl = e.control;
        var parent$$1 = self$$1.parent();
        var hasVisibleSiblingMenu;
        if (overCtrl && parent$$1 && overCtrl instanceof MenuButton && overCtrl.parent() === parent$$1) {
          parent$$1.items().filter('MenuButton').each(function (ctrl) {
            if (ctrl.hideMenu && ctrl !== overCtrl) {
              if (ctrl.menu && ctrl.menu.visible()) {
                hasVisibleSiblingMenu = true;
              }
              ctrl.hideMenu();
            }
          });
          if (hasVisibleSiblingMenu) {
            overCtrl.focus();
            overCtrl.showMenu();
          }
        }
      });
      return self$$1._super();
    },
    bindStates: function () {
      var self$$1 = this;
      self$$1.state.on('change:menu', function () {
        if (self$$1.menu) {
          self$$1.menu.remove();
        }
        self$$1.menu = null;
      });
      return self$$1._super();
    },
    remove: function () {
      this._super();
      if (this.menu) {
        this.menu.remove();
      }
    }
  });

  var Menu = FloatPanel.extend({
    Defaults: {
      defaultType: 'menuitem',
      border: 1,
      layout: 'stack',
      role: 'application',
      bodyRole: 'menu',
      ariaRoot: true
    },
    init: function (settings) {
      var self = this;
      settings.autohide = true;
      settings.constrainToViewport = true;
      if (typeof settings.items === 'function') {
        settings.itemsFactory = settings.items;
        settings.items = [];
      }
      if (settings.itemDefaults) {
        var items = settings.items;
        var i = items.length;
        while (i--) {
          items[i] = global$2.extend({}, settings.itemDefaults, items[i]);
        }
      }
      self._super(settings);
      self.classes.add('menu');
      if (settings.animate && global$8.ie !== 11) {
        self.classes.add('animate');
      }
    },
    repaint: function () {
      this.classes.toggle('menu-align', true);
      this._super();
      this.getEl().style.height = '';
      this.getEl('body').style.height = '';
      return this;
    },
    cancel: function () {
      var self = this;
      self.hideAll();
      self.fire('select');
    },
    load: function () {
      var self = this;
      var time, factory;
      function hideThrobber() {
        if (self.throbber) {
          self.throbber.hide();
          self.throbber = null;
        }
      }
      factory = self.settings.itemsFactory;
      if (!factory) {
        return;
      }
      if (!self.throbber) {
        self.throbber = new Throbber(self.getEl('body'), true);
        if (self.items().length === 0) {
          self.throbber.show();
          self.fire('loading');
        } else {
          self.throbber.show(100, function () {
            self.items().remove();
            self.fire('loading');
          });
        }
        self.on('hide close', hideThrobber);
      }
      self.requestTime = time = new Date().getTime();
      self.settings.itemsFactory(function (items) {
        if (items.length === 0) {
          self.hide();
          return;
        }
        if (self.requestTime !== time) {
          return;
        }
        self.getEl().style.width = '';
        self.getEl('body').style.width = '';
        hideThrobber();
        self.items().remove();
        self.getEl('body').innerHTML = '';
        self.add(items);
        self.renderNew();
        self.fire('loaded');
      });
    },
    hideAll: function () {
      var self = this;
      this.find('menuitem').exec('hideMenu');
      return self._super();
    },
    preRender: function () {
      var self = this;
      self.items().each(function (ctrl) {
        var settings = ctrl.settings;
        if (settings.icon || settings.image || settings.selectable) {
          self._hasIcons = true;
          return false;
        }
      });
      if (self.settings.itemsFactory) {
        self.on('postrender', function () {
          if (self.settings.itemsFactory) {
            self.load();
          }
        });
      }
      self.on('show hide', function (e) {
        if (e.control === self) {
          if (e.type === 'show') {
            global$7.setTimeout(function () {
              self.classes.add('in');
            }, 0);
          } else {
            self.classes.remove('in');
          }
        }
      });
      return self._super();
    }
  });

  var ListBox = MenuButton.extend({
    init: function (settings) {
      var self = this;
      var values, selected, selectedText, lastItemCtrl;
      function setSelected(menuValues) {
        for (var i = 0; i < menuValues.length; i++) {
          selected = menuValues[i].selected || settings.value === menuValues[i].value;
          if (selected) {
            selectedText = selectedText || menuValues[i].text;
            self.state.set('value', menuValues[i].value);
            return true;
          }
          if (menuValues[i].menu) {
            if (setSelected(menuValues[i].menu)) {
              return true;
            }
          }
        }
      }
      self._super(settings);
      settings = self.settings;
      self._values = values = settings.values;
      if (values) {
        if (typeof settings.value !== 'undefined') {
          setSelected(values);
        }
        if (!selected && values.length > 0) {
          selectedText = values[0].text;
          self.state.set('value', values[0].value);
        }
        self.state.set('menu', values);
      }
      self.state.set('text', settings.text || selectedText);
      self.classes.add('listbox');
      self.on('select', function (e) {
        var ctrl = e.control;
        if (lastItemCtrl) {
          e.lastControl = lastItemCtrl;
        }
        if (settings.multiple) {
          ctrl.active(!ctrl.active());
        } else {
          self.value(e.control.value());
        }
        lastItemCtrl = ctrl;
      });
    },
    value: function (value) {
      if (arguments.length === 0) {
        return this.state.get('value');
      }
      if (typeof value === 'undefined') {
        return this;
      }
      if (this.settings.values) {
        var matchingValues = global$2.grep(this.settings.values, function (a) {
          return a.value === value;
        });
        if (matchingValues.length > 0) {
          this.state.set('value', value);
        } else if (value === null) {
          this.state.set('value', null);
        }
      } else {
        this.state.set('value', value);
      }
      return this;
    },
    bindStates: function () {
      var self = this;
      function activateMenuItemsByValue(menu, value) {
        if (menu instanceof Menu) {
          menu.items().each(function (ctrl) {
            if (!ctrl.hasMenus()) {
              ctrl.active(ctrl.value() === value);
            }
          });
        }
      }
      function getSelectedItem(menuValues, value) {
        var selectedItem;
        if (!menuValues) {
          return;
        }
        for (var i = 0; i < menuValues.length; i++) {
          if (menuValues[i].value === value) {
            return menuValues[i];
          }
          if (menuValues[i].menu) {
            selectedItem = getSelectedItem(menuValues[i].menu, value);
            if (selectedItem) {
              return selectedItem;
            }
          }
        }
      }
      self.on('show', function (e) {
        activateMenuItemsByValue(e.control, self.value());
      });
      self.state.on('change:value', function (e) {
        var selectedItem = getSelectedItem(self.state.get('menu'), e.value);
        if (selectedItem) {
          self.text(selectedItem.text);
        } else {
          self.text(self.settings.text);
        }
      });
      return self._super();
    }
  });

  var toggleTextStyle = function (ctrl, state) {
    var textStyle = ctrl._textStyle;
    if (textStyle) {
      var textElm = ctrl.getEl('text');
      textElm.setAttribute('style', textStyle);
      if (state) {
        textElm.style.color = '';
        textElm.style.backgroundColor = '';
      }
    }
  };
  var MenuItem = Widget.extend({
    Defaults: {
      border: 0,
      role: 'menuitem'
    },
    init: function (settings) {
      var self = this;
      var text;
      self._super(settings);
      settings = self.settings;
      self.classes.add('menu-item');
      if (settings.menu) {
        self.classes.add('menu-item-expand');
      }
      if (settings.preview) {
        self.classes.add('menu-item-preview');
      }
      text = self.state.get('text');
      if (text === '-' || text === '|') {
        self.classes.add('menu-item-sep');
        self.aria('role', 'separator');
        self.state.set('text', '-');
      }
      if (settings.selectable) {
        self.aria('role', 'menuitemcheckbox');
        self.classes.add('menu-item-checkbox');
        settings.icon = 'selected';
      }
      if (!settings.preview && !settings.selectable) {
        self.classes.add('menu-item-normal');
      }
      self.on('mousedown', function (e) {
        e.preventDefault();
      });
      if (settings.menu && !settings.ariaHideMenu) {
        self.aria('haspopup', true);
      }
    },
    hasMenus: function () {
      return !!this.settings.menu;
    },
    showMenu: function () {
      var self = this;
      var settings = self.settings;
      var menu;
      var parent = self.parent();
      parent.items().each(function (ctrl) {
        if (ctrl !== self) {
          ctrl.hideMenu();
        }
      });
      if (settings.menu) {
        menu = self.menu;
        if (!menu) {
          menu = settings.menu;
          if (menu.length) {
            menu = {
              type: 'menu',
              items: menu
            };
          } else {
            menu.type = menu.type || 'menu';
          }
          if (parent.settings.itemDefaults) {
            menu.itemDefaults = parent.settings.itemDefaults;
          }
          menu = self.menu = global$4.create(menu).parent(self).renderTo();
          menu.reflow();
          menu.on('cancel', function (e) {
            e.stopPropagation();
            self.focus();
            menu.hide();
          });
          menu.on('show hide', function (e) {
            if (e.control.items) {
              e.control.items().each(function (ctrl) {
                ctrl.active(ctrl.settings.selected);
              });
            }
          }).fire('show');
          menu.on('hide', function (e) {
            if (e.control === menu) {
              self.classes.remove('selected');
            }
          });
          menu.submenu = true;
        } else {
          menu.show();
        }
        menu._parentMenu = parent;
        menu.classes.add('menu-sub');
        var rel = menu.testMoveRel(self.getEl(), self.isRtl() ? [
          'tl-tr',
          'bl-br',
          'tr-tl',
          'br-bl'
        ] : [
          'tr-tl',
          'br-bl',
          'tl-tr',
          'bl-br'
        ]);
        menu.moveRel(self.getEl(), rel);
        menu.rel = rel;
        rel = 'menu-sub-' + rel;
        menu.classes.remove(menu._lastRel).add(rel);
        menu._lastRel = rel;
        self.classes.add('selected');
        self.aria('expanded', true);
      }
    },
    hideMenu: function () {
      var self = this;
      if (self.menu) {
        self.menu.items().each(function (item) {
          if (item.hideMenu) {
            item.hideMenu();
          }
        });
        self.menu.hide();
        self.aria('expanded', false);
      }
      return self;
    },
    renderHtml: function () {
      var self = this;
      var id = self._id;
      var settings = self.settings;
      var prefix = self.classPrefix;
      var text = self.state.get('text');
      var icon = self.settings.icon, image = '', shortcut = settings.shortcut;
      var url = self.encode(settings.url), iconHtml = '';
      function convertShortcut(shortcut) {
        var i, value, replace = {};
        if (global$8.mac) {
          replace = {
            alt: '&#x2325;',
            ctrl: '&#x2318;',
            shift: '&#x21E7;',
            meta: '&#x2318;'
          };
        } else {
          replace = { meta: 'Ctrl' };
        }
        shortcut = shortcut.split('+');
        for (i = 0; i < shortcut.length; i++) {
          value = replace[shortcut[i].toLowerCase()];
          if (value) {
            shortcut[i] = value;
          }
        }
        return shortcut.join('+');
      }
      function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }
      function markMatches(text) {
        var match = settings.match || '';
        return match ? text.replace(new RegExp(escapeRegExp(match), 'gi'), function (match) {
          return '!mce~match[' + match + ']mce~match!';
        }) : text;
      }
      function boldMatches(text) {
        return text.replace(new RegExp(escapeRegExp('!mce~match['), 'g'), '<b>').replace(new RegExp(escapeRegExp(']mce~match!'), 'g'), '</b>');
      }
      if (icon) {
        self.parent().classes.add('menu-has-icons');
      }
      if (settings.image) {
        image = ' style="background-image: url(\'' + settings.image + '\')"';
      }
      if (shortcut) {
        shortcut = convertShortcut(shortcut);
      }
      icon = prefix + 'ico ' + prefix + 'i-' + (self.settings.icon || 'none');
      iconHtml = text !== '-' ? '<i class="' + icon + '"' + image + '></i>\xA0' : '';
      text = boldMatches(self.encode(markMatches(text)));
      url = boldMatches(self.encode(markMatches(url)));
      return '<div id="' + id + '" class="' + self.classes + '" tabindex="-1">' + iconHtml + (text !== '-' ? '<span id="' + id + '-text" class="' + prefix + 'text">' + text + '</span>' : '') + (shortcut ? '<div id="' + id + '-shortcut" class="' + prefix + 'menu-shortcut">' + shortcut + '</div>' : '') + (settings.menu ? '<div class="' + prefix + 'caret"></div>' : '') + (url ? '<div class="' + prefix + 'menu-item-link">' + url + '</div>' : '') + '</div>';
    },
    postRender: function () {
      var self = this, settings = self.settings;
      var textStyle = settings.textStyle;
      if (typeof textStyle === 'function') {
        textStyle = textStyle.call(this);
      }
      if (textStyle) {
        var textElm = self.getEl('text');
        if (textElm) {
          textElm.setAttribute('style', textStyle);
          self._textStyle = textStyle;
        }
      }
      self.on('mouseenter click', function (e) {
        if (e.control === self) {
          if (!settings.menu && e.type === 'click') {
            self.fire('select');
            global$7.requestAnimationFrame(function () {
              self.parent().hideAll();
            });
          } else {
            self.showMenu();
            if (e.aria) {
              self.menu.focus(true);
            }
          }
        }
      });
      self._super();
      return self;
    },
    hover: function () {
      var self = this;
      self.parent().items().each(function (ctrl) {
        ctrl.classes.remove('selected');
      });
      self.classes.toggle('selected', true);
      return self;
    },
    active: function (state) {
      toggleTextStyle(this, state);
      if (typeof state !== 'undefined') {
        this.aria('checked', state);
      }
      return this._super(state);
    },
    remove: function () {
      this._super();
      if (this.menu) {
        this.menu.remove();
      }
    }
  });

  var Radio = Checkbox.extend({
    Defaults: {
      classes: 'radio',
      role: 'radio'
    }
  });

  var ResizeHandle = Widget.extend({
    renderHtml: function () {
      var self = this, prefix = self.classPrefix;
      self.classes.add('resizehandle');
      if (self.settings.direction === 'both') {
        self.classes.add('resizehandle-both');
      }
      self.canFocus = false;
      return '<div id="' + self._id + '" class="' + self.classes + '">' + '<i class="' + prefix + 'ico ' + prefix + 'i-resize"></i>' + '</div>';
    },
    postRender: function () {
      var self = this;
      self._super();
      self.resizeDragHelper = new DragHelper(this._id, {
        start: function () {
          self.fire('ResizeStart');
        },
        drag: function (e) {
          if (self.settings.direction !== 'both') {
            e.deltaX = 0;
          }
          self.fire('Resize', e);
        },
        stop: function () {
          self.fire('ResizeEnd');
        }
      });
    },
    remove: function () {
      if (this.resizeDragHelper) {
        this.resizeDragHelper.destroy();
      }
      return this._super();
    }
  });

  function createOptions(options) {
    var strOptions = '';
    if (options) {
      for (var i = 0; i < options.length; i++) {
        strOptions += '<option value="' + options[i] + '">' + options[i] + '</option>';
      }
    }
    return strOptions;
  }
  var SelectBox = Widget.extend({
    Defaults: {
      classes: 'selectbox',
      role: 'selectbox',
      options: []
    },
    init: function (settings) {
      var self = this;
      self._super(settings);
      if (self.settings.size) {
        self.size = self.settings.size;
      }
      if (self.settings.options) {
        self._options = self.settings.options;
      }
      self.on('keydown', function (e) {
        var rootControl;
        if (e.keyCode === 13) {
          e.preventDefault();
          self.parents().reverse().each(function (ctrl) {
            if (ctrl.toJSON) {
              rootControl = ctrl;
              return false;
            }
          });
          self.fire('submit', { data: rootControl.toJSON() });
        }
      });
    },
    options: function (state) {
      if (!arguments.length) {
        return this.state.get('options');
      }
      this.state.set('options', state);
      return this;
    },
    renderHtml: function () {
      var self = this;
      var options, size = '';
      options = createOptions(self._options);
      if (self.size) {
        size = ' size = "' + self.size + '"';
      }
      return '<select id="' + self._id + '" class="' + self.classes + '"' + size + '>' + options + '</select>';
    },
    bindStates: function () {
      var self = this;
      self.state.on('change:options', function (e) {
        self.getEl().innerHTML = createOptions(e.value);
      });
      return self._super();
    }
  });

  function constrain(value, minVal, maxVal) {
    if (value < minVal) {
      value = minVal;
    }
    if (value > maxVal) {
      value = maxVal;
    }
    return value;
  }
  function setAriaProp(el, name, value) {
    el.setAttribute('aria-' + name, value);
  }
  function updateSliderHandle(ctrl, value) {
    var maxHandlePos, shortSizeName, sizeName, stylePosName, styleValue, handleEl;
    if (ctrl.settings.orientation === 'v') {
      stylePosName = 'top';
      sizeName = 'height';
      shortSizeName = 'h';
    } else {
      stylePosName = 'left';
      sizeName = 'width';
      shortSizeName = 'w';
    }
    handleEl = ctrl.getEl('handle');
    maxHandlePos = (ctrl.layoutRect()[shortSizeName] || 100) - funcs.getSize(handleEl)[sizeName];
    styleValue = maxHandlePos * ((value - ctrl._minValue) / (ctrl._maxValue - ctrl._minValue)) + 'px';
    handleEl.style[stylePosName] = styleValue;
    handleEl.style.height = ctrl.layoutRect().h + 'px';
    setAriaProp(handleEl, 'valuenow', value);
    setAriaProp(handleEl, 'valuetext', '' + ctrl.settings.previewFilter(value));
    setAriaProp(handleEl, 'valuemin', ctrl._minValue);
    setAriaProp(handleEl, 'valuemax', ctrl._maxValue);
  }
  var Slider = Widget.extend({
    init: function (settings) {
      var self = this;
      if (!settings.previewFilter) {
        settings.previewFilter = function (value) {
          return Math.round(value * 100) / 100;
        };
      }
      self._super(settings);
      self.classes.add('slider');
      if (settings.orientation === 'v') {
        self.classes.add('vertical');
      }
      self._minValue = isNumber(settings.minValue) ? settings.minValue : 0;
      self._maxValue = isNumber(settings.maxValue) ? settings.maxValue : 100;
      self._initValue = self.state.get('value');
    },
    renderHtml: function () {
      var self = this, id = self._id, prefix = self.classPrefix;
      return '<div id="' + id + '" class="' + self.classes + '">' + '<div id="' + id + '-handle" class="' + prefix + 'slider-handle" role="slider" tabindex="-1"></div>' + '</div>';
    },
    reset: function () {
      this.value(this._initValue).repaint();
    },
    postRender: function () {
      var self = this;
      var minValue, maxValue, screenCordName, stylePosName, sizeName, shortSizeName;
      function toFraction(min, max, val) {
        return (val + min) / (max - min);
      }
      function fromFraction(min, max, val) {
        return val * (max - min) - min;
      }
      function handleKeyboard(minValue, maxValue) {
        function alter(delta) {
          var value;
          value = self.value();
          value = fromFraction(minValue, maxValue, toFraction(minValue, maxValue, value) + delta * 0.05);
          value = constrain(value, minValue, maxValue);
          self.value(value);
          self.fire('dragstart', { value: value });
          self.fire('drag', { value: value });
          self.fire('dragend', { value: value });
        }
        self.on('keydown', function (e) {
          switch (e.keyCode) {
          case 37:
          case 38:
            alter(-1);
            break;
          case 39:
          case 40:
            alter(1);
            break;
          }
        });
      }
      function handleDrag(minValue, maxValue, handleEl) {
        var startPos, startHandlePos, maxHandlePos, handlePos, value;
        self._dragHelper = new DragHelper(self._id, {
          handle: self._id + '-handle',
          start: function (e) {
            startPos = e[screenCordName];
            startHandlePos = parseInt(self.getEl('handle').style[stylePosName], 10);
            maxHandlePos = (self.layoutRect()[shortSizeName] || 100) - funcs.getSize(handleEl)[sizeName];
            self.fire('dragstart', { value: value });
          },
          drag: function (e) {
            var delta = e[screenCordName] - startPos;
            handlePos = constrain(startHandlePos + delta, 0, maxHandlePos);
            handleEl.style[stylePosName] = handlePos + 'px';
            value = minValue + handlePos / maxHandlePos * (maxValue - minValue);
            self.value(value);
            self.tooltip().text('' + self.settings.previewFilter(value)).show().moveRel(handleEl, 'bc tc');
            self.fire('drag', { value: value });
          },
          stop: function () {
            self.tooltip().hide();
            self.fire('dragend', { value: value });
          }
        });
      }
      minValue = self._minValue;
      maxValue = self._maxValue;
      if (self.settings.orientation === 'v') {
        screenCordName = 'screenY';
        stylePosName = 'top';
        sizeName = 'height';
        shortSizeName = 'h';
      } else {
        screenCordName = 'screenX';
        stylePosName = 'left';
        sizeName = 'width';
        shortSizeName = 'w';
      }
      self._super();
      handleKeyboard(minValue, maxValue);
      handleDrag(minValue, maxValue, self.getEl('handle'));
    },
    repaint: function () {
      this._super();
      updateSliderHandle(this, this.value());
    },
    bindStates: function () {
      var self = this;
      self.state.on('change:value', function (e) {
        updateSliderHandle(self, e.value);
      });
      return self._super();
    }
  });

  var Spacer = Widget.extend({
    renderHtml: function () {
      var self = this;
      self.classes.add('spacer');
      self.canFocus = false;
      return '<div id="' + self._id + '" class="' + self.classes + '"></div>';
    }
  });

  var SplitButton = MenuButton.extend({
    Defaults: {
      classes: 'widget btn splitbtn',
      role: 'button'
    },
    repaint: function () {
      var self$$1 = this;
      var elm = self$$1.getEl();
      var rect = self$$1.layoutRect();
      var mainButtonElm, menuButtonElm;
      self$$1._super();
      mainButtonElm = elm.firstChild;
      menuButtonElm = elm.lastChild;
      global$9(mainButtonElm).css({
        width: rect.w - funcs.getSize(menuButtonElm).width,
        height: rect.h - 2
      });
      global$9(menuButtonElm).css({ height: rect.h - 2 });
      return self$$1;
    },
    activeMenu: function (state) {
      var self$$1 = this;
      global$9(self$$1.getEl().lastChild).toggleClass(self$$1.classPrefix + 'active', state);
    },
    renderHtml: function () {
      var self$$1 = this;
      var id = self$$1._id;
      var prefix = self$$1.classPrefix;
      var image;
      var icon = self$$1.state.get('icon');
      var text = self$$1.state.get('text');
      var settings = self$$1.settings;
      var textHtml = '', ariaPressed;
      image = settings.image;
      if (image) {
        icon = 'none';
        if (typeof image !== 'string') {
          image = window.getSelection ? image[0] : image[1];
        }
        image = ' style="background-image: url(\'' + image + '\')"';
      } else {
        image = '';
      }
      icon = settings.icon ? prefix + 'ico ' + prefix + 'i-' + icon : '';
      if (text) {
        self$$1.classes.add('btn-has-text');
        textHtml = '<span class="' + prefix + 'txt">' + self$$1.encode(text) + '</span>';
      }
      ariaPressed = typeof settings.active === 'boolean' ? ' aria-pressed="' + settings.active + '"' : '';
      return '<div id="' + id + '" class="' + self$$1.classes + '" role="button"' + ariaPressed + ' tabindex="-1">' + '<button type="button" hidefocus="1" tabindex="-1">' + (icon ? '<i class="' + icon + '"' + image + '></i>' : '') + textHtml + '</button>' + '<button type="button" class="' + prefix + 'open" hidefocus="1" tabindex="-1">' + (self$$1._menuBtnText ? (icon ? '\xA0' : '') + self$$1._menuBtnText : '') + ' <i class="' + prefix + 'caret"></i>' + '</button>' + '</div>';
    },
    postRender: function () {
      var self$$1 = this, onClickHandler = self$$1.settings.onclick;
      self$$1.on('click', function (e) {
        var node = e.target;
        if (e.control === this) {
          while (node) {
            if (e.aria && e.aria.key !== 'down' || node.nodeName === 'BUTTON' && node.className.indexOf('open') === -1) {
              e.stopImmediatePropagation();
              if (onClickHandler) {
                onClickHandler.call(this, e);
              }
              return;
            }
            node = node.parentNode;
          }
        }
      });
      delete self$$1.settings.onclick;
      return self$$1._super();
    }
  });

  var StackLayout = FlowLayout.extend({
    Defaults: {
      containerClass: 'stack-layout',
      controlClass: 'stack-layout-item',
      endClass: 'break'
    },
    isNative: function () {
      return true;
    }
  });

  var TabPanel = Panel.extend({
    Defaults: {
      layout: 'absolute',
      defaults: { type: 'panel' }
    },
    activateTab: function (idx) {
      var activeTabElm;
      if (this.activeTabId) {
        activeTabElm = this.getEl(this.activeTabId);
        global$9(activeTabElm).removeClass(this.classPrefix + 'active');
        activeTabElm.setAttribute('aria-selected', 'false');
      }
      this.activeTabId = 't' + idx;
      activeTabElm = this.getEl('t' + idx);
      activeTabElm.setAttribute('aria-selected', 'true');
      global$9(activeTabElm).addClass(this.classPrefix + 'active');
      this.items()[idx].show().fire('showtab');
      this.reflow();
      this.items().each(function (item, i) {
        if (idx !== i) {
          item.hide();
        }
      });
    },
    renderHtml: function () {
      var self = this;
      var layout = self._layout;
      var tabsHtml = '';
      var prefix = self.classPrefix;
      self.preRender();
      layout.preRender(self);
      self.items().each(function (ctrl, i) {
        var id = self._id + '-t' + i;
        ctrl.aria('role', 'tabpanel');
        ctrl.aria('labelledby', id);
        tabsHtml += '<div id="' + id + '" class="' + prefix + 'tab" ' + 'unselectable="on" role="tab" aria-controls="' + ctrl._id + '" aria-selected="false" tabIndex="-1">' + self.encode(ctrl.settings.title) + '</div>';
      });
      return '<div id="' + self._id + '" class="' + self.classes + '" hidefocus="1" tabindex="-1">' + '<div id="' + self._id + '-head" class="' + prefix + 'tabs" role="tablist">' + tabsHtml + '</div>' + '<div id="' + self._id + '-body" class="' + self.bodyClasses + '">' + layout.renderHtml(self) + '</div>' + '</div>';
    },
    postRender: function () {
      var self = this;
      self._super();
      self.settings.activeTab = self.settings.activeTab || 0;
      self.activateTab(self.settings.activeTab);
      this.on('click', function (e) {
        var targetParent = e.target.parentNode;
        if (targetParent && targetParent.id === self._id + '-head') {
          var i = targetParent.childNodes.length;
          while (i--) {
            if (targetParent.childNodes[i] === e.target) {
              self.activateTab(i);
            }
          }
        }
      });
    },
    initLayoutRect: function () {
      var self = this;
      var rect, minW, minH;
      minW = funcs.getSize(self.getEl('head')).width;
      minW = minW < 0 ? 0 : minW;
      minH = 0;
      self.items().each(function (item) {
        minW = Math.max(minW, item.layoutRect().minW);
        minH = Math.max(minH, item.layoutRect().minH);
      });
      self.items().each(function (ctrl) {
        ctrl.settings.x = 0;
        ctrl.settings.y = 0;
        ctrl.settings.w = minW;
        ctrl.settings.h = minH;
        ctrl.layoutRect({
          x: 0,
          y: 0,
          w: minW,
          h: minH
        });
      });
      var headH = funcs.getSize(self.getEl('head')).height;
      self.settings.minWidth = minW;
      self.settings.minHeight = minH + headH;
      rect = self._super();
      rect.deltaH += headH;
      rect.innerH = rect.h - rect.deltaH;
      return rect;
    }
  });

  var TextBox = Widget.extend({
    init: function (settings) {
      var self$$1 = this;
      self$$1._super(settings);
      self$$1.classes.add('textbox');
      if (settings.multiline) {
        self$$1.classes.add('multiline');
      } else {
        self$$1.on('keydown', function (e) {
          var rootControl;
          if (e.keyCode === 13) {
            e.preventDefault();
            self$$1.parents().reverse().each(function (ctrl) {
              if (ctrl.toJSON) {
                rootControl = ctrl;
                return false;
              }
            });
            self$$1.fire('submit', { data: rootControl.toJSON() });
          }
        });
        self$$1.on('keyup', function (e) {
          self$$1.state.set('value', e.target.value);
        });
      }
    },
    repaint: function () {
      var self$$1 = this;
      var style, rect, borderBox, borderW, borderH = 0, lastRepaintRect;
      style = self$$1.getEl().style;
      rect = self$$1._layoutRect;
      lastRepaintRect = self$$1._lastRepaintRect || {};
      var doc = document;
      if (!self$$1.settings.multiline && doc.all && (!doc.documentMode || doc.documentMode <= 8)) {
        style.lineHeight = rect.h - borderH + 'px';
      }
      borderBox = self$$1.borderBox;
      borderW = borderBox.left + borderBox.right + 8;
      borderH = borderBox.top + borderBox.bottom + (self$$1.settings.multiline ? 8 : 0);
      if (rect.x !== lastRepaintRect.x) {
        style.left = rect.x + 'px';
        lastRepaintRect.x = rect.x;
      }
      if (rect.y !== lastRepaintRect.y) {
        style.top = rect.y + 'px';
        lastRepaintRect.y = rect.y;
      }
      if (rect.w !== lastRepaintRect.w) {
        style.width = rect.w - borderW + 'px';
        lastRepaintRect.w = rect.w;
      }
      if (rect.h !== lastRepaintRect.h) {
        style.height = rect.h - borderH + 'px';
        lastRepaintRect.h = rect.h;
      }
      self$$1._lastRepaintRect = lastRepaintRect;
      self$$1.fire('repaint', {}, false);
      return self$$1;
    },
    renderHtml: function () {
      var self$$1 = this;
      var settings = self$$1.settings;
      var attrs, elm;
      attrs = {
        id: self$$1._id,
        hidefocus: '1'
      };
      global$2.each([
        'rows',
        'spellcheck',
        'maxLength',
        'size',
        'readonly',
        'min',
        'max',
        'step',
        'list',
        'pattern',
        'placeholder',
        'required',
        'multiple'
      ], function (name$$1) {
        attrs[name$$1] = settings[name$$1];
      });
      if (self$$1.disabled()) {
        attrs.disabled = 'disabled';
      }
      if (settings.subtype) {
        attrs.type = settings.subtype;
      }
      elm = funcs.create(settings.multiline ? 'textarea' : 'input', attrs);
      elm.value = self$$1.state.get('value');
      elm.className = self$$1.classes.toString();
      return elm.outerHTML;
    },
    value: function (value) {
      if (arguments.length) {
        this.state.set('value', value);
        return this;
      }
      if (this.state.get('rendered')) {
        this.state.set('value', this.getEl().value);
      }
      return this.state.get('value');
    },
    postRender: function () {
      var self$$1 = this;
      self$$1.getEl().value = self$$1.state.get('value');
      self$$1._super();
      self$$1.$el.on('change', function (e) {
        self$$1.state.set('value', e.target.value);
        self$$1.fire('change', e);
      });
    },
    bindStates: function () {
      var self$$1 = this;
      self$$1.state.on('change:value', function (e) {
        if (self$$1.getEl().value !== e.value) {
          self$$1.getEl().value = e.value;
        }
      });
      self$$1.state.on('change:disabled', function (e) {
        self$$1.getEl().disabled = e.value;
      });
      return self$$1._super();
    },
    remove: function () {
      this.$el.off();
      this._super();
    }
  });

  var getApi = function () {
    return {
      Selector: Selector,
      Collection: Collection$2,
      ReflowQueue: $_ck0dfmuyjm0og2id,
      Control: Control$1,
      Factory: global$4,
      KeyboardNavigation: KeyboardNavigation,
      Container: Container,
      DragHelper: DragHelper,
      Scrollable: $_du6ee9v0jm0og2il,
      Panel: Panel,
      Movable: $_43ajw6uljm0og2gm,
      Resizable: $_atx9o6v2jm0og2is,
      FloatPanel: FloatPanel,
      Window: Window$$1,
      MessageBox: MessageBox,
      Tooltip: Tooltip,
      Widget: Widget,
      Progress: Progress,
      Notification: Notification,
      Layout: Layout,
      AbsoluteLayout: AbsoluteLayout,
      Button: Button,
      ButtonGroup: ButtonGroup,
      Checkbox: Checkbox,
      ComboBox: ComboBox,
      ColorBox: ColorBox,
      PanelButton: PanelButton,
      ColorButton: ColorButton,
      ColorPicker: ColorPicker,
      Path: Path,
      ElementPath: ElementPath,
      FormItem: FormItem,
      Form: Form,
      FieldSet: FieldSet,
      FilePicker: FilePicker,
      FitLayout: FitLayout,
      FlexLayout: FlexLayout,
      FlowLayout: FlowLayout,
      FormatControls: $_6j9wxhwyjm0og2v4,
      GridLayout: GridLayout,
      Iframe: Iframe$1,
      InfoBox: InfoBox,
      Label: Label,
      Toolbar: Toolbar$1,
      MenuBar: MenuBar,
      MenuButton: MenuButton,
      MenuItem: MenuItem,
      Throbber: Throbber,
      Menu: Menu,
      ListBox: ListBox,
      Radio: Radio,
      ResizeHandle: ResizeHandle,
      SelectBox: SelectBox,
      Slider: Slider,
      Spacer: Spacer,
      SplitButton: SplitButton,
      StackLayout: StackLayout,
      TabPanel: TabPanel,
      TextBox: TextBox,
      DropZone: DropZone,
      BrowseButton: BrowseButton
    };
  };
  var appendTo = function (target) {
    if (target.ui) {
      global$2.each(getApi(), function (ref, key) {
        target.ui[key] = ref;
      });
    } else {
      target.ui = getApi();
    }
  };
  var registerToFactory = function () {
    global$2.each(getApi(), function (ref, key) {
      global$4.add(key, ref);
    });
  };
  var Api = {
    appendTo: appendTo,
    registerToFactory: registerToFactory
  };

  Api.registerToFactory();
  Api.appendTo(window.tinymce ? window.tinymce : {});
  global.add('modern', function (editor) {
    $_6j9wxhwyjm0og2v4.setup(editor);
    return $_ept3vutrjm0og2dw.get(editor);
  });
  function Theme () {
  }

  return Theme;

}());
})();


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-725e0371\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Textarea.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "control", class: { "mce-disabled": _vm.disabled } },
    [
      _c("textarea", {
        staticClass: "textarea",
        attrs: {
          name: _vm.name,
          id: _vm.name,
          placeholder: _vm.placeholder,
          disabled: _vm.disabled
        },
        domProps: { value: _vm.value }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-725e0371", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ "./resources/assets/js/components/Textarea.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Textarea_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Textarea.vue");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_725e0371_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Textarea_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-725e0371\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Textarea.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Textarea_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_725e0371_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Textarea_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_725e0371_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Textarea_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Textarea.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-725e0371", Component.options)
  } else {
    hotAPI.reload("data-v-725e0371", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});