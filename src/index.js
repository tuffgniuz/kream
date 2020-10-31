import { Engine, FreeCamera, HemisphericLight, Scene, SceneLoader, Vector3 } from 'babylonjs';
import './main.css';

const stage = document.querySelector('#stage')
const engine = new Engine(stage, true)

const createScene = () => {
    // create scene space
    const scene = new Scene(engine)
    
    // add camera and attach to scene
    const camera = new FreeCamera('freeCamera', new Vector3(0, 1, -10), scene)
    camera.attachControl(stage)
    
    // create light
    const hemisphericLight = new HemisphericLight('hemisphericLight', new Vector3(0, 10, 0), scene)

    return scene
}

const scene = createScene()

engine.runRenderLoop( () => {
    scene.render()
})

window.addEventListener('resiz3e', () => {
    engine.resize()
})
