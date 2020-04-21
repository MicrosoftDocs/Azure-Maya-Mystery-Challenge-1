import React, { useEffect, createRef } from "react"

import lottie from "lottie-web"
import animation from "../animations/mystery.json"
import "../styles/global.css"

const App = () => {
  let animationContainer = createRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation,
    })
    return () => anim.destroy() // optional clean up for unmounting
  }, [animationContainer])

  return (
    <div className="App">
      <div>
        <h1>What floats in the air but is not a machine or animal?</h1>
        <h2>Cumulus, Stratus, and Cumulonimbus are types!</h2>
        <p>
          Did you guess what it is? Go to the Maya Mystery and input the answer
          into the input box in the Challenge screen.
        </p>
      </div>
      <div className="animation-container" ref={animationContainer} />
      <div className="credits">
        Lottie Animations for Gatsby. Props to{" "}
        <a href="https://picnature.de/en/how-to-use-lottie-animations-in-react-gatsby-bodymovin/">
          Teile Den Beitrag
        </a>{" "}
        for his article, and to the author of the animation,{" "}
        <a href="https://lottiefiles.com/kaigartner">Kai Gartner</a>
      </div>
    </div>
  )
}

export default App
