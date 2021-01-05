import { Animation, AnimationGroup, Color3, SceneLoader, StandardMaterial, Texture } from 'babylonjs'

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

        this.sneaker = new SceneLoader.ImportMeshAsync('', '../assets/', 'nike-air.babylon', this.scene)
        this.material = new StandardMaterial('material', this.scene)

        this.frameRate = 30 // default frame rate for mesh animations
        
        //--animation groups
        this.soleAndSoleFoamAnimationGroup = new AnimationGroup('soleAndSoleFoamAnimationGroup')
        this.sneakerTopAnimationGroup = new AnimationGroup('sneakerTopAnimationGroup')
    }

    resetAllAnimationGroups() {
        const stitching = this.scene.getMeshByName('stitching')
        stitching.setEnabled(true)
        this.soleAndSoleFoamAnimationGroup.reset()
        this.sneakerTopAnimationGroup.reset()
    }

    animateFabricGuards() {
        const animFabricHealGuard = new Animation('animFabricHealGuard', 'scaling.x')
        const fabricHealGuard = this.scene.getMeshByName('fabric_heal_guard')
        const fabricToeGuard = this.scene.getMeshByName('fabric_toe_guard')
    }

    animateTop() {

        this.sneaker.then((result) => {
            const animEyeLetsRight = new Animation('animEyeLetsRight', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.ANIMATIONLOOPMODE_CONSTANT)
            const animEyeLetsLeft = new Animation('animEyeLetsLeft', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.ANIMATIONLOOPMODE_CONSTANT)
            const animLaces = new Animation('laces', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animFabricLiner = new Animation('animFabricLiner', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animfabricHealUpper = new Animation('animfabricHealUpper', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animFabricUpperMid = new Animation('animFabricUpperMid', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animFabricUpperMid2Right = new Animation('fabricUpperMid2Right', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animFabricMainRight = new Animation('animFabricMainRight', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animFabricMainLeft = new Animation('animFabricMainLeft', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animFabricTrim = new Animation('animFabricTrim', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animFabricTrimFrontLeft = new Animation('animFabricTrimFrontLeft', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animFabricTrimFrontRight = new Animation('animFabricTrimFrontRight', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animFabricFrontUpper = new Animation('animFabricTrimFrontRight', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animSwooshRight = new Animation('animSwooshRight', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animSwooshLeft = new Animation('animSwooshLeft', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animTongueFront = new Animation('tongueFront', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animTongueLabel = new Animation('tongueLabel', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animTongueTop = new Animation('tongueTop', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

            const animStitching = new Animation('stitching', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animStitching1 = new Animation('stitching1', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animStitching2 = new Animation('stitching2', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animStitching3 = new Animation('stitching3', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)


            const eyeLetsRight = this.scene.getMeshByName('eyelets_right')
            const eyeLetsLeft = this.scene.getMeshByName('eyelets_left')
            const laces = this.scene.getMeshByName('laces')
            const fabricLiner = this.scene.getMeshByName('fabric_liner')
            const fabricUpperMid = this.scene.getMeshByName('fabric_upper_mid')
            const fabricUpperMid2Right = this.scene.getMeshByName('fabric_upper_mid2_right')
            const fabricMainRight = this.scene.getMeshByName('fabric_main_right')
            const fabricMainLeft = this.scene.getMeshByName('fabric_main_left')
            const fabricTrim = this.scene.getMeshByName('fabric_trim')
            const fabricTrimFrontRight = this.scene.getMeshByName('fabric_trim_front_right')
            const fabricTrimFrontLeft = this.scene.getMeshByName('fabric_trim_front_left')
            const fabricHealUpper = this.scene.getMeshByName('fabric_heal_upper')
            const fabricFrontUpper = this.scene.getMeshByName('fabric_front_upper')
            const swooshRight = this.scene.getMeshByName('swoosh_right')
            const swooshLeft = this.scene.getMeshByName('swoosh_left')
            const tongueFront = this.scene.getMeshByName('tongue_front')
            const tongueLabel = this.scene.getMeshByName('tongue_label')
            const tongueTop = this.scene.getMeshByName('tongue_top')

            const stitching = this.scene.getMeshByName('stitching')
            // const stitching1 = this.scene.getMeshByName('stitching1')
            // const stitching2 = this.scene.getMeshByName('stitching2')
            // const stitching3 = this.scene.getMeshByName('stitching3')

            stitching.setEnabled(false)

            const keys = []

            keys.push({ frame: 0, value: 0 })
            keys.push({ frame: 15, value: 1 })
            keys.push({ frame: 30, value: 2 })

            animEyeLetsRight.setKeys(keys)
            animEyeLetsLeft.setKeys(keys)
            animLaces.setKeys(keys)
            animFabricLiner.setKeys(keys)
            animFabricMainRight.setKeys(keys)
            animFabricMainLeft.setKeys(keys)
            animFabricUpperMid.setKeys(keys)
            animFabricUpperMid2Right.setKeys(keys)
            animFabricTrim.setKeys(keys)
            animFabricTrimFrontRight.setKeys(keys)
            animFabricTrimFrontLeft.setKeys(keys)
            animfabricHealUpper.setKeys(keys)
            animFabricFrontUpper.setKeys(keys)
            animSwooshRight.setKeys(keys)
            animSwooshLeft.setKeys(keys)
            animTongueFront.setKeys(keys)
            animTongueLabel.setKeys(keys)
            animTongueTop.setKeys(keys)
            // animStitching.setKeys(keys)
            // animStitching1.setKeys(keys)
            // animStitching2.setKeys(keys)
            // animStitching3.setKeys(keys)

            this.sneakerTopAnimationGroup.addTargetedAnimation(animEyeLetsRight, eyeLetsRight)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animEyeLetsLeft, eyeLetsLeft)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animLaces, laces)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animFabricLiner, fabricLiner)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animFabricMainRight, fabricMainRight)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animFabricMainLeft, fabricMainLeft)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animFabricUpperMid, fabricUpperMid)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animFabricUpperMid2Right, fabricUpperMid2Right)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animFabricTrim, fabricTrim)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animFabricTrimFrontRight, fabricTrimFrontRight)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animFabricTrimFrontLeft, fabricTrimFrontLeft)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animfabricHealUpper, fabricHealUpper)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animFabricFrontUpper, fabricFrontUpper)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animSwooshRight, swooshRight)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animSwooshLeft, swooshLeft)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animTongueFront, tongueFront)
            this.sneakerTopAnimationGroup.addTargetedAnimation(animTongueLabel, tongueLabel)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(animStitching, stitching)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(animStitching1, stitching1) 
            // this.sneakerTopAnimationGroup.addTargetedAnimation(animStitching2, stitching2) 
            // this.sneakerTopAnimationGroup.addTargetedAnimation(animStitching3, stitching3) 

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
                const animSole = new Animation('animSole', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
                const sole = this.scene.getMeshByName('sole')
        
                const keys = []

                keys.push({ frame: 0, value: 0 })
                keys.push({ frame: 15, value: -3 })
                keys.push({ frame: 30, value: -6 })

                animSole.setKeys(keys)

                sole.animations = []
                sole.animations.push(animSole)

                this.scene.beginAnimation(sole, 0, this.frameRate)
            })    
    }

    animateSoleAndSoleFoam() {
        this.sneaker
            .then((result) => {
                const animAirBubbleLeft = new Animation('animAirBubbleLeft', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
                const animAirBubbleRight = new Animation('animAirBubbleRight', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
                const animFabricInsole = new Animation('animFabricInsole', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
                const animSole = new Animation('animSole', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
                const animSoleFoam = new Animation('animSoleFoam', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)


                const airBubbleLeft = this.scene.getMeshByName('air_bubble_left')
                const airBubbleRight = this.scene.getMeshByName('air_bubble_right')
                const fabricInsole = this.scene.getMeshByName('fabric_insole')
                const sole = this.scene.getMeshByName('sole') 
                const soleFoam = this.scene.getMeshByName('sole_foam')

                const keys = []
        
                keys.push({ frame: 0, value: 0 })
                keys.push({ frame: 15, value: -1 })
                keys.push({ frame: 30, value: -2 })

                animAirBubbleLeft.setKeys(keys)
                animAirBubbleRight.setKeys(keys)
                animSole.setKeys(keys)
                animSoleFoam.setKeys(keys)
                animFabricInsole.setKeys(keys)

                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(animAirBubbleLeft, airBubbleLeft)
                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(animAirBubbleRight, airBubbleRight)
                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(animFabricInsole, fabricInsole)
                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(animSole, sole)
                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(animSoleFoam, soleFoam)

                this.soleAndSoleFoamAnimationGroup.play()
            })
    }

    animateSwooshRightAndLeft() {
        this.sneaker.then((result) => {
            const animSwooshRight = new Animation('animSwooshRight', 'position.z', BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
            const animSwooshLeft = new Animation('animSwooshLeft', 'position.z', BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

            const swooshRight = this.scene.getMeshByName('swoosh_right')
            const swooshLeft = this.scene.getMeshByName('swoosh_left')
            
            const keys = []



        })
    }

    applyTexture(light, texture, mesh) {
        light.diffuse = new Color3(1, 1, 1)

        this.material.diffuseTexture = new Texture(texture, this.scene)

        this.sneaker.then((result) => { 
            const meshName = this.scene.getMeshByName(mesh)

            meshName.material = this.material
        })
    }

}


