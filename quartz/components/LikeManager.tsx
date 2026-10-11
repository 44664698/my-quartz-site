import { QuartzComponent, QuartzComponentConstructor } from "./types"

const LikeManager: QuartzComponent = () => {
  return (
    <div id="like-manager" style={{ marginTop: "1rem" }}></div>
  )
}

export default (() => LikeManager) satisfies QuartzComponentConstructor