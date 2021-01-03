import { ActionManager, Animation, AnimationGroup, SceneLoader } from 'babylonjs'

export class Sneaker {
    /*
     * NOTES:
     * Interactities?
     * 1. Look inside shoe?
     *
     *
     * customizable parts
     * 1. swooshes
     * 2. laces
     * 3. sole
     * 4. sole Foam
     * */
    constructor(scene) {
        this.scene = scene

        // sneaker mesh import
        this.sneaker = new SceneLoader.ImportMeshAsync('', '../assets/', 'nike-air.babylon', this.scene)
        this.sneaker.actionManager = new ActionManager(this.scene)

        // default frame rate is set to 20
        this.frameRate = 30

        // [X] fabric_trim
        // [X] fabric_trim_front_right
        // [X] fabric_trim_front_left
        // f eyelets_right
        // eyelets_left
        // tonque_front
        // tongue_label
        // tonque_top
        // laces
        // fabric_heal_upper
        // fabric_main_right
        // fabric_main_left
        // fabric_upper_mid
        // fabric_upper_mid2_right

        // animations properties
        this.animAirBubbleLeft = new Animation('animAirBubbleLeft', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        this.animAirBubbleRight = new Animation('animAirBubbleRight', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        this.animFabricInsole = new Animation('animFabricInsole', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        this.animSole = new Animation('animSole', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        this.animSoleFoam = new Animation('animSoleFoam', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

        this.animFabricHealGuard = new Animation('animFabricHealGuard', 'position.z', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        this.animFabricToeGuard = new Animation('animFabricToeGuard', 'position.z', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

        //--animation groups
        this.fabricGuardAnimationGroup = new AnimationGroup('fabricGuardAnimationGroup')
        this.soleAndSoleFoamAnimationGroup = new AnimationGroup('soleAndSoleFoamAnimationGroup')
        this.sneakerTopAnimationGroup = new AnimationGroup('sneakerTopAnimationGroup')

    }

    animateTop() {

        this.sneaker.then((result) => {
            const animFabricMainRight = new Animation('animFabricMainRight', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animFabricMainLeft = new Animation('animFabricMainLeft', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animFabricTrim = new Animation('animFabricTrim', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animFabricTrimFrontLeft = new Animation('animFabricTrimFrontLeft', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animfabricHealUpper = new Animation('animfabricHealUpper', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animFabricTrimFrontRight = new Animation('animFabricTrimFrontRight', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animSwooshRight = new Animation('animSwooshRight', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animSwooshLeft = new Animation('animSwooshLeft', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

            const fabricMainRight = this.scene.getMeshByName('fabric_main_right')
            const fabricMainLeft = this.scene.getMeshByName('fabric_main_left')
            const fabricTrim = this.scene.getMeshByName('fabric_trim')
            const fabricTrimFrontRight = this.scene.getMeshByName('fabric_trim_front_right')
            const fabricTrimFrontLeft = this.scene.getMeshByName('fabric_trim_front_left')
            const fabricHealUpper = this.scene.getMeshByName('fabric_heal_upper')
            const swooshRight = this.scene.getMeshByName('swoosh_right')
            const swooshLeft = this.scene.getMeshByName('swoosh_left')

            const keys = []

            keys.push({ frame: 0, value: 0 })
            keys.push({ frame: 15, value: 3 })
            keys.push({ frame: 30, value: 6 })

            animFabricMainRight.setKeys(keys)
            animFabricMainLeft.setKeys(keys)
            animFabricTrim.setKeys(keys)
            animFabricTrimFrontRight.setKeys(keys)
            animFabricTrimFrontLeft.setKeys(keys)
            animfabricHealUpper.setKeys(keys)
            animSwooshRight.setKeys(keys)
            animSwooshLeft.setKeys(keys)

            this.sneakerTopAnimationGroup.addTargetedAnimation(animFabricMainRight, fabricMainRight)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animFabricMainLeft, fabricMainLeft)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animFabricTrim, fabricTrim)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animFabricTrimFrontRight, fabricTrimFrontRight)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animFabricTrimFrontLeft, fabricTrimFrontLeft)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animfabricHealUpper, fabricHealUpper)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animSwooshRight, swooshRight)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animSwooshLeft, swooshLeft)

            this.sneakerTopAnimationGroup.play()

        })
    }

    animateSole() {

        if (this.fabricGuardAnimationGroup.onAnimationGroupEndObservable || this.soleAndSoleFoamAnimationGroup.onAnimationGroupEndObservable) {
            this.fabricGuardAnimationGroup.reset()
            this.soleAndSoleFoamAnimationGroup.reset()
        }

        this.sneaker
            .then((result) => {
                const sole = this.scene.getMeshByName('sole')
        
                const keys = []

                keys.push({ frame: 0, value: 0 })
                keys.push({ frame: 15, value: -3 })
                keys.push({ frame: 30, value: -6 })

                this.animSole.setKeys(keys)

                sole.animations = []
                sole.animations.push(this.animSole)

                this.scene.beginAnimation(sole, 0, this.frameRate)
            })    
    }

    animateSoleAndSoleFoam(keyValue1 = -2, keyValue2 = -4) {
        this.sneaker
            .then((result) => {
                const airBubbleLeft = this.scene.getMeshByName('air_bubble_left')
                const airBubbleRight = this.scene.getMeshByName('air_bubble_right')
                const fabricInsole = this.scene.getMeshByName('fabric_insole')
                const sole = this.scene.getMeshByName('sole') 
                const soleFoam = this.scene.getMeshByName('sole_foam')

                const keys = []
        
                keys.push({ frame: 0, value: 0 })
                keys.push({ frame: 15, value: keyValue1 })
                keys.push({ frame: 30, value: keyValue2 })

                this.animAirBubbleLeft.setKeys(keys)
                this.animAirBubbleRight.setKeys(keys)
                this.animSole.setKeys(keys)
                this.animSoleFoam.setKeys(keys)
                this.animFabricInsole.setKeys(keys)

                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(this.animAirBubbleLeft, airBubbleLeft)
                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(this.animAirBubbleRight, airBubbleRight)
                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(this.animFabricInsole, fabricInsole)
                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(this.animSole, sole)
                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(this.animSoleFoam, soleFoam)

                this.soleAndSoleFoamAnimationGroup.play()
            })
    }

    applyTexture(texture) {

    }

}











