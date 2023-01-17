const combineReducer = config => (state, action) => {
	return Object.keys(config).reduce((state, key)=> {
		const reducer = config[key];
		const previousSate = state[key];
		const newValue = reducer(previousState,action);
                if(!newValue){
			throw new Error('A reducer returned undefined when reducing with key: '+ key)
		} 	
		return newValue;
	})
}

function combineReducer(config){
    return function reduce(state, action){
       return Object.keys(config).reduce(function(state,key){
            const reducer = config[key];
            const initialValue = state[key];
            const currentValue = reducer(initialValue,action);
                if(!currentValue)
                    throw('error');
            return currentValue;
        })
    }
}
