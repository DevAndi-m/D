import React, { useState , useEffect } from 'react'

function AgeChecker() {

    const [age, setAge] = useState();

    const d = new Date;
    const bd = {
        day: 8,
        month: 11,
        year: 2002
    }

    useEffect(() => {
        let current = 0;

        if(d.getMonth() > bd.month) {
            current = d.getFullYear() - bd.year;
            setAge(current);
        } else if(d.getMonth() == bd.month) {
            if(d.getDay >= bd.day) {
                current = d.getFullYear() - bd.year;
                setAge(current);
            }
        } else {
            current = d.getFullYear() - bd.year;
            setAge(current - 1);
        }
    }, [d, bd])

  return <>{age}</>
}

export default AgeChecker;
