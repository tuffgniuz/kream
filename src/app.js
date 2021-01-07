import { ArcRotateCamera, Color3, Color4, Engine, HemisphericLight, Scene, SceneLoader, StandardMaterial, Texture, Tools, Vector3 } from 'babylonjs'
import { Sneaker } from './sneaker'
import { TextureManager } from './textures'


const healGuard = document.querySelector('#heal-guard')
const toeGuard = document.querySelector('#toe-guard')
const laces = document.querySelector('#laces')
const sole = document.querySelector('#sole')
const soleFoam = document.querySelector('#sole-foam')
const textureBox = document.querySelector('#texture-box')
const rightSwoosh = document.querySelector('#right-swoosh')
const leftSwoosh = document.querySelector('#left-swoosh')
const resetAnimations = document.querySelector('#reset-animations')

const healGuardColors = document.querySelector('#heal-guard-colors')
const toeguardColors = document.querySelector('#toe-guard-colors')
const swooshColors = document.querySelector('#swoosh-colors')
// const tigerFur = document.querySelector('#tiger-fur')
// const pantherFur = document.querySelector('#panther-fur')
// const denim = document.querySelector('#denim')
// const knit = document.querySelector('#knit')

// const pomegranate = document.querySelector('#pomegranate')
// const shakespeare = document.querySelector('#shakespeare')

class App {

    constructor() {
        /*
         * set initial app properties and start the main function
         **/

        // get the canvas element from the html body
        this.canvas = document.querySelector("#stage")
        
        // initialize the babylon engine and scene
        this.engine = new Engine(this.canvas, true)
        this.scene = new Scene(this.engine)

        this.main()
    }

    main() {
        this.goToStage()
        
        this.engine.runRenderLoop(() => {
            this.scene.render()
        })

        window.addEventListener('resize', () => {
            this.engine.resize()
        })
    }

    materialPicker() {}
    
    goToStage() {
        let scene = new Scene(this.engine)  
        const light = new HemisphericLight('light', new Vector3(-10, 20, 10), scene)
        const camera = new ArcRotateCamera('camera', Tools.ToRadians(-60), Tools.ToRadians(60), 70, Vector3.Zero(), scene)
        
        scene.clearColor = new Color4(0,0,0,0.0000000000000001) 
        camera.attachControl(this.canvas, true)

        // camera behaviours
        camera.lowerRadiusLimit = 50
        camera.upperRadiusLimit = 120
        camera.useBouncingBehavior = true
        camera.useAutoRotationBehavior = true;

        // load the sneaker mesh
        const sneaker = new Sneaker(scene)     
        const textureManager = new TextureManager(scene)

        healGuard.addEventListener('click', () => {
            // sneaker.animateSoleAndSoleFoam()
            sneaker.animateTop()
            

            // toeGuardColors.style.display = 'hidden'
            toeguardColors.style.display = 'none'
            swooshColors.style.display = 'none'
            toeguardColors.style.display = 'none'
            healGuardColors.style.display = 'block'


            const pomegranate =  document.querySelector('#pomegranate-healguard')
            const shakespeare = document.querySelector('#shakespeare-healguard')

            textureManager.pomegranateHealGuard(pomegranate, scene)
            textureManager.shakespeareHealGuard(shakespeare, scene)

            // pomegranate.addEventListener('click', function () {
                
            //     const mesh1 = scene.getMeshByName('fabric_heal_guard')
            //     const myMaterial = new StandardMaterial('myMaterial', scene)
            //     myMaterial.diffuseColor = new Color3(2.4, .52, .52)
            //     mesh1.material = myMaterial
            //     // scene.dispose()
            // })
            

            // shakespeare.addEventListener('click', function () {
            //     const mesh2 = scene.getMeshByName('fabric_heal_guard')
            //     const myShakespeare1 = new StandardMaterial('myMaterial', scene)
            //     myShakespeare1.diffuseColor = new Color3(.82, 1.79, 2.17)
            //     mesh2.material = myShakespeare1
            // }) 
        })

        toeGuard.addEventListener('click', () => {
            sneaker.animateToeGuard()

            healGuardColors.style.display = 'none'
            toeguardColors.style.display = 'block'
            healGuardColors.style.display = 'none'
            swooshColors.style.display = 'none'

            const pomegranate =  document.querySelector('#pomegranate-toeguard')
            const shakespeare = document.querySelector('#shakespeare-toeguard')
            const hazeGreen = document.querySelector('#green-haze-toeguard')
            const plum = document.querySelector('#plum-toeguard')
            const confetti = document.querySelector('#confetti-toeguard')
            const tahitiGold = document.querySelector('#tahiti-gold-toeguard')

            textureManager.applyPomegranata(pomegranate, 'fabric_toe_guard', scene)
            textureManager.applyShakespeare(shakespeare, 'fabric_toe_guard', scene)
            textureManager.applyHaze(hazeGreen,          'fabric_toe_guard', scene)
            textureManager.applyPlum(plum,               'fabric_toe_guard', scene)
            textureManager.applyConfetti(confetti,       'fabric_toe_guard', scene)
            textureManager.applyTahitiGold(tahitiGold,   'fabric_toe_guard', scene)
        })

        sole.addEventListener('click', () => {
            sneaker.animateSole()
            
            // textureManager.pomegranateSole(pomegranate, scene)
            // textureManager.shakespeareSole(shakespeare, scene)

        })

        soleFoam.addEventListener('click', () => {
            sneaker.animateSoleAndSoleFoam()

        })

        rightSwoosh.addEventListener('click', () => {
            sneaker.animateSwooshRight()


            healGuardColors.style.display = 'none'
            toeguardColors.style.display = 'none'
            healGuardColors.style.display = 'none'
            swooshColors.style.display = 'block'


            const pomegranate =  document.querySelector('#pomegranate-swoosh')
            const shakespeare = document.querySelector('#shakespeare-swoosh')
            const hazeGreen = document.querySelector('#haze-swoosh')
            const plum = document.querySelector('#plum-swoosh')
            const confetti = document.querySelector('#confetti-swoosh')
            const tahitiGold = document.querySelector('#tahiti-gold-swoosh')

            textureManager.applyPomegranata(pomegranate, 'swoosh_right', scene)
            textureManager.applyShakespeare(shakespeare, 'swoosh_right', scene)
            textureManager.applyHaze(hazeGreen,          'swoosh_right', scene)
            textureManager.applyPlum(plum,               'swoosh_right', scene)
            textureManager.applyConfetti(confetti,       'swoosh_right', scene)
            textureManager.applyTahitiGold(tahitiGold,   'swoosh_right', scene)
        })
        

        resetAnimations.addEventListener('click', () => sneaker.resetAllAnimationGroups()) 

        this.scene = scene; 
    }
    
}

new App()
