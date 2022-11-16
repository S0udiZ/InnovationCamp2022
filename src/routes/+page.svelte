<script>
    import Logo from "../img/Logo Jelling.webp";

    import Model from "../models/Skjold.glb"

    import * as Three from 'three'
    import * as Utils from 'three/src/math/MathUtils'
    import * as Threlte from "@threlte/core";
    import * as Extra from '@threlte/extras'
</script>

<div class="bg-black text-white min-h-screen relative">
    <div class="grid grid-cols-2 mb-2">
        <button class="border rounded-lg w-fit h-fit py-1 px-14 mx-auto my-auto font-norse text-xl font-bold">Hjem</button>
        <img src={Logo} alt="">
    </div>
    <section class="px-4">
        <h1 class="font-norse text-4xl font-semibold text-center py-6">Skjoldet</h1>
        <div class="relative w-full h-60 mb-3">
            <div class="border border-white rounded-lg scene">
                <Threlte.Canvas>
                    <Threlte.PerspectiveCamera position={{ x: 0.7, y: 0.7, z: 0.7 }} >
                        <Threlte.OrbitControls autoRotate />
                    </Threlte.PerspectiveCamera>
                    <Threlte.AmbientLight color="white" intensity={0.2} />
                    <Threlte.DirectionalLight
                        color="white"
                        intensity={2}
                        position={{ x: 10, y: 10}}
                        shadow={{ camera: { top: 8 },}}
                    />
                    <Extra.GLTF url={Model} rotation={{x:45, y:0, z:0}}/>
                </Threlte.Canvas>
            </div>
        </div>
        <p class="font-bahn px-1">
            Skjold fra vikingetiden er sjældne fund nutidens verden. Dette ses ved f.eks. ved at der kun er fundet et i hele Danmark - ved Trelleborg i 2008. Og at der kun er to fund i hele norden.
            <br>
            Skjoldene var lavet af tynde fyrreplanker, der i sig selv ikke var særligt holdbare. Men ved at belægge dem med dyreskind opnåede vikingerne betragteligt større styrke på deres skjold.
        </p>
    </section>
    <button class="border rounded-md w-fit h-fit py-1 px-5 font-norse text-xl font-bold absolute bottom-10 left-1/3">Til kolektion</button>
</div>

<style>
    .scene {
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
    }
</style>