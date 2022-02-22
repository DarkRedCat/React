export let updateOjectInArray = (items,itemsId,odjPropName,newOdjProps) =>{
  return items.map(u => {
    if(u[odjPropName] === itemsId){return {...u , ...newOdjProps}}
    return u
  })
}

