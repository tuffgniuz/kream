import * as BABYLON from 'babylonjs'

const stage = document.querySelector('#stage')
const engine = new BABYLON.Engine(stage, true)

const createScene = () => {
    const scene = new BABYLON.Scene(engine)    

    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(-10, 20, 10), scene)

    const camera = new BABYLON.ArcRotateCamera('camera',
        BABYLON.Tools.ToRadians(45),
        BABYLON.Tools.ToRadians(45),
        100,
        BABYLON.Vector3.Zero(),
        scene)
    camera.attachControl(stage, true)

    // TRANSPARENT CANVAS
    scene.clearColor = new BABYLON.Color4(0,0,0,0.0000000000000001);

    const animSole = new BABYLON.Animation('animSole', 'position.y', 30, BABYLON.Animation.ANIMATIONTYPE_SIZE,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

    const animSoleFoam = new BABYLON.Animation('animSoleFoam', 'position.y', 30, BABYLON.Animation.ANIMATIONTYPE_SIZE,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

    // import sneaker mesh
    const sneaker = BABYLON.SceneLoader.ImportMeshAsync('', '../assets/', 'nike-air.babylon', scene)
        .then( (result) => {
            // get meshes by name
            const airBubbleLeft = scene.getMeshByName('air_bubble_left')
            const sole = scene.getMeshByName('sole')
            const soleFoam = scene.getMeshByName('sole_foam')

            const soleKeys = []
            const soleFoamKeys = []

            soleKeys.push({
                frame: 0,
                value: 0,
            })

            soleKeys.push({
                frame: 30,
                value: -10,
            })

            soleFoamKeys.push({
                frame: 0,
                value: 0,
            })

            soleFoamKeys.push({
                frame: 30,
                value: -5,
            })


            animSole.setKeys(soleKeys)
            animSoleFoam.setKeys(soleFoamKeys)

            sole.animations = []
            sole.animations.push(animSole)
            soleFoam.animations = []
            soleFoam.animations.push(animSoleFoam)


            scene.beginAnimation(sole, 0, 30)
            scene.beginAnimation(soleFoam, 0, 30)
    })

    // sneaker.then((result) => {
    //     console.log(scene.getMeshByName('air_bubble_left'))
    // })

    // sneaker.actionManger = new BABYLON.ActionManager(scene)

    return scene
}

const scene = createScene()

engine.runRenderLoop( () => {
    scene.render()
})

window.addEventListener('resize', () => {
    engine.resize()
})
