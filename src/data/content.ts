import type { Post, Project } from "../types";

const minishell = new URL("../imgs/minishell.png", import.meta.url).href;
const fdf = new URL("../imgs/france.png", import.meta.url).href;
const push_swap = new URL("../imgs/pushswap.png", import.meta.url).href;

export const posts: Post[] = [
  {
    title: "Making a design system from\nscratch",
    date: "12 Feb 2020",
    tags: "Design, Pattern",
    description:
      "Amet minim mollit non deserunt ullamco est sit\naliqua dolor do amet sint. Velit officia consequat\nduis enim velit mollit. Exercitation veniam\nconsequat sunt nostrud amet.",
  },
  {
    title: "Creating pixel perfect icons in\nFigma",
    date: "12 Feb 2020",
    tags: "Figma, Icon Design",
    description:
      "Amet minim mollit non deserunt ullamco est sit\naliqua dolor do amet sint. Velit officia consequat\nduis enim velit mollit. Exercitation veniam\nconsequat sunt nostrud amet.",
  },
];

export const projects: Project[] = [
  {
    title: "Minishell",
    year: "2023",
    type: "C",
    description:
      "shell minimaliste inspiré de bash. L'objectif est de comprendre en profondeur le fonctionnement des processus, de la gestion des signaux, et de l'exécution de commandes dans un environnement UNIX.",
    imageUrl: minishell,
    githubUrl: "https://github.com/LacueyDavid/Minishell",
  },
  {
    title: "FDF - Wireframe",
    year: "2023",
    type: "C",
    description:
      "Visualiseur C de heightmaps en Wireframe : projection isométrique, tracé Bresenham, MiniLibX.",
    imageUrl: fdf,
    githubUrl: "https://github.com/LacueyDavid/FDF",
  },
  {
    title: "Push_swap",
    year: "2023",
    type: "C",
    description:
      "projet 42 consistant à trier une pile d'entiers en minimisant le nombre d'opérations (swap, push, rotate) en utilisant deux piles et des algorithmes optimisés.",
    imageUrl: push_swap,
    githubUrl: "https://github.com/LacueyDavid/push_swap",
  },
];
