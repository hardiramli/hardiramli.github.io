import camelCase from 'lodash/fp/camelCase'
import upperFirst from 'lodash/fp/upperFirst'


const requiredLang = require.context(
    './',
    true,
    /\.json$/
)

const messages = {}

for(const file of requiredLang.keys()){
    if(file === './index.ts')continue

    const path = file.replace(/(\.\/|\.json$)/g,'').split('/')

    path.reduce((o:{[key:string]: any},s,i)=>{
    
       let prop = upperFirst(camelCase(s))
       console.log("props:",prop);
       console.log("o",o);

        o[prop]=i+1 ===path.length?requiredLang(file):o[prop] ||{}

        return o[prop]
    },messages)
}

export default messages