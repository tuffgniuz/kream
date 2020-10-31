const stage = document.querySelector('#stage')
const engine = new BABYLON.Engine(stage, true)

const createScene = () => {
    // create scene space
    const scene = new BABYLON.Scene(engine)
    
    // add camera and attach to scene
    const camera = new BABYLON.ArcRotateCamera('freeCamera', 10, 5, -80, new BABYLON.Vector3(0, 10, 0), scene)
    camera.attachControl(stage, true)
    
    // create light
    const hemisphericLight = new BABYLON.HemisphericLight('hemisphericLight', new BABYLON.Vector3(-10, 20, 10), scene)

    // import sneaker model
    const sneaker = BABYLON.SceneLoader.ImportMesh('', './assets/', 'sneaker2.babylon', scene);

    return scene
}

const scene = createScene()

engine.runRenderLoop( () => {
    scene.render()
})

window.addEventListener('resize', () => {
    engine.resize()
})

