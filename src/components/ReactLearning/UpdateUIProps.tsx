'use client'
import { useState } from "react"

type UpdateUIPropsType =  {
    propValue :number,
    value1? : number,
    value2? : number
};

export const UpdateUIProps = ({
    value1,
    value2,
    propValue,
}:UpdateUIPropsType) => {
const [value, setValue] = useState<number>(propValue);

    const increment = () => {
        // value = value + 1
        setValue(value + 1)
            };
    console.log("🚀 ~ file: UpdateUIProps.tsx:10 ~ increment ~ increment:", increment)
    const decrement = () => {
        // value = value - 1
        setValue(value - 1)
    }
    console.log("🚀 ~ file: UpdateUIProps.tsx:13 ~ decrement ~ decrement:", decrement)
    return (
        <div className="flex gap-5">
            <button onClick={increment}>
                Increment
            </button>
            <p>
      {value}
            </p>
            <button onClick={decrement}>
                Decrement
            </button>
        </div>
    )
}