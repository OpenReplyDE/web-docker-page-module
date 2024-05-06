import './style.css'
import './page-module'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <page-module />
  </div>
`
