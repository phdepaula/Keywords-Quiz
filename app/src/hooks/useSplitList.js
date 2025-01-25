import { useEffect, useState } from 'react';

export default function useSplitList(list, size) {
    const [newList, setNewList] = useState([]);

    useEffect(() => {
        const result = [];
        let tempList = [];

        for (const item of list) {
            if (tempList.length < size) {
                tempList.push(item);
            } else {
                result.push(tempList);
                tempList = [item];
            }
        }

        if (tempList.length > 0) {
            result.push(tempList);
        }

        setNewList(result);
    }, [list, size]);

    return newList;
}
