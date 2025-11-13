import type { Project } from "../types";

const minishell = new URL("../imgs/minishell.png", import.meta.url).href;
const fdf = new URL("../imgs/france.png", import.meta.url).href;
const push_swap = new URL("../imgs/pushswap.png", import.meta.url).href;

export const projects: Project[] = [
  {
    title: "Minishell",
    year: "2023",
    type: "C",
    description: "shell minimaliste inspiré de bash",
    imageUrl: minishell,
    githubUrl: "https://github.com/LacueyDavid/Minishell",
  },
  {
    title: "FDF - Wireframe",
    year: "2023",
    type: "C",
    description: "Visualiseur C de heightmaps en Wireframe",
    imageUrl: fdf,
    githubUrl: "https://github.com/LacueyDavid/FDF",
  },
  {
    title: "Push_swap",
    year: "2023",
    type: "C",
    description: "projet 42 consistant à trier une pile d'entiers",
    imageUrl: push_swap,
    githubUrl: "https://github.com/LacueyDavid/push_swap",
  },
];
