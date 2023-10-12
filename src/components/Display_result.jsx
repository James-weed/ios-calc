/* eslint-disable no-unused-vars */
import "./Calculator.css"

const Display_result = (value) => {
    if (value.length > 16) {
        if (value.includes(".")) {
            if (value.includes('e')) {
                return (
                    <>
                        <h3 className="resultado3">{value.slice(0, 16)}{ value.slice(value.length-5, value.length) }</h3>
                    </>
                )    
            }
            return (
                <>
                    <h2 className="resultado2">{ value.slice(0, 16) }</h2>
                </>
            )
        } else {
            const cnt_E = value.length
            console.log(value)

            return (
                <>
                    <h3 className="resultado3">{ value[0] }.{ value.slice(1, 15) }e+{ cnt_E }</h3>
                </>
            )
        }
    } else if (value.length > 12 && value.length <= 16) {
        return (
            <>
                <h2 className="resultado2">{ value.slice(0, 16) }</h2>
            </>
        )
    } else {
        return (
            <>
                <h1 className='resultado'>{ value }</h1>
            </>
        )
    }
}

export default Display_result