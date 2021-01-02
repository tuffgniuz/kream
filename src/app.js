import { ArcRotateCamera, Color4, Engine, HemisphericLight, Scene, SceneLoader, Tools, Vector3 } from 'babylonjs'
import { Sneaker } from './mesh'

class App {

    constructor() {
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
        scene.clearColor = new Color4(0,0,0,0.0000000000000001)

        const camera = new ArcRotateCamera(
            'camera',
            Tools.ToRadians(-60),
            Tools.ToRadians(60),
            70,
            Vector3.Zero(),
            scene)

        const light = new HemisphericLight('light', new Vector3(-10, 20, 10), scene)

        camera.attachControl(this.canvas, true)

        // load the sneaker mesh
        const sneaker = new Sneaker(scene)
        
        console.log(sneaker.getSole())

        // set the scene to the start scene
        this.scene = scene;
    }

}

new App()
