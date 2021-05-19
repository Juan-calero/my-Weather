function cardDynamicBg(tMax){
    return(
        tMax - 1 > 30 ? 'hot' :
        tMax - 1 > 20 ? 'warm' :
        tMax - 1 > 10 ? 'cool' :
        tMax - 1 > 0 ? 'cold' :'freeze'
        )
}

export default cardDynamicBg