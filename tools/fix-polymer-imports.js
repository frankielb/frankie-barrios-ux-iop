/* eslint-disable no-extra-boolean-cast */
// This is a Regular Expression we will use to match specific patterns in order to fix their imports.
const PolymerRegex = /window\.\S+\s\=\sclass\sextends\sPolymer\.Element/;
const PolymerRegex2 = /class extends Polymer\.Element/;

module.exports = (content) => {
  console.log('Content before if:  ----------------------------------------------------------------,', content);
  if (Boolean(content.search(PolymerRegex))) {
    let newString1 = content.replace(PolymerRegex, `import { Element as PolymerElement } from '@banno/polymer/polymer-element.js';\n    $&class extends PolymerElement`);
    if (Boolean(newString1.search(PolymerRegex2))) {
      let finalString = newString1.replace(PolymerRegex2, ``);
      console.log('FinalString: ----------------------------------------', finalString);
      return finalString
    }
  return newString1;
  }
  return content;
}