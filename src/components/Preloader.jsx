import {useState, useEffect} from "react"
import Loader from "./Loader.jsx"
import { assets } from "../constants"

const Preloader = ({ components, children }) =>  {
  const [progress, setProgress] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let completed = 0
    const total =
      assets.length + 7

    const update = () => {
      completed++
      setProgress(Math.round((completed / total) * 100))
      if (completed === total) setReady(true)
    }

    assets.forEach(asset => {
      const img = new Image()
      img.src = asset
      img.decode().then(update)
    })

    Promise.all(components).then(() => {
      for (let i = 0; i < 7; i++) update()
    })
  }, [])

  return ready ? children : <Loader progress={progress} />
}


export default Preloader