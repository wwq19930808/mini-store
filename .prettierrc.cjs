module.exports = {
  /**
   * @description 每行最大输入字符长度，超过后自动换行
   * @type number
   * @default 80
   */
  printWidth: 200,
  /**
   * @description 制表符宽度，也就是每一行js代码或者html代码开头的空格数，即每一行缩进的长度
   * @type number
   * @default 2
   */
  tabWidth: 2,
  /**
   * @description 是否是使用制表符来代替空格进行缩紧
   * @type boolean
   * @default false
   */
  useTabs: false,
  /**
   * @description 是否在每一行结尾添加分号
   * @type boolean
   * @default true
   */
  semi: true,
  /**
   * @description 是否使用单引号代替双引号
   * @type boolean
   * @default false
   */
  singleQuote: true,
  /**
   * @description 对象属性是否用引号包围起来 默认值
   * @default 'as-needed'
   * @param {'as-needed'|'consistent'|'preserve'} string
   * as-needed 只在必须用引号包围起来的，才包围起来
   * consistent 如果一个对象中至少有一个属性需要引用，则引用所有属性。
   * preserve 以开发输入时为准，输入时用引号包围起来就包围起来，输入时不包围，就不包围起来
   *
   * @note 在ts，vue，angular 会保留数字类型属性的引用
   */
  quoteProps: 'consistent',
  /**
   * @description 在jsx中是否使用单引号代替双引号
   * @type boolean
   * @default false
   */
  jsxSingleQuote: true,
  /**
   * @description 尾逗号（尾逗号点用函数时传参，object属性，数组最后一个的逗号，如fn(a,b,) obj={a:1,b:1,} arr=[1,2,3,] ）使用
   * @type string
   * @param {'es5' | 'none' | 'all'}
   * @default es5
   * es5 在es5内生效的时候使用尾逗号，在ts中类型参数后面没有尾逗号
   * none 不论什么情况都没有尾逗号
   * all 尽可能用逗号结尾(包括函数参数和调用)
   */
  trailingComma: 'all',
  /**
   * @description 花括号开头和结尾是否有空格
   * @type boolean
   * @default true
   */
  bracketSpacing: true,
  /**
   * @description 在jsx中元素标签的开头的 ‘>’ 是否和元素的属性放在同一行，false 则另起一行
   * @type boolean
   * @default true
   */
  jsxBracketSameLine: true,
  /**
   * @description 在箭头函数中只有一个参数时，是否用扩围包围
   * @type string
   * @param {'always' | 'avoid'}
   * @default always
   * always: 全部用括号
   * avoid: 尽可能的避免，即能不用括号就不用括号
   */
  arrowParens: 'always',
  /**
   * @description 在每个文件中从第几个字符开始格式化
   * @type number
   * @default 0
   */
  //rangeStart: 0,
  /**
   * @description 在每个文件中从第几个字符开始不格式化
   * @type number
   * @default Infinity
   */
  //rangeEnd: Infinity,
  /**
   * @description 指定用那种解析器解析，一般情况会根据文件不同，自动判断解析器，所以这个值一般不用设置
   * @type string
   * @default none
   */
  // parser: 'none',
  /**
   * @description 指定prettier判断使用哪个解析器的文件
   * @type string
   * @default none
   *
   */
  // filepath: 'none',
  /**
   * @description 判断这个文件是否进行格式化，
   *    判断依据是文件开头是否有 包含 @prettier 或者 @format 注释块，一般用于项目中途或者后期加入prettier，来过渡使用,
   *    如果项目一开始就使用了prettier就无需设置此项了
   * @type boolean
   * @default false
   */
  requirePragma: false,
  /**
   * @description 指定默认换行符号，主要是因为各个操作系统的默认换行符不一致才出现的这个，如果开发人员分别在linux windows，mac等开发，
   * 则会出现不同换行符，对git来说不友好
   * @type string
   * @default lf
   * @param {'lf' | 'crlf' | 'cr' | 'auto'}
   * lf \n
   * crlf \r\n
   * cr \n
   * auto 维护现有的行结束符(一个文件中如果有多种换行符，则以第一行为准ß)
   */
  endOfLine: 'lf',
  /**
   * @description 是否格式化文件内有其他类型文件的代码，比如 js中有html的字符串，是否在js中使用html的规则格式化html
   * @type string
   * @param {'off' | 'on'}
   * @default off
   */
  embeddedLanguageFormatting: 'auto',
};
