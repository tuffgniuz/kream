const stage = document.querySelector('#stage')
const engine = new BABYLON.Engine(stage, true)

const createScene = () => {
    // create scene space
    const scene = new BABYLON.Scene(engine)

    const hemisphericLight = new BABYLON.HemisphericLight('hemisphericLight', new BABYLON.Vector3(-10, 20, 10), scene)
    
    // add camera and attach to scene
    const camera = new BABYLON.ArcRotateCamera('freeCamera',
            BABYLON.Tools.ToRadians(45),
            BABYLON.Tools.ToRadians(45),
            100,
            BABYLON.Vector3.Zero(),
            scene)
    camera.attachControl(stage, true)

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

