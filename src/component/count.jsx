import { useState } from "react"

function Count() {

    const [count, setCount] = useState(0)

    function kurang() {
        if (count > 0) {

            setCount(count - 1)
        } else {
            alert('Tidak bisa kurang dari 0')
        }
    }

    return (
        <div>
            <h3>Count click</h3>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Tambah (+)</button>
            <button onClick={kurang}>Tambah (-)</button>
        </div>
    )
}

export default Count