import { ArcRotateCamera, Color4, Engine, HemisphericLight, Scene, SceneLoader, Tools, Vector3 } from 'babylonjs'
import { Sneaker } from './mesh'

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
        let cameraRotate = camera.useAutoRotationBehavior = true;
        

        // load the sneaker mesh
        const sneaker = new Sneaker(scene)

        // get nav items from the action-bar by #id
        const fabricGuard = document.querySelector('#fabric-guard')
        const laces = document.querySelector('#laces')
        const sole = document.querySelector('#sole')
        const soleFoam = document.querySelector('#sole-foam')
        const swoosh = document.querySelector('#swoosh')

        // const rotate = document.querySelector('#rotate')

        fabricGuard.addEventListener('click', e => {
            sneaker.animateTop()
            sneaker.animateSoleAndSoleFoam()
        })

        //--animate sole on click
        sole.addEventListener('click', e => {
            sneaker.animateSole()
        })

        soleFoam.addEventListener('click', e => {
            sneaker.animateSoleAndSoleFoam()
        })

        // rotate.addEventListener('click', e => {
        //     cameraRotate = false
        // })

        // set the scene to the start scene
        this.scene = scene;
    }

    customLaces(sneakerMesh) {
    }

    customSole(sneakerMesh) {

    }

    customSoleFoam(sneakerMesh) {
        /* Get's called when the user clicks on Sole Foam on the action-bar
         * -> takes a sneaker object as the parameter
         * -> animates the sole and sole_foam position.y negative direction 
         **/
    }

    customSwoosh(sneakerMesh) {

    } 

    loadScreen() {

    }

}

new App()
