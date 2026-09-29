import { QuartzComponent, QuartzComponentConstructor } from "../types"

const CustomImage: QuartzComponent = () => {
  return (
    <div class="custom-image-container">
      <img src="/static/军团徽章.png" alt="军团徽章" />
    </div>
  )
}

CustomImage.css = `
.custom-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.custom-image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
`

export default (() => CustomImage) satisfies QuartzComponentConstructor