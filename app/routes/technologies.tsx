import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { JsonLd } from "~/components/json-ld";
import { TechField } from "~/components/tech-field";
import { techKinds, technologies } from "~/data/technologies";
import { site } from "~/data/site";
import { pageMeta } from "~/lib/seo";
import type { Route } from "./+types/technologies";

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: "Technologies",
    description: `The stack ${site.owner.name} ships with at Pactum IO: AWS, TypeScript, React, AI, SaaS, Ethereum, Stripe, and the rest of the map.`,
    path: "/technologies",
  });
}

export default function Technologies() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) {
      return;
    }

    const onMove = (event: PointerEvent) => {
      const bounds = stage.getBoundingClientRect();
      stage.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
      stage.style.setProperty("--my", `${event.clientY - bounds.top}px`);
    };

    stage.addEventListener("pointermove", onMove);
    return () => stage.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${site.name} technologies`,
          itemListElement: technologies.map((tech, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: tech.label,
          })),
        }}
      />

      <Box className="tech-page" px={{ base: 4, md: 8 }} pt={{ base: 10, md: 12 }} pb="8">
        <Box maxW="7xl" mx="auto" mb={{ base: 6, md: 8 }}>
          <Text letterSpacing="0.18em" textTransform="uppercase" color="pactum.500" fontSize="xs" mb="3">
            Field kit
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight={{ base: "1.2", md: "1.15" }}
            fontWeight="700"
            color="white"
            maxW="3xl"
            mb="6"
          >
            The map I actually ship with.
          </Heading>
          <ul className="tech-legend">
            {techKinds.map((kind) => (
              <li key={kind.id} className={`tech-legend-item tech-legend-${kind.id}`}>
                <span className="tech-legend-swatch" />
                {kind.label}
              </li>
            ))}
          </ul>
        </Box>

        <Box ref={stageRef} className="tech-stage" as="section" aria-label="Technology word map">
          <div className="tech-glow" />
          <div className="tech-aurora" />
          <div className="tech-scan" />
          <TechField />
          <div className="tech-hud" />
          <ul className="tech-regions" aria-hidden="true">
            {techKinds.map((kind) => (
              <li
                key={kind.id}
                className={`tech-region tech-region-${kind.id}`}
                style={{ left: `${kind.x}%`, top: `${kind.y}%` }}
              >
                {kind.label}
              </li>
            ))}
          </ul>
          <ul className="tech-map">
            {technologies.map((tech) => (
              <li
                key={tech.label}
                className={`tech-word tech-word-${tech.weight} tech-word-${tech.kind}`}
                style={{
                  left: `${tech.x}%`,
                  top: `${tech.y}%`,
                  transform: `translate(-50%, -50%) rotate(${tech.rotate}deg)`,
                }}
              >
                {tech.label}
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </>
  );
}
