import { Animation, AnimationGroup, Color3, SceneLoader, StandardMaterial, Texture } from 'babylonjs'
import runOnce from './decorators'

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

        //--animation properties
        this.animatePositionX = new Animation('animatePositionX', 'position.x', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        this.animatePositionYNegativeDirection = new Animation('animatePositionYNegativeDirection', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        this.animatePositionYNegativeDirectionPlusDirection = new Animation('animatePositionYNegativeDirection', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        this.animatePositionZ = new Animation('animatePositionZ', 'position.z', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        
        //--animation groups
        this.soleAndSoleFoamAnimationGroup = new AnimationGroup('soleAndSoleFoamAnimationGroup')
        this.sneakerTopAnimationGroup = new AnimationGroup('sneakerTopAnimationGroup')
        this.swooshRightAndLeftAnimationGroup = new AnimationGroup('swooshRightAndLeftAnimationGroup')
    }

    resetAllAnimationGroups() {
        const stitching = this.scene.getMeshByName('stitching')

        stitching.setEnabled(true)

        this.soleAndSoleFoamAnimationGroup.reset()
        this.sneakerTopAnimationGroup.reset()
        this.swooshRightAndLeftAnimationGroup.reset()
    }

    // @runOnce
    animateTop() {

        this.sneaker.then((result) => {
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

            stitching.setEnabled(false)

            const keys = []

            keys.push({ frame: 0, value: 0 })
            keys.push({ frame: 15, value: 1 })
            keys.push({ frame: 30, value: 2 })

            this.animatePositionYNegativeDirectionPlusDirection.setKeys(keys)
            
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirectionPlusDirection, eyeLetsRight)
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirectionPlusDirection, eyeLetsLeft)
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirectionPlusDirection, laces)
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirectionPlusDirection, fabricLiner)
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirectionPlusDirection, fabricMainRight)
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirectionPlusDirection, fabricMainLeft)
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirectionPlusDirection, fabricUpperMid)
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirectionPlusDirection, fabricUpperMid2Right)
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirectionPlusDirection, fabricTrim)
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirectionPlusDirection, fabricTrimFrontRight)
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirectionPlusDirection, fabricTrimFrontLeft)
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirectionPlusDirection, fabricHealUpper)
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirectionPlusDirection, fabricFrontUpper)
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirectionPlusDirection, swooshRight)
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirectionPlusDirection, swooshLeft)
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirectionPlusDirection, tongueFront)
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirectionPlusDirection, tongueLabel)
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirectionPlusDirection, tongueTop)

            this.sneakerTopAnimationGroup.play()
        })
    }

    animateSole() {
        this.resetAllAnimationGroups()

        this.sneaker
            .then((result) => {
                const sole = this.scene.getMeshByName('sole')
        
                const keys = []

                keys.push({ frame: 0, value: 0 })
                keys.push({ frame: 15, value: -3 })
                keys.push({ frame: 30, value: -6 })

                this.animatePositionYNegativeDirection.setKeys(keys)

                sole.animations = []
                sole.animations.push(this.animatePositionYNegativeDirection)

                this.scene.beginAnimation(sole, 0, this.frameRate)
            })    
    }

    animateSoleAndSoleFoam() {
        this.sneaker
            .then((result) => {
                const airBubbleLeft = this.scene.getMeshByName('air_bubble_left')
                const airBubbleRight = this.scene.getMeshByName('air_bubble_right')
                const fabricInsole = this.scene.getMeshByName('fabric_insole')
                const sole = this.scene.getMeshByName('sole') 
                const soleFoam = this.scene.getMeshByName('sole_foam')

                const keys = []
        
                keys.push({ frame: 0, value: 0 })
                keys.push({ frame: 15, value: -1 })
                keys.push({ frame: 30, value: -2 })

                this.animatePositionYNegativeDirection.setKeys(keys)

                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirection, airBubbleLeft)
                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirection, airBubbleRight)
                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirection, fabricInsole)
                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirection, sole)
                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirection, soleFoam)

                this.soleAndSoleFoamAnimationGroup.play()
            })
    }

    animateSoleAndSoleFoamReverse() {
        this.sneaker
            .then((result) => {
                const airBubbleLeft = this.scene.getMeshByName('air_bubble_left')
                const airBubbleRight = this.scene.getMeshByName('air_bubble_right')
                const fabricInsole = this.scene.getMeshByName('fabric_insole')
                const sole = this.scene.getMeshByName('sole') 
                const soleFoam = this.scene.getMeshByName('sole_foam')

                const keys = []
        
                keys.push({ frame: 30, value: -2 })
                keys.push({ frame: 15, value: -1 })
                keys.push({ frame: 0, value: 0 })

                this.animatePositionYNegativeDirection.setKeys(keys)

                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirection, airBubbleLeft)
                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirection, airBubbleRight)
                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirection, fabricInsole)
                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirection, sole)
                this.soleAndSoleFoamAnimationGroup.addTargetedAnimation(this.animatePositionYNegativeDirection, soleFoam)

                this.soleAndSoleFoamAnimationGroup.play()
            })

    }

    // animateOnce(animation) {
    //     let called = false
        
    //     return function() {
    //         if (!called) {
    //             called = true
    //             return animation(this, arguments)
    //         }
    //     }
    // }

    animateSwooshRightAndLeft() {
        /* Animates the 'swoosh_right' mesh in the z position.
         */
        this.sneaker.then((result) => {
            const swooshRight = this.scene.getMeshByName('swoosh_right')
            const swooshLeft = this.scene.getMeshByName('swoosh_left')
            
            const keys = []

            keys.push({ frame: 0, value: 0 })
            keys.push({ frame: 15, value: -2 })
            keys.push({ frame: 30, value: -4 })

            this.animatePositionZ.setKeys(keys)

            this.swooshRightAndLeftAnimationGroup.addTargetedAnimation(this.animatePositionZ, swooshRight)
            this.swooshRightAndLeftAnimationGroup.addTargetedAnimation(this.animatePositionZ, swooshLeft)

            this.swooshRightAndLeftAnimationGroup.play()
        })
    }

    applyTexture(light, texture, mesh) {
        /* Takes (1) light of the scene, (2) texture to be applied and (3) the mesh the texture needs to be applied to
         */
        light.diffuse = new Color3(1, 1, 1)

        this.material.diffuseTexture = new Texture(texture, this.scene)

        this.sneaker.then((result) => { 
            const meshName = this.scene.getMeshByName(mesh)

            meshName.material = this.material
        })
    }

}


