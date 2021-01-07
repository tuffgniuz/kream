import { Color3, StandardMaterial, Texture} from "babylonjs";

export class TextureManager {

    constructor(scene) {
        this.scene = scene 
    }

    pomegranateHealGuard(selector, scene) {
        selector.addEventListener('click', () => {

            const fabricHealGuard = scene.getMeshByName('fabric_heal_guard')
            const material = new StandardMaterial('material', scene)
            material.diffuseColor = new Color3(2.4, 0.52, 0.52)

            fabricHealGuard.material = material
        })
    }

    shakespeareHealGuard(selector, scene) {
        selector.addEventListener('click', () => {
            const mesh = scene.getMeshByName('fabric_heal_guard')
            const material = new StandardMaterial('material', scene)
            material.diffuseColor = new Color3(.82, 1.79, 2.17)

            mesh.material = material

        })
    }

    pomegranateToeGuard(selector, scene) {
        selector.addEventListener('click', () => {

            const mesh = scene.getMeshByName('fabric_toe_guard')
            const material = new StandardMaterial('material', scene)
            material.diffuseColor = new Color3(2.4, 0.52, 0.52)

            mesh.material = material
        })
    }

    shakespeareToeGuard(selector, scene) {
        selector.addEventListener('click', () => {
            const fabricHealGuard = scene.getMeshByName('fabric_toe_guard')
            const material = new StandardMaterial('material', scene)
            material.diffuseColor = new Color3(.82, 1.79, 2.17)

            fabricHealGuard.material = material

        })
    }

    pomegranateSole(selector, scene) {
        selector.addEventListener('click', () => {
            const soleMesh = scene.getMeshByName('sole')
            const material = new StandardMaterial('material', scene)
            material.diffuseColor = new Color3(2.4, 0.52, 0.52)
            soleMesh.material = material
        })
    }

    pomegranateRightSwoosh(selector, scene) {
        selector.addEventListener('click', () => {
            const mesh = scene.getMeshByName('swoosh_right')
            const material = new StandardMaterial('material', scene)
            material.diffuseColor = new Color3(2.4, 0.52, 0.52)
            mesh.material = material
        })

    }

    shakespeareRightSwoosh(selector, scene) {
        selector.addEventListener('click', () => {
            const mesh = scene.getMeshByName('swoosh_right')
            const material = new StandardMaterial('material', scene)
            material.diffuseColor = new Color3(.82, 1.79, 2.17)
            mesh.material = material
        })

    }

    shakespeareSole(selector, scene) {
        selector.addEventListener('click', () => {
            const soleMesh = scene.getMeshByName('sole')
            const material = new StandardMaterial('material', scene)
            material.diffuseColor = new Color3(.82, 1.79, 2.17)

            soleMesh.material = material

        })
    }



    applyTigerFur(material, mesh) {
        material.diffuseTexture = new Texture('./img/tiger-fur-texture.jpg', this.scene) 
        mesh.material = material
    }

    applyPantherFur(material, mesh) {
        material.diffuseTexture = new Texture('./img/seamless-panther-fur-texture.jpg', this.scene)
        mesh.material = material
    }

    applyDenim(material, mesh) {
        material.diffuseTexture = new Texture('./img/denim.jpg', this.scene)
        mesh.material = material
    }

    applyKnit(material, mesh) {
        material.diffuseTexture = new Texture('./img/knit2.jpg', this.scene)
        mesh.material = material
    }

    applyTigerFurToHealGuard() {
        
    }
}
