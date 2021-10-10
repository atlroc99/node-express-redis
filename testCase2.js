const checklists = require('./checkList_replace_str')
const name = 'webCTRL';
console.log(typeof(checklists));

checklists_cloned = [...checklists];
console.log(checklists_cloned)

checklists_cloned.forEach(element => {
    element.label = element.label.replaceAll('{systemName}', name);
});
console.log('-------------------')
console.log(checklists_cloned)
