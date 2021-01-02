import { ActionManager, Animation, AnimationGroup, SceneLoader } from 'babylonjs'

export class Sneaker {

    constructor(scene) {
        this.scene = scene
        // sneaker mesh import
        this.sneaker = new SceneLoader.ImportMeshAsync('', '../assets/', 'nike-air.babylon', this.scene)
        this.sneaker.actionManager = new ActionManager(this.scene)

        // default frame rate is set to 20
        this.frameRate = 20

        // animations properties
        // fabric_heal_upper
        this.animfabricHealUpper = new Animation('animfabricHealUpper', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        // fabric_main_right
        this.animFabricMainRight = new Animation('animFabricMainRight', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        // fabric_main_left
        this.animFabricMainLeft = new Animation('animFabricMainLeft', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        // fabric_trim
        this.animFabricTrim = new Animation('animFabricTrim', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        // fabric_trim_front_left
        this.animFabricTrimFrontLeft = new Animation('animFabricTrimFrontLeft', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        // fabric_trim_front_right
        this.animFabricTrimFrontRight = new Animation('animFabricTrimFrontRight', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        // swoosh_right
        this.animSwooshRight = new Animation('animSwooshRight', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        // swoosh_left
        this.animSwooshLeft = new Animation('animSwooshLeft', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
    }

    animateMeshes() {
        this.sneaker
            .then((result) => {
                //--NODES
                const fabricHealUpper = this.scene.getMeshByName('fabric_heal_upper')
                const fabricMainRight = this.scene.getMeshByName('fabric_main_right')
                const fabricMainLeft = this.scene.getMeshByName('fabric_main_left')
                const fabricTrim = this.scene.getMeshByName('fabric_trim')
                const fabricTrimFrontRight = this.scene.getMeshByName('fabric_trim_front_right')
                const fabricTrimFrontLeft = this.scene.getMeshByName('fabric_trim_front_left')
                const swooshRight = this.scene.getMeshByName('swoosh_right')
                const swooshLeft = this.scene.getMeshByName('swoosh_left')

                // animation keys
                const 
            })
    }

    animateSole() {
        this.sneaker
            .then((result) => {
                const sole = this.scene.getMeshByName('sole')
                const soleKeys = []

                soleKeys.push({ frame: 0, value: 0 })
                soleKeys.push({ frame: 15, value: -3 })
                soleKeys.push({ frame: 30, value: -6 })

                animSole.setKeys(soleKeys)

                this.getSoleAnimation().setKeys(soleKeys)

                this.scene.beginAnimation(this.getSoleAnimation(), 0, 30)
            })
    }

    animeSoleFoam() {
        // animate the y position of the sole_foam mesh
        const animSoleFoam = new Animation('animeSoleFoam', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

        this.sneaker
            .then((result) => {
                const soleFoam = this.scene.getMeshByName('sole_foam')
                const soleFoamKeys = []

                soleFoamKeys.push({ frame: 0, value: 0 })
                soleFoamKeys.push({ frame: 15, value: -3 })
                soleFoamKeys.push({ frame: 30, value: -6 })

                animSoleFoam.setKeys(soleFoamKeys)

                soleFoam.animations = []
                soleFoam.animations.push(animSoleFoam)

                this.scene.beginAnimation(soleFoam, 0, 30)
            })
    }
}











