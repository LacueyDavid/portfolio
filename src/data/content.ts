import type { Post, Project } from "../types";

const img1 = new URL("../imgs/1.png", import.meta.url).href;
const img2 = new URL("../imgs/2.png", import.meta.url).href;
const minishell = new URL("../imgs/minishell.png", import.meta.url).href;

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
    title: "Designing Dashboards",
    year: "2020",
    type: "Dashboard",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.\nVelit officia consequat duis enim velit mollit.\nExercitation veniam consequat sunt nostrud amet.",
    imageUrl: img1,
  },
  {
    title: "Vibrant Portraits of 2020",
    year: "2018",
    type: "illustration",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.\nVelit officia consequat duis enim velit mollit.\nExercitation veniam consequat sunt nostrud amet.",
    imageUrl: img2,
  },
  {
    title: "Minishell",
    year: "2023",
    type: "C99",
    description:
      "shell minimaliste inspiré de bash. L'objectif est de comprendre en profondeur le fonctionnement des processus, de la gestion des signaux, et de l'exécution de commandes dans un environnement UNIX.",
    imageUrl: minishell,
  },
];
