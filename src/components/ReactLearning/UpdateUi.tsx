'use client'

import { useState } from "react"

export const UpdateUi = () => {
  const [value, setValue] = useState(0)

   console.log("🚀 ~ file: UpdateUi.tsx:8 ~ UpdateUi ~ value:", value)
   
    const increment = () => {
        // value = value + 1
        setValue(value + 1)
            };
    console.log("🚀 ~ file: UpdateUi.tsx:10 ~ increment ~ increment:", increment)
    const decrement = () => {
    // value = value - 1
    setValue(value - 1)
    }
    console.log("🚀 ~ file: UpdateUi.tsx:13 ~ decrement ~ decrement:", decrement)
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
};

