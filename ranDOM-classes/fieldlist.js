// Client Side Support for WTFORMS fieldList
//  to construct:
//  let fieldlist = new FieldList(WTFormsFieldListDom)
//  Generate a new field using fieldlist.generateField()
 
class FieldList{
    constructor(dom){
        const self = this
        self.dom = dom
        dom.dynamicField = self
        self.label = dom.querySelector(":scope > label")
        self.name = self.label.getAttribute('for')
        self.fieldList = dom.querySelector("ul#"+self.name)
        self.fieldTemplate = self.fieldList.querySelector("li").cloneNode(true)
        return self
    }
    generateField(vals){
        const self = this
        let newField = self.fieldTemplate.cloneNode(true)
        let index = self.fieldList.children.length
        self.changeAttrIndex(newField,'for',index)
        self.changeAttrIndex(newField,'id',index)
        self.changeAttrIndex(newField,'name',index)
        self.fieldList.appendChild(newField)
        if(vals) self.assignValues(newField,vals)
        return newField
    }
    changeAttrIndex(newField,attr,index){
        let domArray = newField.querySelectorAll('['+attr+']')
        domArray.forEach((dom)=>{
            let val = dom.getAttribute(attr)
            dom.setAttribute(attr,val.replace(/\d+/g,index))
        })
    }

    assignValues(newField,vals){
        let keys = Object.keys(vals)
        keys.forEach((key)=>{
            let input = newField.querySelector('[name$='+key+']')
            if(input.type == 'checkbox'){
                input.checked = vals[key]
            }else{
                input.value = vals[key]
            }
            
        })
        
    }
}
