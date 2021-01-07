import { Color3, StandardMaterial, Texture } from "babylonjs";

export class TextureManager {

    constructor(scene) {
        this.scene = scene 
    }

    applyPomegranata(selector, meshName, scene) {
        selector.addEventListener('click', () => {

            const fabricHealGuard = scene.getMeshByName(meshName)
            const material = new StandardMaterial('material', scene)
            material.diffuseColor = new Color3(2.4, 0.52, 0.52)

            fabricHealGuard.material = material
        })
    }

    applyShakespeare(selector, meshName, scene) {
        selector.addEventListener('click', () => {
            const mesh = scene.getMeshByName(meshName)
            const material = new StandardMaterial('material', scene)
            material.diffuseColor = new Color3(.82, 1.79, 2.17)

            mesh.material = material

        })
    }

    applyHaze(selector, meshName, scene) {
        selector.addEventListener('click', () => {

            const mesh = scene.getMeshByName(meshName)
            const material = new StandardMaterial('material', scene)
            material.diffuseColor = new Color3(1, 1.52, 1.17)

            mesh.material = material
        })
    }

    applyPlum(selector, meshName, scene) {
        selector.addEventListener('click', () => {

            const mesh = scene.getMeshByName(meshName)
            const material = new StandardMaterial('material', scene)
            material.diffuseColor = new Color3(1.45, .61, 1.36)

            mesh.material = material
        })

    }

    applyConfetti(selector, meshName, scene) {
        selector.addEventListener('click', () => {

            const mesh = scene.getMeshByName(meshName)
            const material = new StandardMaterial('material', scene)
            material.diffuseColor = new Color3(2.33, 2.12, .96)

            mesh.material = material
        })

    }

    applyTahitiGold(selector, meshName, scene) {
        selector.addEventListener('click', () => {

            const mesh = scene.getMeshByName(meshName)
            const material = new StandardMaterial('material', scene)
            material.diffuseColor = new Color3(2.32, 1.26, .4)

            mesh.material = material
        })

    }
}
