const getStoredDonateData =()=>{
    const storedDonateData = localStorage.getItem('donate-data')
    if(storedDonateData){
        return JSON.parse(storedDonateData)
    }
    return []
}

const saveToLocalStorage =(id)=>{
    const storedDonateDatas = getStoredDonateData()
    const exist = storedDonateDatas.find(donateId=>donateId===id)
    if(!exist){
        storedDonateDatas.push(id)
        localStorage.setItem('donate-data',JSON.stringify(storedDonateDatas))
    }
}

export {getStoredDonateData,saveToLocalStorage}