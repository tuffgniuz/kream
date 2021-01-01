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

    const frameRate = 20;

    // ANIMATIONS
    const animSole = new BABYLON.Animation('animSole', 'position.y', frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

    const animSoleFoam = new BABYLON.Animation('animSoleFoam', 'position.y', frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

    const animFabricTrim = new BABYLON.Animation('animFabricTrim', 'position.y', frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

    const animFabricLiner = new BABYLON.Animation('animFabricLiner', 'position.y', frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

    const animNikeSwooshRight = new BABYLON.Animation('animNikeSwooshRight', 'position.z', frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)


    // import sneaker mesh
    const sneaker = BABYLON.SceneLoader.ImportMeshAsync('', '../assets/', 'nike-air.babylon', scene)
        .then( (result) => {
            // get meshes by name
            const airBubbleLeft = scene.getMeshByName('air_bubble_left')
            const sole = scene.getMeshByName('sole')
            const soleFoam = scene.getMeshByName('sole_foam')
            const fabricTrim = scene.getMeshByName('fabric_trim')
            const fabricLiner = scene.getMeshByName('fabric_liner')
            const swooshRight = scene.getMeshByName('swoosh_right')

            const soleKeys = []
            const soleFoamKeys = []
            const fabricLinerKeys = []
            const fabricTrimKeys = []
            const swooshRightKeys = []

            // animate the sole
            soleKeys.push({ frame: 0, value: 0 })
            soleKeys.push({ frame: 15, value: -2 })
            soleKeys.push({ frame: 30, value: -4 })

            // animate the soleFoam
            soleFoamKeys.push({ frame: 0, value: 0 })
            soleFoamKeys.push({ frame: 15, value: -1 })
            soleFoamKeys.push({ frame: 30,value: -2 })

            // animate the fabricLiner
            fabricLinerKeys.push({ frame: 0, value: 0 })
            fabricLinerKeys.push({ frame: 15, value: 1 })
            fabricLinerKeys.push({ frame: 30, value: 2 })

            // animate the fabricTrim
            fabricTrimKeys.push({ frame: 0, value: 0 })
            fabricTrimKeys.push({ frame: 15, value: 2 })
            fabricTrimKeys.push({ frame: 30, value: 4 })

            // animate the nike swoosh
            swooshRightKeys.push({ frame: 0, value: 0 })
            swooshRightKeys.push({ frame: 15, value: -2 })
            swooshRightKeys.push({ frame: 30, value: -4 })

            animSole.setKeys(soleKeys)
            animSoleFoam.setKeys(soleFoamKeys)
            animFabricLiner.setKeys(fabricLinerKeys)
            animFabricTrim.setKeys(fabricTrimKeys)
            animNikeSwooshRight.setKeys(swooshRightKeys)

            sole.animations = []
            sole.animations.push(animSole)
            
            soleFoam.animations = []
            soleFoam.animations.push(animSoleFoam)
            
            fabricLiner.animations = []
            fabricLiner.animations.push(animFabricLiner)
            fabricTrim.animations = []
            fabricTrim.animations.push(animFabricTrim)

            swooshRight.animations = []
            swooshRight.animations.push(animNikeSwooshRight)

            sneaker.actionManager = new BABYLON.ActionManager(scene)

            // scene.beginAnimation(soleFoam, 0, 30)
            // scene.beginAnimation(fabricLiner, 0, 30)
            // scene.beginAnimation(fabricTrim, 0, 30)
            // scene.beginAnimation(swooshRight, 0, 30)
    })

    return scene
}

const scene = createScene()

engine.runRenderLoop( () => {
    scene.render()
})

window.addEventListener('resize', () => {
    engine.resize()
})
