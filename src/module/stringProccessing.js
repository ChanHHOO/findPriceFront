export const getLastUpdateTimeString = (article_updateTime)=>{
    const today = new Date();
    const lastUpdateDate = new Date(article_updateTime)
    const betweenTime = Math.floor((today.getTime() - lastUpdateDate.getTime()) / 1000 / 60);
    console.log(betweenTime)
    if (betweenTime < 1) return "방금 전";
    if(betweenTime < 60) return `${betweenTime}분 전`;
    
    const betweenTimeHour = Math.floor(betweenTime / 60);
    console.log(betweenTimeHour)
    if (betweenTimeHour < 24) return `${betweenTimeHour}시간 전`;
    
    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    console.log(betweenTimeDay)
    if (betweenTimeDay < 365) return`${betweenTimeDay}일 전`

}

export const getDomainString = (chartDomain)=>{

    const unitList = ["십", "백", "천", "만", "십만", "백만", "천만", "억", "십억"];

    const firstVal = chartDomain[0].split("~")[1].trim();

    var unit = 0;

    const newDomain = []

    if (firstVal.length > 4) unit = firstVal.slice(4, firstVal.length).length;

    for(var i = 0; i < 4 ; i++){
        const fv = chartDomain[i].split("~")[0].trim()
        const lv = chartDomain[i].split("~")[1].trim()
        newDomain.push(fv.slice(0, fv.length - unit) + " ~ " + lv.slice(0, lv.length - unit));
    }
    
    return {
        unit:unitList[unit-1],
        chartDomain:newDomain
    };
}