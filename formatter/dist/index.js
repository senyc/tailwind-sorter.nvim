var $8zHUo$process = require("process");
var $8zHUo$tailwindcssliblibsetupContextUtilsjs = require("tailwindcss/lib/lib/setupContextUtils.js");
var $8zHUo$tailwindcssresolveConfigjs = require("tailwindcss/resolveConfig.js");
var $8zHUo$tailwindcsslibutilresolveConfigPathjs = require("tailwindcss/lib/util/resolveConfigPath.js");
var $8zHUo$tailwindcssloadConfigjs = require("tailwindcss/loadConfig.js");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}


var $882b6d93070905b3$require$createContext = $8zHUo$tailwindcssliblibsetupContextUtilsjs.createContext;


var $882b6d93070905b3$require$resolveConfigPath = ($parcel$interopDefault($8zHUo$tailwindcsslibutilresolveConfigPathjs));

const $882b6d93070905b3$var$configPath = $882b6d93070905b3$require$resolveConfigPath();
const $882b6d93070905b3$var$config = $882b6d93070905b3$var$configPath ? $8zHUo$tailwindcssloadConfigjs($882b6d93070905b3$var$configPath) : {};
const $882b6d93070905b3$var$ctx = $882b6d93070905b3$require$createContext($8zHUo$tailwindcssresolveConfigjs($882b6d93070905b3$var$config));
const $882b6d93070905b3$var$texts = JSON.parse($8zHUo$process.argv[2]);
const $882b6d93070905b3$var$replacements = $882b6d93070905b3$var$texts.map($882b6d93070905b3$var$sortClasses);
console.log(JSON.stringify($882b6d93070905b3$var$replacements));
function $882b6d93070905b3$var$sortClasses(classStr) {
    if (typeof classStr !== "string" || classStr === "") return classStr;
    // Ignore class attributes containing `{{`, to match Prettier behaviour:
    // https://github.com/prettier/prettier/blob/main/src/language-html/embed.js#L83-L88
    if (classStr.includes("{{")) return classStr;
    let result = "";
    const parts = classStr.split(/(\s+)/);
    let classes = parts.filter((_, i)=>i % 2 === 0);
    if (classes[classes.length - 1] === "") classes.pop();
    classes = $882b6d93070905b3$var$sortClassList(classes);
    for(let i = 0; i < classes.length; i++)result += `${classes[i]} `;
    return result.trimEnd().trimStart();
}
function $882b6d93070905b3$var$bigSign(bigIntValue) {
    return Number(bigIntValue > 0n) - Number(bigIntValue < 0n);
}
function $882b6d93070905b3$var$sortClassList(classList) {
    const classNamesWithOrder = $882b6d93070905b3$var$ctx.getClassOrder(classList);
    return classNamesWithOrder.sort(([, a], [, z])=>{
        if (a === z) return 0;
        if (a === null) return -1;
        if (z === null) return 1;
        return $882b6d93070905b3$var$bigSign(a - z);
    }).map(([className])=>className);
}


//# sourceMappingURL=index.js.map
