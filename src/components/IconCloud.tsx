import { useEffect, useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface IconCloudProps {
  images: string[]
}

export function IconCloud({ images }: IconCloudProps) {
  const groupRef = useRef<THREE.Group>(null)
  const [textures, setTextures] = useState<Array<{ texture: THREE.Texture; index: number }>>([])

  // Generate stable positions in a sphere
  const positions = useMemo(() => {
    const pos: [number, number, number][] = []
    const count = images.length

    for (let i = 0; i < count; i++) {
      const radius = 3 + Math.random() * 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      pos.push([x, y, z])
    }
    return pos
  }, [images.length])

  useEffect(() => {
    const loader = new THREE.TextureLoader()
    const loadedTextures: Array<{ texture: THREE.Texture; index: number }> = []
    let loadedCount = 0

    images.forEach((url, index) => {
      loader.load(
        url,
        (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace
          loadedTextures.push({ texture, index })
          loadedCount++
          if (loadedCount === images.length) {
            setTextures(loadedTextures)
          }
        },
        undefined,
        () => {
          // Silently skip failed loads
          loadedCount++
          if (loadedCount === images.length) {
            setTextures(loadedTextures)
          }
        }
      )
    })

    return () => {
      loadedTextures.forEach(({ texture }) => texture.dispose())
    }
  }, [images])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.1
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <group ref={groupRef}>
      {textures.map(({ texture, index }) => {
        const [x, y, z] = positions[index] || [0, 0, 0]
        return (
          <sprite
            key={`${index}-${texture.uuid}`}
            position={[x, y, z]}
            scale={[1, 1, 1]}
          >
            <spriteMaterial
              map={texture}
              transparent
              opacity={0.9}
            />
          </sprite>
        )
      })}
    </group>
  )
}
