import {useRef, useEffect} from 'react';

export function useUpdateEffect(fun, inputs) {
    const didMountRef = useRef(false);

    
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
      if (didMountRef.current)
        return fun();
      else
        didMountRef.current = true;
    }, inputs);
}

