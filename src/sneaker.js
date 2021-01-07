import { Animation, AnimationGroup, SceneLoader } from 'babylonjs'

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

        this.frameRate = 30 // default frame rate for mesh animation

        //--animation properties
        this.animatePositionX = new Animation('animatePositionX', 'position.x', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        this.animatePositionYNegativeDirection = new Animation('animatePositionYNegativeDirection', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        this.animatePositionYPositionDirection = new Animation('animatePositionYNegativeDirection', 'position.y', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        this.animatePositionZ = new Animation('animatePositionZ', 'position.z', this.frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)
        
        //--animation groups
        this.soleAndSoleFoamAnimationGroup = new AnimationGroup('soleAndSoleFoamAnimationGroup')
        this.sneakerTopAnimationGroup = new AnimationGroup('sneakerTopAnimationGroup')
        this.swooshRightGroup = new AnimationGroup('swooshRightAndLeftAnimationGroup')
        this.soleGroup = new AnimationGroup('soleGroup')
        this.toeGuardGroup = new AnimationGroup('toeGuardGroup')
    }

    resetAllAnimationGroups() {
        const stitching = this.scene.getMeshByName('stitching')

        stitching.setEnabled(true)

        this.soleAndSoleFoamAnimationGroup.reset()
        this.sneakerTopAnimationGroup.reset()
        this.swooshRightGroup.reset()
        this.soleGroup.reset()
        this.toeGuardGroup.reset()
    }

    // @runOnce
    animateTop() {

        this.sneaker.then((result) => {
            // const eyeLetsRight = this.scene.getMeshByName('eyelets_right')
            // const eyeLetsLeft = this.scene.getMeshByName('eyelets_left')
            // const laces = this.scene.getMeshByName('laces')
            // const fabricLiner = this.scene.getMeshByName('fabric_liner')
            // const fabricUpperMid = this.scene.getMeshByName('fabric_upper_mid')
            // const fabricUpperMid2Right = this.scene.getMeshByName('fabric_upper_mid2_right')
            // const fabricMainRight = this.scene.getMeshByName('fabric_main_right')
            // const fabricMainLeft = this.scene.getMeshByName('fabric_main_left')
            // const fabricTrim = this.scene.getMeshByName('fabric_trim')
            // const fabricTrimFrontRight = this.scene.getMeshByName('fabric_trim_front_right')
            // const fabricTrimFrontLeft = this.scene.getMeshByName('fabric_trim_front_left')
            // const fabricHealUpper = this.scene.getMeshByName('fabric_heal_upper')
            const fabricHealGuard = this.scene.getMeshByName('fabric_heal_guard')
            // const fabricFrontUpper = this.scene.getMeshByName('fabric_front_upper')
            // const swooshRight = this.scene.getMeshByName('swoosh_right')
            // const swooshLeft = this.scene.getMeshByName('swoosh_left')
            // const tongueFront = this.scene.getMeshByName('tongue_front')
            // const tongueLabel = this.scene.getMeshByName('tongue_label')
            // const tongueTop = this.scene.getMeshByName('tongue_top')

            const stitching = this.scene.getMeshByName('stitching')

            stitching.setEnabled(false)

            // const keys = []
            const xKeys = []

            // keys.push({ frame: 0, value: 0 })
            // keys.push({ frame: 15, value: 1 })
            // keys.push({ frame: 30, value: 2 })
            xKeys.push({ frame: 0, value: 0 })
            xKeys.push({ frame: 15, value: -1 })
            xKeys.push({ frame: 30, value: -2 })

            // this.animatePositionYPositionDirection.setKeys(keys)
            this.animatePositionX.setKeys(xKeys)
            
            // this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYPositionDirection, eyeLetsRight)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYPositionDirection, eyeLetsLeft)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYPositionDirection, laces)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYPositionDirection, fabricLiner)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYPositionDirection, fabricMainRight)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYPositionDirection, fabricMainLeft)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYPositionDirection, fabricUpperMid)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYPositionDirection, fabricUpperMid2Right)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYPositionDirection, fabricTrim)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYPositionDirection, fabricTrimFrontRight)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYPositionDirection, fabricTrimFrontLeft)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYPositionDirection, fabricHealUpper)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYPositionDirection, fabricFrontUpper)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYPositionDirection, swooshRight)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYPositionDirection, swooshLeft)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYPositionDirection, tongueFront)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYPositionDirection, tongueLabel)
            // this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionYPositionDirection, tongueTop)
            this.sneakerTopAnimationGroup.addTargetedAnimation(this.animatePositionX, fabricHealGuard)

            this.sneakerTopAnimationGroup.play()
        })
    }

    animateToeGuard() {
        const toeGuard = this.scene.getMeshByName('fabric_toe_guard')
        
        const keys = []

        keys.push({ frame: 0, value: 0 })
        keys.push({ frame: 15, value: 1})
        keys.push({ frame: 30, value: 2})

        this.animatePositionX.setKeys(keys)

        this.toeGuardGroup.addTargetedAnimation(this.animatePositionX, toeGuard)
        this.toeGuardGroup.play()
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

                this.soleGroup.addTargetedAnimation(this.animatePositionYNegativeDirection, sole)

                this.soleGroup.play()
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

    animateSwooshRight() {
        /* Animates the 'swoosh_right' mesh in the z position.
         */
        this.sneaker.then((result) => {
            const swooshRight = this.scene.getMeshByName('swoosh_right')
            // const swooshLeft = this.scene.getMeshByName('swoosh_left')
            
            const keys = []

            keys.push({ frame: 0, value: 0 })
            keys.push({ frame: 15, value: -2 })
            keys.push({ frame: 30, value: -4 })

            this.animatePositionZ.setKeys(keys)

            this.swooshRightGroup.addTargetedAnimation(this.animatePositionZ, swooshRight)
            // this.swooshRightAndLeftAnimationGroup.addTargetedAnimation(this.animatePositionZ, swooshLeft)

            this.swooshRightGroup.play()
        })
    }

}


