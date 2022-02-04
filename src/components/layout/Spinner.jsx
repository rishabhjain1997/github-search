import React from "react"
import spinner from "./assets/Spinner.gif"

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        src={spinner}
        alt="Loading..."
        className="text-center mx-auto w-48"
      />
    </div>
  )
}

export default Spinner
